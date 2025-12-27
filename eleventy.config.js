import Image from "@11ty/eleventy-img";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/public");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
    
    // Custom shortcode for gallery images with full optimization control
    eleventyConfig.addShortcode("galleryImage", async function(src, alt, widths = [400, 800], sizes = "50vw") {
        // Process the image, generating multiple sizes and formats
        let metadata = await Image(src, {
            widths: widths,
            formats: ["avif", "webp"],
            outputDir: "./_site/images/gallery/",
            urlPath: "/images/gallery/",
            // Use content hash in filename for cache busting
            filenameFormat: function (id, src, width, format) {
                const name = src.split("/").pop().split(".")[0];
                return `${name}-${width}w.${format}`;
            }
        });
        
        // Generate the picture element with all sources
        return Image.generateHTML(metadata, {
            alt: alt,
            sizes: sizes,
            loading: "lazy",
            decoding: "async"
        });
    });
    
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}