export type QuizOption = {
  text: string;
  score: 1 | 2 | 3 | 4;
};

export type QuizQuestion = {
  prompt: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    prompt: "Rozumienie ze słuchu — co jest ci najbliższe?",
    options: [
      { text: "Łapię pojedyncze słowa, nawet gdy ktoś mówi bardzo wolno.", score: 1 },
      { text: "Rozumiem proste, powoli wypowiedziane zdania na znane tematy.", score: 2 },
      { text: "Rozumiem większość rozmowy w naturalnym tempie, jeśli temat jest mi znany.", score: 3 },
      { text: "Rozumiem swobodnie, nawet przy obcym akcencie albo szybkim tempie.", score: 4 },
    ],
  },
  {
    prompt: "Mówienie — co jest ci najbliższe?",
    options: [
      { text: "Umiem powiedzieć pojedyncze słowa i bardzo proste zwroty.", score: 1 },
      { text: "Układam proste zdania, ale często szukam słów i się zacinam.", score: 2 },
      { text: "Rozmawiam na znane tematy dość płynnie, z drobnymi błędami.", score: 3 },
      { text: "Mówię swobodnie i spontanicznie, nawet o abstrakcyjnych sprawach.", score: 4 },
    ],
  },
  {
    prompt: "Pisanie — co jest ci najbliższe?",
    options: [
      { text: "Wypełnię prosty formularz i napiszę pojedyncze zdania.", score: 1 },
      { text: "Napiszę krótką, prostą wiadomość na znany temat.", score: 2 },
      { text: "Piszę spójne wiadomości i notatki, z drobnymi błędami.", score: 3 },
      { text: "Piszę precyzyjne teksty, dopasowując styl do sytuacji.", score: 4 },
    ],
  },
  {
    prompt: "Czytanie — co jest ci najbliższe?",
    options: [
      { text: "Rozpoznaję pojedyncze znane słowa i bardzo proste zdania.", score: 1 },
      { text: "Rozumiem krótkie, proste teksty o znanych sprawach.", score: 2 },
      { text: "Czytam artykuły, rozumiejąc sens i większość szczegółów.", score: 3 },
      { text: "Czytam swobodnie teksty specjalistyczne i literackie.", score: 4 },
    ],
  },
  {
    prompt: "Rozmowa z obcokrajowcem w realnej sytuacji — co jest ci najbliższe?",
    options: [
      { text: "Stresuję się nawet bardzo prostą rozmową.", score: 1 },
      { text: "Dam sobie radę w prostych sytuacjach — zakupy, droga, hotel.", score: 2 },
      { text: "Poprowadzę rozmowę służbową czy telefoniczną bez większego stresu.", score: 3 },
      { text: "Negocjuję, prezentuję i improwizuję bez wcześniejszego przygotowania.", score: 4 },
    ],
  },
  {
    prompt: "Twój ostatni regularny kontakt z angielskim — co jest ci najbliższe?",
    options: [
      { text: "Dawno temu, w szkole — dziś niewiele z tego zostało.", score: 1 },
      { text: "Uczyłem/-am się w szkole, sporo wyleciało z głowy.", score: 2 },
      { text: "Mam regularny kontakt — praca, filmy, czytanie po angielsku.", score: 3 },
      { text: "Używam angielskiego niemal codziennie, w mowie i piśmie.", score: 4 },
    ],
  },
];
