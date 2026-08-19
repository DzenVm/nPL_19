import type { Metadata } from "next";
import Link from "next/link";
import { methodPrinciples } from "@/content/method";

export const metadata: Metadata = {
  title: "Metoda nauczania",
  description:
    "Jak dokładnie wygląda nauka angielskiego: kolejność mówienia i gramatyki, powtórki rozłożone w czasie, anatomia jednej lekcji i sposób poprawiania błędów.",
};

const reviewSchedule = [
  { when: "Dzień 1", what: "Lekcja, na której słowo lub struktura pojawia się pierwszy raz — w kontekście, nie na liście." },
  { when: "Dzień 2", what: "Krótkie pisemne podsumowanie przypomina, co się pojawiło — sama lektura, bez ćwiczeń." },
  { when: "Dzień 7", what: "Słowo wraca w nowym kontekście na kolejnej lekcji, zwykle w innym zdaniu niż za pierwszym razem." },
  { when: "Dzień 21", what: "Trzecie spotkanie ze słowem — jeśli do tego momentu utrwaliło się w czynnym użyciu, wypada z rotacji." },
  { when: "Dzień 60", what: "Kontrolne sprawdzenie w naturalnej rozmowie, bez uprzedzenia, że akurat o to słowo chodzi." },
];

const lessonAnatomy = [
  { time: "0–5 min", label: "Rozgrzewka", body: "Swobodna rozmowa o tym, co się działo od ostatniej lekcji — bez poprawek, chodzi o rozruszanie języka, nie o poprawność." },
  { time: "5–20 min", label: "Nowy materiał", body: "Struktura lub słownictwo wprowadzane w kontekście konkretnej sytuacji, nie jako izolowana reguła do zapamiętania." },
  { time: "20–40 min", label: "Ćwiczenia produktywne", body: "Mówisz i piszesz, używając nowego materiału — lektor notuje błędy, nie przerywając wypowiedzi." },
  { time: "40–55 min", label: "Rozmowa swobodna", body: "Nowy materiał wraca naturalnie w luźniejszej rozmowie, żeby się zakorzenić poza ćwiczeniem." },
  { time: "55–60 min", label: "Podsumowanie", body: "Wspólny przegląd zanotowanych błędów i zapowiedź, co wróci w podsumowaniu następnego dnia." },
];

export default function MetodaPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Metoda</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Metoda, nie sekret
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Poniżej to, co dzieje się na lekcjach, opisane na tyle konkretnie, żeby dało się to
        zweryfikować na pierwszym spotkaniu — nie ogólnikowe hasła o „nowoczesnym podejściu”.
      </p>

      <ol className="mt-8 grid gap-2.5 border-y border-rule py-6 sm:grid-cols-2">
        {methodPrinciples.map((principle, index) => (
          <li key={principle.title} className="flex gap-3 text-sm text-ink-soft">
            <span className="font-display font-semibold text-ochre">{index + 1}.</span>
            <span>{principle.title}</span>
          </li>
        ))}
      </ol>

      <div className="prose-article">
        <h2>Dlaczego kolejność ma znaczenie</h2>
        <p>
          W większości szkolnych programów gramatyka idzie przed mówieniem — najpierw reguła,
          potem próba jej użycia. Dla dorosłego, który już potrafi budować myśli w jednym języku,
          to kolejność odwrotna do naturalnej. Zaczynamy od próby wypowiedzenia myśli po angielsku,
          nawet niedoskonałej, a regułę gramatyczną wprowadzamy jako wyjaśnienie tego, co już
          próbowałeś powiedzieć. Dzięki temu reguła ma się do czego przykleić — nie wisi w
          próżni jako kolejny punkt w zeszycie.
        </p>

        <h2>Jak działają powtórki rozłożone w czasie</h2>
        <p>
          Nowe słowo usłyszane raz zwykle znika z pamięci w ciągu kilku dni — to zjawisko znane w
          psychologii jako krzywa zapominania Ebbinghausa, i dotyczy każdego, niezależnie od
          zdolności językowych. Dlatego każde nowe słowo czy struktura wraca do ciebie w
          konkretnym rytmie, nie przypadkowo:
        </p>
        <ul>
          {reviewSchedule.map((row) => (
            <li key={row.when}>
              <strong>{row.when}.</strong> {row.what}
            </li>
          ))}
        </ul>
        <p>
          Odstępy między powtórkami rosną, bo im lepiej coś pamiętasz, tym rzadziej trzeba to
          przypominać — powtarzanie czegoś, co i tak dobrze wiesz, to strata czasu na lekcji.
        </p>

        <h2>Anatomia jednej lekcji</h2>
        <p>
          Każda lekcja trwa 60 minut i ma z grubsza taki sam szkielet, niezależnie od poziomu —
          zmienia się tylko treść, nie struktura:
        </p>
      </div>

      <div className="mt-6 flex flex-col divide-y divide-rule border-y border-rule">
        {lessonAnatomy.map((step) => (
          <div key={step.time} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
            <p className="text-sm font-semibold text-cobalt">{step.time}</p>
            <div>
              <p className="font-display text-base font-semibold text-ink">{step.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="prose-article">
        <h2>Poprawianie błędów: kiedy przerywać, a kiedy nie</h2>
        <p>
          Przerywanie w połowie zdania, żeby poprawić końcówkę czasownika, uczy jednej rzeczy —
          żeby mówić krócej i ostrożniej. Zamiast tego lektor notuje błędy podczas twojej
          wypowiedzi i wraca do nich po jej zakończeniu. W praktyce wygląda to tak:
        </p>
        <p>
          Mówisz: <em>„Yesterday I go to the doctor because I have a headache since two days.”</em>{" "}
          Lektor nie przerywa. Po wypowiedzi wraca: trzy rzeczy do poprawy — czas przeszły
          („I went”), przyimek przy chorobie („I&nbsp;had had a headache for two days”) i szyk
          zdania przyczynowego. Poprawiasz, powtarzasz poprawną wersję głośno, lecicie dalej.
          Wypowiedź nie zostaje przerwana w połowie myśli, a błąd i tak zostaje zauważony.
        </p>

        <h2>Wymowa: ucho przed językiem</h2>
        <p>
          Powtarzanie słowa dziesięć razy rzadko poprawia wymowę, jeśli ucho nie słyszy różnicy
          między dźwiękami — a polski i angielski system dźwięków różnią się w miejscach, których
          większość osób nawet nie podejrzewa. Klasyczny przykład to długość samogłoski w parach
          takich jak „ship” i „sheep” — po polsku nie ma tego rozróżnienia, więc ucho go nie
          szuka, dopóki ktoś świadomie go nie wytrenuje. Podobnie z bezdźwięcznym „th” w „think” —
          większość Polaków zastępuje je „s” lub „f”, bo w polskim ten dźwięk po prostu nie
          istnieje. Ćwiczymy takie pary obok siebie, żeby mózg najpierw nauczył się słyszeć
          różnicę, zanim spróbuje ją wypowiedzieć — w innej kolejności to zwykle nie działa.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3 border-t border-rule pt-8">
        <Link
          href="/sprawdz-poziom"
          className="rounded-sm bg-cobalt px-6 py-3 text-sm font-semibold text-paper hover:bg-cobalt-deep"
        >
          Sprawdź swój poziom
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
