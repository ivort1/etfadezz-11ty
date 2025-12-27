import fs from "fs";
import path from "path";

export default function () {
    // Path to your gallery folder (relative to project root, not src)
    const galleryDir = "./src/public/images/gallery";
    
    // Read all files in the directory
    const files = fs.readdirSync(galleryDir);
    
    // Filter to only image files and build the data array
    const images = files
        .filter(file => /\.(webp|jpg|jpeg|png|avif)$/i.test(file))
        .map(file => {
            // Extract the number from filename for sorting (1.webp -> 1)
            const num = parseInt(path.basename(file, path.extname(file)), 10);
            
            return {
                src: `./src/public/images/gallery/${file}`,
                alt: `Haircut showcase ${num}`, // Customize these as needed
                order: isNaN(num) ? 999 : num   // Fallback for non-numeric names
            };
        })
        // Sort numerically so 2.webp comes before 10.webp
        .sort((a, b) => a.order - b.order);
    
    return images;
}