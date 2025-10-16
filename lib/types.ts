// Type definitions for Shopify data

export interface ShopifyImage {
  url: string;
  altText?: string;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  compareAtPriceRange?: {
    minVariantPrice: ShopifyPrice;
  };
  images: {
    edges: Array<{
      node: ShopifyImage;
    }>;
  };
  variants?: {
    edges: Array<{
      node: ShopifyVariant;
    }>;
  };
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: ShopifyPrice;
  availableForSale: boolean;
}

export interface CartItem {
  id: string;
  variantId: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  handle: string;
}

export interface Checkout {
  id: string;
  webUrl: string;
  lineItems: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        quantity: number;
      };
    }>;
  };
}


