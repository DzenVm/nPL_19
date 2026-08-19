export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Co jeśli nie mogę być na lekcji o ustalonej porze?",
    answer:
      "Zgłoszona wcześniej nieobecność (standardowo do wieczora dnia poprzedniego) nie przepada — lekcję odrabiasz w innym terminie w tym samym miesiącu rozliczeniowym. Nie liczymy nieobecności jako zużytej lekcji, jeśli dałeś znać z wyprzedzeniem. Zgłoszenia w ostatniej chwili rozpatrujemy indywidualnie, bo lektor mógł już zaplanować sobie ten czas.",
  },
  {
    question: "Czy muszę kupować podręcznik?",
    answer:
      "Nie. Materiały przygotowuje lektor pod poziom i cele konkretnej osoby lub grupy — fragmenty tekstów, nagrania, ćwiczenia własne. Jeśli ktoś wprost chce pracować z konkretnym podręcznikiem, bo np. przygotowuje się do testu wymagającego określonego materiału, możemy to uwzględnić, ale to wyjątek, nie reguła.",
  },
  {
    question: "Co jeśli poziom grupy okaże się źle dobrany?",
    answer:
      "Zdarza się to rzadziej niż mogłoby się wydawać, bo poziom ustalamy na bezpłatnej lekcji próbnej, nie na podstawie testu z zaznaczaniem odpowiedzi. Jeśli mimo to po pierwszych zajęciach czujesz, że jest za łatwo albo za trudno, zgłaszasz to i przenosimy cię do innej grupy albo proponujemy zajęcia indywidualne na czas wyrównania poziomu — bez dodatkowych opłat za samą zmianę.",
  },
  {
    question: "Czy da się zmienić lektora w trakcie kursu?",
    answer:
      "Tak, i nie wymaga to podawania długiego uzasadnienia. Dopasowanie stylu prowadzenia zajęć do ucznia bywa równie ważne jak sam poziom językowy — jedna osoba potrzebuje więcej struktury, inna swobodnej rozmowy. Zgłoszenie takiej prośby traktujemy jako informację zwrotną, nie jako problem.",
  },
  {
    question: "Czy lekcje są nagrywane?",
    answer:
      "Domyślnie nie. Na wyraźną prośbę ucznia lektor może nagrać pojedynczą lekcję do własnego użytku (np. żeby wrócić do wyjaśnienia gramatyki) — nagranie trafia wtedy tylko do tej osoby i jest usuwane po pobraniu. Nie prowadzimy stałego archiwum nagrań zajęć.",
  },
  {
    question: "Jak wygląda rezygnacja z kursu?",
    answer:
      "Kurs rozliczany jest w cyklach miesięcznych, nie jednym rocznym zobowiązaniem — rezygnujesz przed kolejnym cyklem, bez podawania powodu i bez kar umownych. Jeśli opłaciłeś z góry więcej lekcji, niż wykorzystałeś, zwracamy równowartość niewykorzystanych zajęć.",
  },
  {
    question: "Czy firma może sfinansować mi kurs i dostać fakturę?",
    answer:
      "Tak, wystawiamy faktury na firmę, jeśli to pracodawca pokrywa koszt zajęć — zdarza się to szczególnie przy kursach dopasowanych do konkretnego stanowiska. Warto zgłosić to przed pierwszą płatnością, żeby dane do faktury były ustalone od razu, a nie poprawiane później.",
  },
  {
    question: "Jak dokładnie wygląda pierwsza, bezpłatna lekcja?",
    answer:
      "To około 30–40 minut rozmowy z lektorem, nie test z ograniczonym czasem. Sprawdzamy, jak radzisz sobie w mówieniu i rozumieniu ze słuchu, pytamy o cel nauki i dotychczasowe doświadczenia (także te zniechęcające), i na tej podstawie proponujemy konkretny poziom oraz format zajęć. Nie ma tu sprzedażowego nacisku — jeśli stwierdzisz, że to nie dla ciebie, kończymy na tym spotkaniu.",
  },
];
