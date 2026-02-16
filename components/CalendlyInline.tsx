"use client";

import Script from "next/script";

export default function CalendlyInline() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/juayongphoebe"
        style={{ minWidth: 320, height: 700 }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
