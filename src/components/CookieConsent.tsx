"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { CONSENT_CHANGE_EVENT, CONSENT_STORAGE_KEY, persistConsent } from "@/lib/consent";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function shouldPromptOnClient() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === null;
  } catch {
    return false;
  }
}

function shouldPromptOnServer() {
  return false;
}

export function CookieConsent() {
  const shouldPrompt = useSyncExternalStore(subscribe, shouldPromptOnClient, shouldPromptOnServer);
  const [expanded, setExpanded] = useState(false);
  const [adsChoice, setAdsChoice] = useState(false);

  if (!shouldPrompt) return null;

  function acceptAll() {
    persistConsent({ necessary: true, ads: true, decidedAt: new Date().toISOString() });
  }

  function necessaryOnly() {
    persistConsent({ necessary: true, ads: false, decidedAt: new Date().toISOString() });
  }

  function saveChoice() {
    persistConsent({ necessary: true, ads: adsChoice, decidedAt: new Date().toISOString() });
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Ustawienia plików cookie"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper/98 px-5 py-5 shadow-[0_-6px_24px_rgba(20,16,9,0.12)] backdrop-blur sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-ink-soft">
          Ta strona zapisuje w Twojej przeglądarce wybór dotyczący plików cookie. To plik
          niezbędny do samego działania tego komunikatu. Za Twoją zgodą włączymy też znacznik
          reklamowy, który pozwala mierzyć skuteczność kampanii. Bez zgody strona działa
          identycznie, po prostu bez tego pomiaru. Szczegóły w{" "}
          <Link href="/cookies" className="underline decoration-rule hover:decoration-ink">
            polityce cookies
          </Link>
          .
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={necessaryOnly}
            className="rounded-sm border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-sm bg-cobalt px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-cobalt-deep"
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>

      <details
        className="mx-auto mt-3 max-w-6xl"
        open={expanded}
        onToggle={(event) => setExpanded(event.currentTarget.open)}
      >
        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-ink-faint hover:text-ink-soft">
          Dostosuj wybór
        </summary>
        <div className="mt-3 flex flex-col gap-3 border-t border-rule pt-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-start gap-3 text-sm text-ink-soft">
            <input
              type="checkbox"
              checked
              disabled
              className="mt-0.5 h-4 w-4 accent-ink-faint"
              aria-label="Niezbędne, zawsze aktywne"
            />
            <span>
              <strong className="text-ink">Niezbędne.</strong> Zapamiętują Twój wybór zgody i nic
              więcej. Zawsze aktywne.
            </span>
          </label>
          <label className="flex items-start gap-3 text-sm text-ink-soft">
            <input
              type="checkbox"
              checked={adsChoice}
              onChange={(event) => setAdsChoice(event.target.checked)}
              className="mt-0.5 h-4 w-4 accent-cobalt"
            />
            <span>
              <strong className="text-ink">Reklamowe.</strong> Znacznik konwersji kampanii
              reklamowych.
            </span>
          </label>
          <button
            type="button"
            onClick={saveChoice}
            className="rounded-sm border border-ink/20 px-4 py-2 text-sm font-semibold text-ink hover:border-ink/40"
          >
            Zapisz wybór
          </button>
        </div>
      </details>
    </div>
  );
}
