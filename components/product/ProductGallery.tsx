"use client";

import { useState, useRef, TouchEvent, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ShopifyImage } from "@/lib/types";

interface ProductGalleryProps {
  images: Array<{ node: ShopifyImage }>;
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasSwipedOnce, setHasSwipedOnce] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  const currentImage = images[selectedIndex]?.node;

  // Handle swipe gestures on mobile
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
      // Mark that user has swiped at least once
      if (!hasSwipedOnce) {
        setHasSwipedOnce(true);
      }

      if (diff > 0) {
        // Swipe left - next image
        setSelectedIndex((prev) =>
          prev < images.length - 1 ? prev + 1 : prev
        );
      } else {
        // Swipe right - previous image
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }
  };

  // Open fullscreen viewer
  const openFullscreen = () => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  // Close fullscreen viewer
  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsZoomed(false);
    document.body.style.overflow = "auto";
  };

  // Navigate in fullscreen
  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation in fullscreen
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFullscreen();
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, images.length]);

  return (
    <>
      <div className="space-y-6">
        {/* Main image - Swipeable and clickable */}
        <div
          className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-pointer group"
          onClick={openFullscreen}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {currentImage && (
            <Image
              src={currentImage.url}
              alt={currentImage.altText || "Product image"}
              fill
              className="object-contain p-4 md:p-8 transition-transform duration-300 group-hover:scale-105"
              priority={selectedIndex === 0}
            />
          )}

          {/* Tap to view fullscreen hint - Desktop */}
          <div className="hidden md:block absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Click for fullscreen
          </div>

          {/* Swipe indicator - Mobile only, disappears after first swipe */}
          {images.length > 1 && !hasSwipedOnce && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-xs flex items-center gap-2"
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Swipe to see more
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          )}

          {/* Navigation arrows - Desktop */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
                }}
                disabled={selectedIndex === 0}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) =>
                    prev < images.length - 1 ? prev + 1 : prev
                  );
                }}
                disabled={selectedIndex === images.length - 1}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail carousel - Larger touch targets on mobile */}
        {images.length > 1 && (
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-thin snap-x snap-mandatory">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                  selectedIndex === index
                    ? "border-primary-600 ring-2 ring-primary-200 scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image
                  src={image.node.url}
                  alt={image.node.altText || `Thumbnail ${index + 1}`}
                  fill
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        )}

        {/* Image counter - Dots on mobile, numbers on desktop */}
        <div className="flex justify-center items-center gap-2">
          {/* Dots for mobile */}
          <div className="flex md:hidden gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedIndex === index ? "bg-primary-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Text counter for desktop */}
          <div className="hidden md:block text-sm text-gray-500">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            {/* Close button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-black/50 text-white rounded-full text-sm backdrop-blur-sm">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Main image */}
            <div
              className={`relative w-full h-full flex items-center justify-center p-4 ${
                isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              {currentImage && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: isZoomed ? 1.5 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentImage.url}
                    alt={currentImage.altText || "Product image"}
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </motion.div>
              )}
            </div>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Zoom hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm backdrop-blur-sm">
              {isZoomed ? "Click to zoom out" : "Click to zoom in"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
