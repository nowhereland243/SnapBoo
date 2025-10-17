"use client";

import { useState, useRef, TouchEvent } from "react";
import Image from "next/image";
import type { ShopifyProduct } from "@/lib/types";
import PriceDisplay from "@/components/ui/PriceDisplay";
import StockCounter from "@/components/ui/StockCounter";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useCartStore } from "@/lib/store";
import { labubuImageConfetti, labubuHeartRain } from "@/lib/image-confetti";
import toast, { Toaster } from "react-hot-toast";
import { playSound } from "@/lib/sounds";

interface ProductInfoProps {
  product: ShopifyProduct;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const addItem = useCartStore((state) => state.addItem);

  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const compareAtPrice = product.compareAtPriceRange?.minVariantPrice.amount
    ? parseFloat(product.compareAtPriceRange.minVariantPrice.amount)
    : undefined;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next image
        setSelectedImageIndex((prev) =>
          prev < product.images.edges.length - 1 ? prev + 1 : prev
        );
      } else {
        // Swipe right - previous image
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }
  };

  const handleAddToCart = async () => {
    setIsAdding(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    addItem({
      id: product.id,
      variantId: product.variants?.edges[0]?.node.id || product.id,
      productId: product.id,
      title: product.title,
      price: price,
      quantity: quantity,
      image: product.images.edges[0]?.node.url,
      handle: product.handle,
    });

    setIsAdding(false);

    // 🔊 Play success sound
    playSound("success", 0.6);

    // 🎉 Celebration effects!
    labubuImageConfetti(); // Labubu image confetti explosion
    labubuHeartRain(); // Labubu heart rain

    // Play magic sound for confetti (slightly delayed)
    setTimeout(() => playSound("magic", 0.4), 200);

    // Cute toast notification
    toast.success("Added to cart! 🎉", {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 2000,
    });
  };

  const currentImage = product.images.edges[selectedImageIndex]?.node;

  return (
    <>
      <div className="space-y-6 pb-8 md:pb-0">
        <Toaster position="top-center" />

        {/* Mobile Image Gallery - Only visible on mobile */}
        <div className="lg:hidden -mx-4 sm:mx-0">
          <div
            className="relative w-full aspect-square bg-gray-50 sm:rounded-2xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {currentImage && (
              <Image
                src={currentImage.url}
                alt={currentImage.altText || "Product image"}
                fill
                className="object-contain p-4"
                priority={selectedImageIndex === 0}
              />
            )}

            {/* Image counter dots */}
            {product.images.edges.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {product.images.edges.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      selectedImageIndex === index
                        ? "bg-pink-600 w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product title */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>
          <p className="text-lg text-gray-600">{product.description}</p>
        </div>

        {/* Price - Mobile: Show simplified */}
        <div className="md:border-t md:border-b border-gray-200 md:py-4">
          <PriceDisplay
            price={price}
            compareAtPrice={compareAtPrice}
            size="lg"
            className="mb-3"
          />

          {/* Pre-order badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            📦 Pre-Order - Ships in 30 days
          </div>
        </div>

        {/* Stock counter */}
        <StockCounter total={100} sold={62} />

        {/* Quantity selector - Desktop only (mobile in fixed bar) */}
        <div className="hidden md:block space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all text-gray-900"
              disabled={quantity <= 1}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.max(1, Math.min(10, parseInt(e.target.value) || 1))
                )
              }
              className="w-16 h-10 text-center border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="w-10 h-10 rounded-lg border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all text-gray-900"
              disabled={quantity >= 10}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Add to cart button - Desktop only */}
        <div className="hidden md:block">
          <AnimatedButton
            onClick={handleAddToCart}
            size="lg"
            fullWidth
            isLoading={isAdding}
            animationType="pop"
            className="py-4"
          >
            {isAdding
              ? "Adding..."
              : quantity > 1
              ? `🎁 Pre-Order (${quantity})`
              : "🎁 Pre-Order Now"}
          </AnimatedButton>
        </div>

        {/* Trust badges - Desktop only */}
        <div className="hidden md:block border-t border-gray-200 pt-6 space-y-3">
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <svg
              className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>Free Shipping within US</strong>
              <p className="text-gray-500">No additional costs at checkout</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <svg
              className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>Secure Payment</strong>
              <p className="text-gray-500">Your payment information is safe</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <svg
              className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>Limited Edition</strong>
              <p className="text-gray-500">Only 100 units will ever be made</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom bar - Mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40 safe-area-inset-bottom">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            {/* Quantity selector - Compact for mobile */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center active:scale-95 transition-all text-gray-900"
                disabled={quantity <= 1}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span className="w-8 text-center font-medium text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-10 h-10 flex items-center justify-center active:scale-95 transition-all text-gray-900"
                disabled={quantity >= 10}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            {/* Add to cart button - Full width */}
            <div className="flex-1">
              <AnimatedButton
                onClick={handleAddToCart}
                size="lg"
                fullWidth
                isLoading={isAdding}
                animationType="pop"
                className="py-4 text-sm md:text-base"
              >
                {isAdding
                  ? "Adding..."
                  : quantity > 1
                  ? `🎁 Pre-Order (${quantity})`
                  : "🎁 Pre-Order Now"}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
