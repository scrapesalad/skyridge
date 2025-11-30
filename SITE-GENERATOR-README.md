# King Tut Site Generator

A simple CLI tool to generate ready-to-use websites from templates.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the generator:**
   ```bash
   npm run create-site
   ```

3. **Follow the prompts:**
   - Enter your business name
   - Choose a service type
   - Select a template (5 options)
   - Pick a color scheme (4 presets or custom)
   - Specify output folder name

4. **Your site is ready!**
   - Open the generated folder
   - View `index.html` in your browser
   - Or serve with any static server

## What It Does

The generator:
- ✅ Prompts for business information
- ✅ Lets you choose from 5 templates
- ✅ Applies your chosen color scheme
- ✅ Replaces all placeholders with your data
- ✅ Generates a complete, ready-to-use website

## Templates

1. **King Tut Classic** - Service business template with standard header, two-column hero, services grid, testimonials, and gallery
2. **Corporate Split** - Split-screen hero, icon boxes, alternating feature bands, stats strip, and card-based testimonials
3. **One Page Parallax** - Single-page scrolling layout with parallax effects, anchor navigation, pricing section, and contact form
4. **Portfolio Grid** - Masonry grid layout with filterable projects, minimal header, and testimonial slider
5. **Agency Modern** - Full-width slider hero, overlapping cards, diagonal sections, and sidebar contact form

## Color Schemes

- **Gold** - Classic gold and black
- **Ocean** - Blue ocean theme
- **Forest** - Green nature theme
- **Rose** - Pink/rose theme
- **Custom** - Define your own colors

## Generated Files

The generator creates a folder with:
- `index.html` - Your customized homepage
- `pages/` - All 80+ pages (about, services, contact, FAQ, gallery, 71 city pages, etc.)
- `css/` - All stylesheets with your color scheme applied
- `images/` - All images and assets from the template
- All pages are pre-filled with your business information

## Image Scraping (Optional)

The generator can automatically scrape high-quality images from a website URL you provide:

1. **Install wget** (required for image scraping):
   - **Windows**: `choco install wget` (via Chocolatey) or download from [GNU Wget](https://www.gnu.org/software/wget/)
   - **macOS**: `brew install wget`
   - **Linux**: `apt-get install wget` or `yum install wget`

2. **During site generation**, when prompted for "URL to scrape images from":
   - Enter a URL to a website, gallery page, or media page
   - The generator will download high-quality images (min 30KB, prioritizing largest)
   - Images are automatically filtered to remove small thumbnails/icons
   - Top 50 largest images are kept and used in your site

3. **Image Quality**:
   - Only images larger than 30KB are kept (filters out blurry thumbnails)
   - Images are sorted by size (largest first)
   - Small icons, logos, and thumbnails are automatically excluded
   - Scraped images replace stock images in the main `images/` folder

**Note**: Ensure you have rights to use the images you're scraping. Only scrape from sites you own or have permission to use.

## Customization

After generation, you can:
- Edit HTML files directly
- Modify CSS in `css/design-tokens-override.css` to change colors
- Add your own images to the `images/` folder
- Customize any content as needed

## Template Development

To create or modify templates, see `templates/README.md` for details on:
- Template structure
- Token placeholders
- Adding new templates

