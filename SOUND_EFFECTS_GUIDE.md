# 🔊 音效功能使用指南

## ✅ 已完成的修改

所有音效功能已经成功添加到网站中！

---

## 📂 文件结构

```
/public/sounds/
  └── click.mp3  ← 你的音效文件

/lib/
  └── sounds.ts  ← 音效管理工具（已创建）

已修改的组件：
  ✅ components/product/ProductInfo.tsx
  ✅ components/ui/InteractiveLabubu.tsx
  ✅ components/home/Hero.tsx
  ✅ components/ui/AnimatedButton.tsx
```

---

## 🎵 当前音效触发点

### 1. **Pre-Order 按钮** (`ProductInfo.tsx`)

- **点击 "Pre-Order Now"**
  - 🔊 成功音效 (`success`) - 音量 60%
  - 🔊 魔法音效 (`magic`) - 音量 40%（延迟 200ms）
  - 同时触发礼花动画

### 2. **可拖拽 Labubu** (`InteractiveLabubu.tsx`)

- **每次点击**
  - 🔊 点击音效 (`click`) - 音量 50%
- **点击 3 次**
  - 🔊 魔法音效 (`magic`) - 音量 60%
  - 触发礼花效果
- **点击 5 次**
  - 🔊 魔法音效 (`magic`) - 音量 60%
  - 触发爱心雨
- **点击 7 次及以上**
  - 🔊 魔法音效 (`magic`) - 音量 70%（更响）
  - 触发礼花 + 爱心雨

### 3. **Hero 区域点击** (`Hero.tsx`)

- **手机端点击产品图片**
  - 🔊 弹出音效 (`pop`) - 音量 60%
  - 触发礼花效果

### 4. **所有按钮** (`AnimatedButton.tsx`)

- **任何按钮点击**
  - 🔊 轻柔的按钮音效 (`pop`) - 音量 30%
  - 包括所有导航、CTA 按钮

---

## 🧪 如何测试

1. **重新启动开发服务器**（如果需要）：

   ```bash
   cd /Users/nolanfeng/Project/labubu-shopify
   npm run dev
   ```

2. **打开浏览器**：http://localhost:3000

3. **测试音效**：

   - ✅ 点击任何按钮（应该听到轻柔的 "pop" 音效）
   - ✅ 在首页，找到可拖拽的 Labubu 角色，点击它多次
   - ✅ 手机端：点击 Hero 区域的产品图片
   - ✅ 进入产品页，点击 "Pre-Order Now"

4. **音效不工作？**
   - 检查浏览器音量是否开启
   - 打开浏览器控制台（F12），查看是否有错误
   - 确认 `/public/sounds/click.mp3` 文件存在

---

## 🎨 添加更多音效（可选）

如果你有不同的音效文件，可以这样添加：

### 1. 添加新的音频文件

```bash
/public/sounds/
  ├── click.mp3      ← 当前使用
  ├── success.mp3    ← 新增：成功音效
  ├── magic.mp3      ← 新增：魔法音效
  └── pop.mp3        ← 新增：弹出音效
```

### 2. 修改 `lib/sounds.ts`

找到这一段：

```typescript
constructor() {
  if (typeof window !== 'undefined') {
    // 预加载音效
    this.preload('click', '/sounds/click.mp3');
    this.preload('pop', '/sounds/click.mp3');     // ← 改成 '/sounds/pop.mp3'
    this.preload('success', '/sounds/click.mp3'); // ← 改成 '/sounds/success.mp3'
    this.preload('magic', '/sounds/click.mp3');   // ← 改成 '/sounds/magic.mp3'
  }
}
```

### 3. 调整音量

你可以在任何 `playSound()` 调用中调整音量（0.0 - 1.0）：

```typescript
playSound("click", 0.3); // 30% 音量
playSound("magic", 0.8); // 80% 音量
```

---

## 🔇 禁用音效（可选）

如果你想给用户一个开关来控制音效，可以添加：

```typescript
// 在任何组件中
import { soundManager } from "@/lib/sounds";

// 切换音效开关
const toggleSound = () => {
  const enabled = soundManager?.toggle();
  console.log(`Sound ${enabled ? "enabled" : "disabled"}`);
};
```

---

## 📝 技术细节

- **音效管理**：使用单例模式 (`SoundManager`)
- **预加载**：所有音效在页面加载时预加载，避免延迟
- **克隆播放**：使用 `cloneNode()` 支持快速连续播放
- **错误处理**：即使音效文件缺失，网站也不会崩溃
- **性能优化**：轻量级，不影响页面性能

---

## 🎉 完成！

现在你的网站已经有了完整的音效系统！每次互动都会给用户带来愉悦的听觉反馈。🔊✨

如有任何问题，随时告诉我！


