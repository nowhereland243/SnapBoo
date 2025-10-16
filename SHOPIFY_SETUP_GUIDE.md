# Shopify Integration Guide for SnapBoo

This guide will help you connect your SnapBoo website to Shopify.

## Step 1: Set Up Your Shopify Store

1. **Create a Shopify Account** (if you don't have one)

   - Go to https://www.shopify.com/
   - Click "Start free trial"
   - Follow the setup wizard

2. **Choose Your Plan**
   - For pre-orders and selling: Choose "Basic Shopify" ($29/month) or higher
   - You get a 3-day free trial, then $1/month for the first 3 months

## Step 2: Create Your Product in Shopify

1. **Log into your Shopify Admin**

   - Go to `https://your-store-name.myshopify.com/admin`

2. **Add Your Product**

   - Click "Products" → "Add product"
   - **Product Title**: `Labubu Grip - MagSafe Magnetic Stand`
   - **Description**: Copy from your website or write your own
   - **Price**: `$31.20`
   - **Compare at price**: `$39.00` (to show the discount)
   - **SKU**: `SNAPBOO-LABUBU-001`
   - **Inventory**: Set to your pre-order quantity (e.g., 100)

3. **Upload Product Images**

   - Upload all 9 images from `public/images/`:
     1. labubu-front-white-bg.png
     2. labubu-with-magsafe.png
     3. 3d-render-gold-front.png
     4. outdoor-nature.jpg
     5. labubu-face-down.png
     6. hand-holding-demo.jpg
     7. beach-scene.jpg
     8. sweater-holding.png
     9. sketch-diagram-1.png

4. **Set Product Handle**

   - In the "Search engine listing" section, set URL handle to: `labubu-grip`
   - This must match the handle in your code!

5. **Save the product**

## Step 3: Enable Shopify Storefront API

1. **Create a Custom App**

   - In Shopify Admin, go to **Settings** → **Apps and sales channels**
   - Click **"Develop apps"** (you may need to enable custom app development)
   - Click **"Create an app"**
   - **App name**: `SnapBoo Website`
   - Click **"Create app"**

2. **Configure Storefront API Access**

   - Click on the app you just created
   - Go to **"Configuration"** tab
   - Under **"Storefront API integration"**, click **"Configure"**
   - Select these scopes:
     - ✅ `unauthenticated_read_product_listings`
     - ✅ `unauthenticated_read_product_inventory`
     - ✅ `unauthenticated_read_product_tags`
     - ✅ `unauthenticated_read_checkouts`
     - ✅ `unauthenticated_write_checkouts`
   - Click **"Save"**

3. **Get Your API Credentials**
   - Go to **"API credentials"** tab
   - Click **"Install app"** to install it to your store
   - You'll see:
     - **Storefront API access token**: Copy this! (looks like: `shpat_xxxxxxxxxxxxx`)

## Step 4: Configure Your Website

1. **Create Environment File**

   ```bash
   # In your project root, create a file named .env.local
   touch .env.local
   ```

2. **Add Your Shopify Credentials**
   Open `.env.local` and add:

   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_your_actual_token_here
   ```

   **Example**:

   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=snapboo-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_a1b2c3d4e5f6g7h8i9j0
   ```

3. **Restart Your Development Server**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

## Step 5: Test the Integration

1. **Check Product Page**

   - Visit: http://localhost:3000/product/labubu-grip
   - You should see real Shopify data (not mock data)
   - Check browser console - you should NOT see "using mock data" warning

2. **Test Add to Cart**

   - Click "Pre-Order Now"
   - Add product to cart
   - Go to cart page: http://localhost:3000/cart
   - Click "Checkout" - it should redirect to Shopify checkout

3. **Test Checkout (Optional - uses test payment)**
   - Complete the Shopify checkout flow
   - Use Shopify's test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVV

## Step 6: Set Up Pre-Orders (Optional)

If you want to take pre-orders before you have stock:

1. **Install Pre-Order App**

   - In Shopify Admin: **Apps** → **Shopify App Store**
   - Search for "Pre-order" (many free options like "Pre-Order Now")
   - Install and configure

2. **Or Use Native Shopify**
   - Set inventory to your pre-order limit (100)
   - Enable "Continue selling when out of stock"
   - Update button text to "Pre-Order" in your theme

## Step 7: Configure Shipping

1. **Go to Settings → Shipping and delivery**
2. **Set up US shipping**

   - Create a shipping zone for United States
   - Add a free shipping rate: "Free Standard Shipping"
   - Set condition: "Based on order price" → "Free if order is $0 or more"

3. **International Shipping** (if needed)
   - Add other countries/zones
   - Set appropriate rates

## Step 8: Set Up Payments

1. **Go to Settings → Payments**
2. **Enable Shopify Payments** (recommended)

   - Lowest fees
   - Fast setup
   - Or add PayPal, Stripe, etc.

3. **Test Mode**
   - Enable test mode during development
   - Use test cards for testing

## Step 9: Legal Pages

1. **Go to Settings → Policies**
2. **Generate policies**:
   - Refund policy (mention 30-day return)
   - Privacy policy
   - Terms of service
   - Shipping policy (mention free US shipping)

## Step 10: Launch Checklist

Before going live:

- [ ] Product is set up with correct price ($31.20)
- [ ] All 9 product images are uploaded
- [ ] Product handle is `labubu-grip`
- [ ] Storefront API token is configured in `.env.local`
- [ ] Website shows real Shopify data (not mock)
- [ ] Add to cart works
- [ ] Checkout flow works
- [ ] Shipping is set to free for US
- [ ] Payment provider is set up
- [ ] Legal policies are added
- [ ] Test order completed successfully
- [ ] Removed Shopify password protection (Settings → Online Store → Preferences)

## Troubleshooting

### "Using mock data" warning

- Make sure `.env.local` file exists
- Check that environment variables are correctly named
- Restart dev server after adding `.env.local`

### Product not found

- Verify product handle in Shopify matches `labubu-grip`
- Check Storefront API permissions include product access
- Ensure product is active and published to "Online Store" channel

### Checkout doesn't work

- Verify Storefront API has checkout permissions
- Make sure product has at least 1 variant
- Check that product is available for sale

### API errors

- Verify your Storefront Access Token is correct
- Check your store domain format: `your-store.myshopify.com` (not your custom domain)
- Ensure the custom app is installed to your store

## Support Resources

- **Shopify Help Center**: https://help.shopify.com/
- **Storefront API Docs**: https://shopify.dev/docs/api/storefront
- **Shopify Community**: https://community.shopify.com/
- **SnapBoo Support**: Contact your developer (me!)

## Next Steps After Launch

1. **Set up Google Analytics** (add tracking ID to `.env.local`)
2. **Configure email notifications** (Shopify Admin → Settings → Notifications)
3. **Set up abandoned cart recovery** (included with Shopify)
4. **Add marketing pixels** (Facebook, TikTok, etc.)
5. **Create discount codes** (for influencers, early birds, etc.)
6. **Set up Shopify POS** (if selling in person)

---

## Quick Reference

**Environment Variables Needed:**

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=shpat_xxxxxxxxxxxxx
```

**Product Handle (must match):**

```
labubu-grip
```

**API Scopes Required:**

- unauthenticated_read_product_listings
- unauthenticated_read_product_inventory
- unauthenticated_read_checkouts
- unauthenticated_write_checkouts

**Price:**

- Sale Price: $31.20
- Compare At: $39.00
- Discount: 20%

Good luck with your launch! 🎉
