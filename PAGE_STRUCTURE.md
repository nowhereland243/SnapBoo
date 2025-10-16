# 📄 SnapBoo Website - Page Structure Map

这个文档列出所有页面和 section 的顺序，方便调整页面结构。

---

## 🏠 Homepage (`/` - app/page.tsx)

### Section 顺序（从上到下）

1. **Header** (全局)

   - Logo: SnapBoo
   - Navigation: Home | Our Story | Product | About
   - Cart Icon

2. **Hero Section**

   - 文件：`components/home/Hero.tsx`
   - 标题："Snap Your Labubu, Share the Love"
   - Pre-order 价格：$31.20 (原价 $39)
   - 库存计数：100 units
   - CTA: Pre-Order Now / Read Our Story

3. **Product Showcase 1 - Lifestyle Shot** ⭐ 大图区域

   - 背景：白色
   - 布局：左图 + 右文案
   - 标题："Labubu, Never Leaves Your Side"
   - 图片占位：`/images/lifestyle/hand-holding-demo.jpg`
   - 3 个核心优势：
     - Secure Magnetic Hold
     - Lightweight Design
     - Compatible with MagSafe

4. **Product Showcase 2 - Product Detail** ⭐ 大图区域

   - 背景：深色渐变 (slate-900 → purple-900)
   - 布局：左文案 + 右图
   - 标题："Designed for Perfection"
   - 图片占位：`/images/technical/3d-render-gold-front.png`
   - 4 个技术指标：
     - 360° Rotation
     - N52 Magnets
     - 45g Weight
     - ∞ Cuteness

5. **Use Cases - Better Than Bag Charms**

   - 背景：渐变 (blue-50 → purple-50 → pink-50)
   - 红色警告框："The Bag Charm Problem"
   - 8 个使用场景卡片：
     1. 🖥️ Instant Desktop Stand
     2. 👆 One-Handed Control
     3. ✨ Keep Labubu Pristine
     4. 🔄 Swap Anytime
     5. 📸 Perfect Selfies & Videos
     6. 💬 Instant Conversation Starter
     7. 🚇 Secure on the Go
     8. 💕 Show Off Your Collection
   - CTA: "Pre-Order SnapBoo Now"

6. **Features Showcase**

   - 文件：`components/home/FeaturesShowcase.tsx`
   - 产品特性展示

7. **Technical Specifications**

   - 背景：粉紫渐变
   - 6 个技术规格：
     - Material
     - Magnet Strength
     - Compatibility
     - Weight
     - Rotation
     - Finish

8. **Final CTA Section**

   - 背景：深色渐变 (slate-900 → blue-900)
   - 标题："Ready to Keep Labubu Close?"
   - 2 个 CTA 按钮：
     - Pre-Order Now - $31.20
     - Read Our Story
   - 信任标记：Free shipping / Ships in 30 days / 100% satisfaction

9. **Footer** (全局)
   - Logo: SnapBoo
   - 4 列导航：
     - Brand info
     - Shop links
     - Support links
     - Newsletter signup

---

## 📖 Story Page (`/story` - app/story/page.tsx)

### Section 顺序

1. **Header** (全局)

2. **Story Hero**

   - 文件：`components/home/StoryHero.tsx`
   - 标题："For My Mom, 10,000 Miles Away"
   - 情感焦点的主视觉

3. **Story Section - 5 Chapters**

   - 文件：`components/home/StorySection.tsx`
   - Chapter 1: Distance 🌏
   - Chapter 2: Labubu 💝
   - Chapter 3: Creation 🛠️
   - Chapter 4: Joy ✨
   - Chapter 5: You 🌟

4. **First Time Notice**

   - 文件：`components/home/FirstTimeNotice.tsx`
   - "This is my first time" 诚实告白

5. **Features Showcase**

   - 共享组件

6. **Footer** (全局)

---

## 🛍️ Product Page (`/product/labubu-grip` - app/product/[handle]/page.tsx)

### Section 顺序

1. **Header** (全局)

2. **Product Gallery**

   - 文件：`components/product/ProductGallery.tsx`
   - 8 张产品图片轮播
   - 全屏预览功能
   - 滑动手势支持

3. **Product Info**

   - 文件：`components/product/ProductInfo.tsx`
   - 产品标题
   - 价格显示
   - 库存计数
   - Add to Cart 按钮

4. **Product Details**

   - 文件：`components/product/ProductDetails.tsx`
   - 可展开的详细信息：
     - Materials & Construction
     - Features
     - Design Concept

5. **Footer** (全局)

---

## 🛒 Cart Page (`/cart` - app/cart/page.tsx)

### Section 顺序

1. **Header** (全局)

2. **Cart Items List**

   - 商品列表
   - 数量控制
   - 移除按钮

3. **Order Summary**

   - Pre-order 提示
   - 价格明细
   - Checkout 按钮
   - 信任徽章

4. **Footer** (全局)

---

## ℹ️ About Page (`/about` - app/about/page.tsx)

### Section 顺序

1. **Header** (全局)

2. **Hero Section**

   - 标题："The Story Behind SnapBoo"

3. **Designer Introduction**

   - 设计师照片占位

4. **Story Content**

   - Why I Created SnapBoo
   - The Design Journey
   - The Community Connection
   - Why Pre-Order?

5. **CTA Section**

   - "Ready to Bring Labubu Everywhere?"

6. **Footer** (全局)

---

## 🗂️ 组件文件结构

### Layout Components

- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

### Home Components

- `components/home/Hero.tsx`
- `components/home/StoryHero.tsx`
- `components/home/StorySection.tsx`
- `components/home/FirstTimeNotice.tsx`
- `components/home/FeaturesShowcase.tsx`
- `components/home/FeaturedProducts.tsx`

### Product Components

- `components/product/ProductGallery.tsx`
- `components/product/ProductInfo.tsx`
- `components/product/ProductDetails.tsx`

### UI Components

- `components/ui/Button.tsx`
- `components/ui/ProductCard.tsx`
- `components/ui/PriceDisplay.tsx`
- `components/ui/StockCounter.tsx`
- `components/ui/AnimatedButton.tsx`
- (更多...)

---

## 📝 快速调整指南

### 如何调整 Section 顺序

1. 打开对应的页面文件（如 `app/page.tsx`）
2. 找到 `<main>` 标签内的内容
3. 复制粘贴整个 `<section>` 块来调整顺序
4. 保存文件即可

### 如何隐藏/显示 Section

注释掉整个 section：

```tsx
{
  /* <section>...</section> */
}
```

### 如何修改 Section 背景色

查找 `className` 中的 `bg-` 属性：

- `bg-white` - 白色
- `bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50` - 渐变
- `bg-gradient-to-br from-slate-900 to-blue-900` - 深色渐变

---

**最后更新**: 2025-10-09  
**总页面数**: 5 (Home, Story, Product, Cart, About)  
**总 Section 数**: 约 30+
