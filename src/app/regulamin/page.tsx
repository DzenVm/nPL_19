import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Regulamin",
  description: `Zasady korzystania z zajęć organizowanych w ramach serwisu ${site.domain} — zapisy, płatności, odwoływanie zajęć, reklamacje.`,
};

export default function RegulaminPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Informacje prawne</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">Regulamin</h1>
      <p className="mt-4 text-sm text-ink-faint">Ostatnia aktualizacja treści: sierpień 2026.</p>

      <div className="prose-article mt-6">
        <h2>1. Postanowienia ogólne</h2>
        <p>
          Regulamin określa zasady korzystania z lekcji języka angielskiego organizowanych za
          pośrednictwem serwisu {site.domain}. Zajęcia prowadzone są zdalnie, w formie
          wideorozmowy, dla osób pełnoletnich lub — za zgodą opiekuna prawnego — dla osób
          niepełnoletnich powyżej 16 roku życia.
        </p>

        <h2>2. Zakres usług</h2>
        <p>
          Oferujemy lekcje indywidualne, w parach oraz w minigrupach liczących od trzech do pięciu
          osób, na poziomach od A1 do C2 według skali CEFR. Każda współpraca rozpoczyna się od
          bezpłatnej lekcji próbnej, podczas której ustalany jest poziom i format zajęć.
        </p>

        <h2>3. Zapisy i płatności</h2>
        <p>
          Zapis następuje po ustaleniu terminu i formatu zajęć drogą mailową. Zajęcia rozliczane
          są w cyklach miesięcznych, z góry, na podstawie liczby lekcji ustalonej dla danego
          formatu. Ceny mają charakter orientacyjny i są potwierdzane indywidualnie przed
          rozpoczęciem współpracy — zależą od poziomu, formatu i aktualnej dostępności lektorów.
        </p>

        <h2>4. Odwoływanie i odrabianie zajęć</h2>
        <p>
          Nieobecność zgłoszoną najpóźniej do końca dnia poprzedzającego lekcję traktujemy jako
          odwołaną z możliwością odrobienia w innym terminie tego samego miesiąca rozliczeniowego.
          Nieobecności zgłoszone później lub niezgłoszone rozpatrywane są indywidualnie — lektor
          mógł już zaplanować ten czas i nie zawsze da się go odzyskać.
        </p>

        <h2>5. Rezygnacja i zwroty</h2>
        <p>
          Rezygnacja z dalszych zajęć możliwa jest przed rozpoczęciem kolejnego cyklu
          rozliczeniowego, bez podawania przyczyny i bez dodatkowych opłat. Jeśli opłacono z góry
          lekcje, które nie odbędą się z przyczyn leżących po naszej stronie, zwracamy
          równowartość tych zajęć.
        </p>

        <h2>6. Reklamacje</h2>
        <p>
          Reklamacje dotyczące jakości zajęć lub rozliczeń przyjmujemy na adres{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Rozpatrujemy je w
          terminie do 14 dni kalendarzowych od zgłoszenia, o czym informujemy w odpowiedzi
          mailowej.
        </p>

        <h2>7. Odpowiedzialność</h2>
        <p>
          Nie ponosimy odpowiedzialności za przerwy w połączeniu wynikające z awarii po stronie
          użytkownika (np. jakości łącza internetowego). W przypadku przerwy technicznej leżącej
          po naszej stronie, która uniemożliwia przeprowadzenie lekcji, oferujemy termin
          zastępczy bez dodatkowych kosztów.
        </p>

        <h2>8. Prawo konsumenta do odstąpienia</h2>
        <p>
          Konsumentowi przysługuje prawo odstąpienia od umowy zawartej na odległość w terminie 14
          dni, zgodnie z ustawą o prawach konsumenta — z zastrzeżeniem, że jeśli lekcje
          rozpoczną się na wyraźną prośbę konsumenta przed upływem tego terminu, prawo do
          odstąpienia dotyczy proporcjonalnie tylko zajęć jeszcze nieodbytych.
        </p>

        <h2>9. Postanowienia końcowe</h2>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
          polskiego. Spory, których nie uda się rozwiązać polubownie, rozstrzyga sąd właściwy
          zgodnie z obowiązującymi przepisami; konsument może też skorzystać z pozasądowych
          sposobów rozpatrywania reklamacji, w tym z platformy ODR Komisji Europejskiej.
        </p>
      </div>
    </div>
  );
}
