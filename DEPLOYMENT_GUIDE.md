# 🚀 SnapBoo 部署指南

完整的一步步部署教程，让你的网站上线！

---

## 📋 目录

1. [准备工作](#准备工作)
2. [图片优化](#图片优化)
3. [配置文件更新](#配置文件更新)
4. [Vercel 部署](#vercel-部署推荐)
5. [自定义域名](#自定义域名)
6. [上线后检查](#上线后检查)
7. [故障排除](#故障排除)

---

## 1. 准备工作

### 1.1 本地最终测试

```bash
cd /Users/nolanfeng/Project/labubu-shopify

# 清理缓存
rm -rf .next

# 运行构建
npm run build

# 启动生产服务器
npm run start
```

访问 `http://localhost:3000` 确认一切正常。

### 1.2 Git 仓库设置

如果还没有 Git 仓库:

```bash
# 初始化 Git
git init

# 创建 .gitignore
cat > .gitignore << EOF
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF

# 添加所有文件
git add .

# 首次提交
git commit -m "Initial commit - SnapBoo MVP ready for deployment"
```

### 1.3 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名: `snapboo-website` 或 `labubu-shopify`
3. 设为 Private（推荐）
4. **不要**初始化 README/license/gitignore

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/snapboo-website.git

# 推送代码
git branch -M main
git push -u origin main
```

---

## 2. 图片优化

### 2.1 批量压缩图片

**方法 1: TinyPNG (推荐)**

1. 访问 https://tinypng.com/
2. 拖拽以下图片上传压缩:
   - `public/images/story2/chapter2-it-reminds-me-of-you.png` (4.9M)
   - `public/images/story2/chapter4-she-loves-it.png` (4.0M)
   - `public/images/lifestyle/outdoor-nature.jpg` (2.5M)
   - `public/images/lifestyle/labubu-face-down.png` (2.0M)
   - `public/images/lifestyle/beach-scene.jpg` (1.9M)
3. 下载压缩后的文件
4. 替换原文件

**方法 2: 使用 ImageOptim (Mac)**

```bash
# 安装 ImageOptim
brew install --cask imageoptim

# 将图片文件夹拖到 ImageOptim 应用
# 自动批量压缩
```

**方法 3: 命令行批量处理**

```bash
# 安装工具
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant

# 压缩 PNG
imagemin public/images/**/*.png --out-dir=public/images --plugin=pngquant

# 压缩 JPG
imagemin public/images/**/*.jpg --out-dir=public/images --plugin=mozjpeg
```

### 2.2 验证压缩效果

```bash
# 检查文件大小
find public/images -type f \( -name "*.png" -o -name "*.jpg" \) -exec ls -lh {} \; | awk '{if ($5 ~ /M/ && $5+0 > 0.5) print $5, $9}'
```

目标: 所有图片 < 500KB

---

## 3. 配置文件更新

### 3.1 更新 `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 更新为新的 images 配置格式
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },

  // 添加缓存头
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### 3.2 添加 SEO 元数据

更新 `app/layout.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SnapBoo - The Ultimate Labubu MagSafe Companion",
    template: "%s | SnapBoo",
  },
  description:
    "The first-ever MagSafe accessory designed exclusively for Labubu enthusiasts. Keep your favorite companion close, wherever you go. Limited to 100 units. 20% off + free US shipping.",
  keywords: [
    "Labubu",
    "MagSafe",
    "Phone Grip",
    "Labubu Accessories",
    "SnapBoo",
  ],
  authors: [{ name: "SnapBoo" }],
  creator: "SnapBoo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snapboo.com", // 替换为你的域名
    siteName: "SnapBoo",
    title: "SnapBoo - The Ultimate Labubu MagSafe Companion",
    description:
      "The first-ever MagSafe accessory for Labubu lovers. Limited to 100 units.",
    images: [
      {
        url: "/images/og-image.png", // 需要创建 1200x630 的 OG 图片
        width: 1200,
        height: 630,
        alt: "SnapBoo - Labubu MagSafe Grip",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapBoo - The Ultimate Labubu MagSafe Companion",
    description: "The first-ever MagSafe accessory for Labubu lovers.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
```

### 3.3 添加 `robots.txt`

创建 `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://snapboo.com/sitemap.xml
```

### 3.4 添加环境变量

创建 `.env.local`:

```env
# Shopify Configuration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token-here

# Site URL (更新为你的域名)
NEXT_PUBLIC_SITE_URL=https://snapboo.com

# Analytics (可选)
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

创建 `.env.example` (提交到 Git):

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

### 3.5 提交更改

```bash
git add .
git commit -m "Optimize images and update config for production"
git push
```

---

## 4. Vercel 部署（推荐）

### 4.1 创建 Vercel 账户

1. 访问 https://vercel.com/signup
2. 使用 GitHub 账户登录
3. 授权 Vercel 访问你的 GitHub

### 4.2 导入项目

1. 点击 "Add New Project"
2. 选择 `snapboo-website` 仓库
3. 点击 "Import"

### 4.3 配置项目

**Framework Preset**: Next.js (自动检测)

**Build Settings** (通常不需要修改):

- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**环境变量**:

点击 "Environment Variables"，添加:

```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN = your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN = your-token-here
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app (先用 Vercel 提供的域名)
```

### 4.4 部署

1. 点击 "Deploy"
2. 等待 2-3 分钟
3. 🎉 部署成功！

你会得到一个 URL，类似: `https://snapboo-website.vercel.app`

### 4.5 测试生产环境

访问你的 Vercel URL，测试:

- ✅ 所有页面加载正常
- ✅ 图片显示正常
- ✅ 导航链接工作
- ✅ 购物车功能
- ✅ 移动端响应式

---

## 5. 自定义域名

### 5.1 购买域名

推荐域名注册商:

- Namecheap (便宜)
- Google Domains
- Cloudflare (最便宜，年费 $10)

推荐域名:

- `snapboo.com`
- `snapboo.shop`
- `getsnabboo.com`

### 5.2 在 Vercel 配置域名

1. 在 Vercel 项目中，点击 "Settings" → "Domains"
2. 输入你的域名（例如: `snapboo.com`）
3. 点击 "Add"
4. Vercel 会给你 DNS 配置指示

### 5.3 配置 DNS

在你的域名注册商处添加以下记录:

**A 记录**:

```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)
```

**CNAME 记录 (for www)**:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5.4 等待生效

- DNS 传播: 10 分钟 - 48 小时
- SSL 证书: 自动生成（免费）
- 强制 HTTPS: 自动启用

---

## 6. 上线后检查

### 6.1 功能测试清单

访问你的生产域名，逐一测试:

**页面导航**:

- [ ] 主页加载
- [ ] Story 2.0 页面
- [ ] 产品页面
- [ ] 购物车页面

**图片加载**:

- [ ] Hero 图片
- [ ] Story 2.0 章节图片（7 张）
- [ ] 产品图片（9 张）
- [ ] 放大镜功能

**交互功能**:

- [ ] 导航菜单（桌面 + 移动端）
- [ ] CTA 按钮
- [ ] 添加到购物车
- [ ] 数量调整
- [ ] Story 2.0 点击彩带
- [ ] 图片放大镜

**响应式**:

- [ ] 手机浏览器
- [ ] 平板浏览器
- [ ] 桌面浏览器

### 6.2 性能测试

**Google PageSpeed Insights**:

1. 访问 https://pagespeed.web.dev/
2. 输入你的网站 URL
3. 目标分数:
   - 移动端: > 80
   - 桌面端: > 90

**GTmetrix**:

1. 访问 https://gtmetrix.com/
2. 输入你的网站 URL
3. 检查加载时间和优化建议

### 6.3 SEO 检查

**Google Search Console**:

1. 访问 https://search.google.com/search-console
2. 添加你的网站
3. 提交 sitemap（如果有）

**Meta 标签检查**:

1. 访问 https://www.opengraph.xyz/
2. 输入你的 URL
3. 查看 Open Graph 预览

---

## 7. 故障排除

### 问题 1: 图片不显示

**症状**: 页面显示但图片空白

**解决**:

1. 检查图片路径是否正确
2. 确认文件已提交到 Git
3. 检查 `next.config.js` images 配置
4. 清除 Vercel 缓存并重新部署

### 问题 2: 构建失败

**症状**: Vercel 显示 "Build Failed"

**解决**:

1. 查看 Vercel 构建日志
2. 在本地运行 `npm run build`
3. 检查 TypeScript 错误
4. 确认所有依赖已安装

### 问题 3: 环境变量不工作

**症状**: Shopify 数据加载失败

**解决**:

1. 检查 Vercel 环境变量是否正确
2. 确认变量名以 `NEXT_PUBLIC_` 开头
3. 重新部署以应用环境变量

### 问题 4: 域名无法访问

**症状**: DNS_PROBE_FINISHED_NXDOMAIN

**解决**:

1. 检查 DNS 配置是否正确
2. 等待 DNS 传播（最多 48 小时）
3. 使用 `dig` 或 `nslookup` 检查 DNS
4. 确认 Vercel 项目已连接域名

### 问题 5: 性能差

**症状**: 加载缓慢

**解决**:

1. 压缩所有图片
2. 启用 CDN（Vercel 自动启用）
3. 检查大型依赖包
4. 使用 `next/image` 组件

---

## 8. 持续部署

### 8.1 自动部署

每次推送到 `main` 分支都会自动部署:

```bash
# 本地修改
git add .
git commit -m "Update: feature description"
git push

# Vercel 自动触发构建和部署
```

### 8.2 预览部署

创建新分支测试功能:

```bash
# 创建新分支
git checkout -b feature/new-feature

# 修改代码
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature

# Vercel 会创建预览 URL
# 例如: https://snapboo-git-feature-new-feature-yourname.vercel.app
```

### 8.3 回滚

如果出现问题，在 Vercel 可以一键回滚:

1. 进入 Vercel 项目
2. 点击 "Deployments"
3. 找到上一个稳定版本
4. 点击 "..." → "Promote to Production"

---

## 9. 监控和维护

### 9.1 Vercel Analytics

免费获取访问数据:

1. 在 Vercel 项目中点击 "Analytics"
2. 查看页面浏览量、性能指标

### 9.2 Google Analytics (可选)

添加 GA4:

1. 创建 GA4 属性
2. 获取 Measurement ID
3. 添加到环境变量
4. 在 `app/layout.tsx` 添加 GA 脚本

### 9.3 错误监控

推荐使用 Sentry:

```bash
npm install @sentry/nextjs
```

---

## 🎊 恭喜！

你的 SnapBoo 网站现在已经上线了！

**下一步**:

- 📢 分享链接给朋友测试
- 📱 在社交媒体宣传
- 📊 监控访问数据
- 🛍️ 准备接受订单！

**需要帮助？**

- Vercel 文档: https://vercel.com/docs
- Next.js 文档: https://nextjs.org/docs
- Vercel Discord: https://vercel.com/discord

---

**祝你发布顺利！** 🚀✨
