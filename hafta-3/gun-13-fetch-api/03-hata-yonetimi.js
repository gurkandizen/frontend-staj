// SENARYO - 1: response.ok false olduğunda kendi hatanı fırlatmak
//
// 1. async bir fonksiyon tanımla: kullaniciGetir(id)
// 2. try/catch kur.
// 3. try bloğunda: await ile fetch çağır (url'de id'yi kullan), response'a ata.
// 4. if (!response.ok) koşulu yaz — bu koşul true olursa:
//    throw new Error(`İstek başarısız: ${response.status}`) ile hatayı fırlat.
//    (02'deki gözlemini hatırla: 404 geldiğinde response.ok false oluyordu
//    ama .json() içeriği boş bir obje döndürüyordu — o boş objeyi "başarılı"
//    gibi kullanmak yerine burada gerçek bir hataya çeviriyoruz.)
// 5. throw satırından SONRA (yani ok true ise): await response.json() çağır,
//    sonucu return et.
// 6. catch bloğunda: hatayı yakala, console.log ile yazdır
//    (hata.message kullan, ham hata objesi değil — Gün 12'deki
//    05-sahte-api-senaryolari.js'de hata.message kullanmıştın, aynı mantık).
async function kullaniciGetir(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if(!response.ok) {
            throw new Error (`İstek Başarısız: ${response.status}`)
        }

        return await response.json();
    }
    catch (hata) {
        console.log("Hata geldi:", hata.message);
        throw hata;
    }
}


// SENARYO - 2: fonksiyonu hem var olan hem olmayan id ile çağırıp sonucu yakalamak
//
// 1. kullaniciGetir(1) çağır — bir async fonksiyon olduğu için Promise döner,
//    .then(veri => console.log("Başarılı:", veri)) ile sonucu yazdır.
// 2. kullaniciGetir(999) çağır — aynı şekilde .then bağla, ama bu sefer
//    catch tetiklenecek. .then'in yanına .catch(hata => console.log("Yakalanan hata:", hata.message))
//    ekle (fonksiyonun İÇİNDEKİ catch zaten hatayı yuttuğu için normalde buraya
//    düşmez — bunu ikisini de deneyip GÖZLEMLE, hangi catch'in çalıştığını anlamaya çalış).
kullaniciGetir(1).then(veri => console.log("Başarılı:", veri));
kullaniciGetir(999).then(veri => console.log("Başarılı:", veri))
    .catch(hata => console.log("Yakalanan hata:", hata.message));
