# Gün 04 — JavaScript Temelleri I

`Program: Gün 4`

## Görev

Değişkenler (let/const), veri tipleri, operatörler, koşullar (if/switch). Console üzerinde alıştırmalar.

## Beklenen çıktı

10 küçük alıştırma çözümü (repo'da `js-temeller` klasörü).

## Durum

- [x] Tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-04.md`](../../gunluk-notlar/gun-04.md)

## Bu klasörde ne var?

`js-temeller/` altında 5 dosya, her birinde 2 alıştırma — toplam 10. Rastgele örnekler değil, hepsi 1326 Bursa projesinin gerçek ihtiyaçlarına (rezervasyon tutarı, kişi sayısı doğrulama, menü hesabı, çalışma saatleri) bağlı. Çalıştırma: her dosya için terminalde `node dosya-adi.js`.

**`01-degiskenler.js`**
- *Alıştırma 1 — Sabitler ve değişkenler:* `const`/`let` ayrımı; projenin sabit değerleri (kişi başı ücret, kafe adı, açılış/kapanış saati) `const`, değişecek kişi sayısı `let`.
- *Alıştırma 2 — `const` neden değiştirilemez:* Bir `const`'u sonradan değiştirmeye çalışınca alınan `TypeError` hatası ve programın durması gözlemlendi.

**`02-tipler.js`**
- *Alıştırma 3 — Tip dönüşümü tuzağı:* Form değerlerinin her zaman string geldiği; `"4" * 50` (200) ile `"4" + 50` (`"450"`, string birleşimi) farkı test edildi.
- *Alıştırma 4 — `Number()` ile bilinçli dönüşüm:* String'i gerçek sayıya çevirip, dönüşümden sonra `+` işleminin doğru toplama verdiği doğrulandı.

**`03-operatorler.js`**
- *Alıştırma 5 — Aritmetik operatörler ve KDV hesabı:* Üç menü ürününün toplamı, %10 KDV ve genel toplam hesabı.
- *Alıştırma 6 — Template literal ile özet metni:* Birden fazla değişkeni tek bir cümlede birleştirme — rezervasyon özeti metninin ön çalışması.

**`04-kosullar-if.js`**
- *Alıştırma 7 — if / else if / else ile sınır kontrolü:* Kişi sayısının 1-8 aralığında olup olmadığının kontrolü, farklı değerlerle test.
- *Alıştırma 8 — Sınır değeri (edge case) testi:* `>` ile `>=` farkının "8 kişi geçerli mi" sorusunu nasıl değiştirdiğinin gözlemlenmesi.

**`05-kosullar-switch.js`**
- *Alıştırma 9 — switch ile hafta içi/hafta sonu ayrımı:* Gün numarasına göre çalışma saatleri; art arda `case`'lerin gruplama için kullanımı (fall-through).
- *Alıştırma 10 — `break` unutulursa ne olur:* `break` kasıtlı kaldırılıp kontrolün bir sonraki case'lere sızması gözlemlendi, sonra geri eklendi.

## İleriye not (Gün 8-9 — DOM)

Bu mantık henüz sayfaya bağlı değil (saf JS, console çıktısı). DOM'a geçince: Alıştırma 3-4 → form'dan okunan kişi sayısını sayıya çevirmek, Alıştırma 5-6 → rezervasyon özeti panelini canlandırmak, Alıştırma 7-8 → form validation, Alıştırma 9-10 → durum/bildirim mesajı için kullanılacak.

## AI kullanımı — şeffaflık notu

Alıştırma senaryoları (hangi konunun hangi proje ihtiyacına bağlanacağı) Claude ile birlikte tartıştım, ama kod satır satır kendim yazıp çalıştırdım, her hatayı (const değiştirme, tip tuzağı, break unutma) gerçekten deneyerek gördüm.