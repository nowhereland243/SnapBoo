# Labubu Grip - Setup Guide

Welcome! This guide will help you get the website up and running.

## 📦 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place your product images in the correct folders:

- See `/public/images/README.md` for detailed image placement guide
- Just drag and drop your images into the appropriate folders

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

---

## 🎨 What's Already Built

✅ **Homepage** (`/`)

- Full-screen hero with video placeholder
- Storytelling section with parallax animations
- Features showcase (N52 magnets, 360° rotation, etc.)
- Product gallery

✅ **Product Page** (`/product/labubu-grip`)

- Image carousel (8 images)
- Zoom-on-click functionality
- Pre-order pricing ($31.20 ← $39)
- Stock counter (100 units)
- Add to cart functionality
- Expandable product details (materials, features, design concept)

✅ **Cart Page** (`/cart`)

- Cart items management
- Quantity controls
- Pre-order notice
- Order summary
- Shipping info

✅ **About Page** (`/about`)

- Story sections
- Placeholders for your photos
- Design journey timeline

✅ **Components**

- Responsive header with cart icon
- Beautiful footer
- Price display with discount
- Stock counter with urgency indicator
- Custom button component

---

## 🔧 Current Status

### ✅ What Works Now (Without Shopify)

The site runs perfectly in **demo mode** with mock data:

- All pages load and display correctly
- Shopping cart works (saves to browser)
- All animations and interactions work
- Images display (once you add them)

### 🔜 What You'll Need to Connect

**Shopify Integration** (when you're ready):

1. Create product in Shopify Admin
2. Get API credentials
3. Add to `.env.local` file (I'll help with this)

**Pre-Order App** (optional, ~$10/month):

- Install from Shopify App Store
- Configures pre-order button automatically

---

## 📸 Image Setup

### Priority Images (Add These First)

**For Homepage:**

1. `public/images/hero/hero-labubu-cloud.png` - Hero background (5460×3072)
2. `public/images/lifestyle/outdoor-nature.jpg` - Story section
3. `public/images/lifestyle/beach-scene.jpg` - Story section

**For Product Page:**

1. `public/images/product/labubu-front-white-bg.png` - Main product image
2. `public/images/product/labubu-with-magsafe.png` - With MagSafe
3. `public/images/technical/3d-render-gold-front.png` - 3D render

See `/public/images/README.md` for complete list.

---

## 🚀 Deployment (When Ready)

### Option 1: Vercel (Recommended - FREE)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! You get a live URL

### Option 2: Netlify (Also FREE)

Similar process to Vercel.

---

## 🛠️ Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Change these hex values
    500: '#ec4899',  // Main pink
    600: '#db2777',  // Darker pink
    // ... etc
  }
}
```

### Change Text/Copy

All text is in the component files:

- Homepage: `/app/page.tsx`, `/components/home/`
- Product: `/app/product/[handle]/page.tsx`
- About: `/app/about/page.tsx`

### Update Stock Count

Currently hardcoded to 100. When Shopify is connected, this will be automatic.

---

## 🐛 Troubleshooting

### Issue: Images Not Showing

**Solution**:

1. Check file names match exactly (case-sensitive)
2. Make sure images are in correct folders
3. Restart dev server (`Ctrl+C` then `npm run dev`)

### Issue: "Module not found" errors

**Solution**:

```bash
rm -rf node_modules
npm install
```

### Issue: Tailwind styles not applying

**Solution**:

```bash
npm run dev
```

(Restart the server)

---

## 📋 Next Steps

### Immediate (Before Launch)

- [ ] Add all product images
- [ ] Write your About page story
- [ ] Add your photos to About page
- [ ] Test on mobile devices
- [ ] Review all copy/text

### Before Pre-Order Launch

- [ ] Set up Shopify store
- [ ] Connect Shopify API
- [ ] Install Pre-Order app
- [ ] Set up payment methods
- [ ] Test checkout flow
- [ ] Configure shipping

### After Launch

- [ ] Share on Labubu forums
- [ ] Monitor stock counter
- [ ] Respond to orders
- [ ] Collect feedback

---

## 💡 Tips

1. **Test Everything**: Click every button, try every link
2. **Mobile First**: Most users will be on phones
3. **Image Quality**: High-res images = professional look
4. **Story Matters**: Your About page is KEY for pre-orders
5. **Community**: Engage with Labubu fans for feedback

---

## ❓ Need Help?

If you run into issues or have questions, just ask!

Common questions:

- How to add/change images
- How to edit text
- How to connect Shopify
- How to deploy
- How to customize design

I'm here to help! 😊

---

**Last Updated**: October 2025  
**Status**: Development Mode (Demo Data)  
**Next Milestone**: Image Upload → Shopify Connection → Deploy


