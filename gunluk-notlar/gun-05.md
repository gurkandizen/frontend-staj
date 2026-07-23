# Gün 05 — JavaScript Temelleri II + Hafta Değerlendirmesi

**Tarih:** 23 / 07 / 2026

## Bugün ne öğrendim?

- **`for` vs `while`:** `for`, kaç tur döneceğini baştan bildiğimde (array uzunluğu gibi); `while`, bir koşul sağlanana kadar (kaç tur süreceğini bilmeden) devam ettiğimde kullanılıyor. `while`'da sayaç artırmayı elle yapmak gerekiyor — unutulursa sonsuz döngü.
- **`while` koşulu her turun BAŞINDA kontrol edilir:** Bir tur "onaylandıktan" sonra içeride değerler değişip koşulu artık sağlamasa bile, o tur zaten çalışmaya devam eder; bir sonraki tur başlamadan önce yeniden kontrol edilir.
- **`function` vs arrow function:** İkisi de aynı işi yapabiliyor, çağrılma şekilleri aynı (`isim()`), ama tanımlanma şekilleri farklı. Arrow function'da tek satırlık işlemlerde `{ }` ve `return` atlanabiliyor (örtük dönüş). Kısa/basit hesaplarda arrow, daha uzun/çok adımlı mantıkta `function` tercih edilebiliyor — kesin bir kural değil, yaygın bir alışkanlık.
- **`return` ile `console.log` farklı şeyler yapar:** `return`, bir değeri fonksiyonu çağıran yere geri gönderir, ekrana yazmaz. Bir fonksiyonu `console.log(fonksiyon())` diye sarmak, sadece fonksiyon gerçekten `return` ediyorsa anlamlı; fonksiyonun içinde zaten `console.log` varsa, dıştan bir daha sarmak `undefined` yazdırır.
- **Varsayılan parametre değeri (`param = deger`):** Sadece parametre hiç verilmediğinde (`undefined` olduğunda) devreye giriyor; `0` gibi geçerli bir değer verildiğinde devreye girmiyor.
- **Fonksiyonlar birbirini çağırabilir:** Bir fonksiyon, işini yapmadan önce başka (daha küçük, tek işi olan) bir fonksiyona danışıp sonucuna göre karar verebiliyor. Küçük, tek görevli fonksiyonları birleştirerek daha büyük bir mantık kurmak mümkün.
- **Blok scope (`let`/`const`) vs fonksiyon scope kuralları:** `let`/`const`, sadece tanımlandıkları `{ }` içinde yaşıyor — dışarıdan erişilmeye çalışılırsa `ReferenceError`. `var` ise blokları görmezden gelip dışarı "sızıyor" — bu yüzden modern JavaScript'te tercih edilmiyor. Fonksiyonlarda ise: içeriden dışarıdaki değişkene erişilebiliyor, ama dışarıdan içerideki değişkene erişilemiyor.
- **`%` (modulo) operatörü:** Bölmenin kalanını verir. Bir sayının başka bir sayıya tam bölünüp bölünmediğini (`sayi % bolen === 0`) test etmenin standart yolu.
- **Koşul sıralamasının önemi (FizzBuzz):** `if/else if` zincirinde ilk doğru bulunan koşul çalışır, sonrakiler hiç kontrol edilmez. Bu yüzden en özel/dar durumu (iki koşulun kesişimi) en başa yazmak gerekiyor, yoksa daha genel bir koşul onu "yakalayıp" yanlış sonuç verir.

## Nerede takıldım?

**1. Gereksiz ara değişken açma alışkanlığı.** Bir sonucu doğrudan güncellemek yerine (`kalanKapasite -= x`), sık sık yeni bir isim altında ayrı bir değişken açma eğilimindeydim (`newSayi`, `guncelKapasite` gibi). Bu hem gereksiz hem de scope hatalarına yol açtı — özellikle bir `if` bloğunun içinde tanımlanan yeni bir değişkene `else` bloğundan erişmeye çalışınca `ReferenceError` aldım. Ders: yeni bir isim açmadan önce "zaten var olan bir değişkeni mi güncellemem gerekiyor" diye sormak gerekiyor.

**2. Fonksiyonu tanımlamak ile çağırmak farklı şeyler — bunu iki kere unuttum.** Bir kere `console.log(fonksiyon())` diye yanlış sararak `undefined` çıktısı aldım; bir kere de fonksiyonu hiç çağırmadan (`fonksiyon();` satırını unutarak) içindeki kodun hiç çalışmadığını fark etmeden ilerledim. İkisi de aynı kök sorunun (tanımlama ≠ çalıştırma) farklı görünümleriydi.

**3. `while` koşulunda birden fazla şart kurarken, veri setinin o davranışı gerçekten tetikleyip tetiklemediğini kontrol etmedim.** İki şartlı (`&&`) bir `while` yazdım ama seçtiğim sayılarla "erken durma" senaryosu hiç gerçekleşmedi — kod doğruydu ama test verim, asıl öğrenmek istediğim davranışı göstermedi. Daha küçük bir başlangıç değeriyle tekrar denemem gerektiğini gördüm.

**4. Aynı hatayı art arda yapma eğilimi.** FizzBuzz'ın masa numarası uyarlamasında, önceki adımda özellikle istenen bir detayı (her satırda masa numarasının gösterilmesi) ilk seferde atladım — büyük ölçekli bir kod yazarken, bir önceki talimatın tamamını karşılayıp karşılamadığımı son bir kez gözden geçirmem gerekiyor.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** [x] Evet · ☐ Hayır

- **Evet** → konu oturmuş, ilerle. İstersen aynı gün bir sonraki konuya geç.
- **Hayır** → gün "bitti" sayılır ama ertesi sabah 15-20 dk bu konuya geri dön.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

Kata'nın ne olduğunu ve senoryalarını planlamada kullandım.

## Yarına not

- Haftalık öz değerlendirme notunu mentörle görüşmeden önce doldur (`degerlendirme/haftalik-oz-degerlendirme.md`, Hafta 1 bölümü).
- Mentörle 30 dk görüşmede özellikle "nerede takıldım" bölümündeki 4 maddeyi anlat — bunlar gerçek öğrenme anlarıydı, ezberlenmiş bilgi değil.
- Gün 6'da (diziler ve objeler) bugünün array kullanımı (`talepler[index]`, `.length`) doğal bir devam noktası olacak.