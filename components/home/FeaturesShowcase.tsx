import Image from "next/image";

const features = [
  {
    icon: "🧲",
    title: "Secure & Safe",
    description:
      "N52 neodymium magnets—the strongest grade available—keep your Labubu safe and secure, just like you'd want for someone you cherish.",
    image: "/images/technical/3d-parts-breakdown.png",
  },
  {
    icon: "💝",
    title: "Always With You",
    description:
      "Attach to your phone, bag, or any magnetic surface. Labubu becomes your daily companion, wherever life takes you.",
    image: "/images/technical/3d-render-side.png",
  },
  {
    icon: "✨",
    title: "Built to Last",
    description:
      "Premium materials with a soft-touch finish. Made with the same care I put into the one for my mom.",
    image: "/images/technical/3d-render-gold-front.png",
  },
  {
    icon: "📱",
    title: "Works Everywhere",
    description:
      "Compatible with MagSafe cases and any magnetic surface. Perfect for phone, fridge, car, or desk—wherever you want a smile.",
    image: "/images/product/labubu-with-magsafe.png",
  },
];

export default function FeaturesShowcase() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Made with Care
          </h2>
          <p className="text-xl text-gray-600">
            Every detail designed to keep your Labubu safe and close—just like
            family
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature image */}
              <div className="relative h-48 rounded-xl overflow-hidden bg-white">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Hover effect decoration */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Technical specs callout */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                ~1.69 oz
              </div>
              <div className="text-gray-600">Weight</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                2.28"
              </div>
              <div className="text-gray-600">Diameter</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                0.20"
              </div>
              <div className="text-gray-600">Thickness</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                N52
              </div>
              <div className="text-gray-600">Strongest Magnets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
