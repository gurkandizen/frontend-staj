// SENARYO - 1
console.log("1. sipariş veriliyor...");
setTimeout(function() {
    console.log("3. Kahve Hazır...");
}, 1000);
console.log("2. Bu arada menüye bakarım");

// SENARYO - 2
function siparisVer(urunAdi, callback) {
    console.log(`${urunAdi} için sipariş alındı, hazırlanıyor...`);

    setTimeout(function() {
        callback(`${urunAdi} hazır`);
    }, 1500);
}

siparisVer("Türk Kahvesi", function (mesaj) {
    console.log(mesaj);
})

// SENARYO - 3
function adim1(callback) {
    setTimeout(function () {
        console.log("Adım 1 tamamlandı: Sipariş Alındı");
        callback();
    }, 3000);
}

function adim2(callback) {
    setTimeout(function () {
        console.log("Adım 2 tamamlandı: Kahve çekirdekleri öğütüldü");
        callback();
    }, 3000);
}

function adim3(callback) {
    setTimeout(function () {
        console.log("Adım 3 tamamlandı: Kahve demlendi");
        callback();
    }, 3000);
}

adim1(function () {
    adim2(function () {
        adim3(function () {
            console.log("Tüm adımlar bitti, kahve servise hazır!");
        });
    });
});