function adim1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Adım 1 tamamlandı: Sipariş Alındı");
            resolve("Adım 1 bitti");
        }, 1000);
    })
}

function adim2(basariliMi) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if(basariliMi) {
                resolve("Adım 2 Tamamlandı");
            } else {
                reject("Adım 2 Tamamlanmadı");
            }
        }, 1000);
    })
}

function adim3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Adım 3 tamamlandı: Sipariş Alındı");
            resolve("Adım 3 bitti");
        }, 1000);
    })
}

async function siparisSureciBaslat(basariliMi) {
    try {
        const sonuc1 = await adim1();
        const sonuc2 = await adim2(basariliMi);
        const sonuc3 = await adim3();
        console.log("son sonuc:", sonuc3);
    } catch (hata) {
        console.log("Hata:", hata);
    }
}

// Başarı senaryosu — üç adım da tamamlanmalı
// siparisSureciBaslat(true);

// Hata senaryosu — adım 3'e hiç ulaşılmamalı, doğrudan catch'e düşmeli
siparisSureciBaslat(false);