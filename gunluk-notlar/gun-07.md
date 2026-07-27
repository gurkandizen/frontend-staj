# Gün 07 — Array Metodları

**Tarih:** 27 / 07 / 2026

## Bugün ne öğrendim?

- Altı array metodunun (`map`, `filter`, `reduce`, `find`, `sort`, `some`/`every`) her birinin hangi soruyu sorduğu ve ne döndürdüğü: `map`/`filter` yeni dizi, `reduce` tek değer, `find` tek eleman, `some`/`every` boolean.
- Döngü (buyurgan) ile metod (bildirimsel) üslup farkı — döngü "nasıl yapılacağını" adım adım, metod "ne istendiğini" söyler. Her alıştırmada aynı işi iki üslupla yazıp karşılaştırdım.
- Döngü → metod eşleştirmesi: `push` ile dönüştürülmüş değer biriktirmek → `map`, koşula uyanı biriktirmek → `filter`, tek değerde biriktirmek → `reduce`, "bulunca dur" (`break`) → `find`/`some`/`every`.
- `some`/`every`'nin erken çıkış yaptığı (cevabı bulunca durduğu) ve bunun `filter(...).length > 0`'a göre gerçek bir performans farkı olduğu.
- `reduce` ile obje/dizi inşa ederken her turda biriktiriciyi `return` etmenin zorunlu olduğu — unutulursa bir sonraki turda biriktirici `undefined` olur ve kod çöker.
- Doğrulama yöntemi seçimi: `filter`/`find` orijinal objeyi taşıdığı için referans (`===`) karşılaştırması doğru çalışır; `map` yeni obje ürettiği için `JSON.stringify` (içerik karşılaştırması) gerekir. İkisini bilerek ayırdım.
- Bubble sort mantığı: iç içe iki döngü + geçici değişkenle komşu elemanların yer değiştirmesi — Gün 6'daki iç içe döngü konusunun doğrudan uygulaması.

## Nerede takıldım?

- **Görev 11 — bubble sort'ta üç ayrı `for` döngüsü hatası (3 turda düzeldi):** İç döngüyü yazarken üç ayrı yerde hata yaptım ve hepsini adım adım buldum:
  1. Başlangıç `j` ile başlıyordu ama koşul `i`'yi kontrol ediyordu (`for (let j = 0; i < ...; i++)`) — üç parça aynı değişken üzerinde olmalıydı.
  2. Artış kısmı `j` yerine `i`'yi artırıyordu, `j` hiç değişmiyordu.
  3. Karşılaştırma `j + i` yapıyordu — bubble sort komşu elemanı karşılaştırmalı, yani her zaman `j + 1`; `i`'ye bağlı olmamalı.
  - İlginç olan: Görev 12'de aynı bubble sort'u ilk seferde **doğru** yazdım. Yani kavramı biliyordum, Görev 11'deki tamamen dikkat/yazım hatasıydı. Hatayı bulmak için iki bubble sort'u yan yana koyup farkı görmek işe yaradı.
- Genel olarak metod tarafı akıcıydı; asıl zorlanma döngülü (elle yazılan) bubble sort'ta oldu — metodlar zaten bu tür hataları görünmez kıldığı için bugünün "döngü yerine metod" temasını da somut olarak yaşamış oldum.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

Altı metodun rolünü ve döngü karşılıklarını rahatça anlatabiliyorum. `map` vs `filter` doğrulamasındaki referans/stringify ayrımını da kavradım. Tek pürüzlü nokta elle bubble sort yazımıydı, o da kavram değil dikkat hatasıydı.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- 15 alıştırmanın kodu tarafımdan yazıldı; kod verilmedi, sadece hata sonrası ipucu alındı.
- Evet, yazdığım her satırı açıklayabiliyorum.

## Yarına not

-