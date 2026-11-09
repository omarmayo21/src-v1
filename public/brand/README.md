# SRFEC Brand Assets Directory (`/public/brand/`)

Drop the official SRFEC vector files here using these exact filenames:

- `srfec-logo-primary.svg` (Primary stacked logo — color)
- `srfec-logo-primary-white.svg` (Primary stacked logo — white for Granite Navy backgrounds)
- `srfec-logo-primary-mono.svg` (Primary stacked logo — monochrome navy)
- `srfec-logo-horizontal.svg` (Horizontal header logo — color)
- `srfec-logo-horizontal-white.svg` (Horizontal logo — white)
- `srfec-logo-horizontal-mono.svg` (Horizontal logo — monochrome navy)
- `srfec-symbol.svg` (Brand symbol — color)
- `srfec-symbol-white.svg` (Brand symbol — white)
- `srfec-symbol-mono.svg` (Brand symbol — monochrome navy)
- `srfec-monogram.svg` (Wordmark + tagline — color)
- `srfec-monogram-white.svg` (Wordmark + tagline — white)
- `srfec-monogram-mono.svg` (Wordmark + tagline — monochrome navy)
- `pattern.svg` (Optional repeating symbol tile for `<BrandPattern />`)

Once the SVG files are placed in this folder, set `brandAssetsReady: true` in `src/data/site-config.ts` to switch `<Logo />` from the architectural typography placeholder to the live SVG files.

