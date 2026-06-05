import AVFoundation
import Foundation
import AppKit

let src = URL(fileURLWithPath: "img/IMG_7976.mov")
let outMp4 = URL(fileURLWithPath: "public/hero.mp4")
let poster = URL(fileURLWithPath: "public/hero-poster.jpg")
let trimSeconds = 20.0

let asset = AVURLAsset(url: src)
let sem = DispatchSemaphore(value: 0)

Task {
    do {
        let vTracks = try await asset.loadTracks(withMediaType: .video)
        guard let vTrack = vTracks.first else { print("ERR: no video track"); exit(1) }
        let duration = try await asset.load(.duration)
        let endSec = min(trimSeconds, CMTimeGetSeconds(duration))
        let range = CMTimeRange(start: .zero,
                                end: CMTime(seconds: endSec, preferredTimescale: 600))

        let comp = AVMutableComposition()
        guard let compTrack = comp.addMutableTrack(withMediaType: .video,
                                                   preferredTrackID: kCMPersistentTrackID_Invalid) else {
            print("ERR: no comp track"); exit(1)
        }
        try compTrack.insertTimeRange(range, of: vTrack, at: .zero)
        compTrack.preferredTransform = try await vTrack.load(.preferredTransform)

        try? FileManager.default.removeItem(at: outMp4)
        guard let export = AVAssetExportSession(asset: comp,
                                                presetName: AVAssetExportPreset1280x720) else {
            print("ERR: cannot create export session"); exit(1)
        }
        export.outputURL = outMp4
        export.outputFileType = .mp4
        export.shouldOptimizeForNetworkUse = true

        await withCheckedContinuation { (cont: CheckedContinuation<Void, Never>) in
            export.exportAsynchronously { cont.resume() }
        }
        if export.status != .completed {
            print("ERR export: \(String(describing: export.error))"); exit(1)
        }

        // poster frame at 1s
        let gen = AVAssetImageGenerator(asset: asset)
        gen.appliesPreferredTrackTransform = true
        gen.requestedTimeToleranceBefore = .zero
        gen.requestedTimeToleranceAfter = .zero
        let cg = try await gen.image(at: CMTime(seconds: 1, preferredTimescale: 600)).image
        let rep = NSBitmapImageRep(cgImage: cg)
        if let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.82]) {
            try data.write(to: poster)
        }
        print("OK")
        exit(0)
    } catch {
        print("ERR: \(error)"); exit(1)
    }
}
sem.wait()
