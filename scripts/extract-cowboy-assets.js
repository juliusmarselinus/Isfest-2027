const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/asus/.gemini/antigravity/brain/4330981e-0162-41c9-bdce-076163a08bce/.user_uploaded/media_1794557644764_472a9b0a.jpg';
const outDir = 'c:/isfest2027/public/assets/cowboy';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

sharp(inputPath).raw().toBuffer({ resolveWithObject: true }).then(async ({ data, info }) => {
  const w = info.width, h = info.height;
  const rgba = Buffer.alloc(w * h * 4);

  // Checkerboard detection
  // The checkerboard has squares of white (255,255,255) and light-gray (239,239,239)
  // Inside the characters:
  // - Eye sclera / teeth might be pure white! We should NOT make eye sclera transparent!
  // To avoid making eyes transparent, let's use a flood-fill from outside boundaries!
  // Or: characters have solid black outlines (RGB < 60).
  // Any checkerboard pixel connected to the outside (or inside open loops like lasso) is background.

  // Let's implement BFS flood fill from all 4 borders to mark background!
  const isBgCandidate = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return false;
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    const isGray = Math.abs(r - g) <= 15 && Math.abs(g - b) <= 15 && Math.abs(r - b) <= 15;
    const isBright = r >= 200 && g >= 200 && b >= 200;
    return isGray && isBright;
  };

  const isDarkOutline = (x, y) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return true;
    const idx = (y * w + x) * 3;
    const r = data[idx], g = data[idx + 1], b = data[idx + 2];
    return (r < 70 && g < 70 && b < 70);
  };

  const isBackground = new Uint8Array(w * h); // 1 = background, 0 = character
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

  // Also seed inside the lasso loop (around x=300, y=280):
  if (isBgCandidate(300, 280)) {
    isBackground[280 * w + 300] = 1;
    queue.push(300, 280);
  }

  // Also seed between horse legs / cowboy arms if enclosed:
  // e.g. between cowboy-standing legs (x=95, y=480), between horse legs:
  const extraSeeds = [
    [100, 240], [300, 240], [520, 240], [780, 520], [870, 500], [920, 500],
    [95, 480], [285, 480], [505, 480]
  ];
  for (const [sx, sy] of extraSeeds) {
    if (isBgCandidate(sx, sy) && !isBackground[sy * w + sx]) {
      isBackground[sy * w + sx] = 1;
      queue.push(sx, sy);
    }
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
        rgba[dstIdx + 3] = 0; // Transparent
      } else {
        // Slight antialiasing on edges
        rgba[dstIdx + 3] = 255;
      }
    }
  }

  // Save the full transparent sheet
  const fullImage = sharp(rgba, { raw: { width: w, height: h, channels: 4 } });
  await fullImage.png().toFile(path.join(outDir, 'cowboy-sheet.png'));
  console.log('Saved cowboy-sheet.png');

  // Crops list with a 4px safety padding
  const items = [
    { name: 'horse-standing', left: 16, top: 42, width: 206, height: 236 },
    { name: 'horse-running', left: 204, top: 43, width: 238, height: 235 },
    { name: 'horse-rearing', left: 442, top: 12, width: 220, height: 268 },
    { name: 'cowboy-standing', left: 26, top: 336, width: 148, height: 220 },
    { name: 'cowboy-lasso', left: 216, top: 246, width: 206, height: 310 },
    { name: 'cowboy-sitting', left: 430, top: 316, width: 168, height: 222 },
    { name: 'cowboy-riding-horse', left: 685, top: 64, width: 310, height: 492 }
  ];

  for (const item of items) {
    const croppedBuffer = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .extract({ left: item.left, top: item.top, width: item.width, height: item.height })
      .png()
      .toBuffer();

    // Trim any outer empty pixels
    await sharp(croppedBuffer)
      .trim()
      .png()
      .toFile(path.join(outDir, `${item.name}.png`));
    console.log(`Saved ${item.name}.png`);
  }

  console.log('All cowboy character assets extracted successfully!');
});
