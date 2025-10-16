"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    handle: string;
    description?: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText?: string;
        };
      }>;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currencyCode = product.priceRange.minVariantPrice.currencyCode;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-300 transition-all hover:shadow-xl">
      <Link href={`/product/${product.handle}`}>
        <div className="aspect-square relative bg-gray-100 overflow-hidden">
          {image ? (
            <Image
              src={image.url}
              alt={image.altText || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-pink-100">
              <div className="text-center text-primary-300">
                <div className="text-6xl mb-2">🎁</div>
                <p className="text-sm">No Image</p>
              </div>
            </div>
          )}

          {/* Wishlist button */}
          <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:bg-white/90 transition-colors opacity-0 group-hover:opacity-100">
            <svg
              className="w-5 h-5 text-pink-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.handle}`}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
        </Link>

        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-2xl font-bold text-primary-600">
              ¥{price.toFixed(2)}
            </p>
            {currencyCode !== "CNY" && (
              <p className="text-xs text-gray-500">{currencyCode}</p>
            )}
          </div>

          <button className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-lg backdrop-blur-md">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
