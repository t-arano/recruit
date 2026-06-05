import { COMPANY, LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">{COMPANY.name}</p>
            <p className="mt-3 text-sm text-navy-100/80">{COMPANY.address}</p>
            <p className="mt-1 text-sm text-navy-100/80">TEL：{COMPANY.tel}</p>
            <p className="mt-4 text-xs text-navy-100/60">
              社訓「{ "安全・誠実・団結・実行・創意" }」
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a
              href={LINKS.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-amber-accent underline-offset-4 hover:underline"
            >
              採用に応募する →
            </a>
            <a
              href={LINKS.corporate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy-100/80 transition hover:text-white"
            >
              コーポレートサイト
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-navy-100/50">
          © {new Date().getFullYear()} {COMPANY.name}
        </div>
      </div>
    </footer>
  );
}
