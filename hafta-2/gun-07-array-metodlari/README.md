# Gün 07 — Array Metodları

`Program: Gün 7`

## Görev

map, filter, reduce, find, sort, some/every. Döngü yerine metod kullanma alışkanlığı.

## Beklenen çıktı

15 alıştırma; her birinde hem döngülü hem metodlu çözüm karşılaştırması.

## Durum

- [x] Tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-07.md`](../../gunluk-notlar/gun-07.md)

## Bu klasörde ne var?

- `alistirmalar/01-map-filter.js` — görev 1-5: `map` ve `filter` (büyük harfe çevirme, stok süzme, KDV'li fiyat, rol süzme, zincirleme filter+map)
- `alistirmalar/02-reduce-find.js` — görev 6-10: `reduce` (toplam, kategoriye göre gruplama) ve `find` (id ile, ilk sipariş > 200, siparişsiz kullanıcı)
- `alistirmalar/03-sort-some-every.js` — görev 11-15: `sort` vs elle bubble sort (fiyata/sipariş sayısına göre), `some`, `every`

> Not: Veri dosyaları (`menu.js`, `kullanicilar.js`) Gün 6'dan tekrar kullanıldı — bu klasörde kopyaları yok, `../../gun-06-diziler-objeler/veri/` yolundan import ediliyor. Her alıştırmada döngülü ve metodlu çözümün aynı sonucu verdiği bir doğrulama satırıyla (`===` ya da `JSON.stringify`) kontrol edildi.