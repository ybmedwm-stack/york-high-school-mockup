# DN Pages editor — York Html widget blocks

Paste each block into its own Html widget on the bayside-test home page (Edit Website → Website Pages → Home). The classes resolve against `dn/custom.css`. Product links use the real DN product IDs loaded 2026-10-17.

## 1. Ticker (top of page, replaces the Bayside announcement Html widget)

```html
<div class="yk-ticker" aria-label="Store notices"><div class="yk-ticker__track"><span>Free in-store pickup at Bullshirt, Route 1</span><i></i><span>Ships in two weeks or less</span><i></i><span>Printed by hand in York, Maine</span><i></i><span>Screen print and embroidery, done in house</span><i></i><span>No order windows. Always open.</span><i></i><span>Free in-store pickup at Bullshirt, Route 1</span><i></i><span>Ships in two weeks or less</span><i></i><span>Printed by hand in York, Maine</span><i></i><span>Screen print and embroidery, done in house</span><i></i><span>No order windows. Always open.</span><i></i></div></div>
```

## 2. Hero (replaces the Bayside hero Html widget)

```html
<section class="yk-hero"><p class="yk-score" aria-hidden="true"><span>WILD</span><span>CATS</span></p><h1 class="yk-hero__title">Wear it like you mean it.</h1><p class="yk-hero__lede">Official York High School gear, printed by hand on Route 1 by the shop that has dressed this town's teams since 2002. Pick a piece, pick a size, pick it up.</p><div class="yk-hero__actions"><a class="yk-btn" href="/shop/product/29013666">Sideline Hoodie, $43.57 →</a><a class="yk-btn yk-btn--ghost" href="#yk-pickup">Free pickup in York</a></div><ul class="yk-proof"><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4l4 2 4-2 4 3-2 4-2-1v10H8V10l-2 1-2-4z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg><span><b>Printed on Route 1.</b> Bullshirt Custom Apparel, 1070 US Route 1, York.</span></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11z" fill="none" stroke="currentColor" stroke-width="1.75"/><circle cx="12" cy="10" r="2.25" fill="none" stroke="currentColor" stroke-width="1.75"/></svg><span><b>Pickup is free.</b> Monday to Friday, 9 to 5. Or have it shipped.</span></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg><span><b>Two weeks, at most.</b> Every piece is decorated after you order.</span></li></ul></section>
```

## 3. Section head for the lineup (above the first product listing widget)

```html
<div class="yk-section-head"><h2>The full lineup.</h2><p>Every piece is decorated to order. Open any item to choose a size, add a name or number, and check out.</p></div>
```

## 4. How it works (between the listing widgets and the About block)

```html
<div class="yk-panel"><div><h2>Three taps from the couch to the bleachers.</h2></div><ol class="yk-steps"><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4l4 2 4-2 4 3-2 4-2-1v10H8V10l-2 1-2-4z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg><h3>Pick the piece</h3><p>Open any item. Choose the size, add a name or number if you want one.</p></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6.5" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg><h3>Check out once</h3><p>Cart and payment run right here on the Bullshirt store. One order, as many pieces as you like.</p></li><li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11z" fill="none" stroke="currentColor" stroke-width="1.75"/><circle cx="12" cy="10" r="2.25" fill="none" stroke="currentColor" stroke-width="1.75"/></svg><h3>Pick up on Route 1</h3><p>Printed in York within two weeks. Grab it at the shop for free, or have it shipped.</p></li></ol></div>
```

## 5. Stats band (replaces the Bayside About Html widget)

```html
<section class="yk-band" id="yk-pickup"><h2>Made two miles from the field.</h2><dl class="yk-stats"><div><dt>Printing in York since</dt><dd>2002</dd></div><div><dt>Days to ship, at most</dt><dd>14</dd></div><div><dt>Order windows</dt><dd>0</dd></div><div><dt>Pickup cost</dt><dd>$0</dd></div></dl><p>Bullshirt Custom Apparel, 1070 US Route 1, York ME 03909. Monday to Friday, 9 to 5. (207) 363-9363.</p></section>
```

## 6. FAQ + close (new Html widget before the footer logos)

```html
<div class="yk-faq"><div><h2>Questions, answered.</h2><p>Anything else, call the shop. A person picks up.</p></div><div><details open><summary>How long does an order take?</summary><p>Every piece is decorated after you order it. Most are ready within ten business days, and never more than two weeks. You get an email when it is done.</p></details><details><summary>Can I pick up instead of paying for shipping?</summary><p>Yes. Choose in-store pickup at checkout and collect it at Bullshirt on Route 1 during business hours. Pickup is free.</p></details><details><summary>Can I add a name or number?</summary><p>On hoodies, crewnecks, and tees, yes. Open the item and use the designer to set the back text before adding it to the cart.</p></details><details><summary>Does the school get anything from each sale?</summary><p>A share of every order goes back to York High School athletics through the store's commission. The percentage is set with the school.</p></details></div></div><section class="yk-close"><h2>Friday is coming.</h2><p>Pick your piece and have it on by kickoff.</p><a class="yk-btn" href="/shop/product/29013666">Shop the Sideline Hoodie →</a></section>
```

## Head snippet (Customize Template HTML → Standard → Custom Code Snippets → Head)

```html
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap" rel="stylesheet"><meta name="theme-color" content="#0E1014">
```

## Listing widgets

Re-point the two existing Decorated Product Listing widgets: first to the York **Sweatshirts** category, second to **T-Shirts**. Add a third for **Headwear** if there is room.
