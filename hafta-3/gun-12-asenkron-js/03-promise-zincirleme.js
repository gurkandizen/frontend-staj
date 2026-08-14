function adim1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Adım 1 tamamlandı: Sipariş Alındı");
            resolve("Adım 1 bitti");
        }, 1000);
    })
}

function adim2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Adım 2 tamamlandı: Sipariş Alındı");
            resolve("Adım 2 bitti");
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

adim1()
    .then(() => adim2())
    .then(() => adim3())
    .then(sonSonuc => console.log("Hepsi bitti:", sonSonuc))
    .catch(hata => console.log("Bir yerde hata oldu:", hata));