import type { Pages } from './types';

const tr: Pages = {
  home: {
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
    ctaTools: 'Tüm araçları gör',
    start: {
      title: 'Elinizdeki dosyayla başlayın',
      lead: 'Yapmak istediğiniz işi seçin — her aracın dosya bırakma alanı sayfanın en üstünde hazır.',
      badge: 'Önerilen',
      open: 'Aracı aç',
    },
    nav: {
      remove: 'Meta veriyi kaldır',
      check: 'Görüntüle ve kontrol et',
      learn: 'Bilgi',
      viewer: 'Fotoğraf meta verisini gör',
      aiCheck: 'Fotoğraf AI mı, kontrol et',
      whatIs: 'Meta veri nedir?',
    },
  },
  labels: {
    tools: 'Diğer meta veri araçları',
    relatedTools: 'Bu iş için araçlar',
    homeTitle: 'Dosyanıza uygun aracı seçin',
    homeLead: 'Her sayfa tek bir işe odaklanır ve araç hemen en üsttedir.',
    formats: 'Neler kaldırılır, neler kalır',
    contact: 'İletişim',
    contactText: 'Sorularınız, hatalar ya da düzgün temizlenmeyen bir dosya mı var? Yazın:',
    updated: 'Güncellendi: {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Görsel meta verisinden AI etiketlerini sil',
      description: 'Görsellerden AI etiketlerini kaldırın: IPTC “AI ile üretildi”, C2PA, XMP’deki üretici adları ve prompt’lar. Kayıpsız, ücretsiz, tarayıcıda, yüklemeden.',
      navLabel: 'AI etiket temizleyici',
      h1: 'Görseller için AI etiket temizleyici',
      lead: 'AI üreticileri ve AI destekli düzenleyiciler dokundukları dosyaları etiketler: “AI ile üretildi” kaynak türü, imzalı bir C2PA kaydı, uygulama adı, bazen prompt’un tamamı. Aşağıya bir görsel bırakın, taşıdığı her AI etiketini görün ve tek bir pikseli yeniden kodlamadan hepsini temizleyin.',
      sections: [
        {
          heading: 'AI etiketi sayılan şeyler',
          paragraphs: ['AI etiketi, dosyada AI kullanıldığını söyleyen ya da ima eden her alandır. Aynı anda birkaç meta veri standardına dağılırlar; bu yüzden tek bir alanı elle silmek nadiren yeterlidir:'],
          bullets: [
            'trainedAlgorithmicMedia veya compositeWithTrainedAlgorithmicMedia gibi IPTC ve XMP DigitalSourceType değerleri.',
            'Üretken adımları işaretleyen [C2PA Content Credentials](what-is-c2pa-content-credentials) eylemleri; ChatGPT, Firefly, Photoshop ve diğerleri yazar.',
            'Üreticinin adını taşıyan Software ve Creator Tool alanları ile AI düzenlemelerinden kalan XMP geçmişi.',
            '[Stable Diffusion ve ComfyUI](remove-stable-diffusion-comfyui-metadata) PNG chunk’larındaki prompt, seed ve model bilgisi.',
          ],
        },
        {
          heading: 'AI etiket temizleyici nasıl çalışır',
          paragraphs: [
            'AI Label Remover dosya yapısını doğrudan tarayıcınızda okur. Her AI etiketi geldiği alanla birlikte listelenir ve dosya, hiçbir şey değişmeden önce bir sonuç alır: “AI izleri bulundu”, “Bir kez daha bakmaya değer” ya da “AI izi yok”.',
            '“Tüm görselleri yıka” düğmesi bu etiketleri taşıyan blokları keser: XMP, IPTC, EXIF, C2PA manifest deposu ve PNG metin chunk’ları. Sıkıştırılmış görüntü verisi bayt bayt kopyalanır ve temiz kopya yeniden okunur; böylece hiçbir AI etiketi kalmadığını görürsünüz.',
          ],
        },
        {
          heading: 'Hangi araç hangi etiketi bırakır',
          paragraphs: [
            'ChatGPT ve Gemini görselleri C2PA kayıtlarıyla gelir; Firefly ve Photoshop Üretken Dolgu C2PA ile DigitalSourceType ekler; Midjourney açıklayıcı XMP yazar; Stable Diffusion arayüzleri tüm üretim ayarlarını PNG’ye kaydeder. Prompt’larınızı gizli tutmak için [Midjourney ve DALL·E prompt’larını gizleme](hide-midjourney-dalle-prompts) yazısına bakın.',
          ],
        },
        {
          heading: 'AI etiket temizleyicinin yapamadıkları',
          paragraphs: [
            'Temizleme yalnızca meta veriyle çalışır. SynthID gibi görünmez filigranlar piksellerin içindedir ve kalır; platformlar kendi sınıflandırıcılarını da kullanabilir. Etiketleri temizlemek gizlilik ve gerçek fotoğraflardaki yanlış etiketleri düzeltmek içindir — bir görsel AI ile üretilmiş ve gerçekçiyse, platform kuralları genellikle yine de bunu belirtmenizi ister.',
          ],
        },
      ],
      faqHeading: 'AI etiket temizleyici hakkında sorular',
      faq: [
        { q: 'AI etiketi ile AI ibaresi aynı şey mi?', a: 'Tam olarak değil. Etiket dosyanın içindeki veridir; ibare ise platformun gösterdiği şeydir, örneğin Instagram’daki “AI bilgisi”. Platformlar ibareyi çoğu zaman etiketten üretir. Gerçek bir fotoğrafta bunu önlemek için [AI etiketsiz](no-ai-tag) sayfasına bakın.' },
        { q: 'Yalnızca AI etiketlerini silip gerisini tutabilir miyim?', a: 'Temizleyici tek tek alanlar yerine bütün meta veri bloklarını kaldırır, çünkü AI etiketleri birkaç bloğa dağılmıştır. Yön, ICC renk profili ve piksel boyutu her zaman korunur; görsel tam olarak eskisi gibi görünür.' },
        { q: 'AI etiketlerini temizlemek kaliteyi düşürür mü?', a: 'Hayır. Hiçbir şey yeniden kodlanmaz; yalnızca meta veri kaldırılır, görüntü verisi aynı kalır.' },
        { q: 'Hangi biçimleri temizleyebilirim?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF ve AVIF — tek seferde 50 dosyaya kadar, her biri en fazla 25 MB. PNG’deki prompt’lar için [PNG meta veri silici](png-metadata-remover) de kullanılabilir.' },
        { q: 'ChatGPT ya da Gemini görsellerinin meta verisini kaldırır mı?', a: 'Bu servislerin yazdığı C2PA Content Credentials ve IPTC alanlarını kaldırır. Google ayrıca piksellere SynthID filigranı gömer; bunu hiçbir meta veri aracı kaldıramaz.' },
        { q: 'Silmeden önce prompt’u görebilir miyim?', a: 'Evet. “Ham meta veri” sekmesi prompt’ları, iş akışlarını ve üretici adlarını kelimesi kelimesine gösterir; saklamak istediklerinizi yıkamadan önce kopyalayabilirsiniz.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'AI etiketsiz – Gerçek fotoğrafları “AI bilgisi” olmadan paylaş',
      description: 'Gerçek bir fotoğrafta “AI bilgisi” mi çıktı? Buna yol açan C2PA ve IPTC verisini kaldırın, AI etiketi olmadan paylaşın. Kayıpsız, ücretsiz, tarayıcıda.',
      navLabel: 'AI etiketsiz',
      h1: 'Gerçek fotoğraflarınızda AI etiketi olmasın',
      lead: 'Photoshop’ta ya da bir telefon düzenleyicisinde yapılan küçük bir üretken düzeltme, Instagram, Facebook veya Threads’in gerçek bir fotoğrafa “AI bilgisi” etiketi koyması için yeterli olabilir. Dosyayı aşağıya bırakın, etiketi hangi verinin tetiklediğini görün ve meta verisinde AI etiketi olmayan temiz bir kopya paylaşın.',
      sections: [
        {
          heading: 'Gerçek fotoğraf neden AI etiketi alır',
          paragraphs: ['Platformlar, düzenleyicilerin dosyaya eklediği köken verisini okur. [Gerçek fotoğraflar neden “Made with AI” etiketi alır](made-with-ai-label) ayrıntıları anlatır; yaygın nedenler şunlardır:'],
          bullets: [
            'Üretken Dolgu, AI ile silme ya da AI ile genişletme gibi üretken bir adımı kaydeden C2PA manifesti.',
            'Görselin AI ile birleştirildiğini söyleyen IPTC veya XMP DigitalSourceType değeri.',
            'Bir düzenleme uygulamasının dışa aktarırken varsayılan olarak eklediği Content Credentials.',
          ],
        },
        {
          heading: 'AI etiketi olmadan nasıl paylaşılır',
          paragraphs: ['Bir dakikadan kısa sürer ve hiçbir şey cihazınızdan çıkmaz:'],
          bullets: [
            'Düzenlenmiş fotoğrafı bu sayfanın üstündeki kutuya bırakın.',
            'Sonucu ve arkasındaki alanları okuyun — rapor tam C2PA eylemini ya da IPTC değerini gösterir.',
            '“Tüm görselleri yıka” düğmesine basın ve temiz kopyayı kaydedin.',
            'Orijinal dışa aktarımı değil, temiz kopyayı yükleyin.',
          ],
        },
        {
          heading: 'Etiketi kaynağında durdurun',
          paragraphs: [
            'Sık düzenleme yapıyorsanız Photoshop ve Lightroom’un dışa aktarma ayarlarında Content Credentials’ı kapatın; böylece hiç yazılmazlar. Çok sayıda fotoğraf için [toplu meta veri kaldırma](batch-remove-metadata) yazısına bakın.',
          ],
        },
        {
          heading: '“AI etiketsiz” neyi vaat eder, neyi edemez',
          paragraphs: [
            'Meta veriyi kaldırmak, dosyadaki nedeni ortadan kaldırır; düzenlenmiş fotoğrafların çoğunda etiketin sebebi budur. SynthID gibi piksel filigranlarını kaldıramaz ve platform yine de kendi tespitiyle bir gönderiyi etiketleyebilir ya da sizden beyan isteyebilir. Bu sayfa küçük düzenlemeler yapılmış gerçek fotoğraflar içindir: bir görsel AI ile üretilmişse ve insanları yanıltabilecekse bunu belirtin.',
          ],
        },
      ],
      faqHeading: '“AI etiketsiz” hakkında sorular',
      faq: [
        { q: 'Zaten yayımladığım gönderideki “AI bilgisi” etiketi kalkar mı?', a: 'Hayır. Etiket platformdaki gönderiye aittir. Gönderiyi silin ya da arşivleyin, dosyayı burada temizleyin ve temiz kopyayı yükleyin.' },
        { q: '“AI etiketsiz” garanti mi?', a: 'Hayır. Platformların okuduğu meta veriyi kaldırır, ancak platformlar başka sinyaller de kullanabilir. Düzenlenmiş fotoğrafların çoğunda etiketin nedeni meta veridir.' },
        { q: 'iPhone ve Android fotoğraflarıyla çalışır mı?', a: 'Evet. iPhone HEIC ve Android JPG dosyaları dönüştürülmeden temizlenir. Ayrıca özel bir [HEIC meta veri silici](heic-metadata-remover) de var.' },
        { q: 'Tamamen AI ile üretilmiş görsellerdeki AI etiketleri ne olacak?', a: '[AI etiket temizleyici](ai-tag-cleaner) bunları gösterir ve kaldırır, ancak platform kuralları genellikle gerçekçi AI görsellerini sizin etiketlemenizi ister.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
    'remove-exif-data': {
      metaTitle: 'Fotoğraflardan EXIF verisini sil – ücretsiz ve gizli',
      description: 'JPG, HEIC, PNG ve WebP dosyalarından EXIF’i — GPS, kamera, seri numarası, tarih — tarayıcıda silin. Yükleme yok, kalite kaybı yok, 50 dosyaya kadar.',
      navLabel: 'EXIF silici',
      h1: 'Fotoğraflardan EXIF verisini silin',
      lead: 'Fotoğraflarınızı aşağıya bırakın; taşıdıkları her EXIF alanını — GPS konumu, kamera ve lens, seri numarası, çekim zamanı — görün ve tek tıkla silin. Her şey cihazınızda gerçekleşir; dosyalar asla yüklenmez.',
      sections: [
        {
          heading: 'EXIF verisi neleri ele verir',
          paragraphs: ['EXIF, kamera ya da telefonun her fotoğrafa yazdığı teknik notlar bloğudur. Tek başına çoğu zararsızdır, ama bir araya gelince sizin hakkınızda çok şey söyler. Gizlilik açısından önemli alanlar şunlardır:'],
          bullets: [
            'GPS enlem, boylam ve rakımı — çoğu zaman birkaç metre hassasiyetinde, bir evi bulmaya yetecek kadar.',
            'Çekimin tarihi ve saati, saat dilimiyle birlikte.',
            'Kamera ya da telefon markası ve modeli, lens ve birçok kamerada fotoğrafları birbirine bağlayan gövde seri numarası.',
            'Sahip ya da sanatçı adı ve dosyayı en son düzenleyen yazılım.',
            'Kırpmadan sonra bile orijinal kareyi gösterebilen gömülü küçük resim.',
          ],
        },
        {
          heading: 'Bu EXIF silici nasıl çalışır',
          paragraphs: [
            'AI Label Remover dosya yapısını doğrudan okur. JPEG’de EXIF ve XMP’yi taşıyan APP1 segmentini, ayrıca IPTC’yi, yorumları ve küçük resimleri keser; HEIC, PNG ve WebP’de karşılık gelen kutuları veya chunk’ları kaldırır. Sıkıştırılmış görüntü verisi bayt bayt kopyalanır; hiçbir şey yeniden kodlanmaz ve fotoğraf aynen görünür.',
            'Fotoğrafın nasıl görüntüleneceğini belirleyen alanlar bilerek korunur: yön, ICC renk profili ve piksel boyutu. Böylece kaba araçların yol açtığı yan dönmüş fotoğraflar ve soluk renkler önlenir. İş bitince yıkanmış dosya yeniden okunur; EXIF alanlarının gerçekten gittiğini görürsünüz.',
          ],
        },
        {
          heading: 'Paylaşmadan önce EXIF ne zaman silinmeli',
          paragraphs: [
            'Büyük sosyal ağların çoğu yüklemede EXIF’i kaldırır, ama birçok yer kaldırmaz: e-posta ekleri, bulut bağlantıları, forumlar, ilan siteleri, “orijinal kalitede” dosya gönderen sohbet uygulamaları ve kendi web siteniz. Bir fotoğrafın nereye gideceğinden emin değilseniz önce yıkamak güvenli varsayılandır.',
            'İnternette bir şey satmak, evde çekilmiş bir fotoğrafı paylaşmak ya da yeni tanıştığınız birine fotoğraf göndermek, [GPS verisinin konumu ele verebildiği](remove-gps-location-from-photos) klasik durumlardır.',
          ],
        },
        {
          heading: 'Tasarımı gereği gizli',
          paragraphs: [
            'Çevrimiçi EXIF silicileri genellikle fotoğrafınızı bir sunucuya yükler, orada işler ve geri gönderir. AI Label Remover tüm işi tarayıcı sekmenizdeki Web Worker’larda yapar: sayfa yüklendikten sonra bağlantınızı kesseniz bile çalışmaya devam eder. Hesap yok, filigran yok; dosya başına 25 MB ve 40 megapiksel dışında sınır yok.',
          ],
        },
      ],
      faqHeading: 'EXIF silme hakkında sorular',
      faq: [
        { q: 'EXIF’i silmek kaliteyi düşürür mü?', a: 'Hayır. Yalnızca meta veri blokları kesilir; sıkıştırılmış görüntü verisi değiştirilmeden kopyalanır, bu yüzden çözünürlük, netlik ve renkler aynen kalır.' },
        { q: 'Fotoğrafım yine doğru yönde mi görünecek?', a: 'Evet. Yön değeri ICC renk profiliyle birlikte korunur; görsel eskisi gibi görüntülenir.' },
        { q: 'iPhone HEIC fotoğraflarından EXIF silinebilir mi?', a: 'Evet. HEIC ve HEIF dosyaları JPEG’e dönüştürülmeden doğrudan desteklenir. Ayrıca özel bir sayfa var: [HEIC meta veri silici](heic-metadata-remover).' },
        { q: 'EXIF’in gittiğini nasıl kontrol ederim?', a: 'Yıkamadan sonra AI Label Remover yeni dosyayı yeniden okur ve hangi alanların kaldığını gösterir. Dosyayı işletim sisteminizin dosya özelliklerinde de açabilirsiniz.' },
        { q: 'Çok sayıda fotoğrafı aynı anda yapabilir miyim?', a: 'Evet: tek seferde 50 dosyaya kadar, tek bir ZIP olarak indirilebilir. [Toplu meta veri kaldırma](batch-remove-metadata) yazısına bakın.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Görsellerden C2PA Content Credentials kaldır, ücretsiz',
      description: 'JPG, PNG, HEIC, WebP ve AVIF dosyalarındaki C2PA Content Credentials’ı (JUMBF manifestleri) inceleyin ve kayıpsız, hiçbir yere yüklemeden kaldırın.',
      navLabel: 'C2PA silici',
      h1: 'C2PA Content Credentials’ı kaldırın',
      lead: 'Content Credentials, bir görsele eklenmiş imzalı bir geçmiştir: onu hangi uygulama oluşturdu, ardından hangi düzenlemeler yapıldı ve üretken AI kullanıldı mı. Aşağıya bir dosya bırakın, C2PA manifestini okuyun ve ardından tüm manifest deposunu kayıpsız kaldırın.',
      sections: [
        {
          heading: 'Bir C2PA manifesti neler içerir',
          paragraphs: ['C2PA (Coalition for Content Provenance and Authenticity), bir dosyaya kriptografik olarak imzalanmış bir kayıt gömmenin yolunu tanımlar. [C2PA nedir](what-is-c2pa-content-credentials) yazısı ayrıntıya girer; pratikte bir manifest genellikle şunları içerir:'],
          bullets: [
            'Claim generator — onu imzalayan uygulama ya da servis; Photoshop, Firefly, ChatGPT veya bir kamera gibi.',
            'Eylem listesi: oluşturuldu, açıldı, düzenlendi, kırpıldı ve üretken AI adımları için işaretler.',
            'Bileşenler — dosyanın oluşturulduğu önceki sürümler ya da kaynak görseller.',
            'İçeriğin çekildiğini, birleştirildiğini ya da AI ile üretildiğini belirten dijital kaynak türü.',
            'Kaydı görüntünün tam verisine bağlayan imza ve sertifika.',
          ],
        },
        {
          heading: 'C2PA her dosya türünde nerede durur',
          paragraphs: [
            'JPEG’de manifest deposu APP11 segmentlerinde JUMBF kutuları olarak durur; PNG’de bir caBX chunk’ıdır; HEIC ve AVIF’te bir uuid kutusu; WebP’de ayrı bir RIFF chunk’ı. AI Label Remover bunların hepsini bulur, içindeki beyanları gösterir ve görüntü verisini değiştirmeden tüm depoyu kaldırır.',
            'İmza manifesti tam baytlara bağladığından, başka bir uygulamada yeniden kaydetmek genellikle onu zaten bozar ya da düşürür. Temiz biçimde kaldırmak, bozuk ve yarı geçerli bir kaydın geride kalmasını önler.',
          ],
        },
        {
          heading: 'Tutmak için nedenler, kaldırmak için nedenler',
          paragraphs: [
            'Content Credentials değerli olabilir: haber kuruluşlarının ve içerik üreticilerinin bir görselin kaynağını kanıtlamasına yardım eder. Amacınız buysa tutun — ve her durumda orijinal dosyayı saklayın, çünkü kaldırılan meta veri geri getirilemez.',
            'Kayıt istediğinizden fazlasını gösteriyorsa (isimler, düzenleme geçmişi, kaynak görseller) ya da bir düzenleyici küçük bir düzeltmeden sonra gerçek bir fotoğrafa AI işareti eklediyse kaldırmak mantıklıdır. Content Credentials’ı Photoshop ve Lightroom’un dışa aktarma ayarlarından da kapatabilirsiniz.',
          ],
        },
      ],
      faqHeading: 'C2PA hakkında sorular',
      faq: [
        { q: 'AI Label Remover C2PA imzalarını doğrular mı?', a: 'Hayır. Manifest içeriğini okur ve gösterir, ama sertifika zincirini doğrulamaz. İmza doğrulaması gerekiyorsa resmi Content Credentials Verify aracını kullanın.' },
        { q: 'Content Credentials’ı kaldırmak yasal mı?', a: 'Sahip olduğunuz ya da değiştirme izniniz olan dosyalardan meta veri kaldırmak genellikle sorun değildir, ancak bunu bir görseli kimin ya da nasıl yaptığı konusunda yanıltmak için kullanmayın. Bu genel bilgidir, hukuki tavsiye değildir.' },
        { q: 'Fotoğrafım neden “Bir kez daha bakmaya değer” diyor?', a: 'Dosyada AI’dan açıkça söz etmeyen bir C2PA manifesti var. Bazı platformlar her manifesti bir ipucu sayar; karar vermeden önce listelenen eylemlere bakın.' },
        { q: 'Platform görselin düzenlendiğini yine de anlar mı?', a: 'Kaldırılan manifestten anlamaz. Platformlar başka sinyaller kullanabilir; piksellerdeki görünmez filigranlar da meta veri kaldırmadan etkilenmez.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC meta veri silici – iPhone fotoğraflarında EXIF ve GPS',
      description: 'iPhone HEIC ve HEIF fotoğraflarından EXIF, GPS konumu ve zaman damgalarını JPEG’e dönüştürmeden silin. Kayıpsız, tarayıcıda, hiçbir şey yüklenmez.',
      navLabel: 'HEIC meta veri silici',
      h1: 'iPhone fotoğrafları için HEIC meta veri silici',
      lead: 'iPhone’lar fotoğrafları HEIC olarak kaydeder ve her biri nerede, ne zaman çekildiğini kaydeder. HEIC veya HEIF dosyalarını aşağıya bırakın, bu meta veriyi görün ve kaldırın — fotoğraf HEIC olarak kalır, dönüştürme ve kalite kaybı olmadan.',
      sections: [
        {
          heading: 'Bir iPhone HEIC fotoğrafı neleri kaydeder',
          paragraphs: ['Sıradan bir iPhone fotoğrafı çoğu kişinin sandığından fazlasını taşır:'],
          bullets: [
            'Hassas GPS koordinatları, rakım ve kameranın baktığı yön.',
            'Çekim tarihi, saati ve saat dilimi ile değişiklik tarihleri.',
            'Cihaz modeli, lens, kamera ayarları ve iOS sürümü.',
            'Live Photo eşleştirme kimliği gibi Apple’a özgü veriler.',
            'Düzenleme uygulamalarının yazdığı, bazen C2PA kayıtları içeren XMP verisi.',
          ],
        },
        {
          heading: 'JPEG’e dönüştürmeden meta veri kaldırma',
          paragraphs: [
            'Alışılmış tavsiye, HEIC’i JPEG’e dönüştürüp meta verinin geçmemesini ummaktır. Bu, görüntüyü yeniden kodlar, kalite kaybettirir ve çoğu zaman geniş gamlı renk profilini atar. AI Label Remover bunun yerine HEIC kabının kendisini düzenler: Exif ve XMP öğelerini, C2PA uuid kutularını ve zaman damgası kutularını kaldırır; HEVC görüntü verisini, yönü (irot/imir) ve renk profilini (colr) olduğu gibi bırakır.',
            'Aynı motor, aynı ISOBMFF kabını kullanan AVIF’i de işler; modern uygulamaların AVIF dışa aktarımları da aynı şekilde yıkanabilir.',
          ],
        },
        {
          heading: 'iPhone ayarları mı, dosyayı yıkamak mı',
          paragraphs: [
            'iOS, paylaşım sayfasındaki “Seçenekler” düğmesiyle tek bir paylaşım için konumu kapatmanıza izin verir; Fotoğraflar uygulaması da her fotoğrafın konumunu düzenleyebilir ya da kaldırabilir. Tek tük paylaşımlar için iyi çalışır, ama unutmak kolaydır ve diğer alanları kaldırmaz. [Fotoğraflardaki GPS neden risklidir](remove-gps-location-from-photos) yazısına bakın.',
            'Bir grup fotoğraf için — bir tatil klasörü, ürün çekimleri ya da bir ilan için görseller — hepsini AI Label Remover’a bırakıp tek bir ZIP kaydetmek daha hızlıdır ve önce/sonra raporu tam olarak neyin kaldırıldığını gösterir.',
          ],
        },
      ],
      faqHeading: 'HEIC hakkında sorular',
      faq: [
        { q: 'HEIC’in bazen açılmadığı Windows’ta çalışır mı?', a: 'Evet. AI Label Remover HEIC yapısını kendisi okur, bu yüzden yüklü bir HEIC codec’ine ihtiyaç duymaz. HEIC dosyaları önizleme yerine bir biçim etiketi gösterir, ama okuma ve yıkama normal çalışır.' },
        { q: 'Yıkanmış dosya Fotoğraflar’da açılır mı?', a: 'Evet. Çıktı, aynı görüntü verisine sahip standart bir HEIC dosyasıdır; yalnızca meta veri öğeleri kaldırılır.' },
        { q: 'Live Photo destekleniyor mu?', a: 'AI Label Remover durağan HEIC görüntüsünü işler. Live Photo’nun eşlenmiş videosu ayrı bir dosyadır ve değiştirilmez.' },
        { q: 'Dosya boyutu sınırı var mı?', a: 'Her dosya en fazla 25 MB ve 40 megapiksel olabilir; bu, güncel tüm iPhone’ların fotoğraflarını kapsar. Aynı anda 50 dosya yıkayabilirsiniz.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG meta veri silici – Prompt’ları ve metin chunk’larını sil',
      description: 'PNG meta verisini — Stable Diffusion veya ComfyUI prompt’lu tEXt, iTXt ve zTXt chunk’ları, XMP, eXIf ve C2PA — görüntüyü kayıpsız tutarak kaldırın.',
      navLabel: 'PNG meta veri silici',
      h1: 'PNG meta veri silici',
      lead: 'PNG dosyaları meta veriyi metin chunk’larında saklar: AI prompt’ları ve iş akışları, yazar adları, yazılım ve zaman damgaları. PNG’leri aşağıya bırakın, her chunk’ı okuyun ve kaldırın; görüntü verisi bit bit aynı kalır.',
      sections: [
        {
          heading: 'PNG meta veriyi nerede tutar',
          paragraphs: ['PNG bir chunk dizisidir. Görüntünün kendisi IHDR, PLTE ve IDAT’tadır; geri kalan her şey isteğe bağlıdır. AI Label Remover’ın kaldırdığı chunk’lar şunlardır:'],
          bullets: [
            'tEXt, zTXt ve iTXt — serbest metin, sıkıştırılmış metin ve uluslararası metin. Stable Diffusion WebUI buraya bir “parameters” chunk’ı yazar; ComfyUI “prompt” ve “workflow” JSON’u yazar.',
            'iTXt içinde saklanan, IPTC ve AI kaynak beyanlarını içeren XMP paketleri.',
            'eXIf — bir uygulama fotoğraftan kopyaladıysa GPS dahil EXIF verisi.',
            'caBX — C2PA Content Credentials.',
            'tIME (son değişiklik zamanı) ve dSIG (dijital imza).',
          ],
        },
        {
          heading: 'Görüntü aynı görünsün diye kalanlar',
          paragraphs: [
            'Saydamlık (tRNS), gama ve renklilik (gAMA, cHRM), sRGB bayrağı ve gömülü ICC profili (iCCP) görüntülenmeyi etkiler, bu yüzden korunur. Animasyonlu PNG’ler acTL, fcTL ve fdAT chunk’larını korur; APNG animasyonları oynamaya devam eder.',
            'IDAT verisi yeniden sıkıştırılmak yerine kopyalandığından, yıkanmış dosya orijinaliyle piksel piksel aynıdır — metin chunk’ları gittiği için genellikle biraz daha küçüktür.',
          ],
        },
        {
          heading: 'AI prompt’larını ve iş akışlarını korumak',
          paragraphs: [
            'Stable Diffusion, Forge veya ComfyUI ile yapılmış görselleri paylaşırsanız, herkes PNG’yi aynı araca sürükleyip tam prompt’unuzu, seed’inizi, modelinizi ve düğüm grafiğinizi geri alabilir. [Stable Diffusion ve ComfyUI prompt’ları PNG’de nasıl saklar](remove-stable-diffusion-comfyui-metadata) neyin kaydedildiğini gösterir. Yıkama hepsini kaldırır; saklamak isterseniz “Ham meta veri” sekmesinden prompt’u önce kopyalayabilirsiniz.',
          ],
        },
      ],
      faqHeading: 'PNG meta verisi hakkında sorular',
      faq: [
        { q: 'PNG meta verisini kaldırmak renkleri değiştirir mi?', a: 'Hayır. Renkle ilgili chunk’lar — sRGB, gAMA, cHRM ve iCCP — korunur ve IDAT görüntü verisi değiştirilmeden kopyalanır.' },
        { q: 'Saydam PNG’lerle çalışır mı?', a: 'Evet. Saydamlık verisi (tRNS ya da IDAT içindeki alfa kanalı) görüntünün parçasıdır ve asla dokunulmaz.' },
        { q: 'Prompt’u bir yerde saklayabilir miyim?', a: 'Yıkamadan önce “Ham meta veri” sekmesinden kopyalayın. Kaldırıldıktan sonra meta veri yıkanmış dosyadan geri getirilemez.' },
        { q: 'Midjourney veya DALL·E PNG’leri için de çalışır mı?', a: 'Evet. Bu servislerin gömdüğü metin, XMP veya C2PA verisi aynı şekilde kaldırılır. [Midjourney ve DALL·E prompt’larını gizleme](hide-midjourney-dalle-prompts) yazısına bakın.' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: 'AI Label Remover hakkında – Meta veri temizleyici nasıl çalışır',
      description: 'AI Label Remover’ı kim geliştiriyor, tarayıcıdaki meta veri temizleyici nasıl çalışıyor, yazılarımızı nasıl hazırlayıp güncelliyoruz ve araç neyi asla yapmaz.',
      navLabel: 'Hakkında',
      title: 'AI Label Remover hakkında',
      lead: 'AI Label Remover, görsellerdeki gizli meta veriyi — EXIF, GPS, XMP, IPTC, C2PA Content Credentials ve AI prompt’ları — okumak ve kaldırmak için ücretsiz bir araçtır; dosyalarınızın cihazınızdan hiç çıkmaması için tasarlandı.',
      sections: [
        {
          heading: 'Neden var',
          paragraphs: [
            'Fotoğraflar ve AI görselleri çoğu kişinin sandığından çok daha fazla bilgi taşır: GPS etiketlerinde ev konumları, cihaz seri numaraları, eksiksiz prompt’lar ve iş akışları, platformların etiket koymak için okuduğu köken kayıtları. Çevrimiçi temizleyicilerin çoğu, korumaya çalıştığınız dosyaları yüklemenizi ister. AI Label Remover aynı işi bu ödün olmadan yapmak için geliştirildi.',
          ],
        },
        {
          heading: 'Araç nasıl çalışır',
          paragraphs: [
            'Bir görsel eklediğinizde tarayıcınız onu yerelde okur. Web Worker’lar dosya yapısını — JPEG segmentleri, PNG chunk’ları, WebP RIFF chunk’ları, GIF blokları ve HEIC/AVIF kutuları — çözümler ve bulduğu her meta veri bloğunu listeler. Yıkama bu blokları bayt akışından çıkarır, sıkıştırılmış görüntü verisini değiştirmeden kopyalar ve neyin kaldığını doğrulamak için sonucu yeniden okur.',
            'Sunucu tarafında hiçbir işlem yapılmaz. Web sitesi statik sayfalardan oluşur; yüklendikten sonra araç çevrimdışı çalışır.',
          ],
        },
        {
          heading: 'Yazılarımız nasıl hazırlanır',
          paragraphs: [
            'Bu sitedeki rehberler yayımlanmış belirtimlere (EXIF, XMP, IPTC Photo Metadata, C2PA, PNG ve ISOBMFF biçimleri), platformların yardım sayfalarına ve anlattığımız araçlardan gelen gerçek dosyalarla yapılan testlere dayanır. Her yazı son güncelleme tarihini gösterir; standartlar ya da platform kuralları değiştiğinde yazıları güncelleriz.',
            'Yazılar genel bilgidir, hukuki tavsiye değildir. Platformların AI etiketleriyle ilgili kuralları sık değişir; herhangi bir ifadeye güvenmeden önce platformun yardım sayfalarını kontrol edin.',
          ],
        },
        {
          heading: 'AI Label Remover’ın yapmayacakları',
          paragraphs: [],
          bullets: [
            'Dosyalarınızı yüklemek, saklamak ya da kaydetmek — onları alabilecek bir sunucu yok.',
            'Pikselleri değiştirmek, görünmez filigranları ya da görünür logoları kaldırmak.',
            'Bir platformun etiket koyacağını ya da koymayacağını vaat etmek.',
            'AI ile üretilmiş görselleri gerçek fotoğraf gibi göstermeye yardım etmek. Gizliliği korumak ve hataları düzeltmek için kullanın.',
          ],
        },
        {
          heading: 'Bağımsızlık',
          paragraphs: [
            'AI Label Remover bağımsızdır; Meta, Google, OpenAI, Adobe, Midjourney, Apple veya C2PA ile bağlantılı değildir. Ürün adları yalnızca uyumluluğu anlatmak için kullanılır.',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: 'Gizlilik politikası – AI Label Remover',
      description: 'Sade dille gizlilik politikası: görseller cihazınızdan çıkmaz; hesap, analiz ve reklam yoktur; yalnızca dil ve tema tercihiniz kaydedilir.',
      navLabel: 'Gizlilik',
      title: 'Gizlilik politikası',
      lead: 'AI Label Remover gizliliğinizi korumak için bir araçtır; kullanmak size gizlilik kaybettirmemeli. Bu sayfa, görsellerinize ve sitenin işlediği az miktardaki bilgiye ne olduğunu sade bir dille açıklar.',
      sections: [
        {
          heading: 'Kısaca',
          paragraphs: [],
          bullets: [
            'Görselleriniz kendi cihazınızda işlenir ve asla yüklenmez.',
            'Hesap, kayıt ya da e-posta listesi yok — kim olduğunuzu bilmiyoruz.',
            'Analiz, reklam, izleme pikseli ya da üçüncü taraf betiği yok.',
            'Yalnızca diliniz ve açık/koyu tema tercihiniz kendi tarayıcınızda kaydedilir; bunları istediğiniz zaman silebilirsiniz.',
          ],
        },
        {
          heading: 'Görsellerinize ne olur',
          paragraphs: ['AI Label Remover’a bir görsel eklediğinizde yolculuğunun tamamı şudur:'],
          bullets: [
            'Tarayıcınız dosyayı cihazınızdan açar ve sekmenin belleğinde tutar.',
            'Sekmedeki Web Worker’lar meta veriyi okur ve yıkamaya bastığınızda temiz bir kopya yazar — yine bellekte.',
            'Kaydettiğinizde tarayıcınız temiz dosyayı ya da ZIP’i doğrudan cihazınıza yazar.',
            'Sekmeyi kapattığınızda ya da yenilediğinizde görseller ve raporlar kaybolur. Sunucuda hiçbir şey kalmaz, çünkü hiçbir sunucu onları almaz.',
          ],
        },
        {
          heading: 'Bunu kendiniz doğrulayabilirsiniz',
          paragraphs: [
            'Sözümüze güvenmek zorunda değilsiniz. Sayfayı yükleyin, Wi-Fi’ı ya da mobil veriyi kapatın ve bir dosya yıkayın: yine çalışır, çünkü gönderilmesi gereken bir şey yok. Geliştirici araçlarını biliyorsanız yıkama sırasında Ağ sekmesini açın; hiçbir görüntü verisinin cihazınızdan çıkmadığını görürsünüz.',
          ],
        },
        {
          heading: 'Neleri toplamıyoruz',
          paragraphs: ['AI Label Remover şunları toplamaz ya da saklamaz:'],
          bullets: [
            'görsellerinizi, meta verilerini ya da ekranda gösterilen raporları;',
            'adınızı, e-posta adresinizi ya da hesap bilgilerinizi;',
            'konumunuzu — fotoğraflarınızda bulunan GPS yalnızca size, kendi ekranınızda gösterilir;',
            'kontrol ettiğiniz dosyaların ya da aracı nasıl kullandığınızın geçmişini.',
          ],
        },
        {
          heading: 'Tarayıcınızda neler kaydedilir ve nasıl silinir',
          paragraphs: ['Seçimlerinizi hatırlamak için site cihazınıza iki küçük tercih kaydeder:'],
          bullets: [
            'Dil: local storage’da bir “lang” kaydı ve bir yıl saklanan birinci taraf “lang” çerezi; böylece ana sayfa seçtiğiniz dilde açılır. Yalnızca “tr” gibi bir dil kodu içerir.',
            'Tema: açık ya da koyu modu seçerseniz local storage’da bir “theme” kaydı.',
            'Silmek için tarayıcı ayarlarından bu sitenin çerezlerini ve site verilerini temizleyin. AI Label Remover çalışmaya devam eder; yalnızca seçimlerinizi unutur.',
          ],
        },
        {
          heading: 'Web sitesini ziyaret ettiğinizde',
          paragraphs: [
            'Her web sitesinde olduğu gibi, bir sayfayı açtığınızda sunucumuzun onu size gönderebilmek için birkaç temel teknik bilgiye ihtiyacı vardır: cihazınızın ağ adresi (IP adresi), tarayıcı türü ve açtığınız sayfa. Bu bilgiler, sitenin sorunsuz çalışması ve kötüye kullanımın engellenmesi için geçici olarak kaydedilebilir ve yalnızca gerektiği kadar tutulur. Sizi tanımlamak için kullanmayız, profilinizi çıkarmayız ve asla paylaşmaz ya da satmayız.',
            'Ana sayfayı açtığınızda sunucu, yalnızca doğru dil sürümünü açmak için tarayıcınızın dil ayarına ve daha önce seçtiğiniz dile bakar. Bu anında gerçekleşir ve saklanmaz.',
          ],
        },
        {
          heading: 'Çocuklar',
          paragraphs: [
            'AI Label Remover çocuklar dahil hiç kimseden kişisel bilgi istemez ya da toplamaz. Genç kullanıcılar aracı hesap açmadan ve kendileri hakkında bilgi paylaşmadan kullanabilir.',
          ],
        },
        {
          heading: 'Haklarınız',
          paragraphs: [
            'AI Label Remover adınızı, e-postanızı ya da bir hesabı toplamadığı için elimizde sunulacak, düzeltilecek ya da silinecek bir profiliniz yoktur. Sitenin cihazınızda hatırladıkları her zaman sizin kontrolünüzdedir. Ziyaret sırasında geçici olarak kaydedilen teknik bilgiler bir isim ya da hesapla ilişkilendirilmez ve artık gerekmediğinde silinir.',
          ],
        },
        {
          heading: 'Bu politikadaki değişiklikler',
          paragraphs: ['AI Label Remover’ın verileri işleme biçimi bir gün değişirse bu sayfayı ve üstteki tarihi güncelleriz.'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default tr;
