"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { CONSENT_CHANGE_EVENT, readAdsConsent } from "@/lib/consent";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot() {
  return false;
}

/**
 * No ads tag ships until a visitor opts in through the cookie banner, and only
 * when NEXT_PUBLIC_GOOGLE_ADS_ID is actually configured for this deployment.
 */
export function GoogleTag() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const hasConsent = useSyncExternalStore(subscribe, readAdsConsent, getServerSnapshot);

  if (!adsId || !hasConsent) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`} strategy="afterInteractive" />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}
