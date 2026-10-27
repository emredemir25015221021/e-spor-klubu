# Test Notları

Her testi tarayıcıda kendiniz yapın, "Gerçekleşen sonuç" ve "Durum" sütunlarını doldurun.
Etkinlik başlıkları: Valorant Kampüs Turnuvası, League of Legends 5v5 Maçı, CS2 Dostluk Maçı, EA FC Kampüs Kupası, Oyun Geliştirme Atölyesi, Yayıncılık ve Caster Eğitimi.

| # | Girdi / işlem | Beklenen sonuç | Gerçekleşen sonuç | Geçti/Kaldı |
|---|---|---|---|---|
| 1 | "turnuva" yaz (başlığın bir bölümü) | Yalnızca "Valorant Kampüs Turnuvası" görünür; sayaç 1 / 6 | Arama kutusuna "turnuva" yazıldığında ekranda sadece "Valorant Kampüs Turnuvası" kartı kaldı ve sayaç doğru bir şekilde "1 / 6" değerini gösterdi. | Geçti |
| 2 | "VALORANT" sonra "valorant" yaz | İki girişte de "Valorant Kampüs Turnuvası" görünür; sayaç 1 / 6 | Her iki kelime girişinde de büyük/küçük harf duyarlılığı olmadan filtreleme çalıştı, ilgili kart gösterilip sayaç "1 / 6" olarak güncellendi. | Geçti |
| 3 | "xyz123" yaz | Sayaç 0 / 6; "bulunamadı" mesajı görünür | Hiçbir başlıkla eşleşmeyen bu veri girildiğinde tüm kartlar gizlendi, sayaç "0 / 6" oldu ve ekranda "Sonuç bulunamadı" uyarı mesajı belirdi. | Geçti |
| 4 | Yalnızca boşluk yaz; sonra bir şey yazıp Temizle'ye bas | Her ikisinde de 6 etkinlik görünür; sayaç 6 / 6 | Sadece boşluk karakteri girildiğinde filtreleme tetiklenmedi ve tüm kartlar göründü. Metin yazılıp Temizle butonuna basıldığında arama sıfırlandı, sayaç "6 / 6" oldu. | Geçti |
| 5 | Menüden üç sayfanın bağlantılarını aç | Her bağlantı doğru sayfaya gider | Ana Sayfa, Etkinlikler ve Hakkımızda sayfalarındaki navigation linkleri test edildi, her biri tıklandığında sorunsuz olarak ilgili HTML sayfasına geçiş yaptı. | Geçti |
| 6 | 390 px genişlik + Tab tuşu | Yatay kaydırma çıkmaz; Tab ile arama kutusuna ve Temizle düğmesine ulaşılır | Geliştirici araçlarından ekran 390px yapıldığında yatay kaydırma çubuğu çıkmadı (responsive tasarım). Klavyeden Tab tuşu ile arama alanına ve temizle butonuna focuslanılabildi. | Geçti |

## Bulunan sorunlar ve düzeltmeler

