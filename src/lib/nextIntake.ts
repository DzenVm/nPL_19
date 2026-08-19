const WARSAW_TZ = "Europe/Warsaw";

const WEEKDAY_INDEX: Record<string, number> = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 7,
};

export type NextIntake = {
  daysUntil: number;
  label: string;
};

function warsawParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: WARSAW_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map((part) => [part.type, part.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    weekdayIso: WEEKDAY_INDEX[parts.weekday] ?? 1,
  };
}

/**
 * New beginner/intermediate groups open every Monday. This computes the real
 * next Monday from the server clock in the Europe/Warsaw calendar, so the
 * date on screen is never stale or fabricated — just today's schedule fact.
 */
export function getNextIntake(now: Date = new Date()): NextIntake {
  const current = warsawParts(now);
  const daysUntil = (8 - current.weekdayIso) % 7;

  const noonUtc = Date.UTC(current.year, current.month - 1, current.day, 12, 0, 0);
  const target = new Date(noonUtc + daysUntil * 86_400_000);

  const label = new Intl.DateTimeFormat("pl-PL", {
    timeZone: WARSAW_TZ,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(target);

  return { daysUntil, label };
}
