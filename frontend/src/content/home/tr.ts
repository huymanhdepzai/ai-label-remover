import type { HomeBasics } from '../pages/types';

const tr: HomeBasics = {
  reassure: 'Çevrimiçi, ücretsiz, kayıt ve kurulum gerektirmez — fotoğraflar doğrudan tarayıcınızda okunup temizlenir ve hiçbir zaman bir sunucuya yüklenmez.',
  sources: {
    label: 'Şunlarla oluşturulan görsellerdeki meta verileri okur ve kaldırır:',
    note: 'Ürün adları yalnızca görsellerin kaynağını belirtir; AI Label Remover bu şirketlerle bağlantılı değildir.',
  },
  learn: {
    what: {
      title: 'Meta veri nedir?',
      paragraphs: [
        'Meta veri “veri hakkındaki veridir”: bir görsel dosyasının içinde saklanan ve fotoğrafın kendisinde asla görünmeyen notlar. Kameralar, telefonlar, fotoğraf düzenleyiciler ve yapay zekâ görsel üreticileri bunları otomatik olarak, çoğu zaman haber vermeden ekler.',
        'Fotoğraflarda meta veriler beş büyük gruba ayrılır. Her biri görsel hakkında — ve onu çeken ya da üreten kişi hakkında — farklı bir soruyu yanıtlar.',
      ],
      types: [
        { name: 'Tanımlayıcı', text: 'Başlık, açıklama, anahtar kelimeler, karedeki kişilerin adları.', example: 'IPTC Caption, XMP dc:title' },
        { name: 'Teknik', text: 'Kamera markası ve modeli, lens, diyafram, enstantane, ISO, seri numarası.', example: 'EXIF Make, Model, BodySerialNumber' },
        { name: 'Konum ve zaman', text: 'GPS koordinatları, rakım, çekim tarihi ve saat dilimi.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
        { name: 'Haklar ve yönetim', text: 'Yazar, sahip, telif hakkı, son kullanılan düzenleme yazılımı.', example: 'EXIF Artist, Copyright, Software' },
        { name: 'Köken ve yapay zekâ', text: 'Content Credentials, “yapay zekâ ile oluşturuldu” etiketleri, prompt’lar ve iş akışları.', example: 'C2PA manifest, IPTC DigitalSourceType' },
      ],
      synonyms:
        'Aynı iş için pek çok ad görürsünüz — “meta veri silici”, “EXIF kaldırma”, “meta veri temizleyici”, “fotoğraf bilgilerini silme” — hepsi görüntüyü değiştirmeden dosyadaki gizli notları çıkarmak anlamına gelir. Aynı şekilde “meta veri görüntüleyici”, “okuyucu” ya da “denetleyici” dosyanın içinde ne olduğunu gösterir. AI Label Remover ikisini de yapar.',
    },
    why: {
      title: 'Bir fotoğrafı paylaşmadan önce meta verileri neden görüp kaldırmalısınız?',
      paragraphs: [
        'Tek bir meta veri alanı genellikle zararsızdır, ama hepsi bir araya gelince sizin hakkınızda çok şey anlatır. Evde çekilip ilan sitesine konan bir fotoğraf birkaç metre hassasiyetinde GPS koordinatları taşıyabilir; e-posta ya da bulut bağlantısıyla gönderilen görseller kameranın yazdığı her şeyi korur. [Fotoğraflardaki GPS’in ev adresinizi nasıl açığa çıkarabileceğine](remove-gps-location-from-photos) göz atın.',
        'Yapay zekâ ile üretilen ya da düzenlenen görsellerde meta veriler, bir platformun “Yapay zekâ ile oluşturuldu” etiketini gösterip göstermeyeceğini de belirler ve yazdığınız prompt’un tamamını ortaya çıkarabilir. [“Made with AI” etiketinin nereden geldiğini](made-with-ai-label) öğrenin.',
      ],
      bullets: [
        'GPS koordinatları üzerinden nerede yaşadığınızı, çalıştığınızı ya da seyahat ettiğinizi ortaya çıkarmak.',
        'Kamera seri numarası ya da sahip adı üzerinden birçok fotoğrafı tek bir kişiye bağlamak.',
        'Gizli tutmak istediğiniz prompt’ları, seed’leri, modelleri ve iş akışlarını açığa çıkarmak.',
        'Ekli C2PA ya da IPTC verileri yüzünden bir platformdan yapay zekâ etiketi almak.',
      ],
    },
    standards: {
      title: 'Fotoğraflarda yaygın meta veri standartları',
      lead: 'Tek bir görsel dosyası, her biri farklı bir standarda uyan birkaç meta veri “bölmesini” aynı anda barındırabilir. AI Label Remover aşağıdakilerin hepsini okur ve kaldırır.',
      items: [
        { name: 'EXIF', text: 'Kameralar ve telefonlar yazar: pozlama ayarları, cihaz, zaman damgaları, GPS, küçük resimler.' },
        { name: 'XMP', text: 'Adobe’nin düzenleme geçmişi, puanlar, anahtar kelimeler ve yapay zekâyla ilgili pek çok özellik için XML biçimi.' },
        { name: 'IPTC', text: 'Haber odalarının standardı: açıklama, yaratıcı, telif hakkı ve yapay zekâ görsellerini bildiren DigitalSourceType alanı.' },
        { name: 'C2PA', text: 'Bir dosyanın nasıl oluşturulup düzenlendiğini kaydeden, kriptografik olarak imzalı Content Credentials. [C2PA nedir](what-is-c2pa-content-credentials).' },
        { name: 'PNG text', text: '[Stable Diffusion ve ComfyUI’ın](remove-stable-diffusion-comfyui-metadata) prompt ve iş akışlarını sakladığı tEXt, iTXt ve zTXt chunk’ları.' },
      ],
    },
  },
  security: {
    title: 'Fotoğraflarınız güvende kalır',
    lead: 'Kişisel dosyalarla çalışan her araçta ilk soru “fotoğraflarım nereye gidiyor?” olur. AI Label Remover’ın yanıtı: hiçbir yere.',
    items: [
      { title: '%100 cihazınızda', text: 'Okuma ve temizleme, tarayıcı sekmenizdeki bir Web Worker içinde çalışır. Hiçbir sunucu dosyalarınızı almaz.' },
      { title: 'Saklama yok, yapay zekâ eğitimi yok', text: 'Fotoğraflar hiçbir yere gönderilmediği için saklanacak, sızdırılacak ya da model eğitiminde kullanılacak bir kopya yoktur.' },
      { title: 'Çevrimdışı çalışır', text: 'Sayfayı yükleyin, Wi-Fi’ı kapatın ve bir dosya yıkayın — yine çalışır. DevTools’taki Ağ sekmesi dışarı çıkan hiçbir görsel verisi göstermez.' },
      { title: 'Hesap yok, takip yok', text: 'Kayıt, analiz, reklam ya da üçüncü taraf pikseli yok. Site yalnızca seçtiğiniz dili ve temayı hatırlar.' },
    ],
  },
  faq: [
    { q: 'EXIF ile meta veri arasındaki fark nedir?', a: 'EXIF bir meta veri türüdür — kameraların ve telefonların yazdığı tür. “Meta veri” daha geniş bir kavramdır ve XMP, IPTC, C2PA ile PNG metin chunk’larını da kapsar.' },
    { q: 'Meta veriler bir fotoğrafın nerede çekildiğini gösterebilir mi?', a: 'Evet, görselde GPS etiketleri varsa. Kameranın konuma erişimi açıksa telefonlar genellikle enlem, boylam ve rakımı kaydeder. Yıkama bu etiketleri kaliteye dokunmadan kaldırır. [Fotoğraflardan GPS konumunu kaldırma](remove-gps-location-from-photos) yazısına bakın.' },
    { q: 'Bir görseldeki yapay zekâ meta verilerini nasıl kaldırırım?', a: 'Görseli bu sayfanın üstündeki kutuya bırakın ve “Tüm görselleri yıka” düğmesine basın. Yıkamadan önce her dosyanın kartı bulunan C2PA, IPTC ve prompt verilerini gösterir.' },
    { q: 'Fotoğraflarımı buraya yüklemek güvenli mi?', a: 'Fotoğraflarınız hiç yüklenmez. AI Label Remover dosyaları tarayıcınızda açar, sekmenin belleğinde işler ve temiz kopyayı doğrudan cihazınıza kaydeder. Sayfa yüklendikten sonra çevrimdışı olsanız da çalışmaya devam eder.' },
  ],
};

export default tr;
