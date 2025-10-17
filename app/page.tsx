import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import { blurDataURLs } from "@/lib/blur-placeholders";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Product Showcase 2 - Show Off Your Labubu */}
        <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Left: Content */}
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold">
                  Show Off Your Collection
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  A Brand New Way <br />
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    To Show Off Your Labubu
                  </span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Finally—your Labubu gets the spotlight it deserves. Not tucked
                  away in a bag. Not hidden on a shelf. Right there on your
                  phone, visible and proud, wherever you go.
                </p>

                <div className="space-y-3 md:space-y-4 pt-2 md:pt-4 text-sm md:text-base text-gray-200">
                  <p className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl">✨</span>
                    <span>
                      Always visible—people will notice and ask about it
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl">🎯</span>
                    <span>
                      Instant conversation starter with fellow collectors
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-xl md:text-2xl">💝</span>
                    <span>Show your love for Labubu without saying a word</span>
                  </p>
                </div>

                <div className="pt-4 md:pt-6">
                  <a
                    href="/product/labubu-grip"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl backdrop-blur-md"
                  >
                    Get Yours Now →
                  </a>
                </div>
              </div>

              {/* Right: Large Image */}
              <div className="relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
                  <Image
                    src="/images/lifestyle/beach-scene.jpg"
                    alt="Labubu at the beach with SnapBoo"
                    fill
                    className="object-cover scale-[1.2]"
                    style={{ objectPosition: "center 45%" }}
                    placeholder="blur"
                    blurDataURL={blurDataURLs["/images/lifestyle/beach-scene.jpg"]}
                    loading="lazy"
                  />
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase 1 - Lifestyle Shot */}
        <section className="py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
              {/* Left: Large Image */}
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
                  <Image
                    src="/images/lifestyle/hand-holding-demo.jpg"
                    alt="Hand holding iPhone with SnapBoo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  Always With You
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Labubu, <br />
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Never Leaves Your Side
                  </span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Some of us keep our Labubu at home on the shelf. Others
                  display theirs at the office desk. Many of us wish we could
                  carry them everywhere we go. Now, there's a new way—attach
                  your Labubu to your phone and take your favorite companion
                  with you, all day, every day.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Secure Magnetic Hold
                      </h4>
                      <p className="text-gray-600">
                        N52 magnets ensure Labubu stays put through daily
                        activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Lightweight Design
                      </h4>
                      <p className="text-gray-600">
                        Only 45g—you won't even notice the extra weight
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Compatible with MagSafe
                      </h4>
                      <p className="text-gray-600">
                        Works with iPhone 12 and newer models
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases - Real Scenarios */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Better Than Bag Charms
              </h2>
              <p className="text-xl text-gray-600">
                Why your Labubu deserves more than just dangling from your bag
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {/* Problem with bag charms */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-400">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">😔</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-red-600">
                      The Bag Charm Problem
                    </h3>
                    <p className="text-gray-700">
                      Most people hang their Labubu on bags or keychains. But
                      let's be honest—it{" "}
                      <span className="font-semibold">
                        swings around constantly
                      </span>
                      , gets{" "}
                      <span className="font-semibold">
                        dirty from rubbing against things
                      </span>
                      , and you can barely{" "}
                      <span className="font-semibold">
                        show off its cute details
                      </span>{" "}
                      when it's bouncing all over the place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Use case cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Desktop stand */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🖥️</div>
                  <h3 className="text-xl font-bold mb-3">
                    Instant Desktop Stand
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Stand your phone upright on your desk with Labubu perfectly
                    displayed. Perfect for video calls, watching content, or
                    just keeping your desk cute.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Hands-free viewing</span>
                  </div>
                </div>

                {/* One-hand use */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">👆</div>
                  <h3 className="text-xl font-bold mb-3">One-Handed Control</h3>
                  <p className="text-gray-700 mb-4">
                    Use Labubu as a grip to operate your phone with just one
                    finger. Text, scroll, and tap—all while Labubu helps you
                    hold on tight.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Easier reach across screen</span>
                  </div>
                </div>

                {/* Safe & Clean */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-xl font-bold mb-3">
                    Keep Labubu Pristine
                  </h3>
                  <p className="text-gray-700 mb-4">
                    No more dirt, scratches, or fading from constant friction.
                    Your Labubu stays attached to your phone, protected and on
                    display.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Clean & protected</span>
                  </div>
                </div>

                {/* Swap characters */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-3">Swap Anytime</h3>
                  <p className="text-gray-700 mb-4">
                    Got multiple Labubus? (We're jealous!) Easily swap them in
                    and out whenever you want to match your mood or outfit.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Mix & match your collection</span>
                  </div>
                </div>

                {/* Content creation */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">📸</div>
                  <h3 className="text-xl font-bold mb-3">
                    Your Travel & Vlog Companion
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Simply pop Labubu off and they're camera-ready! Pose them on
                    fallen leaves, in front of the Eiffel Tower, or anywhere
                    your adventures take you. Perfect for travel photos, vlogs,
                    and sharing your Labubu's journey with the world.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Content creation made easy</span>
                  </div>
                </div>

                {/* Conversation starter */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-xl font-bold mb-3">
                    Instant Conversation Starter
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Fellow Labubu fans will spot you instantly! Make friends,
                    share your collection, and connect with the community
                    wherever you go.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Find your people</span>
                  </div>
                </div>

                {/* Commute safety */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🚇</div>
                  <h3 className="text-xl font-bold mb-3">Secure on the Go</h3>
                  <p className="text-gray-700 mb-4">
                    Commuting or traveling? SnapBoo gives you a safer hold on
                    your phone in crowded spaces, reducing drop risk.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>No more phone drops</span>
                  </div>
                </div>

                {/* Display your love */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">💕</div>
                  <h3 className="text-xl font-bold mb-3">
                    Show Off Your Collection
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Finally, a way to properly display your favorite Labubu!
                    They're meant to be seen, admired, and loved—not hidden in a
                    bag.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Proud collector status</span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 md:mt-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-6 md:p-8 text-white text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                  Your Labubu, Always With You
                </h3>
                <p className="text-base md:text-lg opacity-90 mb-4 md:mb-6 max-w-2xl mx-auto">
                  At home, at work, in class, on your commute, or out for
                  brunch—keep your Labubu close, wherever life takes you.
                </p>
                <a
                  href="/product/labubu-grip"
                  className="inline-block px-8 py-4 bg-white/90 backdrop-blur-md text-primary-600 rounded-2xl font-bold hover:bg-white transition-colors transform hover:scale-105 shadow-lg"
                >
                  Pre-Order SnapBoo Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="pt-6 pb-8 md:py-12 lg:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    ~1.69 oz
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Lightweight Design
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    2.28"
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Perfect Size
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    N52
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Strongest Magnets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Keep Labubu Close?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Only 100 units available in this first batch. Pre-order now and be
              among the first to experience SnapBoo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/product/labubu-grip"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg backdrop-blur-md"
              >
                Pre-Order Now - $31.20
              </a>
              <a
                href="/story"
                className="px-8 py-4 border-2 border-white/30 backdrop-blur-lg bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all shadow-lg"
              >
                Read Our Story
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-400">
              🚚 Free shipping • 📦 Ships in 30 days • 💯 100% satisfaction
              guaranteed
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Test: GitHub + Vercel integration working!
