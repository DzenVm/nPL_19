import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: `Jakie dane przetwarzamy w związku z serwisem ${site.domain}, w jakim celu i jakie masz w związku z tym prawa.`,
};

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="kicker">Informacje prawne</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink sm:text-5xl">
        Polityka prywatności
      </h1>
      <p className="mt-4 text-sm text-ink-faint">Ostatnia aktualizacja treści: sierpień 2026.</p>

      <div className="prose-article mt-6">
        <h2>Kto administruje danymi</h2>
        <p>
          Administratorem danych przetwarzanych w związku z serwisem {site.domain} jest podmiot
          prowadzący ten serwis, dostępny pod adresem kontaktowym{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Pełne dane rejestrowe
          przekazujemy na etapie zawierania umowy o zajęcia, żeby nie publikować z góry więcej
          danych, niż to na tym etapie potrzebne.
        </p>

        <h2>Jakie dane przetwarzamy i po co</h2>
        <p>
          <strong>Dane podane w korespondencji.</strong> Jeśli piszesz do nas e-mailem, w sprawie
          lekcji próbnej czy pytania organizacyjnego, przetwarzamy dane, które sam podasz: zwykle
          imię, adres e-mail, czasem numer telefonu. Podstawa: podjęcie działań przed zawarciem
          umowy lub jej wykonanie (art. 6 ust. 1 lit. b RODO).
        </p>
        <p>
          <strong>Wybór zgody na cookies.</strong> Twój wybór dotyczący plików cookie zapisujemy
          lokalnie w przeglądarce (localStorage), nie na naszym serwerze. Podstawa: nasz prawnie
          uzasadniony interes w zapamiętaniu tego wyboru, żeby nie pytać o niego przy każdej
          wizycie (art. 6 ust. 1 lit. f RODO).
        </p>
        <p>
          <strong>Znacznik reklamowy.</strong> Wyłącznie jeśli wyrazisz zgodę na cookies
          reklamowe, ładujemy skrypt pomiaru konwersji Google. Przekazuje on Google ograniczone
          dane o wizycie, między innymi adres IP i identyfikator kliknięcia w reklamę, żeby
          zmierzyć skuteczność kampanii. Bez tej zgody skrypt w ogóle się nie ładuje. Podstawa:
          zgoda (art. 6 ust. 1 lit. a RODO), którą możesz wycofać w każdej chwili, czyszcząc dane
          przeglądarki dla tej strony. Dane te przetwarza Google jako odrębny administrator, na
          zasadach opisanych we własnej polityce prywatności Google.
        </p>
        <p>
          <strong>Logi techniczne.</strong> Dostawca hostingu, z którego korzystamy, zbiera
          podstawowe logi serwera (adres IP, znacznik czasu, żądany zasób) w celach związanych z
          bezpieczeństwem i diagnostyką awarii. Nie łączymy tych logów z tożsamością konkretnej
          osoby. Podstawa: prawnie uzasadniony interes w zapewnieniu bezpieczeństwa serwisu
          (art. 6 ust. 1 lit. f RODO).
        </p>

        <h2>Jak długo przechowujemy dane</h2>
        <p>
          Korespondencję przechowujemy przez czas trwania współpracy i dodatkowo przez okres
          przedawnienia ewentualnych roszczeń. Wybór zgody na cookies pozostaje w Twojej
          przeglądarce do czasu, aż go zmienisz lub wyczyścisz dane przeglądania.
        </p>

        <h2>Komu przekazujemy dane</h2>
        <p>
          Poza podmiotami technicznymi obsługującymi pocztę e-mail i hosting serwisu, dane
          przekazujemy Google, wyłącznie w zakresie znacznika reklamowego i wyłącznie po Twojej
          zgodzie. Poza tą listą nie udostępniamy danych osobowych żadnym innym podmiotom
          trzecim.
        </p>

        <h2>Twoje prawa</h2>
        <p>Zgodnie z RODO masz prawo do:</p>
        <ul>
          <li>dostępu do swoich danych i uzyskania ich kopii,</li>
          <li>sprostowania danych, jeśli są nieprawidłowe,</li>
          <li>usunięcia danych, gdy nie ma już podstawy do ich przetwarzania,</li>
          <li>ograniczenia przetwarzania w określonych sytuacjach,</li>
          <li>przenoszenia danych, które przetwarzamy na podstawie zgody lub umowy,</li>
          <li>sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie,</li>
          <li>
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uznasz, że
            przetwarzamy Twoje dane niezgodnie z prawem.
          </li>
        </ul>
        <p>
          Z każdego z tych praw możesz skorzystać, pisząc na{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> z dopiskiem
          „prywatność” w temacie wiadomości.
        </p>

        <h2>Dobrowolność podania danych</h2>
        <p>
          Podanie danych jest zawsze dobrowolne, choć bez adresu e-mail nie umówimy lekcji
          próbnej ani nie odpowiemy na zgłoszenie. Trudno to zrobić bez sposobu kontaktu.
        </p>

        <h2>Zmiany tej polityki</h2>
        <p>
          Jeśli zmienimy sposób przetwarzania danych, zaktualizujemy tę stronę i datę na jej
          górze. Przy istotnych zmianach postaramy się poinformować o tym osoby, z którymi
          prowadzimy w danym momencie aktywną korespondencję.
        </p>
      </div>
    </div>
  );
}
