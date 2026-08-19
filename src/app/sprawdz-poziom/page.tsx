import type { Metadata } from "next";
import { LevelQuiz } from "@/components/LevelQuiz";

export const metadata: Metadata = {
  title: "Sprawdź swój poziom",
  description:
    "Krótka samoocena poziomu angielskiego (A1–C2) — sześć pytań, dwie minuty, żadnego testu z punktacją do zaznaczenia na ślepo.",
};

export default function SprawdzPoziomPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Test poziomu</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Zanim zadzwonisz, sprawdź, gdzie mniej więcej jesteś
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        To nie jest test z jedną poprawną odpowiedzią i limitem czasu. To sześć pytań o to, jak
        radzisz sobie dziś — z rozumieniem, mówieniem, pisaniem i czytaniem. Odpowiadaj tak, jak
        naprawdę jest, nie jak chciałbyś, żeby było — im szczerzej, tym trafniejszy wynik.
      </p>

      <div className="prose-article mt-6">
        <p>
          Wynik to orientacyjny poziom według skali CEFR (A1–C2), tej samej, której używa się w
          europejskim systemie oceny znajomości języków. Nie zastępuje rozmowy z lektorem — na
          bezpłatnej lekcji próbnej i tak sprawdzimy poziom dokładniej, w rozmowie — ale daje ci
          punkt odniesienia, zanim jeszcze się umówisz.
        </p>
      </div>

      <div className="mt-8">
        <LevelQuiz />
      </div>
    </div>
  );
}
