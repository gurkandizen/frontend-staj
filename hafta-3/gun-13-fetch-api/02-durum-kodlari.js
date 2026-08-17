// SENARYO - 1: var olan bir id ile istek atıp durum kodunu incelemek
//
// 1. async bir fonksiyon tanımla: idKontrolEt(id)
// 2. İçinde await ile fetch çağır: "https://jsonplaceholder.typicode.com/users/" + id
// 3. Sonucu (response) bir değişkene ata ama HENÜZ .json() çağırma.
// 4. response.status'u console.log ile yazdır (sayı olarak, örn. 200).
// 5. response.ok'u console.log ile yazdır (true/false olarak).
// 6. Fonksiyonu id=1 (var olan) ile çağır.
async function idKontrolEt(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log("Response Status Sonucu:", response.status)
    console.log("Response OK Sonucu:", response.ok)

    const icerik = await response.json();
    console.log(icerik)
}
idKontrolEt(1);


// SENARYO - 2: OLMAYAN bir id ile aynı isteği atmak
//
// JSONPlaceholder'da kullanıcılar 1-10 arası var. 999 gibi olmayan bir id
// istersen sunucu seni "hata" ile durdurmaz, sana geçerli bir cevap döner —
// ama içi boştur.
//
// 1. idKontrolEt fonksiyonunu id=999 ile çağır.
// 2. Konsolda status ve ok değerlerine bak — Senaryo 1'dekiyle KIYASLA.
//    (İpucu: JSONPlaceholder'ın gerçek davranışını görmen için bu kısmı
//    çalıştırıp sonucu bana göster — bazı sahte API'ler "yok" durumunda bile
//    200 dönebiliyor, gerçek API'lerde genelde 404 beklersin. Bu farkı
//    birlikte yorumlayacağız.)
idKontrolEt(999);


// SENARYO - 3: response'un içeriğine de bakmak (opsiyonel gözlem)
//
// 1. Senaryo 2'deki cevabın .json() halini de al ve console.log ile yazdır.
// 2. İçerik ne geldi? Boş bir obje mi ({}), boş bir dizi mi ([]), yoksa
//    başka bir şey mi? Bu, status kodu ile içeriğin birbirinden BAĞIMSIZ
//    olabileceğini gösteren iyi bir örnek olacak.
