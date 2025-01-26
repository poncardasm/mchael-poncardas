module.exports = function (eleventyConfig) {
  // Define a collection for blog posts
  eleventyConfig.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('./src/posts/*.md').sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  // Set directories
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
  };
};
