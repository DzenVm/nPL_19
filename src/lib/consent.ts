export const CONSENT_STORAGE_KEY = "lemneeva-consent-v1";
export const CONSENT_CHANGE_EVENT = "lemneeva-consent-change";

export type ConsentRecord = {
  necessary: true;
  ads: boolean;
  decidedAt: string;
};

export function persistConsent(consent: ConsentRecord) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function readAdsConsent(): boolean {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    return parsed.ads === true;
  } catch {
    return false;
  }
}
