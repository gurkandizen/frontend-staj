import { menu } from '../../gun-06-diziler-objeler/veri/menu.js'
import { kullanicilar } from '../../gun-06-diziler-objeler/veri/kullanicilar.js'

// 1. GÖREV
const buyukHarfliMenu = menu.map(urunler => ({...urunler, ad: urunler.ad.toUpperCase()}));
console.log("map() ile Sonuç:", buyukHarfliMenu);

const buyukHarfliMenuDongu = [];
for (const urun of menu) {
    buyukHarfliMenuDongu.push ({
        ...urun,
        ad: urun.ad.toUpperCase()
    });
}
console.log("for...of ile Büyük Harflar:", buyukHarfliMenuDongu);

const gorev1DogruMu = JSON.stringify(buyukHarfliMenu) === JSON.stringify(buyukHarfliMenuDongu);
console.log("Görev 1 Doğrulama (Döngü === Map):", gorev1DogruMu);

// 2. GÖREV
const stoktakiler = menu.filter(urun => urun.stokta);
console.log("filter() ile Stoktakiler:", stoktakiler);

const stoktaDongu = [];
for (const urun of menu) {
    if(urun.stokta) {
        stoktaDongu.push(urun);
    }
}
console.log("for...of ile Stoktakiler:", stoktaDongu);

const gorev2DogruMu = 
  stoktaDongu.length === stoktakiler.length && 
  stoktaDongu.every((urun, index) => urun === stoktakiler[index]);

console.log("Görev 2 Doğrulama (Döngü === Filter):", gorev2DogruMu);

// 3. GÖREV
const kdvliMenu = menu.map(urun => ({
    ...urun, kdvliFiyat: urun.tabanFiyat * 1.18
}));
console.log("map() ile KDV'li Menü:", kdvliMenu);

const kdvliMenuDongu = [];
for (const urun of menu) {
    kdvliMenuDongu.push ({
        ...urun,
        kdvliFiyat: urun.tabanFiyat * 1.18
    });
}
console.log("for...of ile KDV'li Menü:", kdvliMenuDongu);

// ✅ DOĞRULAMA
const gorev3DogruMu = JSON.stringify(kdvliMenuDongu) === JSON.stringify(kdvliMenu);
console.log("Görev 3 Doğrulama (Döngü === Map):", gorev3DogruMu);

// 4. GÖREV
const musteriMi = kullanicilar.filter(m => m.rol === "musteri");
console.log("Rolu müşteri olanlar", musteriMi);

const musteriMiDongu = [];
for (const musteri of kullanicilar) {
    if (musteri.rol === "musteri") {
        musteriMiDongu.push(musteri);
    }
}
console.log("for...of ile Müşteriler:", musteriMiDongu);

// ✅ DOĞRULAMA
const gorev4DogruMu = 
  musteriMiDongu.length === musteriMi.length && 
  musteriMiDongu.every((kullanici, i) => kullanici === musteriMi[i]);

console.log("Görev 4 Doğrulama (Döngü === Filter):", gorev4DogruMu);

// 5. GÖREV
const sinirFiyat = 100;
const urunAdlariZincir = menu.filter(urun => urun.tabanFiyat < sinirFiyat).map(urun => urun.ad);
console.log("Zincirleme (filter + map) Sonucu:", urunAdlariZincir);

const urunAdlariZincirDongu = [];
for (const urun of menu) {
    if (urun.tabanFiyat < 100) {
        urunAdlariZincirDongu.push(urun.ad);
    }
}
console.log("Döngü (for...of) Sonucu:", urunAdlariZincirDongu);

// ✅ DOĞRULAMA (İki Düz String Dizisi Birebir Aynı mı?)
const gorev5DogruMu = JSON.stringify(urunAdlariZincirDongu) === JSON.stringify(urunAdlariZincir);
console.log("Görev 5 Doğrulama (Döngü === Zincir):", gorev5DogruMu);