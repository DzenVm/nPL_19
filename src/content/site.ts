export const site = {
  domain: "lemneeva.top",
  url: "https://lemneeva.top",
  contactEmail: "kontakt@lemneeva.top",
  locale: "pl_PL",
  timeZone: "Europe/Warsaw",
} as const;

export const navLinks = [
  { href: "/metoda", label: "Metoda" },
  { href: "/poziomy", label: "Poziomy" },
  { href: "/sprawdz-poziom", label: "Sprawdź poziom" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalLinks = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/regulamin", label: "Regulamin" },
  { href: "/cookies", label: "Polityka cookies" },
] as const;
