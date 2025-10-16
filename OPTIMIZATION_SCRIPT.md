# 📦 快速图片优化脚本

## 方法 1: 手动批量压缩（推荐）

### 使用 TinyPNG

1. 打开 https://tinypng.com/
2. 将以下文件夹拖拽上传：
   ```
   public/images/story2/
   public/images/lifestyle/
   ```
3. 等待压缩完成
4. 点击"Download All"下载 zip
5. 解压并替换原文件

**预期效果**: 30MB → 5-8MB

---

## 方法 2: 使用 ImageOptim (Mac Only)

```bash
# 安装
brew install --cask imageoptim

# 打开应用
open -a ImageOptim

# 拖拽整个 public/images 文件夹到 ImageOptim
# 等待自动压缩完成
```

---

## 方法 3: 命令行（高级）

### 安装工具

```bash
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant imagemin-webp
```

### 压缩 PNG

```bash
cd /Users/nolanfeng/Project/labubu-shopify

# 备份原文件
cp -r public/images public/images_backup

# 压缩 story2 文件夹
imagemin public/images/story2/*.png \
  --out-dir=public/images/story2 \
  --plugin=pngquant --plugin.pngquant.quality={0.6,0.8}

# 压缩 lifestyle 文件夹
imagemin public/images/lifestyle/*.png \
  --out-dir=public/images/lifestyle \
  --plugin=pngquant --plugin.pngquant.quality={0.6,0.8}
```

### 压缩 JPG

```bash
imagemin public/images/**/*.jpg \
  --out-dir=public/images \
  --plugin=mozjpeg --plugin.mozjpeg.quality=80
```

### 生成 WebP 格式（可选）

```bash
# 为所有 PNG 生成 WebP
imagemin public/images/**/*.png \
  --out-dir=public/images \
  --plugin=webp --plugin.webp.quality=80

# 为所有 JPG 生成 WebP
imagemin public/images/**/*.jpg \
  --out-dir=public/images \
  --plugin=webp --plugin.webp.quality=80
```

---

## 验证压缩效果

```bash
# 检查所有大文件 (>500KB)
find public/images -type f \( -name "*.png" -o -name "*.jpg" \) -size +500k -exec ls -lh {} \;

# 计算总大小
du -sh public/images

# 详细列表
find public/images -type f \( -name "*.png" -o -name "*.jpg" \) -exec ls -lh {} \; | awk '{print $5, $9}' | sort -hr
```

---

## 需要特别压缩的文件

### 高优先级（必须处理）:

1. `story2/chapter2-it-reminds-me-of-you.png` - 4.9M → <400KB
2. `story2/chapter4-she-loves-it.png` - 4.0M → <400KB
3. `lifestyle/outdoor-nature.jpg` - 2.5M → <400KB
4. `lifestyle/labubu-face-down.png` - 2.0M → <400KB
5. `lifestyle/beach-scene.jpg` - 1.9M → <400KB
6. `story2/hero-mother-son-labubu.png` - 1.8M → <400KB

### 中优先级:

7. `story2/always-with-you.png` - 1.7M → <400KB
8. `story2/chapter5-your-turn.png` - 1.5M → <400KB
9. `technical/sketch-diagram-1.png` - 1.4M → <300KB
10. `story2/chapter1-10years-apart.png` - 1.2M → <400KB

---

## 压缩后提交

```bash
# 确认文件已压缩
du -sh public/images

# 提交更改
git add public/images
git commit -m "Optimize images for production deployment"
git push
```

---

## 常见问题

### Q: 压缩会影响质量吗？

A: TinyPNG 使用智能压缩，视觉上几乎无差异，文件大小减少 50-80%

### Q: 需要压缩所有图片吗？

A: 重点压缩 >1MB 的文件，小于 500KB 的可以保持原样

### Q: WebP 格式是什么？

A: 现代图片格式，比 PNG/JPG 小 25-35%，Next.js Image 自动支持

### Q: 如何恢复原图？

A: 如果你创建了备份 `public/images_backup`，直接复制回来

---

## 推荐设置

- **PNG 压缩质量**: 60-80%
- **JPG 压缩质量**: 75-85%
- **WebP 压缩质量**: 80%
- **目标文件大小**: < 400KB

---

完成后运行构建测试：

```bash
npm run build
```

确认所有图片正常加载！
