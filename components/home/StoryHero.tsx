"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";
import FloatingEmoji from "@/components/ui/FloatingEmoji";
import { labubuConfetti } from "@/lib/confetti";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmojiTap = () => {
    labubuConfetti();
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Floating emoji background */}
      <div className="hidden md:block">
        <FloatingEmoji />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story & Text */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Heart badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-200 rounded-full text-pink-700 text-sm font-medium">
              <span className="animate-pulse">💝</span>
              Made with Love
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900">For My Mom,</span>
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mt-2">
                10,000 Miles Away
              </span>
            </h1>

            {/* Story */}
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                I'm a Labubu fan. So is my mom.
              </p>
              <p>
                She's in{" "}
                <span className="font-semibold text-pink-600">Shanghai</span>.
                I'm in{" "}
                <span className="font-semibold text-blue-600">New York</span>.
                <span className="block mt-1 text-gray-600">
                  I moved here 10 years ago.
                </span>
              </p>
              <p>
                She told me Labubu reminded her of me. But she didn't want hers dangling on her handbag, getting dirty and bouncing around.
              </p>
              <p>
                So I made this for her. Whatever it takes to make her smile.
              </p>
              <p className="text-xl font-medium text-purple-700">
                She loves it. Now she carries Labubu everywhere.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-4 pt-4">
              <p className="text-base text-gray-600">
                If you love Labubu too, maybe this can bring you—or someone you care about—that same joy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/product/labubu-grip">
                  <AnimatedButton
                    animationType="bounce"
                    size="lg"
                    className="text-lg py-5 px-8"
                  >
                    🎁 Pre-Order Now — $31.20
                  </AnimatedButton>
                </Link>
                <Link href="#story">
                  <AnimatedButton
                    variant="outline"
                    animationType="wiggle"
                    size="lg"
                    className="text-lg py-5 px-8"
                  >
                    Read Our Story ✨
                  </AnimatedButton>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-pink-500"
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
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                  </svg>
                  Free US Shipping
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-500"
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
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main product image */}
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <button
                  onClick={handleEmojiTap}
                  className="absolute inset-0 w-full h-full group"
                  aria-label="Tap for surprise"
                >
                  <Image
                    src="/images/hero/hero-labubu-cloud.png"
                    alt="Labubu Grip - Made with Love"
                    fill
                    className="object-contain drop-shadow-2xl group-active:scale-95 transition-transform duration-200"
                    priority
                  />
                  {/* Mobile tap hint */}
                  <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
                    <div className="animate-bounce bg-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Tap for surprise! ✨
                    </div>
                  </div>
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-gray-600">
        <span className="text-sm font-medium">Scroll to read more</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </section>
  );
}
