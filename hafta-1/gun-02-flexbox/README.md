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

## Ekran Görüntüleri

<table>
  <tr>
    <th>Masaüstü</th>
    <th>Mobil</th>
  </tr>
  <tr>
    <td><img width="500" alt="Hero bölümü - masaüstü" src="https://github.com/user-attachments/assets/408765fe-c8e0-480b-b6e7-ac680e9b8313" /></td>
  </tr>
</table>

**Hero / Açılış**

<table>
  <tr>
    <td><img width="500" alt="Hero bölümü - masaüstü" src="https://github.com/user-attachments/assets/2dbdfa34-8b50-402b-bd6c-363de4f70783" /></td>
    <td><img width="200" alt="Hero bölümü - mobil" src="https://github.com/user-attachments/assets/64312aec-18b8-419f-815c-227a470eb06d" /></td>
  </tr>
</table>

**Hakkımızda**

<table>
  <tr>
    <td><img width="500" alt="Hakkımızda bölümü - masaüstü" src="https://github.com/user-attachments/assets/36791f12-66be-4ea6-9acd-121ac4d0f63e" /></td>
    <td><img width="200" alt="Hakkımızda bölümü - mobil" src="https://github.com/user-attachments/assets/a3ba1fc1-81c3-44f6-a98d-042c137ae71a" /></td>
  </tr>
</table>

**Menü**

<table>
  <tr>
    <td><img width="500" alt="Menü bölümü - masaüstü" src="https://github.com/user-attachments/assets/1e07fc47-90a5-4ba5-9b5e-c899ca956385" /></td>
    <td><img width="200" alt="Menü bölümü - mobil" src="https://github.com/user-attachments/assets/84167ca0-2c27-411b-bc6e-9af691df5626" /></td>
  </tr>
</table>

**Footer**

<table>
  <tr>
    <td><img width="500" alt="Footer bölümü - masaüstü" src="https://github.com/user-attachments/assets/7fcf3be7-7439-434b-b63c-0356dcd9e71b" /></td>
    <td><img width="200" alt="Footer bölümü - mobil" src="https://github.com/user-attachments/assets/9f8a03c3-778e-46f0-98ee-9d4d1f0d8a4b" /></td>
  </tr>
</table>