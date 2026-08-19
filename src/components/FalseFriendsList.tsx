import { falseFriends } from "@/content/falseFriends";

export function FalseFriendsList() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {falseFriends.map((pair) => (
        <details
          key={pair.polish}
          className="group rounded-sm border border-rule bg-paper px-4 py-3 open:bg-paper-dim/60"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
            <span>
              <span className="font-display text-lg font-semibold text-ink">{pair.polish}</span>
              <span className="ml-2 text-sm text-ink-faint">≠ {pair.looksLikeEnglish}</span>
            </span>
            <span
              aria-hidden
              className="flex-none text-ink-faint transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 border-t border-rule pt-3 text-sm leading-relaxed text-ink-soft">
            <p>
              Po polsku to po prostu {pair.polishMeaning}. Po angielsku szukaj słowa{" "}
              <strong className="text-cobalt">{pair.correctEnglish}</strong>.
            </p>
            <p className="mt-2">{pair.note}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
