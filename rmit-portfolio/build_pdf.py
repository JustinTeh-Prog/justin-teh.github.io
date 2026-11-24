"""Render a portfolio HTML file to PDF with headless Chromium (Playwright).

Usage:
  python build_pdf.py [preview_dir]                       RMIT portfolio (default)
  python build_pdf.py [preview_dir] --variant simplified  RMIT, simplified copy
  python build_pdf.py [preview_dir] --variant general     general-distribution copy
  python build_pdf.py --all                               all three

Variants are generated from portfolio.html by make_variants.py (run it first).
If preview_dir is given, every page is also rasterised to PNG there.
"""
import os, sys, argparse, pathlib
from playwright.sync_api import sync_playwright

HERE = pathlib.Path(__file__).resolve().parent
VARIANTS = {
    "rmit": ("portfolio.html", "JustinTeh_Portfolio_RMIT.pdf"),
    "simplified": ("portfolio_simplified.html", "JustinTeh_Portfolio_RMIT_Simplified.pdf"),
    "general": ("portfolio_general.html", "JustinTeh_Portfolio.pdf"),
}


def build(src, out):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(src.as_uri(), wait_until="networkidle")
        page.evaluate("document.fonts.ready")
        page.wait_for_function("Array.from(document.images).every(i => i.complete)")
        overflow = page.evaluate("""() => {
          const out = [];
          document.querySelectorAll('.txt, .body, .media, .intro, .close').forEach(el => {
            if (el.scrollHeight > el.clientHeight + 2) {
              const sec = el.closest('section');
              const idx = Array.from(document.querySelectorAll('section.page')).indexOf(sec) + 1;
              out.push(`page ${idx}: .${el.className.split(' ')[0]} overflows by ${el.scrollHeight - el.clientHeight}px`);
            }
          });
          return out;
        }""")
        for line in overflow:
            print("WARN", line)
        page.pdf(path=str(out), prefer_css_page_size=True, print_background=True)
        browser.close()
    print("PDF:", out, "%.1f MB" % (out.stat().st_size / 1e6))


def preview(out, dirpath):
    import pymupdf
    os.makedirs(dirpath, exist_ok=True)
    doc = pymupdf.open(str(out))
    for i, pg in enumerate(doc):
        pg.get_pixmap(dpi=110).save(os.path.join(dirpath, "p%02d.png" % (i + 1)))
    print("pages:", len(doc))


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("preview_dir", nargs="?")
    ap.add_argument("--variant", choices=sorted(VARIANTS), default="rmit")
    ap.add_argument("--all", action="store_true")
    args = ap.parse_args()
    for name in (sorted(VARIANTS) if args.all else [args.variant]):
        src, out = (HERE / f for f in VARIANTS[name])
        build(src, out)
        if args.preview_dir:
            preview(out, os.path.join(args.preview_dir, name) if args.all else args.preview_dir)
