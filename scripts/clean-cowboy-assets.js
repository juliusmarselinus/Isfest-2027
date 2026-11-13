const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/asus/.gemini/antigravity/brain/4330981e-0162-41c9-bdce-076163a08bce/.user_uploaded/media_1794557644764_472a9b0a.jpg';
const outDir = 'c:/isfest2027/public/assets/cowboy';

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(async ({ data, info }) => {
  const w = info.width, h = info.height;
  const rgba = Buffer.alloc(w * h * 4);

  // Checkerboard pixel condition
  // In JPEG compression near edges of lines, values can vary slightly
  const isBgCandidate = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return false;
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    const isGray = Math.abs(r - g) <= 18 && Math.abs(g - b) <= 18 && Math.abs(r - b) <= 18;
    const isBright = r >= 195 && g >= 195 && b >= 195;
    return isGray && isBright;
  };

  const isDarkOutline = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return true;
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    // Strong outline / color check
    return (r < 75 && g < 75 && b < 75) || (r > 150 && Math.abs(r - b) > 30);
  };

  const isBackground = new Uint8Array(w * h);
  const queue = [];

  // Seed borders
  for (let x = 0; x < w; x++) {
    if (isBgCandidate(x, 0)) { isBackground[0 * w + x] = 1; queue.push(x, 0); }
    if (isBgCandidate(x, h - 1)) { isBackground[(h - 1) * w + x] = 1; queue.push(x, h - 1); }
  }
  for (let y = 0; y < h; y++) {
    if (isBgCandidate(0, y)) { isBackground[y * w + 0] = 1; queue.push(0, y); }
    if (isBgCandidate(w - 1, y)) { isBackground[y * w + (w - 1)] = 1; queue.push(w - 1, y); }
  }

  // Inside lasso loop seed:
  if (isBgCandidate(310, 312)) {
    isBackground[312 * w + 310] = 1;
    queue.push(310, 312);
  }

  // BFS
  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!isBackground[nidx] && isBgCandidate(nx, ny) && !isDarkOutline(nx, ny)) {
          isBackground[nidx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Build RGBA buffer
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * 3;
      const dstIdx = (y * w + x) * 4;
      const r = data[srcIdx], g = data[srcIdx + 1], b = data[srcIdx + 2];

      rgba[dstIdx] = r;
      rgba[dstIdx + 1] = g;
      rgba[dstIdx + 2] = b;

      if (isBackground[y * w + x]) {
        rgba[dstIdx + 3] = 0;
      } else {
        rgba[dstIdx + 3] = 255;
      }
    }
  }

  // Now, for cowboy-lasso:
  // We MUST crop starting at y=292 to y=555 so NO horse hooves from above are included!
  // And width: x=216 to 420
  const crops = [
    { name: 'cowboy-lasso', left: 216, top: 292, width: 204, height: 262 },
    { name: 'cowboy-standing', left: 26, top: 336, width: 148, height: 220 },
    { name: 'cowboy-sitting', left: 430, top: 316, width: 168, height: 222 },
    { name: 'cowboy-riding-horse', left: 685, top: 64, width: 310, height: 492 },
    { name: 'horse-standing', left: 16, top: 42, width: 206, height: 236 },
    { name: 'horse-running', left: 204, top: 43, width: 238, height: 235 },
    { name: 'horse-rearing', left: 442, top: 12, width: 220, height: 268 }
  ];

  for (const item of crops) {
    const croppedBuffer = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .extract({ left: item.left, top: item.top, width: item.width, height: item.height })
      .png()
      .toBuffer();

    await sharp(croppedBuffer)
      .trim()
      .png()
      .toFile(path.join(outDir, `${item.name}.png`));
    console.log(`Re-extracted and trimmed ${item.name}.png cleanly!`);
  }
});
