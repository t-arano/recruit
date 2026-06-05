import { JOBS } from "@/lib/site";

export default function JobCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {JOBS.map((job) => (
        <a
          key={job.id}
          href={job.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-700 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-lg ring-1 ring-amber-accent/0 transition duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-amber-accent/60 md:p-9"
        >
          <span className="absolute inset-x-0 top-0 h-1.5 bg-amber-accent" />
          <span className="inline-flex w-fit items-center rounded-full bg-amber-accent/15 px-3 py-1 text-xs font-bold tracking-wider text-amber-accent">
            職種で見る
          </span>
          <p className="mt-5 text-sm font-medium text-amber-accent">
            {job.lead}
          </p>
          <h3 className="mt-1 text-2xl font-bold text-white md:text-3xl">
            {job.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-100/80">
            {job.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-navy-100"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-amber-accent px-6 py-3.5 text-sm font-bold text-navy-950 shadow-md transition group-hover:bg-amber-accent-dark group-hover:text-white">
            専用ページを見る
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </a>
      ))}
    </div>
  );
}
