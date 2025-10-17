import { getProduct } from "@/lib/shopify";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Force dynamic rendering to always fetch fresh data from Shopify
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const discountedPrice = price * 0.8; // 20% off

  return {
    title: `${product.title} - Pre-Order Now`,
    description:
      product.description || "The ultimate MagSafe phone grip for your Labubu.",
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images.edges.slice(0, 4).map((edge: any) => ({
        url: edge.node.url,
        width: edge.node.width || 1200,
        height: edge.node.height || 630,
        alt: edge.node.altText || product.title,
      })),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.images.edges[0]?.node.url],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProduct(params.handle);

  if (!product || !product.id) {
    notFound();
  }

  // Generate JSON-LD structured data for rich snippets
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const discountedPrice = price * 0.8; // 20% off pre-order discount

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images.edges.map((edge: any) => edge.node.url),
    brand: {
      "@type": "Brand",
      name: "SnapBoo",
    },
    offers: {
      "@type": "Offer",
      price: discountedPrice.toFixed(2),
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/PreOrder",
      url: `https://snap-boo.com/product/${params.handle}`,
      seller: {
        "@type": "Organization",
        name: "SnapBoo",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <main className="flex-1 bg-white">
        {/* Product section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left: Image gallery - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <ProductGallery images={product.images.edges} />
            </div>

            {/* Right: Product info */}
            <ProductInfo product={product} />
          </div>

          {/* Product details (expandable sections) */}
          <ProductDetails product={product} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
