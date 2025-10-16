# Hero Section Images & Videos

## 📱 Mobile vs Desktop: Different Media Support

The Hero section now supports **different images/videos for mobile and desktop** to optimize the viewing experience.

### Current Setup

- **Mobile & Desktop**: Both use `hero-labubu-cloud.png` (5460 × 3072)
- The same image is displayed but with different cropping

### 🎯 Recommended: Add Vertical Video for Mobile

For the best mobile experience, you should add a **vertical video** (9:16 aspect ratio) for mobile devices.

#### How to Add Mobile-Specific Video:

1. **Create/Export your vertical video**

   - Recommended resolution: **1080 × 1920** (Full HD vertical) or **1080 × 1440**
   - Format: MP4 (H.264) for best compatibility
   - Keep file size under 5MB for fast loading

2. **Place the files here:**

   ```
   /public/images/hero/
   ├── hero-labubu-cloud.png          (existing - desktop fallback)
   ├── hero-mobile.mp4                (add this - mobile video)
   └── hero-desktop.mp4               (add this - desktop video)
   ```

3. **The code will automatically use:**
   - `hero-mobile.mp4` on phones and tablets (portrait)
   - `hero-desktop.mp4` on laptops and desktops (landscape)
   - PNG fallback if videos aren't available

#### Current Behavior:

- **Mobile (< 768px)**: Shows image in portrait crop (60% of viewport height)
- **Desktop (≥ 768px)**: Shows full horizontal image

#### Example Vertical Video Content Ideas:

For mobile vertical format, consider:

- **Cloud → Product transformation** (vertical pan down)
- **Close-up product rotation** (360° spin)
- **Hand holding product** (natural phone viewing angle)
- **Labubu figure snapping onto the grip** (ASMR-style)

### 🎬 Video Specifications

| Aspect       | Mobile              | Desktop               |
| ------------ | ------------------- | --------------------- |
| Aspect Ratio | **9:16** (vertical) | **16:9** (horizontal) |
| Resolution   | 1080 × 1920         | 1920 × 1080           |
| Duration     | 5-10 seconds (loop) | 5-15 seconds (loop)   |
| File Size    | < 3MB (compressed)  | < 5MB                 |
| Format       | MP4 (H.264)         | MP4 (H.264)           |

### 🎨 Content Strategy

**Mobile Video** should:

- Be vertical/portrait oriented
- Show product from top-down or straight-on angle
- Include close-ups that work on small screens
- Start with eye-catching moment (cloud, Labubu character)

**Desktop Video** should:

- Be horizontal/landscape oriented
- Show wider scene or context
- Can include more storytelling
- More cinematic feel

---

## Current Placeholder

Currently using: **`hero-labubu-cloud.png`**

- This is a **horizontal image** (5460 × 3072)
- Works on both mobile and desktop but not optimized

Replace with your own videos when ready!


