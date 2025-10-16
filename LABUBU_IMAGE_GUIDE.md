# 🎨 Labubu 图片替换指南

## ✅ 已完成的配置

1. ✅ 创建文件夹：`public/images/labubu/`
2. ✅ 配置文件：`lib/labubu-config.ts`
3. ✅ 图片礼花效果：`lib/image-confetti.ts`
4. ✅ 动画样式：`app/globals.css`
5. ✅ 可拖拽角色：`components/ui/InteractiveLabubu.tsx`
6. ✅ 产品页礼花：`components/product/ProductInfo.tsx`

---

## 📸 现在：上传您的第一张 Labubu 图片

### 步骤 1：准备图片

**要求**：
- 格式：PNG（建议透明背景）
- 尺寸：200x200 到 512x512 像素
- 文件大小：< 200KB
- 命名：`labubu-01.png`

### 步骤 2：放置图片

将图片复制到这个文件夹：
```
/Users/nolanfeng/Project/labubu-shopify/public/images/labubu/labubu-01.png
```

**Mac 用户快速操作**：
1. 打开 Finder
2. 按 `Cmd + Shift + G`
3. 输入：`/Users/nolanfeng/Project/labubu-shopify/public/images/labubu`
4. 粘贴您的图片，重命名为 `labubu-01.png`

### 步骤 3：测试

```bash
# 刷新浏览器
# 访问：http://localhost:3000
# 滚动到 Story Section
# 看到您的 Labubu 图片可以拖动和点击！
```

---

## 🎉 图片的使用位置

您的 `labubu-01.png` 现在会出现在：

### 1. 可拖拽的角色（Story Section）
- 位置：首页滚动到 Story 区域
- 功能：可以拖动、点击
- 大小：128x128 像素（自动缩放）

### 2. 礼花效果（Pre-Order 按钮）
- 位置：产品页，点击 "Pre-Order Now"
- 效果：30 个 Labubu 从天而降！
- 动画：旋转、缩放、淡出

### 3. 心形雨效果
- 位置：同上
- 效果：20 个 Labubu 温柔飘落
- 特效：粉色发光滤镜

---

## 🚀 以后：添加更多 Labubu 图片

当您有更多 Labubu 角色时：

### 步骤 1：添加图片

放入新图片到同一文件夹：
```
/public/images/labubu/
  ├── labubu-01.png  (当前)
  ├── labubu-02.png  (新增)
  ├── labubu-03.png  (新增)
  └── labubu-04.png  (新增)
```

### 步骤 2：更新配置

编辑 `lib/labubu-config.ts`，添加新角色：

```typescript
export const labubuCharacters = [
  {
    id: "labubu-01",
    name: "Labubu Classic",
    path: "/images/labubu/labubu-01.png",
    emoji: "🎁",
  },
  // 👇 复制粘贴下面这段，修改序号和名字
  {
    id: "labubu-02",
    name: "Labubu Happy",  // 改个名字
    path: "/images/labubu/labubu-02.png",  // 改序号
    emoji: "💕",
  },
  {
    id: "labubu-03",
    name: "Labubu Cute",
    path: "/images/labubu/labubu-03.png",
    emoji: "✨",
  },
];
```

### 步骤 3：完成！

保存文件后，礼花效果会**自动随机使用所有角色**！
每次点击 Pre-Order，都会看到不同的 Labubu 洒下来！🎊

---

## 🎨 图片建议

### 推荐的 Labubu 姿势/表情：

1. **Classic** - 经典站姿
2. **Happy** - 开心笑脸
3. **Cute** - 可爱卖萌
4. **Cool** - 酷酷的
5. **Love** - 比心手势
6. **Star** - 闪亮登场

### 图片优化建议：

- 使用 **TinyPNG** 压缩图片
- 保持透明背景（PNG-24）
- 统一尺寸（比如都是 300x300）
- 确保主体居中

---

## 🧪 测试清单

### 测试 1：可拖拽角色
- [ ] 访问首页
- [ ] 滚动到 "Play with Labubu!" 区域
- [ ] 看到您的 Labubu 图片
- [ ] 可以拖动
- [ ] 点击有计数器
- [ ] 3 次点击触发礼花

### 测试 2：礼花效果
- [ ] 访问产品页 `/product/labubu-grip`
- [ ] 点击 "Pre-Order Now" 按钮
- [ ] 看到 Labubu 图片从天而降
- [ ] 图片会旋转、缩放
- [ ] 礼花结束后自动消失

### 测试 3：多图片随机
- [ ] 添加 2+ 张图片
- [ ] 更新配置文件
- [ ] 多次点击 Pre-Order
- [ ] 每次都看到不同的 Labubu

---

## ⚙️ 高级配置

### 调整礼花数量

编辑 `lib/image-confetti.ts`：

```typescript
// 第 22 行：礼花爆炸的数量
for (let i = 0; i < 30; i++) {  // 改这个数字

// 第 57 行：心形雨的数量
for (let i = 0; i < 20; i++) {  // 改这个数字
```

### 调整下落速度

编辑 `lib/image-confetti.ts`：

```typescript
// 第 32 行：下落时间
const duration = 2 + Math.random() * 2; // 2-4秒，改这个范围
```

### 调整图片大小

编辑 `lib/image-confetti.ts`：

```typescript
// 第 31 行：礼花图片大小
const size = 40 + Math.random() * 40; // 40-80px，改这个范围
```

---

## 🔧 故障排查

### 问题：图片不显示

**解决方案**：
1. 检查文件名是否正确：`labubu-01.png`
2. 检查路径：`/Users/nolanfeng/Project/labubu-shopify/public/images/labubu/`
3. 刷新浏览器（Cmd + Shift + R）

### 问题：礼花没有效果

**解决方案**：
1. 打开浏览器控制台（F12）
2. 查看是否有错误提示
3. 确认图片已上传
4. 清除缓存重试

### 问题：图片太大或太小

**解决方案**：
- 可拖拽角色：编辑 `InteractiveLabubu.tsx` 第 78 行，修改 `w-32 h-32`
- 礼花图片：编辑 `image-confetti.ts` 第 31 行，修改 size 范围

---

## 📞 需要帮助？

如果遇到任何问题，检查：
1. 图片文件是否存在
2. 文件名是否正确
3. 配置文件是否保存
4. 服务器是否重启

---

**准备好了吗？现在就上传您的第一张 Labubu 图片吧！** 🎨✨
