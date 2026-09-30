"""Extrae las imágenes de producto (PNG con transparencia) de los PDF de catálogo.

Uso: python3 tools/extract_pdf.py
Genera assets/img/raw/cat-<pagina>.png y assets/img/raw/promo-<pagina>-<n>.png
"""
import pathlib
import fitz
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "raw"
OUT.mkdir(parents=True, exist_ok=True)

PILL = (1209, 317)  # franja de "N mil puff" del catálogo, no es producto


def to_pil(doc, xref, smask):
    base = fitz.Pixmap(doc, xref)
    if base.n - base.alpha >= 4:  # CMYK -> RGB
        base = fitz.Pixmap(fitz.csRGB, base)
    if smask:
        mask = fitz.Pixmap(doc, smask)
        base = fitz.Pixmap(base, mask)
    mode = "RGBA" if base.alpha else "RGB"
    return Image.frombytes(mode, (base.width, base.height), base.samples)


def trim(img):
    if img.mode == "RGBA":
        box = img.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
        if box:
            img = img.crop(box)
    return img


def catalog(path):
    doc = fitz.open(path)
    for i, page in enumerate(doc, start=1):
        if i == 1:
            continue  # portada
        best = None
        for img in page.get_images(full=True):
            xref, smask, w, h, cs = img[0], img[1], img[2], img[3], img[5]
            if (w, h) == PILL or not smask or cs == "DeviceRGB":
                continue
            rects = page.get_image_rects(xref)
            if not rects:
                continue
            area = max(r.width * r.height for r in rects)
            if best is None or area > best[0]:
                best = (area, xref, smask)
        if best:
            trim(to_pil(doc, best[1], best[2])).save(OUT / f"cat-{i:02d}.png")


def promos(path):
    doc = fitz.open(path)
    for i, page in enumerate(doc, start=1):
        if i == 1:
            continue
        n = 0
        imgs = []
        for img in page.get_images(full=True):
            xref, smask, w, h = img[0], img[1], img[2], img[3]
            if not smask or w / h > 2:  # fondo sin máscara o franja de texto
                continue
            r = page.get_image_rects(xref)[0]
            imgs.append((r.x0, xref, smask))
        for _, xref, smask in sorted(imgs):
            n += 1
            trim(to_pil(doc, xref, smask)).save(OUT / f"promo-{i:02d}-{n}.png")


if __name__ == "__main__":
    catalog(ROOT / "Catálogo vapes vape house 2.pdf")
    promos(ROOT / "Promociones Octubre Vape House.pdf")
    print(len(list(OUT.glob("*.png"))), "imágenes en", OUT)
