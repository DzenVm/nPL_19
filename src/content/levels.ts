export type Level = {
  code: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  name: string;
  startingPoint: string;
  whatChanges: string;
  sampleCanDo: string[];
};

export const levels: Level[] = [
  {
    code: "A1",
    name: "Punkt zero, bez wstydu",
    startingPoint:
      "Zwykle trafiają tu osoby, które uczyły się angielskiego w szkole kilkanaście lat temu i zostały im pojedyncze słowa oraz przekonanie, że „i tak nic nie pamiętam”. To nieprawda — bierne rozpoznawanie słów wraca bardzo szybko, brakuje tylko odwagi, żeby zacząć mówić.",
    whatChanges:
      "Uczymy się budować proste zdania na bieżąco, zamiast tłumaczyć je w głowie z polskiego. Nacisk jest na to, żeby przestać się bać otworzyć usta — poprawność gramatyczna przychodzi później.",
    sampleCanDo: [
      "Przedstawisz siebie i podasz podstawowe informacje bez zawieszania się w połowie zdania.",
      "Zamówisz jedzenie, zapytasz o cenę i zrozumiesz odpowiedź, nawet jeśli nie znasz każdego słowa.",
      "Wypełnisz prosty formularz i napiszesz krótką wiadomość, nie zaglądając co chwilę do słownika.",
    ],
  },
  {
    code: "A2",
    name: "Zdania zaczynają się same składać",
    startingPoint:
      "Ten poziom trafia najczęściej do osób, które rozumieją więcej, niż same o sobie myślą — potrafią przeczytać prosty tekst, ale w rozmowie wciąż gubią się po pierwszych trzech zdaniach.",
    whatChanges:
      "Poszerzamy zestaw sytuacji, w których poruszasz się swobodnie — praca, zakupy, drobne problemy do rozwiązania — i zaczynamy pracować nad płynnością, czyli mówieniem bez długich pauz na szukanie słowa.",
    sampleCanDo: [
      "Opowiesz o swoim dniu, pracy i planach na weekend bez przygotowywania sobie zdań wcześniej.",
      "Poprowadzisz krótką rozmowę telefoniczną w prostej sprawie służbowej.",
      "Zrozumiesz ogólny sens filmu lub podcastu, nawet gdy część słownictwa jest ci obca.",
    ],
  },
  {
    code: "B1",
    name: "Samodzielność w codziennych sprawach",
    startingPoint:
      "Sporo osób utyka właśnie tu na lata, bo B1 wystarcza, żeby jakoś sobie radzić — więc motywacja do dalszej nauki spada. To najczęstszy poziom osób zapisujących się do nas z myślą „umiem się dogadać, ale chcę przestać się jąkać”.",
    whatChanges:
      "Pracujemy nad wyrażaniem opinii, a nie tylko relacjonowaniem faktów — czyli nad zdaniami zaczynającymi się od „uważam, że” albo „z drugiej strony”, nie tylko „chcę” i „potrzebuję”.",
    sampleCanDo: [
      "Weźmiesz udział w dyskusji na znany temat i uzasadnisz swoje zdanie, nawet jeśli ktoś się z tobą nie zgadza.",
      "Napiszesz spójny e-mail służbowy bez tłumaczenia go zdanie po zdaniu z polskiego.",
      "Obejrzysz wiadomości lub wywiad i zrozumiesz większość bez napisów.",
    ],
  },
  {
    code: "B2",
    name: "Swoboda w pracy i w podróży",
    startingPoint:
      "Tu trafiają osoby, którym angielski jest potrzebny konkretnie — do awansu, zmiany pracy, przeprowadzki albo bo w firmie nagle wszystkie spotkania są po angielsku. Znajomość języka już jest, brakuje precyzji i pewności siebie.",
    whatChanges:
      "Skupiamy się na niuansach: rejestrze językowym (co innego mówisz do szefa, co innego do kolegi), poprawianiu nawyków, które utrwaliły się błędnie, i słownictwie specyficznym dla twojej branży.",
    sampleCanDo: [
      "Poprowadzisz prezentację lub spotkanie po angielsku bez przygotowanego wcześniej skryptu.",
      "Negocjujesz warunki, składasz reklamację, bronisz swojego stanowiska w rozmowie z native speakerem.",
      "Czytasz dokumenty branżowe i rozumiesz nie tylko treść, ale i ton wypowiedzi.",
    ],
  },
  {
    code: "C1",
    name: "Sprawność zawodowa",
    startingPoint:
      "Osoby na tym poziomie zwykle już świetnie się komunikują — problem leży gdzie indziej: w drobnych błędach, które powtarzają się od lat, bo nikt ich nigdy nie poprawił, oraz w poczuciu, że brzmią bardziej sztywno niż chcieliby.",
    whatChanges:
      "Praca punktowa nad utrwalonymi błędami (każdy ma swój indywidualny zestaw), rozbudowa słownictwa abstrakcyjnego i idiomatycznego, ćwiczenie naturalnej intonacji, żeby wypowiedź brzmiała płynnie, a nie jak czytana z kartki.",
    sampleCanDo: [
      "Formułujesz złożone argumenty i rozumiesz aluzje, ironię czy grę słów w rozmowie.",
      "Piszesz teksty formalne i nieformalne, dobierając ton do sytuacji bez zastanowienia.",
      "Rozumiesz native speakerów mówiących szybko, z akcentem regionalnym lub przez telefon o słabej jakości.",
    ],
  },
  {
    code: "C2",
    name: "Poziom bliski native",
    startingPoint:
      "Ten poziom to zwykle domena tłumaczy, lektorów albo osób, które mieszkały za granicą wiele lat. Rzadko zaczyna się tu naukę — częściej dochodzi się do niego po latach pracy na niższych poziomach.",
    whatChanges:
      "Nauka staje się bardziej kuratorska niż systematyczna — dobieramy materiały (artykuły, nagrania, literaturę) pod konkretne braki i zainteresowania, zamiast trzymać się sztywnego programu.",
    sampleCanDo: [
      "Swobodnie żartujesz, improwizujesz i rozumiesz kontekst kulturowy, nie tylko słowa.",
      "Redagujesz teksty innych osób, wychwytując niuanse stylistyczne.",
      "Twoja wypowiedź nie zdradza, że angielski nie jest twoim pierwszym językiem — chyba że sam o tym powiesz.",
    ],
  },
];
