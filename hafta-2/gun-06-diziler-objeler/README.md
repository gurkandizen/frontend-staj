# Gün 06 — Diziler ve objeler

`Program: Gün 6`

## Görev

Array/object oluşturma, erişim, iç içe yapılar. Gerçekçi veri (kullanıcı listesi, ürün kataloğu) üzerinde çalışma.

## Beklenen çıktı

Veri yapısı alıştırmaları (en az 10 senaryo).

## Durum

- [x] Tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-06.md`](../../gunluk-notlar/gun-06.md)

## Bu klasörde ne var?

- `package.json` — ESM modül desteğini açar (`"type": "module"`)
- `veri/menu.js` — kafe menü verisi (kategori, fiyat, stok, etiketler, varyantlar); ayrıca `kategoriler` yardımcı listesi
- `veri/kullanicilar.js` — kullanıcı listesi (iletişim, adres, sipariş geçmişi); `u-04` kasten eksik `iletisim` alanıyla bırakıldı
- `alistirmalar/01-dizi-temelleri.js` — senaryo 1-2: indeksle erişim, olmayan indeks, `slice` vs `splice`
- `alistirmalar/02-obje-temelleri.js` — senaryo 3-4: üç erişim yöntemi, ekleme/güncelleme/silme, `in` kontrolü, `delete` vs `undefined` ataması
- `alistirmalar/03-ic-ice-yapilar.js` — senaryo 5-7: iç içe zincirleme erişim, opsiyonel zincirleme (`?.`), iç içe döngüyle toplam hesaplama
- `alistirmalar/04-donusturme-sorgulama.js` — senaryo 8-9: `filter`/`map`/`reduce` zincirleme, `sort()` tuzağı ve mutasyon
- `alistirmalar/05-referans-destructuring.js` — senaryo 10-11: referans mantığı (atama/yüzeysel/derin kopya), destructuring ve rest