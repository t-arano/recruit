import type { Metadata } from "next";
import { COMPANY, asset } from "@/lib/site";

const APPLY_URL =
  "https://wagasyade-saiyo.jp/daiwakensetsu/recruitment/detail/4011199/";

export const metadata: Metadata = {
  title: `10tダンプドライバー | ${COMPANY.name} 採用`,
  description:
    "長距離なし・地場配送のみ。大阪の現場を毎日いったり来たり、夜は家に帰れる。1人1台の専用10tダンプで、まちの土台を運ぶ仕事の魅力を紹介します。",
};

const APPEALS = [
  {
    no: "01",
    title: "長距離なし。地場配送だけ。",
    body: "運ぶ範囲は大阪府内の現場が中心。県をまたぐ長距離運行や泊まりはありません。慣れた道を、無理のないペースで走ります。",
  },
  {
    no: "02",
    title: "夜は、ちゃんと家に帰れる。",
    body: "朝出社して、夕方には帰社。土日祝はしっかり休み。家族との時間も、自分の時間も、毎日の暮らしを大切にできる働き方です。",
  },
  {
    no: "03",
    title: "手積み・手降ろしは、ほぼなし。",
    body: "土砂や資材の積み込み・荷下ろしは重機が担当。ドライバーは運転に集中できます。体力勝負ではない、長く続けられる仕事です。",
  },
  {
    no: "04",
    title: "相棒は、1人1台の専用ダンプ。",
    body: "毎日乗るのは自分専用の10tダンプ。ドライブレコーダー・バックカメラ・デジタコを完備し、安心して運転に向き合えます。",
  },
];

// 「ある1日の流れ」セクションは現在非表示。再表示時はこの定義と下部の <section> のコメントを外す。
// const SCHEDULE = [
//   { time: "8:00", title: "出社・現場へ", body: "車両点検をして、その日の現場へ出発します。" },
//   { time: "8:30", title: "運搬スタート", body: "現場と処分場の間を数往復。土砂や資材を運びます。" },
//   { time: "12:00", title: "昼休憩", body: "しっかり休んで、午後に備えます。" },
//   { time: "13:00", title: "午後の運搬", body: "引き続き、近距離中心で運搬業務。" },
//   { time: "17:00", title: "帰社・退社", body: "車両を清掃して、その日は終了。夜は自分の時間です。" },
// ];

const REASONS = [
  {
    title: "創業60年以上の安定基盤",
    body: "公共工事・道路工事が中心だから、仕事が途切れにくい。腰を据えて長く働ける環境です。",
  },
  {
    title: "ISO認証取得の総合建設業",
    body: "ISO9001・14001を取得。品質と環境に真面目に向き合う会社で、安心して働けます。",
  },
  {
    title: "40代・50代が活躍中",
    body: "ベテランドライバーが多数在籍。落ち着いた雰囲気の中で、無理なく働けます。",
  },
  {
    title: "未経験・ブランクも歓迎",
    body: "ダンプ未経験でも、まずは先輩の横乗りからスタート。久しぶりのハンドルも大丈夫です。",
  },
];

export default function DumpPage() {
  return (
    <div id="top">
      {/* ① ヒーロー */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/dump-hero.jpg")})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 from-5% via-navy-950/85 via-45% to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-28 md:py-40">
          <p className="mb-4 flex items-center gap-2.5 text-lg font-bold tracking-wide text-amber-accent md:text-xl">
            <span className="inline-block h-6 w-1.5 rounded-full bg-amber-accent" />
            10tダンプドライバー募集
          </p>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-wider text-navy-100">
            {COMPANY.area}・地場配送
          </p>
          <h1 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight md:text-5xl">
            まちの土台を、
            <br />
            <span className="text-amber-accent">運ぶ。</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/90 md:text-lg">
            長距離なし、毎日家に帰れる。大阪の現場を相棒のダンプで
            いったり来たり。道路も、造成も、暮らしの土台は
            ダンプが運ぶ土砂から始まります。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-accent px-7 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-amber-accent-dark hover:text-white"
            >
              この仕事に応募する
              <span>→</span>
            </a>
            <a
              href="#appeal"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition hover:border-amber-accent hover:text-amber-accent"
            >
              仕事の魅力を見る
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ② 仕事内容 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            en="THE WORK"
            ja="道路も、造成も。舞台は、大阪じゅうの現場。"
            sub="大阪府内の建設現場（道路・造成工事など）で、土砂や建設資材の運搬を担います。運ぶのは地場のみ、長距離はありません。慣れた道で、まちづくりの「動脈」を支える仕事です。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                h: "土砂・資材の運搬",
                p: "現場と処分場の間を、近距離で何往復も。まちの土台を支える物流です。",
              },
              {
                h: "車両の点検・清掃",
                p: "毎日乗る相棒だから、しっかり手入れ。安全な一日のはじまりです。",
              },
              {
                h: "搬出入のサポート",
                p: "積み込み・荷下ろしは重機が担当。運転に集中できる体制です。",
              },
            ].map((c) => (
              <div
                key={c.h}
                className="rounded-2xl border border-navy-100 bg-navy-50/40 p-7"
              >
                <h3 className="text-lg font-bold text-navy-900">{c.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ ダンプの仕事の魅力 */}
      <section
        id="appeal"
        className="relative overflow-hidden bg-navy-900 text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/business-detail01.jpg")})` }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="text-xs tracking-[0.3em] text-amber-accent">WHY DUMP</p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            このダンプの仕事の、ここが魅力。
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-100/80">
            同じ「ダンプ」でも、働き方は会社によって大きく違います。
            大和建設のダンプの仕事は、無理なく長く続けられることが自慢です。
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {APPEALS.map((a) => (
              <div
                key={a.no}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <span className="text-sm font-bold text-amber-accent">
                  {a.no}
                </span>
                <h3 className="mt-2 text-xl font-bold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-100/80">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ 1日の流れ（非表示中：再表示するにはコメントを外す） */}
      {/* <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
          <SectionHeading
            en="A DAY"
            ja="ある1日の流れ"
            sub="朝出社して、夕方には退社。規則正しいリズムで働けるのも、地場配送ならでは。"
          />
          <ol className="mt-12 space-y-2">
            {SCHEDULE.map((s, i) => (
              <li key={s.time} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-amber-accent">
                    {s.time}
                  </span>
                  {i < SCHEDULE.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-navy-200" />
                  )}
                </div>
                <div className="pb-8 pt-3">
                  <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section> */}

      {/* ⑤ 相棒の車両 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-amber-accent-dark">
                YOUR MACHINE
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy-900 md:text-3xl">
                相棒は、1人1台の専用10tダンプ。
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                毎日同じ車に乗るから、クセも調子も自分が一番わかる。
                安全装備もしっかり整っていて、安心して運転に向き合えます。
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "ドライブレコーダー完備",
                  "バックカメラ完備",
                  "デジタルタコグラフ完備",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm font-medium text-navy-800"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-accent/15 text-xs font-bold text-amber-accent-dark">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${asset("/business-detail01.jpg")})`,
                }}
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-navy-950/70 px-4 py-1.5 text-xs font-medium text-white">
                10t DUMP TRUCK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ 安定して働ける理由 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            en="WHY DAIWA"
            ja="安心して、長く働ける理由"
            sub="60年以上、近畿の暮らしを足元から支えてきた総合建設業。だから、ダンプの仕事にも切れ目がありません。"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <div
                key={r.title}
                className="rounded-2xl border border-navy-100 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold text-amber-accent-dark">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold text-navy-900">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ 最終CTA */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/staff.webp")})` }}
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="text-xs tracking-[0.3em] text-amber-accent">JOIN US</p>
          <h2 className="mt-4 text-2xl font-bold leading-relaxed md:text-3xl">
            慣れた道を走りながら、
            <br />
            まちの土台をつくる。
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-navy-100/80">
            「長距離はもう疲れた」「毎日家に帰りたい」——そんな方こそ、
            大和建設のダンプの仕事はぴったりです。まずは気軽にご応募ください。
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-accent px-9 py-4 text-base font-bold text-navy-950 transition hover:bg-amber-accent-dark hover:text-white"
          >
            この仕事に応募する
            <span>→</span>
          </a>
          <p className="mt-6 text-xs text-navy-100/60">
            {COMPANY.name}　TEL：{COMPANY.tel}
          </p>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  en,
  ja,
  sub,
}: {
  en?: string;
  ja: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      {en && (
        <p className="text-xs tracking-[0.3em] text-amber-accent-dark">{en}</p>
      )}
      <h2 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl">{ja}</h2>
      {sub && <p className="mt-4 text-sm leading-relaxed text-mute">{sub}</p>}
    </div>
  );
}
