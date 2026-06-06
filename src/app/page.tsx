import JobCards from "@/components/JobCards";
import { COMPANY, LINKS, STATS, MERITS, VOICES, CREDO, asset } from "@/lib/site";

export default function Home() {
  return (
    <div id="top">
      {/* ① ヒーロー */}
      <section className="relative overflow-hidden bg-white text-navy-900">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={asset("/hero-poster.jpg")}
        >
          <source src={asset("/hero.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-48% to-transparent to-82%" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 py-28 md:py-36">
          <p className="mb-4 flex items-center gap-2.5 text-lg font-bold tracking-wide text-amber-accent-dark md:text-xl">
            <span className="inline-block h-6 w-1.5 rounded-full bg-amber-accent" />
            大和建設採用サイト
          </p>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white/50 px-4 py-1.5 text-xs tracking-wider text-navy-700">
            {COMPANY.area}・大規模重機土木工事
          </p>
          <h1 className="max-w-2xl text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            誠実に、真面目に、前向きに、諦めない心で。
            <br />
            <span className="text-amber-accent-dark">
              地域に貢献できる仕事を目指しています。
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-800/90 md:text-lg">
            道路も、河川も、まちの土台づくりも。65年以上、近畿の暮らしを足元から
            支えてきた{COMPANY.name}で、一緒に働きませんか。
          </p>
          <a
            href="#jobs"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-accent px-7 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-amber-accent-dark hover:text-white"
          >
            自分に合う仕事を見る
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ② 職種分岐 */}
      <section id="jobs" className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            en="OUR JOBS"
            ja="あなたの仕事を、選ぶ"
            sub="大和建設では、3つの職種で仲間を募集しています。気になる仕事の専用ページで、もっと深く知ってください。"
          />
          <div className="mt-12">
            <JobCards />
          </div>
        </div>
      </section>

      {/* ③ 数字で見る */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/business-detail01.jpg")})` }}
        />
        <div className="absolute inset-0 bg-navy-950/50" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <p className="text-center text-xs tracking-[0.3em] text-amber-accent">
            DAIWA IN NUMBERS
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold md:text-3xl">
            数字で見る大和建設
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-bold leading-none">
                  <span className="text-5xl text-amber-accent md:text-6xl">
                    {s.value}
                  </span>
                  <span className="ml-1 text-lg">{s.unit}</span>
                </p>
                <p className="mt-3 text-sm text-navy-100/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ 働く魅力 */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            en="WHY DAIWA"
            ja="大和建設で働く魅力"
            sub="職種は違っても、ここで働く理由は共通しています。"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {MERITS.map((m, i) => (
              <div
                key={m.title}
                className="rounded-2xl border border-navy-100 bg-navy-50/40 p-7"
              >
                <span className="text-sm font-bold text-amber-accent-dark">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold text-navy-900">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ 社員の声 */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading en="VOICE" ja="働く仲間の声" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {VOICES.map((v) => (
              <figure
                key={v.name}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-sm"
              >
                <blockquote className="flex-1 text-base leading-relaxed text-ink">
                  「{v.quote}」
                </blockquote>
                <figcaption className="mt-5 text-sm font-medium text-navy-700">
                  {v.name}
                </figcaption>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy-600 hover:text-navy-900"
                >
                  この人の仕事を見る →
                </a>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 想い・社訓 */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${asset("/staff.webp")})` }}
        />
        <div className="absolute inset-0 bg-navy-950/65" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="text-xs tracking-[0.3em] text-amber-accent">OUR CREDO</p>
          <p className="mt-8 text-2xl font-bold leading-relaxed md:text-3xl">
            {CREDO.message}
          </p>
          <p className="mt-6 text-sm text-navy-100/80">
            この心を大切に、一人ひとりの幸せと自己実現を追い求めています。
          </p>
          <div className="mt-10 inline-block rounded-full border border-white/20 px-6 py-2 text-sm tracking-wider">
            社訓　{CREDO.motto}
          </div>
        </div>
      </section>

      {/* ⑦ 再分岐 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            ja="気になった仕事の、専用ページへ"
            sub="それぞれの職種で、仕事の中身・給与事例・成長のステップを詳しく紹介しています。"
          />
          <div className="mt-12">
            <JobCards />
          </div>

          <div className="mt-14 rounded-2xl bg-navy-50 px-6 py-8 text-center">
            <p className="text-sm text-mute">
              職種が決まっている方・すぐに応募したい方はこちら
            </p>
            <a
              href={LINKS.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-6 py-3 text-sm font-bold text-navy-900 transition hover:bg-navy-900 hover:text-white"
            >
              採用応募ページへ進む →
            </a>
          </div>
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
