
import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";

export function LandingPage() {
  return (
    <div className="flex overflow-hidden flex-col px-7 pt-11 pb-28 bg-neutral-950 max-md:px-5 max-md:pb-24">
      <Header />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
