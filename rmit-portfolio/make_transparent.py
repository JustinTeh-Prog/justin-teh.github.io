"""Turn chart / table images with white or off-white backgrounds into
transparent PNGs, cropped to their content, so they sit on the page paper.

Usage: python make_transparent.py
Reads img/<name>.jpg, writes img/<name>_t.png for each name in CHARTS.
Method: estimate the background colour from the border, rescale so it maps to
pure white, then "colour to alpha" against white (exact over white, and only
the background disappears on other grounds).
"""
import os
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(HERE, "img")
CHARTS = ["lca_impact", "lca_calc", "co2_viz", "co2_final", "co2_iter3", "co2_solution", "para_matrix"]


def to_alpha(path_in, path_out, pad=10):
    a = np.asarray(Image.open(path_in).convert("RGB")).astype(np.float32)
    border = np.concatenate([a[:4].reshape(-1, 3), a[-4:].reshape(-1, 3), a[:, :4].reshape(-1, 3), a[:, -4:].reshape(-1, 3)])
    bg = np.median(border, axis=0)
    a = np.clip(a * (255.0 / np.maximum(bg, 1)), 0, 255)          # background -> white
    alpha = (255.0 - a).max(axis=2) / 255.0                       # colour-to-alpha against white
    alpha = np.where(alpha < 0.035, 0.0, alpha)                   # drop JPEG noise in the background
    safe = np.maximum(alpha, 1e-6)[..., None]
    rgb = np.clip((a - 255.0 * (1 - safe)) / safe, 0, 255)
    out = np.dstack([rgb, alpha * 255.0]).astype(np.uint8)
    ys, xs = np.nonzero(alpha > 0.08)                             # crop to content
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad, out.shape[0] - 1)
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad, out.shape[1] - 1)
    im = Image.fromarray(out[y0:y1 + 1, x0:x1 + 1], "RGBA")
    im = im.quantize(colors=256, method=Image.Quantize.FASTOCTREE)   # palette PNG keeps alpha, ~1/3 the size
    im.save(path_out, optimize=True)
    return im.size, os.path.getsize(path_out)


if __name__ == "__main__":
    for n in CHARTS:
        size, b = to_alpha(os.path.join(IMG, n + ".jpg"), os.path.join(IMG, n + "_t.png"))
        print(n, size, "%d KB" % (b // 1024))
