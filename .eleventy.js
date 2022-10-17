module.exports = function(eleventyconfig) {

    eleventyconfig.addPassthroughCopy("./assets/css/");
    eleventyconfig.addWatchTarget("./assets/css/");
    eleventyconfig.addPassthroughCopy("./src/admin/");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
  }

  var md = require('markdown-it')()
            .use(require('markdown-it-container'), 'blog');