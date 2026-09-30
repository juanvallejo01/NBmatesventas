"""Convierte las imágenes extraídas (assets/img/raw) a WebP livianas con el id del producto.

Uso: python3 tools/extract_pdf.py && python3 tools/build_images.py
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
RAW = ROOT / "assets" / "img" / "raw"
OUT = ROOT / "assets" / "img" / "products"
OUT.mkdir(parents=True, exist_ok=True)

# id de producto -> página del catálogo PDF (o archivo raw)
SOURCES = {
    "waka-stick": 2, "waka-solo-2": 3, "waka-smash-air": 4, "waka-nova": 5, "waka-blast": 6,
    "hqd-cuvie-air": 7, "fume-recharger": 8, "death-row-5k": 9, "lost-mary-os5000": 10,
    "ignite-5000": 11, "lost-mary-mo5000": 12, "snowwolf-easy": 13, "death-row-7k": 14,
    "tyson-7k": 15, "chillax-go-bateria": 16, "chillax-go-capsula": 16, "pyne-pod-8500": 17,
    "nola-bar-10000": 18, "ijoy-captain": 19, "ijoy-bar-sd10000": 20, "nicky-jam-10000": 21,
    "snoopy-smoke": 22, "north-ft12000": 23, "beyond-12000": 24, "mtrx-12000": 25,
    "chris-brown": 26, "baddy-bar-15000": 27, "nicky-jam-15000": 28, "priv-bar-turbo": 29,
    "bugatti-spaceship": 30, "elux-cyberover": 31, "spaceman-18000": 32, "spaceman-20000": 33,
    "vookbar-cyber": 34, "airfuze-jet": 35, "humo-azul": 36, "starbuzz-15k": 37,
    "vera-vr22000": 38, "kylin-bar-30000": 39, "hookalit": 40, "equator-eq30000": 41,
    "tomoro-d15": 42, "airfuze-smart": 43, "podz-pulse-x": 44, "nexa-pix": 45,
    "solo-bar-mate-kit": 46, "solo-bar-30-kit": 47, "solo-bar-mate-capsula": 48,
    "tomoro-t1": 49, "dojo-sphere-s": 50, "dojo-sphere-x": 51, "spaceman-50k": 52,
    "lost-angel": 53, "bang-leader": 54, "solo-bar-defender": 55, "hello-synix": 56,
    "craftbox-v-play": 57, "ulit-shellet-plus": 58, "dinner-lady-galax": 59, "life-pod-sk": 60,
    "binaries-sv15000": 61, "extra-3k": 62, "life-pod-eco-2": 63, "stlth-loop-5k-kit": 64,
    "stlth-loop-2-bateria": 65, "stlth-loop-bateria": 66, "stlth-pod-loop-5k": 67,
    "stlth-pod-vice-5k": 68, "stlth-pod-9k": 69, "stlth-pod-switch-15k": 70, "stlth-open": 71,
    "vaporesso-gtx-go-40": 72, "vaporesso-xros": 73, "vaporesso-xros-2": 74,
    "vaporesso-xtra": 75, "vaporesso-luxe-x-pro": 76, "vaporesso-sky-solo": 77,
    "vaporesso-sky-solo-plus": 78, "smok-rpm-5": 79, "voopoo-vinci-q": 80,
    "extra-bar-turbo": "web-extrabar-turbo.png",
}

MAX = 720

for pid, src in SOURCES.items():
    path = RAW / (src if isinstance(src, str) else f"cat-{src:02d}.png")
    img = Image.open(path).convert("RGBA")
    box = img.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    if box:
        img = img.crop(box)
    img.thumbnail((MAX, MAX), Image.LANCZOS)
    img.save(OUT / f"{pid}.webp", "WEBP", quality=82, method=6)

print(len(SOURCES), "imágenes en", OUT)
