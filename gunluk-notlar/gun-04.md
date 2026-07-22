# Gün 04 — JavaScript Temelleri I

**Tarih:** 22 / 07 / 2026

## Bugün ne öğrendim?

- **`const` vs `let`:** Değişmeyecek değerler `const`, değişecekler `let`. `const`'u değiştirmeye çalışınca `TypeError: Assignment to constant variable` hatası alınıyor ve program o noktada tamamen duruyor (hatadan sonraki kodlar hiç çalışmıyor).
- **String/sayı tuzağı:** HTML formundan gelen değerler her zaman **string**'dir. `*` operatörü string'i zorla sayıya çevirip gerçek çarpma yapar (`"4" * 50` → `200`), ama `+` operatörü string varsa **birleştirme** yapar (`"4" + 50` → `"450"`, üç karakterlik bir yazı, sayı değil).
- **`Number()` ile dönüşüm:** `Number("4")` string'i gerçek sayıya çevirir. Dönüşümden sonra `+` de doğru toplama yapar (`4 + 50 = 54`). Form verileriyle çalışırken bu dönüşümü atlamak, sessiz ve fark edilmesi zor hatalara yol açıyor.
- **Template literal (`` ` `` ile string):** `${...}` içine bir hesap yazarsan önce hesaplanır, sonra metne gömülür. Ama `${}` içinde sadece görüntü amaçlı yazı varsa (mesela `${a} * ${b}`), bu gerçek bir çarpma değil, sadece yan yana yazılmış metindir.
- **`if / else if / else` ve sınır değerleri:** `>` ile `>=` arasındaki tek karakterlik fark, bir sınır değerinin (mesela "8 kişi") geçerli sayılıp sayılmayacağını belirliyor. Bu yüzden sadece "ortalama" bir değil, tam sınırdaki değeri de test etmek gerekiyor.
- **`switch` ve `break`:** Art arda gelen, aralarında kod olmayan `case`'ler bir arada gruplanabiliyor (fall-through, bilinçli kullanım). Ama bir `case`'in sonunda `break` unutulursa, kontrol bir sonraki case'lere "sızıyor" ve hatta `default` bloğuna kadar gidip onu da çalıştırabiliyor.

## Nerede takıldım?

Takılma değil ama dikkat çekici bir an oldu: bir alıştırmada (if/else, kişi sayısı kontrolü) mentörümün (Claude'un) beni yanlışlıkla iki kere sorguladığı, aslında benim cevabımın doğru olduğu bir durum yaşandı (basit bir toplama üzerinden). Bu bana şunu öğretti: bir "doğrulayıcı" (ister insan ister araç) her zaman haklı değildir — kendi hesabıma güvenip gerektiğinde ısrar etmem gerekiyor, özellikle temel bir işlemden eminsem.

Teknik olarak asıl zorlandığım yer, `"4" + 50` ile `Number("4") + 50` arasındaki farkı ilk seferde tam kestirebilmekti — ikisi de "toplama" gibi göründüğü için, hangisinin ne zaman string birleştirmesine hangisinin gerçek toplamaya döneceğini ayırt etmek pratik gerektirdi.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ☐ Evet · ☐ Hayır

- **Evet** → konu oturmuş, ilerle. İstersen aynı gün bir sonraki konuya geç.
- **Hayır** → gün "bitti" sayılır ama ertesi sabah 15-20 dk bu konuya geri dön.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

Alıştırma senaryolarını (hangi JS konusunun projenin hangi ihtiyacına karşılık geldiğini) Claude ile birlikte planladım, ama kodun tamamını kendim yazdım, her satırı çalıştırıp gerçek çıktısını gördüm. Özellikle `const` hatası, tip dönüşüm tuzağı ve `break` unutma gibi hataları bilerek/kontrollü şekilde tetikleyip sonuçlarını gözlemledim — bunlar ezberlenmiş bilgi değil, denenerek görülmüş sonuçlar.

## Yarına not

- Mentöre projeye entegrasyon kararını (10 alıştırmanın hepsinin proje ihtiyaçlarına bağlı olduğunu) göster.
- Gün 5'te fonksiyonlar gelince, bu 10 alıştırmayı fonksiyonlara dönüştürmeyi (refactor) düşün — doğal bir ilerleme adımı olur.
- Gün 8-9 DOM'a geçince `js-temeller/` içindeki mantığı projeye taşımayı unutma (README'deki "İleriye not" bölümünde hangi alıştırmanın nereye bağlanacağı yazılı).