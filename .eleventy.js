const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const PuppeteerAfterPlugin = require("./plugins/puppeteer-after");
const generateOgImages = require("./utils/generate-og-images");

const fs = require("node:fs");
const path = require("node:path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(PuppeteerAfterPlugin, {
    func: async ({ baseUrl, browserPage }) => {
      const outputDir = eleventyConfig.dir.output;

      const imagesToGenerate = await fs.promises
        .readFile(path.join(outputDir, "/tmp/og-image-data.json"))
        .then(JSON.parse);

      await generateOgImages({
        imagesToGenerate,
        baseUrl,
        outputDir,
        browserPage,
      });

      await fs.promises.rm(path.join(outputDir, "tmp"), { recursive: true });

      // delete the tmp folder
    },
  });

  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addPassthroughCopy({
    "src/images/favicon/Larry_48.ico": "favicon.ico",
    "src/images/favicon/Larry_300.png": "icon.png",
    "src/images/favicon/Larry_96.png": "favicon-96x96.png",
    "src/images/favicon/Larry_32.png": "favicon-32x32.png",
    "src/images/favicon/Larry_16.png": "favicon-16x16.png",
  });

  eleventyConfig.addFilter("monthYear", function (date) {
    console.log(date);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  });

  eleventyConfig.addFilter("timeValue", function (date) {
    return date.toLocaleString().replaceAll(",", "");
  });

  eleventyConfig.addFilter("niceDate", function (date) {
    if (typeof date === "undefined") return "";
    return date.toLocaleDateString("en-AU", { dateStyle: "long" });
  });

  eleventyConfig.addFilter("absoluteLink", function (value) {
    if (value.startsWith("/")) {
      return `https://larryhudson.io${value}`;
    } else {
      return value;
    }
  });

  eleventyConfig.addCollection("publishedProjects", function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").filter((post) => {
      if (post.data.isDraft) {
        return false;
      }
      return true;
    });
  });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
  };
};
