# Gün 01 — Ortam kurulumu ve Git

**Tarih:** 17 / 07 / 2026

## Bugün ne öğrendim?

- `git init`, bir klasörü Git deposuna çevirir; içine `.git` adında gizli bir klasör oluşturur ve tüm commit geçmişi orada saklanır. Bir klasörde sadece bir kere çalıştırılır.
- `git add`, değişiklikleri "staging area" denen bir ara bölgeye taşır — yani "bir sonraki commit'e şunları dahil et" demektir. `git add dosya-adi` tek dosya, `git add .` o an klasördeki tüm değişiklikler için kullanılır.
- `git commit -m "mesaj"`, staging area'daki değişiklikleri bir mesajla birlikte kalıcı bir kayıt noktası olarak Git geçmişine işler. Her commit, o ana kadarki değişikliklerin bir fotoğrafı gibi düşünülebilir.
- `git push`, yerel makinedeki commit'leri GitHub'daki uzak repoya (remote) gönderir. `add` ve `commit` sadece kendi bilgisayarımda kalır — `push` atmadan GitHub'da hiçbir şey görünmez.
- Sıralama: `add` → `commit` → `push`. `init` sadece proje başında bir kez.

## Nerede takıldım?

`.gitignore` dosyası ilk kopyalamada repoya gelmemişti. Sebebi, nokta ile başlayan dosyaların Windows'ta gizli dosya sayılması ve Gezgin'in bunları varsayılan ayarlarda göstermemesi — bu yüzden bir klasörden diğerine Gezgin üzerinden kopyalarken dosya sessizce atlanmış.

Sorunu, PowerShell'de `Get-ChildItem -Force` komutuyla doğruladım (bu komut gizli dosyaları da listeler). Dosyanın gerçekten eksik olduğunu görünce Windows Gezgini'nde "Hidden items" (gizli ögeler) seçeneğini açtım, dosyayı görünür hale getirip doğru klasörden tekrar kopyaladım ve commit'ledim.

## Bu konuyu kod olmadan anlatabilir miyim?

**Cevap:** ✅ Evet · ☐ Hayır

- **Evet** → konu oturmuş, ilerle. İstersen aynı gün bir sonraki konuya geç.
- **Hayır** → gün "bitti" sayılır ama ertesi sabah 15-20 dk bu konuya geri dön.

## AI kullandım mı? Ürettiği her satırı açıklayabiliyor muyum?

> Program kuralı: açıklayamadığın kod, senin kodun değildir.

- Daha önceden de hem kendi tuttuğum notları github'a aktarırken hem de yaptığım projelerde git kullandığım için ve aynı hatayı daha öncede aldığım için yapay zekayı çözüm için değil doğruluğunu teyit etmek için kullandım.