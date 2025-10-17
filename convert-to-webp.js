#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// 所有 PNG 图片（WebP 压缩效果最好）
const imagesToConvert = [
  "public/images/hero/hero-labubu-cloud.png",
  "public/images/hero/hero-labubu-magsafe.png",
  "public/images/story2/chapter2-it-reminds-me-of-you.png",
  "public/images/story2/chapter4-she-loves-it.png",
  "public/images/story2/chapter2-it-reminds-me-of-you2.png",
  "public/images/lifestyle/labubu-face-down.png",
  "public/images/story2/hero-mother-son-labubu.png",
  "public/images/story2/always-with-you.png",
  "public/images/story2/chapter1-10years-apart.png",
  "public/images/story2/chapter3-so-i-made-this.png",
  "public/images/story2/chapter5-your-turn.png",
  "public/images/technical/sketch-diagram-1.png",
  "public/images/technical/3d-parts-breakdown.png",
  "public/images/product/labubu-front-white-bg.png",
  "public/images/lifestyle/sweater-holding.png",
];

async function convertToWebP(imagePath) {
  try {
    const fullPath = path.join(__dirname, imagePath);

    // 检查文件是否存在
    if (!fs.existsSync(fullPath)) {
      console.log(`⏭️  跳过: ${imagePath} (文件不存在)`);
      return null;
    }

    const webpPath = fullPath.replace(/\.png$/i, ".webp");

    // 获取原始文件大小
    const originalSize = fs.statSync(fullPath).size;
    const originalSizeMB = (originalSize / 1024 / 1024).toFixed(2);

    console.log(`\n转换: ${imagePath} (${originalSizeMB}MB)`);

    // 转换为 WebP
    await sharp(fullPath).webp({ quality: 85, effort: 6 }).toFile(webpPath);

    // 获取 WebP 文件大小
    const webpSize = fs.statSync(webpPath).size;
    const webpSizeMB = (webpSize / 1024 / 1024).toFixed(2);
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`✅ 完成: ${webpSizeMB}MB (比 PNG 小 ${savings}%)`);

    return {
      path: imagePath,
      originalSize: originalSizeMB,
      webpSize: webpSizeMB,
      savings: savings,
    };
  } catch (error) {
    console.error(`❌ 错误 ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("🖼️  开始批量转换 PNG → WebP...\n");
  console.log("💡 提示: 原始 PNG 文件会保留作为备份\n");

  const results = [];

  for (const imagePath of imagesToConvert) {
    const result = await convertToWebP(imagePath);
    if (result) {
      results.push(result);
    }
  }

  // 显示总结
  console.log("\n\n📊 转换总结：");
  console.log("═".repeat(70));

  let totalOriginal = 0;
  let totalWebP = 0;

  results.forEach((r) => {
    totalOriginal += parseFloat(r.originalSize);
    totalWebP += parseFloat(r.webpSize);
    console.log(`${r.path.replace("public/", "")}`);
    console.log(
      `  PNG: ${r.originalSize}MB → WebP: ${r.webpSize}MB (小 ${r.savings}%)`
    );
  });

  const totalSavings = ((1 - totalWebP / totalOriginal) * 100).toFixed(1);

  console.log("═".repeat(70));
  console.log(
    `总计 PNG: ${totalOriginal.toFixed(2)}MB → WebP: ${totalWebP.toFixed(2)}MB`
  );
  console.log(
    `额外节省: ${(totalOriginal - totalWebP).toFixed(2)}MB (${totalSavings}%)`
  );
  console.log("\n✨ 完成！所有图片已转换为 WebP 格式。");
  console.log(
    "\n📝 下一步: 更新代码使用 .webp 文件（Next.js Image 会自动处理）"
  );
}

main();
