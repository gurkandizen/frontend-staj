# Gün 10 — Mini Proje: Vanilla JS Todo

`Program: Gün 10`

## Görev

Ekle / sil / tamamla / filtrele özellikli todo uygulaması. localStorage ile kalıcılık.

## Beklenen çıktı

Çalışan todo uygulaması, GitHub'da ayrı repo + README.

## Durum

- [x] Tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-10.md`](../../gunluk-notlar/gun-10.md)

## Kod nerede?

Bu, program tarafından açıkça **ayrı repo** olarak tanımlanmış bir milestone proje — 1326 Bursa'nın aksine (sürekli devam eden ana proje), bu tek seferlik, bağımsız bir teslim:

👉 **[`vanilla-todo-app`](https://github.com/gurkandizen/vanilla-todo-app)**

## Bu günün özeti

- Tasarım [Stitch](https://stitch.withgoogle.com) ile üretildi (kendi promptumla).
- Modüler JS mimarisi: `storage.js` (localStorage), `render.js` (DOM üretimi), `todo.js` (iş mantığı + event delegation), `main.js` (giriş noktası).
- Event delegation, `closest()`, `dataset` kullanımı — Gün 9'un doğrudan tekrarı ve pekiştirilmesi.
- Yeni: `localStorage`, `JSON.stringify`/`parse`, BEM isimlendirme kuralı.