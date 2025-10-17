#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Hero 图片和大图片 - 使用更激进的压缩
const imagesToOptimize = [
  {
    input: "public/images/hero/hero-labubu-magsafe.png",
    quality: 75, // 更激进的压缩
  },
  {
    input: "public/images/hero/hero-labubu-cloud.png",
    quality: 75,
  },
  {
    input: "public/images/story2/hero-mother-son-labubu.png",
    quality: 75,
  },
  {
    input: "public/images/story2/chapter2-it-reminds-me-of-you.png",
    quality: 80,
  },
  {
    input: "public/images/story2/chapter4-she-loves-it.png",
    quality: 80,
  },
];

async function optimizeImage(config) {
  try {
    const fullPath = path.join(__dirname, config.input);

    if (!fs.existsSync(fullPath)) {
      console.log(`⏭️  跳过: ${config.input} (文件不存在)`);
      return null;
    }

    const webpPath = fullPath.replace(/\.png$/i, ".webp");

    // 获取当前 WebP 文件大小（如果存在）
    let oldWebpSize = 0;
    if (fs.existsSync(webpPath)) {
      oldWebpSize = fs.statSync(webpPath).size;
    }

    const oldWebpSizeMB = (oldWebpSize / 1024 / 1024).toFixed(2);

    console.log(`\n优化: ${config.input}`);
    console.log(
      `  当前 WebP: ${oldWebpSizeMB}MB → 目标 quality: ${config.quality}`
    );

    // 重新生成 WebP（更激进的压缩）
    await sharp(fullPath)
      .webp({ quality: config.quality, effort: 6 })
      .toFile(webpPath + ".new");

    // 获取新 WebP 文件大小
    const newWebpSize = fs.statSync(webpPath + ".new").size;
    const newWebpSizeMB = (newWebpSize / 1024 / 1024).toFixed(2);

    // 计算节省
    const savings =
      oldWebpSize > 0
        ? ((1 - newWebpSize / oldWebpSize) * 100).toFixed(1)
        : "N/A";

    // 替换文件
    fs.renameSync(webpPath + ".new", webpPath);

    console.log(
      `✅ 新 WebP: ${newWebpSizeMB}MB${
        savings !== "N/A" ? ` (再节省 ${savings}%)` : ""
      }`
    );

    return {
      path: config.input,
      oldSize: oldWebpSizeMB,
      newSize: newWebpSizeMB,
      savings: savings,
    };
  } catch (error) {
    console.error(`❌ 错误 ${config.input}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("🎯 深度优化 Hero 和大图片...\n");
  console.log("💡 使用更激进的 WebP 压缩以提升 LCP\n");

  const results = [];

  for (const config of imagesToOptimize) {
    const result = await optimizeImage(config);
    if (result && result.savings !== "N/A") {
      results.push(result);
    }
  }

  // 显示总结
  if (results.length > 0) {
    console.log("\n\n📊 优化总结：");
    console.log("═".repeat(70));

    let totalOld = 0;
    let totalNew = 0;

    results.forEach((r) => {
      totalOld += parseFloat(r.oldSize);
      totalNew += parseFloat(r.newSize);
      console.log(`${r.path.replace("public/", "")}`);
      console.log(`  ${r.oldSize}MB → ${r.newSize}MB (节省 ${r.savings}%)`);
    });

    const totalSavings = ((1 - totalNew / totalOld) * 100).toFixed(1);

    console.log("═".repeat(70));
    console.log(`总计: ${totalOld.toFixed(2)}MB → ${totalNew.toFixed(2)}MB`);
    console.log(
      `再节省: ${(totalOld - totalNew).toFixed(2)}MB (${totalSavings}%)`
    );
  }

  console.log("\n✨ 优化完成！");
  console.log("🚀 预计 LCP 提升: 0.5-1 秒");
  console.log("📊 预计 Lighthouse Performance: +4-6 分");
}

main();
