const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/asus/.gemini/antigravity/brain/4330981e-0162-41c9-bdce-076163a08bce/.user_uploaded/media_1794557644764_472a9b0a.jpg';
const outDir = 'c:/isfest2027/public/assets/cowboy';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(async ({ data, info }) => {
  const w = info.width, h = info.height;

  // Exact crop for cowboy-lasso:
  // Starts at y=293 (below the horse hooves!)
  // Ends at y=555 (shoes)
  // Starts at x=216 (left edge of lasso)
  // Ends at x=420 (right edge of lasso)
  const cropX = 216;
  const cropY = 293;
  const cropW = 420 - 216; // 204
  const cropH = 555 - 293; // 262

  const rgba = Buffer.alloc(cropW * cropH * 4);

  // Eye bounding box in original image coordinates:
  // x: 280 to 335, y: 400 to 435
  const isEye = (ox, oy) => (ox >= 282 && ox <= 330 && oy >= 402 && oy <= 432);

  // Teeth bounding box in original coordinates (smile):
  const isMouth = (ox, oy) => (ox >= 295 && ox <= 315 && oy >= 435 && oy <= 445);

  let transparentCount = 0;
  let opaqueCount = 0;

  for (let cy = 0; cy < cropH; cy++) {
    for (let cx = 0; cx < cropW; cx++) {
      const ox = cropX + cx;
      const oy = cropY + cy;

      const srcIdx = (oy * w + ox) * 3;
      const dstIdx = (cy * cropW + cx) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      rgba[dstIdx] = r;
      rgba[dstIdx + 1] = g;
      rgba[dstIdx + 2] = b;

      // Check if this pixel is checkerboard
      const isGray = Math.abs(r - g) <= 20 && Math.abs(g - b) <= 20 && Math.abs(r - b) <= 20;
      const isBright = r >= 190 && g >= 190 && b >= 190;

      if ((isGray && isBright) && !isEye(ox, oy) && !isMouth(ox, oy)) {
        rgba[dstIdx + 3] = 0; // 100% transparent
        transparentCount++;
      } else {
        rgba[dstIdx + 3] = 255;
        opaqueCount++;
      }
    }
  }

  console.log('Transparent pixels:', transparentCount, 'Opaque pixels:', opaqueCount);

  // Trim outer empty pixels and save
  const cleaned = await sharp(rgba, { raw: { width: cropW, height: cropH, channels: 4 } })
    .trim()
    .png()
    .toBuffer();

  const finalMeta = await sharp(cleaned).metadata();
  console.log('Trimmed metadata:', finalMeta.width, 'x', finalMeta.height);

  // Save as both cowboy-lasso.png and cowboy-lasso-clean.png to bust all caches!
  await sharp(cleaned).toFile(path.join(outDir, 'cowboy-lasso-clean.png'));
  await sharp(cleaned).toFile(path.join(outDir, 'cowboy-lasso.png'));
  console.log('Successfully saved cowboy-lasso-clean.png and cowboy-lasso.png!');
});
