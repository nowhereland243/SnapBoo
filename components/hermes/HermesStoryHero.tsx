"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HermesButton from "@/components/hermes/HermesButton";
import { labubuConfetti } from "@/lib/confetti";

export default function HermesStoryHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleIllustrationTap = () => {
    labubuConfetti();
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5A742] py-16 md:py-0">
      {/* Content Container - Mobile First */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Story & Text - Mobile First Sizing */}
          <div className="space-y-5 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Heart badge - Hermès style - Touch friendly */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#FFF066] border-[3px] border-black text-black text-xs md:text-sm font-black uppercase touch-manipulation">
              <span>💝</span>
              Made with Love
            </div>

            {/* Main Headline - Mobile friendly sizing */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight px-4 lg:px-0"
              style={{
                fontFamily: '"Arial Black", "Arial Bold", sans-serif',
              }}
            >
              <span className="block text-black">For My Mom,</span>
              <span className="block text-white mt-1 md:mt-2">
                10,000 Miles Away
              </span>
            </h1>

            {/* Story - Compact on mobile */}
            <div className="space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg text-black leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 lg:px-0">
              <p className="font-semibold">I'm a Labubu fan. So is my mom.</p>
              <p>
                She's in{" "}
                <span className="font-black bg-white px-1.5 py-0.5 md:px-2 md:py-1 border-[2px] border-black whitespace-nowrap">
                  Shanghai
                </span>
                . I'm in{" "}
                <span className="font-black bg-white px-1.5 py-0.5 md:px-2 md:py-1 border-[2px] border-black whitespace-nowrap">
                  New York
                </span>
                .
                <span className="block mt-1 md:mt-2">
                  I moved here 10 years ago.
                </span>
              </p>
              <p>
                She told me Labubu reminded her of me. But she didn't want hers
                dangling on her handbag, getting dirty and bouncing around.
              </p>
              <p className="font-semibold">
                So I made this for her. Whatever it takes to make her smile.
              </p>
              <p className="text-base md:text-lg lg:text-xl font-black text-white bg-black px-3 py-1.5 md:px-4 md:py-2 inline-block border-[3px] border-black">
                She loves it. Now she carries Labubu everywhere.
              </p>
            </div>

            {/* CTA - Full width on mobile */}
            <div className="space-y-3 md:space-y-4 pt-2 md:pt-4 px-4 lg:px-0">
              <p className="text-sm md:text-base font-medium text-black">
                If you love Labubu too, maybe this can bring you—or someone you
                care about—that same joy.
              </p>
              <div className="flex flex-col gap-3 md:gap-4 justify-center lg:justify-start">
                <div className="space-y-2">
                  <HermesButton
                    variant="primary"
                    href="/product/labubu-grip"
                    size="md"
                  >
                    PRE-ORDER $31.20
                  </HermesButton>
                  <div className="text-center lg:text-left px-4">
                    <p className="text-xs md:text-sm font-black text-black">
                      <span className="line-through opacity-60">$39.00</span>{" "}
                      <span className="text-white bg-[#8B4844] px-2 py-0.5 border-[2px] border-black">
                        SAVE 20%
                      </span>
                    </p>
                  </div>
                </div>
                <HermesButton variant="secondary" href="#story" size="md">
                  READ STORY
                </HermesButton>
              </div>

              {/* Trust indicators - Clear on all devices */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3 pt-4 md:pt-6 text-xs md:text-sm font-bold text-black uppercase w-full max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 bg-white px-3 py-2 border-[2px] md:border-[3px] border-black touch-manipulation w-full sm:w-auto justify-center">
                  <span>📦</span>
                  <span>Only 100 Units</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-2 border-[2px] md:border-[3px] border-black touch-manipulation w-full sm:w-auto justify-center">
                  <span>🚚</span>
                  <span>Free US Ship</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-2 border-[2px] md:border-[3px] border-black touch-manipulation w-full sm:w-auto justify-center">
                  <span>⏰</span>
                  <span>Ships 30 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration - Mobile optimized */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main illustration - Smaller on mobile */}
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-[#F4E8B8] border-[3px] md:border-[4px] border-black rounded-lg overflow-hidden shadow-[6px_6px_0_#000] md:shadow-[8px_8px_0_#000]">
                <button
                  onClick={handleIllustrationTap}
                  className="relative w-full h-full group active:scale-95 transition-transform touch-manipulation"
                  aria-label="Tap for surprise"
                >
                  <Image
                    src="/images/story2/hero-mother-son-labubu.png"
                    alt="Mother and son connected through Labubu across Shanghai and New York"
                    fill
                    className="object-contain p-4 md:p-6 lg:p-8"
                    priority
                  />
                  {/* Mobile tap hint - Animated */}
                  <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none animate-bounce">
                    <div className="bg-[#FFF066] border-[2px] border-black text-black px-3 py-1 text-xs font-black uppercase">
                      TAP ME! ✨
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile, animate on desktop */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-black animate-bounce">
        <span className="text-xs md:text-sm font-black uppercase">Scroll</span>
        <div className="w-6 h-6 md:w-8 md:h-8 border-[2px] md:border-[3px] border-black bg-white flex items-center justify-center">
          <svg
            className="w-3 h-3 md:w-4 md:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
