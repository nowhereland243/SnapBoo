# 📸 Image Placement Guide for Story 2.0

## ✅ What I've Done

I've already updated all the code to use your new images. Now you just need to copy the 7 images to the correct folder!

---

## 📁 Where to Put Your Images

**Copy all 7 images to this folder:**

```
/Users/nolanfeng/Project/labubu-shopify/public/images/story2/
```

**Full path in Finder:**

1. Open Finder
2. Press `Cmd + Shift + G`
3. Paste: `/Users/nolanfeng/Project/labubu-shopify/public/images/story2/`
4. Press Enter
5. Copy all 7 PNG files into this folder

---

## 📋 Image File Checklist

Make sure your files are named **EXACTLY** like this (case-sensitive):

- [ ] `hero-mother-son-labubu.png`
- [ ] `chapter1-10years-apart.png`
- [ ] `chapter2-it-reminds-me-of-you.png`
- [ ] `chapter3-so-i-made-this.png`
- [ ] `chapter4-she-loves-it.png`
- [ ] `chapter5-your-turn.png`
- [ ] `always-with-you.png`

**Note:** Your original file was named "Always With You.png" (with capital letters and space). You need to rename it to `always-with-you.png` (all lowercase, hyphens instead of spaces).

---

## 🔄 Where Each Image Will Appear

### 1. **hero-mother-son-labubu.png**

- **Location:** Story 2.0 page - Hero section (first screen)
- **Component:** `HermesStoryHero.tsx`
- **Display:** Right side of the hero section, inside a cream-colored frame with black border
- **Features:** Clickable (triggers confetti animation)

### 2. **chapter1-10years-apart.png**

- **Location:** Story 2.0 page - Chapter 1: "10 Years Apart"
- **Component:** `HermesStorySection.tsx`
- **Display:** Right side of Chapter 1 block
- **Features:** Hover magnifier (3x zoom)

### 3. **chapter2-it-reminds-me-of-you.png**

- **Location:** Story 2.0 page - Chapter 2: "It Reminds Me of You"
- **Component:** `HermesStorySection.tsx`
- **Display:** Left side of Chapter 2 block (pink background)
- **Features:** Hover magnifier (3x zoom)

### 4. **chapter3-so-i-made-this.png**

- **Location:** Story 2.0 page - Chapter 3: "So I Made This"
- **Component:** `HermesStorySection.tsx`
- **Display:** Right side of Chapter 3 block (mint green background)
- **Features:** Hover magnifier (3x zoom)

### 5. **chapter4-she-loves-it.png**

- **Location:** Story 2.0 page - Chapter 4: "She Loves It"
- **Component:** `HermesStorySection.tsx`
- **Display:** Left side of Chapter 4 block (yellow background)
- **Features:** Hover magnifier (3x zoom)

### 6. **chapter5-your-turn.png**

- **Location:** Story 2.0 page - Chapter 5: "Your Turn"
- **Component:** `HermesStorySection.tsx`
- **Display:** Right side of Chapter 5 block (gradient background)
- **Features:** Hover magnifier (3x zoom)

### 7. **always-with-you.png**

- **Location:** Story 2.0 page - Features section, 2nd card
- **Component:** `HermesFeaturesShowcase.tsx`
- **Display:** "Always With You" feature card (yellow background #FFF066)
- **Features:** Hover to scale up slightly

---

## 🎨 Technical Specifications (For Reference)

All your images should meet these specs:

| Property          | Value                                                       |
| ----------------- | ----------------------------------------------------------- |
| **Format**        | PNG (preferred) or JPG                                      |
| **Size**          | 1000x1000px (hero & chapters), 800x1200px (always-with-you) |
| **Resolution**    | 72-150 DPI                                                  |
| **Color Profile** | sRGB                                                        |
| **File Size**     | < 500KB each (compress with TinyPNG if needed)              |
| **Background**    | Can be transparent or solid color                           |

---

## 🚀 What to Do Next

1. **Copy the 7 images** to `/Users/nolanfeng/Project/labubu-shopify/public/images/story2/`
2. **Rename** "Always With You.png" → `always-with-you.png`
3. **Refresh your browser** (open http://localhost:3000/story2)
4. **Test the page:**
   - Click the hero image (should trigger confetti 🎉)
   - Hover over chapter images (should see magnifier 🔍)
   - Scroll through all 5 chapters
   - Check the features section at the bottom

---

## ⚠️ Troubleshooting

### If images don't show up:

1. **Check file names** - Must be exactly as listed above (lowercase, hyphens, no spaces)
2. **Check file location** - Must be in `/public/images/story2/` folder
3. **Hard refresh browser** - Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
4. **Check dev server** - Make sure `npm run dev` is running
5. **Check file extensions** - Must be `.png` (not `.PNG` or `.jpeg`)

### If images look wrong:

- **Too small/big:** Images will auto-scale, but check they're at least 800x800px
- **Stretched:** Make sure image is square (1:1 aspect ratio) for hero and chapters
- **Blurry:** Increase resolution or file size
- **Wrong colors:** Check color profile is sRGB

---

## 📝 Code Files Updated

I've already updated these files for you:

1. ✅ `components/hermes/HermesStoryHero.tsx` - Hero image
2. ✅ `components/hermes/HermesStorySection.tsx` - All 5 chapter images
3. ✅ `components/hermes/HermesFeaturesShowcase.tsx` - "Always With You" image
4. ✅ `public/images/story2/README.md` - Image documentation

No code changes needed from you - just copy the images! 🎉

---

## 🎉 When Everything Works

You should see:

- Beautiful custom illustrations throughout the Story 2.0 page
- Smooth magnifier effect when hovering over chapter images
- Confetti animation when clicking the hero image
- All 7 images displaying correctly in their respective sections

**Visit:** http://localhost:3000/story2

---

## 💡 Pro Tips

- **Backup:** Keep original high-res versions of your images elsewhere
- **Compress:** Use https://tinypng.com/ to reduce file sizes without losing quality
- **Test:** Check on both desktop and mobile (responsive design is built-in)
- **Iterate:** Easy to replace any image - just overwrite the file with the same name

---

**Need help?** Check the terminal for any error messages or let me know! 🚀
