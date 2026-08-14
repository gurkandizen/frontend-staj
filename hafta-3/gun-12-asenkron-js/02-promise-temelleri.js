// SENARYO - 1
function siparisVer(basariliMi) {
    return new Promise(function (resolve, reject) {
        console.log("Sipariş alındı, hazırlanıyor...");

        setTimeout(function () {
            if (basariliMi) {
                resolve("Kahveniz hazır");
            } else {
                reject("üzgünüz kahve makinesi arıza");
            }
        }, 1500);
    });
}

const siparisim = siparisVer(true);
console.log(siparisim)

// SENARYO - 2 .then ile başarı durumunu yakalama
siparisVer(true)
    .then(function (sonuc) {
        console.log("Başarılı:", sonuc);
    });

// SENARYO - 3
siparisVer(false)
    .then(function (sonuc) {
        console.log("Başarılı:", sonuc);
    })
    .catch(function (hata) {
        console.log("Hata:", hata);
    });

// SENARYO - 4
function taksiCagir(cagirildiMi) {
    return new Promise(function (resolve, reject) {
        console.log("Taksi çağırıldı, geliyor...");

        setTimeout(function () {
            if(cagirildiMi) {
                resolve("Taksi geldi")
            } else {
                reject("Taksi yolda arıza yaptı...")
            }
        }, 3000)
    })
}

taksiCagir(true)
    .then(function (yanit) {
        console.log("Başarılı:", yanit);
    })
    .catch(function (err) {
        console.log("Taksi gelmedi:", err);
    });
    
