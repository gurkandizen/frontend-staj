const KISI_BASI_UCRET = 50;
const KAFE_ADI = "1326 BURSA";
const ACILIS_SAATI = 8;
const KAPANIS_SAATI = 23;
let kisiSayisi = 4;

// KISI_BASI_UCRET = 60;

console.log(`Kafemiz ${KAFE_ADI}'ya Hoş Geldiniz`)
console.log(`Kafemizin açılış saati, 0${ACILIS_SAATI}.00 kapanış saati ${KAPANIS_SAATI}.00`)
console.log(`Rezervasyon Ücreti (YANLIŞ YAZIM): ${KISI_BASI_UCRET} * ${kisiSayisi}`);
console.log(`Rezervasyon Ücreti (DOĞRU YAZIM): ${KISI_BASI_UCRET * kisiSayisi}`);