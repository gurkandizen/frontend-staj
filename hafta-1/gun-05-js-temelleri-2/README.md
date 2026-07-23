# Gün 05 — JavaScript Temelleri II + Hafta Değerlendirmesi

`Program: Gün 5`

## Görev

Döngüler, fonksiyonlar, scope. FizzBuzz ve benzeri 10 kata. Mentorla 30 dk haftalık değerlendirme.

## Beklenen çıktı

10 kata çözümü + haftalık öz değerlendirme notu.

## Durum

- [x] 10 kata tamamlandı
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-05.md`](../../gunluk-notlar/gun-05.md)

## Bu klasörde ne var?

`katalar/` altında 5 dosya, her birinde 2 kata — toplam 10. Hepsi 1326 Bursa projesinin gerçek ihtiyaçlarına (menü listesi, masa/stok kapasitesi, rezervasyon tutarı, doğrulama, FizzBuzz'ın masa numarası uyarlaması) bağlı.

**`01-donguler.js`**
- *Kata 1 — `for` döngüsü:* Menü ürünlerini array'den sırayla, numaralandırarak listeleme.
- *Kata 2 — `while` döngüsü:* Art arda gelen rezervasyon taleplerini, kalan kapasiteye göre kabul/red ederek işleme; ayrıca stok senaryosuyla iki şartlı (`&&`) `while` denemesi.

**`02-fonksiyonlar-temel.js`**
- *Kata 3 — Klasik `function`:* Parametresiz tanıtım fonksiyonu; parametre alıp `return` eden rezervasyon tutarı hesaplama fonksiyonu.
- *Kata 4 — Arrow function:* Aynı işlerin arrow function karşılığı, örtük dönüş (implicit return) dahil; `function` ile arrow arasında ne zaman hangisinin tercih edileceği üzerine tartışma.

**`03-fonksiyonlar-ileri.js`**
- *Kata 5 — Varsayılan parametre değeri:* Kişi sayısı verilmezse varsayılan 2 kabul edilmesi; `0` ile "hiç değer yok" durumunun farklı davrandığının test edilmesi.
- *Kata 6 — Fonksiyonlar birbirini çağırıyor:* `rezervasyonIsle` fonksiyonunun, işini yapmadan önce `kisiSayisiGecerliMi` fonksiyonuna danışması; ikisinin birleşerek tutarlı bir onay/red mesajı üretmesi.

**`04-scope.js`**
- *Kata 7 — Blok scope:* `let`/`const` ile tanımlanan bir değişkenin `{ }` dışından görünmediğinin (`ReferenceError`) doğrulanması; `var`'ın aynı durumda bloğu görmezden gelip dışarı sızdığının gösterilmesi.
- *Kata 8 — Fonksiyon scope + birleştirme:* Fonksiyon içinden dışarıyı görebilme, dışarıdan içeriyi görememe; son adımda döngü + fonksiyon + koşul + scope'un tek bir "rezervasyon işleme hattında" birleştirilmesi.

**`05-fizzbuzz-katalari.js`**
- *Kata 9 — Klasik FizzBuzz:* 1-20 arası, 3'e/5'e/ikisine bölünenler için Fizz/Buzz/FizzBuzz; koşul sıralamasının (önce "ikisine birden") neden kritik olduğu.
- *Kata 10 — Masa numarası uyarlaması:* Aynı mantığın "İkram Masası / Sessiz Çalışma Masası / Kavurma Günü Masası" senaryosuna taşınması, her satırda masa numarasının da gösterilmesi.

## İleriye not

- Bugünkü fonksiyonlar (`kisiSayisiGecerliMi`, `rezervasyonIsle`) Gün 8-9'da DOM'a bağlanacak.
- `for` ile array gezme mantığı (Kata 1), ileride menü/ürün listelerini sayfaya basarken (DOM) doğrudan kullanılacak.

## AI kullanımı — şeffaflık notu

Kata'nın ne olduğunu ve senoryalarını araştırmada kullandım. Aynı zamanda FizzBuzz'ın da ne olduğunu hiç duymamıştım ve yazılım dünyasında bilindik bir şey olduğunu da bilmiyordum bunları araştırdım ve uyguladım.