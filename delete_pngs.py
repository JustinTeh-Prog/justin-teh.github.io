from pathlib import Path

TARGET_DIR = Path("assets")
DRY_RUN = False  # Change to False after checking the list

png_files = list(TARGET_DIR.rglob("*.png"))

print(f"Found {len(png_files)} PNG files in {TARGET_DIR.resolve()}")

for file_path in png_files:
    print(f"{'Would delete' if DRY_RUN else 'Deleting'}: {file_path}")

    if not DRY_RUN:
        file_path.unlink()

print("Done.")