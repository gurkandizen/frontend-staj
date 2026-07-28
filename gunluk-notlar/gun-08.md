# Gün 08 — DOM I: Seçme ve manipülasyon

**Tarih:** 28 / 07 / 2026

## Bugün ne öğrendim?

- DOM'un ne olduğu: HTML statik, DOM tarayıcıda oluşan canlı nesne ağacı; `document` bu ağaca giden köprü.
- `querySelector`/`querySelectorAll` ile CSS seçicileriyle element bulma; `querySelectorAll`'ın NodeList döndürdüğü, dizi olmadığı (`forEach` ile gezilebilir ama `map`/`filter` doğrudan çalışmaz).
- `textContent` (güvenli, düz metin) ile `innerHTML` (HTML olarak yorumlanır, XSS riski) arasındaki fark.
- `classList.add/remove/toggle/contains` ile görünümü CSS'e, "ne zaman değişeceğini" JS'e bırakan sorumluluk ayrımı.
- `createElement` + doldur + `appendChild` üç adımlı süreci; elementi ağaca eklemeyi unutursam görünmediğini.
- `addEventListener` ile olaya tepki verme (callback fonksiyon kavramı, Gün 7'deki map/filter callback'leriyle aynı temel fikir).
- `Object.entries` ile bir objeyi (kategori→ürün listesi) hem anahtar hem değer olarak gezme, dizi destructuring ile ikisini ayrı değişkene alma.
- Gerçek bir mobil UX sorunu: flexbox'ta `min-width: auto` varsayımının `overflow-x: auto`'yu etkisiz bırakması; ve "scroll chaining" — iç içe kaydırılabilir elementin sınırına gelince kaydırmanın tüm sayfaya sıçraması, `overscroll-behavior-x: contain` ile çözümü.
- `scrollIntoView`, `scrollWidth`/`clientWidth`/`scrollLeft` ile kaydırma durumunu okuma; `{ passive: true }`'ın performans açısından önemi.

## Nerede takıldım?

- **Modül konum hatası:** `initTabs`'ı silip sadece seçim satırlarını bıraktığımda, fonksiyon sarmalayıcısını unuttum — `main.js` var olmayan bir fonksiyonu çağırmaya çalıştı. Fonksiyonun neden kendi içinde element seçmesi gerektiğini (güncel DOM durumunu yansıtması için) tekrar düşünerek düzelttim.
- **Scope shadowing:** `tabs.js`'te dıştaki `forEach(tab => ...)` ile içteki temizleme döngüsünde de `tab` ismini kullandım — çalışıyordu ama okuyan biri için kafa karıştırıcıydı. `t` gibi farklı bir isimle ayırdım.
- **`appendChild` sırası:** `menu-render.js`'te `.m-desc`'i `.m-line`'dan önce eklemiştim, orijinal yapıda sıra tersti. appendChild'ın sona eklediğini fark edip sırayı düzelttim.
- **HTML'de birden fazla `is-active`:** Sekme yapısını kurarken kopyala-yapıştır sırasında birden fazla panele `is-active` sınıfı bulaşmış — sayfa ilk açıldığında dört kategori de birden görünüyordu. Tıklayınca JS zorla düzelttiği için fark etmesi biraz zaman aldı.
- **Responsive — iki katmanlı gerçek hata:** Önce sekmeler mobilde tek satıra sığmayınca `overflow-x:auto` + `min-width:0` ekledim ama sayfa hâlâ tamamen kayıyordu. Video ile inceleyip (ve Claude'un headless tarayıcıda ölçüm yapmasıyla) asıl sebebin "scroll chaining" olduğunu öğrendim — `.menu-tabs` kendi içinde doğru kaydırıyordu ama sınırına gelince kaydırma tüm sayfaya sıçrıyordu. `overscroll-behavior-x: contain` ile çözüldü.
- **İsimlendirme:** Önceki bir projede Claude'a "kod tanımlayıcıları İngilizce olmalı" kuralını vermiştim, bu projede ilk turda buna dikkat edilmedi (`tabsSerit`, `fadeDurumunuGuncelle` gibi Türkçe isimler geldi). Uyarınca düzeltildi, ayrıca tüm veri dosyasındaki alan adlarını (`ad→name`, `fiyat→price` vb.) ve kategori anahtarlarını kendim İngilizceye çevirdim.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

DOM seçme/değiştirme/oluşturma araçlarının hepsini gerçek bir senaryoda (sekmeli menü) uygulayarak öğrendim. Özellikle "scroll chaining" gibi ileri bir mobil web konusunu gerçek bir hatadan yola çıkarak kavradım — bu, salt teoriyle öğrenmekten daha kalıcı oldu.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- `tabs.js` ve `menu-render.js`'in JS mantığı (seçim, olay bağlama, `createElement` zinciri, `Object.entries` gezinme) tarafımdan yazıldı; kod verilmedi, sadece hata sonrası ipucu alındı.
- Responsive hatasının kök nedenini (scroll chaining) Claude bir headless tarayıcı ölçümüyle teşhis etti, ben CSS çözümünü yerleştirdim.
- Evet, yazdığım her satırı açıklayabiliyorum.

## Yarına not

- Flexbox'ta `min-width: auto` varsayımını ve `overscroll-behavior` kavramını tekrar gözden geçir.
- Rezervasyon formundaki `id="summary-amount"` canlandırması bir sonraki günün konusu.