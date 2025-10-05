// Convert SVG to high-DPI PNG for print
// Install: npm install puppeteer

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load the SVG file
  const svgPath = path.join(__dirname, 'BASIC_AF_Logo.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');

  // Create HTML wrapper with SVG scaled to fill
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: transparent;
          width: 3000px;
          height: 1200px;
        }
        svg {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>${svgContent}</body>
    </html>
  `;

  await page.setContent(html);

  // Set viewport to high resolution
  // For 300 DPI at 10 inches wide: 3000px
  await page.setViewport({
    width: 3000,
    height: 1200,
    deviceScaleFactor: 1
  });

  // Take screenshot as PNG
  await page.screenshot({
    path: 'BASIC_AF_Logo_300DPI.png',
    fullPage: true,
    omitBackground: true // Transparent background
  });

  console.log('✅ Created BASIC_AF_Logo_300DPI.png (3000x1200px for 300 DPI print)');

  await browser.close();
})();
