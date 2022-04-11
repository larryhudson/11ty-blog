module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
    },
  };
};
