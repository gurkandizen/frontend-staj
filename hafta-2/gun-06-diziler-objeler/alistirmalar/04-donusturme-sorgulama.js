import { menu } from '../veri/menu.js';

const stoktakiler = menu.filter(stokVar => stokVar.stokta === true);
console.log(stoktakiler);
console.log(`${menu.length} üründen ${stoktakiler.length} tane ürün stokta`);

const adlar = menu.map(urun => ({ ad: urun.ad, tabanFiyat: urun.tabanFiyat }));
console.log(adlar);
console.log(adlar.length);

const toplamFiyat = menu.reduce((toplam, urun) => toplam + urun.tabanFiyat , 0);
console.log(`Reduce ile toplam fiyat: ${toplamFiyat}`);


const birlesim = menu.filter(stok => stok.stokta).map(b => ({ ad: b.ad, tabanFiyat: b.tabanFiyat })).reduce((toplam, b) => toplam + b.tabanFiyat , 0);
console.log("Stoktaki ürünlerin toplam taban fiyatı:", birlesim);

/*
  === METHOD CHAINING (ZİNCİRLEME) VS AYRI YAZIM ===

  1. Method Chaining (.filter().map().reduce()):
     - Avantajı:
       * Bellek dostudur; gereksiz ara değişkenler/diziler oluşturmaz.
       * Kod daha kısa, temiz ve okuması kolaydır (tek bir işlem hattı oluşturur).
       * Değişken kirliliğini önler.
     - Dezavantajı:
       * Hata aldığında debugging (hata ayıklama) yapmak daha zordur.
       * Filtrelenmiş veya haritalanmış ara verilere başka bir yerde tekrar erişilemez.

  2. Ayrı Değişkenlerle Yazım:
     - Avantajı:
       * Her adımı `console.log` ile kolayca kontrol edebilirsin.
       * Ara dizileri (örneğin sadece stoktakileri) uygulamanın başka yerinde tekrar kullanabilirsin.
     - Dezavantajı:
       * Bellekte fazladan geçici diziler tutulur ve kod kalabalığı oluşur.

  Özet: Ara adımların çıktısına tekrar ihtiyacın yoksa zincirleme yöntem en iyi pratiktir.
*/


// SENARYO - 9
const siralanmamisOzet = menu.map(urun => ({
  ad: urun.ad,
  tabanFiyat: urun.tabanFiyat
}));

console.log("Sıralamadan önceki menü:", siralanmamisOzet);

siralanmamisOzet.sort();
console.log("Varsayılan .sort() sonucu:", siralanmamisOzet);

const fiyatlar = menu.map(u => u.tabanFiyat);

// Karşılaştırıcı VERMEDEN sıralayalım
const hataliSiraliFiyatlar = fiyatlar.sort();

console.log("Orijinal Sayılar:", fiyatlar);
console.log("Karşılaştırıcısız .sort():", hataliSiraliFiyatlar);
/*
  === İKİ FARKLI DEFAULT .SORT() DAVRANIŞI ===

  1. Obje Dizilerinde:
     - Obje metne çevrilince "[object Object]" olur.
     - Tüm objeler aynı metne dönüştüğü için varsayılan .sort() SıRAYI DEĞİŞTİRMEZ.

  2. Düz Sayı Dizilerinde ([140, 95]):
     - Sayılar metne çevrilir: "140" ve "95".
     - Karakter bazlı bakıldığı için "1" < "9" olur ve "140", "95"'ten küçük kabul edilir.
     - Sonuç hatalı sıralanır: [140, 95]
*/

const sortSiralama = menu.map(urun => ({ ad: urun.ad, tabanFiyat: urun.tabanFiyat })).sort((a, b) => a.tabanFiyat - b.tabanFiyat);
console.log("Fiyata göre küçükten büyüğe:", sortSiralama);

// 1. Sıralamadan önce menu dizisinin İLK elemanını bastıralım
console.log("Sıralamadan ÖNCE menu[0]:", menu[0].ad, menu[0].tabanFiyat);

// 2. Doğrudan orijinal menu dizisini sıralayalım (Mutasyon gerçekleşiyor!)
menu.sort((a, b) => a.tabanFiyat - b.tabanFiyat);

// 3. Sıralamadan sonra tekrar menu dizisinin İLK elemanını bastıralım
console.log("Sıralamadan SONRA menu[0]:", menu[0].ad, menu[0].tabanFiyat);

/*
  === GÖZLEM VE KONTROL ===

  Sıralamadan önce ve sonra menu[0] değerleri FARKLI çıktı!
  
  Çünkü .sort() metodu MUTASYON YAPAN (orijinal diziyi doğrudan değiştiren) bir metottur.
  Çalıştığı zaman hafızadaki (memory) orijinal dizinin eleman sırasını kalıcı olarak değiştirir.

  === ORİJİNAL DİZİYİ BOZMADAN SIRALAMA YÖNTEMLERİ ===

  Orijinal 'menu' dizisini koruyarak sıralanmış bir kopya elde etmek için önce kopyasını almalıyız:

  1. Yayma (Spread) Operatörü ile (...):
     const siraliMenu = [...menu].sort((a, b) => a.tabanFiyat - b.tabanFiyat);

  2. Parametresiz .slice() ile:
     const siraliMenu = menu.slice().sort((a, b) => a.tabanFiyat - b.tabanFiyat);

  3. Modern JavaScript (ES2023) .toSorted() metodu ile:
     const siraliMenu = menu.toSorted((a, b) => a.tabanFiyat - b.tabanFiyat);
     (toSorted metodu orijinal diziyi değiştirmeden geriye sıralanmış yeni bir dizi döndürür.)
*/