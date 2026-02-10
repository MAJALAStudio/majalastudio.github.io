# MAJALA Studio - Static Site

This project has been converted from a React application to a static HTML/Tailwind CSS project.

## Structure

```
/assets
  /css
    style.css    (Generated/Compiled Tailwind CSS)
    input.css    (Source CSS with custom layers)
  /js
    main.js      (Client-side logic & Icon initialization)
  /img           (Static assets: images, icons, etc.)
index.html       (Main entry point)
tailwind.config.js (Tailwind configuration)
```

## Features
- **Static HTML**: Blazing fast load times with no client-side framework overhead.
- **Tailwind CSS**: Utility-first styling with a custom design system.
- **Lucide Icons**: Dynamic icon loading via CDN.
- **Interactive Apps Grid**: Filtering functionality implemented in vanilla JavaScript.

## Maintenance

### Updating Styles
If you need to change Tailwind classes:
1. Ensure you have Node.js installed.
2. Run the following command from the root directory:
   ```bash
   npx tailwindcss -i ./assets/css/input.css -o ./assets/css/style.css --minify
   ```

### Adding Images
Place new images in `assets/img/` and reference them in `index.html` as `assets/img/filename`.
