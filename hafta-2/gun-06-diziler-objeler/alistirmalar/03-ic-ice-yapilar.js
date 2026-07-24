import { kullanicilar } from '../veri/kullanicilar.js'

const hedefId = "u-02";

const kullaniciIndex = kullanicilar[1];
console.log("Kullanıcıyı İndex ile Bulma:" , kullaniciIndex);

const kullaniciFind = kullanicilar.find(kullanici => kullanici.id === hedefId);
console.log("Find ile Kullanıcı id:" , kullaniciFind);

const hedefKullanici = kullanicilar.find(kullanici => kullanici.id === hedefId);
const tumSiparisler = hedefKullanici.siparisler;
console.log("Kullanıcının tüm siparişleri:" , tumSiparisler);

const ilkSiparis = kullaniciFind.siparisler[0];
console.log("Hedef kullanıcı ilk sipariş:" , ilkSiparis);

const ikinciSiparis = kullaniciFind.siparisler[1];
console.log("İkinci sipariş:", ikinciSiparis);

const ikinciSiparişTutar = ikinciSiparis.tutar;
console.log("İkinci Siparişin Fiyatı:", ikinciSiparişTutar);

const sonSiparişTutar = kullaniciFind.siparisler[2].tutar;
console.log("Hedef kullanıcı 3. Sipariş Fiyatı:", sonSiparişTutar);


// SENARYO - 6
const canDemirId = "u-04"
const canDemirFind = kullanicilar.find(k => k.id === canDemirId);

// const canIletisim = canDemirFind.iletisim.eposta;
// console.log(canIletisim) // TypeError: Cannot read properties of undefined (reading 'eposta') `eposta`'yı okumaya çalışmadan önce, üzerinde okuma yaptığım şey (`iletisim`) `undefined`'dı
const canIletisim2 = canDemirFind.iletisim?.eposta;
console.log(canIletisim2); // undefined

// SENARYO - 7
for (const kullanici of kullanicilar) {
    let toplamHarcama = 0;

    for (const siparis of kullanici.siparisler) {
        toplamHarcama = toplamHarcama + siparis.tutar;
    }

    console.log(`${kullanici.ad} toplam harcaması: ${toplamHarcama}₺`);
}