const gunler1 = ["Pazartesi", "Salı"];
const gunler2 = ["Çarşamba", "Perşembe"];
const task = { id: 1, text: "Süt al", completed: false };

// SENARYP - 1
const gunler1Kopya = [...gunler1];
gunler1Kopya.push("Çarşamba");

console.log("Orijinal gunler1:", gunler1); // SPREAD: Atama operatörünün SAĞINDA yer alıyor. Diziyi açarak/dağıtarak kopyasını oluşturuyor.
console.log("Kopyalanan gunler1:", gunler1Kopya); 

// SENARYO - 2
const birlesikGunler = [...gunler1, ...gunler2];
console.log("Birleşik Günler:", birlesikGunler); // SPREAD: Atama operatörünün SAĞINDA yer alıyor. İki ayrı diziyi açıp tek bir yeni diziye yayıyor.

// SENARYO - 3
const tamamlanmisTask = { ...task, completed: true };

console.log("Orijinal Task:", task);
console.log("Tamamlanmış Task:", tamamlanmisTask); // SPREAD: Atama operatörünün SAĞINDA yer alıyor. Mevcut objenin verilerini açıp yeni objeye aktarıyor.

// SENARYO - 4
function enUzunMetin(...metinler) { // REST: Fonksiyon parametre tanımında (yani atama/çağrı çizgisinin SOLUNDA) yer alıyor. Gelen bağımsız argümanları bir diziye topluyor.
  return metinler.reduce((enUzun, mevcut) => 
    mevcut.length > enUzun.length ? mevcut : enUzun
  , "");
}
const sonuc = enUzunMetin("HTML", "JavaScript", "CSS", "TypeScript");
console.log(sonuc); 

// SENARYO - 5
const { id, ...digerAlanlar } = task;

console.log("Çıkarılan ID:", id);           
console.log("Geri Kalan Alanlar:", digerAlanlar); // REST: Destructuring tanımında (atama operatörünün SOLUNDA) yer alıyor. id çıkarıldıktan sonra GERİ KALAN tüm alanları yeni bir objeye topluyor.