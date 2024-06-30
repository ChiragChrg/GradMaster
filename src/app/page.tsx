"use client"

import Header from "@/components/Header";
import PWA from "@/lib/pwa";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    PWA()
  }, [])

  return (
    <div className="">
      <Header />

      <h1 className="w-full text-center uppercase">yoo broo</h1>
    </div>
  );
}
