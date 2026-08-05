# Gün 09 — DOM II: Event'ler

**Tarih:** 05 / 08 / 2026

## Bugün ne öğrendim?

- Event objesi: `event.target` (olayın gerçekleştiği element) ile `event.currentTarget` (dinleyicinin bağlı olduğu element) arasındaki fark.
- Capturing/bubbling: olayların DOM ağacında yukarı-aşağı iki aşamalı yolculuğu; `addEventListener`'ın varsayılan olarak bubbling aşamasında dinlediği.
- **Event delegation:** tek tek elemanlara değil, ortak ebeveyne tek dinleyici bağlayıp `event.target` ile kaynağı ayırt etme. Rezervasyon formundaki 6 alanı tek bir `input` ve tek bir `change` dinleyicisiyle yönetmek için gerçek bir senaryoda uyguladım.
- Form event'leri: `input` (her karakterde, "anlık" doğrulama için) ile `change` (seçim/odak bitince) arasındaki fark; hangisinin hangi alan türüne uygun olduğu.
- `preventDefault()` ile formun sayfa yenileme davranışını iptal etme; `stopPropagation()`'dan farkı (biri tarayıcı davranışını, diğeri olay yayılmasını durdurur).
- Constraint Validation API: `checkValidity()`, `input.validity` (valueMissing, typeMismatch, tooShort, rangeUnderflow, rangeOverflow gibi detaylı hata türleri), `setCustomValidity()`.
- `closest()` ile bir elementten yukarı doğru en yakın atayı bulma — hata mesajı kutusunu bulmak için kullandım.
- JavaScript'in `Date` nesnesi: `getFullYear/getMonth/getDate/getDay/getHours/getMinutes`; `getMonth()`'un 0'dan başlaması tuzağı; tarih string'ini `Date`'e çevirirken UTC kaymasını önlemek için yıl/ay/gün'ü ayrı parçalayıp yerel constructor kullanma gerekliliği.
- Basit bir regex kullanımı (`replace(/\D/g, "")`) ile telefon numarasından rakam olmayan karakterleri temizleme; string `.slice()` ile gruplama.
- `hidden` niteliğinin bir CSS sınıfı değil, HTML attribute'u olduğu; `classList` ile değil `removeAttribute`/nitelik atamasıyla yönetilmesi gerektiği.

## Nerede takıldım?

- **`is-invalid`/`is-valid` sınıflarını yanlış elemente ekleme:** İlk yazımda sınıfı `input`'un kendisine ekliyordum, ama CSS seçicim (`.form-field.is-invalid input`) sınıfı **dış kutuda** arıyordu. Kod hatasız çalışıyor gibi görünüyordu (hata mesajları doğru çıkıyordu) ama kenarlık renkleri hiç değişmiyordu — mantık ile görünüm birbirinden bağımsız bozulabiliyormuş.
- **`hidden` niteliğini `classList` ile kaldırmaya çalışmak:** `feedBack.classList.remove("hidden")` yazmıştım, ama `hidden` bir class değil attribute olduğu için hiçbir etkisi olmadı, mesaj kutusu hep gizli kaldı. `removeAttribute("hidden")` ile düzeldi.
- **Template literal'de tırnak türü hatası:** Hata mesajlarında `${input.minLength}` gibi ifadeleri çift tırnak içine yazmıştım, backtick olması gerekiyordu — düzeltmezsem kullanıcı ekranda harfi harfine `${...}` yazısını görecekti.
- **`.reservation-from` yazım hatası:** `form`/`from` harflerinin yer değiştirmesi yüzünden `querySelector` formu hiç bulamıyordu; `if (!reservationForm) return;` sessizce devreye girip fonksiyon hiçbir dinleyici bağlamadan çıkıyordu — hata mesajı bile vermeyen, fark edilmesi zor bir hataydı.
- **`validity.rangeUnderFlow`/`rangeOverFlow` büyük harf hatası:** Gerçek özellik adları küçük harfle (`rangeUnderflow`/`rangeOverflow`); yanlış yazınca JS hata vermiyor, sadece o dal sessizce hiç çalışmıyordu.
- **UTC tarih kayması riski:** `new Date("2026-08-12")` gibi sadece tarih içeren bir string'i doğrudan `Date`'e çevirmenin, saat dilimi farkı yüzünden bir gün öncesine kayabileceğini öğrendim; yıl/ay/gün'ü ayrı parçalayıp `new Date(yil, ay-1, gun)` ile oluşturmanın güvenli yol olduğunu gördüm.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☑ Evet

Event delegation'ı gerçek bir problemde (6 form alanını tek dinleyiciyle yönetmek) uyguladığım için "neden" sorusuna somut cevabım var. `Date` nesnesi ilk kez bugün görüldüğü halde, çalışma saatleri gibi gerçek bir kısıtlamaya uygulanınca hızlıca oturdu.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

- `reservation.js`'in ana mantığını (validateField, event delegation, submit akışı) kendim yazdım, hatalarımı (yukarıdaki liste) kendim düzelttim.
- Telefon maskesi ve tarih/saat kısıtlaması (Date nesnesi, regex, çalışma saatleri mantığı) yeni ve karmaşık olduğu için bu kısmı Claude'dan açıklamasını ve örnek kodlar vermesini istedim — her satırını okuyup anladım, ama bu kısmı sıfırdan ben yazmadım.

## Yarına not

- İmleç konumu korumadan input değerini programatik değiştirmenin (telefon maskesi) küçük bir UX sınırlaması olduğunu unutma — `selectionStart`/`selectionEnd` ile düzeltilebilir, ileride bakılabilir.
- `<input type="time">`'ın gece yarısını (00:00) üst sınır olarak temsil edememesi nedeniyle hafta sonu kapanışını 23:59 olarak sınırlandırdım — bilinçli bir basitleştirme.