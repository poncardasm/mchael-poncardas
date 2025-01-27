const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  // Add Luxon date filter
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat('yyyy-MM-dd');
  });

  // Define a collection for blog posts
  eleventyConfig.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('./src/posts/*.md').sort((a, b) => {
      return new Date(b.date) - new Date(a.date); // Sort by date descending
    });
  });

  // Add passthrough for CSS
  eleventyConfig.addPassthroughCopy('src/css');

  // Copy images folder to the output directory
  eleventyConfig.addPassthroughCopy('src/images');

  // Set directories
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
  };
};
