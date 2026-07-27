import { menu } from '../../gun-06-diziler-objeler/veri/menu.js'
import { kullanicilar } from '../../gun-06-diziler-objeler/veri/kullanicilar.js'

// 6. GÖREV
const toplamFiyat = menu.reduce((toplam, urun) => toplam + urun.tabanFiyat , 0);
console.log(`Reduce ile toplam fiyat: ${toplamFiyat}`);

let toplamFiyatDongu = 0;
for (const urun of menu) {
    toplamFiyatDongu = toplamFiyatDongu + urun.tabanFiyat;
}
console.log("Döngü ile Toplam Fiyat:", toplamFiyatDongu);

// 7. GÖREV
const gruplanmisDongu = {};

for (const urun of menu) {
    const kategori = urun.kategori;

    if(!gruplanmisDongu[kategori]) {
        gruplanmisDongu[kategori] = [];
    }

    gruplanmisDongu[kategori].push(urun);
}
console.log("Döngü ile Gruplanmış Menü:", gruplanmisDongu);

const gruplanmisReduce = menu.reduce((biriktirici, urun) => {
    const kategori = urun.kategori;

    if(!biriktirici[kategori]) {
        biriktirici[kategori] = [];
    }

    biriktirici[kategori].push(urun);

    return biriktirici;
}, {});
console.log("Reduce ile Gruplanmış Menü:", gruplanmisReduce);

const ayniMi = JSON.stringify(gruplanmisDongu) === JSON.stringify(gruplanmisReduce);

console.log("Doğrulama Sonucu (Döngü === Reduce):", ayniMi); 

/*
  ========================================================================
  REDUCE İLE OBJELERDE EN SIK YAPILAN HATA: 'return biriktirici'
  ========================================================================

  reduce() metodunda callback fonksiyonunun döndürdüğü değer (return), 
  bir sonraki elemanın işleneceği turda 'biriktirici' (accumulator) parametresine
  aktarılır.

  Eğer callback sonunda 'return biriktirici;' satırı unutulursa:
  - 1. eleman işlenir, fonksiyon geriye 'undefined' döndürür.
  - 2. elemana geçildiğinde 'biriktirici' artık 'undefined' olur.
  - 'biriktirici[kategori]' ifadesi çalıştırılmaya çalışıldığında JavaScript:
    "TypeError: Cannot read properties of undefined (reading 'kategori')"
    hatasını fırlatır ve kod patlar.

  Özetle: reduce ile bir obje veya dizi inşa ediyorsan, her turun sonunda 
  güncellenmiş biriktiriciyi RETURN etmeyi asla unutmamalısın!
  ========================================================================
*/

// 8. GÖREV
const hedefId = "u-01";
let idIleBulunanDongu = null;

for (const kullanici of kullanicilar) {
    if(kullanici.id === hedefId) {
        idIleBulunanDongu = kullanici;
        break;
    }
}
console.log("Döngü ile Bulunan:", idIleBulunanDongu);

const kullaniciFind = kullanicilar.find(kullanici => kullanici.id === hedefId);
console.log("Find ile Bulunan:", kullaniciFind);

// find() metodu ve döngü doğrudan bellekteki orijinal objeyi döndürür.
// Yeni bir obje türetilmediği için doğrudan '===' ile referans eşitliği kontrol edilebilir.

const ayniObjeMi = idIleBulunanDongu === kullaniciFind;
console.log("Doğrulama Sonucu (Döngü === Find):", ayniObjeMi); 

// 9. GÖREV
// 1. DÖNGÜLÜ YÖNTEM (for...of + break)
let siparisliKullaniciDongu = null;

for (const kullanici of kullanicilar) {
  // siparisler[0] boş dizilerde undefined döner.
  // ?.tutar sayesinde undefined.tutar hatası almadan güvenle kontrol yapıyoruz.
  if (kullanici.siparisler[0]?.tutar > 200) {
    siparisliKullaniciDongu = kullanici;
    break; // İstenen ilk kullanıcıyı bulunca dış döngüden çıkıyoruz
  }
}

console.log("Döngü ile Bulunan Kullanıcı:", siparisliKullaniciDongu);

// 2. METODLU YÖNTEM (find + ?. güvenliği)
const siparisliKullaniciFind = kullanicilar.find(kullanici => kullanici.siparisler[0]?.tutar > 200);
console.log("find() ile Bulunan Kullanıcı:", siparisliKullaniciFind);

const idAramasiAyniMi = siparisliKullaniciDongu === siparisliKullaniciFind;
console.log("Doğrulama Sonucu (Döngü === Find):", idAramasiAyniMi);

// 10. GÖREV
// 1. DÖNGÜLÜ YÖNTEM (for...of + break)
let siparissizKullaniciDongu = null;

for (const kullanici of kullanicilar) {
  // Sipariş dizisi boş mu (uzunluk 0 mı) kontrol ediyoruz
  if (kullanici.siparisler.length === 0) {
    siparissizKullaniciDongu = kullanici;
    break; // İlk eşleşen kullanıcıyı bulunca döngüyü sonlandırıyoruz
  }
}

console.log("Döngü ile Bulunan (Siparişi Olmayan):", siparissizKullaniciDongu);

// 2. METODLU YÖNTEM (find)
const siparissizKullaniciFind = kullanicilar.find(
  kullanici => kullanici.siparisler.length === 0
);

console.log("find() ile Bulunan (Siparişi Olmayan):", siparissizKullaniciFind);

// 3. DOĞRULAMA (=== Referans Kontrolü)

// Değişken çakışmasını önlemek için göreve özel benzersiz isim verdik
const siparissizDogrulamaAyniMi = siparissizKullaniciDongu === siparissizKullaniciFind;

console.log("Doğrulama Sonucu (Döngü === Find):", siparissizDogrulamaAyniMi); // true

/*
  ========================================================================
  KATEGORİYE GÖRE GRUPLAMA: FOR...OF vs REDUCE OKUNABİLİRLİK DEĞERLENDİRMESİ
  ========================================================================

  1. DÖNGÜLÜ (FOR...OF) YAKLAŞIM:
     - Kavram Sayısı ve Satır: Döngü başlatma, dışarıda obje tanımlama, 
       if ile varlık/boş dizi kontrolü ve .push() işlemi ayrı ayrı adımlardır.
     - Okunabilirlik: Kod biraz daha uzundur ancak "Adım adım ne yapılıyor?" 
       sorusuna çok net ve açık (imperative) bir yanıt verir. Zihinsel yükü düşüktür;
       stajyerden kıdemli mühendise kadar herkes ilk bakışta kolayca anlar.

  2. METODLU (REDUCE) YAKLAŞIM:
     - Kavram Sayısı ve Satır: Tüm durum (state) yönetimi, ilklendirme ({}), 
       biriktirme ve döndürme işlemleri tek bir bildirimsel (declarative) 
       fonksiyon yapısına sıkıştırılır.
     - Okunabilirlik: Dizi metotlarına alışkın olanlar için çok şık ve moderndir. 
       Ancak callback içindeki `biriktirici` mutasyonları ve her turda yapılan 
       `return` zorunluluğu zihinsel yükü artırır.

  ------------------------------------------------------------------------
  "TEK İFADEYE SIKIŞTIRMAK" HER ZAMAN DAHA MI İYİDİR?
  ------------------------------------------------------------------------
  HAYIR, BİR BEDELİ VARDIR:
  
  * Sadelik vs. Karmaşıklık: 
    Gruplama işlemi basittir; fakat gruplama yaparken aynı zamanda fiyat hesabı, 
    filtreleme ve sıralama gibi 3-4 farklı mantık daha reduce içine girmeye 
    başlarsa, reduce 'okunmaz bir kara kutuya' dönüşür (spaghetti code).

  * Hata Riski: 
    Reduce içinde biriktiriciyi yanlış dönmek veya objeyi beklenmedik şekilde 
    mutasyona uğratmak sessiz hatalara (silent bugs) yol açabilir.

  ÖZET / ÜRETİM TAVSİYESİ:
  - Ekip standardı ve basit durumlar için `reduce` harikadır.
  - Ancak iç içe koşulların ve karmaşık iş mantıklarının olduğu senaryolarda 
    kodu daha açık, modüler veya döngülü yazmak "okunabilirlik ve bakım" 
    (maintainability) açısından her zaman daha güvenli bir tercihtir.
  ========================================================================
*/