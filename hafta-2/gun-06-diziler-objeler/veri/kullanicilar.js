// Uydurma kullanıcı verisi — kimlik, ad, rol, iletişim (iç içe obje), sipariş geçmişi (dizi).
// NOT: "u-04" kasten eksik bırakıldı (iletişim bilgisi yok) — opsiyonel zincirleme
// senaryosu (Gün 6, senaryo 6) bu kullanıcı üzerinden test edilecek.

export const kullanicilar = [
  {
    id: "u-01",
    ad: "Elif Kaya",
    rol: "musteri",
    iletisim: {
      eposta: "elif.kaya@example.com",
      telefon: "0532 000 00 01",
      adres: { il: "Bursa", ilce: "Nilufer" }
    },
    siparisler: [
      { siparisId: "s-1001", tarih: "2026-05-03", urunKimlikleri: ["esp-01", "tat-02"], tutar: 160 },
      { siparisId: "s-1002", tarih: "2026-05-14", urunKimlikleri: ["flt-01"], tutar: 110 }
    ]
  },
  {
    id: "u-02",
    ad: "Eren Çetin",
    rol: "IK",
    iletisim: {
      eposta: "eren.cetin@example.com",
      telefon: "0532 000 00 02",
      adres: { il: "Bursa", ilce: "Yildirim" }
    },
    siparisler: [
      { siparisId: "s-1003", tarih: "2026-05-05", urunKimlikleri: ["sgk-01", "sgk-02"], tutar: 205 },
      { siparisId: "s-1004", tarih: "2026-05-20", urunKimlikleri: ["esp-02"], tutar: 95 },
      { siparisId: "s-1005", tarih: "2026-06-01", urunKimlikleri: ["tat-01"], tutar: 140 }
    ]
  },
  {
    id: "u-03",
    ad: "Zeynep Şahin",
    rol: "calisan",
    iletisim: {
      eposta: "zeynep.sahin@example.com",
      telefon: "0532 000 00 03",
      adres: { il: "Bursa", ilce: "Yildirim" }
    },
    siparisler: []
  },
  {
    id: "u-04",
    ad: "Can Demir",
    rol: "musteri",
    // iletisim alanı kasten yok — senaryo 6 bunu test edecek
    siparisler: [
      { siparisId: "s-1006", tarih: "2026-06-02", urunKimlikleri: ["flt-02"], tutar: 130 }
    ]
  },
  {
    id: "u-05",
    ad: "Ayşe Yıldız",
    rol: "musteri",
    iletisim: {
      eposta: "ayse.yildiz@example.com",
      telefon: "0532 000 00 05",
      adres: { il: "Bursa", ilce: "Nilufer" }
    },
    siparisler: [
      { siparisId: "s-1007", tarih: "2026-06-10", urunKimlikleri: ["esp-01", "esp-02", "tat-02"], tutar: 255 }
    ]
  }
];