module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("css");

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

    date.get;

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
  };
};
