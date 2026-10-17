# York Wildcats Spirit Store, design mockup

Static single-page mockup of a York High School spirit-wear storefront, built as the design artifact for a DecoNetwork affiliate store on Bullshirt Custom Apparel's fulfillment center. Design language pulled from voltsconsulting.com (near-black ground, one electric accent, pill controls, ticker, collage hero, tagged grid, count-up stats, FAQ accordion) and translated into York's Columbia blue and white.

**This is not the store.** Cart, checkout, and the product designer live on DecoNetwork. This page is what gets ported into DecoNetwork's three theming surfaces (Customize Template HTML, Customize Template CSS, Pages editor Html widgets) per the premium storefront playbook in the Bullshirt project folder.

## Placeholders to replace at port

- Garment illustrations are authored SVG placeholders in the sprite at the top of `index.html`. DecoNetwork's decorated-product mockup renders replace them.
- Every product link carries `data-dn-product="TBD-…"`. Swap the href for the real `/shop/product/<id>` URL once products are loaded in DN.
- Prices, the bundle, and the three quotes are layout placeholders. The quotes section is labeled as such on the page.
- The wordmark and shield mark are authored. The school's official mark replaces them.
- The ticker's home-game line is sample copy.
- The drop-alert form does nothing.

## Run locally

Open `index.html` directly, or `npx serve -l 5177 .` from this folder.

## Files

- `index.html` – markup, inline SVG sprite for garments and icons
- `styles.css` – tokens, components, responsive rules
- `script.js` – scroll reveal, hero rail drift, count-up, mobile nav, FAQ
- `PRODUCT.md`, `.impeccable/` – design-process records
