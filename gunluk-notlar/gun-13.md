# Gün 13 — Fetch ve API tüketimi

**Tarih:** 17 / 08 / 2026

## Bugün ne öğrendim?

- **`fetch()` bir Promise döner:** Gün 12'deki sahte `siparisVer()` ile birebir aynı mantık — tek fark, dükkanın artık gerçek bir sunucu (JSONPlaceholder) olması. `response.json()`'un da ayrı bir Promise olduğunu, verinin iki aşamada (önce "cevap zarfı", sonra gerçek içerik) geldiğini gördüm.
- **JSON:** sunucuyla ortak veri dili; gelen ham metni JavaScript objesine çevirmek için `.json()` gerekiyor.
- **HTTP durum kodları:** 2xx başarı, 4xx istemci hatası, 5xx sunucu hatası. JSONPlaceholder, olmayan bir id (999) için gerçek bir API gibi davranıp `404` döndü.
- **`response.ok` / `response.status` ile içerik birbirinden BAĞIMSIZ:** 404 gelen bir cevabın `.json()` içeriği boş bir obje (`{}`) olabiliyor — durum kodunu kontrol etmezsem, boş içeriği "başarılı" sanıp geçebilirdim.
- **`throw new Error(...)` ile gerçek hata üretme:** `fetch`'in Promise'i sadece ağ tamamen koparsa reject olur; 404/500 gibi durumlar `fetch` için "başarılı cevap" sayılır. Bu yüzden `response.ok` false olduğunda hatayı kendi elimle fırlatmam gerekti.
- **Hatayı yutmamak — `throw hata;` ile yeniden fırlatma:** Bir fonksiyonun içindeki `catch` sadece `console.log` yapıp hiçbir şey `return`/`throw` etmezse, o fonksiyonun döndürdüğü Promise reject değil `undefined` ile resolve olur — dışarıdaki `.catch` hiç tetiklenmez. Bunu canlı gördüm: `throw hata;` eklemeden önce `"Başarılı: undefined"` basıyordu, ekleyince doğru şekilde `.catch`'e düştü.
- **Veri katmanı / gösterim katmanı ayrımı:** `fetch` yapan fonksiyon (`kullanicilariGetir`) DOM'dan tamamen habersiz kalmalı, sadece veri getirmeli ya da hata fırlatmalı. DOM'u güncelleyen kod (`sayfayiYukle`) bu fonksiyonu çağırıp sonucu/hatayı ekrana yansıtmalı — ikisini karıştırmamak yeniden kullanılabilirlik için önemli.
- **loading/success/error üç durumu yönetmek:** istek gönderilir gönderilmez "Yükleniyor..." göstermek, veri gelince listeyi doldurup mesajı temizlemek, hata olursa kullanıcıya anlaşılır bir cümle (ham hata değil) göstermek.

## Nerede takıldım?

- **`await` unutma:** İki ayrı yerde (`02-durum-kodlari.js` ilk denemesinde ve `04-liste-cekme-html.js`'in veri katmanında) `fetch(...)` çağrısının önüne `await` koymayı unuttum — `response` değişkeni gerçek cevap yerine çözülmemiş bir Promise oldu, `response.ok`/`response.status` bu yüzden `undefined` döndü.
- **`response.ok` ile `response.status`'u karıştırma:** Hata mesajını `${response.status}` yerine `${response.ok}` ile kurdum — anlamsız bir `"İstek Başarısız: false"` mesajı çıktı, oysa kullanıcının/logun asıl bilmesi gereken durum koduydu (404, 500 vb.).
- **HTML'de eksik `<`:** `<ul id="liste">` yazarken başındaki `<` işaretini unuttum, tarayıcı geçersiz bir etiket olarak yorumladı.
- **Fonksiyonu tanımlayıp çağırmayı unutma:** Birkaç kez (`02`'de ve `04`'te) bir fonksiyonu doğru yazdıktan sonra onu hiç çağırmadım — kod "doğru" görünüyordu ama çalıştırınca hiçbir çıktı gelmiyordu.
- **İçteki `catch`'in hatayı yutması:** `03-hata-yonetimi.js`'de fonksiyonun içindeki `catch` bloğu sadece logluyor, dışarı hiçbir şey fırlatmıyordu — dıştaki `.catch`'in neden hiç çalışmadığını önce tahmin ettim (`Başarılı: undefined` çıkacağını doğru öngördüm), sonra `throw hata;` ekleyerek düzelttim.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

`fetch`'in reject olma koşulunun sadece ağ hatası olduğunu, 404/500'ün "başarılı ama kötü haberli" bir cevap sayıldığını ve bu yüzden `response.ok`'u kontrol edip kendi hatamı fırlatmam gerektiğini örneksiz anlatabiliyorum. En net kavradığım şey: bir hatayı loglamak onu "halletmek" değildir — çağıran kodun haberdar olması gerekiyorsa `throw` ile yukarı taşınmalı.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- Kavram rehberi (fetch, JSON, HTTP durum kodları, loading/hata yönetimi) web sayfası olarak hazırlandı; tüm kod satırlarını ben yazdım, Claude sadece adım adım yorum satırlarıyla yönlendirdi ve yazdığım kodu inceleyip hataları buldu.

## Yarına not

- Gün 14 (API projesi), bugün kurduğu veri/gösterim katmanı ayrımını gerçek bir mini projeye taşıyacak.
