"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { getProducts } from "@/lib/shopify";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts.slice(0, 8)); // Show first 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  // Placeholder products if Shopify is not configured
  const placeholderProducts =
    products.length === 0
      ? [
          {
            id: "1",
            node: {
              title: "Sample Product 1",
              handle: "product-1",
              description: "This is a sample product",
              priceRange: {
                minVariantPrice: { amount: "39.00", currencyCode: "USD" },
              },
              images: { edges: [] },
            },
          },
          {
            id: "2",
            node: {
              title: "Sample Product 2",
              handle: "product-2",
              description: "This is a sample product",
              priceRange: {
                minVariantPrice: { amount: "39.00", currencyCode: "USD" },
              },
              images: { edges: [] },
            },
          },
          {
            id: "3",
            node: {
              title: "Sample Product 3",
              handle: "product-3",
              description: "This is a sample product",
              priceRange: {
                minVariantPrice: { amount: "39.00", currencyCode: "USD" },
              },
              images: { edges: [] },
            },
          },
          {
            id: "4",
            node: {
              title: "Sample Product 4",
              handle: "product-4",
              description: "This is a sample product",
              priceRange: {
                minVariantPrice: { amount: "39.00", currencyCode: "USD" },
              },
              images: { edges: [] },
            },
          },
        ]
      : products;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items, each carefully selected for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholderProducts.map((item) => (
            <ProductCard key={item.id || item.node.id} product={item.node} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block px-8 py-3 border-2 border-gray-300 backdrop-blur-md bg-white/50 text-gray-700 rounded-2xl font-semibold hover:bg-white/80 transition-all shadow-lg"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
