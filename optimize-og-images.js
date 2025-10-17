#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// 源目录
const sourceDir =
  "/Users/nolanfeng/Library/Mobile Documents/com~apple~CloudDocs/Phone <-> Mac/Labubu Grip/untitled folder/untitled folder";

// 输出目录
const outputDir = path.join(__dirname, "public/images/og");

// 创建输出目录
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 获取所有图片文件
const files = fs
  .readdirSync(sourceDir)
  .filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

console.log(`🖼️  找到 ${files.length} 个图片文件\n`);
console.log("📋 优化规格:");
console.log("  - 尺寸: 1200 × 630 px");
console.log("  - 格式: JPEG");
console.log("  - 质量: 75-80%");
console.log("  - sRGB 色彩空间");
console.log("  - Progressive 压缩");
console.log("  - 目标大小: < 150 KB\n");
console.log("═".repeat(70));

async function optimizeImage(filename) {
  const inputPath = path.join(sourceDir, filename);

  // 生成友好的文件名
  let outputName = filename
    .toLowerCase()
    .replace(/\.png$/i, ".jpg")
    .replace(/\.jpeg$/i, ".jpg")
    .replace(/generated image september \d+, \d+ - /gi, "og-")
    .replace(/[_\s]+/g, "-")
    .replace(/修正拉布布和手指最终版/g, "og-labubu-final")
    .replace(/--+/g, "-");

  const outputPath = path.join(outputDir, outputName);

  console.log(`\n🔧 处理: ${filename}`);
  console.log(`  → 输出: ${outputName}`);

  // 先尝试质量 80
  let quality = 80;
  let attempt = 1;
  let success = false;

  while (quality >= 70 && !success) {
    console.log(`  → 尝试 quality ${quality}%...`);

    await sharp(inputPath)
      .resize(1200, 630, {
        fit: "cover",
        position: "center",
      })
      .toColorspace("srgb")
      .jpeg({
        quality: quality,
        progressive: true,
        mozjpeg: true, // 使用 mozjpeg 引擎获得更好的压缩
      })
      .toFile(outputPath + `.q${quality}`);

    const fileSize = fs.statSync(outputPath + `.q${quality}`).size;
    const fileSizeKB = (fileSize / 1024).toFixed(1);

    console.log(`    文件大小: ${fileSizeKB} KB`);

    if (fileSize <= 150 * 1024) {
      // 小于 150KB，成功！
      fs.renameSync(outputPath + `.q${quality}`, outputPath);
      console.log(`  ✅ 成功! (${fileSizeKB} KB, quality ${quality}%)`);
      success = true;

      return {
        original: filename,
        output: outputName,
        size: fileSizeKB,
        quality: quality,
      };
    } else {
      // 太大，删除并降低质量重试
      fs.unlinkSync(outputPath + `.q${quality}`);
      quality -= 5;
      attempt++;
    }
  }

  if (!success) {
    console.log(`  ⚠️  无法达到 150KB 目标，使用 quality 70%`);
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: "cover",
        position: "center",
      })
      .toColorspace("srgb")
      .jpeg({
        quality: 70,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(outputPath);

    const fileSize = fs.statSync(outputPath).size;
    const fileSizeKB = (fileSize / 1024).toFixed(1);

    console.log(`  ✅ 完成 (${fileSizeKB} KB, quality 70%)`);

    return {
      original: filename,
      output: outputName,
      size: fileSizeKB,
      quality: 70,
    };
  }
}

async function main() {
  const results = [];

  for (const file of files) {
    const result = await optimizeImage(file);
    if (result) {
      results.push(result);
    }
  }

  // 总结
  console.log("\n\n═".repeat(70));
  console.log("📊 优化总结");
  console.log("═".repeat(70));

  results.forEach((r, i) => {
    console.log(`\n${i + 1}. ${r.output}`);
    console.log(`   原文件: ${r.original}`);
    console.log(`   大小: ${r.size} KB`);
    console.log(`   质量: ${r.quality}%`);
    console.log(
      `   状态: ${parseFloat(r.size) <= 150 ? "✅ 达标" : "⚠️  超标"}`
    );
  });

  console.log("\n✨ 完成！所有图片已优化。");
  console.log(`📁 输出目录: ${outputDir}`);
}

main();
