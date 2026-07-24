import { kullanicilar } from '../veri/kullanicilar.js'

/*
  ========================================================================
  REFERANS VE KOPYALAMA YÖNTEMLERİ ÖZETİ (A, B/C, D KARŞILAŞTIRMASI)
  ========================================================================

  A) Eşittir (=) ile Atama [Atama / Aynı Referans]:
     - Neden Değişti? 
       Yeni bir obje oluşmaz. 'kopya1' ve 'hedefKullanici' bellekteki TEK VE AYNI
       objeye işaret eden iki ayrı isimdir (adres kopyalanır). Birinde yapılan 
       her değişiklik doğrudan diğerine de yansır.
     - Üst Seviye Alan Korunur mu?  ❌ HAYIR
     - İç İçe (Nested) Alan Korunur mu? ❌ HAYIR

  ------------------------------------------------------------------------

  B & C) Spread Operatörü (...obj) [Yüzeysel Kopya / Shallow Copy]:
     - Neden B ve C Sonuçları Farklı Çıktı?
       Spread operatörü sadece EN ÜST seviyedeki alanları kopyalar ve yeni bir
       obje oluşturur. 
       * B Adımında: 'ad' gibi ilkel (primitive) bir üst seviye alanı kopyaladığı 
         için 'kopya2.ad' değişimi orijinali etkilemedi.
       * C Adımında: 'iletisim' alanı bir iç objedir (nested object). Spread, bu
         iç objeyi derinlemesine klonlamaz; sadece onun bellekteki referansını
         (adresini) yeni objeye aktarır. Bu yüzden 'kopya2.iletisim' ve 
         'hedefKullanici.iletisim' hâlâ aynı iç objeye bakar.
     - Üst Seviye Alan Korunur mu?  YES / EVET
     - İç İçe (Nested) Alan Korunur mu? ❌ HAYIR (Tuzak kısım burasıdır!)

  ------------------------------------------------------------------------

  D) structuredClone() [Derin Kopya / Deep Copy]:
     - Neden Değişmedi?
       Objeyi ve içindeki TÜM iç içe geçmiş objeleri/dizileri (iletişim, siparişler 
       vb.) bellekte tamamen bağımsız yeni adreslerle klonlar. 
       'kopya3.iletisim.telefon' değişse bile orijinal obje kendi bağımsız belleğinde
       dokunulmadan kalır.
     - Üst Seviye Alan Korunur mu?  YES / EVET
     - İç İçe (Nested) Alan Korunur mu? YES / EVET

  ========================================================================
  ÖZET TABLO:
  ------------------------------------------------------------------------
  Yöntem                 | Üst Seviye Korur mu? | İç İçe Alanı Korur mu?
  -----------------------|-----------------------|-----------------------
  1. Eşittir (=)         | ❌ Korumaz            | ❌ Korumaz
  2. Spread ({ ...obj }) | YES Korur             | ❌ Korumaz
  3. structuredClone()   | YES Korur             | YES Korur
  ========================================================================
*/

const hedefId = "u-01";

const kullaniciFind = kullanicilar.find(kullanici => kullanici.id === hedefId);
console.log("Find ile Kullanıcı id:" , kullaniciFind);

const kopya1 = kullaniciFind;
kopya1.rol = "vip";

console.log("Orijinal kullanıcının rolü:", kullaniciFind.rol);

const kopya2 = {...kullaniciFind};
kopya2.ad = "Test Ad"

console.log("Orijinal kullanıcının adı:", kullaniciFind.ad);

kopya2.iletisim.telefon = "0000";
console.log("Orijinal kullanıcının tel no:", kullaniciFind.iletisim.telefon);

const kopya3 = structuredClone(kullaniciFind)
kopya3.iletisim.telefon = "1111";
console.log("Orijinal kullanıcının tel no:", kullaniciFind.iletisim.telefon);

// SENARYO 11
// Tek bir destructuring ifadesi ile alanları alıyoruz
const { 
  ad, 
  rol, 
  iletisim: { eposta },
  sadakatPuani = 0,
  ...kalanlar // Eğer sadakatPuani objede yoksa varsayılan olarak 0 atanır
} = kullaniciFind;

// Değişkenleri bastıralım
console.log("Ad:", ad);
console.log("Rol:", rol);
console.log("E-posta (iç içe alandan çekilen):", eposta);

console.log("Ad:", ad);
console.log("Rol:", rol);
console.log("Sadakat Puanı:", sadakatPuani);

console.log("Ayıklanan Ad:", ad);
console.log("Ayıklanan Rol:", rol);

// kalanlar objesini inceleyelim
console.log("Geriye Kalan Tüm Özellikler (kalanlar):", kalanlar);

/*
  ========================================================================
  REST OPERATÖRÜ VS YAYMA (SPREAD) OPERATÖRÜ FARKILILIĞI
  ========================================================================

  Her iki operatör de görsel olarak üç nokta (...) şeklinde yazılmasına rağmen
  kullanıldıkları yere göre tam ters işlevler görürler:

  1. Rest (Toplayıcı/Sıkıştırıcı) Operatörü:
     - Destructuring (yapı sökme) veya fonksiyon parametreleri tarafında kullanılır.
     - Dağınık veya geriye kalan bağımsız elemanları/anahtarları bir araya getirerek
       TEK BİR PAKET (dizi veya obje) içinde toplar.

  2. Spread / Yayma (Dağıtıcı) Operatörü:
     - Yeni obje/dizi oluştururken veya fonksiyon çağrılarında (argümanlarda) kullanılır.
     - Mevcut paketlenmiş bir objenin veya dizinin İÇİNDEKİ ELEMANLARI DIŞARI ÇIKARIP
       TEK TEK DAĞITIR / YAYAR.

  Özetle: Rest "parçaları tek bir pakette toplar", Spread ise "paketi açıp parçaları etrafa saçar".
  ========================================================================
*/

/*
  ========================================================================
  İÇ İÇE DESTRUCTURING VE REST (...kalanlar) İLİŞKİSİ
  ========================================================================

  Soru: 'iletisim' alanı neden 'kalanlar' objesinde yer almadı?

  Açıklama:
  const { ad, rol, iletisim: { eposta }, ...kalanlar } = hedefKullanici;

  1. Yukarıdaki ifadede 'iletisim' anahtarı destructuring işlemine DAHİL EDİLMİŞTİR.
     JavaScript 'iletisim' anahtarını okumuş ve onun içindeki 'eposta' alanını 
     ayıklamıştır.

  2. Rest operatörü (...kalanlar) ise SADECE destructuring işleminde HİÇ DOKUNULMAMIŞ 
     / UĞRANILMAMIŞ (kullanılmamış) anahtarları toplar.

  3. 'iletisim' anahtarına girilip işlem yapıldığı için artık "kullanılmamış" 
     bir alan değildir. Bu yüzden 'kalanlar' objesinin içine DAHİL EDİLMEZ.

  Sonuç:
  - Çıkarılan değişkenler : ad, rol, eposta
  - kalanlar objesi       : { id: "u-01", siparisler: [...] }  (iletisim YOKTUR)
  ========================================================================
*/