// Shopify Storefront API configuration and utilities

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "";
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

// For development: use mock data if Shopify is not configured
const useMockData = !domain || !storefrontAccessToken;

async function ShopifyData(query: string) {
  if (useMockData) {
    console.warn("Shopify not configured, using mock data");
    return getMockData(query);
  }

  const URL = `https://${domain}/api/2024-01/graphql.json`;

  const options = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(URL, options);
    const data = await response.json();

    if (data.errors) {
      console.error("Shopify GraphQL errors:", data.errors);
      throw new Error("GraphQL query failed");
    }

    return data;
  } catch (error) {
    console.error("Shopify API error:", error);
    throw new Error("Failed to fetch from Shopify");
  }
}

// Mock data for development
function getMockData(query: string) {
  if (query.includes("product(handle:")) {
    return {
      data: {
        product: {
          id: "mock-product-1",
          title: "Labubu Grip - MagSafe Magnetic Stand",
          handle: "labubu-grip",
          description:
            "Premium MagSafe magnetic phone accessory designed for Labubu fans. Features N52 neodymium magnets, aerospace-grade aluminum, and 360° rotation.",
          descriptionHtml:
            "<p>Premium MagSafe magnetic phone accessory designed for Labubu fans.</p>",
          priceRange: {
            minVariantPrice: {
              amount: "31.20",
              currencyCode: "USD",
            },
          },
          compareAtPriceRange: {
            minVariantPrice: {
              amount: "39.00",
              currencyCode: "USD",
            },
          },
          images: {
            edges: [
              {
                node: {
                  url: "/images/product/labubu-front-white-bg.png",
                  altText: "Labubu Grip - Front View",
                },
              },
              {
                node: {
                  url: "/images/product/labubu-with-magsafe.png",
                  altText: "Labubu with MagSafe",
                },
              },
              {
                node: {
                  url: "/images/technical/3d-render-gold-front.png",
                  altText: "3D Render - Front",
                },
              },
              {
                node: {
                  url: "/images/lifestyle/outdoor-nature.jpg",
                  altText: "Outdoor Nature Scene",
                },
              },
              {
                node: {
                  url: "/images/lifestyle/labubu-face-down.png",
                  altText: "Labubu Face Down",
                },
              },
              {
                node: {
                  url: "/images/lifestyle/hand-holding-demo.jpg",
                  altText: "Hand Holding Demo",
                },
              },
              {
                node: {
                  url: "/images/lifestyle/beach-scene.jpg",
                  altText: "Beach Scene",
                },
              },
              {
                node: {
                  url: "/images/lifestyle/sweater-holding.png",
                  altText: "Sweater Holding Demo",
                },
              },
              {
                node: {
                  url: "/images/technical/sketch-diagram-1.png",
                  altText: "Technical Sketch",
                },
              },
            ],
          },
          variants: {
            edges: [
              {
                node: {
                  id: "mock-variant-1",
                  title: "Default",
                  price: {
                    amount: "31.20",
                    currencyCode: "USD",
                  },
                  availableForSale: true,
                },
              },
            ],
          },
        },
      },
    };
  }

  // Default product list
  return {
    data: {
      products: {
        edges: [
          {
            node: {
              id: "mock-product-1",
              title: "Labubu Grip - MagSafe Magnetic Stand",
              handle: "labubu-grip",
              description:
                "Snap Your Labubu, Share the Love. Premium MagSafe accessory.",
              priceRange: {
                minVariantPrice: {
                  amount: "31.20",
                  currencyCode: "USD",
                },
              },
              compareAtPriceRange: {
                minVariantPrice: {
                  amount: "39.00",
                  currencyCode: "USD",
                },
              },
              images: {
                edges: [
                  {
                    node: {
                      url: "/images/product/labubu-front-white-bg.png",
                      altText: "Labubu Grip",
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  };
}

// 获取所有产品
export async function getProducts() {
  const query = `
    {
      products(first: 25) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 20) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  const allProducts = response.data.products.edges || [];
  return allProducts;
}

// 获取单个产品详情
export async function getProduct(handle: string) {
  const query = `
    {
      product(handle: "${handle}") {
        id
        title
        handle
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 20) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 25) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  const product = response.data.product || {};
  return product;
}

// 创建购物车 - 支持多个商品
export async function createCheckout(lineItems: Array<{ variantId: string; quantity: number }>) {
  const lineItemsString = lineItems
    .map((item) => `{ variantId: "${item.variantId}", quantity: ${item.quantity} }`)
    .join(", ");

  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [${lineItemsString}]
      }) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  
  if (response.data.checkoutCreate.checkoutUserErrors.length > 0) {
    console.error("Checkout user errors:", response.data.checkoutCreate.checkoutUserErrors);
    throw new Error("Failed to create checkout");
  }

  const checkout = response.data.checkoutCreate.checkout || {};
  return checkout;
}

// 更新购物车
export async function updateCheckout(checkoutId: string, lineItems: any[]) {
  const lineItemsObject = lineItems
    .map(
      (item) => `{
    variantId: "${item.variantId}",
    quantity: ${item.quantity}
  }`
    )
    .join(",");

  const query = `
    mutation {
      checkoutLineItemsReplace(checkoutId: "${checkoutId}", lineItems: [${lineItemsObject}]) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);
  const checkout = response.data.checkoutLineItemsReplace.checkout || {};
  return checkout;
}
