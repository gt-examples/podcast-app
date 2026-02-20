import { T, Var, Num, DateTime } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import {
  getTranslatedEpisodes,
  getTranslatedShows,
} from "@/data/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const SHOW_SLUGS = [
  "code-and-culture",
  "lingua-franca",
  "frame-by-frame",
  "market-signals",
  "neural-pathways",
];

const SHOW_EPISODE_MAP: Record<string, string[]> = {
  "code-and-culture": [
    "why-your-app-speaks-like-a-robot",
    "building-for-a-global-audience",
  ],
  "lingua-franca": [
    "the-architecture-of-language",
    "preserving-endangered-languages",
  ],
  "frame-by-frame": ["lost-in-translation-film-and-subtitles"],
  "market-signals": ["the-economics-of-multilingual-markets"],
  "neural-pathways": ["teaching-machines-to-understand-context"],
};

export function generateStaticParams() {
  return SHOW_SLUGS.map((slug) => ({ slug }));
}

export default async function ShowPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const gt = await getGT();

  const shows = await getTranslatedShows();
  const show = shows.find((s) => s.slug === slug);
  if (!show) notFound();

  const allEpisodes = await getTranslatedEpisodes(locale);
  const episodeSlugs = SHOW_EPISODE_MAP[slug] ?? [];
  const episodes = episodeSlugs
    .map((s) => allEpisodes.find((e) => e.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header title={gt("Podcast Directory")} />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {gt("All Episodes")}
        </Link>

        <div className="mb-8">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded border ${show.categoryStyle} mb-3 inline-block`}
          >
            {show.category}
          </span>
          <h1 className="text-2xl font-semibold text-neutral-100 mb-2">
            {show.name}
          </h1>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            {show.desc}
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {show.longDesc}
          </p>
        </div>

        <section className="mb-10 border border-neutral-800 rounded-lg p-5">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("Host")}
          </h2>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-neutral-500"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200">
                {show.hostName}
              </p>
              <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                {show.hostBio}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <T>
            <h2 className="text-lg font-semibold text-neutral-100 mb-4">
              <Var name="count">{episodes.length}</Var> Episodes
            </h2>
          </T>
          <div className="space-y-3">
            {episodes.map(
              (ep) =>
                ep && (
                  <Link
                    key={ep.id}
                    href={`/episode/${ep.slug}`}
                    className="block border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="text-sm font-semibold text-neutral-200">
                        {ep.title}
                      </h3>
                      <span className="text-xs text-neutral-500 whitespace-nowrap">
                        {formatDuration(ep.duration)}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {ep.desc}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-neutral-600">
                      <span>
                        <DateTime>{new Date(ep.date)}</DateTime>
                      </span>
                      <T>
                        <span>
                          <Num>{ep.listens}</Num> listens
                        </span>
                      </T>
                    </div>
                  </Link>
                )
            )}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
