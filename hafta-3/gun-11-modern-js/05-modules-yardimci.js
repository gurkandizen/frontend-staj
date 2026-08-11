export const KDV_ORANI = 0.20;

export function kdvliFiyatHesapla(fiyat) {
  return fiyat * (1 + KDV_ORANI);
}

export function paraFormatla(sayi) {
  return `${sayi} ₺`;
}