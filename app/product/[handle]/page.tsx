import { getProduct } from "@/lib/shopify";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProduct(params.handle);

  if (!product || !product.id) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white">
        {/* Product section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
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

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return [{ handle: "labubu-grip" }];
}
