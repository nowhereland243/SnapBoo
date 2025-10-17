import Image from "next/image";

const features = [
  {
    icon: "🧲",
    title: "Secure & Safe",
    description:
      "N52 neodymium magnets—the strongest grade available—keep your Labubu safe and secure, just like you'd want for someone you cherish.",
    image: "/images/technical/3d-parts-breakdown.png",
    bgColor: "#FFB3C6",
  },
  {
    icon: "💝",
    title: "Always With You",
    description:
      "Attach to your phone, bag, or any magnetic surface. Labubu becomes your daily companion, wherever life takes you.",
    image: "/images/story2/always-with-you.png",
    bgColor: "#FFF066",
  },
  {
    icon: "✨",
    title: "Built to Last",
    description:
      "Premium materials with a soft-touch finish. Made with the same care I put into the one for my mom.",
    image: "/images/technical/3d-render-gold-front.png",
    bgColor: "#95E1D3",
  },
  {
    icon: "📱",
    title: "Works Everywhere",
    description:
      "Compatible with MagSafe cases and any magnetic surface. Perfect for phone, fridge, car, or desk—wherever you want a smile.",
    image: "/images/product/labubu-with-magsafe.png",
    bgColor: "#E6B3FF",
  },
];

export default function HermesFeaturesShowcase() {
  return (
    <section id="features" className="py-12 md:py-20 bg-[#7ED9C3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Hermès style */}
        <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 md:mb-6 text-black"
            style={{
              fontFamily: '"Arial Black", "Arial Bold", sans-serif',
            }}
          >
            Made with Care
          </h2>
          <div className="h-1 w-24 md:w-32 bg-[#F5A742] mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-xl text-black font-medium px-4">
            Every detail designed to keep your Labubu safe and close—just like
            family
          </p>
        </div>

        {/* Features grid - Hermès style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border-[3px] md:border-[4px] border-black p-4 sm:p-6 md:p-8 hover:shadow-[6px_6px_0_#000] md:hover:shadow-[8px_8px_0_#000] transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2"
              style={{ backgroundColor: feature.bgColor }}
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3
                className="text-xl sm:text-2xl font-black uppercase mb-3 md:mb-4 text-black"
                style={{
                  fontFamily: '"Arial Black", "Arial Bold", sans-serif',
                }}
              >
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-black leading-relaxed mb-4 md:mb-6 font-medium">
                {feature.description}
              </p>

              {/* Feature image */}
              <div
                className="relative h-64 sm:h-80 md:h-[500px] overflow-hidden"
                style={{ backgroundColor: feature.bgColor }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className={`object-contain transition-transform duration-500 ${
                    index === 0
                      ? "scale-[1.8] sm:scale-[2.0] md:scale-[2.2] group-hover:scale-[2.0] md:group-hover:scale-[2.4]"
                      : index === 3
                      ? "group-hover:scale-105"
                      : "scale-[1.1] sm:scale-[1.15] md:scale-[1.2] group-hover:scale-[1.2] md:group-hover:scale-[1.3]"
                  }`}
                />
              </div>

              {/* Corner decoration - Hermès style */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-[2px] md:border-[3px] border-black bg-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
