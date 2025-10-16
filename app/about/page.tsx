import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                The Story Behind SnapBoo
              </h1>
              <p className="text-xl text-gray-600">
                A passion project born from love for Labubu and design
              </p>
            </div>
          </div>
        </section>

        {/* Story content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Placeholder for designer image */}
            <div className="mb-12 text-center">
              <div className="inline-block relative w-48 h-48 rounded-full bg-gradient-to-br from-primary-100 to-pink-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  👨‍🎨
                </div>
              </div>
              <p className="mt-4 text-gray-500 text-sm">
                [Your photo will go here]
              </p>
            </div>

            {/* Story sections */}
            <div className="prose prose-lg mx-auto">
              <h2>Why I Created SnapBoo</h2>
              <p>
                As a devoted Labubu collector and fan, I found myself facing a
                common dilemma: my beloved figures were too precious to carry
                around, yet too adorable to leave at home. They deserved to be
                more than shelf decorations—they deserved to be companions.
              </p>

              <h2>The Design Journey</h2>
              <p>
                The journey from concept to creation took months of iteration. I
                experimented with different materials, tested countless magnet
                configurations, and refined every curve to ensure it
                complemented Labubu's playful character.
              </p>

              {/* Placeholder for journey images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-12">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="w-16 h-16 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">Sketch phase</p>
                    <p className="text-xs">[Your image]</p>
                  </div>
                </div>
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="w-16 h-16 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">3D modeling</p>
                    <p className="text-xs">[Your image]</p>
                  </div>
                </div>
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="w-16 h-16 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">Final product</p>
                    <p className="text-xs">[Your image]</p>
                  </div>
                </div>
              </div>

              <h2>The Community Connection</h2>
              <p>
                This project is my love letter to the Labubu community. Every
                collector understands that magical feeling when you unbox a new
                figure, that joy when you find the secret rare variant, and that
                desire to share your passion with the world.
              </p>
              <p>
                SnapBoo is designed to bring that joy into everyday life. It's
                for the fans who want to carry a piece of that magic wherever
                they go.
              </p>

              <h2>Why Pre-Order?</h2>
              <p>
                As a first-time entrepreneur testing the waters of e-commerce,
                I'm starting small with just 100 units. This limited run allows
                me to:
              </p>
              <ul>
                <li>Ensure the highest quality for each piece</li>
                <li>Gauge community interest before scaling up</li>
                <li>
                  Offer early supporters a truly limited edition collectible
                </li>
                <li>Learn and improve based on your feedback</li>
              </ul>

              <div className="mt-12 p-8 bg-gradient-to-br from-primary-50 to-pink-50 rounded-2xl text-center">
                <p className="text-2xl font-medium mb-4">
                  "Every click of the magnet is a small act of
                  connection—between you and the character you love."
                </p>
                <p className="text-gray-600">
                  Thank you for being part of this journey 💕
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Bring Labubu Everywhere?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the first 100 fans to own this limited edition MagSafe grip
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/product/labubu-grip"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg backdrop-blur-md transform hover:scale-105"
              >
                Pre-Order Now - $31.20
              </a>
              <a
                href="/"
                className="inline-block px-8 py-4 border-2 border-gray-300 backdrop-blur-md bg-white/50 text-gray-700 rounded-2xl font-semibold hover:bg-white/80 transition-all shadow-lg"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
