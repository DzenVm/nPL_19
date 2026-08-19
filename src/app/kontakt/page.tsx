import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Jak umówić lekcję próbną i skontaktować się w innych sprawach dotyczących ${site.domain}.`,
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Kontakt</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Piszesz do jednego adresu, odpisuje człowiek
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        Nie ma tu infolinii ani automatycznego bota z menu na dziewięć opcji. Jest jeden adres, na
        który trafiają zarówno zgłoszenia na lekcję próbną, jak i pytania organizacyjne.
      </p>

      <div className="prose-article">
        <h2>Adres e-mail</h2>
        <p>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Odpowiadamy zwykle w
          ciągu jednego, maksymalnie dwóch dni roboczych.
        </p>

        <h2>Chcesz umówić lekcję próbną</h2>
        <p>
          Napisz w kilku zdaniach, czego dotyczy twoja sytuacja: praca, wyjazd, odświeżenie
          języka po przerwie. Dodaj, jakie pory dnia zwykle ci pasują. Zaproponujemy dwa lub trzy
          konkretne terminy zamiast prosić cię o wypełnianie formularza dostępności.
        </p>

        <h2>Piszesz w imieniu zespołu</h2>
        <p>
          Jeśli zgłaszasz kilka osób naraz, na przykład współpracowników z jednego działu, podaj
          od razu ich liczbę i orientacyjny poziom każdej z nich. Łatwiej wtedy dobrać wspólny
          termin i dopasować tempo zajęć do całej grupy.
        </p>

        <h2>Sprawy dotyczące danych osobowych</h2>
        <p>
          Pytania związane z przetwarzaniem danych i plikami cookie kieruj na ten sam adres, z
          dopiskiem „prywatność” w temacie. Pełny opis zasad znajdziesz w{" "}
          <a href="/polityka-prywatnosci">polityce prywatności</a>.
        </p>

        <h2>Kim jesteśmy</h2>
        <p>
          Zajęcia koordynuje jedna osoba, a prowadzi je niewielki, zmieniający się w czasie zespół
          lektorów. To nie wielka szkoła językowa z siecią oddziałów, tylko usługa prowadzona na
          mniejszą skalę. Pełne dane do umowy przekazujemy na etapie zapisu na kurs, nie
          publikujemy ich z góry na stronie.
        </p>
      </div>
    </div>
  );
}
