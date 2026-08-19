import { connection } from "next/server";
import { getNextIntake } from "@/lib/nextIntake";

function daysUntilLabel(daysUntil: number) {
  if (daysUntil === 0) return "właśnie dziś";
  if (daysUntil === 1) return "jutro";
  return `za ${daysUntil} dni`;
}

export async function StartDateWidget() {
  await connection();
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

export function StartDateWidgetFallback() {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-cobalt/25 bg-cobalt-soft/40 px-5 py-4">
      <p className="text-sm text-ink-soft">Sprawdzamy najbliższy termin startu grupy…</p>
    </div>
  );
}
