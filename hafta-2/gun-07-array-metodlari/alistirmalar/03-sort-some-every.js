import { menu } from "../../gun-06-diziler-objeler/veri/menu.js";
import { kullanicilar } from "../../gun-06-diziler-objeler/veri/kullanicilar.js";

// 11. GÖREV
const siraliMenuDongu = [...menu];

// Kabarcık Sırlama
for (let i = 0; i < siraliMenuDongu.length - 1; i++) {
    for (let j = 0; j < siraliMenuDongu.length - 1 - i; j++) {
        if (siraliMenuDongu[j].tabanFiyat < siraliMenuDongu[j + 1].tabanFiyat) {
            const gecici = siraliMenuDongu[j];
            siraliMenuDongu[j] = siraliMenuDongu[j + 1];
            siraliMenuDongu[j + 1] = gecici;
        }
    }
}
console.log("Döngü (Bubble Sort) ile Sıralı Menü:", siraliMenuDongu);

const siraliMenuSort = [...menu].sort((a, b) => b.tabanFiyat - a.tabanFiyat);
console.log("sort() ile Sıralı Menü:", siraliMenuSort);

// Sıralama işlemlerinden sonra orijinal menu dizisinin değişmediğini teyit ediyoruz
console.log("Orijinal menu bozuldu mu? (İlk Eleman Adı):", menu[0].ad); 

const siralamaAyniMi = JSON.stringify(siraliMenuDongu) === JSON.stringify(siraliMenuSort);
console.log("Doğrulama Sonucu (Bubble Sort === sort()):", siralamaAyniMi);

// 12. GÖREV 
const siraliSiparisler = [...kullanicilar].sort((a, b) => b.siparisler.length - a.siparisler.length);
console.log("sort ile Sıralı Siparişler:", siraliSiparisler);

const siraliSiparisDongu = [...kullanicilar];
for (let i = 0; i < siraliSiparisDongu.length - 1; i++) {
    for (let j = 0; j < siraliSiparisDongu.length - 1 - i; j++) {
        if (siraliSiparisDongu[j].siparisler.length < siraliSiparisDongu[j + 1].siparisler.length) {
            const gecici = siraliSiparisDongu[j];
            siraliSiparisDongu[j] = siraliSiparisDongu[j + 1];
            siraliSiparisDongu[j + 1] = gecici;
        }
    }
}
console.log("Döngü ile Sipariş Sayısına Göre Sıralı:", siraliSiparisDongu);

// DOĞRULAMA
const siparisSiralamaAyniMi = JSON.stringify(siraliSiparisDongu) === JSON.stringify(siraliSiparisler);
console.log("Doğrulama Sonucu (Bubble Sort === sort()):", siparisSiralamaAyniMi);

// 13. GÖREV
let stoktaOlmayanVarMiDongu = false;
for (const urun of menu) {
    if(!urun.stokta) {
        stoktaOlmayanVarMiDongu = true;
        break;
    }
}
console.log("Döngü ile Stokta Olmayan Var Mı?:", stoktaOlmayanVarMiDongu);

const stoktaOlmayanVarMiSome = menu.some(urun => !urun.stokta);
console.log("some() ile Stokta Olmayan Var Mı?:", stoktaOlmayanVarMiSome);

// Doğrulama
const stokSorgusuAyniMi = stoktaOlmayanVarMiDongu === stoktaOlmayanVarMiSome;
console.log("Doğrulama Sonucu (Döngü === some()):", stokSorgusuAyniMi);

// 14. GÖREV
const altSinir = 50;

// 1. DÖNGÜLÜ YÖNTEM
let hepsiUyuyorMuDongu = true;

for (const urun of menu) {
  if (urun.tabanFiyat <= altSinir) {
    hepsiUyuyorMuDongu = false;
    break;
  }
}
console.log(`Döngü ile (Tüm ürünler > ${altSinir} mi?):`, hepsiUyuyorMuDongu);


// 2. METODLU YÖNTEM
const hepsiUyuyorMuEvery = menu.every(urun => urun.tabanFiyat > altSinir);
console.log(`every() ile (Tüm ürünler > ${altSinir} mi?):`, hepsiUyuyorMuEvery);

// 3. DOĞRULAMA
const everyDogrulamaAyniMi = hepsiUyuyorMuDongu === hepsiUyuyorMuEvery;
console.log("Doğrulama Sonucu (Döngü === every()):", everyDogrulamaAyniMi);

// 15. GÖREV
// 1. DÖNGÜLÜ YÖNTEM
let herkesinSiparisiVarMiDongu = true;

for (const kullanici of kullanicilar) {
  if (kullanici.siparisler.length === 0) {
    herkesinSiparisiVarMiDongu = false;
    break;
  }
}
console.log("Döngü ile (Herkesin siparişi var mı?):", herkesinSiparisiVarMiDongu);

// 2. METODLU YÖNTEM
const herkesinSiparisiVarMiEvery = kullanicilar.every(
  kullanici => kullanici.siparisler.length > 0
);
console.log("every() ile (Herkesin siparişi var mı?):", herkesinSiparisiVarMiEvery);

// 3. DOĞRULAMA
const siparisEveryAyniMi = herkesinSiparisiVarMiDongu === herkesinSiparisiVarMiEvery;
console.log("Doğrulama Sonucu (Döngü === every()):", siparisEveryAyniMi);