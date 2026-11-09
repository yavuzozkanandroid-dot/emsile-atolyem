# Emsile Atölyem 2.2

Üyeliksiz, mobil uyumlu ve çevrimdışı çalışan kişisel Emsile çalışma alanı. Tamamen statik HTML/CSS/JavaScript; dış paket, sunucu, ücretli API veya harici görsel/font isteği yoktur.

## Ders kapsamı

158 ders, 1420 çalışma kartı. Nasara ailesinde 361; Şekera, Ketebe ve Alime ailelerinin her birinde 353 kart vardır. Dört kökün de 24 sîgası, bütün ana fiil çekimleri, isim çekim tabloları ve taaccüp zamirleri bulunur.

- Klasik Emsile-i Muhtelife'nin 24 sîgası (13 fiil, 11 isim). İlk iki ders ayrıca 11 kalıplık başlangıç yoludur.
- Muttaride: 14 şahısta mâzî/muzâri, ma‘lûm ve meçhul; beş olumsuzluk yapısı; emir ve nehiy; 11 isim grubunun sayı/cinsiyet biçimleri ve klasik ek kırık çoğullar; iki taaccüp yapısında nesne zamirleri.
- Alime: عَلِمَ – يَعْلَمُ ayrı hareke düzeniyle üretilir; emir اِعْلَمْ, masdar عِلْمًا, ism-i fâil عَالِمٌ, ism-i mef‘ûl مَعْلُومٌ. Meçhul عَلِمَ ile karıştırılmadan عُلِمَ – يُعْلَمُ olarak çalışılır.
- Kitap haritasında her sîga için özgün, sade Türkçe kural, örnek, ipucu ve ilgili çekimlere bağlantı bulunur. Altı giriş anlatımı ve 14 şahıs zamir tablosu vardır.
- Belirli bir modern baskının tıpkı metni değildir. Açıklamalar uygulama için yazılmıştır. Bütün olası cümle içi i‘rab durumları yerine klasik Emsile sarf örnekleri öğretilir. Emir/nehiyde birinci şahısla ek istek kullanımları açıkça işaretlenir.

## Çalışma ve oyunlar

Ezber kartları, tam 10/30 soruluk testler, farklı sorular tüketilmeden tekrar etmeyen seçim, doğru–yanlış denetimi, açıklamalar, yanlışları tekrar, yarım testi sürdürme. Dar havuzda tekrar gerekirse önceden belirtilir.

Üç oyun: anlam eşleştirme, harekeli Arapça harflerden kelime kurma, 29 sarf kavramından üretilen kesişmeli çengel bulmaca. Günlük hedefler, XP/seviye, rozetler ve 1/3/7/14/30 gün aralıklı tekrar vardır. Oyunlar yenilemeden sonra da devam eder; ödül aynı oturum için iki kez verilmez.

İlerleme yalnız tarayıcıda tutulur. Ayarlar'da JSON yedeği indirme ve silmeden birleştirme bulunur. Cihaz veya alan adı değişiminde yedek kullanılır. Tarayıcı verilerini silmek yerel kayıtları kaldırır. Arapça seslendirme cihazın konuşma motoruna bağlıdır; çevrimdışı ses için yerel Arapça ses gerekir.

## Barındırma

Mevcut Sites adresi herkese açıktır; ziyaretçi girişi yoktur. GitHub Pages gibi statik sunuculara dist içeriği doğrudan yüklenebilir. Manifest ve yollar alt dizin kullanımına uygundur. Ana ekrana ekleme HTTPS ve desteklenen tarayıcı gerektirir. Service worker bütün yerel bağımlılıkları önbelleğe alır; eski sürümden geçişte kayıtlı istemcileri güncel sürüme geçirir.

## Doğrulama

`node --test tests/*.test.mjs`

13 test grubu: 24 sîganın tümünden çalışan ders bağlantıları; 14 şahıs ve Arapça cezm/nasb örnekleri; Alime’nin mâzî/muzâri/emir harekeleri ve bilmek anlamları; her derste tam 10/30 soru ve tekrarsız ilk tur; yalnız doğru kökten seçenekler; skor ve kesinti sonrası devam; çevrimdışı önbellek; eşleştirmede belirsiz çiftleri eleme; Arapça harf/hareke bütünlüğü; 100 rastgele bulmacada tutarlı kesişimler ve çözülebilirlik; XP/tekrar planı; güvenli ve kayıpsız yedek birleştirme.

Tarayıcıda üç oyun baştan sona tamamlandı. 25+30+45=100 XP ve seviye 2 kaydı yenileme sonrası doğrulandı. 390px mobil görünümde kitap ve bulmaca yatay taşma göstermedi. Önceki sürümde 10 soruluk test tamamlandı ve 30 soru seçimi doğrulandı. Fiziksel telefona kurulum ve cihaz ses motoru ayrıca cihaz desteğine bağlıdır.

2.2 sürümünde Alime kökü, 24 sîga haritası ve 14 mâzî kartı tarayıcıda açıldı; Alime dersinden 30 soruluk test başlatıldığı doğrulandı. Kaynak bağlantıları uygulamanın Ayarlar bölümündedir.

Şekera, Ketebe ve Alime’nin nadir isim türetmeleri açıkça vezin uygulaması olarak işaretlidir. Sözlük masdarları ayrıca ele alınır; masdar, yalnız biçimden tahmin edilmez. Tam bir modern baskı karşılaştırması için o baskının PDF/sayfaları gerekir.
