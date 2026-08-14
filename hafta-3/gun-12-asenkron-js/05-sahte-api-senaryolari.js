function sahteVeriGetir(basariliMi) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (basariliMi) {
                resolve({ id:1, isim: "Örnek Kullanıcı" });
            } else {
                reject(new Error("Sunucuya ulaşılamadı"))
            }
        }, 1500)
    })
}

sahteVeriGetir(true)
    .then(veri => console.log("Geldi:", veri))
    .catch(hata => console.log("Hata geldi:", hata.message))

sahteVeriGetir(false)
    .then(veri => console.log("Geldi:", veri))
    .catch(hata => console.log("Hata geldi:", hata.message));

async function veriyiGetirVeGoster(basariliMi) {
    try {
        const veri = await sahteVeriGetir(basariliMi);
        console.log("Geldi:", veri)
    } catch (hata) {
        console.log("Hata geldi:", hata.message);
    }
}
veriyiGetirVeGoster(true);
veriyiGetirVeGoster(false);

async function siraliTest() {
    console.time("sirali");
    await sahteVeriGetir(true);
    await sahteVeriGetir(true);
    await sahteVeriGetir(true);
    console.timeEnd("sirali");
}

async function paralelTest() {
    console.time("paralel");
    const [sonuc1, sonuc2, sonuc3] = await Promise.all([
        sahteVeriGetir(true),
        sahteVeriGetir(true),
        sahteVeriGetir(true)
    ]);
    console.timeEnd("paralel");
    console.log("Paralel sonuçlar:", sonuc1, sonuc2, sonuc3);
}

siraliTest();
paralelTest();