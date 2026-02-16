"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/preloader/Preloader";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Show once per tab session (refresh won’t replay).
    const seen = sessionStorage.getItem("pgj_preloader_seen");
    if (seen) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("pgj_preloader_seen", "1");

    const t = window.setTimeout(() => setShow(false), 1400); // 1.4s total
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      {show && <Preloader />}
      <div style={{ opacity: show ? 0 : 1, transition: "opacity 400ms ease" }}>
        {children}
      </div>
    </>
  );
}
