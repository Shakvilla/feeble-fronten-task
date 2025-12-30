'use client'
import { useState, useEffect, Suspense } from 'react';

// COMPONENTS  & LOCAL IMPORTS
import { Navbar } from "./_components/Navbar/page";
import Hero from "./_components/Hero/page";
import BackgroundLayers from "@/app/_components/BackgroundLayout/BackgroundLayers";
import {FlyingBirds} from "@/app/_components/BackgroundLayout/FlyingBirds";
import PageLoadingSVG from "./_components/SVGComponents/PageLoadingSVG";


export default function Home() {
  const [showBirds, setShowBirds] = useState(false);

  useEffect(() => {
    // Delay the flying birds animation to let Hero section fully load
    const timer = setTimeout(() => {
      setShowBirds(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<PageLoadingSVG />}>

         <div className="relative min-h-screen bg-gradient-to-b from-[#F0F7FF] via-[#E6F3FF] to-[#DBEAFE] overflow-hidden selection:bg-brand-blue selection:text-white">
         <Navbar />
              <main className="relative w-full h-full min-h-screen flex flex-col">
        <Hero />
        <BackgroundLayers />
      </main>
      {/* Flying birds - delayed to let Hero section load first */}
      {showBirds && <FlyingBirds />}

    </div>
    </Suspense>
 
  );
}
