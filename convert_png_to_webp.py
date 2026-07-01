from pathlib import Path
from PIL import Image

INPUT_DIR = Path("assets")
QUALITY = 85

png_files = list(INPUT_DIR.rglob("*.png"))

print(f"Found {len(png_files)} PNG files.")

for png_path in png_files:
    webp_path = png_path.with_suffix(".webp")

    try:
        with Image.open(png_path) as img:
            # Preserve transparency if PNG has alpha
            if img.mode in ("RGBA", "LA"):
                img = img.convert("RGBA")
            else:
                img = img.convert("RGB")

            img.save(
                webp_path,
                "WEBP",
                quality=QUALITY,
                method=6
            )

        print(f"Converted: {png_path} -> {webp_path}")

    except Exception as e:
        print(f"Failed: {png_path}")
        print(e)

print("Done.")