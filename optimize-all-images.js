#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// 获取所有图片文件
function getAllImages() {
  const output = execSync(
    'find public/images -type f \\( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \\) -exec ls -l {} \\;',
    { encoding: "utf-8" }
  );

  const files = output
    .trim()
    .split("\n")
    .map((line) => {
      const parts = line.split(/\s+/);
      const size = parseInt(parts[4]);
      const filepath = parts.slice(8).join(" ");
      return { filepath, size };
    })
    .filter((f) => f.size > 100 * 1024) // 只处理 > 100KB 的文件
    .sort((a, b) => b.size - a.size);

  return files;
}

async function optimizeImage(filepath, originalSize) {
  try {
    const fullPath = path.join(__dirname, filepath);
    const ext = path.extname(filepath).toLowerCase();

    // 检查文件是否存在
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const originalSizeMB = (originalSize / 1024 / 1024).toFixed(2);
    console.log(
      `\n🔧 处理: ${filepath.replace("public/", "")} (${originalSizeMB}MB)`
    );

    let optimized = false;
    let finalSize = originalSize;

    // 1. 压缩原始 PNG/JPG
    if (ext === ".png") {
      console.log("  → 压缩 PNG...");
      await sharp(fullPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(fullPath + ".optimized");

      const newSize = fs.statSync(fullPath + ".optimized").size;
      if (newSize < originalSize * 0.95) {
        // 如果能节省至少 5%，才替换
        fs.renameSync(fullPath + ".optimized", fullPath);
        finalSize = newSize;
        optimized = true;
        console.log(
          `  ✓ PNG 压缩: ${originalSizeMB}MB → ${(
            newSize /
            1024 /
            1024
          ).toFixed(2)}MB`
        );
      } else {
        fs.unlinkSync(fullPath + ".optimized");
        console.log(`  ⏭️  PNG 已是最优`);
      }
    } else if (ext === ".jpg" || ext === ".jpeg") {
      console.log("  → 压缩 JPG...");
      await sharp(fullPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(fullPath + ".optimized");

      const newSize = fs.statSync(fullPath + ".optimized").size;
      if (newSize < originalSize * 0.95) {
        fs.renameSync(fullPath + ".optimized", fullPath);
        finalSize = newSize;
        optimized = true;
        console.log(
          `  ✓ JPG 压缩: ${originalSizeMB}MB → ${(
            newSize /
            1024 /
            1024
          ).toFixed(2)}MB`
        );
      } else {
        fs.unlinkSync(fullPath + ".optimized");
        console.log(`  ⏭️  JPG 已是最优`);
      }
    }

    // 2. 生成 WebP（如果还没有）
    const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, ".webp");

    if (!fs.existsSync(webpPath)) {
      console.log("  → 生成 WebP...");

      // 根据图片大小选择质量
      const quality = finalSize > 1024 * 1024 ? 75 : 80; // > 1MB 用 75

      await sharp(fullPath).webp({ quality, effort: 6 }).toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      const webpSizeMB = (webpSize / 1024 / 1024).toFixed(2);
      const savings = ((1 - webpSize / finalSize) * 100).toFixed(1);

      console.log(`  ✓ WebP 生成: ${webpSizeMB}MB (节省 ${savings}%)`);
    } else {
      console.log(`  ⏭️  WebP 已存在`);
    }

    const finalSizeMB = (finalSize / 1024 / 1024).toFixed(2);
    const totalSavings = ((1 - finalSize / originalSize) * 100).toFixed(1);

    return {
      path: filepath.replace("public/", ""),
      originalSize: originalSizeMB,
      finalSize: finalSizeMB,
      savings: totalSavings,
      optimized,
    };
  } catch (error) {
    console.error(`  ❌ 错误:`, error.message);
    return null;
  }
}

async function main() {
  console.log("🖼️  扫描 public/images/ 目录...\n");

  const images = getAllImages();
  console.log(`📊 找到 ${images.length} 个图片文件 (> 100KB)\n`);
  console.log("═".repeat(70));

  const results = [];
  let totalOriginal = 0;
  let totalFinal = 0;

  for (const img of images) {
    const result = await optimizeImage(img.filepath, img.size);
    if (result) {
      results.push(result);
      totalOriginal += parseFloat(result.originalSize);
      totalFinal += parseFloat(result.finalSize);
    }
  }

  // 总结
  console.log("\n\n");
  console.log("═".repeat(70));
  console.log("📊 优化总结");
  console.log("═".repeat(70));

  const optimizedFiles = results.filter((r) => r.optimized);

  if (optimizedFiles.length > 0) {
    console.log(`\n✅ 优化的文件 (${optimizedFiles.length}):\n`);
    optimizedFiles.forEach((r) => {
      console.log(`  ${r.path}`);
      console.log(
        `    ${r.originalSize}MB → ${r.finalSize}MB (节省 ${r.savings}%)`
      );
    });
  }

  console.log(`\n📦 总计:`);
  console.log(`  原始大小: ${totalOriginal.toFixed(2)}MB`);
  console.log(`  优化后:   ${totalFinal.toFixed(2)}MB`);
  console.log(
    `  节省:     ${(totalOriginal - totalFinal).toFixed(2)}MB (${(
      (1 - totalFinal / totalOriginal) *
      100
    ).toFixed(1)}%)`
  );

  console.log("\n✨ 完成！所有图片已优化到理想大小。");
}

main();
