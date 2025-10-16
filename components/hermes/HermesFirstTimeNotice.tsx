"use client";

import { motion } from "framer-motion";

export default function HermesFirstTimeNotice() {
  return (
    <section className="py-8 md:py-16 bg-[#F5A742]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#FFE66D] border-[3px] md:border-[4px] border-black p-4 sm:p-6 md:p-12 shadow-[4px_4px_0_#000] md:shadow-[8px_8px_0_#000]">
            {/* Icon and Badge */}
            <div className="flex flex-col items-center text-center mb-4 md:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#95E1D3] border-[2px] md:border-[3px] border-black text-black text-xs md:text-sm font-black uppercase mb-3 md:mb-4">
                <span className="text-lg md:text-xl">🌱</span>A Note From Me
              </div>
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">👋</div>
            </div>

            {/* Heading */}
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-center mb-4 md:mb-6 text-black leading-tight"
              style={{
                fontFamily: '"Arial Black", "Arial Bold", sans-serif',
              }}
            >
              This Is My First Time
            </h3>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-black leading-relaxed">
              <p className="text-center max-w-2xl mx-auto">
                <span className="font-black text-sm sm:text-base md:text-lg text-[#F5A742] bg-white px-2 py-1 md:px-3 md:py-1 border-[2px] md:border-[3px] border-black inline-block">
                  I'm still learning how all of this works.
                </span>
              </p>

              <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg">
                <p>
                  This is my first time trying to sell something online. I'm
                  figuring out shipping, payments, inventory, customer
                  service... honestly, everything as I go.
                </p>

                <p>
                  I'm a designer, not a business owner (yet!). There might be
                  bumps along the way. The timeline might not be perfect. I'm
                  learning and improving every day.
                </p>

                <p className="text-base sm:text-lg md:text-xl font-black text-center py-3 md:py-4 bg-[#E6B3FF] border-[2px] md:border-[3px] border-black inline-block w-full">
                  Please be patient with me. 🙏
                </p>

                <p className="text-center font-medium">
                  What I <span className="font-black">can</span> promise you is
                  that I'll do my absolute best to make this right. Just like I
                  did for my mom.
                </p>
              </div>

              {/* Timeline Reminder - Hermès style */}
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-[#FFF066] border-[3px] md:border-[4px] border-black shadow-[3px_3px_0_#000] md:shadow-[4px_4px_0_#000]">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="text-2xl md:text-3xl flex-shrink-0">📦</div>
                  <div className="space-y-2">
                    <h4
                      className="font-black text-black text-base md:text-lg uppercase"
                      style={{
                        fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                      }}
                    >
                      About the Timeline
                    </h4>
                    <p className="text-sm md:text-base text-black">
                      Manufacturing takes about{" "}
                      <span className="font-black bg-white px-1.5 py-0.5 md:px-2 md:py-1 border-[2px] border-black text-sm md:text-base whitespace-nowrap">
                        30 days
                      </span>
                      . I'm ordering a small batch of just 100 units to start,
                      to make sure everything is perfect before scaling up.
                    </p>
                    <p className="text-xs md:text-sm text-black font-medium">
                      Thank you for understanding and supporting this journey.
                      It means the world to me. 💜
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature - Hermès style */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t-[3px] md:border-t-[4px] border-black text-center">
              <p className="text-black font-medium uppercase text-xs md:text-sm mb-2">
                With gratitude and excitement,
              </p>
              <p
                className="text-xl md:text-2xl font-black text-black mt-2"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                A FELLOW LABUBU FAN
              </p>
              <div className="mt-3 md:mt-4 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border-[2px] md:border-[3px] border-black">
                <span className="font-black text-xs md:text-sm">
                  NEW YORK ↔️ SHANGHAI
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
