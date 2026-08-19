import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description: `Jakich plików cookie używa serwis ${site.domain} i jak zarządzać zgodą na nie.`,
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Informacje prawne</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Polityka cookies
      </h1>
      <p className="mt-4 text-sm text-ink-faint">Ostatnia aktualizacja treści: sierpień 2026.</p>

      <div className="prose-article mt-6">
        <h2>Czym są pliki cookie</h2>
        <p>
          To niewielkie pliki tekstowe zapisywane w Twojej przeglądarce. Część z nich to zwykłe
          pliki cookie, część to podobne mechanizmy przeglądarki, jak localStorage — na potrzeby
          tej strony traktujemy je tak samo, bo pełnią tę samą funkcję: zapamiętują coś między
          jedną wizytą a drugą.
        </p>

        <h2>Z czego korzystamy dokładnie</h2>
        <p>
          <strong>Zapis Twojego wyboru zgody.</strong> Gdy zamkniesz baner cookies — niezależnie
          od wybranej opcji — zapisujemy tę decyzję w localStorage przeglądarki, żeby nie pytać o
          nią przy każdej kolejnej wizycie. To jedyny mechanizm, który działa zawsze, bez względu
          na Twój wybór — bez niego baner wyświetlałby się w kółko.
        </p>
        <p>
          <strong>Znacznik reklamowy Google.</strong> Ładuje się wyłącznie wtedy, gdy w banerze
          wybierzesz „Akceptuj wszystkie” albo osobno zaznaczysz zgodę na cookies reklamowe.
          Służy do pomiaru skuteczności kampanii reklamowych — pozwala sprawdzić, czy kliknięcie w
          reklamę zakończyło się np. wysłaniem wiadomości ze zgłoszeniem. Jeśli nie wyrazisz
          zgody, ten skrypt w ogóle nie zostanie pobrany przez przeglądarkę — nie chodzi o
          ukrycie go czy wyłączenie działania, on po prostu się nie ładuje.
        </p>
        <p>
          Nie używamy żadnych innych plików cookie — nie ma tu osobnego licznika analitycznego
          ani cookies społecznościowych, bo strona nie osadza żadnych widżetów tego typu.
        </p>

        <h2>Jak zmienić swój wybór</h2>
        <p>
          Wybór dotyczący cookies reklamowych możesz zmienić w dowolnym momencie, czyszcząc dane
          witryny w ustawieniach przeglądarki dla adresu {site.domain} — baner zgody pojawi się
          wtedy ponownie przy następnej wizycie. Możesz też zablokować pliki cookie całkowicie w
          ustawieniach przeglądarki; strona będzie wtedy działać identycznie, poza tym, że baner
          zgody może wyświetlać się częściej, bo przeglądarka nie zapamięta Twojego wyboru.
        </p>

        <h2>Cookies stron trzecich</h2>
        <p>
          Jedynym podmiotem trzecim, który może otrzymać dane za pośrednictwem cookies, jest
          Google — i tylko w zakresie znacznika reklamowego opisanego wyżej, tylko po Twojej
          zgodzie. Więcej informacji o tym, jak Google przetwarza te dane, znajdziesz w polityce
          prywatności Google.
        </p>

        <h2>Więcej informacji</h2>
        <p>
          Zasady przetwarzania danych osobowych opisujemy szerzej w{" "}
          <a href="/polityka-prywatnosci">polityce prywatności</a>. Pytania dotyczące cookies
          możesz kierować na{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </div>
    </div>
  );
}
