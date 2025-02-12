"use client";

import Script from 'next/script';

export default function AnalyticsScript() {
  const handleLAOnLoad = () => {
    if (typeof window !== 'undefined' && (window as any).LA) {
      (window as any).LA.init({ id: "3LEhgRw88R4WHpfa", ck: "3LEhgRw88R4WHpfa" });
    } else {
      console.error("LA is not defined");
    }
  };

  return (
    <Script
      strategy="afterInteractive"
      src="//sdk.51.la/js-sdk-pro.min.js"
      id="LA_COLLECT"
      charSet="UTF-8"
      onLoad={handleLAOnLoad}
    />
  );
}
