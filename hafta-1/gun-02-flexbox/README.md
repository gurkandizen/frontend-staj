# Gün 02 — HTML/CSS Pekiştirme: Flexbox

`Program: Gün 2`

## Görev

Semantik HTML tekrarı. Verilen bir tasarımın (landing page) Flexbox ile kodlanması.

## Beklenen çıktı

Flexbox ile responsive tek sayfa (mobil + masaüstü).

## Durum

- [x] Tamamlandı
- [ ] Günlük not yazıldı → [`gunluk-notlar/gun-02.md`](../../gunluk-notlar/gun-02.md)

## Bu klasörde ne var?

Bir kafe/kahve dükkânı landing page'i (`1326 BURSA`) — `index.html` ve `style.css`.

Kapsam, gündeki asgari hedefin (tek sayfa, temel Flexbox) epey üzerine çıktı:

- **Header/navbar** — sabit (fixed) header, CSS-only (checkbox-hack) açılır-kapanır mobil menü, `clamp()` ile responsive boşluklandırma
- **Hero** — tam ekran (`100svh`) açılış bölümü, "1326" mühür motifi, SVG arka plan deseni (`mask-image` ile kenarlarda belirip ortada sönen)
- **Hakkımızda** — iki sütunlu anlatı metni (drop-cap efekti) + 3 öne çıkan özellik kartı
- **Menü** — çift çerçeveli "vintage" kart, künye paneli (spine) + gruplanmış ürün listesi, noktalı çizgili (leader) fiyat hizalama
- **Footer** — Osmanlı kafes deseni arka plan, koza (ipek) motifi
- **Responsive** — tek breakpoint (768px) ile mobil düzen, `prefers-reduced-motion` desteği

## AI kullanımı — şeffaflık notu

Bu günün görsel tasarımı ve SVG motifleri (mühür, koza, kafes deseni, köşe süslemeleri) Claude ile birlikte geliştirildi ve mentöre açıkça belirtilecektir. CSS'in tamamı satır satır açıklanarak, "neden böyle yazıldığı" sorgulanarak yazıldı — kopyala-yapıştır değil. Teslim öncesi 45 soruluk bir kendi kendini sınama yapıldı 24 öncelikli sorunun tamamı tekrar tekrar denenerek pekiştirildi.