# Gün 08 — DOM I: Seçme ve manipülasyon

`Program: Gün 8`

## Görev

querySelector, textContent/innerHTML, classList, createElement. Statik sayfayı JS ile canlandırma.

## Beklenen çıktı

Sekmeli (tabs) etkileşimli arayüz.

## Durum

- [x] Tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-08.md`](../../gunluk-notlar/gun-08.md)

## Bu klasörde ne var?

- `index.html` — menü bölümü sekmeli yapıya çevrildi (`menu-tabs`, `menu-panel`, `data-tab`/`data-panel`/`data-items` nitelikleri); statik ürünler kaldırılıp JS'in dolduracağı boş konteynerler bırakıldı
- `style.css` — sekme stilleri (aktif sekme alt çizgisi, panel geçiş animasyonu), mobilde yatay kaydırılabilir sekme şeridi, `overscroll-behavior-x: contain` ile scroll chaining düzeltmesi, kenar gradyanları
- `js/main.js` — giriş noktası; `renderMenu()` ve `initTabs()`'ı sırayla çağırır
- `js/tabs.js` — sekme geçiş mantığı, tıklanan sekmeyi görünür alana kaydırma (`scrollIntoView`), kaydırma durumuna göre gradyan sınıfı yönetimi
- `js/menu-render.js` — `menuData`'dan `createElement` ile ürün elementleri üretip panellere basan `renderMenu()`
- `veri-js/menu-data.js` — 1326 Bursa'nın gerçek menü verisi (4 kategori, kategori→ürün dizisi yapısında)

> Not: Gün 6/7'deki uydurma veri (`kullanicilar.js`/`menu.js`) bu günden itibaren kullanılmıyor — artık gerçek proje verisiyle çalışılıyor. Menü verisine yeni ürün eklendiğinde sayfa otomatik güncelleniyor (HTML'e dokunmadan).