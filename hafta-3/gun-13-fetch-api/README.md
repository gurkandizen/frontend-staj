# Gün 13 — Fetch ve API tüketimi

`Program: Gün 13`

## Görev

fetch, JSON parse, HTTP durum kodları, loading/hata yönetimi. Halka açık bir API ile çalışma (ör. JSONPlaceholder).

## Beklenen çıktı

API'den veri çekip listeleyen sayfa (yükleniyor + hata durumları dahil).

## Durum

- [x] Tamamlandı (izole alıştırmalar — bu gün için proje uygulaması istenmedi)
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-13.md`](../../gunluk-notlar/gun-13.md)

## Bu klasörde ne var?

- `01-temel-fetch.js` — temel fetch, `.then/.catch` ve `async/await` ile aynı isteği iki yazımla yapma, `Promise.all` ile paralel çekme
- `02-durum-kodlari.js` — var olan ve olmayan id ile `response.status` / `response.ok` karşılaştırması, hata içeriğinin (`{}`) gözlemlenmesi
- `03-hata-yonetimi.js` — `response.ok` false olduğunda `throw new Error(...)` ile gerçek hata üretme, iç içe `try/catch`'te hatanın yutulmaması için `throw hata;` ile yeniden fırlatma
- `04-liste-cekme-html.html` + `04-liste-cekme-html.js` — günün asıl çıktısı: JSONPlaceholder'dan kullanıcı listesi çeken gerçek sayfa; veri katmanı (`kullanicilariGetir`) ve gösterim katmanı (`sayfayiYukle`) ayrımı, loading/success/error durumlarının DOM'da yönetilmesi

## Öne çıkan öğrenme

Bir fonksiyonun içindeki `catch` bloğu hatayı sadece loglayıp yeniden fırlatmazsa, o fonksiyonun döndürdüğü Promise `undefined` ile resolve olur ve dışarıdaki `.catch` hiç tetiklenmez — bunu `throw hata;` eklemeden önce/sonra çıktıyı karşılaştırarak canlı gözlemledim.
