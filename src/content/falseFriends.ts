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
    note: "„Actual” znaczy „faktyczny, prawdziwy”. Zdanie „What is the actual price?” pyta o realną cenę, nie o cenę aktualnie obowiązującą w promocji — to subtelna różnica, ale sprzedawcy ją słyszą.",
  },
  {
    polish: "eventualnie",
    looksLikeEnglish: "eventually",
    polishMeaning: "ewentualnie, w razie potrzeby",
    correctEnglish: "possibly / if necessary",
    note: "„Eventually” znaczy „w końcu, ostatecznie”. „I will eventually call you” to nie „ewentualnie zadzwonię”, tylko „w końcu zadzwonię” — obietnica, nie opcja.",
  },
  {
    polish: "sympatyczny",
    looksLikeEnglish: "sympathetic",
    polishMeaning: "miły, budzący sympatię",
    correctEnglish: "nice / likeable",
    note: "„Sympathetic” to „współczujący”. Powiedzenie o kimś „he is very sympathetic”, mając na myśli, że jest miły, zabrzmi tak, jakbyś opisywał terapeutę, a nie kolegę z zespołu.",
  },
  {
    polish: "lektura",
    looksLikeEnglish: "lecture",
    polishMeaning: "tekst zadany do przeczytania",
    correctEnglish: "reading / assigned reading",
    note: "„Lecture” to wykład — to, co mówi prowadzący, a nie to, co czytasz sam. Zamiana tych dwóch słów w opowieści o studiach potrafi całkowicie zmienić sens zdania.",
  },
  {
    polish: "pensja",
    looksLikeEnglish: "pension",
    polishMeaning: "wynagrodzenie za pracę",
    correctEnglish: "salary",
    note: "„Pension” to emerytura. Rozmowa o podwyżce „pension” z działem kadr w Wielkiej Brytanii skończy się nieporozumieniem, na jakie świadczenie właściwie liczysz.",
  },
  {
    polish: "fabryka",
    looksLikeEnglish: "fabric",
    polishMeaning: "zakład produkcyjny",
    correctEnglish: "factory",
    note: "„Fabric” to tkanina lub materiał. Jeśli opowiadasz o pracy „in a fabric”, rozmówca pomyśli raczej o krawiectwie niż o hali produkcyjnej.",
  },
  {
    polish: "dres",
    looksLikeEnglish: "dress",
    polishMeaning: "strój sportowy, komplet do biegania",
    correctEnglish: "tracksuit",
    note: "„Dress” to sukienka. Zdanie „I run in a dress” brzmi zaskakująco dosłownie — i raczej nie o to chodziło.",
  },
  {
    polish: "szef",
    looksLikeEnglish: "chef",
    polishMeaning: "przełożony w pracy",
    correctEnglish: "boss / manager",
    note: "„Chef” to szef kuchni, nie szef działu. Te słowa brzmią do siebie na tyle podobnie, że mylą się nawet na wyższych poziomach — dopóki ktoś nie zapyta, w jakiej restauracji pracujesz.",
  },
];
