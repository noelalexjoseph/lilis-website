Here’s the **final, end-to-end description** for the article page, covering images **1–15**. I’m assuming a small typo in your note: it’s **11, 12, 13** (not “1, 12, 13”) that are grouped, and **#10 is portrait** (as you first stated). I’m also assuming **#15 is portrait**; you can correct me if not.

# 1) Page contents (order, orientation, body placement)

* **Header stack (top):** tiny category → H1 title → subheading/dek (max \~60 characters per line) → three icon links (Instagram, Email, TikTok).
* **Images 1–15**. Every image has a **gray caption** immediately below it: “photographer • place • year”.

Image-by-image:

1. **#1 — Landscape — HERO.** Body text directly after #1.
2. **#2 — Landscape.**
3. **#3 — Landscape.** **Shared body after #3** (covers #2–#3).
4. **#4 — Landscape.**
5. **#5 — Portrait.** **Shared body after #5** (covers #4–#5).
6. **#6 — Portrait.** Body after #6.
7. **#7 — Portrait.** Body after #7.
8. **#8 — Landscape.**
9. **#9 — Landscape.** **Shared body after #9** (covers #8–#9).
10. **#10 — Portrait.** Body after #10.
11. **#11 — Landscape.**
12. **#12 — Landscape.**
13. **#13 — Landscape.** **Single shared body after #13** (covers #11–#13).
14. **#14 — Landscape.**
15. **#15 — Portrait (assumed).** **Single shared body after #15** (covers #14–#15).

**Totals:** 15 images • 15 captions • **9 body text blocks**
(After #1; after #3; after #5; after #6; after #7; after #9; after #10; after #13; after #15.)

# 2) Proportions & white-space (desktop/tablet)

* **Content alignment:** all media centered in the page; constant side white space.
* **HERO (#1):** content width ≈ **57.6%** of page; side gutters ≈ **21%** each.
* **STANDARD images (#2–#15):** content width ≈ **35%**; side gutters ≈ **32–33%** each.
* **Portraits** (#5, #6, #7, #10, #15): same **35% width** column; allow the height to run long. On very large screens, cap perceived height visually (don’t exceed comfortable viewport height).
* **Vertical rhythm:**

  * Image → caption: **6–8 px** visual gap.
  * Caption → body (when the body follows the same image): **12–18 px**.
  * Inside image groups (e.g., 2→3, 4→5, 8→9, 11→12→13, 14→15): keep a **tight gap** between consecutive images (**\~20–24 px** after the first image’s caption).
  * After a body block: **28–36 px** before the next section.

# 3) Typography & captions

* **Captions:** small, neutral gray (legible but understated), single line where possible; format exactly “Photographer • Place • Year”.
* **Body text blocks:** narrow measure under the same column as the related image(s); keep line length comfortable (\~60–66 characters) and consistent across the page.
* **Headings:** centered; subheading slightly lighter in color than body.

# 4) Responsive behavior

* **Mobile (≤768 px):** all images span \~**92%** of the viewport width, centered; captions and bodies follow directly underneath, also centered. Maintain the same grouping logic (shared body appears after the last image of its group).
* **Tablet (768–1024 px):** maintain the desktop ratios; the % widths naturally preserve side white space.

# 5) Image handling (assets & naming)

* **Format:** export images as **WebP** (primary) with **JPEG** fallbacks if needed.
* **Color/processing:** keep consistent tonality; no heavy sharpening; embed sRGB.
* **File naming (clear, sortable):**

  * `01_hero_landscape.webp`
  * `02_landscape.webp`, `03_landscape.webp`
  * `04_landscape.webp`, `05_portrait.webp`
  * `06_portrait.webp`, `07_portrait.webp`
  * `08_landscape.webp`, `09_landscape.webp`
  * `10_portrait.webp`
  * `11_landscape.webp`, `12_landscape.webp`, `13_landscape.webp`
  * `14_landscape.webp`, `15_portrait.webp` (adjust if #15 is not portrait).
* **Alt text:** one concise, descriptive sentence per image (no photographer names in alt; keep that in the caption).
* **Credits data:** store as text for each image exactly as it appears in the caption: “photographer • place • year”.

# 6) Interaction & ordering rules

* Every image is non-clickable gallery content (no lightbox) unless you decide otherwise later.
* Icon links (Instagram, Email, TikTok) sit only in the header and are keyboard-focusable.
* The **shared body** for a group appears **immediately after the last image’s caption** of that group.

# 7) Orientation summary

* **Landscape:** #1, #2, #3, #4, #8, #9, #11, #12, #13, #14 (and #15 if you confirm it’s landscape instead).
* **Portrait:** #5, #6, #7, **#10**, (#15 if portrait as assumed).

If any of those final two assumptions need flipping (e.g., #15 is landscape), tell me and I’ll adjust the orientation list and totals.
