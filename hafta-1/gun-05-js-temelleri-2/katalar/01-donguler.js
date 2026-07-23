const menuUrunleri = ["Espresso", "Kruvasan", "Latte", "San Sebastian"];

for(let i = 0; i < menuUrunleri.length; i++) {
    console.log(`${i + 1}. ${menuUrunleri[i]}`);
}

let sayi = 1;
while (sayi < 100) {
    sayi *= 2
    console.log(sayi);
}

const BASLANGIC_KAPASITE = 50;
let kalanKapasite = BASLANGIC_KAPASITE;
const talepler = [1, 4, 5, 8, 2, 3, 4, 4, 3, 2, 1, 4, 6, 4];
let index = 0;

while(index < talepler.length) {
    const suankiTalep = talepler[index];
    if(kalanKapasite >= suankiTalep) {
        kalanKapasite = kalanKapasite - suankiTalep;
        console.log(`Kabul Edildi ${suankiTalep} kişi, kalan ${kalanKapasite} kişi`);
    } else {
        console.log(`Maalesef ${suankiTalep} kişilik talebinizi karşılayamıyoruz, ${kalanKapasite} kişilik yerimiz var.`);
    }
    index++;
}
console.log(`Şuan ${BASLANGIC_KAPASITE} kişilik yerimizden sadece ${kalanKapasite} kişilik yerimiz kaldı`);

const STOK_KG = 20;
const BASLANGIC_STOK = STOK_KG * 1000;
let kalanStok = BASLANGIC_STOK;
const kullanilanGramajlar = [150, 250, 800, 450, 1200, 300, 500, 1000, 250, 600, 1500, 350, 750, 900, 250, 1100, 400, 850, 1300, 500, 200, 1400, 600, 350, 950, 1200, 700, 800, 450];
let sayac = 0;

while(sayac < kullanilanGramajlar.length && kalanStok > 0) {
    const suanKalanGram = kullanilanGramajlar[sayac];
    if(kalanStok >= suanKalanGram) {
        kalanStok = kalanStok - suanKalanGram;
        console.log(`${suanKalanGram} gram kahve alındı, stokta ${kalanStok} gram kahve kaldı`);
    } else {
        console.log(`Şuan stokta ${kalanStok} gram kahve var, ${suanKalanGram} gram kahve alamazsın`);
    }
    sayac++;
}
console.log(`Şuan depomuzda ${BASLANGIC_STOK} gram kahveden sadece ${kalanStok} gram kahve kaldı`);