"use client"

import Header from "@/components/Header";
import LogoSVG from "@/components/CustomUI/LogoSVG";
import PWA from "@/lib/pwa";
import { useEffect } from "react";
import { HeroHighlight, Highlight } from "@/components/CustomUI/dotBackground";

export default function Home() {
  useEffect(() => {
    PWA()
  }, [])

  return (
    <main className="">
      <HeroHighlight>
        <Header />

        <div className="flex_center mt-[10em]">
          <LogoSVG color="hsl(var(--primary))" />
          <span className="Hero_Waves animate-ripple"></span>
        </div>
      </HeroHighlight>
    </main>
  );
}
