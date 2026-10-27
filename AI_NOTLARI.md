# AI Notları

**Copilot erişimi:** Evet / Hayır  <!-- birini bırakın. Hayırsa: "Dersin örnek kodları kullanıldı; aynı inceleme, açıklama ve testler yapıldı." yazın -->

## Kullandığım prompt'lar
1. **Prompt:** "HTML ve JavaScript öğrenmeye yeni başladım. etkinlikler.html ve style.css dosyalarını incele. Mevcut tasarımı koruyarak e-spor etkinlik başlıklarında arama yapabileceğim bir özellik için kısa bir plan öner. Henüz dosyaları değiştirme."
   **Amacı:** Kodu yazdırmadan önce plan ve test yöntemini görmek.
2. **Prompt:** "script.js içine, kullanıcı yazdıkça h3 başlıklarına göre turnuva kartlarını filtreleyen, büyük/küçük harf ve baştaki/sondaki boşlukları yok sayan bir fonksiyon yaz."
   **Amacı:** Arama özelliğinin ilk sürümünü oluşturmak.
3. **Prompt:** "Görünen etkinlik sayısını yazan bir sayaç, eşleşme yoksa mesaj ve aramayı sıfırlayan bir Temizle düğmesi ekle."
   **Amacı:** Kabul ölçütlerinin kalan kısmını tamamlamak.

## Bir AI önerisini değerlendirmem
Copilot arama için `toLowerCase()` kullanmayı önerdi. Türkçede `I` ve `İ` harfleri bu yüzden yanlış eşleşebildiği için bunu `toLocaleLowerCase("tr-TR")` olarak **değiştirdim**. Ayrıca kartları silip yeniden oluşturan önerisini kabul etmedim; kartları HTML'de bırakıp yalnızca `gizli` sınıfını ekleyip çıkarmayı seçtim, çünkü bu daha basit ve tasarımı bozmuyor.

## Kod açıklamalarım (kendi cümlelerinizle düzenleyin)
**Event listener:** `kutu.addEventListener("input", filtrele)` satırı, arama kutusuna her harf yazıldığında veya silindiğinde `filtrele` fonksiyonunu çalıştırır. Böylece kullanıcı Enter'a basmadan sonuçlar yazdıkça güncellenir.

**Filtreleme koşulu:** `aranan === "" || baslik.includes(aranan)` koşulu, kutu boşsa tüm kartları, doluysa yalnızca başlığında aranan ifade geçen kartları gösterir. `trim()` baştaki ve sondaki boşlukları attığı için yalnızca boşluk yazılırsa kutu boş sayılır.

## Code review notları
- Diff'te gereksiz boşluk ve kullanılmayan değişkenleri temizledim.
- Arama kodu yalnızca `etkinlikler.html` içinde çalışsın diye `if (!kutu ...) return;` kontrolü bıraktım.
