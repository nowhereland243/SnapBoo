#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 需要压缩的图片列表（前 10 个最大的）
const imagesToCompress = [
  'public/images/hero/hero-labubu-cloud.png',
  'public/images/hero/hero-labubu-magsafe.png',
  'public/images/story2/chapter2-it-reminds-me-of-you.png',
  'public/images/story2/chapter4-she-loves-it.png',
  'public/images/story2/chapter2-it-reminds-me-of-you2.png',
  'public/images/lifestyle/outdoor-nature.jpg',
  'public/images/lifestyle/labubu-face-down.png',
  'public/images/story2/hero-mother-son-labubu.png',
  'public/images/lifestyle/beach-scene.jpg',
  'public/images/story2/always-with-you.png',
];

async function compressImage(imagePath) {
  try {
    const fullPath = path.join(__dirname, imagePath);
    const ext = path.extname(imagePath).toLowerCase();
    
    // 获取原始文件大小
    const originalSize = fs.statSync(fullPath).size;
    const originalSizeMB = (originalSize / 1024 / 1024).toFixed(2);
    
    console.log(`\n压缩: ${imagePath} (${originalSizeMB}MB)`);
    
    // 根据文件类型选择压缩方式
    if (ext === '.png') {
      await sharp(fullPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(fullPath + '.compressed');
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(fullPath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(fullPath + '.compressed');
    }
    
    // 获取压缩后文件大小
    const compressedSize = fs.statSync(fullPath + '.compressed').size;
    const compressedSizeMB = (compressedSize / 1024 / 1024).toFixed(2);
    const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);
    
    // 替换原文件
    fs.renameSync(fullPath + '.compressed', fullPath);
    
    console.log(`✅ 完成: ${compressedSizeMB}MB (节省 ${savings}%)`);
    
    return {
      path: imagePath,
      originalSize: originalSizeMB,
      compressedSize: compressedSizeMB,
      savings: savings
    };
  } catch (error) {
    console.error(`❌ 错误 ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  开始批量压缩图片...\n');
  
  const results = [];
  
  for (const imagePath of imagesToCompress) {
    const result = await compressImage(imagePath);
    if (result) {
      results.push(result);
    }
  }
  
  // 显示总结
  console.log('\n\n📊 压缩总结：');
  console.log('═'.repeat(60));
  
  let totalOriginal = 0;
  let totalCompressed = 0;
  
  results.forEach(r => {
    totalOriginal += parseFloat(r.originalSize);
    totalCompressed += parseFloat(r.compressedSize);
    console.log(`${r.path}`);
    console.log(`  ${r.originalSize}MB → ${r.compressedSize}MB (节省 ${r.savings}%)`);
  });
  
  const totalSavings = ((1 - totalCompressed / totalOriginal) * 100).toFixed(1);
  
  console.log('═'.repeat(60));
  console.log(`总计: ${totalOriginal.toFixed(2)}MB → ${totalCompressed.toFixed(2)}MB`);
  console.log(`节省: ${(totalOriginal - totalCompressed).toFixed(2)}MB (${totalSavings}%)`);
  console.log('\n✨ 完成！所有图片已压缩。');
}

main();

