import { T, Var, Num, DateTime } from "gt-next";
import { getGT } from "gt-next/server";
import Link from "next/link";
import { getTranslatedEpisodes } from "@/data/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { notFound } from "next/navigation";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const SLUGS = [
  "why-your-app-speaks-like-a-robot",
  "the-architecture-of-language",
  "building-for-a-global-audience",
  "lost-in-translation-film-and-subtitles",
  "the-economics-of-multilingual-markets",
  "teaching-machines-to-understand-context",
  "preserving-endangered-languages",
];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const gt = await getGT();
  const episodes = await getTranslatedEpisodes(locale);

  const episode = episodes.find((e) => e.slug === slug);
  if (!episode) notFound();

  const related = (episode.relatedIds ?? [])
    .map((id) => episodes.find((e) => e.id === id))
    .filter(Boolean);

  const audioSrc = episode.audio?.[locale] ?? episode.audio?.en;

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

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded border ${episode.categoryStyle}`}
            >
              {episode.category}
            </span>
            <Link
              href={`/show/${episode.showSlug}`}
              className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              {episode.show}
            </Link>
          </div>
          <h1 className="text-2xl font-semibold text-neutral-100 mb-3">
            {episode.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span>
              <DateTime>{new Date(episode.date)}</DateTime>
            </span>
            <span>{formatDuration(episode.duration)}</span>
            <T>
              <span>
                <Num>{episode.listens}</Num> listens
              </span>
            </T>
          </div>
        </div>

        <div className="mb-8">
          <AudioPlayer duration={episode.duration} audioSrc={audioSrc} />
        </div>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-neutral-100 mb-3">
            {gt("About this episode")}
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            {episode.desc}
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {episode.longDesc}
          </p>
        </section>

        {episode.guestName && episode.guestBio && (
          <section className="mb-10 border border-neutral-800 rounded-lg p-5">
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">
              {gt("Guest")}
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
                  {episode.guestName}
                </p>
                <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                  {episode.guestBio}
                </p>
              </div>
            </div>
          </section>
        )}

        {episode.timestamps && episode.timestamps.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-neutral-100 mb-3">
              {gt("Timestamps")}
            </h2>
            <div className="space-y-2">
              {episode.timestamps.map((ts, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm py-1.5 border-b border-neutral-800/50 last:border-0"
                >
                  <span className="text-neutral-500 font-mono text-xs w-12 flex-shrink-0">
                    {ts.time}
                  </span>
                  <span className="text-neutral-300">{ts.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-neutral-100 mb-4">
              {gt("Related Episodes")}
            </h2>
            <div className="space-y-3">
              {related.map(
                (ep) =>
                  ep && (
                    <Link
                      key={ep.id}
                      href={`/episode/${ep.slug}`}
                      className="block border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors"
                    >
                      <h3 className="text-sm font-semibold text-neutral-200 mb-1">
                        {ep.title}
                      </h3>
                      <p className="text-xs text-neutral-500">{ep.show}</p>
                    </Link>
                  )
              )}
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
}
