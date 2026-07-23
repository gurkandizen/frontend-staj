if (true) {
    let blokIcinde = "blok içindeyim";
    console.log(`merhaba ${blokIcinde}`);
}
// console.log(blokIcinde);

if (true) {
    var varBlokIcinde = "var ile blok içindeyim";
    console.log(`merhaba ${varBlokIcinde}`);
}
console.log(varBlokIcinde);

const disariAitDeger = "ben dışarıdayım";
function iceri() {
    console.log(disariAitDeger);
    const icerideTanimli = "içerdeyim kardeş";
}
// iceri();
// console.log(icerideTanimli);


const KISI_BASI_UCRET = 50;
const MAX_KISI = 8;
const MIN_KISI = 1;
const gunlukTalepler = [3, 9, 5, 0, 6];

function kisiSayisiGecerliMi(kisiSayisi) {
    if(kisiSayisi >= MIN_KISI && kisiSayisi <= MAX_KISI) {
        return true;
    } 
    return false;
}   

function rezervasyonIsle(kisiSayisi) {
    if(kisiSayisiGecerliMi(kisiSayisi)) { 
        const maaliyet = KISI_BASI_UCRET * kisiSayisi
        return `Rezervasyon Onaylandı: ${maaliyet} TL`;
    } 
    return `Geçersiz kişi sayısı, ${MIN_KISI} ile ${MAX_KISI} arasında olmalıdır`
}

for (let i = 0; i < gunlukTalepler.length; i++) {
    const suankiTalep = gunlukTalepler[i];
    console.log(rezervasyonIsle(suankiTalep));
}