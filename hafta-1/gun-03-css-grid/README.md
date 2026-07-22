# Gün 03 — CSS Grid ve Responsive Tasarım

`Program: Gün 3`

## Görev

Grid temelleri, media query stratejisi. Aynı sayfayı grid ile yeniden kurgulama.

## Beklenen çıktı

Grid ile 2 farklı sayfa düzeni; her ikisi de responsive.

## Durum

- [x] Tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-03.md`](../../gunluk-notlar/gun-03.md)

## Bu klasörde ne var?

Mentörün kararıyla bu görevden itibaren **tek bir proje** (1326 Bursa) üzerine ekleme yapılıyor. Bugün Grid ile üç ayrı düzen kuruldu:

**1. Menü bölümü — Flexbox'tan Grid'e taşındı**
- `menu-plate`: `display: flex` → `display: grid` + `grid-template-columns: 32% 1fr`
- `menu-body`: 4 ürün grubu, asimetrik `grid-template-areas` haritasıyla dizildi
- Mobilde harita tamamen yeniden tanımlanarak farklı bir sıralama kuruldu (HTML'e dokunmadan)

**2. Süreç bölümü (yeni) — "Çekirdekten Fincana"**
- 5 adımlık zikzak şerit düzeni (foto sol → sağ → sol...), iki katmanlı Grid
- Dış Grid şeritleri alt alta dizer, her şeridin iç Grid'i foto + yazıyı yan yana koyar
- Zikzak, `grid-template-areas`'ı ters çevirerek yapıldı (`"media text"` ↔ `"text media"`)
- `object-fit: cover` ile farklı oranlardaki fotoğraflar tek tip kutuya oturtuldu
- `animation-timeline: view()` ile JS'siz scroll animasyonu (şeritler ekrana girdikçe beliriyor)

**3. Rezervasyon formu (yeni)**
- Üç katmanlı düzen: dış Grid (form | özet paneli, `1fr 340px`), orta Grid (7 alan ikişer ikişer), Flex (her alanda label + input)
- `grid-column: span 2` ile Not alanı tam genişlik
- Sağ panelde rezervasyon özeti + "Rezerve Et" butonu; tutar alanı şimdilik statik

## İleriye not (Gün 9 — JS)

Rezervasyon özetindeki tutar (`id="summary-amount"`) statik. JavaScript'e geçilince "kişi sayısı × 50 ₺" hesabı canlı yapılacak. Formdaki `required` alanlar da anlık doğrulamanın (form validation) başlangıç noktası olacak.

## AI kullanımı — şeffaflık notu

SVG motifleri ve görsel tasarım yönü Claude ile geliştirildi, mentöre açıkça belirtildi. Tüm CSS satır satır açıklanarak, "neden böyle" sorgulanarak yazıldı.