# Image Guidelines for Soul's Purpose Website

## Image Folder Structure

The website uses the following image structure:

\`\`\`
/public/images/
  ├── past-life-session.jpg       # Main hero image
  ├── brain-visualization.jpg     # Brain/mind visualization
  ├── meditation-session.jpg      # Person in meditation
  ├── past-life-journey.jpg       # Journey visualization
  ├── time-concept.jpg            # Time concept visualization
  ├── time-concept-2.jpg          # Alternative time concept
  ├── moon-visualization.jpg      # Moon/spiritual visualization
  ├── stop-sign.jpg               # Stop sign for limitations section
  ├── virtual-reality.jpg         # VR concept for therapy section
  └── past-life-experience.jpg    # Experience visualization
\`\`\`

## Image Requirements

1. **File Format**: Use `.jpg` for photographs and `.png` for graphics with transparency
2. **Image Size**: 
   - Hero images: 1200px × 675px (16:9 ratio)
   - Card images: 800px × 600px
   - Section images: 1000px × 600px
   
3. **File Size**: Optimize all images to be under 200KB for better performance
   - Use tools like TinyPNG or ImageOptim to compress images
   
4. **Image Quality**:
   - Use high-quality, professional images
   - Avoid pixelated or blurry images
   - Choose images with good lighting and composition

5. **Style Guidelines**:
   - Use images with warm, earthy tones (oranges, ambers, purples)
   - Spiritual/mystical imagery works well
   - Images should evoke calm, introspection, and spiritual journey

## How to Add New Images

1. Save your optimized image to the `/public/images/` folder
2. Use descriptive filenames with hyphens between words (e.g., `past-life-session.jpg`)
3. Update the image path in the code (e.g., `src="/images/your-new-image.jpg"`)
4. Make sure to include proper `alt` text for accessibility

## Image Optimization Tips

- Crop images to the required aspect ratio before uploading
- Remove unnecessary metadata from images
- Consider using WebP format for better compression (with JPG fallback)
- Keep file sizes small for better page load performance
