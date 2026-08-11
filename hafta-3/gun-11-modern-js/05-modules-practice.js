import { KDV_ORANI, kdvliFiyatHesapla, paraFormatla } from './05-modules-yardimci.js';

const urunFiyati = 100;
const kdvliTutar = kdvliFiyatHesapla(urunFiyati);
const formatliTutar = paraFormatla(kdvliTutar);

console.log("KDV Oranı:", KDV_ORANI);    
console.log("1. Senaryo Sonucu:", formatliTutar); 


// 2. Senaryo — import * as ile Toplu Alma
import * as Yardimci from './05-modules-yardimci.js';

const urunFiyati2 = 100;
const kdvliTutar2 = Yardimci.kdvliFiyatHesapla(urunFiyati2);
const formatliTutar2 = Yardimci.paraFormatla(kdvliTutar2);

console.log("Toplu İçe Aktarılan KDV Oranı:", Yardimci.KDV_ORANI);
console.log("2. Senaryo Sonucu:", formatliTutar2);                 