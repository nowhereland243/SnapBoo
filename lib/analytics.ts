// Umami Analytics Tracking Helper

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (
  eventName: string,
  eventData?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, eventData);
  }
};

// Pre-defined events for easy tracking
export const analytics = {
  // CTA Events
  preOrderClick: (location: string, price?: number) => {
    trackEvent("pre-order-clicked", { location, price });
  },

  addToCart: (productId: string, quantity: number, price: number) => {
    trackEvent("add-to-cart", { productId, quantity, price });
  },

  proceedToCheckout: (cartTotal: number, itemCount: number) => {
    trackEvent("proceed-to-checkout", { cartTotal, itemCount });
  },

  buyWithShop: (cartTotal: number) => {
    trackEvent("buy-with-shop", { cartTotal });
  },

  // Navigation Events
  clickStoryLink: (source: string) => {
    trackEvent("click-story", { source });
  },

  clickProductLink: (source: string) => {
    trackEvent("click-product", { source });
  },

  openCart: (itemCount: number) => {
    trackEvent("open-cart", { itemCount });
  },

  closeCart: () => {
    trackEvent("close-cart");
  },

  openMobileMenu: () => {
    trackEvent("open-mobile-menu");
  },

  // Product Page Events
  viewProductImage: (imageIndex: number, imageName: string) => {
    trackEvent("view-product-image", { imageIndex, imageName });
  },

  toggleProductDetails: (section: string, isOpen: boolean) => {
    trackEvent("toggle-product-details", { section, isOpen });
  },

  changeQuantity: (quantity: number) => {
    trackEvent("change-quantity", { quantity });
  },

  viewFullscreenImage: (imageIndex: number) => {
    trackEvent("view-fullscreen-image", { imageIndex });
  },

  // Scroll Events
  scrollToSection: (sectionName: string) => {
    trackEvent("scroll-to-section", { sectionName });
  },

  // External Links
  clickTermsPolicy: () => {
    trackEvent("click-terms-policy");
  },

  clickSocialLink: (platform: string) => {
    trackEvent("click-social-link", { platform });
  },

  // Cart Events
  removeFromCart: (productId: string) => {
    trackEvent("remove-from-cart", { productId });
  },

  updateCartQuantity: (productId: string, quantity: number) => {
    trackEvent("update-cart-quantity", { productId, quantity });
  },

  // Banner Clicks
  clickTopBanner: () => {
    trackEvent("click-top-banner");
  },
};
