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
    <HeroHighlight>
      <Header />

      <div className=" relative flex_center mt-[8em]">
        <LogoSVG color="hsl(var(--primary))" className="z-10" />
        <span className="absolute bg-background w-[100px] aspect-square rounded-full z-[5]"></span>
        <span className="absolute bg-radialGradient w-[400px] md:w-[500px] aspect-square rounded-full opacity-0 animate-ripple"></span>
        <span className="absolute bg-radialGradient w-[400px] md:w-[500px] aspect-square rounded-full opacity-0 animate-ripple delay-1000"></span>
      </div>

      <div className="flex_center flex-col mt-12 p-4">
        <h1 className="text-[2.5em] font-bold tracking-wider mt-4">GradMaster</h1>
        {/* <h2 className="text-[1.2em]">Graduate Mastery at your fingertips</h2> */}
        <h2 className="text-[1.2em] text-center">Transforming Academic Management with Innovation and Insight</h2>
      </div>
    </HeroHighlight>
  );
}
