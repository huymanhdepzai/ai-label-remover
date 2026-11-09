import type { Articles } from './types';

/** Artikel lanjutan berbahasa Indonesia (artikel dasar memakai ringkasan di seo.guides.items). */
const id: Articles = {
  'best-ai-metadata-removers-2026': {
      "title": "Alat Pembersih Metadata & Label AI Terbaik di Tahun 2026",
      "metaTitle": "Pembersih Metadata & Label AI Terbaik 2026 (Lossless)",
      "summary": [
          "Dengan maraknya label AI, manifes C2PA, dan penanda IPTC di media sosial pada tahun 2026, memilih alat pembersih metadata yang tepat menjadi sangat penting.",
          "Kami membandingkan alat offline seperti ExifTool dan editor desktop dengan solusi browser modern agar foto Anda tetap privat dan bebas dari label otomatis."
      ],
      "description": "Perbandingan alat pembersih metadata AI terbaik tahun 2026. Cara AI Label Remover dan AI Tag Cleaner menghasilkan status No AI Tag tanpa penurunan kualitas.",
      "related": [
          "how-to-get-no-ai-tag",
          "made-with-ai-label",
          "what-is-c2pa-content-credentials"
      ],
      "sections": [
          {
              "heading": "Mengapa pembersih metadata lama gagal mengatasi label AI tahun 2026",
              "paragraphs": [
                  "Dahulu, menghapus metadata hanya sebatas menghapus data kamera dan lokasi GPS. Di tahun 2026, foto membawa struktur data yang jauh lebih rumit: [manifes C2PA Content Credentials](what-is-c2pa-content-credentials), [kolom IPTC DigitalSourceType](iptc-digitalsourcetype-ai), serta prompt pembuatan gambar dari AI.",
                  "Alat foto lama sering kali melewatkan blok C2PA atau mengompres ulang gambar sehingga merusak ketajaman piksel. Saat media sosial mendeteksi metadata tersebut, unggahan Anda otomatis diberi label “Info AI”."
              ]
          },
          {
              "heading": "AI Label Remover: AI Tag Cleaner berbasis browser terkemuka",
              "paragraphs": [
                  "AI Label Remover dirancang khusus untuk ekosistem metadata modern. Beroperasi sebagai [AI tag cleaner](ai-tag-cleaner) andal, alat ini memotong kontainer C2PA JUMBF, tag IPTC, dan koordinat GPS langsung di peramban Anda.",
                  "Karena pemrosesan berjalan secara lokal menggunakan Web Workers pada perangkat Anda, foto tidak pernah diunggah ke server. Data biner disalin tanpa pengodean ulang, menjamin [penghapusan metadata tanpa menurunkan kualitas](remove-metadata-without-losing-quality)."
              ],
              "bullets": [
                  "Tanpa unggah ke server: Privasi penuh untuk foto pribadi maupun keperluan komersial.",
                  "Pemotongan byte lossless: Resolusi, profil warna ICC, dan ketajaman piksel tetap utuh.",
                  "Penghapusan jejak AI menyeluruh: Menghilangkan C2PA dan IPTC pemicu [label AI yang keliru](made-with-ai-label).",
                  "Dukungan batch multi-format: Menangani hingga 50 file JPEG, PNG, WebP, GIF, HEIC, dan AVIF."
              ]
          },
          {
              "heading": "Perbandingan: AI Label Remover vs ExifTool vs Editor Desktop",
              "paragraphs": [
                  "ExifTool adalah utilitas command-line yang sangat mumpuni namun rumit untuk penggunaan cepat sehari-hari.",
                  "Editor desktop mengompres ulang piksel saat menyimpan file baru. Selain itu, aplikasi seperti Adobe kerap menyematkan kembali Content Credentials jika tidak [dinonaktifkan secara manual](turn-off-content-credentials-photoshop-lightroom).",
                  "AI Label Remover menggabungkan kepraktisan alat web dengan keamanan alat offline."
              ]
          },
          {
              "heading": "Mendapatkan status “No AI Tag” di media sosial",
              "paragraphs": [
                  "Agar foto asli Anda tidak terkena peringatan keliru di Instagram atau Facebook, memiliki status [No AI Tag](no-ai-tag) sangatlah penting.",
                  "Membersihkan foto menggunakan [AI tag cleaner](ai-tag-cleaner) sebelum diunggah akan menghapus pemicu otomatis tersebut."
              ]
          },
          {
              "heading": "Pertimbangan etika dan tanggung jawab",
              "paragraphs": [
                  "AI Label Remover dirancang untuk menjaga privasi dan memperbaiki kesalahan label akibat editan ringan. Namun, gambar yang sepenuhnya dibuat oleh AI tetap harus diungkapkan secara jujur sesuai aturan platform."
              ]
          }
      ],
      "faqHeading": "Pertanyaan umum seputar alat metadata tahun 2026",
      "faq": [
          {
              "q": "Apa bedanya AI Label Remover dengan pembersih EXIF biasa?",
              "a": "Pembersih lama hanya membaca tag EXIF kamera. AI Label Remover adalah [AI tag cleaner](ai-tag-cleaner) yang mampu memotong blok C2PA dan IPTC tanpa mengompres ulang gambar."
          },
          {
              "q": "Apakah membersihkan metadata menjamin No AI Tag di Instagram?",
              "a": "Langkah ini menghapus seluruh pemicu di dalam file (C2PA/IPTC), memberikan dasar [No AI Tag](no-ai-tag) yang bersih dari tanda otomatis."
          },
          {
              "q": "Apakah aman untuk foto bisnis yang sensitif?",
              "a": "Sangat aman. AI Label Remover bekerja 100% di browser Anda; tidak ada data yang dikirim ke internet."
          },
          {
              "q": "Bisakah alat ini menghapus watermark SynthID?",
              "a": "Tidak. Watermark seperti SynthID tertanam di dalam piksel dan tidak dapat dihapus oleh alat metadata apa pun."
          }
      ]
  },

  'how-to-get-no-ai-tag': {
      "title": "Cara Mendapatkan Status “No AI Tag” pada Foto: Panduan Lengkap AI Tag Cleaner",
      "metaTitle": "Cara Mendapatkan No AI Tag: Panduan AI Tag Cleaner",
      "summary": [
          "Banyak fotografer mendapati foto asli mereka keliru diberi label “Info AI” atau “Made with AI” saat diunggah ke media sosial.",
          "Panduan ini menjelaskan mengapa algoritma platform memberi label tersebut, dan cara menggunakan AI Tag Cleaner untuk mendapatkan status “No AI Tag” tanpa mengorbankan kualitas gambar."
      ],
      "description": "Cara memastikan foto asli berstatus No AI Tag di Instagram dan Facebook. Gunakan AI Tag Cleaner dan AI Label Remover untuk menghapus label AI keliru.",
      "related": [
          "best-ai-metadata-removers-2026",
          "made-with-ai-label",
          "iptc-digitalsourcetype-ai"
      ],
      "sections": [
          {
              "heading": "Mengapa foto asli Anda mendapatkan label AI yang tidak diinginkan",
              "paragraphs": [
                  "Media sosial seperti Instagram, Facebook, dan TikTok memindai unggahan secara otomatis. Jika sistem menemukan [kolom IPTC DigitalSourceType](iptc-digitalsourcetype-ai) atau [manifes C2PA Content Credentials](what-is-c2pa-content-credentials), lencana AI langsung disematkan.",
                  "Penyebab utamanya adalah false positive: menggunakan fitur seperti Generative Fill Photoshop atau penghapus objek di ponsel menuliskan data AI ke dalam file. Meskipun 99% foto adalah pemandangan nyata, seluruh foto dianggap buatan AI."
              ]
          },
          {
              "heading": "Solusi No AI Tag: Memeriksa dan membersihkan metadata",
              "paragraphs": [
                  "Untuk memastikan status [No AI Tag](no-ai-tag), Anda perlu menghapus blok metadata pemicu tersebut. Di AI Label Remover, cukup masukkan foto Anda untuk melihat analisis lengkapnya.",
                  "[Pemeriksa metadata](image-metadata-viewer-online) akan mengurai lokasi, kamera, dan jejak AI. Dengan menekan tombol “Hapus semua metadata”, blok tersebut langsung dipotong dari file."
              ]
          },
          {
              "heading": "Mengapa AI Tag Cleaner jauh lebih baik daripada screenshot",
              "paragraphs": [
                  "Mengambil screenshot untuk membuang metadata [dapat merusak resolusi dan rentang dinamis foto](remove-metadata-without-losing-quality).",
                  "[AI tag cleaner](ai-tag-cleaner) mempertahankan data biner asli sehingga ketajaman dan profil warna ICC tetap terjaga sempurna."
              ]
          },
          {
              "heading": "Pola deteksi platform di tahun 2026",
              "paragraphs": [
                  "Meta sangat mengandalkan metadata C2PA dan IPTC untuk menyematkan label “Info AI”. TikTok dan YouTube juga memindai asal-usul konten digital.",
                  "Membersihkan foto dengan [AI Label Remover](ai-tag-cleaner) memastikan karya asli Anda tampil sebagaimana mestinya di semua platform."
              ]
          },
          {
              "heading": "Etika dan tanggung jawab kreator",
              "paragraphs": [
                  "Mendapatkan status No AI Tag adalah hak Anda untuk memperbaiki salah label pada foto asli. Namun, jika gambar dibuat sepenuhnya oleh AI, patuhilah pedoman platform dengan mencantumkannya secara jujur."
              ]
          }
      ],
      "faqHeading": "Pertanyaan umum seputar No AI Tag dan AI Tag Cleaner",
      "faq": [
          {
              "q": "Apa arti “No AI Tag” untuk sebuah foto?",
              "a": "Artinya file tersebut bersih dari manifes C2PA atau tag IPTC yang memicu label otomatis di media sosial."
          },
          {
              "q": "Bagaimana cara memeriksa tag AI sebelum mengunggah?",
              "a": "Buka gambar di AI Label Remover. Tab inspeksi akan menunjukkan apakah ada manifes C2PA atau keterangan AI."
          },
          {
              "q": "Apakah AI Tag Cleaner menurunkan resolusi foto?",
              "a": "Sama sekali tidak. AI Label Remover memotong blok metadata langsung dari aliran byte tanpa mengompres ulang gambar."
          },
          {
              "q": "Mengapa Lightroom menambahkan tag AI pada ekspor saya?",
              "a": "Versi terbaru Lightroom dan Photoshop otomatis menambahkan Content Credentials saat Anda menggunakan kuas penghapus berbasis AI."
          }
      ]
  },

  'made-with-ai-label': {
    metaTitle: 'Kenapa foto asli dapat label AI di Instagram',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Foto asli yang diberi label AI “Info AI” di Instagram atau Facebook biasanya membawa kolom C2PA atau IPTC yang ditulis aplikasi edit. Temukan kolom itu dan hapus tanpa penurunan kualitas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Label membaca file Anda, bukan foto Anda',
        paragraphs: [
          'Label AI dari Meta, “Info AI” (sebelumnya “Dibuat dengan AI”), diberikan saat unggahan berisi sinyal AI generatif yang dikenali. Dua sinyal itu ada di dalam file gambar itu sendiri: [manifes Content Credentials C2PA](what-is-c2pa-content-credentials) dan [properti IPTC DigitalSourceType](iptc-digitalsourcetype-ai) yang disimpan di XMP.',
          'Nilai trainedAlgorithmicMedia menyatakan seluruh gambar dibuat AI; compositeWithTrainedAlgorithmicMedia menyatakan foto asli memiliki bagian buatan AI. Keduanya bisa dibaca otomatis saat diunggah. Meta juga memakai sinyal lain dan meminta orang mengungkapkan konten AI yang realistis, jadi metadata file hanyalah salah satu dari beberapa masukan.',
        ],
      },
      {
        heading: 'Dari mana sinyal itu berasal',
        paragraphs: ['Pada foto asli, pemicunya hampir selalu aplikasi edit, bukan kamera. Sumber yang umum:'],
        bullets: [
          'Memakai Generative Fill, Generative Expand, atau alat hapus berbasis AI, yang bisa menambahkan aksi c2pa dan menandai file sebagai gabungan.',
          '[Mengekspor dengan Content Credentials aktif](turn-off-content-credentials-photoshop-lightroom), yang menandatangani daftar semua editan ke dalam file.',
          'Fitur galeri di ponsel, seperti penghapus AI, yang meninggalkan penanda editan.',
          'Melewatkan file ke aplikasi lain yang menyalin metadata yang ada, sehingga penanda bertahan meski disimpan berkali-kali.',
        ],
      },
      {
        heading: 'Temukan kolomnya di AI Label Remover',
        paragraphs: [
          'Letakkan gambar di meja bagian atas halaman ini. Tab “Jejak AI” mencantumkan setiap sinyal beserta lokasinya, misalnya “C2PA · compositeWithTrainedAlgorithmicMedia” atau “XMP · Iptc4xmpExt › DigitalSourceType”. Beralih ke “Metadata mentah” untuk membaca nilai di baliknya, termasuk claim generator yang menandatangani manifes dan setiap aksi c2pa yang tercatat.',
          'Hasil “Layak dicek lagi” berarti ada Content Credentials tanpa pernyataan AI yang eksplisit. Beberapa platform tetap menganggap manifes itu sebagai petunjuk, jadi putuskan sebelum memposting.',
        ],
      },
      {
        heading: 'Bersihkan salinan yang Anda posting',
        paragraphs: [
          'Tekan “Hapus semua metadata”. AI Label Remover memotong penyimpanan C2PA serta blok XMP, IPTC, dan EXIF dari aliran byte, sementara piksel, ukuran, rotasi, dan profil warna tetap utuh. File yang sudah dibersihkan dibaca ulang agar Anda bisa melihat jejak AI sudah hilang sebelum menyimpan. Halaman [hapus metadata AI](ai-tag-cleaner) menjelaskan setiap jejak yang ditangani.',
          'Menyimpan ulang sebagai JPEG juga akan menghapus metadata, tetapi [mengompresi ulang gambar setiap kali](remove-metadata-without-losing-quality). Memotong blok sepenuhnya menghindari penurunan kualitas itu.',
        ],
      },
      {
        heading: 'Memperbaiki label yang salah bukan menyembunyikan label yang benar',
        paragraphs: [
          'Membersihkan file ditujukan untuk label yang salah menggambarkan karya Anda dan untuk menjaga data pribadi tetap pribadi. Jika gambar seluruhnya atau sebagian besar dibuat AI dan bisa dikira nyata, aturan platform biasanya mengharapkan Anda mengungkapkannya — label ada untuk memberi tahu orang yang melihat. Gunakan AI Label Remover untuk memperbaiki kesalahan, bukan untuk menyamarkan gambar sintetis sebagai foto.',
        ],
      },
    ],
    faqHeading: 'Tentang label AI',
    faq: [
      { q: 'Bisakah label “Info AI” dihapus setelah diposting?', a: 'Biasanya tidak lewat mengedit postingan. Jika label salah menggambarkan foto asli, gunakan opsi banding atau status akun dari platform bila tersedia, lalu bersihkan file sebelum posting berikutnya.' },
      { q: 'Jika file dibersihkan, apakah labelnya pasti hilang?', a: 'Tidak ada jaminan. Membersihkan menghapus sinyal yang tersimpan di file — penyebab umum pada foto yang diedit —, tetapi platform bisa memakai deteksi lain atau meminta Anda mengungkapkannya.' },
      { q: 'Apakah tampilan foto berubah?', a: 'Tidak. Hanya blok metadata yang dihapus. Data gambar disalin byte demi byte, dan rotasi serta profil warna ICC tetap ada.' },
      { q: 'Bisakah pengaturan kamera dipertahankan dan hanya kolom AI yang dihapus?', a: 'Belum. AI Label Remover menghapus semua metadata identitas — lokasi, perangkat, pembuat, dan asal-usul AI — sekaligus, pengaturan paling aman untuk berbagi secara publik. Ukuran, rotasi, warna, dan animasi selalu dipertahankan.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Hapus workflow ComfyUI dan prompt Stable Diffusion dari PNG',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge, dan ComfyUI menulis prompt, seed, checkpoint, dan seluruh workflow ke setiap PNG. Lihat teks persisnya dan hapus tanpa mengubah satu piksel pun.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Pengaturan Anda ikut terbawa bersama gambar',
        paragraphs: [
          'Generator lokal menyimpan pengaturannya sebagai teks di dalam hasil, agar gambar bisa dibuat ulang. Di file PNG, teks itu ada di chunk tEXt, zTXt, atau iTXt di samping data gambar. Yang biasanya ditemukan:',
        ],
        bullets: [
          'A1111 dan Forge: chunk “parameters” berisi prompt, prompt negatif, steps, sampler, CFG, seed, resolusi, hash dan nama model, ditambah pengaturan LoRA dan ekstensi.',
          'ComfyUI: chunk “prompt” berisi graf node yang dijalankan dan chunk “workflow” berisi seluruh tata letak editor — jatuhkan PNG ke ComfyUI dan seluruh susunan muncul kembali.',
          'InvokeAI, NovelAI, dan antarmuka lain: data serupa dengan kunci masing-masing.',
          'Ekspor JPEG atau WebP: sebagian alat menulis teks yang sama ke [EXIF UserComment](what-is-exif-data).',
        ],
      },
      {
        heading: 'Alasan untuk membersihkan — dan untuk tidak membersihkan',
        paragraphs: [
          'Data generasi adalah resep lengkap. Data ini memungkinkan siapa saja meniru gaya Anda, menunjukkan checkpoint dan LoRA yang Anda andalkan, dan bisa membocorkan jalur lokal, nama folder, atau nama pengguna yang terselip dalam workflow. Graf ComfyUI yang besar juga menambah puluhan kilobyte per gambar.',
          'Di sisi lain, situs berbagi model membaca parameter untuk menampilkan info generasi, dan rekan kerja mungkin butuh workflow-nya. Periksa setiap file dulu; [AI Label Remover menampilkan semuanya sebelum menghapus apa pun](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Membaca prompt di AI Label Remover',
        paragraphs: [
          'Letakkan PNG di meja. Di “Metadata mentah”, setiap chunk teks muncul di bawah kata kuncinya — parameters, prompt, workflow — dengan isi lengkap, sementara tab “Jejak AI” menandainya sebagai prompt Stable Diffusion atau workflow ComfyUI. Chunk terkompresi zTXt dan iTXt diekstrak di browser agar bisa dibaca.',
        ],
      },
      {
        heading: 'Yang dipertahankan saat dibersihkan',
        paragraphs: [
          'Tekan “Hapus semua metadata”. Modul PNG menghapus chunk teks, XMP, EXIF, dan C2PA secara utuh dan mempertahankan IHDR, IDAT, palet, transparansi, gamma, dan warna, serta chunk animasi APNG. Karena chunk dihapus utuh, CRC yang tersisa tetap valid dan file bisa dibuka di mana saja. Halaman [hapus metadata PNG](png-metadata-remover) menjelaskan setiap chunk.',
          'Membuka lalu menyimpan ulang di editor juga akan menghapus teks, tetapi [mengompresi ulang gambar dan bisa menggeser warna](remove-metadata-without-losing-quality). Penghapusan di tingkat byte menghindari keduanya.',
        ],
      },
    ],
    faqHeading: 'Tentang data Stable Diffusion dan ComfyUI',
    faq: [
      { q: 'Bagaimana agar A1111 atau ComfyUI tidak menyimpan metadata?', a: 'A1111 dan Forge punya pengaturan untuk berhenti menulis parameter generasi ke PNG, dan ComfyUI bisa dijalankan dengan opsi --disable-metadata. Keduanya hanya berlaku untuk gambar baru, jadi bersihkan gambar yang sudah ada.' },
      { q: 'Bisakah ComfyUI membangun ulang workflow dari PNG yang sudah dibersihkan?', a: 'Tidak. Chunk “prompt” dan “workflow” sudah hilang, jadi menyeret file ke ComfyUI tidak memulihkan apa pun. Simpan file asli yang belum dibersihkan jika graf itu masih diperlukan.' },
      { q: 'Apakah PNG yang dibersihkan terlihat sama?', a: 'Ya. Chunk IDAT berisi piksel terkompresi disalin tanpa perubahan, jadi gambarnya identik piksel demi piksel.' },
      { q: 'Bagaimana dengan ekspor JPEG dan WebP?', a: 'Prompt yang tersimpan di EXIF UserComment atau XMP juga terdeteksi dan dihapus dari file JPEG dan WebP.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Hapus prompt dari gambar Midjourney dan DALL·E',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Unduhan dari Midjourney, DALL·E, ChatGPT, dan Firefly bisa memuat prompt, ID job, dan asal-usul AI. Lihat isi file dan bersihkan sebelum memposting.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Yang ditulis generator online',
        paragraphs: [
          'Layanan gambar online makin sering menandai unduhan dengan metadata, demi transparansi dan standar asal-usul. Kolom persisnya berbeda tiap layanan dan berubah dari waktu ke waktu, jadi satu-satunya jawaban pasti adalah membuka filenya. Yang mungkin Anda temukan:',
        ],
        bullets: [
          'Midjourney: prompt dan ID job di kolom deskripsi atau komentar, sering disertai [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) yang menandai gambar sebagai buatan AI.',
          '[DALL·E dan pembuatan gambar ChatGPT](chatgpt-gemini-image-metadata): [Content Credentials C2PA](what-is-c2pa-content-credentials) yang menyebut nama generator.',
          'Adobe Firefly: Content Credentials yang menyatakan gambar dibuat dengan AI.',
          'Banyak alat: nama perangkat lunak, tanggal pembuatan, dan kadang pengenal yang terkait akun.',
        ],
      },
      {
        heading: 'Prompt adalah hasil kerja yang layak dilindungi',
        paragraphs: [
          'Bagi ilustrator, desainer, dan penulis prompt, prompt yang matang adalah hasil banyak percobaan. Penampil metadata gratis mana pun menampilkan teks tersemat kepada siapa saja yang mengunduh gambar Anda, siap disalin. ID job dan data akun juga bisa mengaitkan gambar publik dengan Anda.',
        ],
      },
      {
        heading: 'Lihat dulu, baru bersihkan',
        paragraphs: [
          'Letakkan gambar di meja dan baca laporannya. Baris bertanda “AI” memuat prompt, nama generator, dan pernyataan asal; baris bertanda “Orang” memuat pembuat, deskripsi, dan pengenal. Tekan “Hapus semua metadata” dan simpan file bersihnya — atau simpan seluruh batch dalam ZIP. Halaman [hapus metadata AI](ai-tag-cleaner) menjelaskan setiap jenis jejak.',
          'Semuanya berjalan di browser Anda, jadi prompt yang Anda lindungi tidak melewati layanan lain di tengah jalan.',
        ],
      },
      {
        heading: 'Batasan yang perlu diketahui',
        paragraphs: [
          'Beberapa penyedia juga menyembunyikan watermark di piksel, seperti [SynthID dari Google](synthid-invisible-ai-watermarks). Itu bukan metadata dan tidak tersentuh saat file dibersihkan. Dan jika Anda memposting gambar AI yang realistis, aturan platform tetap bisa meminta Anda mengungkapkannya. Membersihkan file melindungi proses kerja Anda; tidak mengubah apa gambar itu sebenarnya.',
        ],
      },
    ],
    faqHeading: 'Tentang metadata Midjourney dan DALL·E',
    faq: [
      { q: 'Bisakah orang membaca prompt saya dari gambar yang diunduh?', a: 'Jika prompt tersimpan di metadata file, siapa pun dengan penampil metadata bisa membaca dan menyalinnya. Membersihkan file sebelum dibagikan akan menghapusnya.' },
      { q: 'Apakah setiap unduhan Midjourney berisi prompt?', a: 'Tergantung format dan perilaku layanan saat ini. Buka file di AI Label Remover untuk melihat persis isinya.' },
      { q: 'Apakah membersihkan menghapus SynthID atau watermark serupa?', a: 'Tidak. Watermark tak terlihat ada di data piksel, yang tidak pernah diubah oleh AI Label Remover.' },
      { q: 'Bisakah saya membersihkan satu set hasil generasi sekaligus?', a: 'Bisa. Muat hingga 50 gambar, periksa laporannya, lalu simpan semuanya dalam satu ZIP.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'Apa itu C2PA? Penjelasan Content Credentials',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'Panduan sederhana Content Credentials C2PA: apa yang dicatat manifes bertanda tangan, di mana JPEG, PNG, WebP, HEIC, dan AVIF menyimpannya, cara membacanya, dan efek menghapusnya.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Singkatnya',
        paragraphs: [
          'Coalition for Content Provenance and Authenticity (C2PA) mengelola standar terbuka untuk melampirkan riwayat anti-manipulasi pada media. Pengguna melihatnya sebagai Content Credentials. Kamera, editor, dan generator AI bisa menandatangani catatan ke dalam gambar tentang cara gambar itu dibuat — dipotret dengan kamera, diedit di aplikasi, atau dihasilkan model.',
        ],
      },
      {
        heading: 'Anatomi sebuah manifes',
        paragraphs: ['Manifes adalah paket ringkas dan terstruktur dengan tiga bagian utama:'],
        bullets: [
          'Claim generator — perangkat lunak atau layanan yang membuat manifes, seperti editor atau API gambar AI.',
          'Assertions — pernyataan tentang konten: c2pa.actions (dibuat, diedit, dibuka, diubah ukurannya, dll.), [digitalSourceType](iptc-digitalsourcetype-ai), dan tautan ke file sumber.',
          'Tanda tangan — tanda tangan kriptografis dan sertifikat yang mengidentifikasi penanda tangan, ditambah hash yang mengikat manifes ke data gambar yang persis.',
        ],
      },
      {
        heading: 'Tempat penyimpanan di tiap format',
        paragraphs: [
          'Manifes ditempatkan dalam kontainer JUMBF yang disimpan di lokasi khusus tiap format: segmen APP11 di JPEG, chunk caBX di PNG, chunk C2PA di WebP, dan kotak uuid di HEIC serta AVIF. Karena berupa blok terpisah, manifes bisa dibaca dan dihapus tanpa mendekode gambar. AI Label Remover menampilkan blok, claim generator, aksi yang tercatat, dan jenis sumber bila ada.',
        ],
      },
      {
        heading: 'Apa yang sebenarnya terjadi saat dihapus',
        paragraphs: [
          '[Membersihkan menghapus catatan yang tersemat](remove-c2pa-content-credentials) dari salinan file itu. Ingat bahwa editan apa pun sudah memutus ikatan kriptografis — verifier menandai manifes yang tidak lagi cocok dengan pikselnya sebagai tidak valid —, jadi menghapusnya membuang catatan yang kalau tidak akan terus ikut terbawa.',
          'Beberapa sistem menambahkan kredensial “tahan lama”: [watermark tak terlihat atau sidik jari](synthid-invisible-ai-watermarks) yang memungkinkan verifier mengambil manifes dari repositori online meski salinan tersematnya sudah hilang. Membersihkan metadata tidak memengaruhinya, karena keduanya ada di piksel atau di server jarak jauh.',
        ],
      },
      {
        heading: 'Simpan atau bersihkan?',
        paragraphs: [
          'Kredensial berguna saat Anda perlu menunjukkan asal-usul gambar — dalam jurnalisme atau untuk foto asli milik sendiri. Kredensial juga bisa mengungkap perangkat lunak, riwayat edit, dan identitas yang lebih ingin Anda simpan, atau [memicu label AI pada foto yang hanya sedikit diedit](made-with-ai-label). Baca manifesnya dulu dan putuskan per file.',
        ],
      },
    ],
    faqHeading: 'Tentang C2PA',
    faq: [
      { q: 'Siapa yang memakai C2PA?', a: 'Adobe, Microsoft, Google, OpenAI, Meta, produsen kamera seperti Leica, Sony, dan Nikon, serta banyak organisasi berita mendukung standar ini atau menjadi anggota koalisi, meski masing-masing memakainya secara berbeda.' },
      { q: 'Apakah C2PA semacam watermark tak terlihat?', a: 'Bukan. C2PA adalah metadata yang disimpan di samping data gambar. Watermark piksel seperti SynthID adalah mekanisme berbeda dan tidak terpengaruh saat file dibersihkan.' },
      { q: 'Bagaimana memverifikasi tanda tangan sebelum membersihkan?', a: 'AI Label Remover menampilkan generator, aksi, dan jenis sumber. Untuk validasi tanda tangan penuh, jalankan dulu file asli melalui verifier Content Credentials resmi.' },
      { q: 'Apakah menghapus C2PA menurunkan kualitas?', a: 'Tidak. Manifes adalah blok tersendiri; data gambar terkompresi disalin apa adanya.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Hapus lokasi GPS dari foto di iPhone, Android, dan PC',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'Hapus lokasi GPS dari foto sebelum dibagikan: kolom EXIF mana yang mengungkap posisi, perangkat, dan waktu, jalur kebocorannya, dan cara membersihkannya tanpa penurunan kualitas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Yang dicatat ponsel di setiap foto',
        paragraphs: ['Dengan layanan lokasi aktif, foto ponsel biasa bisa berisi:'],
        bullets: [
          'Lintang, bujur, dan ketinggian, sering dengan akurasi beberapa meter, ditambah stempel waktu GPS.',
          'Waktu persis foto diambil dan terakhir diedit.',
          'Merek dan model, data lensa, dan kadang nomor seri atau nama pemilik.',
          'Pratinjau tersemat dan gambar tambahan (peta kedalaman, gambar MPF) dengan salinan EXIF sendiri.',
        ],
      },
      {
        heading: 'Cara file asli bisa keluar',
        paragraphs: [
          'Feed media sosial besar biasanya menghapus EXIF dari yang mereka terbitkan, tetapi banyak jalur yang mengirim file asli utuh: [mengirim “sebagai file” atau dokumen di aplikasi chat](which-platforms-strip-photo-metadata), lampiran email, tautan cloud, forum, situs jual-beli, dan situs portofolio. Satu foto yang diambil di rumah bisa mengungkap alamat Anda; serangkaian foto, rutinitas Anda.',
        ],
      },
      {
        heading: 'Periksa data GPS yang diungkap foto Anda',
        paragraphs: [
          'Letakkan foto di meja. Tab “Apa yang terungkap” langsung menunjukkan apakah ada kolom lokasi, orang, dan waktu, dengan posisi GPS diubah menjadi koordinat desimal. “Metadata mentah” mencantumkan setiap kolom yang dikelompokkan menurut [EXIF IFD0, Exif, dan GPS](what-is-exif-data).',
        ],
      },
      {
        heading: 'Bersihkan tanpa efek samping',
        paragraphs: [
          'Tekan “Hapus semua metadata”. [Kolom GPS, tanggal, perangkat, pembuat, dan perangkat lunak](remove-exif-data) hilang, bersama thumbnail tersemat dan gambar tambahan MPF yang bisa menyimpan salinan tersembunyi. Tag orientasi ditulis kembali ke blok EXIF kecil agar foto potret tidak miring, dan profil warna dipertahankan agar warna tetap akurat. HEIC dari iPhone dibersihkan langsung tanpa diubah ke JPEG — lihat halaman [hapus metadata HEIC](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Menghentikannya dari kamera',
        paragraphs: [
          'Anda bisa [mematikan penandaan lokasi di pengaturan kamera](view-remove-metadata-iphone-android) atau menghapus lokasi untuk satu kali berbagi lewat opsi berbagi di ponsel. Meski begitu, membersihkan file sebelum dikirim tetap kebiasaan paling menyeluruh, karena ikut menghapus data perangkat, waktu, dan pratinjau yang tidak tersentuh pengaturan ponsel.',
        ],
      },
      {
        heading: 'Seberapa akurat koordinatnya',
        paragraphs: [
          'EXIF menyimpan lintang dan bujur dalam derajat, menit, dan detik, dan ponsel mencatat detiknya dengan angka desimal. Satu detik lintang kira-kira 31 meter, jadi nilai dengan dua angka desimal di atas kertas menunjuk titik selebar kurang dari satu meter. Akurasi sebenarnya bergantung pada sinyal — sering 3–10 meter di luar ruangan, lebih buruk di dalam —, tetapi tetap cukup untuk menunjuk satu rumah. Banyak ponsel juga mencatat ketinggian, yang bisa mengisyaratkan lantai, serta arah lensa saat memotret.',
        ],
      },
      {
        heading: 'Risiko nyata, bukan sekadar kemungkinan',
        paragraphs: ['Data lokasi mengubah foto biasa menjadi peta kehidupan Anda:'],
        bullets: [
          'Foto barang yang Anda jual, diambil di rumah, memberi tahu pembeli — dan siapa saja yang melihat iklan — alamat Anda.',
          'Serangkaian foto di tempat gym, gerbang sekolah, atau kantor mengungkap rutinitas dan jam-jamnya.',
          'Foto liburan yang diposting saat Anda pergi menunjukkan rumah sedang kosong.',
          'Foto anak-anak bisa mengungkap sekolah, taman bermain, atau rumah mereka.',
        ],
      },
      {
        heading: 'Lokasi tidak hanya ada di tag GPS',
        paragraphs: [
          'Mengosongkan direktori GPS belum tentu cukup. Aplikasi pengelola foto bisa menyalin koordinat ke XMP, dan kolom IPTC seperti City, Sublocation, dan Country bisa menyebut nama tempat secara langsung. AI Label Remover menghapus XMP dan IPTC bersama EXIF, jadi salinan-salinan ini ikut hilang. Yang tidak bisa dihapus alat metadata mana pun adalah isi gambar itu sendiri: papan nama jalan, nomor rumah, pemandangan dari jendela, atau pantulan bisa membocorkan lokasi — jadi periksa dulu sebelum memposting.',
        ],
      },
      {
        heading: 'Pemeriksaan cepat sebelum berbagi',
        paragraphs: [],
        bullets: [
          'Letakkan foto di AI Label Remover dan lihat tab “Apa yang terungkap”.',
          'Jika ada tempat yang tercantum, tekan “Hapus semua metadata” dan simpan salinan yang sudah dibersihkan.',
          'Pastikan panel hijau mengonfirmasi tempat, orang, dan waktu sudah hilang.',
          'Lihat sekilas gambarnya untuk mencari petunjuk visual — alamat, pelat nomor, landmark.',
          'Bagikan salinan yang sudah dibersihkan dan simpan file asli di galeri Anda sendiri.',
        ],
      },
    ],
    faqHeading: 'Tentang GPS dan privasi foto',
    faq: [
      { q: 'Bisakah lokasi dipulihkan setelah dibersihkan?', a: 'Tidak dari file yang sudah dibersihkan — kolomnya dihapus, bukan disembunyikan. File asli di ponsel masih menyimpannya, jadi bagikan salinan yang sudah dibersihkan saja.' },
      { q: 'Jika GPS dimatikan, apakah foto masih diberi lokasi?', a: 'Masih bisa. Ponsel bisa menentukan posisi lewat Wi-Fi dan jaringan seluler, jadi matikan izin lokasi untuk aplikasi kamera itu sendiri, bukan hanya GPS.' },
      { q: 'Bagaimana tahu apakah foto punya data GPS?', a: 'Letakkan di AI Label Remover: tab “Apa yang terungkap” menampilkan lokasi apa pun dengan koordinat yang sudah didekode. Di ponsel, panel info foto menampilkan peta bila ada GPS.' },
      { q: 'Bukankah media sosial sudah menghapus GPS?', a: 'Banyak platform besar menghapus EXIF dari gambar yang diterbitkan. Lampiran, dokumen, dan tautan cloud biasanya tetap membawa metadata asli.' },
      { q: 'Apakah foto saya akan jadi miring?', a: 'Tidak. Tag orientasi dipertahankan, jadi foto tampil persis seperti sebelumnya.' },
      { q: 'Apakah foto HEIC dari iPhone didukung?', a: 'Ya. HEIC dan HEIF dibersihkan langsung, tanpa mengubah format dan tanpa encoding ulang.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Hapus metadata gambar secara massal — gratis, tanpa unggah',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Hapus metadata hingga 50 gambar sekaligus di browser: cara worker paralel menjaga kecepatan, cara setiap hasil diperiksa ulang, dan cara menyimpan semuanya dalam ZIP.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Satu batch, dari awal sampai akhir',
        paragraphs: [],
        bullets: [
          'Letakkan hingga 50 file JPG, PNG, WebP, GIF, HEIC, atau AVIF di meja (masing-masing 25 MB dan 40 MP).',
          'Setiap file dibaca otomatis; klik file mana pun di antrean untuk melihat laporannya.',
          'Tekan “Hapus semua metadata” sekali untuk membersihkan semua yang sudah dibaca — mesin yang sama dengan alat [hapus data EXIF](remove-exif-data).',
          'Simpan file satu per satu, atau tekan “Simpan semua sebagai ZIP” untuk satu arsip.',
        ],
      },
      {
        heading: 'Cepat tanpa server',
        paragraphs: [
          'AI Label Remover membagi pekerjaan ke beberapa Web Worker — thread latar belakang di browser — sesuai jumlah inti CPU Anda. Setiap worker mengambil satu file, menganalisisnya, dan mengembalikan byte yang sudah dibersihkan, sehingga halaman tetap lancar bahkan dengan HEIC berukuran besar. ZIP memakai metode “store” karena gambar sudah terkompresi; pengemasan cepat dan [tidak menambah penurunan kualitas](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Setiap hasil dibaca ulang',
        paragraphs: [
          'Setelah dibersihkan, setiap file hasil dibaca ulang dan panel hijau memastikan apakah data lokasi, orang, waktu, dan jejak AI sudah hilang. Jika dua file bernama sama, salinan di dalam ZIP diberi nomor agar tidak ada yang tertimpa.',
        ],
      },
      {
        heading: 'Saat filenya ratusan',
        paragraphs: [
          'Kerjakan per putaran 50 file dan kosongkan meja di antaranya untuk membebaskan memori. Di ponsel dengan memori kecil, tutup dulu tab berat lainnya. Karena tidak ada yang diunggah, Anda bahkan bisa offline setelah halaman dimuat.',
        ],
      },
      {
        heading: 'Tidak ada yang keluar dari perangkat',
        paragraphs: [
          'Tidak ada gambar yang diunggah, disimpan, atau dicatat; satu-satunya lalu lintas jaringan adalah pemuatan halaman itu sendiri. Karena itu pembersihan massal cocok untuk kiriman ke klien, sesi foto yang belum dirilis, dan file apa pun yang tidak boleh dikirim ke pihak ketiga.',
        ],
      },
    ],
    faqHeading: 'Tentang pembersihan massal',
    faq: [
      { q: 'Bisakah satu batch mencampur format?', a: 'Bisa. Satu batch bisa mencampur JPG, PNG, WebP, GIF, HEIC, dan AVIF, dan setiap file mempertahankan formatnya.' },
      { q: 'Kenapa dibatasi 50 file?', a: 'Seluruh pemrosesan memakai memori perangkat Anda. Batas ini menjaga ponsel dan laptop lama tetap stabil; Anda bisa menjalankan putaran sebanyak yang diperlukan.' },
      { q: 'Apakah nama file berubah?', a: 'Tidak. File yang dibersihkan tetap bernama sama. Hanya duplikat persis di dalam ZIP yang diberi akhiran nomor.' },
      { q: 'Apakah bisa dipakai offline?', a: 'Bisa. Setelah dimuat, halaman membersihkan file tanpa koneksi karena tidak ada yang dikirim.' },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'Gambar ChatGPT, Gemini, dan Nano Banana: Metadata Apa yang Dibawanya',
    metaTitle: 'Metadata Gambar ChatGPT dan Gemini: C2PA dan SynthID',
    summary: [
      'Gambar buatan ChatGPT atau Google Gemini (termasuk Nano Banana) keluar dari generator dengan informasi asal-usul: Content Credentials C2PA yang disimpan di samping gambar, dan khusus Google, watermark tak terlihat SynthID yang tertanam di piksel.',
      'Panduan ini menunjukkan apa yang biasanya ditulis setiap penyedia, cara membacanya di browser, bagian mana yang bisa dibersihkan oleh pembersih metadata — dan bagian mana yang tidak bisa disentuh alat yang jujur.',
    ],
    description:
      'Metadata apa yang dibawa gambar ChatGPT dan Gemini (Nano Banana) — C2PA, SynthID, tanda yang terlihat — cara membacanya, dan apa yang bisa dihapus dengan pembersihan.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dua penyedia, dua lapisan penanda',
        paragraphs: [
          'OpenAI dan Google sama-sama menandai gambar buatan AI, tetapi mengandalkan lapisan yang berbeda. OpenAI terutama memakai [Content Credentials C2PA](what-is-c2pa-content-credentials): manifes bertanda tangan yang disimpan di file, menyebut nama generator dan menyatakan gambar dibuat oleh AI. Google terutama memakai [SynthID](synthid-invisible-ai-watermarks), watermark tak terlihat yang disematkan ke piksel saat pembuatan, dan telah menambahkan metadata C2PA ke model baru seperti Nano Banana Pro di aplikasi Gemini dan produk cloud-nya.',
          'Kedua lapisan berperilaku sangat berbeda. Metadata berada di bloknya sendiri, bisa dibaca penampil yang mumpuni, dan hilang begitu file di-encode ulang atau dibersihkan. Watermark piksel bertahan dari pemotongan, pengubahan ukuran, dan kompresi, dan hanya bisa dibaca oleh detektor milik penyedia.',
        ],
      },
      {
        heading: 'Isi gambar ChatGPT pada umumnya',
        paragraphs: ['Kolom persisnya berubah antarversi, tetapi PNG atau JPEG yang diunduh langsung dari ChatGPT atau API gambar OpenAI biasanya berisi:'],
        bullets: [
          'Manifes C2PA — di chunk caBX untuk PNG atau segmen APP11 untuk JPEG — yang ditandatangani dengan sertifikat yang diterbitkan untuk OpenAI.',
          'Claim generator yang menyebut layanan OpenAI yang membuat gambar.',
          'Tindakan c2pa.created dengan jenis sumber digital [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai), cara baku untuk menyatakan “dibuat oleh model generatif”.',
          'Saat Anda mengedit foto yang diunggah, entri ingredient yang menunjuk ke foto asli dan tindakan yang menjelaskan editannya.',
        ],
      },
      {
        heading: 'Isi gambar Gemini atau Nano Banana pada umumnya',
        paragraphs: [
          'Setiap gambar yang dibuat model Google membawa SynthID di pikselnya. Tergantung model, aplikasi, dan paket, Anda juga bisa menemukan tanda kilau yang terlihat di salah satu sudut dan, pada model yang lebih baru, manifes C2PA yang menyebut gambar dibuat AI. Google juga memungkinkan Anda bertanya kepada Gemini apakah sebuah gambar mengandung SynthID, satu-satunya cara andal untuk memeriksa watermark tersebut.',
          'Karena tanda yang terlihat dan SynthID adalah bagian dari gambar, keduanya tidak terpengaruh oleh apa pun yang hanya mengedit metadata. Manifes C2PA, jika ada, berperilaku seperti blok metadata lainnya.',
        ],
      },
      {
        heading: 'Mengapa metadata sering hilang dengan sendirinya',
        paragraphs: [
          'Metadata asal-usul itu rapuh. Tangkapan layar menghapusnya sepenuhnya. Banyak aplikasi chat dan media sosial meng-encode ulang unggahan dan membersihkan salinan publiknya. Bahkan mengunggah ulang file ke asisten chat bisa menyisakan data gambar saja. Jadi gambar ChatGPT atau Gemini tanpa Content Credentials itu biasa dan tidak membuktikan apa pun soal asalnya — hanya unduhan asli yang menyimpan catatan lengkapnya.',
        ],
      },
      {
        heading: 'Baca file sebelum membagikannya',
        paragraphs: [
          'Letakkan gambar di meja di bagian atas halaman ini. Tab “Jejak AI” menunjukkan apakah ada manifes C2PA, claim generator mana yang menandatanganinya, dan jenis sumber apa yang dinyatakannya. “Metadata mentah” mencantumkan tindakan dan ingredient yang tercatat, ditambah kolom EXIF dan XMP yang ditambahkan aplikasi yang pernah dilewati file. Tidak ada yang diunggah; file dibaca di dalam browser Anda.',
        ],
      },
      {
        heading: 'Apa yang dihapus pembersihan — dan apa yang tetap ada',
        paragraphs: ['Menekan “Hapus semua metadata” — atau memakai alat [hapus metadata AI](ai-tag-cleaner) — memotong metadata dari aliran byte tanpa menggambar ulang gambar. Dalam praktiknya:'],
        bullets: [
          'Dihapus: manifes C2PA, kolom XMP dan IPTC, EXIF, dan teks apa pun yang menyebut nama alat atau berisi prompt.',
          'Dipertahankan: data piksel, dimensi, rotasi, dan profil warna ICC — gambar terlihat sama persis.',
          'Tidak terpengaruh: SynthID dan tanda kilau yang terlihat, karena keduanya ada di piksel. Alat verifikasi penyedia tetap bisa mengenali gambar dari watermark-nya.',
        ],
      },
      {
        heading: 'Gunakan gambar AI dengan jujur',
        paragraphs: [
          'Pembersihan adalah alat privasi: mencegah prompt, detail akun, dan riwayat edit ikut terbawa bersama file. Ini tidak mengubah hakikat gambar. Jika Anda memublikasikan gambar AI yang realistis, kebanyakan platform mengharapkan Anda mengungkapkannya, dan sebagian membatasi jangkauan akun yang tidak melakukannya. Perbaiki label yang salah pada foto asli; beri label yang jelas untuk karya AI sungguhan.',
        ],
      },
    ],
    faqHeading: 'Tentang metadata gambar ChatGPT dan Gemini',
    faq: [
      { q: 'Apakah setiap gambar ChatGPT berisi C2PA?', a: 'Gambar yang diunduh langsung dari fitur pembuatan gambar OpenAI biasanya berisi Content Credentials. Salinan dari tangkapan layar, yang disimpan ulang, atau yang melewati aplikasi lain sering kehilangannya.' },
      { q: 'Bisakah AI Label Remover menghapus SynthID dari gambar Gemini?', a: 'Tidak. SynthID tertanam di piksel, dan AI Label Remover tidak pernah mengubah piksel. Alat ini hanya menghapus metadata seperti C2PA, XMP, dan EXIF.' },
      { q: 'Bagaimana memeriksa apakah gambar berasal dari Gemini?', a: 'Cari dulu manifes C2PA di AI Label Remover. Untuk SynthID, gunakan verifikasi milik Google, misalnya dengan bertanya kepada Gemini tentang gambar tersebut.' },
      { q: 'Apakah membersihkan gambar ChatGPT menurunkan kualitasnya?', a: 'Tidak. Hanya blok metadata yang dihapus; data gambar terkompresi disalin tanpa perubahan, jadi hasilnya identik piksel demi piksel.' },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'Cara Menghapus Metadata Foto di Windows dan Mac',
    metaTitle: 'Hapus Metadata Foto di Windows 11 dan Mac',
    summary: [
      'Windows dan macOS sama-sama punya cara bawaan untuk menghapus sebagian metadata foto, tetapi masing-masing hanya mencakup sebagian pekerjaan: Windows berfokus pada properti EXIF, macOS pada lokasi.',
      'Berikut langkah persis alat bawaan, metode baris perintah gratis yang dipakai para profesional, dan metode lewat browser yang berjalan sama di kedua sistem serta juga menghapus C2PA, XMP, dan prompt AI.',
    ],
    description:
      'Langkah demi langkah menghapus EXIF, GPS, dan metadata lain dari foto di Windows 11/10 dan macOS dengan alat bawaan, ExifTool, atau browser — dan apa yang terlewat oleh masing-masing.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Ketahui apa yang Anda hapus',
        paragraphs: [
          'Satu foto bisa membawa beberapa jenis metadata sekaligus: [EXIF](what-is-exif-data) (kamera, waktu, GPS), XMP (riwayat edit, deskripsi, kolom AI), IPTC (keterangan, hak cipta, [DigitalSourceType](iptc-digitalsourcetype-ai)), [Content Credentials C2PA](what-is-c2pa-content-credentials), dan pada file PNG, chunk teks berisi prompt AI. Alat bawaan sistem operasi dirancang untuk EXIF, jadi cenderung membiarkan jenis lainnya. Ingat ini saat memilih metode.',
        ],
      },
      {
        heading: 'Windows 11 dan 10: File Explorer',
        paragraphs: ['File Explorer punya penghapus bawaan untuk properti umum:'],
        bullets: [
          'Pilih satu atau beberapa foto, klik kanan, lalu pilih Properties.',
          'Buka tab Details dan klik “Remove Properties and Personal Information” di bagian bawah.',
          'Pilih “Create a copy with all possible properties removed” untuk salinan bersih, atau “Remove the following properties from this file” untuk mencentang kolom tertentu.',
          'Klik OK, lalu buka tab Details pada salinannya untuk memastikan kolom GPS dan kamera sudah kosong.',
        ],
      },
      {
        heading: 'Kekurangan metode Windows',
        paragraphs: [
          'Opsi ini paling baik untuk JPEG dan TIFF. Untuk PNG, WebP, HEIC, dan AVIF, opsi ini mungkin hanya menampilkan sedikit atau tidak ada yang bisa dihapus. Opsi ini juga bisa meninggalkan paket XMP, manifes C2PA, dan thumbnail tersemat, tanpa laporan tentang apa yang tersisa. Aplikasi Photos tidak menyediakan ekspor yang menghapus metadata.',
        ],
      },
      {
        heading: 'macOS: Preview dan Photos',
        paragraphs: ['Di Mac, opsi bawaannya ditujukan untuk lokasi:'],
        bullets: [
          'Preview: buka foto, pilih Tools › Show Inspector, buka tab lokasi (GPS), klik “Remove Location Info”, lalu simpan.',
          'Photos: pilih gambar lalu Image › Location › Hide Location, atau gunakan File › Export dengan informasi lokasi tidak dicentang agar salinan hasil ekspor tidak berisi GPS.',
          'Get Info di Finder dan Inspector di Preview berguna untuk memeriksa hasilnya, tetapi keduanya hanya menampilkan sebagian kolom.',
        ],
      },
      {
        heading: 'Kekurangan metode Mac',
        paragraphs: [
          'Menghapus lokasi tetap menyisakan model perangkat, waktu pemotretan, software, dan riwayat edit. Mengekspor ke JPEG dari Preview atau Photos [meng-encode ulang gambar](remove-metadata-without-losing-quality), yang menurunkan sedikit kualitas setiap kali, dan file HEIC bisa ikut dikonversi kecuali Anda memilih lain.',
        ],
      },
      {
        heading: 'Baris perintah untuk keduanya: ExifTool',
        paragraphs: [
          'ExifTool adalah alat metadata gratis yang sudah lama dipakai, tersedia untuk Windows, macOS, dan Linux. Alat ini mengedit file tanpa meng-encode ulang. Perintah yang berguna:',
        ],
        bullets: [
          'exiftool -all= foto.jpg — menghapus semua metadata yang bisa ditulis dan menyimpan cadangan bernama foto.jpg_original.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation foto.jpg — menghapus semuanya kecuali profil warna dan orientasi, agar warna dan rotasi tetap benar.',
          'exiftool -all= -r "C:\\Foto\\Bagikan" — membersihkan seluruh folder, termasuk subfolder.',
        ],
      },
      {
        heading: 'Metode browser: langkah yang sama di komputer mana pun',
        paragraphs: [
          'Jika Anda tidak bisa memasang software — misalnya di laptop kantor — atau ingin satu metode untuk semua format, buka AI Label Remover di Chrome, Edge, Safari, atau Firefox. Letakkan hingga 50 gambar, baca laporannya, tekan “Hapus semua metadata”, lalu simpan file atau ZIP. Alat ini [menghapus EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA, dan chunk prompt PNG dari JPEG, PNG, WebP, GIF, HEIC, dan AVIF sambil mempertahankan orientasi dan profil warna, dan semuanya berjalan di perangkat Anda.',
        ],
      },
      {
        heading: 'Metode mana yang dipilih',
        paragraphs: [],
        bullets: [
          'Satu JPEG, hanya yang dasar: File Explorer di Windows, Preview di Mac.',
          'Hanya lokasi, langsung dari pustaka foto: Photos di Mac.',
          'Skrip, server, atau ribuan file: ExifTool.',
          'Format campuran, metadata AI, atau tidak boleh memasang software: alat browser lokal seperti AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'Tentang menghapus metadata di komputer',
    faq: [
      { q: 'Apakah “Remove Properties and Personal Information” menghapus GPS?', a: 'Ya, untuk file JPEG opsi ini menghapus GPS bersama properti EXIF lainnya. Periksa tab Details pada hasilnya, karena sebagian data XMP bisa tersisa.' },
      { q: 'Bisakah menghapus metadata foto HEIC di Windows?', a: 'File Explorer hanya mendukung HEIC secara terbatas. ExifTool atau alat browser yang menangani HEIC, seperti AI Label Remover, menghapusnya tanpa mengonversi file.' },
      { q: 'Apakah ekspor dari Preview menghapus semua metadata?', a: 'Tidak bisa diandalkan. Ekspor bisa menghapus sebagian kolom tetapi menyisakan yang lain, dan mengompres ulang JPEG. Periksa file hasil ekspor sebelum membagikannya.' },
      { q: 'Metode mana yang menjaga kualitas gambar?', a: 'File Explorer, ExifTool, dan AI Label Remover mengedit metadata tanpa encode ulang. Mengekspor JPEG baru dari editor atau penampil akan mengompres ulang gambar.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Penampil Metadata Gambar: EXIF, GPS, XMP, IPTC, dan C2PA di Satu Tempat',
    metaTitle: 'Penampil Metadata Gambar: Cek EXIF, GPS, dan Data AI',
    summary: [
      'Sebelum membagikan foto atau memercayai sebuah gambar, penampil metadata yang baik menunjukkan semua yang dikatakan file tentang dirinya — bukan hanya segelintir kolom yang ditampilkan ponsel atau pengelola file.',
      'Panduan ini menjelaskan apa saja yang dicakup pemeriksaan lengkap, di mana penampil bawaan berhenti, mengapa banyak penampil EXIF online justru berisiko bagi privasi, dan cara membaca kolom yang penting.',
    ],
    description:
      'Penampil metadata gratis: lihat kolom EXIF, GPS, XMP, IPTC, C2PA, dan prompt AI di browser tanpa unggah, serta apa yang terlewat oleh penampil bawaan.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Cakupan pemeriksaan lengkap',
        paragraphs: ['Penampil metadata yang menyeluruh membaca setiap blok di file, bukan hanya EXIF:'],
        bullets: [
          'EXIF — model kamera atau ponsel, eksposur, waktu pemotretan, lensa, dan orientasi.',
          'GPS — lintang, bujur, ketinggian, dan arah, jika lokasi sedang aktif.',
          'XMP — software edit, riwayat, deskripsi, rating, dan kolom AI.',
          'IPTC — keterangan, kata kunci, pembuat, hak cipta, dan [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): siapa yang menandatangani file, tindakan apa yang tercatat, apakah AI terlibat.',
          'Chunk teks PNG — [parameter Stable Diffusion, workflow ComfyUI](remove-stable-diffusion-comfyui-metadata), dan teks tersemat lainnya.',
          'Profil ICC dan thumbnail — informasi warna dan gambar pratinjau tersembunyi.',
        ],
      },
      {
        heading: 'Penampil bawaan dan titik butanya',
        paragraphs: [
          'Windows menampilkan metadata di Properties › Details; macOS di Inspector milik Preview atau Get Info di Finder; iPhone saat Anda menggeser foto ke atas; Google Foto di panel detail. Semua itu cukup untuk melihat sekilas tanggal, kamera, dan lokasi, tetapi hanya menampilkan sebagian EXIF dan biasanya sama sekali mengabaikan XMP, IPTC, C2PA, dan teks PNG. Sebuah file bisa tampak bersih di Explorer padahal masih membawa prompt AI lengkap.',
        ],
      },
      {
        heading: 'Jebakan privasi penampil EXIF online',
        paragraphs: [
          'Banyak situs “penampil EXIF online” bekerja dengan mengunggah gambar Anda ke server mereka, membacanya di sana, lalu mengirim laporan. Untuk pemeriksaan privasi, itu terbalik: foto yang Anda khawatirkan — lengkap dengan posisi GPS-nya — kini sudah tersalin ke pihak ketiga. Pilih penampil yang membaca file secara lokal. Tes sederhananya: muat halaman, putuskan internet, lalu lihat apakah penampil masih berfungsi.',
        ],
      },
      {
        heading: 'Membaca file di AI Label Remover',
        paragraphs: ['Letakkan gambar di meja di bagian atas halaman ini. Tiga tab menyusun hasilnya:'],
        bullets: [
          '“Apa yang terungkap” — ringkasan sederhana tentang tempat, orang, waktu, dan perangkat, dengan GPS diubah ke koordinat desimal.',
          '“Jejak AI” — manifes C2PA, jenis sumber IPTC, nama generator, dan prompt, beserta kesimpulannya.',
          '“Metadata mentah” — setiap kolom dikelompokkan menurut sumber: EXIF IFD0, Exif, GPS, namespace XMP, IPTC, C2PA, dan chunk teks PNG.',
        ],
      },
      {
        heading: 'Kolom yang perlu dibaca lebih dulu',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — [titik persisnya](remove-gps-location-from-photos); tempel ke peta untuk melihat apa yang terungkap.',
          'DateTimeOriginal dibanding ModifyDate — kapan foto diambil dibanding kapan terakhir disimpan.',
          'Make, Model, BodySerialNumber, LensSerialNumber — bisa mengaitkan foto-foto ke satu perangkat.',
          'Artist, Copyright, OwnerName — nama yang mungkin tidak Anda sadari tersemat.',
          'Software dan CreatorTool — aplikasi apa yang pernah menyentuh file, termasuk alat AI.',
          'DigitalSourceType dan claim generator C2PA — bagaimana gambar mengaku dibuat.',
        ],
      },
      {
        heading: 'Saat penampil hampir tidak menampilkan apa-apa',
        paragraphs: [
          'Gambar yang disimpan dari feed media sosial, tangkapan layar, atau file yang dikirim lewat aplikasi chat sering kali sudah di-encode ulang dan dibersihkan. Sedikit atau tanpa metadata itu wajar dalam kasus tersebut dan tidak memberi tahu apa pun tentang apakah gambar itu asli, diedit, atau buatan AI. Minta file aslinya jika asal-usul penting.',
        ],
      },
      {
        heading: 'Melihat bukan berarti memverifikasi',
        paragraphs: [
          'Metadata biasa adalah teks polos yang bisa diedit siapa saja, jadi perlakukan sebagai petunjuk, bukan bukti. C2PA berbeda karena ditandatangani, tetapi penampil yang menampilkan manifes tidak sama dengan memvalidasi tanda tangannya; gunakan alat verifikasi Content Credentials resmi untuk itu. Setelah cukup melihat dan ingin datanya hilang, tekan “Hapus semua metadata” untuk menghapusnya tanpa mengubah gambar — halaman [hapus data EXIF](remove-exif-data) menjelaskan apa saja yang dihapus.',
        ],
      },
    ],
    faqHeading: 'Tentang melihat metadata gambar',
    faq: [
      { q: 'Adakah penampil metadata gratis yang tidak mengunggah foto saya?', a: 'Ada. AI Label Remover membaca file di dalam browser Anda tanpa unggahan dan tanpa akun, dan tetap berfungsi offline setelah halaman dimuat.' },
      { q: 'Bisakah saya melihat prompt sebuah gambar AI?', a: 'Bisa, jika generatornya menyimpannya. Prompt Stable Diffusion dan ComfyUI muncul di chunk teks PNG, dan sebagian layanan menyimpan prompt di kolom XMP atau EXIF.' },
      { q: 'Mengapa Windows tidak menampilkan metadata untuk PNG saya?', a: 'File Explorer hanya menampilkan sedikit properti untuk PNG. Chunk teks, XMP, dan C2PA tidak terlihat di sana tetapi muncul di penampil lengkap.' },
      { q: 'Bisakah metadata memberi tahu apakah foto itu palsu?', a: 'Metadata bisa memberi petunjuk kuat, seperti claim generator AI, tetapi metadata yang hilang atau diedit tidak membuktikan apa pun dengan sendirinya.' },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType: Kolom yang Memberi Tahu Platform Bahwa Gambar Itu Buatan AI',
    metaTitle: 'IPTC DigitalSourceType dan trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType adalah kolom metadata IPTC kecil dengan efek besar: satu nilai seperti trainedAlgorithmicMedia sudah cukup bagi banyak platform untuk memberi label buatan AI pada sebuah gambar.',
      'Panduan ini mencantumkan nilai yang akan Anda temui, siapa yang menulis dan membaca kolom ini, mengapa mudah diubah, serta cara menemukan atau menghapusnya dari file.',
    ],
    description:
      'Arti kolom IPTC DigitalSourceType, nilai trainedAlgorithmicMedia dan compositeWithTrainedAlgorithmicMedia, siapa yang membacanya, serta cara menemukan atau menghapusnya.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Satu kolom, daftar jawaban yang baku',
        paragraphs: [
          'DigitalSourceType adalah bagian dari IPTC Photo Metadata Standard, kosakata yang dipakai redaksi berita, agensi stok foto, dan software foto untuk mendeskripsikan gambar. Kolom ini menjawab satu pertanyaan: bagaimana konten ini dibuat? Jawabannya bukan teks bebas, melainkan istilah dari kosakata terkendali “digital source type” milik IPTC, ditulis sebagai URI seperti http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'Di file gambar, kolom ini disimpan di XMP sebagai Iptc4xmpExt:DigitalSourceType. [Content Credentials C2PA](what-is-c2pa-content-credentials) memakai kosakata yang sama di dalam tindakan bertanda tangannya, jadi istilah yang sama muncul di kedua tempat.',
        ],
      },
      {
        heading: 'Nilai yang akan Anda temui',
        paragraphs: ['Kosakatanya terus bertambah dari tahun ke tahun. Istilah yang paling relevan untuk label AI adalah:'],
        bullets: [
          'trainedAlgorithmicMedia — dibuat oleh model generatif yang dilatih dengan konten contoh.',
          'compositeWithTrainedAlgorithmicMedia — gabungan yang mencakup elemen AI generatif, misalnya [foto yang diedit dengan Generative Fill](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia — dibuat murni oleh algoritme tanpa data latih, seperti seni prosedural atau fraktal.',
          'compositeSynthetic — gabungan yang mencakup elemen sintetis.',
          'algorithmicallyEnhanced — penyempurnaan atau koreksi kecil oleh algoritme.',
          'digitalCapture — direkam kamera digital atau pemindai dari pemandangan nyata.',
          'computationalCapture — hasil potret yang diproses algoritme saat pengambilan, seperti yang dilakukan banyak ponsel.',
          'digitalArt dan screenCapture — karya seni buatan manusia dengan software, dan tangkapan layar.',
        ],
      },
      {
        heading: 'Siapa yang menulisnya',
        paragraphs: [
          'Beberapa layanan gambar AI menulis trainedAlgorithmicMedia ke hasilnya. Editor yang menawarkan alat generatif bisa mencatat nilai gabungan setelah edit AI. Pustaka stok foto dan kantor berita mengisinya saat menerima materi, dan sebagian marketplace meminta penjual menandai gambar AI dengan cara ini. Kolom ini juga bisa terbawa diam-diam: sekali diisi, kolom ini bertahan melewati setiap aplikasi yang mempertahankan XMP.',
        ],
      },
      {
        heading: 'Siapa yang membacanya',
        paragraphs: [
          'Meta menyatakan memakai metadata IPTC bersama C2PA untuk memutuskan apakah akan menampilkan [“Info AI”](made-with-ai-label) di Facebook, Instagram, dan Threads. [Platform lain](which-platforms-label-ai-images), mesin pencari, dan layanan belanja telah mengumumkan penggunaan serupa untuk pengungkapan AI. Karena itu foto asli yang hanya sedikit diretus tetapi membawa compositeWithTrainedAlgorithmicMedia bisa diberi label persis seperti gambar yang sepenuhnya dibuat AI.',
        ],
      },
      {
        heading: 'Tidak bertanda tangan, jadi mudah diubah',
        paragraphs: [
          'Berbeda dengan manifes C2PA, metadata IPTC biasa tidak memiliki tanda tangan. Editor metadata mana pun bisa menambah, mengubah, atau menghapus DigitalSourceType, dan banyak aplikasi membuangnya saat menyimpan ulang. Perlakukan kolom ini sebagai pernyataan, bukan bukti — baik isinya “AI” maupun “kamera”.',
        ],
      },
      {
        heading: 'Menemukan dan menghapusnya',
        paragraphs: [
          'Letakkan gambar di AI Label Remover. Di “Jejak AI”, kolom ini muncul sebagai “XMP · Iptc4xmpExt › DigitalSourceType” beserta nilainya; istilah yang sama di dalam manifes C2PA tercantum di bawah C2PA. Menekan “Hapus semua metadata” menghapus seluruh paket XMP dan penyimpanan C2PA, sehingga kolom ini ikut hilang, bersama EXIF dan data identitas lainnya. Halaman [hapus metadata AI](ai-tag-cleaner) juga membahas kolom AI lainnya.',
          'Jika Anda hanya perlu menghapus kolom ini dan mempertahankan sisa XMP, alat baris perintah bisa melakukannya: exiftool -XMP-iptcExt:DigitalSourceType= foto.jpg. Ingat bahwa nilai yang sama mungkin juga ada di dalam manifes C2PA.',
        ],
      },
      {
        heading: 'Kapan kolom ini sebaiknya dibiarkan',
        paragraphs: [
          'Kolom ini ada agar orang yang melihat tahu bagaimana gambar dibuat. Jika gambar memang dibuat atau banyak diubah oleh AI, pertahankan pernyataannya — atau ungkapkan saat mengunggah. Menghapusnya tepat jika kolom itu salah menggambarkan karya Anda atau saat Anda membersihkan data pribadi dari file.',
        ],
      },
    ],
    faqHeading: 'Tentang IPTC DigitalSourceType',
    faq: [
      { q: 'Apa arti trainedAlgorithmicMedia?', a: 'Itu istilah IPTC untuk konten yang dibuat oleh model AI generatif — gambar yang sepenuhnya dibuat AI.' },
      { q: 'Mengapa foto editan saya bertuliskan compositeWithTrainedAlgorithmicMedia?', a: 'Karena ada edit generatif yang tercatat, misalnya menghapus objek dengan AI. Istilah ini menandai gabungan yang memuat bagian buatan AI, berapa pun ukurannya.' },
      { q: 'Apakah DigitalSourceType sama dengan C2PA?', a: 'Bukan. DigitalSourceType adalah kolom IPTC, biasanya tanpa tanda tangan, yang disimpan di XMP. C2PA adalah manifes bertanda tangan yang bisa memuat kosakata yang sama di dalam tindakannya.' },
      { q: 'Bisakah saya menghapus DigitalSourceType saja dengan AI Label Remover?', a: 'Belum bisa saat ini. AI Label Remover menghapus semua XMP dan C2PA dalam sekali proses. ExifTool bisa menghapus kolom tunggal itu jika Anda perlu mempertahankan data XMP lain.' },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Hapus Metadata Tanpa Mengurangi Kualitas: Mengapa Tangkapan Layar dan Simpan Ulang Merugikan',
    metaTitle: 'Hapus Metadata Gambar Tanpa Mengurangi Kualitas',
    summary: [
      'Cara cepat menghapus metadata — mengambil tangkapan layar, menyimpan ulang di editor, memasukkan file ke konverter online — semuanya menggambar ulang gambar. Metadata hilang, tetapi ketajaman, resolusi, atau akurasi warna juga ikut berkurang.',
      'Panduan ini menjelaskan mengapa hal itu terjadi, cara menghapus metadata tanpa mengurangi kualitas, dan cara memeriksa sendiri bahwa tidak ada satu piksel pun yang berubah.',
    ],
    description:
      'Hapus EXIF, GPS, C2PA, dan metadata AI tanpa mengurangi kualitas: mengapa tangkapan layar dan simpan ulang menurunkan kualitas, cara kerja penghapusan lossless, dan cara memeriksanya.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Metadata dan piksel tersimpan terpisah',
        paragraphs: [
          'Setiap format gambar umum memisahkan gambar dari catatan tentangnya. JPEG adalah rangkaian segmen bermarker: metadata di APP1, APP11, dan APP13, gambar terkompresi setelah marker SOS. PNG adalah daftar chunk, dengan piksel di IDAT dan teks di tEXt, zTXt, atau iTXt. WebP memakai chunk RIFF, sedangkan HEIC dan AVIF memakai box ISOBMFF. Karena keduanya disimpan terpisah, metadata bisa dihapus tanpa mendekode gambar sama sekali.',
        ],
      },
      {
        heading: 'Jalan pintas yang umum, dan harganya',
        paragraphs: [],
        bullets: [
          'Tangkapan layar — menghapus semua metadata, tetapi merekam pada resolusi layar, bisa memotong atau mengubah skala, bisa menggeser warna, dan bisa ikut menangkap notifikasi atau konten lain di layar.',
          'Simpan ulang atau ekspor sebagai JPEG — mendekode dan mengompres ulang gambar; setiap generasi menambah artefak, dan profil ICC bisa hilang sehingga warna bergeser.',
          'Konverter online — meng-encode ulang gambar dan biasanya mengunggahnya dulu ke server.',
          'Konversi format, misalnya [HEIC ke JPEG](view-remove-metadata-iphone-android) — mengubah kompresi dan sering kehilangan warna gamut lebar atau transparansi.',
        ],
      },
      {
        heading: 'Cara menghapus metadata tanpa mengurangi kualitas',
        paragraphs: [
          'Pembersih lossless menelusuri struktur file dan menyalin setiap blok yang menggambarkan gambar, hanya melewati blok yang membawa metadata. Untuk JPEG, itu berarti membuang APP1 berisi EXIF dan XMP, APP11 berisi C2PA, APP13 berisi IPTC, dan komentar, sambil menyalin tabel kuantisasi, tabel Huffman, dan data scan tanpa diubah. Untuk PNG, chunk teks dan metadata dihapus utuh, sehingga CRC setiap chunk yang tersisa tetap valid. Untuk HEIC dan AVIF, item metadata dihapus dan offset internal ditulis ulang agar data gambar tetap menunjuk ke tempat yang benar.',
          'AI Label Remover bekerja dengan cara ini di browser Anda, baik untuk [hapus data EXIF](remove-exif-data) maupun [hapus metadata PNG](png-metadata-remover). Hasilnya berisi data gambar terkompresi yang persis sama dengan masukannya.',
        ],
      },
      {
        heading: 'Tiga hal yang dipertahankan pembersih yang baik',
        paragraphs: [],
        bullets: [
          'Orientasi — banyak foto ponsel disimpan miring dengan [tag EXIF](what-is-exif-data) yang memberi tahu penampil untuk memutarnya. Jika tag itu hilang, foto potret tampil miring. AI Label Remover menulis kembali tag tersebut ke blok EXIF minimal.',
          'Profil warna — profil ICC memberi tahu aplikasi cara menafsirkan warna, terutama untuk foto ponsel Display P3. Tanpanya, gambar bisa tampak kusam atau terlalu jenuh.',
          'Animasi dan transparansi — frame APNG, WebP animasi, dan GIF, serta kanal alfa, harus tetap utuh.',
        ],
      },
      {
        heading: 'Cara memeriksa bahwa hasilnya benar-benar lossless',
        paragraphs: ['Anda tidak perlu sekadar percaya pada klaim sebuah alat:'],
        bullets: [
          'Bandingkan dimensi — lebar dan tinggi harus identik.',
          'Bandingkan ukuran file — file bersih hanya boleh lebih kecil kira-kira sebesar metadata yang dihapus, tidak pernah jauh lebih kecil.',
          'Bandingkan piksel — buka keduanya di editor sebagai layer dengan mode blend Difference; hasil lossless akan hitam pekat.',
          'Baca ulang file — [AI Label Remover membaca ulang setiap file yang sudah dibersihkan](batch-remove-metadata) dan menunjukkan kolom yang tersisa.',
        ],
      },
      {
        heading: 'Dari mana penghematan ukuran berasal',
        paragraphs: [
          'Menghapus metadata tetap bisa membuat file jauh lebih kecil. Thumbnail tersemat dan pratinjau MPF di JPEG kamera, riwayat edit XMP yang panjang, dan [workflow ComfyUI](remove-stable-diffusion-comfyui-metadata) yang besar di PNG bisa menambah puluhan hingga ratusan kilobyte. Menghapusnya mengecilkan file tanpa mengubah apa yang Anda lihat.',
        ],
      },
    ],
    faqHeading: 'Tentang penghapusan metadata lossless',
    faq: [
      { q: 'Apakah menghapus metadata menurunkan kualitas gambar?', a: 'Tidak, jika dilakukan di tingkat byte. Hanya encode ulang — tangkapan layar, simpan ulang, konversi — yang menurunkan kualitas.' },
      { q: 'Mengapa file saya lebih kecil setelah dibersihkan?', a: 'Karena blok metadata, thumbnail, dan gambar pratinjau dihapus. Data gambar itu sendiri tidak berubah.' },
      { q: 'Apakah warna akan terlihat berbeda setelah dibersihkan?', a: 'Tidak. AI Label Remover mempertahankan profil warna ICC, jadi warna ditampilkan persis seperti sebelumnya.' },
      { q: 'Apakah tangkapan layar cara yang aman untuk menghapus metadata?', a: 'Tangkapan layar menghapus metadata tetapi menurunkan kualitas dan bisa menangkap hal lain di layar. Penghapusan lossless menjaga gambar asli tetap utuh.' },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'Cara Cek Apakah Gambar Dibuat AI (Gratis)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'Apakah Gambar Ini Buatan AI? Cara Memeriksa File-nya Langsung',
    summary: [
      'Petunjuk tepercaya paling cepat untuk tahu apakah gambar dibuat AI ada di dalam file: Content Credentials C2PA, kolom IPTC DigitalSourceType, dan teks generator sering menyebut persis alat yang membuat gambar.',
      'Berikut apa yang perlu dicari, cara membacanya dengan pemeriksa gratis yang berjalan di browser, dan mengapa tidak menemukan apa-apa tidak pernah membuktikan gambar itu asli.',
    ],
    description:
      'Periksa apakah gambar dibuat AI dengan membaca metadata C2PA, IPTC DigitalSourceType, dan generator di browser — serta pahami apa yang bisa dan tidak bisa dibuktikan tiap sinyal.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dapatkan file aslinya',
        paragraphs: [
          'Metadata hanya bertahan di file sebagaimana keluar dari kamera atau generator. Tangkapan layar, file yang disimpan ulang, dan gambar yang diambil dari feed media sosial biasanya sudah di-encode ulang dan kehilangan sebagian besar isinya. Sebisa mungkin, minta hasil ekspor asli — yang dikirim “sebagai file”, bukan sebagai foto terkompresi.',
        ],
      },
      {
        heading: 'Petunjuk pertama: Content Credentials',
        paragraphs: [
          'Alat yang mendukung C2PA melampirkan [catatan bertanda tangan digital](what-is-c2pa-content-credentials). Claim generator-nya menyebut aplikasi atau layanan yang membuat gambar, c2pa.actions mencantumkan langkah seperti “dibuat” atau “diedit”, dan digitalSourceType bisa langsung menyatakan pembuatan oleh AI.',
          'Karena catatannya ditandatangani, alat verifikasi juga bisa mengetahui apakah gambar berubah setelah ditandatangani. Manifes dari layanan AI adalah bukti metadata terkuat yang tersedia.',
        ],
      },
      {
        heading: 'Petunjuk kedua: IPTC DigitalSourceType',
        paragraphs: ['Banyak generator dan editor mengisi [kolom IPTC standar](iptc-digitalsourcetype-ai) yang menjelaskan cara konten dibuat. Nilai yang paling sering ditemui:'],
        bullets: [
          'trainedAlgorithmicMedia — dihasilkan oleh model AI generatif.',
          'compositeWithTrainedAlgorithmicMedia — foto asli dengan area yang dibuat atau diganti AI, seperti dengan Generative Fill.',
          'algorithmicMedia — dibuat algoritme tanpa data latih, seperti seni prosedural.',
          'digitalCapture — dipotret dengan kamera, tanpa konten generatif yang dinyatakan.',
        ],
      },
      {
        heading: 'Petunjuk ketiga: prompt dan nama alat',
        paragraphs: [
          '[Antarmuka Stable Diffusion dan ComfyUI](remove-stable-diffusion-comfyui-metadata) menyimpan prompt, seed, model, dan workflow sebagai teks di file PNG. Alat lain meninggalkan namanya di XMP CreatorTool atau EXIF Software. Semua ini jelas menunjukkan keterlibatan AI — dan sering memberi tahu persis bagaimana gambar dibuat.',
        ],
      },
      {
        heading: 'Memeriksa apakah gambar dibuat AI',
        paragraphs: [
          'Letakkan file di meja di bagian atas halaman ini. Tab “Jejak AI” memberi salah satu dari tiga kesimpulan — jejak AI ditemukan, layak dicek lagi, atau tidak ada jejak AI — dan mencantumkan setiap sinyal beserta sumbernya. “Metadata mentah” menampilkan nilai-nilai di baliknya. Tidak ada yang diunggah. Untuk menghapus yang ditemukan, gunakan halaman [hapus metadata AI](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Jika file-nya kosong',
        paragraphs: [
          'Ketiadaan metadata tidak membuktikan apa pun ke arah mana pun: editor, aplikasi chat, dan media sosial terus-menerus menghapusnya, dan tidak adanya EXIF kamera paling-paling hanya petunjuk lemah. Langkah berikutnya adalah pemeriksa watermark milik penyedia (misalnya untuk [SynthID dari Google](synthid-invisible-ai-watermarks)), pencarian gambar terbalik untuk menemukan salinan paling awal, dan melihat di mana gambar pertama kali muncul. Detektor AI berbasis piksel memberi probabilitas, bukan bukti.',
        ],
      },
    ],
    faqHeading: 'Tentang memeriksa gambar AI',
    faq: [
      { q: 'Bisakah saya tahu apakah gambar dibuat dengan ChatGPT atau Gemini?', a: 'Jika file masih memiliki Content Credentials, claim generator-nya menyebut nama layanannya. Untuk gambar Gemini, pemeriksaan SynthID dari Google juga bisa mendeteksi watermark di piksel.' },
      { q: 'Jika AI Label Remover tidak menemukan jejak AI, apakah fotonya asli?', a: 'Belum tentu. Artinya file tidak berisi metadata AI. Metadata mudah hilang atau dihapus, jadi anggap hasil bersih sebagai “tidak diketahui”, bukan bukti.' },
      { q: 'Bisakah saya memeriksa gambar yang disimpan dari Instagram atau Facebook?', a: 'Bisa, tetapi platform biasanya membersihkan salinan yang dipublikasikan, jadi jangan berharap banyak. Label “Info AI” dari platform itu sendiri adalah sinyal terpisah.' },
      { q: 'Apakah pemeriksaannya gratis dan privat?', a: 'Ya — gratis, tanpa akun, dan file dibaca secara lokal tanpa diunggah.' },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'Platform Mana yang Memberi Label Gambar AI? Meta, TikTok',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'Label AI di Media Sosial: Instagram, Facebook, TikTok, YouTube, Pinterest, dan LinkedIn',
    summary: [
      'Semakin banyak platform menandai gambar dan video dengan label seperti “Info AI”. Kebanyakan mengandalkan sinyal yang sama di dalam file — Content Credentials C2PA dan metadata IPTC — ditambah pernyataan dari kreator.',
      'Ikhtisar ini membahas bagaimana platform besar umumnya menerapkan label, apa pemicunya, dan apa artinya bagi foto asli yang diedit ringan dengan bantuan AI.',
    ],
    description:
      'Cara Instagram, Facebook, Threads, TikTok, YouTube, Pinterest, dan LinkedIn menerapkan label AI, metadata file apa yang memicunya, dan dampaknya bagi foto yang diedit.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Sinyal yang sama',
        paragraphs: ['Pelabelan otomatis biasanya bertumpu pada daftar pendek sinyal umum:'],
        bullets: [
          '[Content Credentials C2PA](what-is-c2pa-content-credentials) yang menyatakan pembuatan atau pengeditan oleh AI.',
          '[Kolom IPTC DigitalSourceType](iptc-digitalsourcetype-ai), seperti trainedAlgorithmicMedia.',
          '[Watermark tak terlihat dari sebagian penyedia AI](synthid-invisible-ai-watermarks), jika platform punya detektor yang cocok.',
          'Pernyataan kreator — tombol atau kotak centang saat mengunggah konten AI yang realistis.',
        ],
      },
      {
        heading: 'Meta: Instagram, Facebook, Threads',
        paragraphs: [
          'Meta menampilkan [“Info AI”](made-with-ai-label) (berganti nama dari “Made with AI” pada 2024) saat mendeteksi sinyal AI standar industri atau saat kreator menyatakan penggunaan AI. Setelah para fotografer keberatan karena foto yang hanya diretus ringan ikut ditandai, Meta memindahkan label untuk konten yang diedit AI ke menu postingan dan mempertahankan label yang lebih mencolok untuk konten yang sebagian besar dibuat AI.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTok mewajibkan kreator memberi label pada konten realistis buatan AI dan menyatakan secara otomatis melabeli unggahan yang datang dengan Content Credentials C2PA yang mengidentifikasinya sebagai buatan AI.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTube meminta pengunggah mengungkapkan konten yang diubah atau sintetis yang realistis dan menampilkan label kepada penonton. YouTube juga memakai C2PA ke arah sebaliknya, dengan penanda bergaya “direkam dengan kamera” untuk konten yang membawa kredensial perekaman asli.',
        ],
      },
      {
        heading: 'Pinterest dan LinkedIn',
        paragraphs: [
          'Pinterest telah menambahkan label untuk gambar yang dibuat atau dimodifikasi AI berdasarkan metadata dan pengklasifikasinya sendiri. LinkedIn menampilkan ikon Content Credentials pada gambar yang membawa data C2PA, sehingga orang bisa melihat sumber dan editannya.',
          'Setiap platform sering merevisi kebijakan ini; periksa pusat bantuan terbarunya sebelum mengandalkan perilaku tertentu.',
        ],
      },
      {
        heading: 'Saat foto asli diberi label',
        paragraphs: [
          'Satu edit generatif, seperti menghapus orang yang lewat, bisa menandai seluruh foto sebagai konten AI gabungan di metadatanya. Sebelum mengunggah, letakkan file di AI Label Remover untuk melihat kolom mana yang akan memicu label. Jika labelnya keliru, [membersihkan salinannya](ai-tag-cleaner) menghapus penyebabnya; jika gambarnya sebagian besar dibuat AI, ungkapkanlah — itulah gunanya label.',
        ],
      },
    ],
    faqHeading: 'Tentang label AI di media sosial',
    faq: [
      { q: 'Apakah Instagram juga memberi label pada profil buatan AI?', a: 'Instagram telah memperkenalkan label tingkat profil untuk akun yang menampilkan orang buatan AI dan bisa membatasi rekomendasi untuk akun yang tidak mengungkapkannya. Kreator yang hanya mengedit dengan alat AI umumnya tidak terpengaruh; periksa panduan Instagram terbaru.' },
      { q: 'Saya hanya menghapus objek kecil — mengapa ada label AI?', a: 'Banyak editor mencatat setiap edit generatif di C2PA atau IPTC sebagai “gabungan dengan AI”. Platform membaca pernyataan itu tanpa menimbang seberapa besar editannya.' },
      { q: 'Apakah platform menyimpan metadata saya setelah diunggah?', a: 'Kebanyakan membacanya saat unggah lalu menghapusnya dari salinan publik, jadi mengunduh postingan sendiri jarang menampilkan kolom aslinya.' },
      { q: 'Apakah gambar yang sudah dibersihkan lolos dari semua label?', a: 'Tidak selalu. Pembersihan menghapus sinyal di dalam file, tetapi platform juga bisa memakai deteksi watermark, pengklasifikasi, atau meminta Anda mengungkapkannya.' },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'Metadata Apa yang Ditambahkan Generator Gambar AI?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'Yang Disembunyikan Generator Gambar AI di File Anda: DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Hampir setiap alat gambar AI meninggalkan sesuatu di hasilnya, mulai dari Content Credentials bertanda tangan hingga prompt dalam teks polos. Mengetahui apa yang ditulis masing-masing membantu Anda menjaga prompt dan memahami mengapa platform memberi label pada gambar.',
      'Berikut rangkuman metadata yang umum ditemukan di file dari generator populer, dan cara melihat apa yang sebenarnya ada di file Anda sendiri.',
    ],
    description:
      'Apa yang disematkan generator gambar AI populer — C2PA, IPTC DigitalSourceType, XMP, prompt, dan workflow — dan cara membaca atau membersihkannya dari file Anda.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Tiga kelompok jejak',
        paragraphs: ['Metadata terkait AI terbagi dalam tiga jenis besar:'],
        bullets: [
          'Asal-usul bertanda tangan — Content Credentials C2PA yang menyebut generator dan apa yang dilakukannya.',
          'Kolom deskriptif — entri IPTC dan XMP seperti [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool, atau deskripsi.',
          'Pengaturan pembuatan — prompt, seed, model, dan parameter yang disimpan sebagai teks, terutama oleh alat lokal.',
        ],
      },
      {
        heading: 'OpenAI: gambar ChatGPT dan DALL·E',
        paragraphs: [
          'Gambar dari [fitur pembuatan gambar OpenAI](chatgpt-gemini-image-metadata) membawa Content Credentials C2PA yang mengidentifikasi OpenAI sebagai sumbernya, sehingga penampil dan platform yang mendukung C2PA bisa mengenalinya.',
        ],
      },
      {
        heading: 'Adobe: Firefly dan alat generatif Photoshop',
        paragraphs: [
          'Adobe melampirkan Content Credentials pada konten yang dibuat dengan fitur berbasis Firefly, yang menyebutnya dibuat atau diedit AI. Karena itu foto yang disentuh Generative Fill atau Generative Expand bisa membawa pernyataan gabungan AI meskipun hampir seluruhnya foto asli.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) dan Meta AI',
        paragraphs: [
          'Google menyematkan [watermark tak terlihat SynthID](synthid-invisible-ai-watermarks) pada gambar dari model generatifnya dan memakai metadata untuk menandai konten AI di beberapa produk. Meta menyatakan gambar Meta AI menyertakan penanda yang terlihat, watermark tak terlihat, dan metadata IPTC yang menunjukkan pembuatan oleh AI.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Unduhan Midjourney bisa menyertakan prompt](hide-midjourney-dalle-prompts) dan ID job di kolom deskripsi atau komentar, bersama nilai IPTC yang menandai gambar sebagai buatan AI. Apa yang muncul bergantung pada format unduhan dan versi layanan saat itu.',
        ],
      },
      {
        heading: 'Generator lokal: antarmuka Stable Diffusion dan ComfyUI',
        paragraphs: [
          'Alat lokal tidak menandatangani apa pun, tetapi sering menyimpan detail paling banyak: A1111 dan Forge menulis chunk teks “parameters”, dan [ComfyUI menyematkan seluruh prompt dan graf workflow-nya](remove-stable-diffusion-comfyui-metadata) sebagai JSON. Opsi ini biasanya bisa dimatikan — tetapi hanya untuk gambar baru.',
          'Generator mengubah hasilnya antarversi, jadi cara yang andal adalah membuka file itu sendiri: letakkan di meja AI Label Remover untuk melihat setiap kolom, lalu hapus apa pun yang tidak ingin Anda bagikan dengan alat [hapus metadata AI](ai-tag-cleaner).',
        ],
      },
    ],
    faqHeading: 'Tentang metadata generator',
    faq: [
      { q: 'Apakah Nano Banana menambahkan metadata ke gambar?', a: 'Google menandai gambar dari modelnya dengan SynthID dan telah menambahkan Content Credentials C2PA ke model yang lebih baru seperti Nano Banana Pro. Periksa file tertentu untuk melihat isinya.' },
      { q: 'Apakah semua generator menambahkan C2PA?', a: 'Tidak. Layanan besar berbasis cloud semakin banyak yang melakukannya; banyak alat, terutama yang lokal, hanya menulis metadata teks atau tidak sama sekali.' },
      { q: 'Apakah pembersihan juga menghapus watermark tak terlihat?', a: 'Tidak. Watermark seperti SynthID ada di piksel, dan pembersihan tidak pernah mengubah piksel.' },
      { q: 'Mengapa dua gambar dari alat yang sama bisa berbeda?', a: 'Format ekspor, versi aplikasi, tempat Anda mengunduh, dan editan berikutnya masing-masing bisa menambah atau menghapus kolom.' },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID dan Watermark AI Tak Terlihat, Dijelaskan',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID dan Watermark Tak Terlihat: Batas Kemampuan Pembersihan Metadata',
    summary: [
      'Sebagian gambar AI membawa dua jenis penanda: metadata yang disimpan di samping gambar, dan watermark yang tertanam di piksel. SynthID dari Google adalah contoh paling terkenal dari jenis kedua.',
      'Tulisan ini menjelaskan bagaimana watermark piksel berbeda dari C2PA dan EXIF, bagaimana watermark dideteksi, dan mengapa alat metadata yang jujur tidak bisa menghapusnya.',
    ],
    description:
      'Apa itu SynthID dan watermark AI tak terlihat lainnya, bedanya dengan metadata C2PA, cara mendeteksinya, dan mengapa pembersihan metadata tidak menyentuhnya.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dua lapisan terpisah',
        paragraphs: [
          'Metadata — EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials) — berada di bloknya sendiri di dalam file, mudah dibaca dan mudah dihapus tanpa menyentuh gambar. Watermark piksel adalah hal yang sama sekali berbeda: pola samar yang tersebar di nilai-nilai piksel, tidak terlihat oleh mata tetapi terlihat oleh detektor.',
        ],
      },
      {
        heading: 'Tentang SynthID',
        paragraphs: [
          'SynthID adalah teknologi watermark dari Google DeepMind untuk konten yang dibuat model AI Google. Teknologi ini menyematkan sinyal yang tak terasa saat pembuatan dan dirancang agar tetap terdeteksi setelah perubahan umum seperti pemotongan, pengubahan ukuran, kompresi, dan penyesuaian warna. Teknik serupa mencakup gambar, audio, video, dan teks.',
        ],
      },
      {
        heading: 'Mendeteksi watermark piksel',
        paragraphs: [
          'Penampil umum tidak bisa membaca watermark; Anda membutuhkan detektor milik penyedia. Google telah memperkenalkan [cara memeriksa konten untuk SynthID](chatgpt-gemini-image-metadata), termasuk verifikasi di dalam produknya. Penyedia lain punya metode sendiri.',
        ],
      },
      {
        heading: 'Mengapa pembersihan tidak menyentuhnya',
        paragraphs: [
          'Alat metadata lossless — termasuk AI Label Remover — [menyalin data gambar byte demi byte](remove-metadata-without-losing-quality); justru begitulah alat ini menjamin tidak ada penurunan kualitas. Watermark apa pun di dalam byte itu tetap di tempatnya. Alat yang menjanjikan “menghapus watermark AI” entah tidak menepatinya atau mengubah gambar secara berat, dan mencoba mengakali watermark penyedia bisa melanggar ketentuannya.',
        ],
      },
      {
        heading: 'Dalam praktik',
        paragraphs: [
          '[Menghapus metadata AI](ai-tag-cleaner) adalah langkah yang tepat untuk privasi dan untuk menghapus prompt, lokasi, dan data asal-usul yang tidak ingin Anda bagikan. Ini tidak membuat gambar AI tak terdeteksi. Saat mengunggah konten AI yang realistis, ikuti aturan pengungkapan platform.',
        ],
      },
      {
        heading: 'Metadata, watermark, atau sidik jari?',
        paragraphs: ['Tiga teknik berbeda sama-sama disebut “label AI”, dan cara kerjanya sangat berbeda:'],
        bullets: [
          'Metadata — blok EXIF, XMP, IPTC, dan C2PA. Siapa pun bisa membacanya, dan mudah dihapus atau hilang saat file disimpan ulang.',
          'Watermark piksel — pola tersembunyi di dalam gambar itu sendiri, seperti SynthID. Hanya detektor milik penyedia yang bisa membacanya, dan dirancang agar bertahan dari editan.',
          'Sidik jari — deskripsi ringkas gambar yang disimpan di server. Gambar yang mirip bisa dicocokkan dengannya kelak, meski tanpa metadata sama sekali.',
        ],
      },
      {
        heading: 'Siapa yang memakai watermark tak terlihat',
        paragraphs: [
          'Google menerapkan SynthID pada gambar dari model AI miliknya. Meta menyatakan menambahkan watermark tak terlihat, selain metadata, pada gambar yang dibuat dengan fitur AI-nya. Adobe dan pihak lain mendukung Content Credentials yang “tahan lama”, yang memasangkan manifes C2PA dengan watermark atau sidik jari agar catatannya bisa dicari lagi. Generator lain hanya mengandalkan metadata, dan alat lokal biasanya tidak menambahkan apa pun. Praktiknya sering berubah, jadi anggap daftar mana pun sebagai potret sesaat.',
        ],
      },
      {
        heading: 'Seberapa andal deteksinya',
        paragraphs: [
          'Deteksi watermark bersifat statistik: detektor melaporkan seberapa besar kemungkinan tanda itu ada, bukan ya atau tidak yang mutlak. Editan berat bisa melemahkan tanda, dan setiap detektor hanya mengenali watermark penyedianya sendiri. Yang terpenting, tidak menemukan watermark tidak membuktikan apa pun — banyak generator tidak pernah menambahkannya. Karena itu [memeriksa apakah gambar buatan AI](how-to-check-if-image-is-ai-generated) berarti menimbang beberapa petunjuk sekaligus.',
        ],
      },
      {
        heading: 'Artinya bagi privasi Anda',
        paragraphs: [
          'Menurut penjelasan publik, watermark piksel menandai konten sebagai hasil model milik penyedia, bukan menyimpan prompt Anda sebagai teks yang bisa dibaca. Informasi yang paling sering membuka identitas Anda — prompt, ID akun, lokasi, data perangkat — ada di metadata, dan lapisan itulah yang bisa dibersihkan oleh alat pembersih. Singkatnya: membersihkan melindungi informasi pribadi Anda, sementara watermark tetap menunjukkan dari mana gambar itu berasal.',
        ],
      },
    ],
    faqHeading: 'Tentang SynthID dan watermark',
    faq: [
      { q: 'Jika gambar tidak punya watermark, apakah itu foto asli?', a: 'Belum tentu. Banyak generator tidak menambahkan watermark sama sekali, jadi ketiadaannya saja tidak membuktikan apa-apa.' },
      { q: 'Bisakah watermark membocorkan prompt saya?', a: 'Menurut penjelasan publik, tidak. Prompt dan data akun biasanya tersimpan di metadata, yang dihapus saat file dibersihkan.' },
      { q: 'Apakah memotong atau tangkapan layar menghapus SynthID?', a: 'Umumnya tidak. SynthID dirancang untuk bertahan dari edit umum seperti pemotongan, pengubahan ukuran, tangkapan layar, dan kompresi.' },
      { q: 'Apakah AI Label Remover menghapus SynthID?', a: 'Tidak. AI Label Remover hanya menghapus metadata dan tidak pernah mengedit piksel, jadi watermark tak terlihat apa pun tetap ada.' },
      { q: 'Bagaimana saya tahu apakah gambar berisi SynthID?', a: 'Hanya alat verifikasi Google yang bisa memberi tahu. Pembaca metadata tidak bisa melihat ke dalam piksel.' },
      { q: 'Apakah setiap gambar AI diberi watermark?', a: 'Tidak. Sebagian penyedia memberi watermark pada hasilnya, banyak yang tidak, dan alat lokal biasanya tidak menambahkan apa pun.' },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials di Photoshop dan Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials di Photoshop dan Lightroom: Mengendalikannya dan Membersihkan Hasil Ekspor',
    summary: [
      'Aplikasi Adobe bisa melampirkan Content Credentials ke hasil ekspor — log edit bertanda tangan yang mencakup fitur AI generatif yang Anda pakai. Berguna untuk membuktikan karya Anda, tetapi juga alasan umum foto yang diretus mendapat label AI.',
      'Berikut asal kredensial itu, cara memeriksa hasil ekspor, dan cara membersihkannya dari salinan saat Anda butuh file bersih.',
    ],
    description:
      'Asal Content Credentials di Photoshop dan Lightroom, cara memeriksa data C2PA pada hasil ekspor, dan cara membersihkannya dari salinan tanpa menurunkan kualitas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Dua cara kredensial terlampir',
        paragraphs: ['Hasil ekspor bisa membawa Content Credentials karena salah satu dari dua alasan:'],
        bullets: [
          'Anda menyalakan Content Credentials, sehingga aplikasi menandatangani identitas dan riwayat edit Anda ke dalam hasil ekspor.',
          'Anda memakai fitur generatif seperti [Generative Fill](made-with-ai-label), dan Adobe menerapkan kredensial yang menyebut konten sebagai diedit AI.',
        ],
      },
      {
        heading: 'Periksa sebelum memublikasikan',
        paragraphs: [
          'Letakkan JPEG atau PNG hasil ekspor di meja di bagian atas halaman ini. Jika laporan menunjukkan blok C2PA, claim generator seperti Adobe Photoshop, tindakan c2pa, dan [jenis sumber gabungan AI](iptc-digitalsourcetype-ai), [platform yang membaca kredensial bisa memberinya label](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'Pengaturan di aplikasi Adobe',
        paragraphs: [
          'Adobe terus memperluas Content Credentials dan letak kontrolnya berpindah antarversi. Di rilis terbaru, cari panel Content Credentials di Photoshop dan bagian Content Credentials di dialog ekspor Lightroom; halaman bantuan Adobe membahas versi persis Anda. Mematikan opsi ini mungkin tidak mencegah kredensial terlampir pada edit generatif.',
        ],
      },
      {
        heading: 'Membersihkan salinan',
        paragraphs: [
          'Saat Anda butuh file bersih untuk portal klien, marketplace, atau media sosial, [hapus blok C2PA](remove-c2pa-content-credentials) dari salinannya. AI Label Remover memotong manifes dari aliran byte, mempertahankan piksel, ukuran, rotasi, dan profil warna, lalu membaca ulang hasilnya agar Anda bisa memastikan tidak ada yang tersisa.',
        ],
      },
      {
        heading: 'Arsipkan file asli yang bertanda tangan',
        paragraphs: [
          'Kredensial bisa menjadi bukti berharga atas kepengarangan dan cara gambar diedit. Simpan hasil ekspor asli beserta kredensialnya, dan bagikan salinan yang sudah dibersihkan hanya di tempat metadata akan menyesatkan atau mengungkap lebih dari yang Anda inginkan.',
        ],
      },
    ],
    faqHeading: 'Tentang Content Credentials Adobe',
    faq: [
      { q: 'Mengapa Instagram memberi label AI pada editan Photoshop saya?', a: 'Generative Fill, Generative Expand, dan fitur serupa mencatat edit AI di Content Credentials atau kolom IPTC, dan Meta membaca sinyal tersebut saat unggah.' },
      { q: 'Jika kredensial dimatikan, apakah edit generatif tetap tercatat?', a: 'Bisa saja. Adobe menerapkan kredensial pada konten generatif, jadi periksa file hasil ekspor alih-alih hanya memercayai pengaturannya.' },
      { q: 'Apakah pembersihan membatalkan editan saya?', a: 'Tidak. Hanya blok metadata yang dihapus; piksel hasil editan Anda disalin tanpa perubahan.' },
      { q: 'Bisakah saya memasang kembali kredensialnya nanti?', a: 'Tidak ke salinan yang sudah dibersihkan, tetapi Anda bisa mengekspor ulang dari file asli dengan kredensial diaktifkan.' },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: 'Aplikasi Mana yang Menghapus Metadata Foto? WhatsApp, X',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Aplikasi Mana yang Menghapus Metadata Foto — dan Mana yang Diam-Diam Meneruskan GPS Anda',
    summary: [
      'Banyak yang mengira media sosial menghapus lokasi dari foto. Untuk salinan yang dipublikasikan, sering kali memang begitu. Namun file aslinya masih bisa beredar dengan EXIF lengkap lewat aplikasi chat, email, tautan cloud, dan situs berbagi file.',
      'Panduan ini memilah cara berbagi yang umum menjadi “biasanya dibersihkan” dan “biasanya dipertahankan”, lalu ditutup dengan satu kebiasaan yang selalu berhasil: bersihkan file sebelum meninggalkan perangkat Anda.',
    ],
    description:
      'Media sosial dan aplikasi chat mana yang menghapus metadata foto, cara berbagi mana yang mempertahankan GPS dan EXIF, dan cara memastikan foto bersih sebelum dikirim.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Salinan publik dan file asli',
        paragraphs: [
          'Unggah foto ke feed, dan kebanyakan platform besar meng-encode ulang serta menghapus EXIF dari versi publiknya. Orang yang melihat tidak bisa tahu posisi GPS Anda, tetapi platform tetap menerima file asli saat unggah. Risiko yang lebih besar ada pada setiap jalur yang meneruskan file asli tanpa diubah.',
        ],
      },
      {
        heading: 'Biasanya dibersihkan',
        paragraphs: [],
        bullets: [
          'Foto yang dipublikasikan ke feed jaringan besar seperti Facebook, Instagram, dan X.',
          'Foto yang dikirim sebagai gambar terkompresi biasa di banyak aplikasi chat.',
          'Kebanyakan gambar yang diubah ukurannya atau dikonversi platform sebelum ditampilkan.',
        ],
      },
      {
        heading: 'Biasanya dipertahankan',
        paragraphs: [],
        bullets: [
          'Foto yang dikirim “sebagai file” atau “sebagai dokumen” di aplikasi seperti WhatsApp atau Telegram.',
          'Lampiran email dan berbagi lewat tautan cloud (Drive, Dropbox, iCloud, dan sejenisnya).',
          'Forum, situs iklan baris, dan situs portofolio yang menyajikan file persis seperti saat diunggah.',
          'Komunitas fotografi yang sengaja menampilkan EXIF, misalnya panel pengaturan kamera.',
        ],
      },
      {
        heading: 'Uji jalur Anda sendiri',
        paragraphs: [
          'Aplikasi terus mengubah cara menangani media. Agar yakin, kirim foto ke diri sendiri dengan cara yang biasa Anda pakai, unduh yang diterima, lalu letakkan di meja AI Label Remover: [tab “Apa yang terungkap”](image-metadata-viewer-online) langsung menunjukkan apakah data tempat, orang, atau waktu ikut terbawa.',
        ],
      },
      {
        heading: 'Bersihkan sebelum mengirim',
        paragraphs: [
          'Kebiasaan yang bisa diandalkan adalah membersihkan metadata sebelum foto meninggalkan perangkat Anda. AI Label Remover [menghapus GPS, tanggal, kolom perangkat dan pembuat](remove-gps-location-from-photos) serta pratinjau tersembunyi, mempertahankan rotasi dan warna, dan melakukan semuanya secara lokal — cocok untuk foto yang akan dikirim ke orang asing, pembeli, atau klien. Halaman [hapus data EXIF](remove-exif-data) menjelaskan setiap kolom yang dihapus.',
        ],
      },
    ],
    faqHeading: 'Tentang aplikasi dan metadata foto',
    faq: [
      { q: 'Apakah email menghapus metadata foto?', a: 'Biasanya tidak. Lampiran dikirim sebagai file asli, jadi EXIF dan GPS ikut terbawa kecuali aplikasi email Anda mengubah ukuran gambar lebih dulu.' },
      { q: 'Apakah WhatsApp menghapus GPS?', a: 'Foto yang dikirim sebagai gambar biasa dikompresi dan kehilangan sebagian besar metadata. Foto yang dikirim sebagai dokumen tetap berupa file asli, termasuk GPS-nya.' },
      { q: 'Apakah Instagram akan menunjukkan tempat foto saya diambil?', a: 'Gambar yang dipublikasikan sudah tanpa EXIF. Tag lokasi yang Anda tambahkan ke postingan adalah hal terpisah dan terlihat oleh semua orang.' },
      { q: 'Bukankah tangkapan layar sudah cukup?', a: 'Tangkapan layar menghapus EXIF tetapi menurunkan kualitas, mengubah dimensi, dan bisa menangkap hal lain di layar. Pembersihan lossless menjaga gambar asli tetap utuh.' },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Hapus Metadata Foto di iPhone dan Android',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Melihat dan Menghapus Metadata Foto di iPhone dan Android',
    summary: [
      'Ponsel Anda mencatat di mana dan kapan setiap foto diambil, beserta model perangkatnya. iOS dan Android sama-sama memungkinkan Anda melihatnya dan menghapus lokasi sebelum berbagi.',
      'Berikut opsi bawaannya, kekurangannya, dan cara berbasis browser untuk membersihkan semua data identitas tanpa memasang aplikasi.',
    ],
    description:
      'Lihat metadata foto di iPhone dan Android, hapus lokasi sebelum berbagi, dan hapus semua EXIF — termasuk HEIC — di browser tanpa memasang aplikasi.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Di iPhone: melihat',
        paragraphs: [
          'Buka foto di app Foto lalu geser ke atas, atau ketuk tombol info. Anda akan melihat tanggal dan waktu, kamera dan lensa, detail eksposur, dan peta jika lokasi aktif. Opsi Sesuaikan di samping tanggal memungkinkan Anda mengubah tanggal, waktu, atau lokasi foto tersebut.',
        ],
      },
      {
        heading: 'Di iPhone: berbagi tanpa lokasi',
        paragraphs: ['Dua kontrol bawaan bisa membantu:'],
        bullets: [
          'Di lembar berbagi, ketuk Pilihan di bagian atas dan matikan Lokasi sebelum mengirim.',
          'Agar foto baru tidak lagi diberi lokasi, buka Pengaturan › Privasi & Keamanan › Layanan Lokasi › Kamera lalu pilih Jangan.',
        ],
      },
      {
        heading: 'Di Android',
        paragraphs: [
          'Di Google Foto, buka foto lalu geser ke atas untuk melihat detail seperti tanggal, perangkat, dan lokasi; tergantung versinya, Anda bisa mengedit atau menghapus lokasi di sana. Agar foto baru tidak lagi diberi lokasi, matikan lokasi di pengaturan aplikasi kamera — nama dan letak opsinya berbeda-beda menurut produsen.',
        ],
      },
      {
        heading: 'Kekurangan alat bawaan',
        paragraphs: [
          'Pengaturan ponsel berfokus pada lokasi. Model perangkat, waktu pemotretan, detail lensa, software edit, dan pratinjau tersemat biasanya tetap ada, dan pengaturan hanya berlaku untuk foto berikutnya atau satu kali berbagi. [File yang disalin ke komputer](remove-metadata-windows-mac) atau dikirim lewat aplikasi lain tetap menyimpan semuanya.',
        ],
      },
      {
        heading: 'Bersihkan semuanya dari browser',
        paragraphs: [
          'Buka AI Label Remover di ponsel Anda, ketuk “Telusuri file”, baca laporannya, lalu ketuk “Hapus semua metadata”. [Data GPS, waktu, perangkat, dan pembuat dihapus](remove-gps-location-from-photos) — termasuk HEIC iPhone — sementara rotasi dan warna tetap terjaga. Tanpa unggahan, tanpa aplikasi — dan halaman [hapus metadata HEIC](heic-metadata-remover) menjelaskan apa saja yang dicatat foto iPhone.',
        ],
      },
      {
        heading: 'iPhone: HEIC, JPEG, dan Live Photos',
        paragraphs: [
          'Secara bawaan iPhone menyimpan foto sebagai HEIC (Pengaturan › Kamera › Format › Efisiensi Tinggi); jika memilih Paling Kompatibel, foto disimpan sebagai JPEG. Kedua format membawa EXIF yang sama — lokasi, waktu, perangkat, dan lensa. Saat mengirim foto ke perangkat non-Apple, iOS mungkin mengubahnya menjadi JPEG di tengah jalan, tetapi metadata biasanya tetap ikut. Live Photos menambahkan klip video pendek dengan metadata sendiri; AI Label Remover membersihkan gambar diamnya, jadi bagikan Live Photos sebagai foto diam saat privasi penting.',
        ],
      },
      {
        heading: 'Android: tiap merek sedikit berbeda',
        paragraphs: [
          'Ponsel Android memakai kolom EXIF yang sama, tetapi menunya tidak sama. Sebagian aplikasi galeri menyediakan sakelar untuk menghapus data lokasi di layar berbagi; yang lain hanya bisa mengedit detail satu per satu. Google Foto punya pengaturan yang menyembunyikan lokasi dari orang yang melihat tautan dan album yang Anda bagikan, tetapi itu tidak mengubah file yang dikirim lewat jalur lain. Nama menu berubah antarversi; jika opsi itu tidak ketemu, membersihkan file adalah cara cadangan yang andal.',
        ],
      },
      {
        heading: 'Jebakan “kirim sebagai file”',
        paragraphs: [
          'Aplikasi chat biasanya mengompresi foto dan membuang sebagian besar metadata saat dikirim dengan cara biasa. Kirim foto yang sama sebagai file atau dokumen — sering demi kualitas penuh — dan file asli sampai utuh, termasuk lokasinya. AirDrop, Quick Share, email, dan tautan cloud pun sama. Justru di saat seperti inilah Anda perlu [memeriksa apa yang terungkap dari file](remove-gps-location-from-photos) dan membersihkannya lebih dulu.',
        ],
      },
      {
        heading: 'Rutinitas dua menit di ponsel',
        paragraphs: [],
        bullets: [
          'Buka AI Label Remover di browser ponsel dan tambahkan ke layar utama untuk lain kali.',
          'Ketuk “Telusuri file” dan pilih foto yang akan dibagikan.',
          'Baca laporannya, ketuk “Hapus semua metadata”, dan periksa panel hijau.',
          'Simpan salinan yang sudah dibersihkan dan bagikan itu, bukan file aslinya.',
        ],
      },
    ],
    faqHeading: 'Tentang metadata foto ponsel',
    faq: [
      { q: 'Apakah AirDrop menyimpan data lokasi?', a: 'Bisa. AirDrop mengirim file asli. Ketuk Pilihan di bagian atas lembar berbagi dan matikan Lokasi, atau bersihkan file terlebih dahulu.' },
      { q: 'Apakah tangkapan layar sebuah foto menghapus metadatanya?', a: 'EXIF aslinya memang hilang, tetapi kualitas turun dan tangkapan layar mendapat metadata sendiri. Membersihkan file asli tanpa penurunan kualitas dan lebih menyeluruh.' },
      { q: 'Apakah saya perlu aplikasi untuk menghapus EXIF di ponsel?', a: 'Tidak. Opsi bawaan menghapus lokasi untuk satu kali berbagi, dan AI Label Remover berjalan di browser ponsel untuk menghapus semua yang lain tanpa memasang apa pun.' },
      { q: 'Apakah mematikan lokasi membersihkan foto lama saya?', a: 'Tidak. Itu hanya berlaku untuk foto baru. Foto yang sudah ada tetap menyimpan lokasinya sampai Anda menghapusnya.' },
      { q: 'Apakah file HEIC iPhone didukung?', a: 'Ya. File HEIC dibersihkan langsung, tanpa dikonversi ke JPEG dan tanpa encode ulang.' },
      { q: 'Apakah opsi berbagi iPhone menghapus semuanya?', a: 'Kebanyakan hanya lokasi. Model perangkat dan waktu pemotretan bisa tetap ada di file yang dibagikan.' },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'Apa Itu Data EXIF? Kolom, Privasi, dan Cara Menghapus',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'Data EXIF, Dijelaskan Tanpa Istilah Rumit',
    summary: [
      'EXIF (Exchangeable Image File Format) adalah informasi tersembunyi yang ditulis kamera atau ponsel ke setiap foto: pengaturan, tanggal dan waktu, model perangkat, dan sering kali posisi GPS.',
      'Artikel ini membahas apa saja isi EXIF, bedanya dengan XMP, IPTC, dan C2PA, mengapa penting bagi privasi, dan cara melihat atau menghapusnya dengan aman.',
    ],
    description:
      'Apa itu data EXIF, kolom apa saja isinya (kamera, waktu, GPS), bedanya dengan XMP, IPTC, dan C2PA, serta cara melihat atau membersihkannya tanpa menurunkan kualitas.',
    updated: '2026-10-23',
    sections: [
      {
        heading: 'Apa yang ada di EXIF',
        paragraphs: ['Foto pada umumnya bisa berisi:'],
        bullets: [
          'Perangkat — merek dan model kamera atau ponsel, lensa, dan kadang nomor seri.',
          'Eksposur — ISO, aperture, kecepatan rana, panjang fokus, dan flash.',
          'Waktu — kapan foto diambil dan terakhir diubah, sering dengan zona waktunya.',
          'Lokasi — lintang, bujur, ketinggian, dan kadang arah.',
          'Tambahan — orientasi, thumbnail kecil yang tersemat, dan nama software edit.',
        ],
      },
      {
        heading: 'Cara EXIF disimpan',
        paragraphs: [
          'Di JPEG, EXIF berada di segmen APP1 dekat awal file dan dibagi menjadi direktori (IFD): IFD0 untuk data dasar gambar dan perangkat, direktori Exif untuk pengaturan kamera, dan [direktori GPS untuk lokasi](remove-gps-location-from-photos). HEIC, WebP, dan PNG juga bisa membawa EXIF, di wadahnya masing-masing.',
        ],
      },
      {
        heading: 'Perbandingannya dengan XMP, IPTC, dan C2PA',
        paragraphs: [],
        bullets: [
          'EXIF — data teknis pemotretan dari kamera dan ponsel.',
          'XMP — format XML fleksibel yang dipakai editor untuk deskripsi, kata kunci, riwayat edit, dan kolom AI.',
          'IPTC — data deskripsi dan hak cipta yang dipakai redaksi berita dan pustaka stok foto, termasuk [DigitalSourceType](iptc-digitalsourcetype-ai) untuk konten AI.',
          'C2PA — [Content Credentials bertanda tangan](what-is-c2pa-content-credentials) yang mencatat asal-usul dan editan.',
        ],
      },
      {
        heading: 'Mengapa ini penting',
        paragraphs: [
          'Fotografer memakai EXIF untuk belajar dan mencatat karya mereka. Bagi kebanyakan orang, EXIF terutama merupakan risiko privasi: satu foto bisa mengungkap alamat rumah, perangkat, dan waktu seseorang berada di suatu tempat. EXIF juga sangat mudah diedit, jadi tidak boleh dianggap bukti dengan sendirinya.',
        ],
      },
      {
        heading: 'Melihat dan menghapusnya dengan benar',
        paragraphs: [
          'Panel info sistem hanya menampilkan segelintir kolom; [AI Label Remover mendekode setiap kolom EXIF, XMP, dan IPTC](image-metadata-viewer-online) dan mengelompokkannya menurut sumber. Saat menghapus EXIF, pertahankan tag orientasi agar foto tidak terputar, pertahankan profil warna agar warna tetap akurat, dan hindari [apa pun yang mengompres ulang gambar](remove-metadata-without-losing-quality). Alat [hapus data EXIF](remove-exif-data) melakukan ketiganya untuk Anda.',
        ],
      },
      {
        heading: 'Asal-usul EXIF',
        paragraphs: [
          'EXIF dibuat pada pertengahan 1990-an oleh produsen elektronik Jepang agar kamera digital bisa mencatat pengaturannya dengan cara yang seragam. Kini standar ini dikelola bersama oleh CIPA dan JEITA. Ide dasarnya hampir tidak berubah: daftar tag bernomor yang masing-masing berisi satu nilai. Versi baru menambahkan kolom seperti selisih zona waktu, nomor seri lensa, dan, di Exif 3.0, teks UTF-8 penuh. Ponsel memakai standar ini apa adanya — karena itu foto smartphone punya struktur yang sama dengan kamera saku tahun 2005, hanya saja GPS-nya jauh lebih akurat.',
        ],
      },
      {
        heading: 'Kolom yang sering mengejutkan',
        paragraphs: ['Selain tanggal dan lokasi, beberapa tag mengungkap lebih banyak dari yang dikira kebanyakan orang:'],
        bullets: [
          'OffsetTime — selisih zona waktu, yang mempersempit wilayah meski tanpa GPS.',
          'BodySerialNumber, LensSerialNumber, dan CameraOwnerName — nilai yang bisa mengaitkan banyak foto ke satu kamera dan satu orang.',
          'GPSImgDirection — arah kamera saat memotret, kadang cukup untuk mengenali sebuah jendela atau balkon.',
          'Software — aplikasi edit dan versinya, petunjuk tentang apa yang dilakukan pada gambar.',
          'MakerNote — blok khusus produsen yang bisa berisi jumlah jepretan, nomor seri internal, serta data fokus atau deteksi wajah.',
        ],
      },
      {
        heading: 'Thumbnail yang bertahan setelah diedit',
        paragraphs: [
          'Banyak file menyimpan pratinjau kecil di direktori kedua, IFD1. Sebagian editor memperbarui gambar utama tetapi membiarkan pratinjau ini, sehingga bagian yang dipotong atau diburamkan bisa terlihat lagi hanya dengan membaca thumbnail-nya. Ponsel juga menyimpan pratinjau lebih besar dan gambar tambahan (MPF) dengan EXIF sendiri. Pembersihan yang benar ikut menghapus salinan tersembunyi ini — itulah sebabnya AI Label Remover membuang thumbnail tersemat dan gambar MPF, bukan sekadar mengosongkan tag GPS.',
        ],
      },
      {
        heading: 'Yang perlu dipertahankan, yang perlu dihapus',
        paragraphs: [
          'Untuk semua yang dibagikan secara publik — postingan, iklan jual-beli, lampiran chat, forum —, menghapus semua EXIF identitas adalah pengaturan yang aman. Ada dua hal yang layak dipertahankan karena memengaruhi tampilan, bukan identitas: tag orientasi dan profil warna. Jika ingin karya Anda dikenali, keterangan atau tanda tangan yang terlihat jauh lebih awet dibanding kolom hak cipta EXIF, yang toh dibuang oleh sebagian besar platform. Simpan file asli di arsip Anda sendiri dan bagikan salinan yang sudah dibersihkan.',
        ],
      },
    ],
    faqHeading: 'Tentang EXIF',
    faq: [
      { q: 'Apakah EXIF sama dengan metadata?', a: 'EXIF adalah salah satu jenis metadata. File juga bisa berisi XMP, IPTC, C2PA, dan teks khusus format, karena itu pembersihan menyeluruh tidak berhenti di EXIF.' },
      { q: 'Apakah tangkapan layar punya EXIF?', a: 'Biasanya jauh lebih sedikit — tanpa pengaturan kamera atau GPS —, tetapi tetap bisa mencatat perangkat, perangkat lunak, dan waktu pengambilan.' },
      { q: 'Bagaimana cara melihat data EXIF?', a: 'Di Windows buka Properties › Details, di Mac gunakan Inspector milik Preview, dan di ponsel buka info foto. Untuk melihat setiap kolom, termasuk XMP dan IPTC, gunakan penampil lengkap seperti AI Label Remover.' },
      { q: 'Apakah EXIF memengaruhi tampilan gambar?', a: 'Tidak. EXIF disimpan terpisah dari data gambar, jadi menghapusnya tidak mengubah apa pun secara visual.' },
      { q: 'Bisakah EXIF dipalsukan?', a: 'Sangat mudah. Alat umum bisa menulis ulang kolom EXIF, jadi perlakukan sebagai petunjuk, bukan bukti.' },
      { q: 'Orientasi juga termasuk EXIF — apakah AI Label Remover mempertahankannya?', a: 'Ya. Orientasi ditulis kembali ke blok EXIF minimal agar foto tetap tampil dengan arah yang benar.' },
    ],
  },
};

export default id;
