"use client";

import { motion } from "framer-motion";

export default function FirstTimeNotice() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
            {/* Icon and Badge */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
                <span className="text-xl">🌱</span>A Note From Me
              </div>
              <div className="text-6xl mb-4">👋</div>
            </div>

            {/* Heading */}
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900">
              This Is My First Time
            </h3>

            {/* Content */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-center max-w-2xl mx-auto">
                <span className="font-semibold text-orange-600">
                  I'm still learning how all of this works.
                </span>
              </p>

              <div className="space-y-4 text-base sm:text-lg">
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

                <p className="text-xl font-semibold text-purple-700 text-center py-4">
                  Please be patient with me. 🙏
                </p>

                <p className="text-center">
                  What I <span className="font-semibold">can</span> promise you
                  is that I'll do my absolute best to make this right. Just like
                  I did for my mom.
                </p>
              </div>

              {/* Timeline Reminder */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">📦</div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 text-lg">
                      About the Timeline
                    </h4>
                    <p className="text-gray-700">
                      Manufacturing takes about{" "}
                      <span className="font-semibold">30 days</span>. I'm
                      ordering a small batch of just 100 units to start, to make
                      sure everything is perfect before scaling up.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Thank you for understanding and supporting this journey.
                      It means the world to me. 💜
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 italic">
                With gratitude and excitement,
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
                A Fellow Labubu Fan
              </p>
              <p className="text-sm text-gray-500 mt-2">New York ↔️ Shanghai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


