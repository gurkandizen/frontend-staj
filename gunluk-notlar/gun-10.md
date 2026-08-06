# Gün 10 — Mini Proje: Vanilla JS Todo

**Tarih:** 06 / 08 / 2026

## Bugün ne öğrendim?

- **localStorage:** `setItem`/`getItem` ile tarayıcıda kalıcı veri saklama; sadece string sakladığı için `JSON.stringify` (obje/dizi → metin) ve `JSON.parse` (metin → obje/dizi) çiftinin gerekliliği.
- **BEM isimlendirme kuralı:** `blok__eleman` ve `blok__eleman--modifier` deseni; neden çift alt tire kullanıldığı (isim çakışması önleme, iç içe seçiciden kaçınma, sınıf adının kendi kendini açıklaması).
- **Stitch (AI tasarım aracı) ile çalışma:** İngilizce prompt yazma, çıkan Tailwind CSS kodunu okuyup düz CSS'e (kendi custom properties sistemimize) çevirme.
- **Tasarım sistemini CSS değişkenlerine çevirme:** Renk paleti (`:root` içinde) tutarken, tipografi/boşluk/köşe değerlerini düz `px` olarak bırakmanın (aşırı soyutlamadan kaçınma) okunabilirlik açısından daha iyi olduğunu tartıştım ve bu kararı bilinçli verdim.
- **Google Fonts ikon fontu bağlama:** `<link>` etiketinin `font-family` CSS kuralından *ayrı* ve *zorunlu* olduğunu; birini yazıp diğerini unutunca fontun sessizce sistem fontuna düştüğünü (hata vermeden) gördüm.
- **Benzersiz id üretme:** `Date.now()` + `Math.random()` kombinasyonu ile çakışma riskini pratikte sıfırlama.
- **Event delegation'ın ikinci kez, farklı bir bağlamda pekişmesi:** Gün 9'da rezervasyon formunda öğrendiğim deseni, bu sefer görev listesinde (checkbox + silme butonu ayrımı `closest()` ile) tekrar kurdum.
- **Modüler mimaride "state nerede yaşar" kararı:** Bir fonksiyonun (`initTodoApp`) içindeki kodun, o fonksiyonun kullandığı değişkenlerle (`tasks`, `addTask` vb.) *aynı dosyada* olması gerektiğini, aksi halde erişilemeyeceğini derinlemesine anladım.

## Nerede takıldım?

- **`initTodoApp`'ı yanlış dosyaya yazma (iki kez):** İlk seferinde fonksiyonun tüm gövdesini yanlışlıkla `main.js`'e yazdım, ama içindeki `tasks`/`addTask`/`getFilteredTasks` gibi isimler `todo.js`'in export edilmemiş iç değişkenleriydi — erişilemez olduğu için proje hiç çalışmazdı. Düzeltmeye çalışırken ikinci kez, bu sefer `todo.js`'ten `main.js`'e re-export (`export { initTodoApp } from "./main.js"`) yaparak sorunu ters yönde tekrarladım. İkisinde de kök neden aynıydı: bir fonksiyonun kullandığı değişkenlerle aynı modülde durması gerektiğini tam kavramamıştım. Üçüncü denemede gövdeyi gerçekten `todo.js`'e taşıyıp `export` ederek çözdüm.
- **`getfilteredTasks` / `getFilteredTasks` büyük-küçük harf hatası:** JS'in case-sensitive olduğunu bildiğim halde, kopyalarken harfi kaçırdım — sessiz bir "fonksiyon tanımsız" hatasına yol açtı.
- **Kullanılmayan `form` değişkeni ve eksik Enter tuşu desteği:** `.todo-card__input-row`'u bir `<form>` sanıp değişken olarak seçtim ama HTML'de düz bir `<div>`; bu yüzden kullanıcı Enter'a basınca görev eklenmiyor — bilinen, ileride ele alınacak bir eksik olarak bıraktım.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

localStorage + JSON çiftini ve modüler dosyalar arası "kim neye erişebilir" mantığını, yaşadığım hatalar sayesinde çok daha net kavradım — özellikle `initTodoApp` hatasını iki kez farklı şekilde yapıp düzeltmek, "neden orada olması gerektiğini" ezbersiz anlamamı sağladı.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- Tasarım: Stitch'e verdiğim İngilizce prompt bana aitti.

## Yarına not

- Enter tuşuyla görev ekleme desteği eklenmedi, ileride küçük bir iyileştirme olarak eklenebilir.
- Boş durum (empty state — illüstrasyon + "henüz görev yok" mesajı) tasarımı Stitch'te hazırdı ama bu günün kapsamına alınmadı, ileride JS ile "liste boşsa göster" mantığıyla eklenebilir.