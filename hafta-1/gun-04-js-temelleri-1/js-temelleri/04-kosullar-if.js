const MAX_KISI = 8;
const MIN_KISI = 1;
const secilenKisiSayisi = 10;

if(secilenKisiSayisi < MIN_KISI) {
    console.log("Hata: Kişi sayısı en az 1 olmalı.");
} else if (secilenKisiSayisi > MAX_KISI) {
    console.log("Hata: Kişi sayısı en fazla 8 olabilir.");
} else {
    console.log(`Geçerli: ${secilenKisiSayisi} kişilik rezervasyon alınabilir.`);
}