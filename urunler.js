/* =====================================================================
   LOYANI ÇİÇEK OTOMATI · ÜRÜN, FİYAT VE GÖRSEL AYARLARI
   Bu dosyayı bir metin editörüyle (Not Defteri, TextEdit, VS Code) açıp düzenleyin.
   Görsel isteğe bağlı: assets/urunler/ klasörüne bolme_01.jpg gibi koyup gorsel: "bolme_01.jpg" yazarsanız seçim ve onay ekranında fotoğraf görünür; boşsa yalnızca numara görünür.
   Fiyat: yalnızca rakam, KDV dahil TL (1184 = 1.184 TL). Stok 0 olan bölme ekranda "Sahibini buldu" olarak görünür.
   Kaydettikten sonra prototip/index.html dosyasını yenileyin; PNG'leri yeniden üretmek için ekranlari_uret.command (Mac) ya da ekranlari_uret.bat (Windows) çalıştırın.
   ===================================================================== */
window.LOYANI = {
  dolap: { sutun: 3, satir: 4, ekran_gozu: 5 },   // Makine: 3 sütun x 4 sıra = 12 göz. 5. göz (2. sıra orta) ekran ve POS; kalan 11 göz bölmedir ve soldan sağa, yukarıdan aşağıya 1..11 numaralanır.
  // Görsel ve ürün adı İSTEĞE BAĞLIDIR: boş bırakılırsa ekran yalnızca bölme numarası, seri adı ve fiyat gösterir (bölme içeriği değişse de ekran doğru kalır).
  destek: "0 531 980 25 17",
  site: "www.loyani.com",
  instagram: "@loyani_ly",
  servis_sifresi: "2580",
  urunler: [
    { bolme: 1,  gorsel: "", seri: "Loyani Bloombox",      ad_tr: "", ad_en: "",         fiyat: 1184, stok: 3,
      olcu: "35 x 30 x 17,5 cm", malzeme_tr: "Şeffaf pleksi kutu, sürgülü kapak", malzeme_en: "Clear acrylic box, sliding lid" },
    { bolme: 2,  gorsel: "", seri: "Loyani Bloombox",      ad_tr: "", ad_en: "",        fiyat: 1184, stok: 2,
      olcu: "25 x 35 x 17,5 cm", malzeme_tr: "Şeffaf pleksi kutu, sürgülü kapak", malzeme_en: "Clear acrylic box, sliding lid" },
    { bolme: 3,  gorsel: "", seri: "Loyani Bloombox",      ad_tr: "", ad_en: "",       fiyat: 1184, stok: 1,
      olcu: "25 x 35 x 17,5 cm", malzeme_tr: "Şeffaf pleksi kutu, sürgülü kapak", malzeme_en: "Clear acrylic box, sliding lid" },
    { bolme: 4,  gorsel: "", seri: "Loyani Bloombox",      ad_tr: "", ad_en: "",        fiyat: 1290, stok: 2,
      aciklama_tr: "Mavi, mor ve beyazın uyumu; ön yüzünde \"Happy Birthday\" detayı.", aciklama_en: "Blue, purple and white with a \"Happy Birthday\" detail on the front.",
      olcu: "35 x 30 x 17,5 cm", malzeme_tr: "Şeffaf pleksi kutu, sürgülü kapak", malzeme_en: "Clear acrylic box, sliding lid" },
    { bolme: 5,  gorsel: "", seri: "Loyani Bloombox",      ad_tr: "", ad_en: "",           fiyat: 1290, stok: 2,
      aciklama_tr: "Bordo ve gece mavisi güller; takvim detayı ve \"Happy Anniversary My Love\" yazısı.", aciklama_en: "Burgundy and midnight blue roses with a calendar detail.",
      olcu: "35 x 30 x 17,5 cm", malzeme_tr: "Şeffaf pleksi kutu, sürgülü kapak", malzeme_en: "Clear acrylic box, sliding lid" },
    { bolme: 6,  gorsel: "", seri: "Loyani Bloombox",      ad_tr: "", ad_en: "",         fiyat: 1184, stok: 3,
      olcu: "35 x 30 x 17,5 cm", malzeme_tr: "Şeffaf pleksi kutu, sürgülü kapak", malzeme_en: "Clear acrylic box, sliding lid" },
    { bolme: 7,  gorsel: "", seri: "Loyani Bloombox Mini", ad_tr: "", ad_en: "",           fiyat: 890,  stok: 4,
      olcu: "20 x 20 cm", malzeme_tr: "Şeffaf pleksi kutu, çıkarılabilir kapak", malzeme_en: "Clear acrylic box, removable lid" },
    { bolme: 8,  gorsel: "", seri: "Loyani Kadife Aranjman", ad_tr: "", ad_en: "",   fiyat: 1450, stok: 1,
      olcu: "Büyük boy kadife kutu", malzeme_tr: "Premium kadife kaplama", malzeme_en: "Premium velvet finish" },
    { bolme: 9,  gorsel: "", seri: "Loyani Kadife Aranjman", ad_tr: "", ad_en: "", fiyat: 1450, stok: 0,
      olcu: "Büyük boy kadife kutu", malzeme_tr: "Premium kadife kaplama", malzeme_en: "Premium velvet finish" },
    { bolme: 10, gorsel: "", seri: "Loyani Kadife Aranjman", ad_tr: "", ad_en: "",       fiyat: 1290, stok: 2,
      olcu: "Orta boy silindir kutu", malzeme_tr: "Premium kadife kaplama", malzeme_en: "Premium velvet finish" },
    { bolme: 11, gorsel: "", seri: "Loyani Vazoda Aranjman", ad_tr: "", ad_en: "",     fiyat: 1350, stok: 2,
      olcu: "Küçük boy vazo", malzeme_tr: "Seramik vazo", malzeme_en: "Ceramic vase" },
  ],
};
