# Gün 12 — Asenkron JavaScript

`Program: Gün 12`

## Görev

Callback sorunu, Promise, async/await, hata yakalama (try/catch).

## Beklenen çıktı

Promise/async alıştırmaları; setTimeout tabanlı senaryolar.

## Durum

- [x] Tamamlandı (izole alıştırmalar — bu gün için proje uygulaması istenmedi)
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-12.md`](../../gunluk-notlar/gun-12.md)

## Bu klasörde ne var?

Bu gün, Gün 6-7 tarzında tamamen izole alıştırmalardan oluşuyor — herhangi bir projeye (1326 Bursa, vanilla-todo-app) uygulama yapılmadı.

- `01-callback-sorunu.js` — temel callback, parametreli callback, bilerek kurulan "callback cehennemi" örneği
- `02-promise-temelleri.js` — `new Promise`, `resolve`/`reject`, `.then`/`.catch`, üç halin (pending/fulfilled/rejected) gözlemlenmesi
- `03-promise-zincirleme.js` — 01'deki callback cehennemi örneğinin Promise zincirine çevrilmesi
- `04-async-await.js` — aynı senaryonun `async/await` + `try/catch` ile üçüncü kez yazılması, hata senaryosunun `try/catch` ile yakalanması
- `05-sahte-api-senaryolari.js` — `setTimeout` + `Promise` ile sahte API simülasyonu, `Promise.all` ile sıralı/paralel çalışma süresi karşılaştırması (ölçülü kanıt: ~4.5sn vs ~1.5sn)

## Öne çıkan öğrenme

Aynı senaryo (adım adım ilerleyen bir süreç) üç farklı yazım biçimiyle (callback → Promise → async/await) tekrar tekrar yazıldı — bu, hangi yazım biçiminin neden tercih edildiğini ezbersiz, karşılaştırarak kavramayı sağladı.