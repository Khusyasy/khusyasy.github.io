module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md",
        "jpg",
        "png",
        "css"
    ]);
    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
};