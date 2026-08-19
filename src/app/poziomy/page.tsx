import type { Metadata } from "next";
import Link from "next/link";
import { levels } from "@/content/levels";

export const metadata: Metadata = {
  title: "Poziomy A1–C2",
  description:
    "Pełny opis sześciu poziomów zaawansowania — od zupełnych podstaw po biegłość bliską native speakerowi — z przykładami tego, co realnie potrafisz na każdym z nich.",
};

export default function PoziomyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Poziomy</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Sześć poziomów, opisanych bez żargonu
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Skala A1–C2 pochodzi z ogólnoeuropejskich ram odniesienia dla języków — my dokładamy do
        niej to, co zwykle pomija oficjalny opis: kto naprawdę zaczyna na danym poziomie i co się
        zmienia, gdy się z niego wychodzi.
      </p>

      <div className="mt-12 flex flex-col gap-14">
        {levels.map((level) => (
          <article key={level.code} id={level.code} className="scroll-mt-24 border-t border-rule pt-8">
            <div className="flex items-baseline gap-4">
              <p className="font-display text-4xl font-semibold text-cobalt">{level.code}</p>
              <h2 className="font-display text-2xl font-semibold text-ink">{level.name}</h2>
            </div>

            <div className="mt-5 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Kto zwykle zaczyna tutaj
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{level.startingPoint}</p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Co się zmienia
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{level.whatChanges}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Po tym poziomie potrafisz między innymi
                </p>
                <ul className="mt-2 flex flex-col gap-2.5 text-sm text-ink-soft">
                  {level.sampleCanDo.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-ochre" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-3 border-t border-rule pt-8">
        <Link
          href="/sprawdz-poziom"
          className="rounded-sm bg-cobalt px-6 py-3 text-sm font-semibold text-paper hover:bg-cobalt-deep"
        >
          Sprawdź, który poziom pasuje do ciebie
        </Link>
        <Link
          href="/kontakt"
          className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-ink/40"
        >
          Umów lekcję próbną
        </Link>
      </div>
    </div>
  );
}
