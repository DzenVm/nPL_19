export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Co jeśli nie mogę być na lekcji o ustalonej porze?",
    answer:
      "Wystarczy dać znać wcześniej, najpóźniej do wieczora dnia poprzedniego. Taka nieobecność nie przepada, odrabiasz ją w innym terminie w tym samym miesiącu. Zgłoszenia w ostatniej chwili rozpatrujemy indywidualnie, bo lektor mógł już zaplanować sobie ten czas inaczej.",
  },
  {
    question: "Czy muszę mieć własny podręcznik?",
    answer:
      "Nie. Materiały przygotowuje lektor, dopasowane do poziomu i celów konkretnej osoby albo grupy: fragmenty tekstów, nagrania, ćwiczenia własne. Jeśli komuś zależy na pracy z konkretnym podręcznikiem, bo na przykład przygotowuje się do testu wymagającego określonego materiału, da się to uwzględnić. To jednak wyjątek, nie reguła.",
  },
  {
    question: "Co jeśli poziom grupy okaże się źle dobrany?",
    answer:
      "Zdarza się to rzadko, bo poziom ustalamy na pierwszej lekcji w rozmowie, nie na podstawie testu z zaznaczaniem odpowiedzi. Jeśli mimo to po kilku zajęciach czujesz, że jest za łatwo albo za trudno, zgłaszasz to. Przenosimy cię wtedy do innej grupy albo proponujemy zajęcia indywidualne na czas wyrównania poziomu.",
  },
  {
    question: "Czy da się zmienić lektora w trakcie kursu?",
    answer:
      "Tak, i nie trzeba tego długo uzasadniać. Styl prowadzenia zajęć bywa równie ważny jak sam poziom językowy: jedna osoba potrzebuje więcej struktury, inna swobodnej rozmowy. Taką prośbę traktujemy jako informację zwrotną, nie jako problem.",
  },
  {
    question: "Czy lekcje są nagrywane?",
    answer:
      "Domyślnie nie. Na wyraźną prośbę ucznia lektor może nagrać pojedynczą lekcję, na przykład żeby wrócić później do wyjaśnienia gramatyki. Takie nagranie trafia wyłącznie do tej osoby i znika po pobraniu. Stałego archiwum nagrań nie prowadzimy.",
  },
  {
    question: "Jak wygląda rezygnacja z zajęć?",
    answer:
      "Zgłaszasz to przed kolejnym cyklem zajęć, bez podawania powodu. Nie ma tu wieloletniego zobowiązania ani żadnych kar za wcześniejsze zakończenie współpracy. Jeśli kiedyś zechcesz wrócić, po prostu piszesz jeszcze raz.",
  },
  {
    question: "Jak dokładnie wygląda pierwsza lekcja?",
    answer:
      "To około 30–40 minut rozmowy z lektorem, nie test na czas. Sprawdzamy, jak radzisz sobie z mówieniem i rozumieniem ze słuchu, pytamy o cel nauki i dotychczasowe doświadczenia, także te zniechęcające. Na tej podstawie proponujemy konkretny poziom i format zajęć. Jeśli po tej rozmowie stwierdzisz, że to nie dla ciebie, po prostu na tym kończymy.",
  },
];
