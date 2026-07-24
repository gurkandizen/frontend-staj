const hedefUrun = menu[1];
console.log(hedefUrun.ad);

const hedefUrun2 = menu.find(urun => urun.ad === "Flat White");
console.log(hedefUrun2.ad);

console.log(hedefUrun["ad"]);

const urunAdi = "ad";
console.log(hedefUrun[urunAdi]); 
// Nokta gösterimi bir değişkenin içeriğini okuyamaz çünkü nokta gösteriminde yazdığın kelime her zaman harfi harfine bir anahtar adı sayılır, asla bir değişkenin içeriği olarak okunmaz. hedefUrun.urunAdi yazarsan JS objede "urunAdi" diye bir anahtar arar — "ad" diye değil.)

console.log( hedefUrun.ad === hedefUrun["ad"]);

hedefUrun.kampanyali = true;
console.log("kampanyali" in hedefUrun);

console.log("Eski fiyat:" + hedefUrun.tabanFiyat);
hedefUrun.tabanFiyat = 180;
console.log("Yeni Fiyat:" + hedefUrun.tabanFiyat);

delete hedefUrun.kampanyali;
console.log("kampanyali" in hedefUrun);

console.log(hedefUrun.kampanyali === undefined);
hedefUrun.testAlani = undefined;

console.log("=== undefined kontrolü:", hedefUrun.testAlani === undefined); // true
console.log("'in' operatörü kontrolü:", "testAlani" in hedefUrun);

/*
  === DELETE vs UNDEFINED ATAMA FARKILILIĞI ===
  
  1. 'delete' Kullanımı:
     Anahtarı (property) ve değerini objeden FİZİKSEL OLARAK TAMAMEN SİLER.
     Obje üzerinde 'in' operatörü ile arama yapıldığında 'false' döner, 
     çünkü o anahtar etiketi artık bellekte ve objede yoktur.

  2. 'undefined' Ataması:
     Anahtarı objeden silmez; sadece değerini "tanımsız/boş" olarak günceller.
     Anahtar objede HÂLÂ VARDIR. Bu yüzden 'in' operatörü ile aratıldığında 
     'true' döner, fakat değeri okumak istediğimizde 'undefined' elde ederiz.

  Özetle: 'delete' evdeki odayı yıkıp yok eder; 'undefined' ataması ise 
  odanın kapısını ve tabelasını yerinde bırakıp içini tamamen boşaltır.
*/