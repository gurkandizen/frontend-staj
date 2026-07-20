# Gün 02 — HTML/CSS Pekiştirme: Flexbox

**Tarih:** 20 / 07 / 2026

## Bugün ne öğrendim?

- Flexbox'ın temel özellikleri (`display: flex`, `flex-direction`, `justify-content`, `align-items`, `gap`) ve üç değerli kısayolu (`flex: grow shrink basis`) — sabit oranlı (`flex: 0 0 32%`) ve eşit paylaşımlı (`flex: 1`) kullanımlar arasındaki fark.
- `position: fixed` ile bir elemanı sayfa akışından çıkarmanın sonucu (içeriğin altta kalması) ve bunu `padding-top` ile telafi etme.
- `z-index`'in sadece `position` değeri `static` olmayan elemanlarda çalıştığı, ve üst üste binen elemanlar arasında göreceli bir karşılaştırma olduğu.
- CSS-only (checkbox-hack) açılır-kapanır menü: gizli `<input type="checkbox">` + `<label for="">` + `:checked ~` seçicisi ile JavaScript kullanmadan mobil menü.
- `clamp(min, tercih, max)` ile sabit piksel yerine ekrana oranlı, sınırlı responsive değerler üretme.
- `mask-image` ile bir deseni belirli bölgelerde görünür/görünmez yapma (radial/linear gradient maskeleri).
- SVG `<defs>/<symbol>/<use>` sistemi ile bir şekli bir kere tanımlayıp defalarca çağırma — kod tekrarını ve bakım yükünü azaltma.
- `::first-letter`, `::after` gibi pseudo-elementlerle, ekstra HTML eklemeden görsel detay (drop-cap, süsleme çizgisi) üretme.
- `nth-child()` ile kardeş elemanları ayrı ayrı hedefleme (hamburger ikonunun X'e dönüşmesi).

## Nerede takıldım?

En sık yaptığım hata **iç içelik (nesting) hatalarıydı** — hero-container'ı erken kapatmamak, menu-spine/menu-body'yi menu-plate'in dışında bırakmak gibi. Üç kere art arda benzer bir hata yaptım, bu bana artık HTML yazarken "bu eleman nereye ait, kiminle kardeş" diye kendime sormayı otomatik bir alışkanlık haline getirmem gerektiğini gösterdi.

Küçük yazım hataları da oldu (`m-leander` yerine `m-leader`, `section-descripton` yerine `section-description`, `socia-media` yerine `social-media`) — bunlar hata vermiyor ama sessizce çalışmıyor, fark etmesi zaman alıyor.

Kavramsal olarak en çok zorlandığım yer `z-index`'in sadece göreceli bir karşılaştırma olduğunu, ve `fixed`/`absolute` gibi bir `position` değeri olmadan hiç işe yaramadığını içselleştirmekti — bunu kendi kelimelerimle anlatmam birkaç denemeye mal oldu.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** [x] Evet · [ ] Hayır

- **Evet** → konu oturmuş, ilerle. İstersen aynı gün bir sonraki konuya geç.
- **Hayır** → gün "bitti" sayılır ama ertesi sabah 15-20 dk bu konuya geri dön.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

Evet, kafamda ki tasarımı ve detayları Claude ve Gemini kullanarak tartıştım, görsel tasarımını (renk paleti, mühür/koza/kafes motifleri, SVG çizimleri) ve bazı ileri CSS tekniklerini (checkbox-hack, mask-image, SVG use sistemi) Claude ile birlikte geliştirdim — bunu mentörüme açıkça belirteceğim. Teslimden önce kendimi 45 soruluk bir listeyle sınadım, 24 öncelikli sorunun tamamını (bazılarını birden fazla denemeyle) doğru ve kendi cümlelerimle açıklayabildiğimi doğruladım. Zayıf kaldığım birkaç soruyu tekrar tekrar deneyerek pekiştirdim.
## Yarına not

- Kalan ~21 ikincil soruyu gözden geçir (öncelikli olmayanlar — `ch` birimi, `inline` vs `inline-block`, iki breakpoint neden ayrı gibi detaylar).
- S1, S19, S20'yi bir kez daha, hiç durmadan, akıcı şekilde tekrar et — bunlar tekrar tekrar zayıflayan sorulardı.
- Mentörle görüşme yarına ertelendi, teslim de ona göre.