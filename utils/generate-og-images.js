const fs = require("node:fs");
const path = require("node:path");

async function generateImages({
  imagesToGenerate,
  baseUrl,
  outputDir,
  browserPage,
}) {
  await browserPage.setViewport({
    width: 1260,
    height: 621,
  });

  for (const imagePage of imagesToGenerate) {
    const outputPath = path.join(outputDir, imagePage.outputUrl);
    await browserPage.goto(baseUrl + imagePage.inputUrl);
    console.log("[eleventy-plugin-afterpuppet] Writing image", outputPath);
    await browserPage.screenshot({
      type: "jpeg",
      quality: 100,
      path: outputPath,
    });
  }
}

module.exports = generateImages;
