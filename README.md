# lemneeva.top

Polskojęzyczny serwis SSR na Next.js 16 (App Router) poświęcony nauce języka
angielskiego online dla dorosłych w Polsce. Strona główna jest maksymalnie
nasycona treścią własną: metoda, poziomy A1–C2, test poziomu, fałszywi
przyjaciele językowi, organizacja zajęć, planowanie nauki pod konkretny
termin, FAQ. `/metoda`, `/poziomy` i `/sprawdz-poziom` rozwijają wybrane
wątki na osobnych podstronach.

## Stos technologiczny i czym się wyróżnia

- **Next.js 16** (App Router) + React 19 + TypeScript, z włączonym
  **Cache Components** (`cacheComponents: true`). Strona główna jest w
  większości statycznym shellem HTML. Jedyną prawdziwą dziurą dynamiczną
  jest widżet „najbliższy start grupy”, liczony z bieżącej daty serwera w
  strefie `Europe/Warsaw` przez `connection()` + `<Suspense>`. To zwykły
  grafik zajęć, nie sztuczny licznik: grupy realnie startują w każdy
  poniedziałek.
- **Tailwind CSS v4** (silnik CSS-first, `@theme` w `globals.css`) zamiast
  klasycznego `tailwind.config.js` czy ręcznych CSS Modules. Własne tokeny
  koloru i typografii zarejestrowane jako zmienne motywu.
- **Zero JS tam, gdzie się da.** Mobilne menu w nagłówku i lista „fałszywych
  przyjaciół” językowych działają na natywnych `<details>/<summary>`, bez
  ani jednej linijki JavaScriptu. Jedyne komponenty klienckie to baner
  zgody na cookies, znacznik Google i krótki, samodzielny test poziomu.
- **Test poziomu (`/sprawdz-poziom`)**: sześć pytań samooceny, realna
  logika punktacji mapująca wynik na skalę CEFR (A1–C2), bez zewnętrznych
  bibliotek formularzy.
- **6 rastrowych obrazów PNG wygenerowanych proceduralnie.**
  `scripts/generate-images.mjs` buduje sceny z kodu (seedowany PRNG, SVG) i
  renderuje je do PNG przez headless Chromium (Playwright), zamiast używać
  zdjęć stockowych. Do tego dwie ikony aplikacji (192/512 px) tym samym
  mechanizmem.
- Fawikona (`src/app/icon.tsx`, `apple-icon.tsx`) to osobny, abstrakcyjny
  znak wygenerowany przez `next/og`: dwa nachodzące na siebie kafle, bez
  liter i bez związku z jakimkolwiek istniejącym logotypem.
- Zero brandingu: serwis nie ma nazwy własnej ani logotypu. W nagłówku i
  stopce widnieje wyłącznie sama domena, tekstowo.

## Komendy

```bash
npm install
npm run dev          # lokalny serwer deweloperski, http://localhost:3000
npm run build         # produkcyjny build
npm run start          # uruchomienie builda lokalnie
npm run lint             # ESLint (flat config, eslint-config-next)
npm run gen:images        # regeneracja 8 obrazów w public/images i public/icons
```

Wymagania: Node.js ≥ 20.9. `npm run gen:images` wymaga Playwrighta z dostępem
do przeglądarki Chromium (w tym środowisku skonfigurowany już przez
`PLAYWRIGHT_BROWSERS_PATH`; lokalnie użyj `npx playwright install chromium`
i usuń jawny `executablePath` w skrypcie, jeśli ścieżka się nie zgadza).

## Struktura

```
src/app/                # trasy App Router (/, /metoda, /poziomy, /sprawdz-poziom,
                         # /kontakt, strony prawne, sitemap/robots/manifest/OG/ikony)
src/components/          # nagłówek, stopka, baner cookies, znacznik Google,
                         # widżet startu grupy, test poziomu, lista fałszywych przyjaciół
src/content/               # typizowana treść (poziomy, metoda, pytania, quiz…)
src/lib/                     # obliczanie najbliższego poniedziałku, zgoda na cookies, quiz
public/images/, public/icons/ # obrazy i ikony wygenerowane proceduralnie
scripts/generate-images.mjs    # generator obrazów (Playwright + SVG)
```

## Deploy na Vercel

1. Zaimportuj to repozytorium/gałąź jako nowy projekt na
   [vercel.com](https://vercel.com). Framework Next.js wykryje się
   automatycznie (`vercel.json` ustawia jedynie region `fra1`, najbliższy
   Polsce).
2. Zmienne środowiskowe nie są wymagane do działania serwisu. Opcjonalnie
   ustaw `NEXT_PUBLIC_GOOGLE_ADS_ID` (patrz `.env.example`). Znacznik
   Google Ads załaduje się wtedy, ale wyłącznie po zgodzie użytkownika na
   cookies reklamowe (patrz `src/components/GoogleTag.tsx`).
3. Po pierwszym deployu: **Project → Settings → Domains → Add** → wpisz
   `lemneeva.top` (opcjonalnie też `www.lemneeva.top`).
4. U rejestratora domeny ustaw rekordy DNS wskazane przez Vercel w trakcie
   dodawania domeny (zwykle `A @ 76.76.21.21` dla apeksu i/lub
   `CNAME www cname.vercel-dns.com`). Warto kierować się dokładnie tym, co
   pokaże panel Vercel w danym momencie, bo te wartości bywają aktualizowane.
5. Certyfikat SSL wystawia się automatycznie po potwierdzeniu DNS, zwykle w
   ciągu kilku minut.

## Google Ads / RODO: co już uwzględniono

- Baner zgody na cookies (niezbędne / reklamowe) z realnym zapisem wyboru w
  `localStorage`, bez dark patterns i bez blokowania treści przy odmowie.
  Patrz `src/components/CookieConsent.tsx`.
- `/polityka-prywatnosci`, `/regulamin`, `/cookies`, `/kontakt`: treściwe
  strony napisane pod ten konkretny serwis, nie szablonowe zaślepki.
- Znacznik Google (`GoogleTag.tsx`) ładuje się wyłącznie po zgodzie i
  wyłącznie gdy skonfigurowany jest `NEXT_PUBLIC_GOOGLE_ADS_ID`.
- Brak fałszywych opinii, ocen czy liczników uczniów. Brak fałszywego
  odliczania: widżet startu grupy pokazuje realną datę najbliższego
  poniedziałku, nie malejącą pulę „ostatnich miejsc”.
- Serwis celowo nie podaje na stronie żadnych kwot ani stawek. Wszystkie
  szczegóły organizacyjne ustalane są indywidualnie w bezpośrednim
  kontakcie, opisanym na `/kontakt`.
- Osobna sekcja na stronie głównej („Czego nie obiecujemy”) wprost odcina
  się od nierealistycznych obietnic typu „płynny angielski w miesiąc”.
