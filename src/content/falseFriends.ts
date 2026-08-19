export type FalseFriend = {
  polish: string;
  looksLikeEnglish: string;
  polishMeaning: string;
  correctEnglish: string;
  note: string;
};

export const falseFriends: FalseFriend[] = [
  {
    polish: "aktualny",
    looksLikeEnglish: "actual",
    polishMeaning: "obowiązujący teraz, bieżący",
    correctEnglish: "current",
    note: "Actual znaczy prawdziwy albo faktyczny, nie bieżący. Kto pyta o „the actual reason”, nie chce usłyszeć, co jest teraz modne. Chce poznać prawdziwy powód.",
  },
  {
    polish: "eventualnie",
    looksLikeEnglish: "eventually",
    polishMeaning: "ewentualnie, w razie potrzeby",
    correctEnglish: "possibly, if necessary",
    note: "Eventually znaczy w końcu, po jakimś czasie. „I'll call you eventually” brzmi jak obietnica, nie jak furtka do wycofania się. Ktoś w końcu zadzwoni, tylko nie wiadomo dokładnie kiedy.",
  },
  {
    polish: "sympatyczny",
    looksLikeEnglish: "sympathetic",
    polishMeaning: "miły, budzący sympatię",
    correctEnglish: "nice, likeable",
    note: "Sympathetic to raczej współczujący niż miły. Opisanie kolegi z pracy jako sympathetic zabrzmi jak „potrafi się wczuć w czyjś smutek”, a nie jak zwykła pochwała.",
  },
  {
    polish: "lektura",
    looksLikeEnglish: "lecture",
    polishMeaning: "tekst zadany do przeczytania",
    correctEnglish: "reading, assigned reading",
    note: "Lecture to wykład, ten, który ktoś prowadzi na sali. Lektura to reading, coś, co czyta się samemu, po cichu, najczęściej wieczorem przed kolokwium.",
  },
  {
    polish: "ordynarny",
    looksLikeEnglish: "ordinary",
    polishMeaning: "grubiański, wulgarny",
    correctEnglish: "rude, vulgar",
    note: "Ordinary znaczy po prostu zwyczajny, przeciętny. Nic wspólnego z chamstwem. Nazwanie czyjegoś zachowania ordinary zabrzmi raczej jak „nudne” niż jak zarzut o grubiaństwo.",
  },
  {
    polish: "fabryka",
    looksLikeEnglish: "fabric",
    polishMeaning: "zakład produkcyjny",
    correctEnglish: "factory",
    note: "Fabric to tkanina, materiał, z którego szyje się ubrania. Ktoś, kto mówi o pracy „in a fabric”, ma zwykle na myśli krawiectwo, nie halę produkcyjną.",
  },
  {
    polish: "dres",
    looksLikeEnglish: "dress",
    polishMeaning: "strój sportowy",
    correctEnglish: "tracksuit",
    note: "Dress to sukienka. „I run every morning in a dress” brzmi więc zabawnie dosłownie, bo raczej nie o takie bieganie chodziło.",
  },
  {
    polish: "szef",
    looksLikeEnglish: "chef",
    polishMeaning: "przełożony w pracy",
    correctEnglish: "boss, manager",
    note: "Chef to szef kuchni, nie przełożony w biurze. Te słowa mylą się nawet na wyższych poziomach, dopóki ktoś nie dopyta, w jakiej właściwie restauracji pracujesz.",
  },
];
