// SEO Configuration for SnapBoo
import { DefaultSeoProps } from "next-seo";

export const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: "%s | SnapBoo",
  defaultTitle: "SnapBoo - The Ultimate Labubu MagSafe Grip",
  description:
    "The first-ever MagSafe accessory designed exclusively for Labubu enthusiasts. Keep your favorite companion close, wherever you go.",
  canonical: "https://snap-boo.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snap-boo.com",
    siteName: "SnapBoo",
    title: "SnapBoo - The Ultimate Labubu MagSafe Grip",
    description:
      "The first-ever MagSafe accessory designed exclusively for Labubu enthusiasts. Keep your favorite companion close, wherever you go.",
    images: [
      {
        url: "https://snap-boo.com/images/product/hero-labubu-magsafe.png",
        width: 1200,
        height: 630,
        alt: "SnapBoo Labubu MagSafe Grip",
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@snapboo",
    site: "@snapboo",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Labubu, MagSafe, Phone Grip, Pop Mart, Labubu Accessories, iPhone Accessories, Phone Mount, Labubu Holder",
    },
    {
      name: "author",
      content: "SnapBoo",
    },
    {
      name: "theme-color",
      content: "#F5A742",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    // Preconnect to external domains for better performance
    {
      rel: "preconnect",
      href: "https://labubugirp.myshopify.com",
    },
    {
      rel: "preconnect",
      href: "https://snapboo-analytics.vercel.app",
    },
    {
      rel: "dns-prefetch",
      href: "https://labubugirp.myshopify.com",
    },
    {
      rel: "dns-prefetch",
      href: "https://snapboo-analytics.vercel.app",
    },
  ],
};

// Product page SEO
export const PRODUCT_SEO = {
  title: "Labubu MagSafe Grip - Pre-Order Now",
  description:
    "The ultimate MagSafe phone grip for your Labubu. Secure magnetic hold, premium materials, and free US shipping. Limited to 100 units - Pre-order now for 20% off!",
  canonical: "https://snap-boo.com/product/labubu-grip",
  openGraph: {
    type: "product",
    title: "Labubu MagSafe Grip - SnapBoo",
    description:
      "The ultimate MagSafe phone grip for your Labubu. Secure magnetic hold, premium materials, and free US shipping.",
    images: [
      {
        url: "https://snap-boo.com/images/product/hero-labubu-magsafe.png",
        width: 1200,
        height: 630,
        alt: "SnapBoo Labubu MagSafe Grip",
        type: "image/png",
      },
    ],
  },
};

// Story page SEO
export const STORY_SEO = {
  title: "Our Story - How SnapBoo Was Born",
  description:
    "Discover the heartwarming story behind SnapBoo - a mother's gift to her son, now available to all Labubu fans.",
  canonical: "https://snap-boo.com/story2",
  openGraph: {
    type: "article",
    title: "Our Story - How SnapBoo Was Born",
    description:
      "Discover the heartwarming story behind SnapBoo - a mother's gift to her son, now available to all Labubu fans.",
    images: [
      {
        url: "https://snap-boo.com/images/story/hero-mother-son-labubu.png",
        width: 1200,
        height: 630,
        alt: "SnapBoo Origin Story",
        type: "image/png",
      },
    ],
  },
};
