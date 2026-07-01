from pathlib import Path
import tinify
import shutil

# Replace with your TinyPNG API key
tinify.key = "FKMyY5WhfJ7rN44KyM8SD5JrZB3N1fzn"

ASSETS_DIR = Path("assets")
BACKUP_DIR = Path("assets_backup_before_tinypng")

# Create backup first
if not BACKUP_DIR.exists():
    shutil.copytree(ASSETS_DIR, BACKUP_DIR)
    print(f"Backup created at: {BACKUP_DIR}")
else:
    print(f"Backup already exists at: {BACKUP_DIR}")

png_files = list(ASSETS_DIR.rglob("*.png"))

print(f"Found {len(png_files)} PNG files.")

for file_path in png_files:
    try:
        print(f"Compressing: {file_path}")
        source = tinify.from_file(str(file_path))
        source.to_file(str(file_path))
    except Exception as e:
        print(f"Failed: {file_path}")
        print(e)

print("Done.")