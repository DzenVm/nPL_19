export type PricingPlan = {
  name: string;
  groupSize: string;
  lessonLength: string;
  indicativePrice: string;
  bestFor: string;
  details: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Minigrupa",
    groupSize: "3–5 osób na zbliżonym poziomie",
    lessonLength: "60 minut, 2 razy w tygodniu",
    indicativePrice: "od 420 zł / miesiąc",
    bestFor: "Osoby, którym rozmowa w grupie pomaga się odblokować i które lubią uczyć się na cudzych błędach, nie tylko własnych.",
    details: [
      "8 lekcji w cyklu miesięcznym",
      "Stała grupa i stały lektor — nie losowe dopasowanie za każdym razem",
      "Najniższa cena za godzinę z całej oferty",
    ],
  },
  {
    name: "W parze",
    groupSize: "2 osoby — możesz przyjść z kimś znajomym",
    lessonLength: "60 minut, 2 razy w tygodniu",
    indicativePrice: "od 560 zł / miesiąc / osobę",
    bestFor: "Znajomi, para albo współpracownicy, którzy chcą uczyć się razem i trzymać się nawzajem w ryzach frekwencji.",
    details: [
      "8 lekcji w cyklu miesięcznym",
      "Program dopasowany do dwóch osób naraz, nie do całej grupy",
      "Możliwość zmiany partnera zajęć, jeśli druga osoba zrezygnuje",
    ],
  },
  {
    name: "Indywidualnie",
    groupSize: "1 osoba, cały czas lektora dla ciebie",
    lessonLength: "60 minut, częstotliwość do ustalenia",
    indicativePrice: "od 130 zł / lekcję",
    bestFor: "Osoby z konkretnym celem (rozmowa kwalifikacyjna, wyjazd, prezentacja) i tempem, które trudno dopasować do grupy.",
    details: [
      "Cena za lekcję spada przy zakupie pakietu 8 lub 12 zajęć",
      "Pełna elastyczność terminów, także wieczorami i w weekendy",
      "Program budowany pod konkretną sytuację, nie ogólny podręcznik",
    ],
  },
];

export const pricingNote =
  "Powyższe stawki są orientacyjne i zależą od poziomu zaawansowania, pory dnia oraz aktualnej dostępności lektorów. Dokładną cenę ustalamy po bezpłatnej lekcji próbnej — nie wcześniej, bo nie chcemy podawać liczby, która i tak się zmieni.";
