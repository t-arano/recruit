import { COMPANY, LINKS } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur supports-[backdrop-filter]:bg-navy-900/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-wide text-white">
            {COMPANY.name}
          </span>
          <span className="text-[10px] tracking-[0.3em] text-amber-accent">
            RECRUIT
          </span>
        </a>

        <nav className="flex items-center gap-6">
          <a
            href={LINKS.corporate}
            className="hidden text-sm text-navy-100 transition hover:text-white sm:inline"
          >
            トップページ
          </a>
          <a
            href="#jobs"
            className="hidden text-sm text-navy-100 transition hover:text-white sm:inline"
          >
            仕事を知る
          </a>
          <a
            href="#about"
            className="hidden text-sm text-navy-100 transition hover:text-white sm:inline"
          >
            会社を知る
          </a>
          <a
            href={LINKS.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/30 px-3 py-1.5 text-xs font-medium text-white transition hover:border-amber-accent hover:text-amber-accent"
          >
            応募はこちら
          </a>
        </nav>
      </div>
    </header>
  );
}
