import { T, Var, Num, DateTime } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import { getTranslatedEpisodes, getTranslatedShows } from "@/data/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const gt = await getGT();
  const episodes = await getTranslatedEpisodes(locale);
  const shows = await getTranslatedShows();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header title={gt("Podcast Directory")} />

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

        <section className="mb-12">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            {gt("Shows")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {shows.map((show) => (
              <Link
                key={show.slug}
                href={`/show/${show.slug}`}
                className="border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded border ${show.categoryStyle}`}
                  >
                    {show.category}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">
                  {show.name}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {show.desc}
                </p>
                <T>
                  <p className="text-xs text-neutral-600 mt-2">
                    <Var name="count">{show.episodeCount}</Var> episodes
                  </p>
                </T>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            {gt("Latest Episodes")}
          </h3>
          <div className="space-y-4">
            {episodes.map((ep) => {
              const audioSrc = ep.audio?.[locale] ?? ep.audio?.en;
              return (
                <article
                  key={ep.id}
                  className="border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <Link href={`/episode/${ep.slug}`}>
                        <h4 className="text-base font-semibold text-neutral-100 mb-0.5 hover:text-neutral-300 transition-colors">
                          {ep.title}
                        </h4>
                      </Link>
                      <Link
                        href={`/show/${ep.showSlug}`}
                        className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                      >
                        {ep.show}
                      </Link>
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
                  {audioSrc && (
                    <audio
                      controls
                      preload="none"
                      className="w-full h-8 mb-2 [&::-webkit-media-controls-panel]:bg-neutral-800"
                    >
                      <source src={audioSrc} type="audio/mpeg" />
                    </audio>
                  )}
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
                        <Var name="duration">
                          {formatDuration(ep.duration)}
                        </Var>
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
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
