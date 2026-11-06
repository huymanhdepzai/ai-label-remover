import type { Pages } from './types';

const id: Pages = {
  home: {
    reassure: 'Online, gratis, tanpa daftar, tanpa instalasi — foto dibaca dan dibersihkan langsung di browser dan tidak pernah diunggah ke server.',
    ctaTools: 'Lihat semua alat',
    sources: {
      label: 'Membaca dan menghapus metadata dari gambar buatan',
      note: 'Nama produk hanya menunjukkan asal gambar; AI Label Remover tidak berafiliasi dengan perusahaan-perusahaan ini.',
    },
    start: {
      title: 'Mulai dari file yang Anda punya',
      lead: 'Pilih pekerjaan yang ingin Anda lakukan — setiap alat punya area unggah di bagian atas halaman.',
      badge: 'Disarankan',
      open: 'Buka alat',
    },
    nav: {
      remove: 'Hapus metadata',
      check: 'Lihat & periksa',
      learn: 'Pelajari',
      viewer: 'Lihat metadata foto',
      aiCheck: 'Cek gambar AI',
      whatIs: 'Apa itu metadata?',
    },
    learn: {
      what: {
        title: 'Apa itu metadata?',
        paragraphs: [
          'Metadata adalah “data tentang data”: catatan yang tersimpan di dalam file gambar tetapi tidak pernah terlihat di foto itu sendiri. Kamera, ponsel, aplikasi edit foto, dan generator gambar AI menambahkannya secara otomatis, biasanya tanpa memberi tahu Anda.',
          'Pada foto, metadata terbagi ke dalam lima kelompok besar. Masing-masing menjawab pertanyaan berbeda tentang gambar — dan tentang orang yang memotret atau membuatnya.',
        ],
        types: [
          { name: 'Deskriptif', text: 'Judul, keterangan, kata kunci, nama orang di dalam foto.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Teknis', text: 'Merek dan model kamera, lensa, bukaan, kecepatan rana, ISO, nomor seri.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Lokasi & waktu', text: 'Koordinat GPS, ketinggian, tanggal pemotretan, dan zona waktu.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Hak & administrasi', text: 'Pembuat, pemilik, hak cipta, software edit terakhir.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Asal-usul & AI', text: 'Content Credentials, label “dibuat dengan AI”, prompt, dan workflow.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Anda akan menemukan banyak nama untuk pekerjaan yang sama — “penghapus metadata”, “hapus EXIF”, “pembersih metadata”, “hapus info foto” — semuanya berarti mengeluarkan catatan tersembunyi dari file tanpa mengubah gambar. Begitu pula “penampil”, “pembaca”, atau “pemeriksa metadata” menunjukkan isi file. AI Label Remover bisa melakukan keduanya.',
      },
      why: {
        title: 'Mengapa perlu melihat dan menghapus metadata sebelum membagikan foto?',
        paragraphs: [
          'Satu kolom metadata biasanya tidak berbahaya, tetapi bila digabung, semuanya bercerita banyak tentang Anda. Foto yang diambil di rumah lalu diunggah ke marketplace bisa membawa koordinat GPS yang akurat hingga beberapa meter; gambar yang dikirim lewat email atau tautan cloud menyimpan semua yang ditulis kamera. Lihat [bagaimana GPS di foto bisa membocorkan alamat rumah Anda](remove-gps-location-from-photos).',
          'Untuk gambar yang dibuat atau diedit dengan AI, metadata juga menentukan apakah platform menampilkan label “Dibuat dengan AI”, dan dapat membuka seluruh prompt yang Anda tulis.',
        ],
        bullets: [
          'Membocorkan tempat tinggal, tempat kerja, atau perjalanan Anda lewat koordinat GPS.',
          'Menghubungkan banyak foto ke satu orang melalui nomor seri kamera atau nama pemilik.',
          'Membuka prompt, seed, model, dan workflow yang ingin Anda rahasiakan.',
          'Mendapat label AI dari platform karena data C2PA atau IPTC yang terlampir.',
        ],
      },
      standards: {
        title: 'Standar metadata foto yang umum',
        lead: 'Satu file gambar bisa menyimpan beberapa “laci” metadata sekaligus, masing-masing mengikuti standar berbeda. AI Label Remover membaca dan menghapus semua yang tercantum di bawah ini.',
        items: [
          { name: 'EXIF', text: 'Ditulis oleh kamera dan ponsel: pengaturan eksposur, perangkat, waktu, GPS, thumbnail. [Pelajari EXIF](what-is-exif-data).' },
          { name: 'XMP', text: 'Format XML milik Adobe untuk riwayat edit, rating, kata kunci, dan banyak properti terkait AI.' },
          { name: 'IPTC', text: 'Standar dunia pers: keterangan, pembuat, hak cipta, dan tag [DigitalSourceType](iptc-digitalsourcetype-ai) yang menyatakan gambar AI.' },
          { name: 'C2PA', text: 'Content Credentials bertanda tangan kriptografis yang mencatat bagaimana file dibuat dan diedit. [Apa itu C2PA](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'Chunk tEXt, iTXt, dan zTXt tempat [Stable Diffusion dan ComfyUI](remove-stable-diffusion-comfyui-metadata) menyimpan prompt dan workflow.' },
        ],
      },
    },
    security: {
      title: 'Foto Anda tetap aman',
      lead: 'Untuk alat apa pun yang menangani file pribadi, pertanyaan pertama adalah “ke mana foto saya pergi?”. Jawaban AI Label Remover: tidak ke mana-mana.',
      items: [
        { title: '100% di perangkat Anda', text: 'Pembacaan dan pembersihan berjalan di Web Worker di dalam tab browser. Tidak ada server yang menerima file Anda.' },
        { title: 'Tidak disimpan, tidak untuk melatih AI', text: 'Karena foto tidak pernah dikirim, tidak ada salinan yang bisa disimpan, bocor, atau dipakai melatih model.' },
        { title: 'Bisa dipakai offline', text: 'Muat halaman, matikan Wi-Fi, lalu cuci sebuah file — tetap berfungsi. Tab Network di DevTools tidak menunjukkan data gambar yang keluar.' },
        { title: 'Tanpa akun, tanpa pelacakan', text: 'Tanpa pendaftaran, analitik, iklan, atau piksel pihak ketiga. Situs hanya mengingat bahasa dan tema yang Anda pilih.' },
      ],
    },
    faq: [
      { q: 'Apa beda EXIF dan metadata?', a: 'EXIF adalah salah satu jenis metadata — yang ditulis kamera dan ponsel. “Metadata” adalah istilah yang lebih luas dan juga mencakup XMP, IPTC, C2PA, serta chunk teks PNG. Lihat [apa itu data EXIF](what-is-exif-data).' },
      { q: 'Bisakah metadata menunjukkan lokasi foto diambil?', a: 'Bisa, jika gambar memiliki tag GPS. Ponsel biasanya mencatat lintang, bujur, dan ketinggian saat kamera diizinkan mengakses lokasi. [Penghapus EXIF](remove-exif-data) menghapus tag ini tanpa mengurangi kualitas gambar.' },
      { q: 'Bagaimana cara menghapus metadata AI dari gambar?', a: 'Letakkan gambar di kotak bagian atas halaman ini lalu tekan “Cuci semua gambar”, atau gunakan [pembersih tag AI](ai-tag-cleaner) untuk melihat data C2PA, IPTC, dan prompt terlebih dahulu.' },
      { q: 'Apakah aman mengunggah foto saya di sini?', a: 'Foto Anda sama sekali tidak diunggah. AI Label Remover membuka file di browser, memprosesnya di memori tab, dan menyimpan salinan bersih langsung ke perangkat Anda. Setelah halaman dimuat, Anda bisa offline dan alat tetap berjalan.' },
    ],
  },
  labels: {
    tools: 'Alat metadata lainnya',
    relatedTools: 'Alat khusus untuk keperluan ini',
    homeTitle: 'Alat sesuai kebutuhan',
    homeLead: 'Setiap halaman fokus pada satu tugas, dengan alat siap pakai di bagian atas.',
    formats: 'Yang dihapus dan yang dipertahankan',
    contact: 'Kontak',
    contactText: 'Ada pertanyaan, bug, atau file yang tidak tercuci dengan benar? Kirim email ke',
    updated: 'Diperbarui {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Hapus Tag AI dari Metadata Gambar',
      description: 'Bersihkan tag AI dari gambar: tag IPTC “dibuat AI”, C2PA, nama generator di XMP, dan prompt. Tanpa penurunan kualitas, gratis, di browser, tanpa unggah.',
      navLabel: 'Pembersih tag AI',
      h1: 'AI Tag Cleaner — hapus tag AI dari gambar',
      lead: 'Generator AI dan editor berfitur AI menandai file yang mereka sentuh: tipe sumber “dibuat AI”, catatan C2PA bertanda tangan, nama aplikasi, kadang prompt lengkapnya. Letakkan gambar di bawah untuk melihat semua tag AI di dalamnya, lalu bersihkan tanpa meng-encode ulang satu piksel pun.',
      sections: [
        {
          heading: 'Apa itu tag AI',
          paragraphs: [
            'Tag AI adalah kolom apa pun di dalam file yang menyatakan, atau mengisyaratkan, bahwa AI digunakan. Tag ini tersebar di beberapa standar metadata sekaligus, jadi menghapus satu kolom secara manual jarang cukup:',
          ],
          bullets: [
            'Nilai [DigitalSourceType](iptc-digitalsourcetype-ai) di IPTC dan XMP seperti trainedAlgorithmicMedia atau compositeWithTrainedAlgorithmicMedia.',
            'Aksi dalam [C2PA Content Credentials](what-is-c2pa-content-credentials) yang menandai langkah generatif, ditulis oleh ChatGPT, Firefly, Photoshop, dan lainnya.',
            'Kolom Software dan CreatorTool berisi nama generator, serta riwayat XMP dari editan AI.',
            'Prompt, seed, dan model di chunk PNG dari [Stable Diffusion dan ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'Cara kerja AI Tag Cleaner',
          paragraphs: [
            'AI Label Remover membaca struktur file langsung di browser Anda. Setiap tag AI ditampilkan bersama kolom asalnya, dan file mendapat kesimpulan — “Jejak AI ditemukan”, “Layak dicek lagi”, atau “Tidak ada jejak AI” — sebelum apa pun diubah.',
            'Menekan “Cuci semua gambar” memotong blok yang memuat tag tersebut: XMP, IPTC, EXIF, penyimpanan manifest C2PA, dan chunk teks PNG. Data gambar terkompresi disalin byte demi byte, dan salinan bersih dibaca ulang agar Anda bisa memastikan tidak ada tag AI yang tersisa.',
          ],
        },
        {
          heading: 'Alat mana meninggalkan tag apa',
          paragraphs: [
            'Gambar ChatGPT dan Gemini membawa catatan C2PA; Firefly dan Generative Fill Photoshop menambahkan C2PA dan DigitalSourceType; Midjourney menulis XMP deskriptif; antarmuka Stable Diffusion menyimpan seluruh pengaturan di PNG. [Metadata yang ditambahkan generator gambar AI](what-metadata-ai-image-generators-add) membahasnya satu per satu.',
          ],
        },
        {
          heading: 'Yang tidak bisa dilakukan pembersih tag AI',
          paragraphs: [
            'Pembersihan hanya menyentuh metadata. [Watermark tak terlihat seperti SynthID](synthid-invisible-ai-watermarks) ada di piksel dan tetap tertinggal, dan platform bisa memakai pengklasifikasi sendiri. Membersihkan tag ditujukan untuk privasi dan memperbaiki label yang salah pada foto asli — jika gambar dibuat AI dan tampak nyata, aturan platform umumnya tetap meminta Anda mengungkapkannya.',
          ],
        },
      ],
      faqHeading: 'Pertanyaan seputar pembersih tag AI',
      faq: [
        { q: 'Apakah tag AI sama dengan label AI?', a: 'Tidak persis. Tag adalah data di dalam file; label adalah yang ditampilkan platform, seperti “Info AI” di Instagram. Label sering dibuat dari tag. Untuk menghindarinya pada foto asli, lihat [No AI Tag](no-ai-tag).' },
        { q: 'Bisakah hanya menghapus tag AI dan menyimpan sisanya?', a: 'Pembersih menghapus blok metadata utuh, bukan kolom satu per satu, karena tag AI tersebar di beberapa blok. Orientasi, profil warna ICC, dan ukuran piksel selalu dipertahankan, jadi gambar tampil sama seperti sebelumnya.' },
        { q: 'Apakah menghapus tag AI menurunkan kualitas?', a: 'Tidak. Tidak ada yang di-encode ulang; hanya metadata yang dihapus. Lihat [mengapa penghapusan tanpa penurunan kualitas penting](remove-metadata-without-losing-quality).' },
        { q: 'Format apa saja yang didukung?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF, dan AVIF — hingga 50 file sekaligus, masing-masing hingga 25 MB. Prompt di file PNG juga bisa dihapus dengan [penghapus metadata PNG](png-metadata-remover).' },
        { q: 'Apakah ini menghapus metadata gambar ChatGPT atau Gemini?', a: 'Ini menghapus Content Credentials C2PA dan kolom IPTC yang ditulis layanan tersebut. Google juga menyematkan watermark SynthID di piksel, yang tidak bisa dihapus alat metadata mana pun. Detailnya di [metadata gambar ChatGPT dan Gemini](chatgpt-gemini-image-metadata).' },
        { q: 'Bisakah saya melihat prompt sebelum menghapusnya?', a: 'Bisa. Tab “Metadata mentah” menampilkan prompt, workflow, dan nama generator kata demi kata, sehingga Anda bisa menyalin apa pun yang ingin disimpan sebelum mencuci.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Unggah Foto Asli Tanpa Label “Info AI”',
      description: 'Foto asli Anda dapat label “Info AI”? Hapus data C2PA dan IPTC penyebabnya, lalu unggah tanpa tag AI. Tanpa penurunan kualitas, gratis, di browser.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag — foto asli tanpa tag AI',
      lead: 'Perbaikan kecil dengan fitur AI generatif di Photoshop atau aplikasi ponsel bisa cukup membuat Instagram, Facebook, atau Threads memasang “Info AI” pada foto asli. Letakkan file di bawah untuk melihat data mana yang memicu label, lalu bagikan salinan bersih tanpa tag AI di metadatanya.',
      sections: [
        {
          heading: 'Mengapa foto asli mendapat tag AI',
          paragraphs: [
            'Platform membaca data asal-usul yang ditempelkan editor ke file. [Mengapa foto asli mendapat label “Info AI”](made-with-ai-label) menjelaskan detailnya; pemicu yang umum adalah:',
          ],
          bullets: [
            'Manifest C2PA yang mencatat langkah generatif seperti Generative Fill, hapus objek dengan AI, atau perluas gambar dengan AI.',
            'Nilai [DigitalSourceType](iptc-digitalsourcetype-ai) di IPTC atau XMP yang menyatakan gambar digabung dengan AI.',
            'Content Credentials yang ditambahkan aplikasi edit secara bawaan saat ekspor.',
          ],
        },
        {
          heading: 'Cara mengunggah tanpa tag AI',
          paragraphs: ['Butuh kurang dari semenit dan tidak ada yang keluar dari perangkat Anda:'],
          bullets: [
            'Letakkan foto yang sudah diedit ke kotak di bagian atas halaman ini.',
            'Baca kesimpulan dan kolom di baliknya — laporan menyebut aksi C2PA atau nilai IPTC yang tepat.',
            'Tekan “Cuci semua gambar” dan simpan salinan bersih.',
            'Unggah salinan bersih, bukan file ekspor aslinya.',
          ],
        },
        {
          heading: 'Cegah tag dari sumbernya',
          paragraphs: [
            'Jika sering mengedit, [matikan Content Credentials di Photoshop dan Lightroom](turn-off-content-credentials-photoshop-lightroom) agar tidak ditulis sejak awal. [Platform mana yang melabeli gambar AI](which-platforms-label-ai-images) merangkum apa yang dibaca Meta, TikTok, YouTube, dan lainnya.',
          ],
        },
        {
          heading: 'Yang bisa dan tidak bisa dijanjikan “No AI Tag”',
          paragraphs: [
            'Menghapus metadata menghilangkan penyebab yang ada di file, yang merupakan penyebab pada sebagian besar foto yang diedit. Ini tidak menghapus [watermark di piksel seperti SynthID](synthid-invisible-ai-watermarks), dan platform tetap bisa memberi label dari deteksinya sendiri atau meminta Anda mengungkapkannya. Halaman ini untuk foto asli dengan editan ringan: jika gambar dibuat AI dan bisa menyesatkan, ungkapkan hal itu.',
          ],
        },
      ],
      faqHeading: 'Pertanyaan seputar No AI Tag',
      faq: [
        { q: 'Apakah ini menghapus “Info AI” dari postingan yang sudah terbit?', a: 'Tidak. Label melekat pada postingan di platform. Hapus atau arsipkan postingan, bersihkan file di sini, lalu unggah ulang salinan bersihnya.' },
        { q: 'Apakah dijamin tidak ada tag AI?', a: 'Tidak. Metadata yang dibaca platform dihapus, tetapi platform bisa memakai sinyal lain. Pada sebagian besar foto yang diedit, metadata adalah penyebab tag.' },
        { q: 'Apakah bisa untuk foto iPhone dan Android?', a: 'Bisa. HEIC dari iPhone dan JPG dari Android dibersihkan tanpa konversi. Ada juga [penghapus metadata HEIC](heic-metadata-remover) khusus.' },
        { q: 'Bagaimana dengan tag AI pada gambar yang sepenuhnya dibuat AI?', a: '[AI Tag Cleaner](ai-tag-cleaner) menampilkan dan menghapusnya, tetapi aturan platform umumnya tetap mewajibkan Anda melabeli sendiri gambar AI yang tampak nyata.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'Hapus Data EXIF Foto Online – Gratis dan Privat',
      description: 'Hapus data EXIF — GPS, kamera, nomor seri, tanggal — dari JPG, HEIC, PNG, dan WebP langsung di browser. Tanpa unggah, tanpa turun kualitas, hingga 50 file.',
      navLabel: 'Hapus EXIF',
      h1: 'Hapus data EXIF dari foto',
      lead: 'Letakkan foto Anda di bawah untuk melihat setiap kolom EXIF di dalamnya — posisi GPS, kamera dan lensa, nomor seri, waktu pemotretan — lalu hapus semuanya dengan sekali klik. Semua berjalan di perangkat Anda; file tidak pernah diunggah.',
      sections: [
        {
          heading: 'Apa yang dibocorkan data EXIF',
          paragraphs: [
            'EXIF adalah blok catatan teknis yang ditulis kamera atau ponsel ke setiap foto. Satu per satu kebanyakan tidak berbahaya, tetapi jika digabungkan bisa mengungkap banyak hal tentang Anda. [Panduan EXIF kami](what-is-exif-data) membahas setiap tag umum; inilah yang paling penting untuk privasi:',
          ],
          bullets: [
            'Lintang, bujur, dan ketinggian GPS — sering akurat hingga beberapa meter, cukup untuk menemukan rumah.',
            'Tanggal dan jam pemotretan, lengkap dengan zona waktu.',
            'Merek dan model kamera atau ponsel, lensa, dan pada banyak kamera nomor seri bodi yang menghubungkan foto-foto Anda.',
            'Nama pemilik atau pembuat, serta software terakhir yang mengedit file.',
            'Thumbnail tersemat, yang masih bisa menampilkan gambar asli meski foto sudah dipotong.',
          ],
        },
        {
          heading: 'Cara kerja penghapus EXIF ini',
          paragraphs: [
            'AI Label Remover membaca struktur file secara langsung. Pada JPEG, ia memotong segmen APP1 yang berisi EXIF dan XMP, ditambah IPTC, komentar, dan thumbnail tersemat; pada HEIC, PNG, dan WebP, ia menghapus box atau chunk yang setara. Data gambar terkompresi disalin byte demi byte, jadi tidak ada encode ulang dan foto terlihat sama persis.',
            'Kolom yang mengatur tampilan foto sengaja dipertahankan: rotasi, profil warna ICC, dan ukuran piksel. Dengan begitu foto tidak jadi miring atau warnanya pudar seperti hasil alat yang lebih kasar. Setelah selesai, file yang sudah dicuci dibaca ulang agar Anda bisa melihat kolom EXIF benar-benar hilang.',
          ],
        },
        {
          heading: 'Kapan menghapus EXIF sebelum berbagi',
          paragraphs: [
            'Banyak media sosial besar menghapus EXIF saat unggah, tetapi banyak tempat lain tidak: lampiran email, tautan penyimpanan cloud, forum, situs jual beli, aplikasi chat yang mengirim file “kualitas asli”, dan situs web Anda sendiri. [Platform mana yang menghapus metadata](which-platforms-strip-photo-metadata) mencantumkan yang umum. Jika tidak yakin ke mana foto akan berakhir, mencucinya lebih dulu adalah pilihan aman.',
            'Menjual barang online, mengunggah foto yang diambil di rumah, atau mengirim gambar ke orang yang baru dikenal adalah contoh klasik di mana [data GPS bisa mengungkap lokasi](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Privat sejak rancangan',
          paragraphs: [
            'Penghapus EXIF online biasanya mengunggah foto Anda ke server, memprosesnya di sana, lalu mengirimkannya kembali. AI Label Remover mengerjakan semuanya di Web Worker di dalam tab browser: setelah halaman dimuat, Anda bahkan bisa memutus koneksi dan alat tetap berjalan. Tanpa akun, tanpa watermark, dan tanpa batas selain 25 MB dan 40 megapiksel per file.',
          ],
        },
      ],
      faqHeading: 'Pertanyaan tentang menghapus EXIF',
      faq: [
        { q: 'Apakah menghapus EXIF menurunkan kualitas gambar?', a: 'Tidak. Hanya blok metadata yang dipotong; data gambar terkompresi disalin tanpa perubahan, sehingga resolusi, ketajaman, dan warna tetap sama persis. Lihat [mengapa menyimpan ulang menurunkan kualitas](remove-metadata-without-losing-quality).' },
        { q: 'Apakah foto tetap pada orientasi yang benar?', a: 'Ya. Nilai orientasi dipertahankan agar gambar tampil seperti sebelumnya, begitu juga profil warna ICC.' },
        { q: 'Bisakah menghapus EXIF dari foto HEIC iPhone?', a: 'Bisa. File HEIC dan HEIF didukung langsung tanpa harus dikonversi ke JPEG. Ada juga halaman khusus untuk [menghapus metadata HEIC](heic-metadata-remover).' },
        { q: 'Bagaimana memastikan EXIF sudah hilang?', a: 'Setelah dicuci, AI Label Remover membaca ulang file baru dan menampilkan kolom yang tersisa. Anda juga bisa membukanya di [penampil metadata online](image-metadata-viewer-online) mana pun atau di properti file sistem operasi.' },
        { q: 'Bisakah dilakukan tanpa situs web sama sekali?', a: 'Bisa — Windows, macOS, dan ponsel punya opsi bawaan, masing-masing dengan keterbatasan. [Menghapus metadata di Windows dan Mac](remove-metadata-windows-mac) serta [di iPhone dan Android](view-remove-metadata-iphone-android) membandingkannya.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Hapus Content Credentials C2PA dari Gambar, Gratis',
      description: 'Periksa dan hapus Content Credentials C2PA (manifes JUMBF) dari JPG, PNG, HEIC, WebP, dan AVIF tanpa menurunkan kualitas dan tanpa mengunggah file ke mana pun.',
      navLabel: 'Hapus C2PA',
      h1: 'Hapus Content Credentials C2PA',
      lead: 'Content Credentials adalah riwayat bertanda tangan yang melekat pada gambar: aplikasi apa yang membuatnya, edit apa yang menyusul, dan apakah AI generatif terlibat. Letakkan file di bawah untuk membaca manifes C2PA-nya, lalu hapus seluruh penyimpanan manifes tanpa penurunan kualitas.',
      sections: [
        {
          heading: 'Isi manifes C2PA',
          paragraphs: [
            'C2PA (Coalition for Content Provenance and Authenticity) menetapkan cara menyematkan catatan bertanda tangan kriptografis ke dalam file. [Penjelasan C2PA](what-is-c2pa-content-credentials) membahasnya lebih dalam; dalam praktiknya manifes biasanya berisi:',
          ],
          bullets: [
            'Claim generator — aplikasi atau layanan yang menandatangani, seperti Photoshop, Firefly, ChatGPT, atau kamera.',
            'Daftar tindakan: dibuat, dibuka, diedit, dipotong, dan penanda untuk langkah AI generatif.',
            'Bahan (ingredients) — versi sebelumnya atau gambar sumber yang dipakai untuk membuat file.',
            'Jenis sumber digital yang menyatakan apakah konten dipotret, digabung, atau dibuat AI.',
            'Tanda tangan dan sertifikat yang mengikat catatan ke data gambar yang persis.',
          ],
        },
        {
          heading: 'Lokasi C2PA di tiap jenis file',
          paragraphs: [
            'Di JPEG, penyimpanan manifes berada di segmen APP11 sebagai box JUMBF; di PNG berupa chunk caBX; di HEIC dan AVIF berupa box uuid; di WebP berupa chunk RIFF tersendiri. AI Label Remover menemukan masing-masing, menampilkan klaim di dalamnya, dan menghapus seluruh penyimpanan sambil menyalin data gambar tanpa perubahan.',
            'Karena tanda tangan mengikat manifes ke byte yang persis, menyimpan ulang di aplikasi lain biasanya tetap merusak atau membuangnya. Menghapusnya dengan rapi mencegah tertinggalnya catatan rusak yang setengah valid.',
          ],
        },
        {
          heading: 'Alasan menyimpan, alasan menghapus',
          paragraphs: [
            'Content Credentials bisa berharga: membantu media dan kreator membuktikan asal gambar. Jika itu tujuan Anda, simpanlah — dan bagaimanapun juga simpan file aslinya, karena metadata yang dihapus tidak bisa dipulihkan.',
            'Menghapusnya masuk akal jika catatan itu mengungkap lebih dari yang Anda inginkan (nama, riwayat edit, gambar sumber), atau jika editor menambahkan penanda AI ke foto asli setelah perbaikan kecil. Anda juga bisa [mematikan Content Credentials di Photoshop dan Lightroom](turn-off-content-credentials-photoshop-lightroom) agar tidak ditulis sejak awal.',
          ],
        },
      ],
      faqHeading: 'Pertanyaan tentang C2PA',
      faq: [
        { q: 'Apakah AI Label Remover memverifikasi tanda tangan C2PA?', a: 'Tidak. AI Label Remover membaca dan menampilkan isi manifes tetapi tidak memvalidasi rantai sertifikat. Gunakan alat verifikasi Content Credentials resmi jika Anda perlu memvalidasi tanda tangan.' },
        { q: 'Apakah menghapus Content Credentials legal?', a: 'Menghapus metadata dari file milik Anda atau yang boleh Anda ubah umumnya tidak masalah, tetapi jangan gunakan untuk memalsukan siapa pembuat gambar atau bagaimana gambar dibuat. Ini informasi umum, bukan nasihat hukum.' },
        { q: 'Mengapa foto saya menampilkan “Layak dicek lagi”?', a: 'File memiliki manifes C2PA yang tidak menyebut AI secara eksplisit. Beberapa platform membaca manifes apa pun sebagai petunjuk, jadi periksa tindakan yang tercantum sebelum memutuskan.' },
        { q: 'Apakah platform tetap tahu gambar telah diedit?', a: 'Tidak dari manifes yang sudah dihapus. Platform masih bisa memakai sinyal lain, dan [watermark tak terlihat](synthid-invisible-ai-watermarks) tidak terpengaruh oleh penghapusan metadata.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'Hapus Metadata HEIC – EXIF & GPS Foto iPhone',
      description: 'Hapus EXIF, lokasi GPS, dan stempel waktu dari foto HEIC dan HEIF iPhone tanpa konversi ke JPEG. Tanpa turun kualitas, di browser, tanpa unggah.',
      navLabel: 'Hapus metadata HEIC',
      h1: 'Hapus metadata HEIC dari foto iPhone',
      lead: 'iPhone menyimpan foto sebagai HEIC, dan setiap foto mencatat di mana dan kapan diambil. Letakkan file HEIC atau HEIF di bawah untuk melihat metadatanya lalu menghapusnya — foto tetap HEIC, tanpa konversi dan tanpa penurunan kualitas.',
      sections: [
        {
          heading: 'Apa yang dicatat foto HEIC iPhone',
          paragraphs: ['Foto iPhone biasa membawa lebih banyak dari yang diduga kebanyakan orang:'],
          bullets: [
            'Koordinat GPS yang tepat, ketinggian, dan arah kamera menghadap.',
            'Tanggal, jam, dan zona waktu pemotretan, serta tanggal perubahan.',
            'Model perangkat, lensa, pengaturan kamera, dan versi iOS.',
            'Data khusus Apple seperti pengenal pasangan Live Photo.',
            'Data XMP dari aplikasi edit, kadang termasuk catatan C2PA.',
          ],
        },
        {
          heading: 'Hapus metadata tanpa konversi ke JPEG',
          paragraphs: [
            'Saran yang umum adalah mengonversi HEIC ke JPEG dan berharap metadatanya tidak ikut. Cara itu meng-encode ulang gambar, menurunkan kualitas, dan sering membuang profil warna gamut lebar. AI Label Remover justru mengedit wadah HEIC itu sendiri: menghapus item Exif dan XMP, box uuid C2PA, dan box stempel waktu, sambil mempertahankan data gambar HEVC, rotasi (irot/imir), dan profil warna (colr).',
            'Mesin yang sama juga menangani AVIF, yang memakai format wadah ISOBMFF yang sama, sehingga ekspor AVIF dari aplikasi modern bisa dicuci dengan cara yang sama.',
          ],
        },
        {
          heading: 'Pengaturan iPhone vs mencuci file',
          paragraphs: [
            'iOS memungkinkan mematikan lokasi untuk satu kali berbagi lewat tombol “Pilihan” di lembar berbagi, dan app Foto bisa mengubah atau menghapus lokasi per foto. Cara ini bagus untuk berbagi sesekali, tetapi mudah terlupa dan tidak menghapus kolom lain. [Melihat dan menghapus metadata di iPhone dan Android](view-remove-metadata-iphone-android) membandingkan opsi bawaan.',
            'Untuk banyak foto sekaligus — folder foto liburan, foto produk, atau gambar untuk iklan jual — meletakkannya di AI Label Remover lalu menyimpan satu ZIP lebih cepat, dan laporan sebelum-sesudah menunjukkan persis apa yang dihapus.',
          ],
        },
      ],
      faqHeading: 'Pertanyaan tentang HEIC',
      faq: [
        { q: 'Apakah bisa dipakai di Windows, yang kadang tidak bisa membuka HEIC?', a: 'Bisa. AI Label Remover membaca struktur HEIC sendiri, jadi tidak perlu codec HEIC terpasang. File HEIC menampilkan label format sebagai pengganti thumbnail, tetapi pembacaan dan pencucian berjalan normal.' },
        { q: 'Apakah file yang sudah dicuci tetap bisa dibuka di app Foto?', a: 'Ya. Hasilnya adalah file HEIC standar dengan data gambar yang sama; hanya item metadata yang dihapus.' },
        { q: 'Apakah Live Photo didukung?', a: 'AI Label Remover memproses gambar diam HEIC. Video pasangan Live Photo adalah file terpisah dan tidak diubah.' },
        { q: 'Apakah ada batas ukuran file?', a: 'Setiap file maksimal 25 MB dan 40 megapiksel, cukup untuk foto dari semua iPhone saat ini, dan Anda bisa mencuci 50 file sekaligus.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'Hapus Metadata PNG – Hapus Prompt dan Chunk Teks',
      description: 'Hapus metadata PNG — chunk tEXt, iTXt, dan zTXt berisi prompt Stable Diffusion atau ComfyUI, XMP, eXIf, dan C2PA — dengan gambar tetap lossless.',
      navLabel: 'Hapus metadata PNG',
      h1: 'Hapus metadata PNG',
      lead: 'File PNG menyembunyikan metadata di chunk teks: prompt dan workflow AI, nama pembuat, software, dan stempel waktu. Letakkan PNG di bawah untuk membaca setiap chunk, lalu hapus sementara data gambar tetap identik bit demi bit.',
      sections: [
        {
          heading: 'Tempat PNG menyimpan metadata',
          paragraphs: ['PNG adalah rangkaian chunk. Gambarnya ada di IHDR, PLTE, dan IDAT; sisanya opsional. Chunk yang dihapus AI Label Remover adalah:'],
          bullets: [
            'tEXt, zTXt, dan iTXt — teks bebas, teks terkompresi, dan teks internasional. Stable Diffusion WebUI menulis chunk “parameters” di sini; ComfyUI menulis JSON “prompt” dan “workflow”.',
            'Paket XMP yang disimpan di iTXt, termasuk pernyataan IPTC dan sumber AI.',
            'eXIf — data EXIF, termasuk GPS jika aplikasi menyalinnya dari foto.',
            'caBX — Content Credentials C2PA.',
            'tIME (waktu perubahan terakhir) dan dSIG (tanda tangan digital).',
          ],
        },
        {
          heading: 'Yang dipertahankan agar gambar terlihat sama',
          paragraphs: [
            'Transparansi (tRNS), gamma dan kromatisitas (gAMA, cHRM), penanda sRGB, dan profil ICC tersemat (iCCP) memengaruhi tampilan gambar, jadi dipertahankan. PNG animasi tetap menyimpan chunk acTL, fcTL, dan fdAT, sehingga animasi APNG tetap berjalan.',
            'Karena data IDAT disalin, bukan dikompresi ulang, file yang sudah dicuci identik piksel demi piksel dengan aslinya — biasanya sedikit lebih kecil karena chunk teksnya hilang.',
          ],
        },
        {
          heading: 'Melindungi prompt dan workflow AI',
          paragraphs: [
            'Jika Anda membagikan gambar buatan Stable Diffusion, Forge, atau ComfyUI, siapa pun bisa menyeret PNG itu kembali ke alat yang sama dan memulihkan prompt, seed, model, dan graf node Anda secara persis. [Cara Stable Diffusion dan ComfyUI menyembunyikan prompt di PNG](remove-stable-diffusion-comfyui-metadata) menunjukkan apa saja yang tersimpan. Pencucian menghapus semuanya, dan tab “Metadata mentah” memungkinkan Anda menyalin prompt lebih dulu jika ingin menyimpannya sendiri.',
          ],
        },
      ],
      faqHeading: 'Pertanyaan tentang metadata PNG',
      faq: [
        { q: 'Apakah menghapus metadata PNG mengubah warna?', a: 'Tidak. Chunk terkait warna — sRGB, gAMA, cHRM, dan iCCP — dipertahankan, dan data gambar IDAT disalin tanpa perubahan.' },
        { q: 'Apakah bisa untuk PNG transparan?', a: 'Bisa. Data transparansi (tRNS atau kanal alfa di dalam IDAT) adalah bagian dari gambar dan tidak pernah disentuh.' },
        { q: 'Bisakah saya menyimpan prompt di suatu tempat?', a: 'Salin dari tab “Metadata mentah” sebelum mencuci. Setelah dihapus, metadata tidak bisa dipulihkan dari file yang sudah dicuci.' },
        { q: 'Apakah juga bisa untuk PNG dari Midjourney atau DALL·E?', a: 'Bisa. Data teks, XMP, atau C2PA yang disematkan layanan tersebut dihapus dengan cara yang sama. Lihat [menyembunyikan prompt Midjourney dan DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'Tentang AI Label Remover – Cara Kerja Pembersih Metadata',
      description: 'Siapa pembuat AI Label Remover, cara kerja pembersih metadata di browser, cara artikel kami diriset dan diperbarui, dan apa yang tak pernah dilakukan alat ini.',
      navLabel: 'Tentang',
      title: 'Tentang AI Label Remover',
      lead: 'AI Label Remover adalah alat gratis untuk membaca dan menghapus metadata tersembunyi dari gambar — EXIF, GPS, XMP, IPTC, Content Credentials C2PA, dan prompt AI — dibuat agar file Anda tidak pernah perlu meninggalkan perangkat.',
      sections: [
        {
          heading: 'Mengapa AI Label Remover ada',
          paragraphs: [
            'Foto dan gambar AI membawa jauh lebih banyak informasi daripada yang disadari kebanyakan orang: lokasi rumah di tag GPS, nomor seri perangkat, prompt dan workflow lengkap, serta catatan asal-usul yang dibaca platform untuk memberi label. Kebanyakan pembersih online justru meminta Anda mengunggah file yang ingin Anda lindungi. AI Label Remover dibuat untuk melakukan pekerjaan yang sama tanpa kompromi itu.',
          ],
        },
        {
          heading: 'Cara kerja alat ini',
          paragraphs: [
            'Saat Anda menambahkan gambar, browser membacanya secara lokal. Web Worker mengurai struktur file — segmen JPEG, chunk PNG, chunk RIFF WebP, blok GIF, dan box HEIC/AVIF — lalu mendaftar setiap blok metadata yang ditemukan. Pencucian menghapus blok-blok itu dari aliran byte, menyalin data gambar terkompresi tanpa perubahan, lalu membaca ulang hasilnya untuk memastikan apa yang tersisa.',
            'Tidak ada pemrosesan di sisi server. Situs ini adalah kumpulan halaman statis; setelah dimuat, alat tetap berfungsi tanpa koneksi.',
          ],
        },
        {
          heading: 'Cara kami menulis artikel',
          paragraphs: [
            'Panduan di situs ini berdasarkan spesifikasi yang dipublikasikan (EXIF, XMP, IPTC Photo Metadata, C2PA, format PNG dan ISOBMFF), halaman bantuan platform, dan pengujian file nyata dari alat yang kami bahas. Setiap artikel menampilkan tanggal revisi terakhir, dan kami memperbaruinya ketika standar atau kebijakan berubah.',
            'Artikel adalah informasi umum, bukan nasihat hukum. Aturan label AI di platform sering berubah; periksa halaman bantuan platform terkait sebelum mengandalkan pernyataan apa pun tentangnya.',
          ],
        },
        {
          heading: 'Yang tidak akan dilakukan AI Label Remover',
          paragraphs: [],
          bullets: [
            'Mengunggah, menyimpan, atau mencatat file Anda — tidak ada server yang bisa menerimanya.',
            'Mengubah piksel, menghapus watermark tak terlihat atau logo yang tampak.',
            'Menjanjikan bahwa platform akan atau tidak akan memberi label.',
            'Membantu menyamarkan gambar AI sebagai foto asli. Gunakan untuk melindungi privasi dan memperbaiki kesalahan.',
          ],
        },
        {
          heading: 'Independensi',
          paragraphs: [
            'AI Label Remover independen dan tidak berafiliasi dengan Meta, Google, OpenAI, Adobe, Midjourney, Apple, atau C2PA. Nama produk hanya dipakai untuk menjelaskan kompatibilitas.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Kebijakan Privasi – AI Label Remover',
      description: 'Kebijakan privasi yang mudah dipahami: gambar tak pernah keluar dari perangkat, tanpa akun, analitik, atau iklan; hanya bahasa dan tema yang disimpan.',
      navLabel: 'Privasi',
      title: 'Kebijakan privasi',
      lead: 'AI Label Remover adalah alat untuk melindungi privasi Anda, jadi memakainya tidak boleh mengorbankan privasi sedikit pun. Halaman ini menjelaskan dengan bahasa sederhana apa yang terjadi pada gambar Anda dan sedikit informasi yang ditangani situs ini.',
      sections: [
        {
          heading: 'Ringkasnya',
          paragraphs: [],
          bullets: [
            'Gambar Anda diproses di perangkat Anda sendiri dan tidak pernah diunggah.',
            'Tidak ada akun, pendaftaran, atau milis — kami tidak tahu siapa Anda.',
            'Tidak ada analitik, iklan, piksel pelacak, atau skrip pihak ketiga.',
            'Yang disimpan hanya bahasa dan tema terang/gelap pilihan Anda, di browser Anda sendiri, dan bisa Anda hapus kapan saja.',
          ],
        },
        {
          heading: 'Apa yang terjadi pada gambar Anda',
          paragraphs: ['Saat Anda menambahkan gambar ke AI Label Remover, inilah seluruh perjalanannya:'],
          bullets: [
            'Browser membuka file dari perangkat Anda dan menyimpannya di memori tab.',
            'Web Worker di dalam tab membaca metadata dan, saat Anda menekan cuci, membuat salinan bersih — tetap hanya di memori.',
            'Saat Anda menyimpan, browser menulis file bersih atau ZIP langsung ke perangkat Anda.',
            'Saat Anda menutup atau memuat ulang tab, gambar dan laporan hilang. Tidak ada yang tersimpan di server, karena tidak ada server yang pernah menerimanya.',
          ],
        },
        {
          heading: 'Anda bisa memeriksanya sendiri',
          paragraphs: [
            'Anda tidak perlu sekadar percaya pada kami. Buka halaman, matikan Wi-Fi atau data seluler, lalu cuci sebuah file: alat tetap berjalan, karena tidak ada yang perlu dikirim. Jika terbiasa dengan alat developer, buka tab Network saat mencuci dan Anda akan melihat tidak ada data gambar yang keluar dari perangkat.',
          ],
        },
        {
          heading: 'Yang tidak kami kumpulkan',
          paragraphs: ['AI Label Remover tidak mengumpulkan atau menyimpan:'],
          bullets: [
            'gambar Anda, metadatanya, atau laporan yang tampil di layar;',
            'nama, alamat email, atau data akun apa pun;',
            'lokasi Anda — GPS yang ditemukan di foto hanya tampil untuk Anda, di layar Anda;',
            'riwayat file yang Anda periksa atau cara Anda memakai alat ini.',
          ],
        },
        {
          heading: 'Yang disimpan di browser dan cara menghapusnya',
          paragraphs: ['Agar mengingat pilihan Anda, situs menyimpan dua preferensi kecil di perangkat Anda:'],
          bullets: [
            'Bahasa: entri “lang” di local storage dan cookie “lang” milik situs sendiri, berlaku satu tahun, agar halaman utama terbuka dalam bahasa pilihan Anda. Isinya hanya kode bahasa seperti “id”.',
            'Tema: entri “theme” di local storage jika Anda memilih mode terang atau gelap.',
            'Untuk menghapusnya, bersihkan cookie dan data situs ini di pengaturan browser. AI Label Remover tetap berfungsi; hanya lupa pilihan Anda.',
          ],
        },
        {
          heading: 'Saat Anda mengunjungi situs',
          paragraphs: [
            'Seperti situs web lainnya, setiap kali Anda membuka halaman, server kami membutuhkan beberapa informasi teknis dasar untuk mengirimkannya: alamat jaringan perangkat Anda (alamat IP), jenis browser yang Anda pakai, dan halaman yang Anda buka. Informasi ini bisa dicatat sementara agar situs tetap berjalan lancar dan untuk menangkal akses yang merusak, dan hanya disimpan selama diperlukan untuk itu. Kami tidak memakainya untuk mengenali Anda, tidak membuat profil tentang Anda, dan tidak pernah membagikan atau menjualnya.',
            'Saat Anda membuka halaman utama, server melihat bahasa yang diatur di browser, bahasa yang Anda pilih sebelumnya, dan negara asal akses Anda, hanya untuk langsung membuka versi bahasa yang sesuai. Ini terjadi seketika dan tidak disimpan.',
          ],
        },
        {
          heading: 'Anak-anak',
          paragraphs: [
            'AI Label Remover tidak meminta atau mengumpulkan informasi pribadi dari siapa pun, termasuk anak-anak. Pengguna yang lebih muda bisa memakai alat ini tanpa membuat akun atau memberikan data apa pun tentang dirinya.',
          ],
        },
        {
          heading: 'Hak Anda',
          paragraphs: [
            'Karena AI Label Remover tidak mengumpulkan nama, email, atau akun apa pun, kami tidak memiliki profil tentang Anda untuk diberikan, diperbaiki, atau dihapus. Apa yang diingat situs di perangkat Anda selalu berada dalam kendali Anda. Informasi teknis yang dicatat sementara saat Anda berkunjung tidak terkait dengan nama atau akun mana pun dan akan dihapus begitu tidak lagi diperlukan untuk menjalankan situs.',
          ],
        },
        {
          heading: 'Perubahan kebijakan ini',
          paragraphs: ['Jika cara AI Label Remover menangani data berubah, kami akan memperbarui halaman ini dan tanggal di bagian atas.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default id;
