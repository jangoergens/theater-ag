module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  const markdownIt = require("markdown-it");
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
  );

  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./articles/*.md")
      .sort(function (a, b) {
        return b.date - a.date;
      });
  });

  eleventyConfig.addCollection("shows", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("./shows/*.md")
      .sort(function (a, b) {
        return b.date - a.date;
      });
  });

  eleventyConfig.addFilter("readableDate", function (dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "output",
    },
  };
};
