"use client";

import { useState } from "react";
import Image from "next/image";
import type { ShopifyProduct } from "@/lib/types";

interface ProductDetailsProps {
  product: ShopifyProduct;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [openSections, setOpenSections] = useState<string[]>([
    "materials",
    "features",
    "design",
    "authenticity",
    "headsup",
  ]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const features = [
    {
      icon: "🧲",
      title: "Powerful magnetic hold",
      description: "N52 rare-earth magnets keep your Labubu securely attached",
      benefit: "Safe and stable connection",
    },
    {
      icon: "🎨",
      title: "Unique sculptural design",
      description: "Palm-sized form designed to complement Labubu's silhouette",
      benefit: "Playful, distinctive, photo-ready",
    },
    {
      icon: "🔄",
      title: "360° rotation",
      description: "Allows flexible viewing or display angles",
      benefit: "Perfect for photography or daily carry",
    },
    {
      icon: "✨",
      title: "Universal compatibility",
      description:
        "Works with MagSafe cases, metal surfaces, stands, and display bases",
      benefit: "Multi-scene usability",
    },
    {
      icon: "💝",
      title: "Collectible + functional",
      description: "Blends display aesthetics with practical use",
      benefit: "Bridges emotion and function",
    },
  ];

  return (
    <div className="mt-6 md:mt-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 md:mb-8">Product Details</h2>

      <div className="space-y-4">
        {/* Materials & Craftsmanship */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection("materials")}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900">
              🛠️ Material & Craftsmanship
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openSections.includes("materials") ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.includes("materials") && (
            <div className="px-6 py-4 bg-gray-50 space-y-4">
              <div className="prose max-w-none">
                <ul className="space-y-2 text-gray-900">
                  <li className="text-gray-900">
                    <strong className="text-black">Core material:</strong>{" "}
                    aerospace-grade aluminum alloy or high-strength ABS plastic
                    (depending on edition).
                  </li>
                  <li className="text-gray-900">
                    <strong className="text-black">Magnetic system:</strong>{" "}
                    built with N52 neodymium magnets — the strongest grade
                    available for consumer products.
                  </li>
                  <li className="text-gray-900">
                    <strong className="text-black">Finish:</strong> matte
                    anodized for metal / fine sand-blasted coating for plastic,
                    delivering a smooth, tactile feel that resists fingerprints
                    and scratches.
                  </li>
                </ul>
                <p className="mt-4 text-gray-600">
                  Light in weight, solid in build — designed to feel like a
                  collectible object, not just an accessory.
                </p>
              </div>
              <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/images/technical/sketch-diagram-1.png"
                  alt="Technical diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Key Features - Mobile-friendly card layout */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection("features")}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900">
              💡 Key Features
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openSections.includes("features") ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.includes("features") && (
            <div className="px-4 md:px-6 py-4 bg-gray-50">
              {/* Mobile: Card layout */}
              <div className="md:hidden space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl">{feature.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-900 mb-2">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-900">✓</span>
                      <span className="text-gray-900 font-medium">
                        {feature.benefit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Table layout */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Benefit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {features.map((feature, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          {feature.icon} {feature.title}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {feature.description}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {feature.benefit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Design Concept */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection("concept")}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900">
              🎨 Design Concept
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openSections.includes("design") ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.includes("design") && (
            <div className="px-6 py-4 bg-gray-50">
              <div className="prose max-w-none text-gray-900">
                <p>
                  We wanted Labubu to live beyond the display shelf — to travel
                  with you, to work, to play, to wherever life happens.
                </p>
                <p>
                  This magnetic grip was born from the idea of{" "}
                  <strong>staying close, sharing love, and bringing joy</strong>
                  .
                </p>
                <p>
                  Every click of the magnet is a small act of connection —
                  between you and the character you love.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Origin & Authenticity */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection("origin")}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900">
              🪄 Origin & Authenticity
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openSections.includes("authenticity") ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.includes("authenticity") && (
            <div className="px-6 py-4 bg-gray-50">
              <div className="space-y-3 text-gray-900">
                <p>
                  ⚠️ <strong>This product is a fan-made creation</strong>,
                  inspired by Pop Mart's Labubu universe.
                </p>
                <p>
                  It is <strong>not an official licensed item</strong> and
                  contains no copyrighted or trademarked elements.
                </p>
                <p>
                  Each piece is independently designed, prototyped, and crafted
                  with care for fans who love design as much as they love
                  Labubu.
                </p>
                <p className="italic pt-2 border-t border-gray-300">
                  We celebrate creativity, respect the original, and honor the
                  joy of being part of a fan community.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Compatibility Notice */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection("compatibility")}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900">
              ⚠️ A Friendly Heads-Up!
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openSections.includes("headsup") ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections.includes("headsup") && (
            <div className="px-6 py-4 bg-gray-50">
              <div className="space-y-4 text-gray-900">
                <p>
                  This accessory works with{" "}
                  <strong>iPhone 12, 13, 14, 15, 16, and 17 series</strong>.
                </p>
                <p>
                  If your phone case doesn't support MagSafe magnetic
                  attachment, it might not stick well and could fall off easily.
                </p>
                <p>
                  For other phone brands or models, you'll need to use a
                  MagSafe-compatible magnetic case for it to work properly.
                </p>
                <div className="pt-3 border-t border-gray-300">
                  <p className="font-semibold mb-2">
                    About MagSafe connection strength:
                  </p>
                  <p>
                    Different MagSafe products may have slightly different
                    magnetic strengths. If you feel the magnet isn't strong
                    enough, please double-check the connection before using it
                    to avoid drops.
                  </p>
                  <p className="mt-2">
                    We can't be responsible for any damage caused by the product
                    falling off — thanks for your understanding! 🙏
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
