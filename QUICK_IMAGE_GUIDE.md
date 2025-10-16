# 🚀 快速图片添加指南

## 📍 一句话总结

把你的图片文件拖到 `/Users/nolanfeng/Project/labubu-shopify/public/images/` 对应文件夹，按下面的名字重命名即可。

---

## 📁 文件夹已准备好：

```
/Users/nolanfeng/Project/labubu-shopify/public/images/
├── hero/         ← Hero 区域图片放这里
├── product/      ← 产品图片放这里
├── technical/    ← 技术/3D渲染图放这里
├── lifestyle/    ← 生活场景图放这里
└── labubu/       ← Labubu 角色图放这里
```

---

## 🎯 必须添加的图片（按优先级）

### 🥇 最高优先级（首页必须）

#### 1. Hero 主图

```bash
位置：public/images/hero/
文件名：hero-labubu-cloud.png
说明：首页顶部大图（云变成产品）
```

#### 2. Labubu 角色（可拖拽）

```bash
位置：public/images/labubu/
文件名：labubu-01.png
说明：透明背景的 Labubu 图（用于互动和礼花）
要求：必须 PNG 透明背景
```

---

### 🥈 第二优先级（产品页必须）

#### 3-4. 产品主图

```bash
位置：public/images/product/
文件名：
  - labubu-front-white-bg.png  （产品正面白底图）
  - labubu-with-magsafe.png     （和 MagSafe 组合图）
```

---

### 🥉 第三优先级（生活场景图）

#### 5-7. Lifestyle 图片

```bash
位置：public/images/lifestyle/
文件名：
  - outdoor-nature.jpg          （户外场景）
  - beach-scene.jpg             （海滩场景）
  - hand-holding-demo.jpg       （手持展示）
```

---

### 📐 第四优先级（技术细节图）

#### 8-12. Technical 图片

```bash
位置：public/images/technical/
文件名：
  - 3d-parts-breakdown.png      （零件分解图）
  - 3d-render-side.png          （侧面渲染图）
  - 3d-render-gold-front.png    （金色正面图）
  - 3d-render-back-magnet.png   （背面磁铁图）
  - sketch-diagram-1.png        （草图/设计稿）
```

---

## 🎨 命名规则（重要！）

✅ **正确命名**：

- `hero-labubu-cloud.png` - 全小写，用横杠分隔
- `labubu-01.png` - 简单清晰
- `outdoor-nature.jpg` - 描述性命名

❌ **错误命名**：

- `Hero Labubu Cloud.PNG` - 有空格，大写扩展名
- `labubu_front.png` - 用了下划线
- `产品图.png` - 中文字符

---

## 💻 如何添加图片

### 方法 1：拖拽（最简单）

1. 打开 Finder
2. 前往文件夹：`/Users/nolanfeng/Project/labubu-shopify/public/images/`
3. 把图片拖到对应文件夹
4. 重命名成上面列出的文件名

### 方法 2：终端复制

```bash
# 示例：复制 Hero 图片
cd /Users/nolanfeng/Project/labubu-shopify
cp ~/Desktop/你的图片.png public/images/hero/hero-labubu-cloud.png
```

---

## ✅ 检查是否成功

1. 刷新浏览器（`Cmd + Shift + R`）
2. 看终端日志，404 错误应该消失
3. 图片应该正常显示

---

## 🆘 临时解决方案

### 如果你现在没有所有图片：

**选项 1：用一张图片代替所有**

```bash
cd /Users/nolanfeng/Project/labubu-shopify/public/images

# 假设你有一张 temp.png
cp temp.png hero/hero-labubu-cloud.png
cp temp.png product/labubu-front-white-bg.png
cp temp.png product/labubu-with-magsafe.png
# ... 等等
```

**选项 2：让我帮你注释掉缺失的图片**
告诉我你有哪些图片，我可以暂时隐藏其他图片显示。

---

## 📞 需要帮助？

告诉我：

1. "我有这些图片：[列出你有的]"
2. "帮我先隐藏缺失的图片"
3. "我需要临时占位图"

我会帮你搞定！ 🚀


