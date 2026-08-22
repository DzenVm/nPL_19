import { cacheLife } from "next/cache";
import { getNextIntake } from "@/lib/nextIntake";

function daysUntilLabel(daysUntil: number) {
  if (daysUntil === 0) return "właśnie dziś";
  if (daysUntil === 1) return "jutro";
  return `za ${daysUntil} dni`;
}

/**
 * Cached and revalidated hourly rather than computed per request, so this
 * renders identically for every visitor and every crawler: no user-agent
 * based rendering branch, just a cached calendar fact.
 */
export async function StartDateWidget() {
  "use cache";
  cacheLife("hours");
  const intake = getNextIntake();

  return (
    <div className="flex flex-col gap-1 rounded-sm border border-cobalt/25 bg-cobalt-soft/40 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-3">
      <p className="text-sm font-semibold text-cobalt-deep">
        Najbliższy start grupy początkującej: <span className="font-display">{intake.label}</span>
      </p>
      <p className="text-sm text-ink-soft">
        ({daysUntilLabel(intake.daysUntil)}. Nowe grupy otwieramy w każdy poniedziałek, to zwykły
        grafik zajęć, nie sztuczny licznik.)
      </p>
    </div>
  );
}
