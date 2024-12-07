module.exports = function (eleventyConfig) {
  // Copy assets folder
  eleventyConfig.addPassthroughCopy("assets");

  // Markdown library
  const markdownIt = require("markdown-it");
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
  );

  // Articles collection (sorted by date)
  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./articles/*.md")
      .sort(function (a, b) {
        return b.date - a.date;
      });
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site/news", // Output to a subfolder
    },
    pathPrefix: "/theater-ag/news/", // Important for correct URLs
  };
};
