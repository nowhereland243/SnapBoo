# Image Assets Guide

This folder contains all images for the Labubu Grip website.

## 📁 Folder Structure

```
public/images/
├── hero/                    # Hero section images
├── lifestyle/               # Lifestyle/scene photos
├── product/                 # Product white-background photos
├── technical/               # Technical drawings and 3D renders
└── about/                   # About page images (designer photos, etc.)
```

---

## 🎯 Image Placement Guide

### 📸 Hero Section (`/images/hero/`)

**File: `hero-labubu-cloud.png`**

- **Size**: 5460 × 3072 (or similar high-res)
- **Description**: Deep blue background with cloud Labubu rendering
- **Usage**: Full-screen hero background on homepage
- **Note**: This will be replaced with video in the future

---

### 🌿 Lifestyle Images (`/images/lifestyle/`)

These photos show the product in real-life scenarios:

1. **`outdoor-nature.jpg`**

   - Size: 1176 × 785 (landscape)
   - Description: Labubu Grip in outdoor/nature setting
   - Usage: Story section, parallax animation

2. **`cozy-blanket.jpg`**

   - Size: 1184 × 864 (landscape)
   - Description: Hand holding Labubu with cozy blanket/fabric
   - Usage: Lifestyle gallery

3. **`beach-scene.jpg`**

   - Size: Landscape orientation
   - Description: Product laid out on beach/sand
   - Usage: Story section, product page

4. **`hand-holding-demo.jpg`**
   - Size: Landscape orientation
   - Description: Hand demonstrating MagSafe attachment
   - Usage: Features section, product carousel

---

### 🎨 Product Images (`/images/product/`)

White-background product shots for clean presentation:

1. **`labubu-front-white-bg.png`**

   - Size: 2048 × 2048 (square)
   - Description: Brown Labubu figure - front view
   - Usage: **Product page carousel #1** (main image)

2. **`labubu-side-white-bg.png`**

   - Size: 2048 × 2048 (square)
   - Description: Brown Labubu figure - side view
   - Usage: Product page carousel #2

3. **`labubu-back-white-bg.png`**

   - Size: 1024 × 1024 (square)
   - Description: Brown Labubu figure - back view
   - Usage: Product page carousel #3

4. **`labubu-with-magsafe.png`**

   - Size: 1024 × 1024 (square)
   - Description: Labubu figure with MagSafe grip separated
   - Usage: **Product page carousel #4**, Features section

5. **`magsafe-detail-white-bg.png`**
   - Size: Square
   - Description: Close-up of MagSafe attachment
   - Usage: Product page carousel #5

---

### 🔧 Technical Images (`/images/technical/`)

Technical drawings and 3D renders:

1. **`sketch-diagram-1.png`**

   - Size: 1536 × 672 (landscape)
   - Description: Pencil-style technical drawing showing structure
   - Usage: **Product details section** (Design & Craftsmanship)

2. **`sketch-diagram-2.png`**

   - Size: 1536 × 672 (landscape)
   - Description: Component breakdown sketch
   - Usage: About page (design process)

3. **`3d-render-gold-front.png`**

   - Size: 1024 × 1024 (square)
   - Description: Gold/gray background 3D render - front view
   - Usage: **Product page carousel #6**, Features showcase

4. **`3d-render-side.png`**

   - Size: 1024 × 1024 (square)
   - Description: 3D render - side view
   - Usage: Product page carousel #7

5. **`3d-render-back-magnet.png`**

   - Size: 1024 × 1024 (square)
   - Description: 3D render showing X-shaped magnet array
   - Usage: **Product page carousel #8**, Features section

6. **`3d-parts-breakdown.png`**
   - Size: 1024 × 1024 (square)
   - Description: Exploded view showing all components
   - Usage: Features showcase (N52 magnets section)

---

### 👨‍🎨 About Page Images (`/images/about/`)

**To be added by you:**

1. **`designer-photo.jpg`**

   - Suggested size: 800 × 800 (square)
   - Description: Your photo or workspace
   - Usage: About page hero

2. **`workshop-scene.jpg`**

   - Suggested size: 1600 × 900 (landscape)
   - Description: Behind-the-scenes, working on design
   - Usage: About page design journey section

3. **`sketch-process.jpg`**
   - Suggested size: 1600 × 900 (landscape)
   - Description: Early sketches, design iterations
   - Usage: About page design journey section

---

## 📋 Image Checklist

### ✅ Confirmed Assets (from your screenshots):

- [ ] Hero: Deep blue cloud rendering (5460×3072)
- [ ] Lifestyle: Outdoor nature scene (1176×785)
- [ ] Lifestyle: Cozy blanket scene (1184×864)
- [ ] Lifestyle: Beach scene
- [ ] Lifestyle: Hand holding demo
- [ ] Product: Labubu front white-bg (2048×2048)
- [ ] Product: Labubu side white-bg (2048×2048)
- [ ] Product: Labubu back white-bg (1024×1024)
- [ ] Product: With MagSafe separated (1024×1024)
- [ ] Technical: Pencil sketch diagram (1536×672)
- [ ] Technical: 3D render gold/gray (1024×1024)
- [ ] Technical: 3D render side view
- [ ] Technical: 3D render magnet detail

### ⏳ To Be Added (About Page):

- [ ] About: Designer photo
- [ ] About: Workshop/behind-the-scenes
- [ ] About: Design process photos

---

## 🎯 Where Each Image Appears

### Homepage (`/`)

- Hero: `hero-labubu-cloud.png`
- Story section: `outdoor-nature.jpg`, `beach-scene.jpg`, `hand-holding-demo.jpg`
- Features: `3d-parts-breakdown.png`, `3d-render-gold-front.png`
- Gallery: Mix of all types (6-9 images)

### Product Page (`/product/labubu-grip`)

**Carousel (in order):**

1. `labubu-front-white-bg.png`
2. `labubu-with-magsafe.png`
3. `3d-render-gold-front.png`
4. `3d-render-back-magnet.png`
5. `hand-holding-demo.jpg`
6. `beach-scene.jpg`
7. `sketch-diagram-1.png`
8. `3d-render-side.png`

**Product Details Section:**

- Materials: `sketch-diagram-1.png`

### About Page (`/about`)

- Hero: `designer-photo.jpg` (placeholder emoji for now)
- Journey: 3 placeholder boxes for your photos

---

## 💡 Image Optimization Tips

All images will be automatically optimized by Next.js/Vercel:

- Converted to WebP/AVIF for smaller file sizes
- Responsive sizes generated automatically
- Lazy-loaded for better performance

**But you can help:**

- Keep original high-quality images
- JPG for photos, PNG for graphics with transparency
- Don't worry too much about file size—Vercel handles it

---

## 🚀 How to Add Your Images

1. Download your image files
2. Rename them according to the names above
3. Place them in the correct folder
4. That's it! The website will automatically use them

---

**Questions?** Just ask! 😊


