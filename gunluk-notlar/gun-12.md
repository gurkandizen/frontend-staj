# Gün 12 — Asenkron JavaScript

**Tarih:** 14 / 08 / 2026

## Bugün ne öğrendim?

- **Senkron vs Asenkron:** işlerin sırayla bekleyerek mi, yoksa beklemeden devam edip sonucu sonradan haber vererek mi yapıldığı; JS'in tek iş parçacıklı (single-threaded) doğası, uzun süren işlerin arka plana alınıp Event Loop ile geri sıraya sokulması.
- **Callback ve callback cehennemi:** işin bitince çağrılacak fonksiyonu önceden teslim etme; birden fazla adımı callback'lerle iç içe yazınca ortaya çıkan "piramit" yapısının okunabilirlik, bakım ve hata yönetimi sorunları.
- **Promise:** `new Promise(resolve, reject)`, üç hali (pending/fulfilled/rejected), `.then()`/`.catch()` ile sonucu yakalama, zincirleme (`.then().then().then()`) ile callback cehennemini düzleştirme, tek `.catch()`'in zincirdeki her adımı kapsaması.
- **async/await:** Promise'in üzerine kurulu, senkron gibi okunan yazım biçimi; `await`'in sadece `async` fonksiyon içinde çalıştığı; `async` fonksiyonun her zaman Promise döndürdüğü.
- **try/catch:** genel hata yakalama mekanizması; `await` edilen bir Promise reddedilirse `catch` bloğuna düşmesi; `try` bloğunda hata olan satırdan sonrasının hiç çalışmaması; `finally` ile her durumda çalışan temizlik bloğu.
- **console.time/console.timeEnd:** iki nokta arası geçen süreyi ölçen hazır Node/tarayıcı aracı.
- **Promise.all:** birden fazla asenkron işlemi paralel başlatıp hepsini birden bekleme; sıralı çalıştırmaya kıyasla süre farkını bizzat ölçerek gördüm (sıralı ~4.5sn, paralel ~1.5sn — üç kata yakın fark).

## Nerede takıldım?

- **`callback()` çağrısını unutma:** İlk dosyada `adim1`/`adim2` fonksiyonlarında `callback()`'i çağırmayı unuttum — hiçbir hata mesajı çıkmadı, sadece zincirin geri kalanı sessizce hiç çalışmadı. Callback cehenneminin "hataya davetiye çıkarma" sorununu canlı yaşadım.
- **`adimlar()` sarmalayıcısının hiçbir şey döndürmemesi:** Promise zincirleme alıştırmasında, üç adım fonksiyonunu gereksiz bir `adimlar()` fonksiyonunun içine gömmüştüm; bu hem fonksiyonun `undefined` dönmesine (return unutulmuş) hem de iç fonksiyonların dışarıdan erişilememesine (scope hatası, Gün 10'daki `initTodoApp` hatasının aynısı) yol açtı.
- **Değişken adı ile fonksiyon adının çakışması:** async/await alıştırmasında, sonuçları tutan değişkenlere fonksiyonlarla (`adim1`, `adim2`, `adim3`) aynı ismi verdim — `const adim1 = await adim1();` gibi bir satır, JS'in "kendi kendini tanımlamaya çalışma" hatasına (`Cannot access before initialization`) yol açtı.
- **Top-level await hatası:** `await`'i bir `async` fonksiyonun dışında, dosyanın en üst seviyesinde kullanmaya çalıştım — Node bunu senkron script'lerde kabul etmiyor, `async` bir fonksiyonun içine alınması gerekti.
- **`Promise.all`'a yanlış veri verme:** `console.log(sahteVeriGetir(true))` gibi ifadeleri diziye verdim — `console.log`'un dönüş değeri her zaman `undefined` olduğu için, `Promise.all`'a üç Promise yerine üç `undefined` göndermiş oldum.
- **Test senaryolarını eksik kapsama:** Birkaç kez (async/await ve .then/.catch alıştırmalarında) sadece başarı ya da sadece hata senaryosunu test edip diğerini atladım; parametreyi sabit değer yerine gerçekten kullanmam gerektiğini fark ettim.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

Aynı senaryoyu (adım adım ilerleyen bir süreç) callback → Promise → async/await olarak üç kez yeniden yazınca, hangi yazım biçiminin neden tercih edildiğini ezbersiz kavradım. Promise.all/sıralı karşılaştırmasını gerçek süre ölçümüyle (console.time) gözlemlemek, "paralel çalıştırma neden daha hızlı" sorusuna somut bir kanıt verdi.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- Kavram anlatımı (senkron/asenkron, callback, Promise, async/await, try/catch, setTimeout senaryoları) PDF olarak hazırlandı.

## Yarına not

- Gün 13 (Fetch ve API tüketimi), bugün öğrenilen async/await'i gerçek bir sunucu isteğinde kullanacak — bugünkü "sahte API" alıştırması buna doğrudan hazırlık oldu.