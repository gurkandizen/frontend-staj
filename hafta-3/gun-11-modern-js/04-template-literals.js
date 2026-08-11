// SENARYO - 1
const isim = "Gürkan";
const tarih = "11 Ağustos 2026";

const rezervasyonMesaji = `Rezervasyon Onayı:
Sayın ${isim},${tarih} tarihi için rezervasyonunuz alınmıştır.
Görüşmek üzere!`;

console.log(rezervasyonMesaji);

// SENARYO - 2
const birimFiyat = 150;
const adet = 4;

const siparisOzeti = `Satın aldığınız ürünlerin toplam maliyeti: ${birimFiyat * adet} TL`;
console.log(siparisOzeti);

// SENARYO - 3
const stokAdedi = 5;
const stokDurumu = `Ürün Durumu: ${stokAdedi === 0 ? "Stokta yok" : `Stokta ${stokAdedi} adet var`}`;

console.log(stokDurumu);

// SENARYO - 4
function buyukHarfeCevir(metin) {
  return metin.toUpperCase();
}

const gorevBasligi = "tasarım revizyonu yapılacak";
const duyuru = `DİKKAT: Bugünkü öncelikli işiniz: ${buyukHarfeCevir(gorevBasligi)}`;

console.log(duyuru); 