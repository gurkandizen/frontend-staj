# Gün 11 — Modern JavaScript (ES6+)

`Program: Gün 11`

## Görev

Arrow function, destructuring, spread/rest, template literal, modüller (import/export). Todo uygulamasını ES6 ile refactor etme.

## Beklenen çıktı

Refactor edilmiş todo (ayrı branch + pull request).

## Durum

- [x] Aşama A — İzole alıştırmalar tamamlandı
- [ ] Aşama B — `vanilla-todo-app` refactor'ü (devam ediyor)
- [x] Günlük not yazıldı → [`gunluk-notlar/gun-11.md`](../../gunluk-notlar/gun-11.md)

## Bu klasörde ne var? (Aşama A — izole alıştırmalar)

Bu gün, diğer günlerden farklı olarak **iki parçalı**: önce burada (frontend-staj) izole, bağımsız alıştırmalarla her kavramda ustalaşıldı; sonra kazanım gerçek projeye (`vanilla-todo-app`) taşınacak.

- `01-arrow-functions.js` — implicit return, obje döndürürken parantez kuralı, `this` davranışı farkı
- `02-destructuring.js` — obje/dizi destructuring, farklı isimle alma, varsayılan değer, iç içe destructuring, fonksiyon parametresinde destructuring
- `03-spread-rest.js` — dizi/obje kopyalama (spread), rest ile belirsiz sayıda argüman, rest ile destructuring'de "geri kalanı alma"
- `04-template-literals.js` — çok satırlı string, ifade içinde ifade (hesaplama, ternary, fonksiyon çağrısı)
- `05-modules-yardimci.js` + `05-modules-practice.js` — named export, `import * as` ile toplu alma

## Aşama B — Gerçek Refactor

`vanilla-todo-app` reposunda `feature/day-11-es6-refactor` branch'inde sürdürülüyor. Tamamlanınca buraya PR linki eklenecek:

👉 *(PR tamamlanınca eklenecek)*