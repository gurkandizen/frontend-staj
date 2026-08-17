// KISIM 1: Veri katmanı — DOM'dan tamamen habersiz bir fonksiyon
//
// 1. async bir fonksiyon tanımla: kullanicilariGetir()
//    (parametre almasına gerek yok, hep aynı listeyi çekeceğiz)
// 2. fetch ile "https://jsonplaceholder.typicode.com/users" adresine istek at
//    (dikkat: /users/1 değil, id'siz — bu sana bir DİZİ döner, tek obje değil)
// 3. response.ok kontrolü yap, 03'teki gibi false ise throw new Error(...)
// 4. ok ise response.json() ile diziyi return et
// 5. Bu fonksiyonun içinde ASLA document.querySelector gibi bir şey KULLANMA —
//    tek görevi veriyi getirmek ya da hata fırlatmak.
async function kullanicilariGetir() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if(!response.ok) {
        throw new Error (`İstek Başarısız: ${response.status}`)
    }

    return await response.json();
}


// KISIM 2: Gösterim katmanı — DOM'u bilen, KISIM 1'i çağıran kod
//
// 1. HTML'de eklediğin iki elementi seç (örn. durum = document.querySelector("#durum"),
//    liste = document.querySelector("#liste")).
// 2. async bir fonksiyon tanımla: sayfayiYukle()
// 3. En başta durum elementinin içeriğini "Yükleniyor..." yap
//    (örn. durum.textContent = "Yükleniyor...")
// 4. try bloğunda: await ile kullanicilariGetir() çağır, sonucu bir değişkene ata
//    (örn. kullanicilar)
// 5. Başarılı olursa: durum elementini temizle (boş metin), sonra dizi üzerinde
//    forEach ile gez, her kullanıcı için bir <li> oluştur
//    (document.createElement("li")), içine kullanıcının adını yaz
//    (li.textContent = kullanici.name), ve liste elementine ekle
//    (liste.appendChild(li)).
// 6. catch bloğunda: durum elementinin içeriğini hata mesajıyla değiştir
//    (örn. durum.textContent = "Hata: " + hata.message) — kullanıcı ham bir
//    teknik hata değil, anlaşılır bir cümle görmeli.
// 7. En sona sayfayiYukle() çağrısını ekle.
const durum = document.getElementById("durum");
const liste = document.getElementById("liste");

async function sayfayiYukle() {
    durum.textContent = "Yükleniyor...";

    try {
        const kullanicilar = await kullanicilariGetir();
        durum.textContent = "";

        kullanicilar.forEach(function (kullanici) {
            const li = document.createElement("li");
            li.textContent = kullanici.name;
            liste.appendChild(li);
        });
    }
    catch (hata) {
        durum.textContent = "Hata: " + hata.message;
    }
}
sayfayiYukle();


// TEST: adresi bilerek bozup (örn. "/users" yerine "/kullanicilarxyz") hata
// durumunu da tarayıcıda görsel olarak doğrula — sadece başarı senaryosunu
// değil, hata senaryosunu da GÖZLE görmelisin.
