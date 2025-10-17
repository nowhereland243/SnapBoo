"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { createCheckout } from "@/lib/shopify";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice } =
    useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    try {
      // Convert cart items to Shopify line items format
      const lineItems = items.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }));

      console.log("Creating checkout with line items:", lineItems);

      // Create Shopify checkout
      const checkout = await createCheckout(lineItems);

      console.log("Checkout response:", checkout);

      // Redirect to Shopify checkout page
      if (checkout && checkout.webUrl) {
        window.location.href = checkout.webUrl;
      } else {
        throw new Error("No checkout URL received from Shopify");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      alert(
        "❌ Sorry, there was an error creating your checkout.\n\n" +
          `Error: ${error.message || "Unknown error"}\n\n` +
          "Please try again or contact support if the problem persists."
      );
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 flex items-center justify-center py-20">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              Your cart is empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any SnapBoo grips yet. Start
              shopping!
            </p>
            <Link href="/">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">
            Shopping Cart ({totalItems} item{totalItems !== 1 ? "s" : ""})
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 sm:p-6 shadow-sm"
                >
                  <div className="flex gap-3 sm:gap-6">
                    {/* Product image */}
                    {item.image && (
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    )}

                    {/* Product info - Flexible layout */}
                    <div className="flex-1 min-w-0 flex flex-col sm:block">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-sm sm:text-lg flex-1 min-w-0 text-gray-900">
                          {item.title}
                        </h3>
                        {/* Price on mobile - right side */}
                        <p className="sm:hidden font-bold text-base whitespace-nowrap text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      {/* Price on desktop - below title */}
                      <p className="hidden sm:block text-gray-600 mb-3">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-xl border border-gray-300 backdrop-blur-md bg-white/50 flex items-center justify-center hover:bg-white/80 shadow-sm transition-all text-gray-900 font-semibold"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-xl border border-gray-300 backdrop-blur-md bg-white/50 flex items-center justify-center hover:bg-white/80 shadow-sm transition-all text-gray-900 font-semibold"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-semibold ml-auto px-3 py-1.5 rounded-xl hover:bg-red-50 backdrop-blur-md transition-all"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item total - Desktop only */}
                    <div className="hidden sm:block text-right">
                      <p className="font-bold text-lg text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-gray-900">
                  Order Summary
                </h2>

                {/* Pre-order notice */}
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2 text-sm text-blue-800">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <strong>Pre-Order Item</strong>
                      <p className="mt-1">
                        Ships in approximately 30 days from order date.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>
                      Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})
                    </span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-primary-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Checkout button - Shopify style */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-black text-white rounded-md py-4 px-6 font-medium text-base hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                >
                  {isCheckingOut ? "Processing..." : "Add to cart"}
                </button>

                {/* Shop Pay button */}
                <button
                  disabled
                  className="w-full bg-[#5a31f4] text-white rounded-md py-4 px-6 font-medium text-base flex items-center justify-center gap-2 opacity-50 cursor-not-allowed mb-4"
                >
                  <span className="text-lg font-semibold">Buy with</span>
                  <svg className="h-5" viewBox="0 0 80 27" fill="white">
                    <path d="M 14.5 0.5 C 13.1 0.5 11.9 1.2 11.1 2.2 C 10.3 1.2 9.1 0.5 7.7 0.5 C 5 0.5 2.8 2.7 2.8 5.4 C 2.8 9.1 6.5 12.1 10.1 15.3 L 11.1 16.2 L 12.1 15.3 C 15.7 12.1 19.4 9.1 19.4 5.4 C 19.4 2.7 17.2 0.5 14.5 0.5 Z M 28 6 L 28 20 L 32 20 L 32 12.5 C 32 10.3 33.8 8.5 36 8.5 C 38.2 8.5 40 10.3 40 12.5 L 40 20 L 44 20 L 44 11.5 C 44 7.9 41.1 5 37.5 5 C 35.3 5 33.3 6 32 7.6 L 32 6 L 28 6 Z M 50 5 C 45.6 5 42 8.6 42 13 C 42 17.4 45.6 21 50 21 C 54.4 21 58 17.4 58 13 C 58 8.6 54.4 5 50 5 Z M 50 8.5 C 52.5 8.5 54.5 10.5 54.5 13 C 54.5 15.5 52.5 17.5 50 17.5 C 47.5 17.5 45.5 15.5 45.5 13 C 45.5 10.5 47.5 8.5 50 8.5 Z M 62 6 L 62 20 L 66 20 L 66 13.5 C 66 10.5 68 8.5 71 8.5 L 71 5 C 68.2 5 65.8 6.3 64.5 8.3 L 64.5 6 L 62 6 Z"></path>
                  </svg>
                </button>

                <Link href="/">
                  <button className="w-full text-center text-sm text-gray-600 hover:text-primary-600">
                    Continue Shopping
                  </button>
                </Link>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Free US shipping
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Limited edition (100 units)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
