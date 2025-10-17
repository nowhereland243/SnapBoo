"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PriceDisplay from "@/components/ui/PriceDisplay";
import StockCounter from "@/components/ui/StockCounter";
import AnimatedButton from "@/components/ui/AnimatedButton";
import FloatingEmoji from "@/components/ui/FloatingEmoji";
import { labubuConfetti } from "@/lib/confetti";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [showVisitorCount, setShowVisitorCount] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    setMounted(true);
    const randomCount = Math.floor(Math.random() * 50) + 150;
    setVisitorCount(randomCount);
    const timer = setTimeout(() => setShowVisitorCount(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEmojiTap = () => {
    labubuConfetti();
    setTapped(true);
    setTimeout(() => setTapped(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Floating emoji background */}
      <div className="hidden md:block">
        <FloatingEmoji />
      </div>

      {/* Visitor count badge */}
      {mounted && showVisitorCount && (
        <div className="absolute top-20 md:top-24 right-4 md:right-8 z-20 animate-in slide-in-from-right duration-500">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
            <span className="animate-pulse">👀</span>
            <span className="text-sm font-medium">
              <span className="font-bold">{visitorCount}</span> people viewing
            </span>
          </div>
        </div>
      )}

      {/* Hero Image */}
      <div className="relative w-full h-[60vh] md:h-[55vh] lg:absolute lg:inset-0 lg:h-full">
        <div className="md:hidden relative w-full h-full">
          <Image
            src="/images/hero/hero-labubu-magsafe.png"
            alt="Labubu Grip Hero"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>

        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/images/hero/hero-labubu-magsafe.png"
            alt="Labubu Grip Hero"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900 md:from-transparent md:via-slate-900/50 md:to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-end lg:items-center">
        <div className="w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden container mx-auto px-6 pb-4 pt-4">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium animate-in fade-in slide-in-from-bottom duration-500">
                <span className="animate-pulse">🎉</span>
                Limited Edition
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white animate-in fade-in slide-in-from-bottom duration-700 delay-100">
                Snap Your Labubu,
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                  Share the Love
                </span>
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
                The first-ever MagSafe grip for Labubu fans.
              </p>

              <div className="py-2 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <PriceDisplay price={31.2} compareAtPrice={39} />
              </div>

              <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-400">
                <StockCounter total={100} sold={62} />
              </div>

              <div className="flex flex-col gap-3 pt-2 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <Link href="/product/labubu-grip" className="w-full">
                  <AnimatedButton
                    animationType="bounce"
                    size="lg"
                    fullWidth
                    className="text-base sm:text-lg py-4"
                  >
                    🎁 Pre-Order Now
                  </AnimatedButton>
                </Link>
                <Link href="/story2" className="w-full">
                  <AnimatedButton
                    variant="outline"
                    animationType="wiggle"
                    size="lg"
                    fullWidth
                    className="border-white text-white hover:bg-white/10"
                  >
                    Read Our Story ✨
                  </AnimatedButton>
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-3 text-white/80 text-sm animate-in fade-in slide-in-from-bottom duration-700 delay-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  30 days
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                  </svg>
                  Free Shipping
                </div>
              </div>

              <div className="pt-2 flex justify-center animate-in fade-in duration-700 delay-700">
                <div className="flex flex-col items-center gap-2 text-white/60">
                  <span className="text-xs font-medium">Scroll to explore</span>
                  <svg
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block container mx-auto px-8 py-20">
            <div className="grid grid-cols-12 gap-8 items-center min-h-[70vh]">
              {/* Left Column */}
              <div className="col-span-5 space-y-6 animate-in fade-in slide-in-from-left duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  <span className="animate-pulse">🎉</span>
                  Pre-Order Now - Limited Edition
                </div>

                <h1 className="text-5xl font-bold leading-tight text-white">
                  Snap Your Labubu,
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2">
                    Share the Love
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-md">
                  The first-ever MagSafe grip designed exclusively for Labubu
                  fans. Keep your favorite companion close, always.
                </p>

                <div className="flex flex-col gap-3 pt-4 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Limited to 100 units
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Ships in 30 days
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                    </svg>
                    Free US Shipping
                  </div>
                </div>
              </div>

              <div className="col-span-2"></div>

              {/* Right Column */}
              <div className="col-span-5 space-y-6 flex flex-col items-end animate-in fade-in slide-in-from-right duration-700">
                <PriceDisplay price={31.2} compareAtPrice={39} />

                <StockCounter total={100} sold={62} />

                <div className="flex flex-col gap-4 pt-4 w-full max-w-xs">
                  <Link href="/product/labubu-grip">
                    <AnimatedButton animationType="bounce" size="lg" fullWidth>
                      🎁 Pre-Order Now
                    </AnimatedButton>
                  </Link>
                  <Link href="/story2">
                    <AnimatedButton
                      variant="outline"
                      animationType="wiggle"
                      size="lg"
                      fullWidth
                      className="border-white text-white hover:bg-white/10"
                    >
                      Read Our Story ✨
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
