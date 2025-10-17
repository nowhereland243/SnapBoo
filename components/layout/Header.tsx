"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-18 items-center justify-between">
            {/* Logo - Slightly larger on mobile */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span
                  className="text-2xl md:text-2xl font-bold text-black"
                  style={{
                    fontFamily:
                      "'Helvetica Neue', 'Helvetica', Arial, sans-serif",
                    fontWeight: 700,
                    fontStretch: "condensed",
                  }}
                >
                  SnapBoo
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/story2"
                className="text-sm font-medium text-gray-900 hover:text-[#F5A742] transition-colors"
              >
                Story
              </Link>
              <Link
                href="/product/labubu-grip"
                className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors"
              >
                Product
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center gap-2">
              {/* Cart icon - Larger touch target on mobile */}
              <Link
                href="/cart"
                className="p-3 md:p-2 hover:bg-gray-100 rounded-full transition-colors relative text-gray-900"
                aria-label="Shopping cart"
              >
                <svg
                  className="h-6 w-6 md:h-6 md:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 hover:bg-gray-100 rounded-full transition-colors text-gray-900"
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
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
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2.5 px-4 text-center z-30 relative overflow-hidden">
        <div className="container mx-auto">
          {/* Mobile version - scrolling marquee */}
          <div className="md:hidden overflow-hidden">
            <Link href="/product/labubu-grip" className="block">
              <div className="animate-marquee whitespace-nowrap text-sm font-medium">
                <span className="inline-block px-4">
                  🎉 Pre-Order SnapBoo Now - Limited to First 100 Units | 20%
                  Off + Free US Shipping
                  <span className="ml-2 underline font-semibold">
                    Order Now →
                  </span>
                </span>
                <span className="inline-block px-4">
                  🎉 Pre-Order SnapBoo Now - Limited to First 100 Units | 20%
                  Off + Free US Shipping
                  <span className="ml-2 underline font-semibold">
                    Order Now →
                  </span>
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop version - full details */}
          <p className="hidden md:block text-base font-medium">
            🎉 Pre-Order SnapBoo Now - Limited to First 100 Units | 20% Off +
            Free US Shipping
            <Link
              href="/product/labubu-grip"
              className="ml-2 underline hover:no-underline font-semibold"
            >
              Order Now →
            </Link>
          </p>
        </div>
      </div>

      {/* Mobile menu - Full screen overlay - OUTSIDE header */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-[999]"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu panel */}
          <div className="md:hidden fixed inset-x-0 top-0 bottom-0 bg-[#FFFEF0]/70 backdrop-blur-xl z-[1000] overflow-y-auto">
            {/* Mobile menu header */}
            <div className="bg-[#FFFEF0]/70 backdrop-blur-xl border-b border-gray-200/50 px-4 py-4 flex items-center justify-between">
              <span className="text-xl font-bold">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-white/30 rounded-full touch-manipulation transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
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
            </div>

            {/* Menu items */}
            <nav className="flex flex-col p-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-4 px-4 hover:bg-white/30 rounded-xl transition-colors active:bg-white/50 touch-manipulation"
              >
                🏠 Home
              </Link>
              <Link
                href="/story2"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-4 px-4 hover:bg-white/30 rounded-xl transition-colors active:bg-white/50 touch-manipulation"
              >
                📖 Story
              </Link>
              <Link
                href="/product/labubu-grip"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-4 px-4 hover:bg-white/30 rounded-xl transition-colors active:bg-white/50 touch-manipulation"
              >
                🛍️ Product
              </Link>
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-4 px-4 hover:bg-white/30 rounded-xl transition-colors active:bg-white/50 flex items-center justify-between touch-manipulation"
              >
                <span>🛒 Cart</span>
                {getTotalItems() > 0 && (
                  <span className="bg-pink-600 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center font-semibold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>

              {/* Mobile CTA */}
              <div className="pt-6 px-2">
                <Link
                  href="/product/labubu-grip"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-lg active:shadow-md transition-all touch-manipulation"
                >
                  🎁 Pre-Order Now - $31.20
                </Link>
                <p className="text-xs text-center text-gray-600 mt-3">
                  Limited to 100 units • 20% Off + Free US Shipping
                </p>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
