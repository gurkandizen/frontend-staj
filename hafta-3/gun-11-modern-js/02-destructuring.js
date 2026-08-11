// SENARYO - 1
const kisi = { ad: "Ayşe", email: "ayse@example.com", adres: { sehir: "Bursa", ulke: "Türkiye" } };
const { ad, email } = kisi;

console.log(ad);   
console.log(email);

// SENARYO - 2
const { ad: isim } = kisi;

console.log(isim); // "Ayşe"

// SENARYO - 3
const { telefon = "055555" } = kisi;

console.log(telefon); 

// SENARYO - 4
const { adres: { sehir } } = kisi;

console.log(sehir);

// SENARYO - 5
const drinks = ["kahve", "çay", "su", "meyve suyu"];

const [ilk, ikinci, , dorduncu] = drinks;

console.log(ilk);      // "kahve"
console.log(ikinci);   // "çay"
console.log(dorduncu); // "meyve suyu"

// SENARYO - 6
function gorevYazdir({ text, completed }) {
  console.log(`Görev: ${text}, Tamamlandı mı: ${completed}`);
}

const ornekGorev = {
  text: "React bileşenlerini tamamla",
  completed: true
};

gorevYazdir(ornekGorev);