import { T, Var, Num, DateTime } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default async function Home() {
  const gt = await getGT();

  const episodes = [
    {
      id: 1,
      title: gt("The Architecture of Language"),
      show: gt("Lingua Franca"),
      desc: gt("How the structure of language shapes our understanding of the world, from syntax trees to semantic fields."),
      duration: 2820,
      date: "2026-02-15",
      category: gt("Linguistics"),
      categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      listens: 14200,
    },
    {
      id: 2,
      title: gt("Building for a Global Audience"),
      show: gt("Code and Culture"),
      desc: gt("A deep dive into internationalization engineering: handling right-to-left scripts, pluralization rules, and locale-aware formatting."),
      duration: 3540,
      date: "2026-02-12",
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      listens: 28700,
    },
    {
      id: 3,
      title: gt("Lost in Translation: Film and Subtitles"),
      show: gt("Frame by Frame"),
      desc: gt("Why translating dialogue for cinema is an art form, and how subtitle choices can change the meaning of a scene."),
      duration: 2460,
      date: "2026-02-10",
      category: gt("Culture"),
      categoryStyle: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      listens: 9800,
    },
    {
      id: 4,
      title: gt("The Economics of Multilingual Markets"),
      show: gt("Market Signals"),
      desc: gt("How businesses that localize early capture disproportionate market share in non-English-speaking regions."),
      duration: 1980,
      date: "2026-02-08",
      category: gt("Business"),
      categoryStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      listens: 41300,
    },
    {
      id: 5,
      title: gt("Teaching Machines to Understand Context"),
      show: gt("Neural Pathways"),
      desc: gt("From statistical models to transformer architectures: the evolution of machine translation and what comes next."),
      duration: 4080,
      date: "2026-02-05",
      category: gt("Technology"),
      categoryStyle: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      listens: 63500,
    },
    {
      id: 6,
      title: gt("Preserving Endangered Languages"),
      show: gt("Lingua Franca"),
      desc: gt("The race to document and digitize languages spoken by fewer than a thousand people before they disappear."),
      duration: 3180,
      date: "2026-02-01",
      category: gt("Linguistics"),
      categoryStyle: "bg-violet-500/10 text-violet-400 border-violet-500/20",
      listens: 7200,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Podcast Directory")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/podcast-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            {gt("Discover podcasts from around the world")}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              Browse episodes covering language, technology, culture, and
              business. All content is fully translated with locale-aware
              formatting for numbers and dates.
            </T>
          </p>
        </div>

        <div className="space-y-4">
          {episodes.map((ep) => (
            <article
              key={ep.id}
              className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-neutral-100 mb-0.5">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{ep.show}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded border whitespace-nowrap ${ep.categoryStyle}`}
                >
                  {ep.category}
                </span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                {ep.desc}
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <T>
                  <span className="flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <Var name="duration">{formatDuration(ep.duration)}</Var>
                  </span>
                </T>
                <span>
                  <DateTime>{new Date(ep.date)}</DateTime>
                </span>
                <T>
                  <span className="flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <Num>{ep.listens}</Num>
                  </span>
                </T>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-600 leading-relaxed">
            <T>
              This is an example application built with General Translation to
              demonstrate internationalization. All podcast data is fictional.
            </T>
          </p>
        </footer>
      </main>
    </div>
  );
}
