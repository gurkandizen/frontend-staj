# Frontend Staj — 30 Günlük Program

Bu repo, frontend stajım boyunca yazdığım tüm kodları, günlük notlarımı ve değerlendirme
kayıtlarını içerir. Mentörümün hazırladığı 30 günlük programı **birebir, birleştirmeden**
takip eder.

**Hedef:** React tabanlı frontend geliştirme
**Günlük ritim:** 6-7 saat → 1,5-2 sa teori · 3-3,5 sa pratik · 30-45 dk çıktı + not · 30 dk mentor Q&A

---

## Programın en kritik kuralı

> **React'e Gün 16'dan önce geçilmez.**
> Zayıf JavaScript temeli üzerine React öğrenmek, "çalışıyor ama neden çalıştığını bilmiyorum"
> noktasına saplanmaya yol açar. İlk 3 hafta bilinçli olarak JavaScript'e ayrılmıştır.

**Gün 15 bir kontrol noktasıdır.** Hafta 2-3 çıktıları eksiksiz değilse React'e geçilmez, hafta 3
içeriği tekrarlanır. Bir haftalık gecikme, temelsiz devam etmekten daha ucuzdur.

---

## Tempo notu

Program 30 iş günü üzerinden kurgulanmıştır ve klasör/gün yapısı bu haliyle korunur. Bazı
günlerde konuyu beklenenden hızlı bitirirsem (öz-değerlendirmem 4-5 ise, bkz. `gunluk-notlar/SABLON.md`)
aynı gün içinde bir sonraki günün konusuna geçip ilerleyebilirim — ama bu repo yapısını
değiştirmez, her konu kendi gün klasöründe kalır ve kendi commit'iyle işaretlenir. Hızlanma
payı yalnızca JavaScript/DOM/async bloklarının *dışında*, tekrar niteliğindeki konularda kullanılır.

---

## Ana Proje (Sürekli) — 1326 Bursa

Mentörün kararıyla, hemen her günün pratik görevi tek bir ana proje ("1326 Bursa" adlı hayali
kahve dükkânı sitesi) üzerine ekleme yapılarak uygulanıyor. Bu, milestone projelerden (aşağıdaki
tablo) farklı — tek seferlik bir teslim değil, **sürekli büyüyen** bir proje.

**Gün 1-8:** Bu projenin kodu doğrudan bu repoda, ilgili gün klasörlerinde tutuldu.

**Gün 9'dan itibaren:** Proje, ekip liderimin önerisiyle **bağımsız bir repoya** taşındı —
karmaşıklığı azaltmak ve gerçek bir branch/PR akışı deneyimlemek için.

- **Repo:** [`bursa-1326-cafe`](https://github.com/KULLANICI_ADIN/bursa-1326-cafe) *(linki güncelle)*
- **Akış:** Her gün kendi `feature/day-XX-...` branch'inde geliştirilir, bir Pull Request ile
  `main`'e birleştirilir.
- **Bu repodaki iz:** Gün 9'dan itibaren, ilgili gün klasöründe kod bulunmaz — sadece o günün
  `bursa-1326-cafe` reposundaki **PR linkine yönlendiren** kısa bir not vardır. Günlük notlar
  (`gunluk-notlar/gun-XX.md`) öğrenme kaydı olduğu için burada, bu repoda tutulmaya devam eder.

---

## Günlük Takip Tablosu

| Gün | Konu | Konum | Durum |
|:--:|---|---|:--:|
| 1 | Ortam kurulumu ve Git | [`gun-01-ortam-git`](hafta-1/gun-01-ortam-git/) | [x] |
| 2 | HTML/CSS pekiştirme: Flexbox | [`gun-02-flexbox`](hafta-1/gun-02-flexbox/) | [x] |
| 3 | CSS Grid ve responsive tasarım | [`gun-03-css-grid`](hafta-1/gun-03-css-grid/) | [x] |
| 4 | JavaScript temelleri I | [`gun-04-js-temelleri-1`](hafta-1/gun-04-js-temelleri-1/) | [x] |
| 5 | JavaScript temelleri II + hafta değerlendirmesi *(mentor görüşmesi)* | [`gun-05-js-temelleri-2`](hafta-1/gun-05-js-temelleri-2/) | [x] |
| 6 | Diziler ve objeler | [`gun-06-diziler-objeler`](hafta-2/gun-06-diziler-objeler/) | [x] |
| 7 | Array metodları | [`gun-07-array-metodlari`](hafta-2/gun-07-array-metodlari/) | [x] |
| 8 | DOM I: Seçme ve manipülasyon | [`gun-08-dom-1`](hafta-2/gun-08-dom-1/) | [x] |
| 9 | DOM II: Event'ler | [`gun-09-dom-2`](hafta-2/gun-09-dom-2/) → `bursa-1326-cafe` ([PR #1](https://github.com/gurkandizen/bursa-1326-cafe/pull/1), [PR #2](https://github.com/gurkandizen/bursa-1326-cafe/pull/2)) | [x] |
| 10 | Mini proje: Vanilla JS Todo | [`gun-10-vanilla-todo`](hafta-2/gun-10-vanilla-todo/) → `vanilla-todo-app` | [x] |
| 11 | Modern JavaScript (ES6+) | [`gun-11-modern-js`](hafta-3/gun-11-modern-js/) → `vanilla-todo-app` ([PR #1](https://github.com/gurkandizen/vanilla-todo-app/pull/1)) | [x] |
| 12 | Asenkron JavaScript | [`gun-12-asenkron-js`](hafta-3/gun-12-asenkron-js/) | ☐ |
| 13 | Fetch ve API tüketimi | [`gun-13-fetch-api`](hafta-3/gun-13-fetch-api/) | ☐ |
| 14 | API projesi | [`gun-14-api-projesi`](hafta-3/gun-14-api-projesi/) → `api-arama-uygulamasi` | ☐ |
| 15 | Tooling + hafta değerlendirmesi **← KONTROL NOKTASI** | [`gun-15-tooling`](hafta-3/gun-15-tooling/) | ☐ |
| 16 | React'e giriş | [`gun-16-react-giris`](hafta-4/gun-16-react-giris/) | ☐ |
| 17 | Props ve component ayrıştırma | [`gun-17-props`](hafta-4/gun-17-props/) | ☐ |
| 18 | State: useState | [`gun-18-usestate`](hafta-4/gun-18-usestate/) | ☐ |
| 19 | Liste render ve koşullu görünüm | [`gun-19-liste-render`](hafta-4/gun-19-liste-render/) | ☐ |
| 20 | Mini proje: React Todo | [`gun-20-react-todo`](hafta-4/gun-20-react-todo/) → `react-todo-app` | ☐ |
| 21 | useEffect ve yaşam döngüsü | [`gun-21-useeffect`](hafta-5/gun-21-useeffect/) | ☐ |
| 22 | React + API | [`gun-22-react-api`](hafta-5/gun-22-react-api/) | ☐ |
| 23 | React Router | [`gun-23-router`](hafta-5/gun-23-router/) | ☐ |
| 24 | Styling | [`gun-24-styling`](hafta-5/gun-24-styling/) | ☐ |
| 25 | Context + hafta değerlendirmesi *(mentor görüşmesi)* | [`gun-25-context`](hafta-5/gun-25-context/) | ☐ |
| 26 | Bitirme projesi: iskelet | [`gun-26-bitirme-iskelet`](hafta-6/gun-26-bitirme-iskelet/) → `bitirme-projesi` | ☐ |
| 27 | Bitirme projesi: çekirdek özellikler | [`gun-27-bitirme-cekirdek`](hafta-6/gun-27-bitirme-cekirdek/) → `bitirme-projesi` | ☐ |
| 28 | Code review ve refactor | [`gun-28-review`](hafta-6/gun-28-review/) → `bitirme-projesi` | ☐ |
| 29 | Deployment ve dokümantasyon | [`gun-29-deployment`](hafta-6/gun-29-deployment/) → `bitirme-projesi` | ☐ |
| 30 | Sunum ve final değerlendirme **← FİNAL DEĞERLENDİRME** | [`gun-30-sunum`](hafta-6/gun-30-sunum/) | ☐ |

> **Not:** Gün 9 satırındaki `→ bursa-1326-cafe (PR)` işareti, o günden itibaren 1326 Bursa
> projesine devam eden her gün için geçerli olan yeni kalıptır — ilgili gün klasöründe kod
> yerine PR linki bulunur. Bu, yukarıdaki "Ana Proje (Sürekli)" bölümünde açıklanmıştır. Gün 10
> ve 11'deki `→ vanilla-todo-app` işareti de benzer bir kalıp — ama bu bir milestone proje
> (aşağıdaki tabloya bakın), sürekli ana proje değil.

---

## Repo Yapısı

```
frontend-staj/
├── README.md                        ← bu dosya · genel takip tablosu
├── .gitignore
├── gunluk-notlar/                   ← "ne öğrendim, nerede takıldım"
│   ├── SABLON.md
│   └── gun-01.md ... gun-30.md
├── degerlendirme/
│   ├── rubrik.md                    ← 25 üzerinden puanlama + görüşme notları
│   └── haftalik-oz-degerlendirme.md
├── hafta-1/   Ortam, Git ve JavaScript'e Giriş
├── hafta-2/   JavaScript ile Derinleşme ve DOM
├── hafta-3/   Modern JS, Asenkron Programlama ve API
├── hafta-4/   React Temelleri
├── hafta-5/   React ile Gerçek Uygulama Kalıpları
└── hafta-6/   Bitirme Projesi, Review ve Sunum
```

**Mantık:** klasörler teknolojiye göre değil (HTML/ CSS/ JS/ gibi), **güne ve göreve** göre bölündü.
Her gün klasörünün içinde bir `README.md` var: o günün görevi, beklenen çıktısı, durumu. Kod da
aynı klasörde (Gün 9'dan itibaren 1326 Bursa'ya devam eden günler hariç — bkz. yukarıdaki not).
Böylece bir klasöre bakan kişi, dosyaları açmadan ne olduğunu anlıyor.

---

## Ayrı Repolar — milestone projeler

Bu dört proje tek başına çalışan, kendi README'si olan gerçek projeler (program bunlar için açıkça
"ayrı repo" diyor). Günlük egzersizlerin arasına gömülmediler. (`bursa-1326-cafe` bu listede değil —
o bir milestone değil, sürekli devam eden ana proje; yukarıdaki özel bölüme bakın.)

| Proje | Gün | Repo | Link |
|---|:--:|---|---|
| Vanilla JS Todo | 10 · ES6 refactor: 11 | `vanilla-todo-app` | [gurkandizen/vanilla-todo-app](https://github.com/gurkandizen/vanilla-todo-app) |
| API Arama Uygulaması | 14 | `api-arama-uygulamasi` | _(ekle)_ |
| React Todo | 20 | `react-todo-app` | _(ekle)_ |
| Bitirme Projesi | 26-29 | `bitirme-projesi` | _(canlı URL'yi ekle)_ |

---

## Çalışma Kuralları

- **Her gün en az 1 commit**, anlamlı mesajla. → `gun 07: array metodlari tamamlandi` ✅ · `update` ❌
- **Günlük not zorunlu.** "Nerede takıldım" bölümü, mentor görüşmelerinin ana malzemesi.
- **AI kullanımı serbest — ama kuralı var:** ürettiği her satırı açıklayabilmeliyim.
  Açıklayamadığım kod, benim kodum değildir.
- **Gün teorinin değil pratiğin etrafında döner.** Kaynak okuyarak gün geçirmek tuzaktır.
- **Gecikmeye tolerans yok.** Program birikmeye tolerans gösterecek şekilde tasarlanmadı.

---

## Kaynaklar

Kaynak kalabalığı kararsızlık üretir; her konu için tek ana kaynak yeterli.

| Konu | Ana kaynak |
|---|---|
| JavaScript | [javascript.info](https://javascript.info) — ana kaynak · [MDN](https://developer.mozilla.org) — başvuru |
| React | [react.dev](https://react.dev) — "Learn React" bölümü. Eski, class component ağırlıklı eğitimlerden kaçın. |
| Git | [skills.github.com](https://skills.github.com) |
| CSS pekiştirme | [Flexbox Froggy](https://flexboxfroggy.com) · [Grid Garden](https://cssgridgarden.com) |
| Pratik / kata | [Exercism](https://exercism.org) — JavaScript track |