#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// 需要 blur placeholder 的图片
const imagesToProcess = [
  "public/images/hero/hero-labubu-magsafe.png",
  "public/images/lifestyle/beach-scene.jpg",
  "public/images/lifestyle/outdoor-nature.jpg",
];

async function generateBlurDataURL(imagePath) {
  try {
    const fullPath = path.join(__dirname, imagePath);

    if (!fs.existsSync(fullPath)) {
      console.log(`⏭️  跳过: ${imagePath} (文件不存在)`);
      return null;
    }

    console.log(`\n生成 blur placeholder: ${imagePath}`);

    // 生成 10x10 的模糊图片并转为 base64
    const buffer = await sharp(fullPath)
      .resize(10, 10, { fit: "inside" })
      .blur()
      .toBuffer();

    const base64 = `data:image/png;base64,${buffer.toString("base64")}`;

    console.log(`✅ 生成成功 (${(base64.length / 1024).toFixed(1)}KB)`);

    return {
      path: imagePath,
      blurDataURL: base64,
    };
  } catch (error) {
    console.error(`❌ 错误 ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("🎨 生成 Blur Placeholders...\n");

  const results = [];

  for (const imagePath of imagesToProcess) {
    const result = await generateBlurDataURL(imagePath);
    if (result) {
      results.push(result);
    }
  }

  // 生成配置文件
  const config = {};
  results.forEach((r) => {
    const key = r.path.replace("public", "");
    config[key] = r.blurDataURL;
  });

  const configPath = path.join(__dirname, "lib", "blur-placeholders.ts");
  const content = `// Auto-generated blur placeholders for performance optimization
// Generated on: ${new Date().toISOString()}

export const blurDataURLs: Record<string, string> = ${JSON.stringify(
    config,
    null,
    2
  )};
`;

  fs.writeFileSync(configPath, content);

  console.log("\n✨ 完成！");
  console.log(`📄 配置文件: lib/blur-placeholders.ts`);
  console.log(`🎯 生成了 ${results.length} 个 blur placeholders`);
  console.log("\n📝 下一步: 在组件中使用这些 placeholders");
}

main();
