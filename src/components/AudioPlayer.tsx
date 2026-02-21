import { T, Var } from "gt-next";
import { getGT } from "gt-next/server";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default async function AudioPlayer({
  duration,
  audioSrc,
}: {
  duration: number;
  audioSrc?: string;
}) {
  const gt = await getGT();
  const total = formatDuration(duration);

  if (audioSrc) {
    return (
      <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50">
        <audio
          controls
          preload="none"
          className="w-full h-8 [&::-webkit-media-controls-panel]:bg-neutral-800"
        >
          <source src={audioSrc} type="audio/mpeg" />
        </audio>
        <div className="flex items-center justify-between mt-2 text-xs text-neutral-500">
          <span>0:00</span>
          <span>{total}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/50">
      <div className="flex items-center gap-3">
        <button
          className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center flex-shrink-0 hover:bg-neutral-300 transition-colors"
          aria-label={gt("Play")}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </button>
        <div className="flex-1">
          <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full w-0 bg-neutral-400 rounded-full" />
          </div>
          <div className="flex items-center justify-between mt-1.5 text-xs text-neutral-500">
            <span>0:00</span>
            <span>{total}</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-neutral-600 mt-2 text-center">
        <T>Audio preview unavailable</T>
      </p>
    </div>
  );
}
