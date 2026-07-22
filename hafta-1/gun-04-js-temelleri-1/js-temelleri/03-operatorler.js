const espressoFiyat = 65;
const kruvasanFiyat = 90;
const latteFiyat = 110;

const araToplam = espressoFiyat + kruvasanFiyat + latteFiyat;
const kdvOrani = 0.10;
const kdvTutari = araToplam * kdvOrani;
const genelToplam = araToplam + kdvTutari;

const musteriAdi = "Burak Onkun";
const siparisOzeti = `${musteriAdi} adlı Müşteri 1 Adet Espresso, Kruvasan ve Latte Siparişi verdi. KDV Dahil Toplam: ${genelToplam}₺`;
console.log(siparisOzeti);

console.log(`Ara Toplam: ${araToplam}`);
console.log(`Kdv Tutari: ${kdvTutari}`);
console.log(`Genel Toplam: ${genelToplam}`);