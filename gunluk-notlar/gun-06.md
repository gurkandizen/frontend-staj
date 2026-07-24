# Gün 06 — Diziler ve objeler

**Tarih:** 24 / 07 / 2026

## Bugün ne öğrendim?

- Dizi ve obje temel işlemleri: indeksle/anahtarla erişim, `slice` vs `splice` (biri saf, biri mutasyon yapan), `delete` ile `undefined` ataması arasındaki fark (anahtar silinmesi vs anahtarın boş kalması).
- İç içe yapılarda zincirleme erişim ve opsiyonel zincirleme (`?.`) — özellikle eksik veri üzerinde önce hatayı görüp sonra düzeltme sırasıyla.
- `filter` / `map` / `reduce` farkı ve zincirleme kullanımı.
- `sort()`'un karşılaştırıcısız halde sayıları metin olarak kıyasladığı, ve mutasyon yaptığı (orijinal diziyi bozduğu).
- Referans mantığı: `=` atamanın kopya üretmediği, yayma operatörünün (spread) sadece üst seviyeyi kopyaladığı (yüzeysel kopya), `structuredClone`'un gerçek derin kopya verdiği.
- Destructuring: iç içe alan çekme, varsayılan değer, rest operatörü — ve rest'in "kullanılmamış" anahtarları topladığı, bir anahtarın *bir kısmını* almanın bile o anahtarı bütünüyle "kullanılmış" saydığı.
- ES Module temelleri: `package.json` ile `"type": "module"`, isimli export/import, yol yazarken `./` ve uzantı zorunluluğu, ve modüllerin **önbelleğe alındığı** (aynı process içinde aynı diziye/objeye işaret edildiği).

## Nerede takıldım?

- **Modül önbelleği sorusu (2 deneme, ikisi de yanlış):** "Bir dosyada `menu`'yu `splice` ile bozarsam, aynı process içinde başka bir dosya bunu import ederse bozuk mu gelir?" sorusuna önce "bozuk gelmezdi" sonra "yeni kopya gelirdi" dedim — ikisi de yanlıştı. Referans mantığını (adres vs değer) modül import'una bağlayamadım, açıklama alarak kavradım: iki dosya da aynı adrese bakıyor, kopya değil.
- **`menu[0]` kontrolü mutasyonu kanıtlamadı** — Espresso hem orijinal dizide ilk sıradaydı hem de fiyatça en ucuzdu, o yüzden sıralamadan önce/sonra aynı çıktı. Yanlış indeks seçmiştim, kontrol noktası işe yaramadı.
- **`const` ile aynı ismi iki kere tanımlamaya çalıştım** (`ad`, `rol`'ü iki ayrı destructuring'de) — `SyntaxError: Identifier 'ad' has already been declared` aldım. Aynı kapsamda `const`'un yeniden tanımlanamayacağını unutmuşum.
- **Rest operatörünün `iletisim`'i tamamen dışladığını öngöremedim** — `iletisim: { eposta }` yazarak sadece `eposta`'yı aldığımı sanıyordum, ama `iletisim` anahtarının tamamı bu yüzden "kullanılmış" sayıldı ve `kalanlar` içinde hiç görünmedi. Çıktıyı görünce fark ettim.
- Splice ikinci parametresini (`splice(7, 9)`) gereğinden büyük seçtim, "ortadan çıkar" yerine "sondan çıkar" oldu — küçük ama fark etmem gereken bir detaydı.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

Referans mantığını (senaryo 10) ilk seferde doğru ve eksiksiz uyguladım, üç yöntemi (`=`, spread, `structuredClone`) doğru karşılaştırdım. Modül önbelleği ve rest/destructuring inceliklerinde ilk denemede takıldım ama açıklama sonrası kavradım — bunları yarın sabah tekrar gözden geçireceğim.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- Konu anlatımı (kavramlar) ve görev adımları Claude tarafından verildi; iki veri dosyası (`veri/menu.js`, `veri/kullanicilar.js`) ve `package.json` da hazırca verildi — bunlar alıştırma malzemesi, çözüm değil.
- 11 senaryonun tamamının kodu tarafımdan yazıldı, kod verilmedi — sadece hata sonrası ipucu ve kavramsal açıklama alındı (2 deneme kuralıyla).
- Evet, yazdığım her satırı açıklayabiliyorum; takıldığım yerler yukarıda listelendi ve nedenini biliyorum.

## Yarına not

- Modül önbelleği (aynı process'te aynı referansa işaret etme) konusunu tekrar et.
- `sort()`'ta hangi tür veri üzerinde (obje mi, düz değer mi) test ettiğine dikkat et — obje dizisinde varsayılan `sort()` görünürde "bir şey yapmıyormuş" gibi durabiliyor.
- Rest operatörü kullanırken, iç içe bir alanın *bir kısmını* çekmenin o alanın tamamını "kalanlar"dan düşürdüğünü unutma.
- DOM'a konu anlatımı planla.