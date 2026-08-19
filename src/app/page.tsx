import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { StartDateWidget, StartDateWidgetFallback } from "@/components/StartDateWidget";
import { LevelQuiz } from "@/components/LevelQuiz";
import { FalseFriendsList } from "@/components/FalseFriendsList";
import { audienceSegments } from "@/content/audience";
import { methodPrinciples } from "@/content/method";
import { levels } from "@/content/levels";
import { pricingPlans, pricingNote } from "@/content/pricing";
import { faq } from "@/content/faq";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-grain relative overflow-hidden border-b border-rule bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="kicker">Nauka angielskiego online · Polska</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              Angielski, który zaczynasz mówić, zanim zdążysz się zastanowić, czy umiesz
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Żywe lekcje z lektorem, nie nagrania puszczane z playlisty. Poziom dobieramy na
              rozmowie, nie na teście z kratkami do zaznaczenia, a program idzie za tym, czego
              faktycznie potrzebujesz — nie za spisem treści z podręcznika.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-sm bg-cobalt px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-cobalt-deep"
              >
                Umów bezpłatną lekcję próbną
              </Link>
              <Link
                href="/sprawdz-poziom"
                className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Sprawdź swój poziom
              </Link>
            </div>

            <p className="mt-4 text-sm text-ink-faint">
              Wideorozmowa z dowolnego miejsca w Polsce, bez instalowania dodatkowego
              oprogramowania. Rozliczenie miesięczne, bez wieloletnich umów.
            </p>

            <div className="mt-8">
              <Suspense fallback={<StartDateWidgetFallback />}>
                <StartDateWidget />
              </Suspense>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/hero-dialog.png"
              alt="Abstrakcyjna kompozycja nakładających się kształtów dymków rozmowy w ciepłej, papierowej kolorystyce"
              width={1920}
              height={1080}
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="w-full rounded-sm border border-rule"
            />
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="border-b border-rule bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="kicker">Dla kogo</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Zwykle trafiają do nas z jednego z tych powodów
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {audienceSegments.map((segment) => (
              <div key={segment.label} className="rounded-sm border border-rule bg-paper p-6">
                <p className="font-display text-lg font-semibold text-ink">{segment.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="kicker">Metoda</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Dlaczego uczysz się mówić, zanim nauczysz się reguł
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft leading-relaxed">
                Klasyczna kolejność — najpierw gramatyka, mówienie kiedyś tam potem — sprawdza się
                w podręczniku, nie w głowie dorosłego człowieka. Poniżej sześć zasad, którymi
                faktycznie kierujemy się na lekcjach, nie tylko w opisie na stronie.
              </p>
              <Link
                href="/metoda"
                className="mt-5 inline-block text-sm font-semibold text-cobalt hover:underline"
              >
                Zobacz pełny opis metody →
              </Link>
            </div>
            <Image
              src="/images/method-rhythm.png"
              alt="Abstrakcyjna ilustracja otwartej książki z rozchodzącymi się pierścieniami, symbolizująca powtórki rozłożone w czasie"
              width={1440}
              height={1080}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="w-full rounded-sm border border-rule"
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {methodPrinciples.map((principle, index) => (
              <div key={principle.title} className="border-t border-rule pt-4">
                <p className="text-xs font-semibold text-ochre">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-display text-lg font-semibold text-ink">{principle.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section className="border-b border-rule bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <Image
              src="/images/levels-terraces.png"
              alt="Abstrakcyjna ilustracja sześciu wznoszących się tarasów symbolizujących poziomy od A1 do C2"
              width={1440}
              height={1080}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="w-full rounded-sm border border-rule lg:order-2"
            />
            <div className="lg:order-1">
              <p className="kicker">Poziomy</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Sześć poziomów, jeden bardzo różny punkt startu
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Poziom ustalamy na bezpłatnej lekcji próbnej — rozmową, nie testem z zaznaczaniem
                odpowiedzi. Poniżej skrócony przegląd, pełny opis każdego poziomu (z przykładami,
                co realnie potrafisz) jest na osobnej stronie.
              </p>
              <Link
                href="/poziomy"
                className="mt-4 inline-block text-sm font-semibold text-cobalt hover:underline"
              >
                Zobacz szczegóły każdego poziomu →
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => (
              <div key={level.code} className="rounded-sm border border-rule bg-paper p-5">
                <p className="font-display text-2xl font-semibold text-cobalt">{level.code}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{level.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="kicker">Test poziomu</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Dwie minuty, sześć pytań, żaden klucz odpowiedzi do przepisania od sąsiada
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            To samoocena, nie egzamin — pomaga ustawić punkt startowy przed pierwszą rozmową z
            lektorem, żeby nie zaczynać od zera pytań organizacyjnych.
          </p>
          <div className="mt-8">
            <LevelQuiz />
          </div>
        </div>
      </section>

      {/* FALSE FRIENDS */}
      <section className="border-b border-rule bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="kicker">Fałszywi przyjaciele</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Słowa, które brzmią znajomo i dlatego najbardziej zawodzą
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft leading-relaxed">
                Największe wpadki językowe rzadko biorą się ze słów zupełnie obcych — biorą się z
                takich, które wyglądają znajomo. Osiem przykładów, które regularnie wracają na
                lekcjach. Kliknij, żeby zobaczyć wyjaśnienie.
              </p>
            </div>
            <Image
              src="/images/false-friends-mirror.png"
              alt="Dwa niemal lustrzane, ale nieidentyczne kształty symbolizujące fałszywych przyjaciół językowych"
              width={1440}
              height={1080}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="w-full rounded-sm border border-rule"
            />
          </div>
          <div className="mt-10">
            <FalseFriendsList />
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <Image
              src="/images/schedule-waves.png"
              alt="Abstrakcyjna ilustracja siatki tygodniowego grafiku z falami dźwiękowymi symbolizującymi ćwiczenia słuchowe"
              width={1440}
              height={1080}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="w-full rounded-sm border border-rule lg:order-2"
            />
            <div className="lg:order-1">
              <p className="kicker">Organizacja zajęć</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Jak to wygląda w praktyce, tydzień po tygodniu
              </h2>
              <ul className="mt-5 flex flex-col gap-3 text-sm text-ink-soft">
                {[
                  "Lekcje trwają 60 minut i odbywają się przez wideorozmowę w przeglądarce — bez instalowania dodatkowego oprogramowania.",
                  "Grafik na cały miesiąc ustalamy z wyprzedzeniem, żeby dało się go wpisać w kalendarz pracy, nie odwrotnie.",
                  "Zgłoszoną wcześniej nieobecność odrabiasz w innym terminie tego samego miesiąca — nie przepada.",
                  "Po każdej lekcji dostajesz krótkie pisemne podsumowanie: co się pojawiło, co warto powtórzyć.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cobalt" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS STANDARD */}
      <section className="border-b border-rule bg-paper-dim">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="kicker">Lektorzy</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Kogo dopuszczamy do prowadzenia zajęć
          </h2>
          <div className="prose-article mt-5">
            <p>
              Do prowadzenia zajęć dopuszczamy osoby, które udokumentują wykształcenie kierunkowe
              lub uznany międzynarodowy certyfikat nauczania języka angielskiego jako obcego —
              samo biegłe posługiwanie się językiem to za mało, bo uczenie kogoś innego to zupełnie
              inna umiejętność.
            </p>
            <p>
              Każdy nowy lektor prowadzi lekcję próbną ocenianą pod kątem tempa mówienia,
              jasności tłumaczenia zasad gramatycznych i tego, czy potrafi się dostosować, gdy
              widać, że uczeń czegoś nie rozumie. Nie każdy, kto się zgłosi, tę ocenę przechodzi.
            </p>
            <p>
              Jeśli styl prowadzenia zajęć mimo wszystko ci nie odpowiada — a to się zdarza,
              niezależnie od kwalifikacji — zmiana lektora jest zwykłą prośbą, nie sytuacją
              wyjątkową.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="kicker">Cennik orientacyjny</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
            Trzy formaty, jedna zasada: płacisz miesiąc po miesiącu
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="flex flex-col rounded-sm border border-rule bg-paper-dim p-6">
                <p className="font-display text-xl font-semibold text-ink">{plan.name}</p>
                <p className="mt-1 text-sm text-ink-faint">{plan.groupSize}</p>
                <p className="mt-4 font-display text-2xl font-semibold text-cobalt">
                  {plan.indicativePrice}
                </p>
                <p className="text-xs text-ink-faint">{plan.lessonLength}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{plan.bestFor}</p>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-soft">
                  {plan.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-ochre" aria-hidden />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-ink-faint">{pricingNote}</p>
        </div>
      </section>

      {/* EMPLOYER FUNDING */}
      <section className="border-b border-rule bg-paper-dim">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="kicker">Nauka finansowana przez pracodawcę</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Jeśli to firma płaci, a nie ty
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft leading-relaxed">
                Sporo osób uczy się u nas w ramach budżetu szkoleniowego pracodawcy — zwłaszcza
                gdy angielski jest potrzebny pod konkretne stanowisko. Wystawiamy faktury na firmę,
                a program lekcji możemy zbudować wokół realnych obowiązków, nie ogólnego kursu.
              </p>
              <p className="mt-3 max-w-xl text-ink-soft leading-relaxed">
                Warto zgłosić to przed pierwszą płatnością, żeby dane do faktury były ustalone od
                razu — poprawianie ich później zajmuje więcej czasu niż ustalenie na starcie.
              </p>
            </div>
            <Image
              src="/images/route-connection.png"
              alt="Abstrakcyjna ilustracja dwóch połączonych kształtów z przerywaną trasą między nimi, symbolizująca zasięg i możliwości"
              width={1440}
              height={1080}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="w-full rounded-sm border border-rule"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="kicker">Pytania, które faktycznie padają</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Najczęstsze pytania
          </h2>
          <div className="mt-8 flex flex-col divide-y divide-rule border-t border-rule">
            {faq.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-lg font-semibold text-ink">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-xl text-ink-faint transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* HONESTY BLOCK */}
      <section className="border-b border-rule bg-paper-dim">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="border-l-4 border-ochre pl-6 sm:pl-8">
            <p className="kicker">Wprost</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Czego szczerze nie obiecujemy
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-forest">
                  Obiecujemy
                </p>
                <ul className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink-soft">
                  <li>Prawdziwego lektora na żywo na każdej lekcji — nie algorytm, nie nagranie.</li>
                  <li>Odpowiedź na zgłoszenie w ciągu maksymalnie dwóch dni roboczych.</li>
                  <li>Rezygnację przed kolejnym miesiącem bez pytania o powód.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  Nie obiecujemy
                </p>
                <ul className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-ink-soft">
                  <li>
                    Płynnej angielszczyzny „w 30 dni” — realną zmianę większość osób widzi po
                    kilku miesiącach regularnych zajęć, nie po jednym weekendzie.
                  </li>
                  <li>Że nauka zawsze będzie przyjemna — czasem to po prostu wysiłek.</li>
                  <li>
                    Certyfikatu bez odpowiedniego przygotowania — jeśli szykujesz się do egzaminu,
                    powiemy wprost, ile pracy to realnie wymaga.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-night text-paper-dim">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Pierwsza lekcja nic nie kosztuje — decyzja zostaje przy tobie
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper-dim/85">
            Bez zobowiązań i bez presji sprzedażowej. Jeśli po rozmowie stwierdzisz, że to nie dla
            ciebie, po prostu na tym kończymy.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-sm bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper-dim"
          >
            Umów bezpłatną lekcję próbną
          </Link>
        </div>
      </section>
    </>
  );
}
