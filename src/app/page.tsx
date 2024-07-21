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

        <div className=" relative flex_center mt-[10em]">
          <LogoSVG color="hsl(var(--primary))" className="z-10" />
          <span className="absolute bg-primary/30 w-[500px] aspect-square rounded-full opacity-0 animate-ripple"></span>
          <span className="absolute bg-primary/30 w-[500px] aspect-square rounded-full opacity-0 animate-ripple delay-1000"></span>
        </div>
      </HeroHighlight>
    </main>
  );
}
