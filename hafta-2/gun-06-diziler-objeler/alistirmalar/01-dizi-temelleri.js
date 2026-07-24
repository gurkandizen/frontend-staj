import {menu} from '../veri/menu.js';

// console.log(menu[0].ad); // dizinin ilk elemanı alındı
// console.log(menu[menu.length - 1]); // dizinin sol elemanı length ile çıkarıldı
// console.log(menu.at(-1)); // dizinin son elemanı at() ile çıkarıldı
// console.log(menu[50]); // dizide olmayan bir değer girildi ve undefined değer döndürdü


console.log(menu.length);

const ucBes = menu.slice(3, 5);
console.log(ucBes);

console.log("İşlem sonrası menü uzunluğu:", menu.length); // Adım 1'deki değerle TAMAMEN AYNI. Çünkü slice() metodu orijinal diziyi değiştirmez (mutate etmez).

const cikarilanUrunler = menu.splice(7, 9);
console.log(cikarilanUrunler);

console.log(`SPLİCE Sonrası menü uzunluğu: ${menu.length}`);    // splice(), slice()'ın aksine orijinal diziyi değiştirir (mutate eder).

/*
  ========================================================================
  SLICE VS SPLICE UZUNLUK KONTROLÜ VE MUTASYON DEĞERLENDİRMESİ
  ========================================================================

  1. slice() Sonrası Orijinal Dizi Uzunluğu:
     - Adım 1'deki değerle BİREBİR AYNI kaldı.
     - Neden Değişmedi? 
       .slice() saf (pure) ve mutasyon yapmayan (non-mutating) bir metottur. 
       Orijinal dizinin belirlenen aralığındaki elemanları okur, bellek üzerinde 
       tamamen YENİ bir dizi oluşturup döndürür. Orijinal 'menu' dizisine dokunmaz.

  2. splice() Sonrası Orijinal Dizi Uzunluğu:
     - Adım 1'deki değerden FARKLI (çıkarılan eleman sayısı kadar küçüldü).
     - Neden Değişti? 
       .splice() mutasyon yapan (mutating) bir metottur. Doğrudan orijinal dizinin
       bellekteki alanına müdahale ederek elemanları dizinin içinden söker/keser. 
       Geriye çıkarılan elemanları döndürür, ancak orijinal diziyi kalıcı olarak değiştirir.

  ------------------------------------------------------------------------
  ÜRETİM (PRODUCTION) ORTAMINDA KARIŞTIRILIRSA OLUŞACAK TEHLİKELER:
  ------------------------------------------------------------------------
  Eğer sayfada sadece ilk 3 ürünü göstermek (örneğin "Öne Çıkan Ürünler" widget'ı) 
  için yanlışlıkla 'menu.splice(0, 3)' kullanılırsa:

  * Gerçekleşen Hata: 
    Menü dizisinden o 3 ürün kalıcı olarak sökülüp alınır. Sayfadaki ana menü 
    veya sepet bileşeni 'menu' dizisini okumaya çalıştığında, o 3 ürünün 
    katalogdan tamamen YOK OLDUĞUNU görür.

  * Sonuç: 
    Kullanıcılar canlı sitede ürünlerin bir kısmını göremez, sipariş veremez ve 
    veri tabanı güncellenmese bile ön yüzdeki (frontend) uygulama state'i bozularak 
    kataloğun yanlışlıkla küçülmesine yol açar.

  Özet: Sadece belli bir aralığı kopyalayıp almak için SLICE; orijinal diziyi 
  düzenlemek/silmek/değiştirmek için SPLICE kullanılmalıdır.
  ========================================================================
*/