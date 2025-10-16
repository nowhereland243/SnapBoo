"use client";

import { useEffect, useRef } from "react";
import HermesButton from "@/components/hermes/HermesButton";
import ImageMagnifier from "@/components/ui/ImageMagnifier";

export default function HermesStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".story-block");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-[#a02c31] to-[#ad1d14]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Hermès style - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 md:mb-6 text-white"
            style={{
              fontFamily: '"Arial Black", "Arial Bold", sans-serif',
            }}
          >
            Our Story
          </h2>
          <div className="h-1 w-24 md:w-32 bg-[#FFF066] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium px-2">
            A mother, a son, and a little companion that keeps them connected
            across the ocean.
          </p>
        </div>

        {/* Story Blocks - Mobile Friendly Spacing */}
        <div className="space-y-16 md:space-y-24">
          {/* Block 1: The Beginning */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - First on mobile, left on desktop */}
            <div className="relative h-64 md:h-96 border-[3px] md:border-[4px] border-black overflow-hidden shadow-[6px_6px_0_#000] md:shadow-[8px_8px_0_#000] bg-[#F4E8B8] order-1">
              <ImageMagnifier
                src="/images/story2/chapter1-10years-apart.png"
                alt="Distance and Connection - 10 Years Apart"
                magnifierHeight={250}
                magnifierWidth={250}
                zoomLevel={3}
                className="object-cover hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            {/* Text - Second on mobile, right on desktop */}
            <div className="space-y-4 md:space-y-6 order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#6DD3CE] border-[2px] md:border-[3px] border-black text-black text-xs md:text-sm font-black uppercase">
                <span>🌏</span>
                Chapter 1: Distance
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-[#fff9ad]"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                10 Years Apart
              </h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p>I moved from Shanghai to New York 10 years ago.</p>
                <p>Mom stayed. Video calls help, but they're not the same.</p>
                <p className="text-base md:text-lg lg:text-xl font-black bg-[#FFF066] text-black px-3 py-1.5 md:px-4 md:py-2 inline-block border-[2px] md:border-[3px] border-black">
                  Distance makes the little things matter more.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2: The Discovery */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-200 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - First on mobile, right on desktop */}
            <div className="relative h-64 md:h-96 border-[3px] md:border-[4px] border-black overflow-hidden shadow-[6px_6px_0_#000] md:shadow-[8px_8px_0_#000] bg-[#FFB3C6] order-1 lg:order-2">
              <ImageMagnifier
                src="/images/story2/chapter2-it-reminds-me-of-you.png"
                alt="Labubu Discovery - It Reminds Me of You"
                magnifierHeight={250}
                magnifierWidth={250}
                zoomLevel={3}
                className="object-cover hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            {/* Text - Second on mobile, left on desktop */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#FFB3C6] border-[2px] md:border-[3px] border-black text-black text-xs md:text-sm font-black uppercase">
                <span>💝</span>
                Chapter 2: Labubu
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-[#fff9ad]"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                "It Reminds Me of You"
              </h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p>
                  Mom sent me a photo of a Labubu.{" "}
                  <span className="font-black">"It reminds me of you,"</span>{" "}
                  she said.
                </p>
                <p>
                  She hung it on her bag. But it bounced around, got dirty,
                  stayed hidden.
                </p>
                <p className="font-black">
                  "It should be somewhere I can see it," she told me.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3: The Solution */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-400 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - First on mobile, left on desktop */}
            <div className="relative h-64 md:h-96 border-[3px] md:border-[4px] border-black overflow-hidden shadow-[6px_6px_0_#000] md:shadow-[8px_8px_0_#000] bg-[#95E1D3] order-1">
              <ImageMagnifier
                src="/images/story2/chapter3-so-i-made-this.png"
                alt="So I Made This - The Creation Process"
                magnifierHeight={250}
                magnifierWidth={250}
                zoomLevel={3}
                className="object-cover hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            {/* Text - Second on mobile, right on desktop */}
            <div className="space-y-4 md:space-y-6 order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#FFF066] border-[2px] md:border-[3px] border-black text-black text-xs md:text-sm font-black uppercase">
                <span>💡</span>
                Chapter 3: The Idea
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-[#fff9ad]"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                So I Made This
              </h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p>
                  I had no idea what I was doing, but I wanted her to smile.
                </p>
                <p>
                  I found a factory, designed a MagSafe grip, ordered a sample.
                  Sent it to her.
                </p>
                <p className="text-lg md:text-xl font-black bg-[#F5A742] text-white px-3 py-1.5 md:px-4 md:py-2 inline-block border-[2px] md:border-[3px] border-black">
                  She loved it.
                </p>
              </div>
            </div>
          </div>

          {/* Block 4: The Result */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-600 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - First on mobile, right on desktop */}
            <div className="relative h-64 md:h-96 border-[3px] md:border-[4px] border-black overflow-hidden shadow-[6px_6px_0_#000] md:shadow-[8px_8px_0_#000] bg-[#FFE66D] order-1 lg:order-2">
              <ImageMagnifier
                src="/images/story2/chapter4-she-loves-it.png"
                alt="She Loves It - Joy and Happiness"
                magnifierHeight={250}
                magnifierWidth={250}
                zoomLevel={3}
                className="object-cover hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            {/* Text - Second on mobile, left on desktop */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#95E1D3] border-[2px] md:border-[3px] border-black text-black text-xs md:text-sm font-black uppercase">
                <span>✨</span>
                Chapter 4: Joy
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-[#fff9ad]"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                She Loves It
              </h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p className="font-black">
                  "This is so much better," she said.
                </p>
                <p>
                  She takes photos with her Labubu now. Shows it off to friends.
                </p>
                <p>It makes her happy. That makes me happy.</p>
              </div>
            </div>
          </div>

          {/* Block 5: You */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-800 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - First on mobile, left on desktop */}
            <div className="relative h-64 md:h-96 border-[3px] md:border-[4px] border-black overflow-hidden shadow-[6px_6px_0_#000] md:shadow-[8px_8px_0_#000] bg-gradient-to-br from-[#FFB3C6] via-[#FFF066] to-[#95E1D3] order-1">
              <ImageMagnifier
                src="/images/story2/chapter5-your-turn.png"
                alt="Your Turn - Limited to 100"
                magnifierHeight={250}
                magnifierWidth={250}
                zoomLevel={3}
                className="object-cover hover:scale-105 transition-transform duration-500"
                containerClassName="w-full h-full"
              />
            </div>
            {/* Text - Second on mobile, right on desktop */}
            <div className="space-y-4 md:space-y-6 order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#E6B3FF] border-[2px] md:border-[3px] border-black text-black text-xs md:text-sm font-black uppercase">
                <span>🫵</span>
                Chapter 5: You
              </div>
              <h3
                className="text-2xl md:text-3xl font-black uppercase text-[#fff9ad]"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                Your Turn
              </h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p>I'm making 100 of these.</p>
                <p>
                  If you love Labubu—or know someone who does—maybe this can
                  mean something to you too.
                </p>
                <div className="pt-3 md:pt-4">
                  <HermesButton variant="primary" href="/product/labubu-grip">
                    GET YOURS NOW
                  </HermesButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-24 text-center max-w-3xl mx-auto space-y-8">
          <h2
            className="text-4xl font-black uppercase text-white"
            style={{
              fontFamily: '"Arial Black", "Arial Bold", sans-serif',
            }}
          >
            Ready to Start
            <br />
            <span className="text-[#FFF066]">Your Adventure?</span>
          </h2>
          <p className="text-xl text-white">
            Only 100 units available. Pre-order now and be among the first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <HermesButton variant="primary" href="/product/labubu-grip">
              PRE-ORDER NOW - $31.20
            </HermesButton>
            <HermesButton variant="secondary" href="/">
              BACK TO HOME
            </HermesButton>
          </div>
        </div>
      </div>
    </section>
  );
}
