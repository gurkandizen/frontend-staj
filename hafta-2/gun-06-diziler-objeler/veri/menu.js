// Her ürün: kimlik, ad, kategori, taban fiyat, stok durumu, etiketler, varyantlar.

export const menu = [
  {
    id: "esp-01",
    ad: "Espresso",
    kategori: "espresso-bazli",
    tabanFiyat: 65,
    stokta: true,
    etiketler: ["yogun", "sicak", "kafeinli"],
    varyantlar: [
      { boy: "tek", farkFiyat: 0 },
      { boy: "duble", farkFiyat: 20 }
    ]
  },
  {
    id: "esp-02",
    ad: "Flat White",
    kategori: "espresso-bazli",
    tabanFiyat: 95,
    stokta: true,
    etiketler: ["sutlu", "sicak", "kafeinli"],
    varyantlar: [
      { boy: "tek", farkFiyat: 0 },
      { boy: "duble", farkFiyat: 25 }
    ]
  },
  {
    id: "esp-03",
    ad: "Cortado",
    kategori: "espresso-bazli",
    tabanFiyat: 90,
    stokta: false,
    etiketler: ["sutlu", "sicak"],
    varyantlar: [
      { boy: "tek", farkFiyat: 0 }
    ]
  },
  {
    id: "flt-01",
    ad: "V60 Filtre Kahve",
    kategori: "filtre",
    tabanFiyat: 110,
    stokta: true,
    etiketler: ["hafif", "sicak", "tek-kaynak"],
    varyantlar: [
      { boy: "kucuk", farkFiyat: 0 },
      { boy: "buyuk", farkFiyat: 30 }
    ]
  },
  {
    id: "flt-02",
    ad: "Chemex",
    kategori: "filtre",
    tabanFiyat: 130,
    stokta: true,
    etiketler: ["hafif", "sicak", "tek-kaynak", "paylasimlik"],
    varyantlar: [
      { boy: "iki-kisilik", farkFiyat: 0 }
    ]
  },
  {
    id: "sgk-01",
    ad: "Cold Brew",
    kategori: "soguk",
    tabanFiyat: 100,
    stokta: true,
    etiketler: ["soguk", "kafeinli", "yaz"],
    varyantlar: [
      { boy: "kucuk", farkFiyat: 0 },
      { boy: "buyuk", farkFiyat: 25 }
    ]
  },
  {
    id: "sgk-02",
    ad: "Iced Latte",
    kategori: "soguk",
    tabanFiyat: 105,
    stokta: true,
    etiketler: ["soguk", "sutlu", "yaz"],
    varyantlar: [
      { boy: "kucuk", farkFiyat: 0 },
      { boy: "buyuk", farkFiyat: 25 }
    ]
  },
  {
    id: "sgk-03",
    ad: "Frappe",
    kategori: "soguk",
    tabanFiyat: 115,
    stokta: false,
    etiketler: ["soguk", "sutlu", "tatli", "yaz"],
    varyantlar: [
      { boy: "tek-boy", farkFiyat: 0 }
    ]
  },
  {
    id: "tat-01",
    ad: "Cheesecake",
    kategori: "tatli",
    tabanFiyat: 140,
    stokta: true,
    etiketler: ["tatli", "sogutulmus"],
    varyantlar: [
      { boy: "dilim", farkFiyat: 0 }
    ]
  },
  {
    id: "tat-02",
    ad: "Brownie",
    kategori: "tatli",
    tabanFiyat: 95,
    stokta: true,
    etiketler: ["tatli", "sicak-servis"],
    varyantlar: [
      { boy: "dilim", farkFiyat: 0 },
      { boy: "dilim-dondurmali", farkFiyat: 35 }
    ]
  }
];

// Yardımcı: kategori adlarının düz listesi (menu üzerinden türetildi, elle tutulmuyor).
export const kategoriler = [...new Set(menu.map((urun) => urun.kategori))];