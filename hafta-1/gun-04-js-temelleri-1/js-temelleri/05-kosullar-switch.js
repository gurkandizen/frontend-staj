const gunNumarasi = 6;

switch (gunNumarasi) {
    case 0:
    case 6:
        console.log("Hafta sonu saatleri: 09:00 - 00:00");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Hafta içi saatleri: 08:00 - 23:00");
        break;
    default:
        console.log("Geçersiz gün numarası");
}