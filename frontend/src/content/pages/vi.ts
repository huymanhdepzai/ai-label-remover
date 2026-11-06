import type { Pages } from './types';

const vi: Pages = {
  home: {
    reassure: 'Trực tuyến, miễn phí, không cần đăng ký, không cần cài đặt — ảnh được đọc và làm sạch ngay trong trình duyệt, không tải lên máy chủ nào.',
    ctaTools: 'Xem tất cả công cụ',
    sources: {
      label: 'Đọc và xóa metadata trong ảnh từ',
      note: 'Tên sản phẩm chỉ để chỉ nguồn ảnh; AI Label Remover không liên kết với các hãng này.',
    },
    start: {
      title: 'Bắt đầu với tệp bạn đang có',
      lead: 'Chọn đúng việc bạn cần làm — mỗi công cụ có sẵn khung thả ảnh ngay đầu trang.',
      badge: 'Đề xuất',
      open: 'Mở công cụ',
    },
    nav: {
      remove: 'Xóa metadata',
      check: 'Xem & kiểm tra',
      learn: 'Tìm hiểu',
      viewer: 'Xem metadata ảnh',
      aiCheck: 'Kiểm tra ảnh AI',
      whatIs: 'Metadata là gì?',
    },
    learn: {
      what: {
        title: 'Metadata (siêu dữ liệu) là gì?',
        paragraphs: [
          'Metadata — tiếng Việt gọi là siêu dữ liệu — là “dữ liệu mô tả dữ liệu”: những dòng ghi chú nằm bên trong tệp ảnh nhưng không hiện ra trên ảnh. Máy ảnh, điện thoại, phần mềm chỉnh sửa và công cụ tạo ảnh AI đều tự ghi thêm vào đó mà bạn không hề hay biết.',
          'Với ảnh, metadata thường được chia thành năm nhóm. Mỗi nhóm trả lời một câu hỏi khác nhau về tấm ảnh — và về người đã chụp hay tạo ra nó.',
        ],
        types: [
          { name: 'Mô tả', text: 'Tiêu đề, chú thích, từ khóa, tên người trong ảnh.', example: 'IPTC Caption, XMP dc:title' },
          { name: 'Kỹ thuật', text: 'Hãng và đời máy, ống kính, khẩu độ, tốc độ, ISO, số sê-ri.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: 'Vị trí & thời gian', text: 'Tọa độ GPS, độ cao, ngày giờ chụp kèm múi giờ.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: 'Quản trị & bản quyền', text: 'Tác giả, chủ sở hữu, bản quyền, phần mềm chỉnh sửa gần nhất.', example: 'EXIF Artist, Copyright, Software' },
          { name: 'Nguồn gốc & AI', text: 'Hồ sơ Content Credentials, nhãn “tạo bằng AI”, prompt và workflow.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          'Bạn có thể gặp nhiều tên gọi khác nhau — “trình xóa metadata”, “công cụ gỡ EXIF”, “xóa thông tin ảnh”, “làm sạch siêu dữ liệu” — tất cả đều chỉ cùng một việc: bỏ các khối ghi chú ẩn ra khỏi tệp mà không thay đổi bức ảnh. Tương tự, “trình xem”, “trình đọc” hay “trình kiểm tra metadata” đều là công cụ cho bạn thấy những gì đang nằm trong tệp; AI Label Remover làm cả hai việc.',
      },
      why: {
        title: 'Vì sao nên xem và xóa metadata trước khi chia sẻ ảnh?',
        paragraphs: [
          'Từng trường metadata riêng lẻ thường vô hại, nhưng gộp lại chúng kể khá nhiều về bạn. Một tấm ảnh chụp ở nhà đăng lên chợ đồ cũ có thể mang theo tọa độ GPS chính xác tới vài mét; ảnh gửi qua email hay ổ đĩa đám mây giữ nguyên toàn bộ những gì máy ảnh đã ghi. Xem [vị trí GPS có thể làm lộ địa chỉ nhà bạn như thế nào](remove-gps-location-from-photos).',
          'Với ảnh tạo hoặc chỉnh bằng AI, metadata còn quyết định ảnh có bị gắn nhãn “Made with AI” hay không, và có thể để lộ nguyên đoạn prompt bạn đã viết.',
        ],
        bullets: [
          'Lộ nơi ở, nơi làm việc hoặc thói quen đi lại qua tọa độ GPS.',
          'Nối nhiều ảnh với cùng một người qua số sê-ri máy ảnh hay tên chủ sở hữu.',
          'Lộ prompt, seed, model và workflow mà bạn muốn giữ riêng.',
          'Bị nền tảng gắn nhãn AI dựa trên hồ sơ C2PA hoặc thẻ IPTC đi kèm ảnh.',
        ],
      },
      standards: {
        title: 'Các tiêu chuẩn metadata thường gặp trong ảnh',
        lead: 'Một tệp ảnh có thể chứa cùng lúc nhiều “ngăn” metadata theo các tiêu chuẩn khác nhau. AI Label Remover đọc và xóa tất cả những ngăn dưới đây.',
        items: [
          { name: 'EXIF', text: 'Do máy ảnh và điện thoại ghi: thông số chụp, thiết bị, ngày giờ, GPS, ảnh thu nhỏ. [Tìm hiểu EXIF](what-is-exif-data).' },
          { name: 'XMP', text: 'Định dạng XML của Adobe, dùng cho lịch sử chỉnh sửa, đánh giá, từ khóa và nhiều thuộc tính AI.' },
          { name: 'IPTC', text: 'Chuẩn của ngành báo chí: chú thích, tác giả, bản quyền và thẻ [DigitalSourceType](iptc-digitalsourcetype-ai) khai báo ảnh AI.' },
          { name: 'C2PA', text: 'Content Credentials có chữ ký số, ghi cách tệp được tạo và chỉnh sửa. [C2PA là gì](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: 'Các chunk tEXt, iTXt, zTXt nơi [Stable Diffusion và ComfyUI](remove-stable-diffusion-comfyui-metadata) lưu prompt và workflow.' },
        ],
      },
    },
    security: {
      title: 'Ảnh của bạn luôn an toàn',
      lead: 'Với công cụ xử lý tệp cá nhân, câu hỏi đầu tiên là “ảnh của tôi đi đâu?”. Câu trả lời của AI Label Remover: không đi đâu cả.',
      items: [
        { title: 'Xử lý 100% trên thiết bị', text: 'Việc đọc và làm sạch chạy trong Web Worker ngay trong thẻ trình duyệt. Không có máy chủ nào nhận tệp của bạn.' },
        { title: 'Không lưu trữ, không huấn luyện AI', text: 'Vì ảnh không bao giờ được gửi đi, không có bản sao nào để lưu, rò rỉ hay dùng để huấn luyện mô hình.' },
        { title: 'Chạy được khi ngắt mạng', text: 'Tải trang xong, tắt Wi-Fi rồi làm sạch thử một tệp — công cụ vẫn chạy. Thẻ Network trong DevTools cũng sẽ không thấy dữ liệu ảnh nào.' },
        { title: 'Không tài khoản, không theo dõi', text: 'Không đăng ký, không công cụ phân tích, quảng cáo hay pixel của bên thứ ba. Trang chỉ nhớ ngôn ngữ và giao diện bạn chọn.' },
      ],
    },
    faq: [
      { q: 'EXIF khác gì metadata?', a: 'EXIF là một loại metadata — loại do máy ảnh và điện thoại ghi vào. “Metadata” là khái niệm rộng hơn, gồm cả XMP, IPTC, C2PA và các chunk văn bản của PNG. Xem [EXIF là gì](what-is-exif-data).' },
      { q: 'Metadata có cho biết ảnh được chụp ở đâu không?', a: 'Có, nếu ảnh có thẻ GPS. Điện thoại thường ghi vĩ độ, kinh độ và độ cao khi bật định vị cho máy ảnh. Công cụ [xóa EXIF](remove-exif-data) gỡ các thẻ này mà vẫn giữ nguyên chất lượng ảnh.' },
      { q: 'Làm sao xóa metadata AI khỏi ảnh?', a: 'Thả ảnh vào khung ở đầu trang rồi bấm “Làm sạch tất cả”, hoặc dùng trang chuyên biệt [xóa metadata AI](ai-tag-cleaner) để xem trước C2PA, IPTC và prompt có trong tệp.' },
      { q: 'Tải ảnh lên đây có an toàn không?', a: 'Ảnh không hề được tải lên. AI Label Remover mở tệp ngay trong trình duyệt, xử lý trong bộ nhớ của thẻ và ghi tệp sạch thẳng vào máy bạn. Sau khi trang tải xong, bạn có thể tắt mạng mà công cụ vẫn chạy.' },
    ],
  },
  labels: {
    tools: 'Công cụ metadata khác',
    relatedTools: 'Công cụ chuyên dụng cho việc này',
    homeTitle: 'Công cụ theo nhu cầu',
    homeLead: 'Mỗi trang tập trung vào một việc, có sẵn công cụ làm sạch ngay đầu trang.',
    formats: 'Phần bị xóa và phần được giữ',
    contact: 'Liên hệ',
    contactText: 'Có câu hỏi, gặp lỗi hoặc có tệp không làm sạch đúng? Hãy viết cho',
    updated: 'Cập nhật {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI Tag Cleaner – Xóa tag AI khỏi metadata ảnh',
      description: 'AI Tag Cleaner xóa tag AI khỏi ảnh: thẻ IPTC “tạo bằng AI”, C2PA, tên công cụ AI trong XMP và prompt. Không giảm chất lượng, miễn phí, không tải ảnh lên.',
      navLabel: 'Xóa tag AI',
      h1: 'AI Tag Cleaner — xóa tag AI khỏi ảnh',
      lead: 'Công cụ tạo ảnh AI và trình chỉnh sửa có AI đều gắn tag vào tệp: loại nguồn “tạo bằng AI”, bản ghi C2PA có chữ ký, tên ứng dụng, đôi khi cả prompt. Thả ảnh vào bên dưới để xem mọi tag AI trong tệp, rồi xóa sạch mà không mã hóa lại điểm ảnh nào.',
      sections: [
        {
          heading: 'Thế nào là tag AI',
          paragraphs: [
            'Tag AI là bất kỳ trường nào trong tệp cho biết, hoặc gợi ý, rằng ảnh có dùng AI. Chúng nằm rải rác trong nhiều chuẩn metadata cùng lúc, nên xóa tay một trường hiếm khi đủ:',
          ],
          bullets: [
            'Giá trị [DigitalSourceType](iptc-digitalsourcetype-ai) trong IPTC và XMP như trainedAlgorithmicMedia hoặc compositeWithTrainedAlgorithmicMedia.',
            'Các thao tác đánh dấu bước tạo bằng AI trong [C2PA Content Credentials](what-is-c2pa-content-credentials), do ChatGPT, Firefly, Photoshop và nhiều ứng dụng khác ghi vào.',
            'Trường Software và CreatorTool ghi tên công cụ AI, cùng lịch sử chỉnh sửa XMP từ các thao tác AI.',
            'Prompt, seed và tên model trong chunk PNG của [Stable Diffusion và ComfyUI](remove-stable-diffusion-comfyui-metadata).',
          ],
        },
        {
          heading: 'AI Tag Cleaner hoạt động thế nào',
          paragraphs: [
            'AI Label Remover đọc trực tiếp cấu trúc tệp ngay trong trình duyệt. Mỗi tag AI được liệt kê kèm đúng trường chứa nó, và tệp được kết luận “Có dấu vết AI”, “Nên xem kỹ” hoặc “Không có dấu vết AI” trước khi bất cứ thứ gì bị thay đổi.',
            'Bấm “Làm sạch tất cả” sẽ cắt bỏ các khối chứa tag: XMP, IPTC, EXIF, kho manifest C2PA và chunk văn bản PNG. Dữ liệu ảnh nén được chép nguyên từng byte, và bản sạch được đọc lại để bạn thấy không còn tag AI nào.',
          ],
        },
        {
          heading: 'Công cụ nào để lại tag nào',
          paragraphs: [
            'Ảnh ChatGPT và Gemini có bản ghi C2PA; Firefly và Generative Fill của Photoshop thêm C2PA và DigitalSourceType; Midjourney ghi XMP mô tả; các giao diện Stable Diffusion lưu toàn bộ thông số tạo ảnh trong PNG. Bài [metadata mà công cụ tạo ảnh AI thêm vào](what-metadata-ai-image-generators-add) đi qua từng công cụ.',
          ],
        },
        {
          heading: 'Những gì xóa tag AI không làm được',
          paragraphs: [
            'Việc làm sạch chỉ tác động lên metadata. [Watermark ẩn như SynthID](synthid-invisible-ai-watermarks) nằm trong điểm ảnh nên vẫn còn, và nền tảng có thể dùng bộ phân loại riêng. Xóa tag AI nhằm bảo vệ quyền riêng tư và sửa nhãn gắn nhầm cho ảnh thật — nếu ảnh do AI tạo và trông như thật, quy định của nền tảng thường vẫn yêu cầu bạn công khai.',
          ],
        },
      ],
      faqHeading: 'Câu hỏi về xóa tag AI',
      faq: [
        { q: 'Tag AI và nhãn AI có giống nhau không?', a: 'Không hẳn. Tag là dữ liệu trong tệp; nhãn là thứ nền tảng hiển thị, như “Thông tin AI” trên Instagram. Nền tảng thường tạo nhãn từ tag. Để tránh chuyện này với ảnh thật, xem [No AI Tag](no-ai-tag).' },
        { q: 'Có thể chỉ xóa tag AI và giữ phần còn lại không?', a: 'Công cụ xóa cả khối metadata thay vì từng trường, vì tag AI nằm rải rác ở nhiều khối. Hướng xoay, hồ sơ màu ICC và kích thước điểm ảnh luôn được giữ, nên ảnh hiển thị y như trước.' },
        { q: 'Xóa tag AI có làm giảm chất lượng ảnh không?', a: 'Không. Ảnh không bị mã hóa lại; chỉ metadata bị xóa. Xem [vì sao xóa không giảm chất lượng](remove-metadata-without-losing-quality).' },
        { q: 'Hỗ trợ những định dạng nào?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF và AVIF — tối đa 50 tệp một lần, mỗi tệp đến 25 MB. Prompt trong PNG cũng có thể xử lý bằng [công cụ xóa metadata PNG](png-metadata-remover).' },
        { q: 'Có xóa được metadata trong ảnh ChatGPT hay Gemini không?', a: 'Có, công cụ xóa Content Credentials C2PA và các trường IPTC mà các dịch vụ này ghi vào. Google còn nhúng thủy vân SynthID trong điểm ảnh, thứ không công cụ metadata nào xóa được. Chi tiết trong [metadata ảnh ChatGPT và Gemini](chatgpt-gemini-image-metadata).' },
        { q: 'Tôi có xem được prompt trước khi xóa không?', a: 'Có. Thẻ “Metadata thô” in nguyên văn prompt, workflow và tên công cụ, nên bạn có thể chép lại những gì muốn giữ trước khi làm sạch.' },
      ],
      related: ['iptc-digitalsourcetype-ai', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
      updated: '2026-11-05',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – Đăng ảnh thật không bị gắn nhãn AI',
      description: 'Ảnh thật bị gắn nhãn “Thông tin AI”? Xóa dữ liệu C2PA và IPTC gây ra nhãn để đăng ảnh No AI Tag. Không giảm chất lượng, miễn phí, ngay trong trình duyệt.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag — ảnh thật không bị gắn tag AI',
      lead: 'Chỉ một chỉnh sửa nhỏ bằng tính năng AI trong Photoshop hay ứng dụng điện thoại cũng đủ để Instagram, Facebook hoặc Threads gắn nhãn “Thông tin AI” cho ảnh thật. Thả tệp vào bên dưới để xem dữ liệu nào gây ra nhãn, rồi chia sẻ bản sạch không còn tag AI trong metadata.',
      sections: [
        {
          heading: 'Vì sao ảnh thật bị gắn tag AI',
          paragraphs: [
            'Nền tảng đọc dữ liệu nguồn gốc mà trình chỉnh sửa gắn vào tệp. Bài [vì sao ảnh thật bị gắn nhãn “Thông tin AI”](made-with-ai-label) giải thích chi tiết; nguyên nhân thường gặp là:',
          ],
          bullets: [
            'Manifest C2PA ghi lại một bước dùng AI tạo sinh như Generative Fill, xóa vật thể bằng AI hay mở rộng ảnh bằng AI.',
            'Giá trị [DigitalSourceType](iptc-digitalsourcetype-ai) trong IPTC hoặc XMP cho biết ảnh được ghép với nội dung AI.',
            'Content Credentials mà ứng dụng chỉnh sửa tự thêm khi xuất ảnh.',
          ],
        },
        {
          heading: 'Cách đăng ảnh không bị tag AI',
          paragraphs: ['Chưa tới một phút và không có gì rời khỏi thiết bị của bạn:'],
          bullets: [
            'Thả ảnh đã chỉnh vào ô ở đầu trang này.',
            'Đọc kết luận và các trường liên quan — báo cáo nêu đúng thao tác C2PA hoặc giá trị IPTC gây ra nhãn.',
            'Bấm “Làm sạch tất cả” và lưu bản sạch.',
            'Đăng bản sạch, không đăng tệp xuất gốc.',
          ],
        },
        {
          heading: 'Chặn tag AI ngay từ đầu',
          paragraphs: [
            'Nếu thường xuyên chỉnh ảnh, hãy [tắt Content Credentials trong Photoshop và Lightroom](turn-off-content-credentials-photoshop-lightroom) để chúng không được ghi vào. Bài [nền tảng nào gắn nhãn ảnh AI](which-platforms-label-ai-images) liệt kê dữ liệu mà Meta, TikTok, YouTube và các nền tảng khác đọc.',
          ],
        },
        {
          heading: '“No AI Tag” làm được gì và không làm được gì',
          paragraphs: [
            'Xóa metadata loại bỏ nguyên nhân nằm trong tệp, cũng là nguyên nhân với phần lớn ảnh đã chỉnh. Nó không xóa được [watermark trong điểm ảnh như SynthID](synthid-invisible-ai-watermarks), và nền tảng vẫn có thể gắn nhãn dựa trên công cụ nhận diện riêng hoặc yêu cầu bạn tự khai báo. Trang này dành cho ảnh thật chỉnh sửa nhẹ: nếu ảnh do AI tạo và có thể gây hiểu lầm, hãy công khai điều đó.',
          ],
        },
      ],
      faqHeading: 'Câu hỏi về No AI Tag',
      faq: [
        { q: 'Có gỡ được nhãn “Thông tin AI” trên bài đã đăng không?', a: 'Không. Nhãn gắn với bài đăng trên nền tảng. Hãy xóa hoặc lưu trữ bài, làm sạch tệp tại đây rồi đăng lại bản sạch.' },
        { q: 'Có chắc chắn không bị gắn tag AI không?', a: 'Không có gì chắc chắn. Công cụ xóa metadata mà nền tảng đọc, nhưng họ còn có tín hiệu khác. Với phần lớn ảnh đã chỉnh, metadata chính là lý do bị gắn nhãn.' },
        { q: 'Có dùng được cho ảnh iPhone và Android không?', a: 'Có. Ảnh HEIC của iPhone và JPG của Android được làm sạch giữ nguyên định dạng, không chuyển đổi. Ngoài ra còn có [công cụ xóa metadata HEIC](heic-metadata-remover) riêng.' },
        { q: 'Còn tag AI trên ảnh hoàn toàn do AI tạo thì sao?', a: '[AI Tag Cleaner](ai-tag-cleaner) hiển thị và xóa được, nhưng quy định của nền tảng thường vẫn yêu cầu bạn tự gắn nhãn cho ảnh AI trông như thật.' },
      ],
      related: ['made-with-ai-label', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
      updated: '2026-11-05',
    },
    'remove-exif-data': {
      metaTitle: 'Xóa thông tin ảnh (EXIF) online – miễn phí, riêng tư',
      description: 'Xóa thông tin ảnh (EXIF) — GPS, máy chụp, số sê-ri, ngày giờ — khỏi JPG, HEIC, PNG, WebP ngay trong trình duyệt. Không tải lên, không giảm chất lượng.',
      navLabel: 'Xóa EXIF',
      h1: 'Xóa dữ liệu EXIF khỏi ảnh',
      lead: 'Thả ảnh vào bên dưới để xem mọi trường EXIF bên trong — vị trí GPS, máy ảnh và ống kính, số sê-ri, thời điểm chụp — rồi xóa sạch chỉ với một cú bấm. Mọi thứ chạy trên thiết bị của bạn; tệp không bao giờ bị tải lên.',
      sections: [
        {
          heading: 'Dữ liệu EXIF tiết lộ những gì',
          paragraphs: [
            'EXIF là khối ghi chú kỹ thuật mà máy ảnh hay điện thoại ghi vào từng tấm ảnh. Riêng lẻ thì phần lớn vô hại, nhưng gộp lại có thể nói khá nhiều về bạn. [Bài giải thích về EXIF](what-is-exif-data) đi qua từng thẻ phổ biến; đây là những thẻ quan trọng với quyền riêng tư:',
          ],
          bullets: [
            'Vĩ độ, kinh độ và độ cao GPS — thường chính xác tới vài mét, đủ để tìm ra nhà bạn.',
            'Ngày giờ chụp, kèm múi giờ.',
            'Hãng và đời máy ảnh hoặc điện thoại, ống kính, và ở nhiều máy còn có số sê-ri thân máy giúp nối các ảnh với nhau.',
            'Tên chủ sở hữu hoặc tác giả, cùng phần mềm chỉnh sửa tệp gần nhất.',
            'Ảnh thu nhỏ nhúng kèm, vẫn có thể hiện ảnh gốc dù bạn đã cắt ảnh.',
          ],
        },
        {
          heading: 'Công cụ xóa EXIF này hoạt động thế nào',
          paragraphs: [
            'AI Label Remover đọc thẳng cấu trúc tệp. Với JPEG, nó cắt bỏ phân đoạn APP1 chứa EXIF và XMP, cùng IPTC, chú thích và ảnh thu nhỏ nhúng kèm; với HEIC, PNG và WebP, nó gỡ các box hoặc chunk tương ứng. Dữ liệu ảnh đã nén được chép nguyên từng byte, nên không có gì bị mã hóa lại và ảnh trông y hệt.',
            'Các trường quyết định cách ảnh hiển thị được cố ý giữ lại: hướng xoay, hồ sơ màu ICC và kích thước điểm ảnh. Nhờ vậy ảnh không bị xoay ngang hay bạc màu như khi dùng các công cụ thô sơ. Xong việc, tệp đã làm sạch được đọc lại để bạn thấy các trường EXIF thật sự đã biến mất.',
          ],
        },
        {
          heading: 'Khi nào nên xóa EXIF trước khi chia sẻ',
          paragraphs: [
            'Nhiều mạng xã hội lớn tự xóa EXIF khi tải lên, nhưng không ít nơi thì không: tệp đính kèm email, liên kết ổ đĩa đám mây, diễn đàn, chợ mua bán, ứng dụng chat gửi ảnh “chất lượng gốc” và chính trang web của bạn. [Nền tảng nào xóa metadata](which-platforms-strip-photo-metadata) liệt kê các nơi phổ biến. Nếu không chắc ảnh sẽ đi đâu, làm sạch trước là lựa chọn an toàn.',
            'Bán đồ online, đăng ảnh chụp tại nhà hay gửi ảnh cho người mới quen là những trường hợp điển hình mà [dữ liệu GPS có thể làm lộ vị trí](remove-gps-location-from-photos).',
          ],
        },
        {
          heading: 'Riêng tư ngay từ thiết kế',
          paragraphs: [
            'Các trang xóa EXIF online thường tải ảnh của bạn lên máy chủ, xử lý ở đó rồi gửi trả. AI Label Remover làm toàn bộ việc này trong Web Worker ngay trong thẻ trình duyệt: khi trang đã tải xong, bạn thậm chí có thể ngắt mạng mà nó vẫn chạy. Không tài khoản, không watermark, giới hạn duy nhất là 25 MB và 40 megapixel mỗi tệp.',
          ],
        },
      ],
      faqHeading: 'Hỏi đáp về xóa EXIF',
      faq: [
        { q: 'Xóa EXIF có làm giảm chất lượng ảnh không?', a: 'Không. Chỉ các khối metadata bị cắt bỏ; dữ liệu ảnh đã nén được chép nguyên, nên độ phân giải, độ nét và màu sắc giữ nguyên. Xem [vì sao lưu lại ảnh làm giảm chất lượng](remove-metadata-without-losing-quality).' },
        { q: 'Ảnh có còn đúng chiều không?', a: 'Có. Giá trị hướng xoay được giữ để ảnh hiển thị như trước, cùng với hồ sơ màu ICC.' },
        { q: 'Có xóa được EXIF trong ảnh HEIC của iPhone không?', a: 'Có. Tệp HEIC và HEIF được hỗ trợ trực tiếp, không cần chuyển sang JPEG trước. Ngoài ra còn có trang [xóa metadata HEIC](heic-metadata-remover) riêng.' },
        { q: 'Làm sao kiểm tra EXIF đã bị xóa?', a: 'Sau khi làm sạch, AI Label Remover đọc lại tệp mới và cho thấy trường nào còn lại. Bạn cũng có thể mở tệp bằng [trình xem metadata online](image-metadata-viewer-online) bất kỳ hoặc xem thuộc tính tệp trong hệ điều hành.' },
        { q: 'Có cách nào không cần trang web không?', a: 'Có — Windows, macOS và điện thoại đều có tùy chọn sẵn, mỗi cách có giới hạn riêng. [Xóa metadata trên Windows và Mac](remove-metadata-windows-mac) và [trên iPhone, Android](view-remove-metadata-iphone-android) so sánh các cách này.' },
      ],
      related: ['what-is-exif-data', 'remove-gps-location-from-photos', 'which-platforms-strip-photo-metadata'],
      updated: '2026-10-23',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: 'Xóa Content Credentials C2PA khỏi ảnh, miễn phí',
      description: 'Xem và xóa Content Credentials C2PA (manifest JUMBF) khỏi ảnh JPG, PNG, HEIC, WebP, AVIF — không giảm chất lượng, không tải tệp lên bất kỳ đâu.',
      navLabel: 'Xóa C2PA',
      h1: 'Xóa Content Credentials C2PA',
      lead: 'Content Credentials là lịch sử có chữ ký gắn vào ảnh: ứng dụng nào tạo ra, những lần chỉnh sửa tiếp theo và có dùng AI tạo sinh hay không. Thả tệp vào bên dưới để đọc manifest C2PA, rồi xóa toàn bộ kho manifest mà không giảm chất lượng.',
      sections: [
        {
          heading: 'Manifest C2PA chứa gì',
          paragraphs: [
            'C2PA (Liên minh về Nguồn gốc và Tính xác thực của Nội dung) định nghĩa cách nhúng một hồ sơ có chữ ký số vào tệp. [Giải thích về C2PA](what-is-c2pa-content-credentials) đi sâu hơn; trên thực tế một manifest thường gồm:',
          ],
          bullets: [
            'Claim generator — ứng dụng hoặc dịch vụ đã ký, như Photoshop, Firefly, ChatGPT hay một máy ảnh.',
            'Danh sách thao tác: tạo, mở, chỉnh sửa, cắt, và dấu đánh dấu các bước dùng AI tạo sinh.',
            'Nguyên liệu (ingredients) — các phiên bản trước hoặc ảnh nguồn đã dùng để tạo tệp.',
            'Loại nguồn số (digital source type) cho biết nội dung được chụp, ghép hay do AI tạo.',
            'Chữ ký và chứng chỉ gắn hồ sơ với đúng dữ liệu ảnh.',
          ],
        },
        {
          heading: 'C2PA nằm ở đâu trong từng loại tệp',
          paragraphs: [
            'Trong JPEG, kho manifest nằm ở các phân đoạn APP11 dưới dạng box JUMBF; trong PNG là chunk caBX; trong HEIC và AVIF là box uuid; trong WebP là một chunk RIFF riêng. AI Label Remover tìm từng vị trí này, hiển thị các khai báo bên trong và xóa toàn bộ kho trong khi chép nguyên dữ liệu ảnh.',
            'Vì chữ ký gắn manifest với đúng từng byte, bất kỳ lần lưu lại nào bằng ứng dụng khác thường cũng làm hỏng hoặc mất nó. Xóa gọn gàng giúp tránh để lại một hồ sơ hỏng, nửa hợp lệ.',
          ],
        },
        {
          heading: 'Lý do nên giữ, lý do nên xóa',
          paragraphs: [
            'Content Credentials có giá trị: chúng giúp tòa soạn và người sáng tạo chứng minh nguồn gốc ảnh. Nếu đó là mục tiêu của bạn, hãy giữ lại — và dù thế nào cũng nên giữ tệp gốc, vì metadata đã xóa không khôi phục được.',
            'Nên xóa khi hồ sơ tiết lộ nhiều hơn bạn muốn (tên, lịch sử chỉnh sửa, ảnh nguồn), hoặc khi trình chỉnh sửa gắn dấu AI vào ảnh thật chỉ sau một chỉnh sửa nhỏ. Bạn cũng có thể [tắt Content Credentials trong Photoshop và Lightroom](turn-off-content-credentials-photoshop-lightroom) để chúng không được ghi ngay từ đầu.',
          ],
        },
      ],
      faqHeading: 'Hỏi đáp về C2PA',
      faq: [
        { q: 'AI Label Remover có xác minh chữ ký C2PA không?', a: 'Không. Công cụ đọc và hiển thị nội dung manifest nhưng không kiểm tra chuỗi chứng chỉ. Hãy dùng công cụ xác minh Content Credentials chính thức nếu cần kiểm tra chữ ký.' },
        { q: 'Xóa Content Credentials có hợp pháp không?', a: 'Xóa metadata khỏi tệp bạn sở hữu hoặc được phép chỉnh sửa nhìn chung không có vấn đề, nhưng đừng dùng để nói sai về người tạo ra ảnh hay cách ảnh được tạo. Đây là thông tin chung, không phải tư vấn pháp lý.' },
        { q: 'Vì sao ảnh của tôi hiện “Nên xem kỹ”?', a: 'Tệp có manifest C2PA nhưng không nói rõ là dùng AI. Một số nền tảng coi mọi manifest là một dấu hiệu, nên hãy xem các thao tác được liệt kê trước khi quyết định.' },
        { q: 'Nền tảng có còn biết ảnh đã bị chỉnh sửa không?', a: 'Không thể biết qua manifest đã xóa. Nền tảng vẫn có thể dùng tín hiệu khác, và [thủy vân vô hình](synthid-invisible-ai-watermarks) không bị ảnh hưởng khi xóa metadata.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'turn-off-content-credentials-photoshop-lightroom', 'iptc-digitalsourcetype-ai'],
      updated: '2026-10-23',
    },
    'heic-metadata-remover': {
      metaTitle: 'Xóa metadata HEIC – gỡ EXIF, GPS ảnh iPhone',
      description: 'Xóa EXIF, vị trí GPS và dấu thời gian khỏi ảnh HEIC, HEIF của iPhone mà không cần chuyển sang JPEG. Không giảm chất lượng, chạy trong trình duyệt.',
      navLabel: 'Xóa metadata HEIC',
      h1: 'Xóa metadata HEIC cho ảnh iPhone',
      lead: 'iPhone lưu ảnh dưới dạng HEIC, và mỗi tấm đều ghi lại nơi và lúc chụp. Thả tệp HEIC hoặc HEIF vào bên dưới để xem metadata và xóa đi — ảnh vẫn là HEIC, không chuyển đổi, không giảm chất lượng.',
      sections: [
        {
          heading: 'Một tấm ảnh HEIC của iPhone ghi lại những gì',
          paragraphs: ['Một tấm ảnh iPhone thông thường mang theo nhiều hơn bạn nghĩ:'],
          bullets: [
            'Tọa độ GPS chính xác, độ cao và hướng máy ảnh lúc chụp.',
            'Ngày, giờ, múi giờ lúc chụp, cùng ngày sửa đổi.',
            'Đời máy, ống kính, thông số chụp và phiên bản iOS.',
            'Dữ liệu riêng của Apple như mã ghép cặp Live Photo.',
            'Dữ liệu XMP do ứng dụng chỉnh sửa ghi vào, đôi khi có cả hồ sơ C2PA.',
          ],
        },
        {
          heading: 'Xóa metadata mà không chuyển sang JPEG',
          paragraphs: [
            'Lời khuyên thường gặp là chuyển HEIC sang JPEG và hy vọng metadata không còn. Cách đó mã hóa lại ảnh, giảm chất lượng và thường làm mất hồ sơ màu dải rộng. AI Label Remover thì sửa trực tiếp vỏ chứa HEIC: xóa các mục Exif và XMP, box uuid chứa C2PA và các box dấu thời gian, đồng thời giữ nguyên dữ liệu ảnh HEVC, hướng xoay (irot/imir) và hồ sơ màu (colr).',
            'Cùng bộ xử lý này làm việc với AVIF, vốn dùng chung định dạng vỏ ISOBMFF, nên ảnh AVIF xuất từ các ứng dụng hiện đại cũng được làm sạch theo cách tương tự.',
          ],
        },
        {
          heading: 'Cài đặt iPhone hay làm sạch tệp',
          paragraphs: [
            'iOS cho phép tắt vị trí cho từng lần chia sẻ qua nút “Tùy chọn” trên bảng chia sẻ, và ứng dụng Ảnh có thể chỉnh hoặc xóa vị trí từng tấm. Các cách này ổn cho chia sẻ lẻ nhưng dễ quên, và không xóa các trường khác. [Xem và xóa metadata trên iPhone, Android](view-remove-metadata-iphone-android) so sánh các tùy chọn có sẵn.',
            'Với cả loạt ảnh — một thư mục ảnh du lịch, ảnh sản phẩm hay ảnh đăng bán — thả vào AI Label Remover rồi lưu một tệp ZIP nhanh hơn, và báo cáo trước/sau cho thấy chính xác những gì đã bị xóa.',
          ],
        },
      ],
      faqHeading: 'Hỏi đáp về HEIC',
      faq: [
        { q: 'Có dùng được trên Windows, nơi đôi khi không mở được HEIC không?', a: 'Có. AI Label Remover tự đọc cấu trúc HEIC nên không cần cài codec HEIC. Tệp HEIC hiện nhãn định dạng thay cho ảnh xem trước, nhưng việc đọc và làm sạch vẫn bình thường.' },
        { q: 'Tệp đã làm sạch có mở được trong ứng dụng Ảnh không?', a: 'Có. Kết quả là tệp HEIC chuẩn với cùng dữ liệu ảnh; chỉ các mục metadata bị xóa.' },
        { q: 'Có hỗ trợ Live Photo không?', a: 'AI Label Remover xử lý ảnh tĩnh HEIC. Tệp video đi kèm của Live Photo là tệp riêng và không bị thay đổi.' },
        { q: 'Có giới hạn dung lượng tệp không?', a: 'Mỗi tệp tối đa 25 MB và 40 megapixel, đủ cho ảnh từ mọi đời iPhone hiện nay, và bạn có thể làm sạch 50 tệp một lượt.' },
      ],
      related: ['view-remove-metadata-iphone-android', 'remove-gps-location-from-photos', 'batch-remove-metadata'],
      updated: '2026-10-23',
    },
    'png-metadata-remover': {
      metaTitle: 'Xóa metadata PNG – gỡ prompt và chunk văn bản',
      description: 'Xóa metadata PNG — chunk tEXt, iTXt, zTXt chứa prompt Stable Diffusion, ComfyUI, cùng XMP, eXIf và C2PA — mà ảnh vẫn giữ nguyên chất lượng.',
      navLabel: 'Xóa metadata PNG',
      h1: 'Xóa metadata PNG',
      lead: 'Tệp PNG giấu metadata trong các chunk văn bản: prompt và workflow AI, tên tác giả, phần mềm và dấu thời gian. Thả PNG vào bên dưới để đọc từng chunk, rồi xóa đi trong khi dữ liệu ảnh vẫn giống hệt từng bit.',
      sections: [
        {
          heading: 'PNG lưu metadata ở đâu',
          paragraphs: ['PNG là một chuỗi các chunk. Ảnh nằm ở IHDR, PLTE và IDAT; mọi thứ khác là tùy chọn. Các chunk AI Label Remover xóa gồm:'],
          bullets: [
            'tEXt, zTXt và iTXt — văn bản tự do, văn bản nén và văn bản quốc tế. Stable Diffusion WebUI ghi chunk “parameters” ở đây; ComfyUI ghi JSON “prompt” và “workflow”.',
            'Gói XMP lưu trong iTXt, gồm cả IPTC và khai báo nguồn AI.',
            'eXIf — dữ liệu EXIF, kể cả GPS khi ứng dụng sao chép từ ảnh chụp.',
            'caBX — Content Credentials C2PA.',
            'tIME (thời điểm sửa gần nhất) và dSIG (chữ ký số).',
          ],
        },
        {
          heading: 'Những gì được giữ để ảnh trông y hệt',
          paragraphs: [
            'Độ trong suốt (tRNS), gamma và sắc độ (gAMA, cHRM), cờ sRGB và hồ sơ ICC nhúng (iCCP) đều ảnh hưởng tới cách ảnh hiển thị, nên được giữ lại. PNG động giữ các chunk acTL, fcTL và fdAT, nên ảnh APNG vẫn chuyển động.',
            'Vì dữ liệu IDAT được chép chứ không nén lại, tệp đã làm sạch giống hệt ảnh gốc tới từng điểm ảnh — thường nhẹ hơn một chút vì các chunk văn bản đã bị bỏ.',
          ],
        },
        {
          heading: 'Bảo vệ prompt và workflow AI',
          paragraphs: [
            'Nếu bạn chia sẻ ảnh tạo bằng Stable Diffusion, Forge hay ComfyUI, bất kỳ ai cũng có thể kéo tệp PNG trở lại đúng công cụ đó và lấy lại chính xác prompt, seed, model và sơ đồ node của bạn. [Stable Diffusion và ComfyUI giấu prompt trong PNG thế nào](remove-stable-diffusion-comfyui-metadata) cho thấy những gì được lưu. Làm sạch sẽ xóa tất cả, còn thẻ “Metadata thô” cho phép bạn chép prompt ra trước nếu muốn giữ cho riêng mình.',
          ],
        },
      ],
      faqHeading: 'Hỏi đáp về metadata PNG',
      faq: [
        { q: 'Xóa metadata PNG có làm đổi màu không?', a: 'Không. Các chunk liên quan tới màu — sRGB, gAMA, cHRM và iCCP — được giữ, và dữ liệu ảnh IDAT được chép nguyên.' },
        { q: 'Có dùng được với PNG trong suốt không?', a: 'Có. Dữ liệu trong suốt (tRNS hoặc kênh alpha trong IDAT) là một phần của ảnh và không bao giờ bị động tới.' },
        { q: 'Tôi có thể giữ prompt ở đâu đó không?', a: 'Hãy chép từ thẻ “Metadata thô” trước khi làm sạch. Đã xóa rồi thì không khôi phục được metadata từ tệp đã làm sạch.' },
        { q: 'Có dùng được cho PNG từ Midjourney hay DALL·E không?', a: 'Có. Mọi dữ liệu văn bản, XMP hay C2PA mà các dịch vụ này nhúng vào đều được xóa theo cùng cách. Xem [giấu prompt Midjourney và DALL·E](hide-midjourney-dalle-prompts).' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
      updated: '2026-10-23',
    },
  },
  info: {
    about: {
      metaTitle: 'Giới thiệu AI Label Remover – công cụ xóa metadata hoạt động thế nào',
      description: 'Ai làm AI Label Remover, công cụ xóa metadata trong trình duyệt hoạt động ra sao, bài viết được cập nhật thế nào và những gì công cụ không bao giờ làm.',
      navLabel: 'Giới thiệu',
      title: 'Giới thiệu AI Label Remover',
      lead: 'AI Label Remover là công cụ miễn phí để đọc và xóa metadata ẩn trong ảnh — EXIF, GPS, XMP, IPTC, Content Credentials C2PA và prompt AI — được làm ra để tệp của bạn không bao giờ phải rời khỏi thiết bị.',
      sections: [
        {
          heading: 'Vì sao có AI Label Remover',
          paragraphs: [
            'Ảnh chụp và ảnh AI mang theo nhiều thông tin hơn hầu hết mọi người nghĩ: vị trí nhà trong thẻ GPS, số sê-ri thiết bị, cả prompt và workflow, và hồ sơ nguồn gốc mà nền tảng đọc để gắn nhãn. Phần lớn công cụ online lại yêu cầu bạn tải lên chính những tệp bạn đang muốn bảo vệ. AI Label Remover được làm ra để làm cùng việc đó mà không phải đánh đổi như vậy.',
          ],
        },
        {
          heading: 'Công cụ hoạt động thế nào',
          paragraphs: [
            'Khi bạn thêm ảnh, trình duyệt đọc ảnh ngay trên máy. Các Web Worker phân tích cấu trúc tệp — phân đoạn JPEG, chunk PNG, chunk RIFF của WebP, khối GIF và box HEIC/AVIF — rồi liệt kê mọi khối metadata tìm thấy. Làm sạch là xóa các khối đó khỏi chuỗi byte và chép nguyên dữ liệu ảnh đã nén, sau đó đọc lại kết quả để xác nhận những gì còn lại.',
            'Không có xử lý nào ở phía máy chủ. Bản thân trang web là tập hợp các trang tĩnh; khi đã tải xong, công cụ chạy được cả khi không có mạng.',
          ],
        },
        {
          heading: 'Bài viết được viết thế nào',
          paragraphs: [
            'Các bài hướng dẫn trên trang dựa trên tài liệu đặc tả đã công bố (EXIF, XMP, IPTC Photo Metadata, C2PA, định dạng PNG và ISOBMFF), trang trợ giúp của các nền tảng, và việc thử nghiệm tệp thật từ những công cụ được nhắc tới. Mỗi bài ghi ngày sửa gần nhất, và chúng tôi cập nhật khi tiêu chuẩn hoặc chính sách nền tảng thay đổi.',
            'Bài viết là thông tin chung, không phải tư vấn pháp lý. Quy định gắn nhãn AI của các nền tảng thay đổi thường xuyên; hãy xem trang trợ giúp của chính nền tảng trước khi dựa vào bất kỳ nhận định nào.',
          ],
        },
        {
          heading: 'Những gì AI Label Remover không làm',
          paragraphs: [],
          bullets: [
            'Tải lên, lưu trữ hay ghi lại tệp của bạn — không có máy chủ nào có thể nhận chúng.',
            'Thay đổi điểm ảnh, xóa thủy vân vô hình hay logo hiển thị.',
            'Hứa hẹn rằng nền tảng sẽ hay sẽ không gắn nhãn.',
            'Giúp ngụy trang ảnh AI thành ảnh chụp thật. Hãy dùng để bảo vệ quyền riêng tư và sửa sai sót.',
          ],
        },
        {
          heading: 'Độc lập',
          paragraphs: [
            'AI Label Remover là công cụ độc lập, không liên kết với Meta, Google, OpenAI, Adobe, Midjourney, Apple hay C2PA. Tên sản phẩm chỉ được dùng để mô tả khả năng tương thích.',
          ],
        },
      ],
      updated: '2026-10-23',
    },
    privacy: {
      metaTitle: 'Chính sách quyền riêng tư – AI Label Remover',
      description: 'Chính sách quyền riêng tư dễ hiểu: ảnh không rời khỏi thiết bị, không tài khoản, không theo dõi hay quảng cáo, chỉ lưu lựa chọn ngôn ngữ và giao diện.',
      navLabel: 'Quyền riêng tư',
      title: 'Chính sách quyền riêng tư',
      lead: 'AI Label Remover là công cụ để bảo vệ quyền riêng tư, nên dùng nó không được khiến bạn mất đi chút riêng tư nào. Trang này giải thích bằng lời lẽ đơn giản chuyện gì xảy ra với ảnh của bạn và chút ít thông tin mà trang web xử lý.',
      sections: [
        {
          heading: 'Tóm tắt nhanh',
          paragraphs: [],
          bullets: [
            'Ảnh của bạn được xử lý ngay trên thiết bị của bạn và không bao giờ bị tải lên.',
            'Không có tài khoản, không đăng ký, không danh sách email — chúng tôi không biết bạn là ai.',
            'Không có công cụ phân tích, quảng cáo, pixel theo dõi hay mã của bên thứ ba.',
            'Thứ duy nhất được lưu là ngôn ngữ và chế độ sáng/tối bạn chọn, nằm trong trình duyệt của bạn, và bạn có thể xóa bất cứ lúc nào.',
          ],
        },
        {
          heading: 'Chuyện gì xảy ra với ảnh của bạn',
          paragraphs: ['Khi bạn thêm một tấm ảnh vào AI Label Remover, đây là toàn bộ hành trình của nó:'],
          bullets: [
            'Trình duyệt mở tệp từ thiết bị của bạn và giữ trong bộ nhớ của thẻ đang mở.',
            'Các Web Worker trong thẻ đọc metadata và, khi bạn bấm làm sạch, tạo ra một bản sạch — vẫn chỉ nằm trong bộ nhớ.',
            'Khi bạn bấm lưu, trình duyệt ghi tệp sạch hoặc tệp ZIP thẳng vào thiết bị của bạn.',
            'Khi bạn đóng hoặc tải lại thẻ, ảnh và báo cáo biến mất. Không có gì được giữ trên máy chủ, vì không máy chủ nào nhận được chúng.',
          ],
        },
        {
          heading: 'Bạn có thể tự kiểm chứng',
          paragraphs: [
            'Bạn không cần tin lời chúng tôi. Hãy mở trang, tắt Wi-Fi hoặc dữ liệu di động, rồi làm sạch một tệp: công cụ vẫn chạy, vì không có gì cần gửi đi. Nếu quen dùng công cụ dành cho nhà phát triển, hãy mở thẻ Network trong lúc làm sạch, bạn sẽ thấy không có dữ liệu ảnh nào rời khỏi thiết bị.',
          ],
        },
        {
          heading: 'Những gì chúng tôi không thu thập',
          paragraphs: ['AI Label Remover không thu thập hay lưu trữ:'],
          bullets: [
            'ảnh của bạn, metadata trong ảnh hay các báo cáo hiển thị trên màn hình;',
            'tên, địa chỉ email hay bất kỳ thông tin tài khoản nào;',
            'vị trí của bạn — tọa độ GPS tìm thấy trong ảnh chỉ hiện cho riêng bạn, trên màn hình của bạn;',
            'lịch sử các tệp bạn đã kiểm tra hay cách bạn sử dụng công cụ.',
          ],
        },
        {
          heading: 'Những gì trang web ghi nhớ và cách xóa',
          paragraphs: ['Để lần sau bạn không phải chọn lại, trang web ghi nhớ hai điều nhỏ ngay trên máy tính hoặc điện thoại của bạn:'],
          bullets: [
            'Ngôn ngữ bạn chọn — để lần sau trang mở sẵn bằng ngôn ngữ đó. Trang chỉ nhớ đúng ngôn ngữ (ví dụ: tiếng Việt), không kèm bất kỳ thông tin nào khác về bạn.',
            'Chế độ sáng hoặc tối — nếu bạn đã tự chọn một trong hai.',
            'Muốn trang quên những điều này, hãy vào phần cài đặt của trình duyệt và xóa dữ liệu đã lưu của trang AI Label Remover. Trang vẫn dùng bình thường, chỉ là bạn sẽ phải chọn lại ngôn ngữ và giao diện.',
          ],
        },
        {
          heading: 'Khi bạn truy cập trang web',
          paragraphs: [
            'Giống như mọi trang web, mỗi lần bạn mở một trang, máy chủ của chúng tôi cần nhận vài thông tin kỹ thuật cơ bản để gửi trang về cho bạn: địa chỉ mạng của thiết bị (địa chỉ IP), loại trình duyệt bạn dùng và trang bạn đang mở. Những thông tin này có thể được ghi lại tạm thời để giữ trang hoạt động ổn định và ngăn truy cập phá hoại, và chỉ được giữ trong thời gian cần cho việc đó. Chúng tôi không dùng chúng để nhận diện bạn, không lập hồ sơ về bạn và không chia sẻ hay bán cho bất kỳ ai.',
            'Khi bạn mở trang chủ, máy chủ xem ngôn ngữ cài đặt trên trình duyệt, ngôn ngữ bạn đã chọn trước đó và quốc gia bạn đang truy cập, chỉ để mở sẵn phiên bản ngôn ngữ phù hợp. Việc này diễn ra ngay lúc đó và không được lưu lại.',
          ],
        },
        {
          heading: 'Trẻ em',
          paragraphs: [
            'AI Label Remover không yêu cầu hay thu thập thông tin cá nhân của bất kỳ ai, kể cả trẻ em. Người dùng nhỏ tuổi có thể dùng công cụ mà không cần tạo tài khoản hay cung cấp bất kỳ thông tin nào về bản thân.',
          ],
        },
        {
          heading: 'Quyền của bạn',
          paragraphs: [
            'Vì AI Label Remover không thu thập tên, email hay tài khoản nào của bạn, chúng tôi không có hồ sơ nào về bạn để cung cấp, chỉnh sửa hay xóa. Những điều trang ghi nhớ trên thiết bị luôn nằm trong tầm kiểm soát của bạn. Các thông tin kỹ thuật ghi tạm khi bạn truy cập không gắn với tên hay tài khoản nào và sẽ được xóa khi không còn cần cho việc vận hành.',
          ],
        },
        {
          heading: 'Thay đổi chính sách',
          paragraphs: ['Nếu cách AI Label Remover xử lý dữ liệu có thay đổi, chúng tôi sẽ cập nhật trang này và ngày ở đầu trang.'],
        },
      ],
      updated: '2026-10-23',
    },
  },
};

export default vi;
