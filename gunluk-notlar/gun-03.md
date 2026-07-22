# Gün 03 — CSS Grid ve Responsive Tasarım

**Tarih:** 22 / 07 / 2026

## Bugün ne öğrendim?

- **Grid ile Flexbox farkı:** Flexbox tek boyutlu (ya satır ya sütun), Grid iki boyutlu (satır ve sütunu aynı anda yönetir). İkisi rakip değil — bugün Grid'in içinde Flexbox kullandığım çok yer oldu.
- **`fr` birimi:** "fraction" (pay). Boş alanı oransal böler. `1fr 1fr` = %50-%50, `1.2fr 1fr` ≈ %54-%45. `%`'den farkı, `gap`'i hesaba katıp taşma yaratmaması.
- **`fr` + sabit birim karışımı:** `grid-template-columns: 1fr 340px` — bir taraf esnek, diğer taraf sabit. Rezervasyon formunda kullandım (sağ panel hep 340px, sol taraf kalanı doldurur).
- **`grid-template-areas`:** Alanlara isim verip harita gibi dizmek. Her tırnak bir satır, kelimeler sütunlar; aynı isim tekrar edince alan büyüyor. En güçlü tarafı: HTML'e hiç dokunmadan sadece haritayı değiştirerek yerleşimi tamamen değiştirebilmek.
- **`grid-column: span 2`:** Bir öğenin birden fazla sütunu kaplaması. Form'da Not alanını tam genişlik yapmak için kullandım; mobilde tek sütuna inince `span 1`'e çevirmek gerekti.
- **İç içe Grid:** Bir Grid hücresinin içine başka bir Grid koymak. Rezervasyonda üç katman oldu (dış Grid → orta Grid → Flex).
- **`object-fit: cover`:** Farklı en-boy oranlarındaki fotoğrafları tek tip kutuya, kırparak oturtmak. `contain` ile farkı: cover doldurup taşanı keser, contain hepsini gösterir ama boşluk bırakır.
- **`@keyframes` + `animation-timeline: view()`:** JavaScript kullanmadan, element ekrana girdikçe çalışan scroll animasyonu. `animation-range` ile animasyonun scroll'un hangi aralığında oynayacağı ayarlanıyor.
- **`margin-top: auto` (Flex'te):** Bir öğeyi kolonun en altına itmek. Rezervasyon panelinde "Rezerve Et" butonunu alta yaslamak için kullandım.
- **Form yapısı:** `type="tel"/"email"/"date"/"time"`, `required`, ve `label for` ↔ `input id` eşleşmesinin erişilebilirlik için neden şart olduğu.

## Nerede takıldım?

**1. Class ismi uyuşmazlığı.** Rezervasyon formunda HTML'de `form-reservation`, CSS'te `reservation-form` yazmışım. Grid kuralları hiç uygulanmadı, panel formun altına düştü. Hata mesajı vermediği için sebebini bulmak zaman aldı — HTML yapısında hata arayıp durdum, oysa sorun tek bir isim uyuşmazlığıydı. Ders: bir CSS kuralı "hiç çalışmıyorsa" önce class isminin birebir eşleştiğini kontrol etmek gerekiyor.

**2. Birim unutma.** `max-width: 1200` yazmışım, `px` eksik. CSS birimsiz değeri geçersiz sayıp satırı tamamen yok sayıyor — yine sessiz bir hata.

**3. Ölü kod.** Asimetrik Grid'den zikzak düzene geçerken, eski haritanın `grid-area` tanımları (`step-select`, `step-roast`...) dosyada kaldı. Artık karşılığı olmayan alanlara işaret ediyorlardı. Yapı değiştiğinde eski kuralları temizlemeyi unutmamak gerekiyor.

**4. `align-items: start` etkisi.** Rezervasyon panelini form boyuna uzatmak istediğimde nedenini anlamam biraz sürdü — Grid'de hücreler varsayılan olarak en uzun olanın boyuna uzuyor (`stretch`), ben `start` ile bunu engellemiştim. O satırı silmek yetti.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☐ Evet · ☐ Hayır

- **Evet** → konu oturmuş, ilerle. İstersen aynı gün bir sonraki konuya geç.
- **Hayır** → gün "bitti" sayılır ama ertesi sabah 15-20 dk bu konuya geri dön.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

Evet. Tasarım yönü (zikzak düzen fikri, renk/kompozisyon kararları) ve SVG motifleri Claude ile geliştirildi — bunu mentörüme açıkça belirtiyorum. Ancak CSS'in tamamı satır satır, "bu ne yapıyor, neden burada" sorgulanarak yazıldı; kopyala-yapıştır yapmadım. Grid kavramlarının (fr hesabı, areas haritası, span, iç içe Grid) özetini ayrı bir rehber belgesine çıkardım.
