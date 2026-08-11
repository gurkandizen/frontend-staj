# Gün 11 — Modern JavaScript (ES6+)

**Tarih:** 11 / 08 / 2026

## Bugün ne öğrendim?

- **Arrow function derinlemesine:** Implicit return (süslü parantez ve `return` olmadan tek ifadeyi otomatik döndürme); obje döndürürken parantezle sarmanın zorunlu olduğu (`() => ({...})`), aksi halde JS'in `{ }`'ı kod bloğu sanması; `this` davranışının arrow function'da normal fonksiyondan farklı olduğu (arrow function `this`'i kendi tanımlandığı çevreden miras alır, çağrıldığı objeden değil).
- **Destructuring:** Obje destructuring (`{ ad, email }`), farklı isimle alma (`{ ad: isim }`), varsayılan değer (`{ telefon = "..." }`), iç içe destructuring (`{ adres: { sehir } }`), dizi destructuring (eleman atlama, sıraya göre alma), fonksiyon parametresinde destructuring.
- **Spread ve Rest:** Aynı `...` sembolünün iki farklı işi — spread (dizi/obje kopyalama, birleştirme; atama operatörünün sağında), rest (fonksiyon parametrelerini toplama, destructuring'de "geri kalanı alma"; atama operatörünün/parametre listesinin solunda).
- **Template literal ileri düzey:** Çok satırlı string, `${}` içine doğrudan hesaplama/ternary/fonksiyon çağrısı yazma, hatta iç içe template literal.
- **Modüller derinlemesine:** Named export ile birden fazla şey dışa aktarma (zaten biliyordum), `import * as İsim` ile tüm modülü tek obje gibi alma (yeni).
- **Object shorthand property:** Alan adı ile değişken adı aynıysa (`text: text`), sadece `text` yazmanın yeterli olduğu — PDF'te değinilmemiş, alıştırma sırasında öğrendiğim küçük bir ES6 detayı.
- **Mutasyonsuz güncelleme (React'e hazırlık):** `find` ile bulup doğrudan değiştirmek yerine, `map` + spread + ternary ile "değişecek olanın kopyasını üretip diğerlerini olduğu gibi bırakma" deseni — ileride React'te zorunlu olacak bir felsefenin JS temeli.
- **`localStorage`'ın origin bazlı çalıştığı:** `file://` ile `http://localhost` (Live Server), tarayıcı için tamamen farklı "adresler" sayılıyor, her birinin **ayrı** `localStorage` deposu var — bu yüzden sayfayı yanlış şekilde açınca önceden eklenmiş görevler "kaybolmuş" gibi görünüyor (aslında değiller, sadece farklı bir depoya bakıyorsun).

## Nerede takıldım?

- **`completed`/`complated` yazım hatası:** Birden fazla dosyada tekrar tekrar aynı yazım hatasını yaptım, fark etmem birkaç tur sürdü — tutarlılık kontrolü konusunda dikkatli olmam gerektiğini gösterdi.
- **Obje döndüren arrow function'ı doğru kurmak:** İlk denemelerde ya parametre almayan ya da var olan bir değişkeni döndüren fonksiyonlar yazdım; asıl istenen "parametre alıp YENİ bir obje literal'i implicit return ile döndürme" kalıbını birkaç turda kavradım.
- **Paylaşılan mutasyon hatası:** İki farklı fonksiyonun (normal ve arrow) aynı objeyi `!task.completed` yerine `task.completed = !task.completed` ile mutasyona uğratması, ikisinin farklı sonuç vermesine yol açtı — "aynı girdide aynı sonucu karşılaştırma" amacını bozdu. Sadece hesaplayıp döndürerek (mutasyonsuz) düzelttim.
- **Dosya karışıklığı:** `02-destructuring.js`'e yazmam gereken senaryoları yanlışlıkla `01-arrow-functions.js`'in içine, önceki senaryoların arasına eklemiştim — dosyaları ayırmam gerektiğini fark edip düzelttim.
- **Varsayılan değer ile "dizide gerçekten var olan eleman" kavramlarını karıştırma:** Bir dizi destructuring senaryosunda, dizide olmayan bir elemana varsayılan değer vermek ile dizide gerçekten var olan bir elemanı atlayarak almak birbirine karıştı; ikisi görünüşte aynı sonucu (aynı değeri yazdırma) verdiği için hatayı ilk seferde fark etmedim.
- **`map`'e yanlış argüman verme (Aşama B):** `toggleTask`'ı mutasyonsuz hale getirirken, `map`'e tek bir callback fonksiyonu yerine virgülle ayrılmış iki ayrı ifade (`tasks.map(t.id === id, {...})`) verdim — geçerli olmayan bir söz dizimiydi, `t` de hiçbir yerde tanımlanmamıştı. Doğrusu, `t => t.id === id ? {...t, completed: !t.completed} : t` şeklinde tek bir arrow function + ternary'ydi.
- **Değişken yeniden adlandırmada satır atlama (Aşama B, gerçek çökme):** `render.js`'te `text` ismini hem destructuring'den gelen string hem de bir DOM elementi için kullanmıştım; elementi `elSpan` olarak yeniden adlandırırken, `text.classList.add(...)` satırını gözden kaçırdım. Bu, tarayıcıda gerçek bir çökmeye yol açtı: `renderTasks` bir tamamlanmış göreve gelince hata fırlatıp duruyordu, bu yüzden hem yeni görev eklenemiyor (fonksiyonun geri kalanına, event listener'ların bağlandığı satırlara hiç ulaşılamıyordu) hem de var olan görevler ekranda hiç görünmüyordu (silinmemişlerdi, sadece render çöktüğü için basılamıyorlardı).
- **`file://` ile açma sonucu modül + localStorage karışıklığı (Aşama B):** Sayfayı doğrudan çift tıklayarak açtığımda, `type="module"` script CORS nedeniyle hiç yüklenmedi; ayrıca `file://` ile `http://localhost` (Live Server) farklı origin sayıldığı için görevlerim "kaybolmuş" gibi göründü. Live Server ile açınca ikisi de düzeldi.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

Özellikle "spread mi rest mi" ayrımını ve `this` farkını, birkaç hata yapıp düzelterek çok daha net kavradım. İzole alıştırmalarda kod bana hiç verilmedi, sadece adımlar ve ipuçları verildi — her satırı kendim yazdım.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- Kavram anlatımı (Arrow Function, Destructuring, Spread/Rest, Template Literal, Modüller) PDF olarak Claude tarafından hazırlandı.
- Beş alıştırma dosyasının (Aşama A) **tamamı** tarafımdan yazıldı — kod hiç verilmedi, sadece görev adımları ve (takıldığım noktalarda) ipuçları alındı.
- Aşama B'de (gerçek proje refactor'ü) hangi dosyada hangi ES6 fırsatının anlamlı olduğu bana açıklandı, ama kod satırlarını yine kendim yazdım — hatalarımı (map syntax hatası, çökme) kendim düzelttim.
- Evet, yazdığım her satırı açıklayabiliyorum.

## Yarına not

- Aşama B tamamlandı: `storage.js`, `render.js`, `todo.js` refactor edildi, PR birleşti → [PR #1](https://github.com/gurkandizen/vanilla-todo-app/pull/1)
- `todo.js`'teki kalan `function` bildirimleri (`generateId`, `deleteTask`, `getFilteredTasks`, `refresh`, `setFilter`, `initTodoApp`) bilinçli olarak arrow function'a çevrilmedi — kapsamı gereksiz genişletmemek için bırakıldı.