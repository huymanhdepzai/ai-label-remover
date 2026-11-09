import type { Articles } from './types';

const tr: Articles = {
  'made-with-ai-label': {
    metaTitle: 'Gerçek Fotoğraflar Instagram’da Neden “AI Bilgisi” Etiketi Alır',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'Instagram veya Facebook’ta gerçek bir fotoğrafın “AI bilgisi” etiketi alması genellikle düzenleme yazılımlarının yazdığı C2PA veya IPTC alanlarından kaynaklanır. Bunları kayıpsız temizleyin.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Etiket fotoğrafı değil, dosyadaki verileri okur',
        paragraphs: [
          'Meta’nın “AI bilgisi” etiketi, yüklenen dosya içerisinde üretken yapay zeka sinyalleri tespit edildiğinde otomatik olarak uygulanır. En yaygın iki sinyal dosyanın kendi içine gömülüdür: [içerik kimlik bilgilerini barındıran C2PA bildirimi](what-is-c2pa-content-credentials) ve XMP bloğundaki IPTC DigitalSourceType özelliği.',
          'trainedAlgorithmicMedia değeri görselin tamamen yapay zeka ile üretildiğini, compositeWithTrainedAlgorithmicMedia ise gerçek bir fotoğrafta yapay zeka dokunuşları olduğunu belirtir. Sosyal medya platformları yükleme sırasında bu alanları otomatik tarar.',
        ],
      },
      {
        heading: 'Gerçek fotoğraflara yapay zeka sinyali nereden gelir',
        paragraphs: ['Gerçek fotoğraf makineleri veya telefonlarla çekilen karelerde tetikleyici hemen her zaman düzenleme uygulamalarıdır:'],
        bullets: [
          'Photoshop veya Lightroom’daki Üretken Dolgu, Üretken Genişletme veya AI Kaldırma araçları c2pa eylemleri ekler ve dosyayı birleşik görsel olarak işaretler.',
          'İçerik Kimlik Bilgileri (Content Credentials) açıkken dışa aktarma yapıldığında tüm düzenleme geçmişi dosyaya imzalanır.',
          'Akıllı telefon galerilerindeki Yapay Zeka Silgisi özellikleri EXIF ve XMP bloklarında düzenleme izi bırakır.',
          'Düzenleme uygulamalarının eski etiketleri sonraki kayıtlara kopyalaması sonucu işaret dosyada kalıcı hale gelir.',
        ],
      },
      {
        heading: 'Sorumlu alanları AI Label Remover ile tespit edin',
        paragraphs: [
          'Görseli çalışma alanına bıraktığınızda “AI izleri” sekmesi tespit edilen sinyalleri (C2PA JUMBF, IPTC XMP vb.) kaynağıyla listeler. “Ham meta veriler” sekmesinden bildirimi imzalayan aracı ve kayıtlı tüm düzenleme adımlarını görebilirsiniz.',
          'Gözden geçirme uyarısı, açık bir AI ifadesi olmasa dahi İçerik Kimlik Bilgileri bulunduğunu belirtir. Birçok platform yalnızca bildirimin varlığına dayanarak etiketi ekleyebilmektedir.',
        ],
      },
      {
        heading: 'Paylaşacağınız kopyayı kayıpsız temizleyin',
        paragraphs: [
          '“Tüm görselleri temizle” butonuna tıkladığınızda AI Label Remover; C2PA, XMP, IPTC ve EXIF bloklarını ikili veri akışından ayıklar; piksel verilerini, boyutları, yönü ve ICC renk profilini olduğu gibi korur. Detaylar [AI etiket temizleyici](ai-tag-cleaner) sayfasında yer almaktadır.',
          'Görseli fotoğraf editörlerinde yeniden JPEG olarak kaydetmek her seferinde kalite kaybına neden olurken, blok kesme yöntemi bu kaybı tamamen engeller.',
        ],
      },
      {
        heading: 'Yanlış etiketleri düzeltmek ve şeffaflık ilkeleri',
        paragraphs: [
          'Meta veri temizleme işlemi, gizliliği korumak ve haksız yere yapay zeka etiketi alan gerçek fotoğrafları düzeltmek amacıyla tasarlanmıştır. Görsel tamamen yapay zeka ile üretildiyse, platform kurallarına uyarak bunu dürüstçe belirtmek gerekir.',
        ],
      },
    ],
    faqHeading: 'AI etiketi hakkında sıkça sorulanlar',
    faq: [
      { q: 'Paylaşım yapıldıktan sonra “AI bilgisi” etiketini kaldırabilir miyim?', a: 'Genellikle hayır. [AI etiket temizleyici](ai-tag-cleaner) ile orijinal dosyayı temizleyip yeniden paylaşmanız gerekir.' },
      { q: 'Meta verileri temizlemek etiketin kesinlikle kalkmasını sağlar mı?', a: 'Dosyadan kaynaklanan (C2PA ve IPTC) etiketleri tamamen ortadan kaldırır. Ancak platformun bağımsız görsel analiz modelleri farklı değerlendirebilir.' },
      { q: 'Fotoğraf görsel olarak değişir mi veya çözünürlük düşer mi?', a: 'Hayır. Görüntü pikselleri bayt bayt kopyalanır, yalnızca başlık meta verileri çıkarılır.' },
      { q: 'Kamera çekim ayarlarını koruyup yalnızca AI alanlarını silebilir miyim?', a: 'Maksimum güvenlik ve gizlilik amacıyla araç konum ve cihaz dahil tüm tanımlayıcıları tek seferde temizler.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'PNG Dosyalarından ComfyUI İş Akışlarını ve SD İstemlerini Silme',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge ve ComfyUI; istemleri, tohumları, modelleri ve düğüm iş akışını PNG içine yazar. Piksellere dokunmadan bu verileri temizleyin.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Görselle birlikte taşınan üretim parametreleri',
        paragraphs: [
          'Stable Diffusion WebUI (AUTOMATIC1111), Forge veya ComfyUI’den alınan PNG görselleri, üretim parametrelerini metin bloklarına (tEXt, zTXt, iTXt) kaydeder.',
          'ComfyUI’de bu durum tüm düğüm grafiğinin JSON yapısını kapsar. Dosyayı indiren biri PNG’yi kendi ComfyUI arayüzüne sürükleyerek tüm istemleri, LoRA modellerini ve yerel klasör yollarınızı görebilir.',
        ],
      },
      {
        heading: 'Üretim meta verilerini silmek için nedenler',
        paragraphs: [
          'Ticari ve sanatsal projelerde özenle geliştirilmiş istemler ve düğüm mimarileri gizli tutulması gereken yaratıcı varlıklardır.',
          'Ayrıca bu metin blokları bilgisayarınızdaki kullanıcı adı ve klasör yollarını ifşa edebilir ve PNG dosyasının boyutunu gereksiz yere artırır.',
        ],
      },
      {
        heading: 'AI Label Remover ile inceleyin ve temizleyin',
        paragraphs: [
          '[PNG meta veri temizleyici](png-metadata-remover) aracı ile pozitif ve negatif istemleri önceden okuyabilir ve tek tıkla kaldırabilirsiniz.',
          'Görseli oluşturan IHDR, IDAT, PLTE blokları ve iCCP renk profili eksiksiz korunur.',
        ],
      },
      {
        heading: 'Temizleme sonrası dosya durumu',
        paragraphs: [
          'Elde edilen PNG görsel olarak orijinaliyle birebir aynıdır, ancak ComfyUI’ye sürüklendiğinde iş akışı içermeyen standart bir resim olarak kalır.',
        ],
      },
    ],
    faqHeading: 'Stable Diffusion meta veri soruları',
    faq: [
      { q: 'ComfyUI ayarlarından meta veri kaydını kapatabilir miyim?', a: 'Evet, Save Image düğümünde iş akışı kaydetme seçeneğini kapatabilir veya özel kaydetme düğümleri kullanabilirsiniz.' },
      { q: 'ComfyUI temizlenmiş bir PNG’den iş akışını geri getirebilir mi?', a: 'Hayır. Metin blokları silindiğinden dosya içinde akışı yeniden kuracak veri kalmaz.' },
      { q: 'Temizlenen PNG’nin şeffaflığı veya renkleri bozulur mu?', a: 'Hayır, alfa kanalı ve renk değerleri olduğu gibi korunur.' },
      { q: 'JPEG veya WebP’ye dönüştürmekten farkı nedir?', a: 'Format dönüştürmek kalite kaybına yol açar. AI Label Remover ise kayıpsız PNG formatını korur.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Midjourney ve DALL·E Görsellerinden İstemleri Temizleme',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Midjourney, DALL·E 3 ve Firefly indirmeleri istem metinlerini, iş kimliğini ve kaynak verilerini içerir. Paylaşmadan önce bunları temizleyin.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Bulut tabanlı üreticiler dosyaya ne yazar',
        paragraphs: [
          'Midjourney, OpenAI DALL·E 3 ve Adobe Firefly gibi çevrim içi servisler, dosya başlıklarına iş kimliğini, oluşturma tarihini ve [C2PA](what-is-c2pa-content-credentials) dijital imzasını ekler.',
          'Midjourney ayrıca istem metnini XMP veya EXIF yorumlarına açıkça yazabilir; resmi indiren herkes bu istemi kolayca görüntüleyebilir.',
        ],
      },
      {
        heading: 'İstemleri bir yaratıcı sır olarak korumak',
        paragraphs: [
          'İstenen tarzı yakalamak için geliştirilen istemler saatler süren çalışmaların ürünüdür. Dosyayı temizlemeden paylaşmak bu emeği kopyalamaya açık hale getirir.',
        ],
      },
      {
        heading: 'Önizleme ve güvenli kaldırma',
        paragraphs: [
          'AI Label Remover gizlenmiş istem metnini gösterir ve tek tıkla temizler. Eserin renk doğruluğu ve detayları kusursuz şekilde korunur.',
        ],
      },
      {
        heading: 'Bilinmesi gereken teknik sınırlar',
        paragraphs: [
          'Meta veri temizleme dosya başlığındaki alanlara uygulanır. Google SynthID gibi doğrudan piksellere işlenen görünmez filigranlar meta veri araçlarıyla silinemez.',
        ],
      },
    ],
    faqHeading: 'Midjourney ve DALL·E istemleri SSS',
    faq: [
      { q: 'Başkaları paylaştığım görselden istemi okuyabilir mi?', a: 'Platform görseli sıkıştırmadan orijinal haliyle sunuyorsa, indiren kişi meta verilerden istemi görebilir.' },
      { q: 'Midjourney’nin her sürümü istemi dosyaya yazar mı?', a: 'Evet, Discord veya web arayüzünden doğrudan indirilen çoğu görselde istem bilgisi bulunur.' },
      { q: 'Temizleme işlemi görsel kalitesini etkiler mi?', a: 'Hayır. ICC renk profili ve RGB pikselleri eksiksiz korunur.' },
      { q: 'Aynı anda birden fazla üretilmiş resmi temizleyebilir miyim?', a: 'Evet, [toplu meta veri temizleme](batch-remove-metadata) özelliği ile 50 adede kadar görseli birlikte işleyebilirsiniz.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'C2PA Nedir? İçerik Kimlik Bilgileri Sade Bir Dille',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'C2PA ve İçerik Kimlik Bilgileri rehberi: İmzalanmış bildirimin neleri kaydettiği, dosyalarda nerede durduğu ve neden kaldırıldığı.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Kısaca özeti',
        paragraphs: [
          'C2PA (Coalition for Content Provenance and Authenticity), Adobe, Microsoft, Google, Intel ve Sony gibi liderler tarafından desteklenen açık bir standarttır. Görsellere dijital bir kimlik kartı — Content Credentials — eklemeyi amaçlar.',
          'Bu kimlik; çekim yapılan cihazı, kullanılan yazılımları, yapay zeka müdahalesini ve tüm düzenleme adımlarını doğrulanabilir şekilde belgeler.',
        ],
      },
      {
        heading: 'C2PA bildiriminin içinde ne var',
        paragraphs: [
          'Bildirim bir doğrulama zinciri içerir: cihaz bilgileri, düzenleme adımlarının küçük resimleri, kullanıcı araçları ve dijital imzalar.',
          'Yapay zeka araçları kullanıldığında bu durum açıkça belirtilir ve sosyal medya platformlarının otomatik etiket eklemesine zemin hazırlar.',
        ],
      },
      {
        heading: 'Farklı dosya formatlarındaki yeri',
        paragraphs: [
          'JPEG dosyalarında APP11 işaretçisinde (JUMBF kutusu), PNG’de caBX bloğunda, HEIC ve AVIF’te ise uuid kutusunda saklanır.',
          '[C2PA temizleme](remove-c2pa-content-credentials) aracı dosyanın görsel yapısına zarar vermeden bu bölümleri güvenle ayıklar.',
        ],
      },
      {
        heading: 'Kullanıcılar neden C2PA’yı silmeyi tercih eder',
        paragraphs: [
          'Gerçek fotoğraflara yapay zeka etiketi vurulmasını önlemenin yanı sıra cihaz ve yazılım gizliliğini korur ve dosyayı onlarca veya yüzlerce kilobayt hafifletir.',
        ],
      },
      {
        heading: 'Korumak mı, silmek mi: Bilinçli tercih',
        paragraphs: [
          'Haber fotoğrafçılığında C2PA güven verirken, kişisel gizliliği ve ticari çalışmalarını korumak isteyen kullanıcılar için meta veri temizliği tam kontrol sağlar.',
        ],
      },
    ],
    faqHeading: 'C2PA hakkında sıkça sorulanlar',
    faq: [
      { q: 'C2PA görünmez bir filigran mıdır?', a: 'Hayır. C2PA dosya başlığında tutulan bir meta veri kaydıdır, piksellere müdahale etmez.' },
      { q: 'Hangi yazılımlar şu anda C2PA ekliyor?', a: 'Adobe Photoshop, Lightroom, DALL·E 3, yeni Leica ve Nikon makineler ile bulut yapay zeka servisleri.' },
      { q: 'Silmeden önce imza nasıl kontrol edilir?', a: 'verify.contentcredentials.org adresinden veya AI Label Remover önizleme sekmesinden incelenebilir.' },
      { q: 'C2PA’yı silmek görsel kalitesini düşürür mü?', a: 'Hayır, görüntü yeniden sıkıştırılmadığı için çözünürlük ve netlik korunur.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Telefondan ve Bilgisayardan Fotoğraf GPS Konumunu Silme',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      'Fotoğrafları paylaşmadan önce GPS konumunu kaldırın: EXIF verilerinin evinizi ve çekim saatini nasıl ifşa ettiğini öğrenin ve kayıpsız temizleyin.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Akıllı telefonların her fotoğrafa kaydettiği detaylar',
        paragraphs: [
          'Modern akıllı telefonlar (iPhone ve Android), çekilen her karenin EXIF meta verilerine enlem, boylam, rakım ve pusula yönünü otomatik olarak yazar.',
          'İşlenmemiş orijinal dosya başkalarına iletildiğinde ev adresiniz, iş yeriniz veya çocuklarınızın okulu metre hassasiyetiyle tespit edilebilir.',
        ],
      },
      {
        heading: 'Orijinal dosyanın dışarı sızdığı yollar',
        paragraphs: [
          'Sosyal medya akışları fotoğrafları sıkıştırıp GPS’i silse de; mesajlaşma uygulamalarından “Belge/Dosya” olarak göndermek, AirDrop, e-posta, bulut depolama veya ikinci el ilan siteleri konum verilerini olduğu gibi taşır.',
        ],
      },
      {
        heading: 'Temizlemeden önce konumu kontrol edin',
        paragraphs: [
          'AI Label Remover’a fotoğrafı yüklediğinizde EXIF sekmesi konum etiketlerinin varlığını, harita koordinatlarını ve cihaz modelini anında görüntüler.',
        ],
      },
      {
        heading: 'Yeniden sıkıştırmadan kayıpsız temizlik',
        paragraphs: [
          '[EXIF verilerini temizleme](remove-exif-data) işlemi pikselleri yeniden kodlamadan konum ve cihaz etiketlerini çıkarır, görsel netliği korur.',
        ],
      },
      {
        heading: 'Kamera konum izinlerini kapatma',
        paragraphs: [
          'iPhone: Ayarlar > Gizlilik ve Güvenlik > Konum Servisleri > Kamera > “Asla”. Android: Kamera uygulaması ayarları > “Konum etiketleri” seçeneğini kapatın.',
        ],
      },
      {
        heading: 'GPS koordinatlarının hassasiyet düzeyi',
        paragraphs: [
          'Uydu GPS ve Wi-Fi desteği sayesinde koordinatlar genellikle 3-5 metre gibi oldukça dar bir hata payıyla binanızı dahi belirleyebilir.',
        ],
      },
      {
        heading: 'Kişisel güvenlik için somut riskler',
        paragraphs: [
          'Evde çekilen evcil hayvan veya eşya fotoğraflarının konum içermesi takip ve hırsızlık risklerine zemin hazırlayabilir.',
        ],
      },
      {
        heading: 'GPS dışındaki hassas alanlar',
        paragraphs: [
          'Kamera seri numarası, tam çekim saniyesi ve cihaz tanımlayıcıları da dijital ayak izi oluşturur.',
        ],
      },
      {
        heading: 'Paylaşmadan önce kontrol alışkanlığı',
        paragraphs: [
          'İnternete fotoğraf yüklemeden önce tarayıcıda hızlı bir kontrol yapmak güvenliğinizi korur.',
        ],
      },
    ],
    faqHeading: 'Fotoğraf GPS verileri SSS',
    faq: [
      { q: 'Temizlenen konum verisi sonradan geri getirilebilir mi?', a: 'Hayır, EXIF blokları kalıcı olarak silindiği için geri döndürülemez.' },
      { q: 'Sosyal medya uygulamaları konumu zaten silmiyor mu?', a: 'Normal paylaşımlarda silebilir ancak dosya olarak aktarımda ve ilan sitelerinde konum korunur.' },
      { q: 'iPhone HEIC fotoğrafları destekleniyor mu?', a: 'Evet, [HEIC meta veri temizleme](heic-metadata-remover) ile dosya HEIC formatında kalarak temizlenir.' },
      { q: 'Fotoğrafın yönü veya açısı ters döner mi?', a: 'Hayır, doğru görüntüleme için gerekli olan Yönelim (Orientation) etiketi korunur.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Görsellerden Toplu Meta Veri Silme – Ücretsiz, Sunucusuz',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      'Tarayıcınızda tek seferde 50 adede kadar görseli toplu temizleyin: Paralel Web Workers ile maksimum hız, sunucuya yükleme yok ve tek ZIP olarak indirme.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Büyük fotoğraf gruplarını hızla işleyin',
        paragraphs: [
          'Ürün katalogları veya tatil albümleri için fotoğrafları tek tek işlemek zaman alıcıdır. AI Label Remover aynı anda 50 adede kadar görseli sürükleyip bırakmanıza olanak tanır.',
          'İşlemcinizin tüm çekirdeklerini kullanan bağımsız Web Worker altyapısı her dosyayı paralel olarak işler.',
        ],
      },
      {
        heading: 'İnternet yükleme sınırı olmaksızın yerel hız',
        paragraphs: [
          'Dosyalarınız uzak sunuculara yüklenmez; doğrudan tarayıcınızın belleğinde işlenir. Bu sayede onlarca megabayt veri saniyeler içinde temizlenir.',
        ],
      },
      {
        heading: 'Her görsel için otomatik doğrulama',
        paragraphs: [
          'İşlem tamamlandığında sistem her dosyanın başlığını tekrar okuyarak EXIF, GPS, C2PA ve istem izlerinin tamamen yok olduğunu onaylar.',
        ],
      },
      {
        heading: 'Orijinal dosya adlarını koruyarak ZIP ile indirme',
        paragraphs: [
          'Temizlenen tüm dosyalar özgün adlarını korur; bunları tek tek veya tek tıkla ZIP arşivi olarak indirebilirsiniz.',
        ],
      },
      {
        heading: 'Tam gizlilik ve çevrim dışı çalışma',
        paragraphs: [
          'İnternet bağlantınız kopsa dahi sayfa tarayıcınızda bağımsız olarak çalışmaya devam eder.',
        ],
      },
    ],
    faqHeading: 'Toplu temizleme hakkında sorular',
    faq: [
      { q: 'Farklı dosya formatlarını aynı anda yükleyebilir miyim?', a: 'Evet; JPEG, PNG, WebP, HEIC ve AVIF formatlarını bir arada işleyebilirsiniz.' },
      { q: 'Tek seferde 50 görsel sınırı neden var?', a: 'Cihazınızın RAM belleğini korumak ve mobil tarayıcılarda kararlılığı sağlamak için bu sınır uygulanır.' },
      { q: 'ZIP olarak indirirken dosya adları değişir mi?', a: 'Hayır, yüklediğiniz orijinal isimler aynen korunur.' },
      { q: 'İşlem için internet bağlantısı şart mı?', a: 'Sayfa yüklendikten sonra tüm motor yerel olarak çalıştığından çevrim dışı da kullanabilirsiniz.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Online Meta Veri Görüntüleyici: EXIF, GPS, XMP, IPTC ve C2PA Tek Yerde',
    metaTitle: 'Fotoğraf Meta Verisi Görüntüleme: EXIF, GPS ve AI',
    summary: [
      'Bir fotoğrafı paylaşmadan ya da indirdiğiniz bir görsele güvenmeden önce, iyi bir meta veri görüntüleyici dosyanın kendisi hakkında söylediği her şeyi gösterir — yalnızca telefonun veya Dosya Gezgini’nin gösterdiği birkaç alanı değil.',
      'Bu rehber; eksiksiz bir meta veri kontrolünün neleri kapsadığını, yerleşik görüntüleyicilerin nerede yetersiz kaldığını, birçok online EXIF görüntüleyicinin neden kendi başına bir gizlilik riski olduğunu ve önemli alanların nasıl okunacağını anlatıyor.',
    ],
    description:
      'Ücretsiz online meta veri görüntüleyici: fotoğrafınızdaki tüm EXIF, GPS, XMP, IPTC, C2PA ve AI prompt alanlarını tarayıcıda görün — yükleme ve hesap gerekmez.',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: 'Eksiksiz bir meta veri kontrolü neleri kapsar',
        paragraphs: ['Kapsamlı bir meta veri görüntüleyici yalnızca EXIF’i değil, dosyadaki her bloğu okur:'],
        bullets: [
          'EXIF — fotoğraf makinesi veya telefonun markası ve modeli, pozlama, çekim zamanı, lens ve yön.',
          'GPS — konum açıksa enlem, boylam, rakım ve çekim yönü. Ayrıca [fotoğraflardan GPS konumunu silme](remove-gps-location-from-photos) rehberine bakın.',
          'XMP — düzenleme yazılımı, düzenleme geçmişi, açıklamalar, puanlar ve yapay zeka alanları.',
          'IPTC — başlıklar, anahtar kelimeler, oluşturan kişi, telif hakkı ve DigitalSourceType (görselin nasıl üretildiği).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): dosyayı kimin imzaladığı, hangi işlemlerin kaydedildiği ve yapay zeka kullanılıp kullanılmadığı.',
          'PNG metin blokları — [Stable Diffusion parametreleri ve ComfyUI iş akışları](remove-stable-diffusion-comfyui-metadata) ile diğer gömülü metinler.',
          'ICC profili ve küçük resimler — renk bilgisi ve gizli önizleme görselleri.',
        ],
      },
      {
        heading: 'Yerleşik görüntüleyiciler ve kör noktaları',
        paragraphs: [
          'Windows meta veriyi Özellikler › Ayrıntılar altında, macOS Önizleme’nin Denetçi’sinde veya Finder’daki Bilgi Al penceresinde, iPhone fotoğrafı yukarı kaydırdığınızda, Google Fotoğraflar ise bilgi panelinde gösterir. Tarih, cihaz ve konuma hızlıca bakmak için yeterlidir; ancak bunlar EXIF’in yalnızca bir kısmını gösterir ve XMP, IPTC, C2PA ile PNG metnini genellikle tamamen yok sayar. Bir dosya Dosya Gezgini’nde temiz görünüp yine de eksiksiz bir AI prompt’u taşıyabilir.',
        ],
      },
      {
        heading: 'Online EXIF görüntüleyicilerdeki gizlilik tuzağı',
        paragraphs: [
          '“Online EXIF görüntüleyici” sitelerinin çoğu görselinizi kendi sunucusuna yükler, orada okur ve size bir rapor gönderir. Gizlilik kontrolü için bu tam tersidir: endişelendiğiniz fotoğraf — GPS konumuyla birlikte — artık üçüncü bir tarafa kopyalanmıştır. Dosyayı yerel olarak okuyan bir görüntüleyici seçin. Basit bir test: sayfayı açın, internet bağlantısını kesin ve aracın hâlâ çalışıp çalışmadığına bakın.',
        ],
      },
      {
        heading: 'AI Label Remover ile dosya inceleme',
        paragraphs: ['Görseli bu sayfanın en üstündeki alana sürükleyin. Sonuç üç sekmede düzenlenir:'],
        bullets: [
          '“Neyi ele veriyor” — yer, kişiler, zaman ve cihazın sade bir özeti; GPS ondalık koordinatlara çevrilmiş olarak.',
          '“AI izleri” — C2PA manifestleri, IPTC kaynak türleri, üretici adları ve prompt’lar, bir sonuçla birlikte.',
          '“Ham meta veri” — kaynağa göre gruplanmış tüm alanlar: EXIF IFD0, Exif, GPS, XMP ad alanları, IPTC, C2PA ve PNG metin blokları.',
        ],
      },
      {
        heading: 'İlk okunması gereken alanlar',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — tam konum; koordinatları bir haritaya yapıştırıp neyi açığa çıkardığını görün.',
          'DateTimeOriginal ve ModifyDate — fotoğrafın ne zaman çekildiği ve en son ne zaman kaydedildiği.',
          'Make, Model, BodySerialNumber, LensSerialNumber — fotoğrafları tek bir cihaza bağlayabilir.',
          'Artist, Copyright, OwnerName — dosyada olduğunu bilmediğiniz isimler.',
          'Software ve CreatorTool — dosyayı hangi uygulamaların, yapay zeka araçları dahil, işlediği.',
          'DigitalSourceType ve C2PA claim generator — görselin kendi beyanına göre nasıl üretildiği. Ayrıntılar için [bir görselin yapay zekayla üretilip üretilmediğini anlama](how-to-check-if-image-is-ai-generated) rehberine bakın.',
        ],
      },
      {
        heading: 'Görüntüleyici neredeyse hiçbir şey göstermiyorsa',
        paragraphs: [
          'Sosyal medyadan kaydedilen bir görsel, ekran görüntüsü veya mesajlaşma uygulamasıyla gönderilen bir fotoğraf genellikle yeniden sıkıştırılmış ve meta verisi silinmiştir. Bu durumda az ya da hiç meta veri olmaması normaldir ve fotoğrafın gerçek, düzenlenmiş veya yapay zekayla üretilmiş olup olmadığı hakkında hiçbir şey söylemez. Köken önemliyse orijinal dosyayı isteyin.',
        ],
      },
      {
        heading: 'Görüntülemek doğrulamak değildir',
        paragraphs: [
          'Sıradan meta veri, herkesin değiştirebileceği düz metindir; bu yüzden onu kanıt değil ipucu olarak görün. C2PA dijital olarak imzalandığı için farklıdır, ancak manifesti göstermek imzayı doğrulamakla aynı şey değildir — bunun için resmi bir Content Credentials doğrulayıcısı kullanın. Yeterince gördüyseniz ve verilerin silinmesini istiyorsanız “Tüm meta verileri kaldır” düğmesine basın; görselin kendisi değişmeden meta veri kaldırılır. [EXIF verisini silme](remove-exif-data) sayfası tam olarak neyin silindiğini açıklar.',
        ],
      },
    ],
    faqHeading: 'Meta veri görüntüleme hakkında sorular',
    faq: [
      {
        q: 'Fotoğrafımı yüklemeyen ücretsiz bir meta veri görüntüleyici var mı?',
        a: 'Evet. AI Label Remover dosyaları yükleme ve hesap olmadan doğrudan tarayıcınızda okur; sayfa yüklendikten sonra çevrimdışı da çalışır.',
      },
      {
        q: 'Yapay zeka görselinin prompt’unu görebilir miyim?',
        a: 'Üretici kaydettiyse evet. Stable Diffusion ve ComfyUI prompt’ları PNG metin bloklarında bulunur; bazı hizmetler prompt’ları XMP veya EXIF alanlarına yazar.',
      },
      {
        q: 'Windows neden PNG dosyamın meta verisini göstermiyor?',
        a: 'Dosya Gezgini PNG için yalnızca birkaç özellik gösterir. Metin blokları, XMP ve C2PA orada görünmez, ancak tam bir görüntüleyicide görünür.',
      },
      {
        q: 'Meta veri bir fotoğrafın sahte olduğunu kanıtlayabilir mi?',
        a: 'Meta veri ipucu verir, kesin kanıt değil. Yalnızca imzalı C2PA verileri güvenilir şekilde doğrulanabilir; sıradan alanlar kolayca düzenlenebilir veya silinebilir.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: 'Bu Görsel Yapay Zekayla mı Üretildi? Dosyanın Kendisini Kontrol Etme Rehberi',
    metaTitle: 'Görsel Yapay Zekayla mı Üretildi? Ücretsiz Kontrol',
    summary: [
      'Bir görselin yapay zekayla üretilip üretilmediğine dair en hızlı güvenilir ipucu dosyanın içindedir: C2PA Content Credentials, IPTC DigitalSourceType alanı ve üreticinin bıraktığı metin çoğu zaman görseli yapan aracı tam olarak adlandırır.',
      'Neye bakmanız gerektiğini, tarayıcıda çalışan ücretsiz bir araçla bunu nasıl okuyacağınızı ve hiçbir iz bulunmamasının neden asla fotoğrafın gerçek olduğunu kanıtlamadığını burada bulabilirsiniz.',
    ],
    description:
      'Görsel yapay zekayla mı üretildi? C2PA, IPTC DigitalSourceType ve üretici meta verisini tarayıcıda kontrol edin; her sinyalin neyi kanıtladığını öğrenin.',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: 'Orijinal dosyayı edinin',
        paragraphs: [
          'Meta veri yalnızca fotoğraf makinesinden veya üreticiden çıktığı hâliyle dosyada kalır. Ekran görüntüleri, yeniden kaydedilen kopyalar ve sosyal medyadan alınan görseller genellikle yeniden kodlanmış ve verilerin çoğunu kaybetmiştir. Mümkünse orijinal dışa aktarımı — sıkıştırılmış fotoğraf olarak değil, “dosya olarak” gönderilmiş hâlini — isteyin.',
        ],
      },
      {
        heading: 'Birinci ipucu: Content Credentials (C2PA)',
        paragraphs: [
          'C2PA destekleyen araçlar [dijital olarak imzalanmış bir köken kaydı](what-is-c2pa-content-credentials) ekler. Bu kaydın claim generator alanı görseli üreten uygulamayı veya hizmeti adlandırır, c2pa.actions listesi “created” ya da “edited” gibi adımları içerir ve digitalSourceType yapay zeka üretimini doğrudan belirtebilir.',
          'Kayıt imzalı olduğu için bir doğrulayıcı, görselin imzalandıktan sonra değiştirilip değiştirilmediğini de söyleyebilir. Bir yapay zeka hizmetinden gelen manifest, meta verinin sunabileceği en güçlü kanıttır.',
        ],
      },
      {
        heading: 'İkinci ipucu: IPTC DigitalSourceType',
        paragraphs: ['Birçok üretici ve düzenleyici, içeriğin nasıl oluşturulduğunu anlatan standart bir IPTC alanını doldurur. En sık karşılaşacağınız değerler:'],
        bullets: [
          'trainedAlgorithmicMedia — üretken bir yapay zeka modeli tarafından oluşturulmuş.',
          'compositeWithTrainedAlgorithmicMedia — Photoshop’taki Üretken Dolgu gibi, bazı alanları yapay zekayla üretilmiş veya değiştirilmiş gerçek bir fotoğraf.',
          'algorithmicMedia — prosedürel sanat gibi, eğitim verisi olmadan bir algoritmayla yapılmış.',
          'digitalCapture — fotoğraf makinesiyle çekilmiş, üretken içerik beyan edilmemiş.',
        ],
      },
      {
        heading: 'Üçüncü ipucu: prompt’lar ve araç adları',
        paragraphs: [
          '[Stable Diffusion arayüzleri ve ComfyUI](remove-stable-diffusion-comfyui-metadata) prompt, seed, model ve iş akışını PNG dosyalarına metin olarak kaydeder. Diğer araçlar adlarını XMP CreatorTool veya EXIF Software alanına bırakır. Bu izlerin her biri yapay zeka kullanımına açıkça işaret eder — ve çoğu zaman görselin tam olarak nasıl yapıldığını anlatır. Bu yüzden [Midjourney ve DALL·E prompt’larını gizlemeyi](hide-midjourney-dalle-prompts) bilmek de işe yarar.',
        ],
      },
      {
        heading: 'Görselin yapay zekayla üretilip üretilmediği nasıl kontrol edilir',
        paragraphs: [
          'Dosyayı bu sayfanın en üstündeki alana sürükleyin. “AI izleri” sekmesi üç sonuçtan birini verir — “AI izleri bulundu”, “Bir kez daha bakmaya değer” veya “AI izi yok” — ve her sinyali kaynağıyla birlikte listeler. “Ham meta veri” temel değerleri gösterir. Hiçbir şey yüklenmez. Bulunanları silmek için [AI Tag Cleaner](ai-tag-cleaner) aracını kullanın.',
        ],
      },
      {
        heading: 'Dosyada meta veri yoksa',
        paragraphs: [
          'Meta veri olmaması iki yönde de hiçbir şey kanıtlamaz: düzenleyiciler, mesajlaşma uygulamaları ve sosyal ağlar onu sürekli siler; fotoğraf makinesi EXIF’inin eksik olması da en fazla zayıf bir ipucudur. Sonraki adımlar; sağlayıcının kendi filigran kontrolü (örneğin Gemini için Google SynthID), en eski kopyayı bulmak için tersine görsel arama ve görselin ilk nerede yayınlandığına bakmaktır. Piksel tabanlı yapay zeka dedektörleri kanıt değil, olasılık bildirir.',
        ],
      },
    ],
    faqHeading: 'Yapay zeka görsellerini tespit etme hakkında sorular',
    faq: [
      {
        q: 'Bir görselin ChatGPT veya Gemini ile yapıldığını anlayabilir miyim?',
        a: 'Dosya Content Credentials’ını hâlâ taşıyorsa claim generator hizmetin adını verir. Gemini görselleri için Google’ın SynthID kontrolü filigranı piksellerde de tespit edebilir.',
      },
      {
        q: 'AI Label Remover hiç AI izi bulamazsa fotoğraf gerçek midir?',
        a: 'Şart değil. Bu yalnızca dosyada yapay zeka meta verisi olmadığı anlamına gelir. Meta veri kolayca kaybolur veya silinir; bu yüzden temiz bir sonucu kanıt değil, “bilinmiyor” olarak okuyun.',
      },
      {
        q: 'Instagram veya Facebook’tan kaydettiğim bir görseli kontrol edebilir miyim?',
        a: 'Edebilirsiniz, ancak platformlar yayınlanan kopyadaki meta veriyi genellikle siler; az veya hiç veri bekleyin. Platformun kendi “AI bilgisi” etiketi ayrı bir sinyaldir — [gerçek fotoğrafların neden bu etiketi aldığını](made-with-ai-label) okuyun.',
      },
      {
        q: 'Kontrol ücretsiz ve gizli mi?',
        a: 'Evet — ücretsiz, hesap gerektirmez ve dosya yüklenmeden yerel olarak okunur.',
      },
    ],
  },
};

export default tr;
