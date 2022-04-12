module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addPassthroughCopy("src/images");

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
