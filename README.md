# SnapBoo - Labubu MagSafe Grip 🛍️

一个现代、美观的 Shopify 电商网站，专为 Labubu 爱好者打造的 MagSafe 磁吸手机配件。使用 Next.js + Shopify Storefront API 构建。

**品牌名称**: SnapBoo  
**产品**: Labubu MagSafe Grip  
**标语**: Snap Your Labubu, Share the Love

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 现代化样式
- **Shopify Storefront API** - 电商功能
- **Zustand** - 状态管理

## 开始使用

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

创建 `.env.local` 文件并添加您的 Shopify 凭证：

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-access-token
```

### 3. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 项目结构

```
labubu-shopify/
├── app/                  # Next.js App Router
│   ├── page.tsx         # 首页
│   ├── products/        # 产品页面
│   └── cart/            # 购物车页面
├── components/          # React 组件
│   ├── ui/             # UI 组件
│   └── layout/         # 布局组件
├── lib/                # 工具函数
│   ├── shopify.ts      # Shopify API
│   └── store.ts        # 状态管理
├── public/             # 静态资源
└── styles/             # 全局样式
```

## 功能特性

- ✅ 响应式设计
- ✅ 产品展示
- ✅ 购物车功能
- ✅ 产品搜索
- ✅ 产品筛选
- ✅ 结账流程
- ✅ 现代化 UI/UX

## 后续开发

等待具体需求确定后继续完善功能和样式。

---

## 📚 相关文档

- **[PAGE_STRUCTURE.md](./PAGE_STRUCTURE.md)** - 完整的页面结构图，方便调整 section 顺序
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - 快速上手指南
- **[TWO_VERSIONS_GUIDE.md](./TWO_VERSIONS_GUIDE.md)** - 两个着陆页版本说明
- **[IMAGE_PLACEMENT_GUIDE.md](./IMAGE_PLACEMENT_GUIDE.md)** - 图片放置指南

---

Created with ❤️ for Labubu fans by SnapBoo
