// SENARYO - 1: .then / .catch ile temel fetch
//
// 1. fetch() ile "https://jsonplaceholder.typicode.com/users/1" adresine istek at.
//    fetch bir Promise döner (Gün 12'deki siparisVer() gibi düşün).
// 2. İlk .then() içinde, gelen "response" objesini henüz ham veri olarak KULLANMA.
//    Önce response.json() çağır ve onu return et (o da ayrı bir Promise'tir).
// 3. İkinci .then() içinde artık gerçek veri elinde — console.log ile yazdır.
// 4. En sona bir .catch() ekle — sadece AĞ hatasında (internet kopması vb.)
//    çalışacağını unutma, 404/500'ü burada YAKALAYAMAYACAKSIN (bunu 02'de göreceğiz).

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        return response.json()
    })
    .then(function (veri) {
        console.log("Senaryo - 1 Geldi:", veri);
    })
    .catch(function (hata) {
        console.log("Senaryo - 1 Hata:", hata)
    });


// SENARYO - 2: aynı isteği async/await ile yaz
//
// 1. async bir fonksiyon tanımla: kullaniciyiGetir(id)
// 2. İçinde try/catch kur.
// 3. try bloğunda: await ile fetch çağır (url'de id'yi template string ile kullan),
//    sonucu bir değişkene ata (örn. response).
// 4. await ile response.json() çağır, sonucu başka bir değişkene ata (örn. veri).
// 5. veri'yi console.log ile yazdır.
// 6. catch bloğunda hatayı yazdır.
// 7. Fonksiyonu id=1 ile çağır.

async function kullaniciyiGetir(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const veri = await response.json()
        console.log("Senaryo - 2 geldi:", veri)
    } 
    catch (hata) {
        console.log("Senaryo - 2 hata:", hata);
    }
}
kullaniciyiGetir(1);


// SENARYO - 3: birden fazla kullanıcıyı PARALEL çekmek
//
// 1. async bir fonksiyon tanımla: birkacKullaniciGetir()
// 2. Promise.all([...]) içine 3 ayrı fetch zinciri koy (id 1, 2, 3 için),
//    her biri .then(r => r.json()) ile veriye çevrilmiş olsun
//    (Gün 12'deki paralelTest() içindeki Promise.all kullanımına bak).
// 3. await ile üç sonucu aynı anda bekle, array destructuring ile
//    üç ayrı değişkene ayır (örn. kullanici1, kullanici2, kullanici3).
// 4. Üçünü birlikte console.log ile yazdır.
// 5. Fonksiyonu çağır.
async function birkacKullaniciGetir() {
    const [kullanici1, kullanici2, kullanici3] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/users/2").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/users/3").then(r => r.json())
    ]);

    console.log("Senaryo 3 - Paralel gelen kullanıcılar:", kullanici1, kullanici2, kullanici3);
}

birkacKullaniciGetir();
