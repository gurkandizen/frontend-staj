# Gün 11 — Modern JavaScript (ES6+)

**Tarih:** 11 / 08 / 2026

## Bugün ne öğrendim?

- **Arrow function derinlemesine:** Implicit return (süslü parantez ve `return` olmadan tek ifadeyi otomatik döndürme); obje döndürürken parantezle sarmanın zorunlu olduğu (`() => ({...})`), aksi halde JS'in `{ }`'ı kod bloğu sanması; `this` davranışının arrow function'da normal fonksiyondan farklı olduğu (arrow function `this`'i kendi tanımlandığı çevreden miras alır, çağrıldığı objeden değil).
- **Destructuring:** Obje destructuring (`{ ad, email }`), farklı isimle alma (`{ ad: isim }`), varsayılan değer (`{ telefon = "..." }`), iç içe destructuring (`{ adres: { sehir } }`), dizi destructuring (eleman atlama, sıraya göre alma), fonksiyon parametresinde destructuring.
- **Spread ve Rest:** Aynı `...` sembolünün iki farklı işi — spread (dizi/obje kopyalama, birleştirme; atama operatörünün sağında), rest (fonksiyon parametrelerini toplama, destructuring'de "geri kalanı alma"; atama operatörünün/parametre listesinin solunda).
- **Template literal ileri düzey:** Çok satırlı string, `${}` içine doğrudan hesaplama/ternary/fonksiyon çağrısı yazma, hatta iç içe template literal.
- **Modüller derinlemesine:** Named export ile birden fazla şey dışa aktarma (zaten biliyordum), `import * as İsim` ile tüm modülü tek obje gibi alma (yeni).

## Nerede takıldım?

- **`completed`/`complated` yazım hatası:** Birden fazla dosyada tekrar tekrar aynı yazım hatasını yaptım, fark etmem birkaç tur sürdü — tutarlılık kontrolü konusunda dikkatli olmam gerektiğini gösterdi.
- **Obje döndüren arrow function'ı doğru kurmak:** İlk denemelerde ya parametre almayan ya da var olan bir değişkeni döndüren fonksiyonlar yazdım; asıl istenen "parametre alıp YENİ bir obje literal'i implicit return ile döndürme" kalıbını birkaç turda kavradım.
- **Paylaşılan mutasyon hatası:** İki farklı fonksiyonun (normal ve arrow) aynı objeyi `!task.completed` yerine `task.completed = !task.completed` ile mutasyona uğratması, ikisinin farklı sonuç vermesine yol açtı — "aynı girdide aynı sonucu karşılaştırma" amacını bozdu. Sadece hesaplayıp döndürerek (mutasyonsuz) düzelttim.
- **Dosya karışıklığı:** `02-destructuring.js`'e yazmam gereken senaryoları yanlışlıkla `01-arrow-functions.js`'in içine, önceki senaryoların arasına eklemiştim — dosyaları ayırmam gerektiğini fark edip düzelttim.
- **Varsayılan değer ile "dizide gerçekten var olan eleman" kavramlarını karıştırma:** Bir dizi destructuring senaryosunda, dizide olmayan bir elemana varsayılan değer vermek ile dizide gerçekten var olan bir elemanı atlayarak almak birbirine karıştı; ikisi görünüşte aynı sonucu (aynı değeri yazdırma) verdiği için hatayı ilk seferde fark etmedim.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

Özellikle "spread mi rest mi" ayrımını ve `this` farkını, birkaç hata yapıp düzelterek çok daha net kavradım. İzole alıştırmalarda kod bana hiç verilmedi, sadece adımlar ve ipuçları verildi — her satırı kendim yazdım.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- Kavram anlatımı (Arrow Function, Destructuring, Spread/Rest, Template Literal, Modüller) PDF olarak Claude tarafından hazırlandı.
- Beş alıştırma dosyasının (Aşama A) **tamamı** tarafımdan yazıldı — kod hiç verilmedi, sadece görev adımları ve (takıldığım noktalarda) ipuçları alındı.
- Evet, yazdığım her satırı açıklayabiliyorum — üstelik yaptığım hataların çoğunu (mutasyon, dosya karışıklığı, varsayılan değer karışıklığı) kendim fark edip düzelttim.

## Yarına not

- Aşama B (gerçek `vanilla-todo-app` refactor'ü, branch + PR) henüz tamamlanmadı — bir sonraki oturumda devam edilecek.