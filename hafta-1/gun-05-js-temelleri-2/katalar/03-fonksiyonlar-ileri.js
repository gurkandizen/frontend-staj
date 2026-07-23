const KISI_BASI_UCRET = 50;

function rezervasyonTutariHesaplaVarsayilan(kisiSayisi = 2) { return KISI_BASI_UCRET * kisiSayisi };
const tutar = `Toplam Ücretiniz ${rezervasyonTutariHesaplaVarsayilan(5)}`;
const tutar1 = `Toplam Ücretiniz ${rezervasyonTutariHesaplaVarsayilan()}`;
const tutar2 = `Toplam Ücretiniz ${rezervasyonTutariHesaplaVarsayilan(0)}`;

console.log(tutar);
console.log(tutar1);
console.log(tutar2);

const MAX_KISI = 8;
const MIN_KISI = 1;
function kisiSayisiGecerliMi(kisiSayisi) {
    if(kisiSayisi >= MIN_KISI && kisiSayisi <= MAX_KISI) {
        return true;
    } return false;
}   

function rezervasyonIsle(kisiSayisi) {
    if(kisiSayisiGecerliMi(kisiSayisi)) { 
        const maaliyet = KISI_BASI_UCRET * kisiSayisi
        return `Rezervasyon Onaylandı: ${maaliyet} TL`;
    } 
    return `Geçersiz kişi sayısı, ${MIN_KISI} ile ${MAX_KISI} arasında olmalıdır`
}
console.log(rezervasyonIsle(9));
console.log(rezervasyonIsle(5));