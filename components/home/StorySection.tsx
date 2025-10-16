"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function StorySection() {
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
      className="py-20 bg-gradient-to-b from-white via-pink-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A mother, a son, and a little companion that keeps them connected
            across the ocean.
          </p>
        </div>

        {/* Story Blocks */}
        <div className="space-y-24">
          {/* Block 1: The Beginning */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                <span>🌏</span>
                Chapter 1: Distance
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                10 Years Apart
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>I moved from Shanghai to New York 10 years ago.</p>
                <p>Mom stayed. Video calls help, but they're not the same.</p>
                <p className="text-xl font-medium text-blue-600">
                  Distance makes the little things matter more.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/lifestyle/outdoor-nature.jpg"
                alt="Distance and Connection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Block 2: The Discovery */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-200 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="/images/product/labubu-front-white-bg.png"
                alt="Labubu Discovery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium">
                <span>💝</span>
                Chapter 2: Labubu
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                "It Reminds Me of You"
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Mom sent me a photo of a Labubu.
                  <span className="font-medium">
                    {" "}
                    "It reminds me of you,"
                  </span>{" "}
                  she said.
                </p>
                <p>I got one too. We both loved them.</p>
                <p>
                  But she didn't want hers dangling on her bag.
                  <span className="font-medium text-pink-600">
                    {" "}
                    She wanted it close, but protected.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Block 3: The Creation */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-400 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium">
                <span>🛠️</span>
                Chapter 3: Creation
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                So I Made This
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I started sketching. Researched magnets. Found manufacturers.
                </p>
                <p>
                  <span className="font-semibold text-purple-600">
                    I had no idea what I was doing
                  </span>
                  , but I wanted her to smile.
                </p>
                <p>
                  After weeks of trying, I got it—a MagSafe grip that keeps
                  Labubu secure on her phone.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/technical/sketch-diagram-1.png"
                alt="Design Process"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Block 4: The Result */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-600 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:order-1">
              <Image
                src="/images/lifestyle/hand-holding-demo.jpg"
                alt="Mom loves it"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium">
                <span>✨</span>
                Chapter 4: Joy
              </div>
              <h3 className="text-3xl font-bold text-gray-900">She Loves It</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>I sent her the first one. She called me right away.</p>
                <p className="text-xl font-semibold text-pink-600">
                  "Now Labubu goes everywhere with me. Just like you used to."
                </p>
                <p>
                  Every time we video chat, I see Labubu on her phone. Small
                  thing, but it makes me feel{" "}
                  <span className="font-medium">closer</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Block 5: Sharing with You */}
          <div className="story-block opacity-0 translate-y-10 transition-all duration-1000 delay-800">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-12 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-purple-700 text-sm font-medium">
                <span>🌟</span>
                Chapter 5: You
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Maybe You'll Love It Too
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                If you love Labubu and want to keep yours close—safe and with
                you always—maybe this can bring you that same joy.
              </p>
              <p className="text-base text-gray-600 italic">
                Made with love in New York. Cherished in Shanghai.
                <span className="block mt-2 font-medium">
                  Now available for you. 💜
                </span>
              </p>
              <div className="pt-4">
                <Link href="/product/labubu-grip">
                  <AnimatedButton
                    animationType="bounce"
                    size="lg"
                    className="text-lg py-5 px-10"
                  >
                    🎁 Get Yours — Only 100 Made
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
