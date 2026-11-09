import type { Articles } from './types';

const vi: Articles = {
  'best-ai-metadata-removers-2026': {
      "title": "Top công cụ xóa metadata và nhãn AI tốt nhất năm 2026",
      "metaTitle": "Top công cụ xóa metadata và nhãn AI tốt nhất 2026",
      "summary": [
          "Khi các nhãn AI tạo sinh, manifest C2PA và cờ IPTC trở thành tiêu chuẩn trên các ứng dụng chỉnh sửa và mạng xã hội năm 2026, việc chọn đúng công cụ làm sạch metadata là vô cùng quan trọng.",
          "Bài viết so sánh các công cụ ngoại tuyến như ExifTool, trình chỉnh sửa đồ họa và các giải pháp chạy trực tiếp trong trình duyệt để giúp bạn bảo vệ quyền riêng tư và sở hữu bức ảnh sạch hoàn toàn."
      ],
      "description": "So sánh các công cụ xóa metadata tốt nhất 2026. Tìm hiểu cách AI Label Remover, AI Tag Cleaner và No AI Tag làm sạch nhãn AI và EXIF mà không nén lại ảnh.",
      "related": [
          "how-to-get-no-ai-tag",
          "made-with-ai-label",
          "what-is-c2pa-content-credentials"
      ],
      "sections": [
          {
              "heading": "Vì sao các công cụ xóa metadata truyền thống bất lực trước nhãn AI 2026",
              "paragraphs": [
                  "Trước đây, xóa metadata chỉ đơn giản là chạy một công cụ xóa EXIF để loại bỏ thông số máy ảnh và tọa độ GPS. Tuy nhiên năm 2026, các tệp ảnh mang cấu trúc phức tạp hơn nhiều: [manifest Content Credentials C2PA](what-is-c2pa-content-credentials), [thuộc tính IPTC DigitalSourceType](iptc-digitalsourcetype-ai), và các prompt tạo ảnh ẩn từ Midjourney hay ComfyUI.",
                  "Nhiều phần mềm cũ chỉ xóa được EXIF máy ảnh nhưng bỏ sót khối C2PA nhị phân, hoặc phải giải mã rồi nén lại ảnh JPEG làm suy giảm chất lượng điểm ảnh. Khi mạng xã hội quét thấy các trường AI còn sót lại, họ sẽ tự động gắn nhãn “Thông tin AI” lên bài đăng của bạn."
              ]
          },
          {
              "heading": "AI Label Remover: Công cụ AI Tag Cleaner hàng đầu trên trình duyệt",
              "paragraphs": [
                  "AI Label Remover được phát triển chuyên biệt cho bối cảnh metadata thế hệ mới. Với vai trò là một [AI tag cleaner](ai-tag-cleaner) hiện đại, công cụ phân tích và cắt bỏ các khối JUMBF C2PA, cờ nguồn gốc IPTC, prompt Stable Diffusion và tọa độ GPS ngay trên trình duyệt của bạn.",
                  "Nhờ xử lý hoàn toàn cục bộ qua Web Workers trên CPU thiết bị, ảnh của bạn không bao giờ bị tải lên máy chủ từ xa. Đặc biệt, luồng byte ảnh được sao chép nguyên trạng mà không qua tái mã hóa, đảm bảo [xóa metadata không giảm chất lượng](remove-metadata-without-losing-quality)."
              ],
              "bullets": [
                  "Không tải ảnh lên máy chủ: Bảo mật tuyệt đối cho ảnh cá nhân và dự án thương mại.",
                  "Cắt byte không nén lại: Giữ nguyên độ phân giải, profile màu ICC và độ nét điểm ảnh.",
                  "Loại bỏ triệt để dấu vết AI: Xóa C2PA, IPTC và prompt — những yếu tố gây [nhãn AI gắn nhầm](made-with-ai-label).",
                  "Xử lý hàng loạt đa định dạng: Hỗ trợ tới 50 tệp JPEG, PNG, WebP, GIF, HEIC và AVIF cùng lúc."
              ]
          },
          {
              "heading": "So sánh: AI Label Remover với ExifTool và phần mềm đồ họa",
              "paragraphs": [
                  "ExifTool vẫn là công cụ dòng lệnh mạnh mẽ cho giới chuyên môn. Tuy nhiên giao diện dòng lệnh rất bất tiện khi cần chia sẻ nhanh, và việc xóa nhầm tham số khối JUMBF có thể làm hỏng tệp ảnh.",
                  "Các phần mềm chỉnh sửa máy tính cho phép “Export for Web”, nhưng việc này luôn nén lại điểm ảnh khiến chất lượng giảm sút sau mỗi lần lưu. Hơn nữa, Adobe Creative Cloud có thể tự động ký lại Content Credentials vào tệp xuất trừ khi bạn [tắt thủ công](turn-off-content-credentials-photoshop-lightroom).",
                  "AI Label Remover kết hợp tốc độ tức thì của công cụ web với độ bảo mật tuyệt đối của phần mềm offline. Bạn có thể kiểm tra chính xác dữ liệu trước và sau khi làm sạch."
              ]
          },
          {
              "heading": "Đạt trạng thái “No AI Tag” khi chia sẻ lên mạng xã hội",
              "paragraphs": [
                  "Nếu mục tiêu của bạn là đăng ảnh chụp thật lên Instagram, Facebook, TikTok hay Threads mà không bị dán nhãn cảnh báo vô lý, việc đưa ảnh về trạng thái [No AI Tag](no-ai-tag) là bước không thể thiếu. Các nền tảng sử dụng thuật toán quét tự động phần header tệp để tìm dấu hiệu AI.",
                  "Bằng cách xử lý ảnh qua [AI tag cleaner](ai-tag-cleaner) trước khi đăng, bạn loại bỏ hoàn toàn các yếu tố kích hoạt quét tự động, giúp tác phẩm chân thực của bạn được đón nhận đúng nghĩa."
              ]
          },
          {
              "heading": "Đạo đức và trách nhiệm khi xóa metadata AI",
              "paragraphs": [
                  "AI Label Remover được tạo ra nhằm bảo vệ quyền riêng tư cá nhân, xóa vị trí GPS và khắc phục tình trạng nhãn AI bị gán sai do các tính năng chỉnh sửa nhỏ. Nếu bức ảnh hoàn toàn do AI tạo ra từ đầu, người sáng tạo cần tuân thủ quy định minh bạch của nền tảng bằng việc khai báo trung thực."
              ]
          }
      ],
      "faqHeading": "Câu hỏi thường gặp về công cụ xóa metadata năm 2026",
      "faq": [
          {
              "q": "AI Label Remover khác gì các công cụ xóa EXIF truyền thống?",
              "a": "Các công cụ EXIF cũ chỉ quét tiêu đề TIFF/EXIF và bỏ qua khối C2PA hay IPTC XMP. AI Label Remover là một [AI tag cleaner](ai-tag-cleaner) chuyên dụng, loại bỏ cả metadata máy ảnh lẫn dấu vết nguồn gốc AI mà không nén lại ảnh."
          },
          {
              "q": "Xóa metadata có đảm bảo ảnh có No AI Tag trên Instagram không?",
              "a": "Làm sạch metadata sẽ loại bỏ mọi tín hiệu kỹ thuật trong tệp (C2PA và IPTC). Dù nền tảng có thể dùng thêm bộ phân loại thị giác, việc xóa metadata mang lại cho ảnh trạng thái [No AI Tag](no-ai-tag) chuẩn xác và không bị gắn nhãn sai."
          },
          {
              "q": "Xử lý ảnh nhạy cảm trên công cụ này có an toàn không?",
              "a": "Hoàn toàn an toàn. AI Label Remover chạy 100% trên trình duyệt của bạn thông qua Web Workers; không có bất kỳ byte dữ liệu nào được gửi lên máy chủ."
          },
          {
              "q": "Công cụ có xóa được thủy vân SynthID ẩn trong điểm ảnh không?",
              "a": "Không. Công cụ metadata chỉ can thiệp vào các khối thông tin tiêu đề. Thủy vân vô hình như Google SynthID can thiệp trực tiếp vào giá trị điểm ảnh, không công cụ metadata nào có thể xóa được."
          }
      ]
  },

  'how-to-get-no-ai-tag': {
      "title": "Cách để ảnh có nhãn “No AI Tag” trên mạng xã hội: Hướng dẫn từ AI Tag Cleaner",
      "metaTitle": "Cách để ảnh có nhãn No AI Tag: Hướng dẫn AI Tag Cleaner",
      "summary": [
          "Nhiều nhiếp ảnh gia và nhà sáng tạo nội dung gặp tình trạng ảnh chụp thật bị gắn nhãn “Thông tin AI” hoặc “Made with AI” một cách vô lý trên mạng xã hội.",
          "Hướng dẫn này giải thích cơ chế quét tự động của nền tảng và cách sử dụng AI Tag Cleaner để đạt trạng thái “No AI Tag” chuẩn xác mà không làm giảm chất lượng ảnh."
      ],
      "description": "Cách đảm bảo ảnh chụp thật có nhãn No AI Tag trên Facebook, Instagram. Dùng AI Tag Cleaner và AI Label Remover để loại bỏ nhãn AI gắn nhầm không nén lại ảnh.",
      "related": [
          "best-ai-metadata-removers-2026",
          "made-with-ai-label",
          "iptc-digitalsourcetype-ai"
      ],
      "sections": [
          {
              "heading": "Vì sao ảnh chụp thật lại bị gắn nhãn AI ngoài ý muốn",
              "paragraphs": [
                  "Các nền tảng như Instagram, Facebook, Threads và TikTok sử dụng thuật toán quét tự động các tệp tải lên. Nếu bộ quét phát hiện [thuộc tính IPTC DigitalSourceType](iptc-digitalsourcetype-ai) hoặc [manifest Content Credentials C2PA](what-is-c2pa-content-credentials), hệ thống sẽ lập tức gắn nhãn AI.",
                  "Vấn đề phổ biến nhất hiện nay là gắn nhãn sai (false positive): chỉ cần dùng tính năng Generative Fill của Photoshop, xóa vật thể bằng Lightroom hay công cụ tẩy của điện thoại, phần mềm đã ghi các cờ AI vào tệp. Dù 99% bức ảnh là cảnh thật, toàn bộ tác phẩm vẫn bị coi là sản phẩm nhân tạo."
              ]
          },
          {
              "heading": "Giải pháp No AI Tag: Kiểm tra và làm sạch tệp ảnh",
              "paragraphs": [
                  "Để đưa tác phẩm về trạng thái [No AI Tag](no-ai-tag), bạn cần cắt bỏ chính xác những khối dữ liệu mà thuật toán nền tảng đang quét. Với AI Label Remover, bạn chỉ cần thả ảnh vào giao diện để nhận báo cáo chi tiết ngay lập tức.",
                  "Trình [xem metadata ảnh](image-metadata-viewer-online) phân tách rõ ràng vị trí GPS, thông số máy ảnh và dấu vết AI. Khi phát hiện cờ nguồn gốc AI, một lần bấm “Xóa toàn bộ metadata” sẽ cắt bỏ hoàn toàn các khối đó khỏi tệp."
              ]
          },
          {
              "heading": "Vì sao dùng AI Tag Cleaner tốt hơn nhiều so với chụp màn hình",
              "paragraphs": [
                  "Nhiều người chọn cách chụp lại màn hình hoặc lưu ảnh qua ứng dụng nhắn tin để làm mất nhãn AI. Cách này tuy làm mất metadata nhưng [làm suy giảm nghiêm trọng độ phân giải và dải màu](remove-metadata-without-losing-quality). Chụp màn hình nén ảnh về sRGB và làm mất độ sắc nét gốc.",
                  "Sử dụng một [AI tag cleaner](ai-tag-cleaner) chuyên dụng giúp bảo toàn từng byte dữ liệu ảnh gốc. Ảnh giữ nguyên độ sắc nét, kích thước và hồ sơ màu ICC trong khi các khối dữ liệu gây gắn nhãn biến mất hoàn toàn."
              ]
          },
          {
              "heading": "Hành vi nhận diện của các nền tảng lớn năm 2026",
              "paragraphs": [
                  "Mỗi nền tảng có chính sách quét khác nhau. Các ứng dụng thuộc Meta dựa chặt chẽ vào C2PA và IPTC để tự động gán nhãn “Thông tin AI”. TikTok và YouTube cũng nhận diện các tệp chứa thông tin nguồn gốc kỹ thuật số tương tự.",
                  "Làm sạch ảnh bằng [AI Label Remover](ai-tag-cleaner) giúp ảnh của bạn an toàn và trung thực trên mọi nền tảng."
              ]
          },
          {
              "heading": "Trách nhiệm minh bạch và quy chuẩn đạo đức",
              "paragraphs": [
                  "Đưa ảnh về trạng thái No AI Tag là hoàn toàn chính đáng khi bạn muốn sửa nhãn sai hoặc bảo vệ dữ liệu cá nhân. Tuy nhiên, nếu tác phẩm hoàn toàn do AI tạo ra, bạn nên tôn trọng quy tắc cộng đồng bằng cách tự nguyện công khai theo quy định."
              ]
          }
      ],
      "faqHeading": "Câu hỏi thường gặp về No AI Tag và công cụ AI Tag Cleaner",
      "faq": [
          {
              "q": "Khái niệm “No AI Tag” có nghĩa là gì?",
              "a": "No AI Tag có nghĩa là tệp ảnh không chứa bất kỳ siêu dữ liệu nào (như C2PA, cờ IPTC hay prompt) có thể khiến thuật toán mạng xã hội kích hoạt nhãn “Thông tin AI” hay “Made with AI”."
          },
          {
              "q": "Làm sao để biết ảnh có dính nhãn AI trước khi đăng?",
              "a": "Hãy thả ảnh vào AI Label Remover. Bảng báo cáo sẽ chỉ rõ xem tệp có chứa manifest C2PA, trường IPTC DigitalSourceType hay prompt tạo ảnh hay không."
          },
          {
              "q": "Dùng AI Tag Cleaner có làm giảm độ phân giải ảnh không?",
              "a": "Không hề. AI Label Remover cắt bỏ các khối metadata trực tiếp từ luồng byte mà không giải mã hay nén lại điểm ảnh, bảo toàn 100% chất lượng."
          },
          {
              "q": "Tại sao Lightroom lại tự gắn nhãn AI vào ảnh RAW của tôi?",
              "a": "Các phiên bản mới của Lightroom và Photoshop sẽ tự động đính kèm Content Credentials và cờ AI bất cứ khi nào bạn sử dụng công cụ Generative Remove hay Generative Fill."
          }
      ]
  },

  'made-with-ai-label': {
    metaTitle: 'Vì sao ảnh thật bị gắn nhãn AI (“Thông tin AI”) trên Instagram',
    related: ['iptc-digitalsourcetype-ai', 'which-platforms-label-ai-images', 'turn-off-content-credentials-photoshop-lightroom'],
    description:
      'Ảnh thật bị gắn nhãn AI (“Thông tin AI”) trên Instagram, Facebook, Threads thường do một trường C2PA hoặc IPTC mà phần mềm chỉnh sửa ghi vào. Tìm đúng trường đó và xóa sạch mà không giảm chất lượng.',
    sections: [
      {
        heading: 'Nhãn đọc tệp của bạn, không phải bức ảnh',
        paragraphs: [
          'Nhãn AI mà Meta hiển thị là “Thông tin AI” (trước giữa năm 2024 gọi là “Made with AI”), được gắn khi tệp tải lên có tín hiệu AI tạo sinh theo chuẩn ngành. Hai tín hiệu nằm ngay trong tệp ảnh: [manifest Content Credentials C2PA](what-is-c2pa-content-credentials) và [thuộc tính IPTC DigitalSourceType](iptc-digitalsourcetype-ai) lưu trong XMP.',
          'Giá trị trainedAlgorithmicMedia cho biết toàn bộ ảnh do AI tạo; compositeWithTrainedAlgorithmicMedia cho biết ảnh thật có phần do AI làm. Cả hai đều có thể được đọc tự động lúc tải lên. Meta cũng dùng tín hiệu khác và yêu cầu người dùng tự khai báo nội dung AI trông như thật, nên metadata chỉ là một trong nhiều căn cứ.',
        ],
      },
      {
        heading: 'Tín hiệu “lạc” đến từ đâu',
        paragraphs: ['Với ảnh thật, thủ phạm gần như luôn là ứng dụng chỉnh sửa chứ không phải máy ảnh. Các nguồn thường gặp:'],
        bullets: [
          'Dùng Generative Fill, Generative Expand hay công cụ xóa vật thể bằng AI — có thể thêm hành động c2pa và đánh dấu tệp là ảnh ghép AI.',
          '[Xuất ảnh khi đang bật Content Credentials](turn-off-content-credentials-photoshop-lightroom) — danh sách mọi lần chỉnh sửa được ký vào tệp.',
          'Tính năng thư viện ảnh trên điện thoại như tẩy vật thể bằng AI, để lại dấu chỉnh sửa.',
          'Chuyển tệp qua các ứng dụng khác vốn chép lại metadata cũ, khiến dấu đó sống sót qua nhiều lần lưu.',
        ],
      },
      {
        heading: 'Tìm đúng trường bằng AI Label Remover',
        paragraphs: [
          'Đặt ảnh lên bàn soi ở trên. Thẻ “Dấu vết AI” liệt kê từng tín hiệu kèm vị trí của nó — ví dụ “C2PA · compositeWithTrainedAlgorithmicMedia” hay “XMP · Iptc4xmpExt › DigitalSourceType”. Chuyển sang “Metadata thô” để xem giá trị gốc, gồm claim generator (ứng dụng đã ký manifest) và mọi hành động c2pa được ghi.',
          'Kết luận “Nên xem kỹ” nghĩa là có Content Credentials nhưng không khai rõ AI. Một số nền tảng vẫn coi manifest đó là dấu hiệu, nên hãy quyết định trước khi đăng.',
        ],
      },
      {
        heading: 'Làm sạch bản sao bạn sẽ đăng',
        paragraphs: [
          'Bấm “Xóa toàn bộ metadata”. AI Label Remover cắt kho C2PA, các khối XMP, IPTC và EXIF khỏi chuỗi byte, để nguyên dữ liệu ảnh, kích thước, hướng xoay và hồ sơ màu. Tệp đã làm sạch được đọc lại để bạn thấy dấu vết AI đã biến mất trước khi lưu. Trang [xóa metadata AI](ai-tag-cleaner) liệt kê mọi loại dấu vết công cụ xử lý.',
          'Lưu lại thành JPEG mới cũng làm mất metadata, nhưng [mỗi lần như vậy ảnh bị nén thêm](remove-metadata-without-losing-quality). Cắt khối giúp tránh hoàn toàn chuyện đó.',
        ],
      },
      {
        heading: 'Sửa nhãn sai khác với che nhãn đúng',
        paragraphs: [
          'Xóa metadata là để sửa những nhãn mô tả sai tác phẩm và giữ kín chuyện riêng. Nếu ảnh hoàn toàn hoặc phần lớn do AI tạo và có thể bị tưởng là thật, quy định của nền tảng thường yêu cầu bạn nói rõ — nhãn tồn tại để người xem hiểu đúng. Dùng AI Label Remover để sửa sai, đừng dùng để biến ảnh tổng hợp thành ảnh chụp.',
        ],
      },
    ],
    faqHeading: 'Về nhãn “Thông tin AI”',
    faq: [
      {
        q: 'Có gỡ được nhãn “Thông tin AI” sau khi đã đăng không?',
        a: 'Thường không thể gỡ bằng cách sửa bài. Nếu nhãn mô tả sai một ảnh thật, hãy dùng tính năng khiếu nại hoặc trạng thái tài khoản của nền tảng (nếu có), và làm sạch tệp trước khi đăng lần sau.',
      },
      {
        q: 'Làm sạch xong thì nhãn chắc chắn biến mất?',
        a: 'Không chắc chắn. Việc làm sạch gỡ bỏ tín hiệu lưu trong tệp — nguyên nhân phổ biến nhất ở ảnh đã chỉnh — nhưng nền tảng vẫn có thể dùng cách phát hiện khác hoặc yêu cầu bạn khai báo.',
      },
      {
        q: 'Ảnh có thay đổi gì khi nhìn không?',
        a: 'Không. Chỉ các khối metadata bị gỡ. Dữ liệu ảnh được chép nguyên từng byte, hướng xoay và hồ sơ màu ICC được giữ.',
      },
      {
        q: 'Có thể giữ thông số máy chụp và chỉ bỏ trường AI không?',
        a: 'Hiện chưa. AI Label Remover gỡ mọi metadata nhận dạng — địa điểm, thiết bị, tác giả và nguồn gốc AI — trong một lượt, là lựa chọn an toàn nhất khi đăng công khai. Kích thước, hướng xoay, màu và ảnh động luôn được giữ.',
      },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'Xóa workflow ComfyUI và prompt Stable Diffusion khỏi PNG',
    related: ['image-metadata-viewer-online', 'hide-midjourney-dalle-prompts', 'what-metadata-ai-image-generators-add'],
    description:
      'A1111, Forge và ComfyUI ghi prompt, seed, checkpoint và cả workflow vào từng tệp PNG. Xem nguyên văn những gì được lưu rồi xóa sạch mà không đổi một điểm ảnh nào.',
    sections: [
      {
        heading: 'Thông số đi theo bức ảnh',
        paragraphs: [
          'Các công cụ tạo ảnh chạy trên máy lưu thông số dưới dạng văn bản ngay trong tệp để có thể tạo lại ảnh. Với PNG, phần văn bản này nằm trong chunk tEXt, zTXt hoặc iTXt cạnh dữ liệu ảnh. Thường bạn sẽ thấy:',
        ],
        bullets: [
          'A1111 và Forge: chunk “parameters” gồm prompt, negative prompt, steps, sampler, CFG, seed, độ phân giải, hash và tên model, cùng thiết lập LoRA và extension.',
          'ComfyUI: chunk “prompt” chứa đồ thị node đã chạy và chunk “workflow” chứa toàn bộ bố cục trình soạn — thả PNG vào ComfyUI là cả hệ thống hiện lại.',
          'InvokeAI, NovelAI và các giao diện khác: dữ liệu tương tự dưới khóa riêng.',
          'Bản xuất JPEG hoặc WebP: một số công cụ ghi cùng nội dung vào trường [EXIF UserComment](what-is-exif-data).',
        ],
      },
      {
        heading: 'Lý do nên xóa — và lý do không',
        paragraphs: [
          'Dữ liệu tạo ảnh là một công thức đầy đủ. Ai có nó cũng tái tạo được phong cách của bạn, biết bạn dùng checkpoint và LoRA nào, thậm chí thấy cả đường dẫn, tên thư mục hay tên người dùng trên máy nằm lẫn trong workflow. Đồ thị ComfyUI lớn còn làm mỗi ảnh nặng thêm vài chục KB.',
          'Ngược lại, các trang chia sẻ model đọc thông số để hiển thị thông tin tạo ảnh, và cộng sự có thể cần workflow. Hãy xem từng tệp trước; [AI Label Remover cho bạn thấy hết trước khi gỡ bất cứ thứ gì](image-metadata-viewer-online).',
        ],
      },
      {
        heading: 'Đọc prompt trong AI Label Remover',
        paragraphs: [
          'Đặt tệp PNG lên bàn soi. Trong “Metadata thô”, mỗi chunk văn bản hiện dưới từ khóa của nó — parameters, prompt, workflow — kèm toàn bộ nội dung; thẻ “Dấu vết AI” đánh dấu là prompt Stable Diffusion hoặc workflow ComfyUI. Chunk zTXt và iTXt nén được giải nén ngay trong trình duyệt để bạn đọc được.',
        ],
      },
      {
        heading: 'Làm sạch xong còn lại gì',
        paragraphs: [
          'Bấm “Xóa toàn bộ metadata”. Bộ xử lý PNG bỏ các chunk văn bản, XMP, EXIF và C2PA theo nguyên khối, giữ IHDR, IDAT, bảng màu, độ trong suốt, gamma, các chunk màu và cả chunk ảnh động APNG. Vì chunk bị gỡ nguyên khối, CRC của các chunk còn lại vẫn hợp lệ và tệp mở được ở mọi nơi. Trang [xóa metadata PNG](png-metadata-remover) giải thích chi tiết từng chunk.',
          'Mở rồi lưu lại bằng phần mềm chỉnh sửa cũng làm mất văn bản, nhưng [ảnh bị nén lại và màu có thể lệch](remove-metadata-without-losing-quality). Gỡ ở mức byte tránh được cả hai.',
        ],
      },
    ],
    faqHeading: 'Về dữ liệu Stable Diffusion và ComfyUI',
    faq: [
      {
        q: 'Làm sao để A1111 hoặc ComfyUI không lưu metadata nữa?',
        a: 'A1111 và Forge có tùy chọn ngừng ghi thông số tạo ảnh vào tệp PNG, còn ComfyUI có thể khởi chạy với cờ --disable-metadata. Cả hai chỉ áp dụng cho ảnh mới, nên hãy làm sạch những ảnh bạn đã có.',
      },
      {
        q: 'ComfyUI có dựng lại workflow từ PNG đã làm sạch không?',
        a: 'Không. Chunk “prompt” và “workflow” đã bị gỡ, nên kéo tệp vào ComfyUI sẽ không khôi phục gì. Hãy giữ bản gốc chưa xử lý nếu sau này cần đồ thị.',
      },
      {
        q: 'PNG đã làm sạch trông có giống hệt không?',
        a: 'Có. Các chunk IDAT chứa điểm ảnh nén được chép nguyên, nên ảnh trùng khớp đến từng điểm ảnh.',
      },
      {
        q: 'Còn bản xuất JPEG và WebP thì sao?',
        a: 'Prompt nằm trong EXIF UserComment hoặc XMP cũng được nhận diện và xóa khỏi tệp JPEG và WebP.',
      },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Xóa prompt khỏi ảnh Midjourney và DALL·E',
    related: ['chatgpt-gemini-image-metadata', 'what-metadata-ai-image-generators-add', 'synthid-invisible-ai-watermarks'],
    description:
      'Ảnh tải từ Midjourney, DALL·E, ChatGPT và Firefly có thể chứa prompt, mã job và dữ liệu nguồn gốc AI. Kiểm tra tệp mang theo gì và xóa sạch trước khi đăng.',
    sections: [
      {
        heading: 'Dịch vụ tạo ảnh trực tuyến ghi gì',
        paragraphs: [
          'Các dịch vụ tạo ảnh ngày càng đóng dấu metadata lên ảnh tải về, vừa để minh bạch vừa để hỗ trợ tiêu chuẩn nguồn gốc. Trường cụ thể khác nhau tùy dịch vụ và thay đổi theo thời gian, nên cách chắc chắn duy nhất là mở chính tệp đó. Bạn có thể gặp:',
        ],
        bullets: [
          'Midjourney: prompt và mã job trong trường mô tả hoặc ghi chú, thường kèm [IPTC DigitalSourceType](iptc-digitalsourcetype-ai) đánh dấu ảnh do AI làm.',
          '[DALL·E và tính năng tạo ảnh của ChatGPT](chatgpt-gemini-image-metadata): [Content Credentials C2PA](what-is-c2pa-content-credentials) ghi tên bộ tạo ảnh.',
          'Adobe Firefly: Content Credentials mô tả ảnh được tạo bằng AI.',
          'Nhiều công cụ: tên phần mềm, ngày tạo và đôi khi một mã định danh gắn với tài khoản.',
        ],
      },
      {
        heading: 'Prompt là công sức đáng giữ',
        paragraphs: [
          'Với họa sĩ minh họa, nhà thiết kế và người viết prompt, một prompt đã mài giũa là kết quả của rất nhiều lần thử. Bất kỳ trình xem metadata miễn phí nào cũng hiện văn bản nhúng cho người tải ảnh về, chỉ việc sao chép. Mã job và thông tin tài khoản còn có thể nối ảnh công khai ngược về bạn.',
        ],
      },
      {
        heading: 'Xem trước, rồi làm sạch',
        paragraphs: [
          'Đặt ảnh lên bàn soi và đọc báo cáo. Dòng gắn “AI” chứa prompt, tên bộ tạo ảnh và khai báo nguồn; dòng gắn “Cá nhân” chứa tác giả, mô tả và mã định danh. Bấm “Xóa toàn bộ metadata” rồi lưu tệp sạch — hoặc lưu cả lô thành ZIP. Trang [xóa metadata AI](ai-tag-cleaner) giải thích từng loại dấu vết.',
          'Mọi thứ chạy trong trình duyệt, nên chính những prompt bạn đang muốn bảo vệ không bị gửi qua thêm một dịch vụ nào khác.',
        ],
      },
      {
        heading: 'Giới hạn nên biết',
        paragraphs: [
          'Một số nhà cung cấp còn giấu thủy vân trong điểm ảnh, như [SynthID của Google](synthid-invisible-ai-watermarks). Đó không phải metadata và việc làm sạch không đụng tới. Và nếu bạn đăng ảnh AI trông như thật, quy định nền tảng vẫn có thể yêu cầu khai báo. Xóa metadata bảo vệ quy trình làm việc của bạn; nó không thay đổi bản chất bức ảnh.',
        ],
      },
    ],
    faqHeading: 'Về metadata Midjourney và DALL·E',
    faq: [
      {
        q: 'Người khác có đọc được prompt từ ảnh tôi đăng không?',
        a: 'Nếu prompt nằm trong metadata của tệp, ai có trình xem metadata cũng đọc và sao chép được. Làm sạch tệp trước khi chia sẻ sẽ gỡ nó đi.',
      },
      {
        q: 'Mọi ảnh tải từ Midjourney đều chứa prompt?',
        a: 'Tùy định dạng tải về và cách dịch vụ đang hoạt động. Mở tệp trong AI Label Remover để thấy chính xác có những gì.',
      },
      {
        q: 'Làm sạch có xóa được SynthID hay thủy vân tương tự không?',
        a: 'Không. Thủy vân vô hình nằm trong dữ liệu điểm ảnh, thứ AI Label Remover không bao giờ thay đổi.',
      },
      {
        q: 'Làm sạch cả bộ ảnh đã tạo được không?',
        a: 'Được. Nạp tối đa 50 ảnh, xem báo cáo, rồi lưu tất cả thành một tệp ZIP.',
      },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'C2PA là gì? Content Credentials giải thích dễ hiểu',
    related: ['iptc-digitalsourcetype-ai', 'turn-off-content-credentials-photoshop-lightroom', 'chatgpt-gemini-image-metadata'],
    description:
      'Giải thích dễ hiểu về Content Credentials C2PA: manifest có chữ ký ghi lại gì, JPEG, PNG, WebP, HEIC, AVIF cất nó ở đâu, cách đọc và việc gỡ bỏ có ý nghĩa gì.',
    sections: [
      {
        heading: 'Nói ngắn gọn',
        paragraphs: [
          'Liên minh C2PA (Coalition for Content Provenance and Authenticity) duy trì một tiêu chuẩn mở để gắn vào tệp đa phương tiện một lịch sử khó làm giả. Người dùng thấy nó dưới tên Content Credentials. Máy ảnh, phần mềm chỉnh sửa và bộ tạo ảnh AI có thể ký vào ảnh một hồ sơ cho biết ảnh ra đời thế nào — chụp bằng máy, sửa trong ứng dụng hay do model tạo ra.',
        ],
      },
      {
        heading: 'Bên trong một manifest',
        paragraphs: ['Manifest là một gói nhỏ có cấu trúc, gồm ba phần chính:'],
        bullets: [
          'Claim generator — phần mềm hay dịch vụ tạo ra manifest, ví dụ trình chỉnh sửa hoặc API tạo ảnh AI.',
          'Assertion — các khẳng định về nội dung: c2pa.actions (tạo, sửa, mở, đổi kích thước…), [digitalSourceType](iptc-digitalsourcetype-ai) và liên kết tới tệp thành phần.',
          'Chữ ký — chữ ký số kèm chứng thư xác định người ký, cùng một mã băm gắn manifest với đúng dữ liệu ảnh.',
        ],
      },
      {
        heading: 'Mỗi định dạng cất nó ở đâu',
        paragraphs: [
          'Manifest được đóng trong hộp chứa JUMBF, mỗi định dạng có chỗ riêng: segment APP11 trong JPEG, chunk caBX trong PNG, chunk C2PA trong WebP và box uuid trong HEIC, AVIF. Vì là khối tách biệt, nó có thể được đọc và gỡ mà không cần giải mã ảnh. AI Label Remover hiển thị khối này, claim generator, các hành động đã ghi và kiểu nguồn bất cứ khi nào có.',
        ],
      },
      {
        heading: 'Gỡ bỏ thực ra làm gì',
        paragraphs: [
          '[Làm sạch sẽ xóa hồ sơ C2PA nhúng](remove-c2pa-content-credentials) khỏi bản sao tệp đó. Lưu ý mọi chỉnh sửa vốn đã phá vỡ liên kết mật mã — trình xác minh báo manifest không còn khớp điểm ảnh là không hợp lệ — nên việc gỡ chỉ bỏ đi một hồ sơ lẽ ra vẫn đi kèm tệp.',
          'Một số hệ thống dùng Content Credentials “bền”: [thủy vân vô hình hoặc dấu vân tay](synthid-invisible-ai-watermarks) cho phép trình xác minh tra lại manifest trong kho trực tuyến kể cả khi bản nhúng đã mất. Xóa metadata không ảnh hưởng tới cơ chế này, vì chúng nằm trong điểm ảnh hoặc trên máy chủ từ xa.',
        ],
      },
      {
        heading: 'Giữ hay xóa?',
        paragraphs: [
          'Content Credentials có ích khi bạn cần chứng minh nguồn gốc ảnh — trong báo chí, hoặc với ảnh do chính bạn chụp. Chúng cũng có thể lộ phần mềm, lịch sử chỉnh sửa và danh tính bạn muốn giữ kín, hoặc [khiến ảnh chỉ chỉnh nhẹ bị gắn nhãn AI](made-with-ai-label). Hãy đọc manifest trước rồi quyết định với từng tệp.',
        ],
      },
    ],
    faqHeading: 'Về C2PA',
    faq: [
      {
        q: 'Những ai đang dùng C2PA?',
        a: 'Adobe, Microsoft, Google, OpenAI, Meta, các hãng máy ảnh như Leica, Sony, Nikon và nhiều tòa soạn hỗ trợ chuẩn này hoặc là thành viên liên minh, dù mỗi bên dùng theo cách khác nhau.',
      },
      {
        q: 'C2PA có phải một loại thủy vân vô hình?',
        a: 'Không. C2PA là metadata lưu cạnh dữ liệu ảnh. Thủy vân trong điểm ảnh như SynthID là cơ chế khác và không bị ảnh hưởng khi làm sạch.',
      },
      {
        q: 'Làm sao xác minh chữ ký trước khi làm sạch?',
        a: 'AI Label Remover hiển thị bộ tạo, hành động và kiểu nguồn. Muốn kiểm tra chữ ký đầy đủ, hãy đưa bản gốc qua công cụ xác minh Content Credentials chính thức trước.',
      },
      {
        q: 'Gỡ C2PA có làm giảm chất lượng không?',
        a: 'Không. Manifest là một khối riêng; dữ liệu ảnh nén được chép nguyên.',
      },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: 'Xóa vị trí GPS khỏi ảnh trên iPhone, Android và máy tính',
    related: ['which-platforms-strip-photo-metadata', 'view-remove-metadata-iphone-android', 'remove-metadata-windows-mac'],
    description:
      'Cách xóa vị trí GPS khỏi ảnh trước khi chia sẻ: trường EXIF nào làm lộ nơi chụp, thiết bị, thời gian, chúng rò rỉ ở đâu và cách xóa sạch không giảm chất lượng.',
    sections: [
      {
        heading: 'Điện thoại đóng dấu gì vào mỗi tấm ảnh',
        paragraphs: ['Khi bật định vị, một tấm ảnh điện thoại bình thường có thể chứa:'],
        bullets: [
          'Vĩ độ, kinh độ và độ cao, thường chính xác tới vài mét, kèm dấu thời gian GPS.',
          'Thời điểm chụp và lần sửa gần nhất.',
          'Hãng và đời máy, thông tin ống kính, đôi khi cả số sê-ri hay tên chủ máy.',
          'Ảnh xem trước và ảnh phụ nhúng (bản đồ độ sâu, ảnh MPF) mang bản EXIF riêng.',
        ],
      },
      {
        heading: 'Tệp gốc lọt ra ngoài bằng cách nào',
        paragraphs: [
          'Các mạng xã hội lớn thường bỏ EXIF khỏi ảnh đăng công khai, nhưng nhiều đường vẫn chuyển nguyên tệp gốc: [gửi “dạng tệp” hay tài liệu trong ứng dụng nhắn tin](which-platforms-strip-photo-metadata), đính kèm email, liên kết chia sẻ đám mây, diễn đàn, chợ mua bán và trang portfolio. Một tấm chụp ở nhà có thể lộ địa chỉ; nhiều tấm có thể lộ cả thói quen sinh hoạt.',
        ],
      },
      {
        heading: 'Xem vị trí GPS và thông tin ảnh đang bị lộ',
        paragraphs: [
          'Đặt ảnh lên bàn soi. Thẻ “Tệp tiết lộ gì” cho thấy ngay có trường địa điểm, con người và thời gian hay không, kèm tọa độ GPS đã giải mã sang dạng thập phân. “Metadata thô” liệt kê mọi trường, nhóm theo [EXIF IFD0, Exif và GPS](what-is-exif-data).',
        ],
      },
      {
        heading: 'Làm sạch mà không gây tác dụng phụ',
        paragraphs: [
          'Bấm “Xóa toàn bộ metadata”. [Các trường GPS, ngày giờ, thiết bị, tác giả và phần mềm](remove-exif-data) bị gỡ, cùng ảnh thu nhỏ nhúng và ảnh phụ MPF vốn giữ một bản sao ẩn. Thẻ hướng xoay được ghi lại trong một khối EXIF tối giản để ảnh dọc không bị nằm ngang, hồ sơ màu được giữ để màu không lệch. Ảnh HEIC từ iPhone được xử lý tại chỗ, không chuyển sang JPEG — xem thêm trang [xóa metadata HEIC](heic-metadata-remover).',
        ],
      },
      {
        heading: 'Chặn ngay từ máy ảnh',
        paragraphs: [
          'Bạn có thể [tắt gắn vị trí trong cài đặt máy ảnh](view-remove-metadata-iphone-android), hoặc bỏ vị trí cho từng lần chia sẻ bằng tùy chọn chia sẻ của điện thoại. Dù vậy, làm sạch tệp trước khi gửi vẫn là thói quen kỹ nhất, vì nó dọn luôn thông tin thiết bị, thời gian và ảnh xem trước mà cài đặt điện thoại bỏ sót.',
        ],
      },
      {
        heading: 'Tọa độ chính xác đến mức nào',
        paragraphs: [
          'EXIF lưu vĩ độ và kinh độ theo độ, phút, giây, và điện thoại ghi phần giây kèm số thập phân. Một giây vĩ độ dài khoảng 31 mét, nên một giá trị có hai chữ số thập phân về lý thuyết chỉ tới một điểm rộng chưa tới một mét. Độ chính xác thực tế tùy tín hiệu — thường 3–10 mét ngoài trời, kém hơn trong nhà — nhưng vẫn đủ để chỉ ra đúng một ngôi nhà. Nhiều điện thoại còn ghi độ cao, có thể gợi ý tầng lầu, và hướng ống kính lúc chụp.',
        ],
      },
      {
        heading: 'Rủi ro có thật, không phải giả định',
        paragraphs: ['Dữ liệu vị trí biến những bức ảnh bình thường thành bản đồ cuộc sống của bạn:'],
        bullets: [
          'Ảnh món đồ cần bán chụp tại nhà cho người mua — và bất kỳ ai xem tin — biết địa chỉ của bạn.',
          'Một loạt ảnh ở phòng gym, cổng trường hay văn phòng cho thấy thói quen và giờ giấc của bạn.',
          'Ảnh du lịch đăng khi đang đi vắng cho thấy nhà bạn không có người.',
          'Ảnh của trẻ em có thể lộ trường học, sân chơi hoặc nhà của bé.',
        ],
      },
      {
        heading: 'Vị trí không chỉ nằm trong thẻ GPS',
        paragraphs: [
          'Xóa thư mục GPS chưa chắc đã đủ. Các ứng dụng quản lý ảnh có thể chép tọa độ sang XMP, và các trường IPTC như City, Sublocation, Country có thể ghi thẳng tên địa điểm. AI Label Remover xóa XMP và IPTC cùng với EXIF nên những bản sao này cũng biến mất. Thứ mà không công cụ metadata nào xóa được là chính nội dung bức ảnh: biển tên đường, số nhà, cảnh nhìn từ cửa sổ hay hình phản chiếu đều có thể làm lộ vị trí — hãy nhìn kỹ trước khi đăng.',
        ],
      },
      {
        heading: 'Kiểm tra nhanh trước khi chia sẻ',
        paragraphs: [],
        bullets: [
          'Thả ảnh vào AI Label Remover và xem thẻ “Tệp tiết lộ gì”.',
          'Nếu có địa điểm, bấm “Xóa toàn bộ metadata” rồi lưu bản đã làm sạch.',
          'Kiểm tra khung màu xanh xác nhận địa điểm, con người và thời gian đã biến mất.',
          'Liếc qua bức ảnh để tìm manh mối nhìn thấy được — địa chỉ, biển số xe, địa danh.',
          'Chia sẻ bản đã làm sạch và giữ ảnh gốc trong thư viện của bạn.',
        ],
      },
    ],
    faqHeading: 'Về GPS và quyền riêng tư của ảnh',
    faq: [
      {
        q: 'Sau khi làm sạch, vị trí có khôi phục lại được không?',
        a: 'Không thể khôi phục từ tệp đã làm sạch — các trường bị xóa hẳn, không phải bị ẩn. Ảnh gốc trên điện thoại vẫn còn vị trí, nên chỉ chia sẻ bản đã làm sạch.',
      },
      {
        q: 'Tắt GPS thì ảnh còn bị gắn vị trí không?',
        a: 'Vẫn có thể. Điện thoại xác định vị trí qua Wi-Fi và mạng di động, nên hãy tắt quyền truy cập vị trí của chính ứng dụng máy ảnh, không chỉ tắt GPS.',
      },
      {
        q: 'Làm sao biết ảnh có chứa GPS không?',
        a: 'Đặt ảnh vào AI Label Remover: thẻ “Tệp tiết lộ gì” hiện vị trí kèm tọa độ đã giải mã. Trên điện thoại, bảng thông tin ảnh hiện bản đồ khi có GPS.',
      },
      {
        q: 'Mạng xã hội chẳng phải đã tự xóa GPS rồi sao?',
        a: 'Nhiều nền tảng lớn bỏ EXIF khỏi ảnh đăng công khai. Tệp đính kèm, tài liệu và liên kết đám mây thường vẫn giữ metadata gốc.',
      },
      {
        q: 'Ảnh có bị xoay sai sau khi làm sạch không?',
        a: 'Không. Thẻ hướng xoay được giữ nên ảnh hiển thị y như trước.',
      },
      {
        q: 'Ảnh HEIC từ iPhone có dùng được không?',
        a: 'Có. Tệp HEIC và HEIF được xử lý tại chỗ, không đổi định dạng và không mã hóa lại.',
      },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: 'Xóa metadata hàng loạt ảnh — miễn phí, không tải lên',
    related: ['remove-metadata-without-losing-quality', 'remove-metadata-windows-mac', 'remove-gps-location-from-photos'],
    description:
      'Xóa metadata hàng loạt tới 50 ảnh một lúc ngay trong trình duyệt: các worker song song giữ tốc độ thế nào, từng kết quả được kiểm tra lại ra sao, và cách lưu cả lô thành một tệp ZIP.',
    sections: [
      {
        heading: 'Một lô ảnh, từ đầu đến cuối',
        paragraphs: [],
        bullets: [
          'Đặt tối đa 50 tệp JPG, PNG, WebP, GIF, HEIC hoặc AVIF lên bàn (mỗi tệp 25 MB và 40 MP).',
          'Từng tệp được đọc tự động; bấm vào tệp bất kỳ trong hàng đợi để xem báo cáo.',
          'Bấm “Xóa toàn bộ metadata” một lần để làm sạch mọi tệp đã đọc xong — cùng bộ xử lý với công cụ [xóa dữ liệu EXIF](remove-exif-data).',
          'Lưu từng tệp, hoặc bấm “Lưu tất cả (ZIP)” để nhận một tệp nén duy nhất.',
        ],
      },
      {
        heading: 'Nhanh mà không cần máy chủ',
        paragraphs: [
          'AI Label Remover chia việc cho nhiều Web Worker — các luồng chạy nền trong trình duyệt — theo số nhân CPU của máy. Mỗi worker nhận một tệp, phân tích rồi trả lại các byte đã làm sạch, nên trang vẫn mượt kể cả với tệp HEIC nặng. Tệp ZIP dùng chế độ store vì ảnh vốn đã nén; đóng gói nhanh và [không gây thêm hao hụt](remove-metadata-without-losing-quality).',
        ],
      },
      {
        heading: 'Mỗi kết quả đều được đọc lại',
        paragraphs: [
          'Sau khi làm sạch, từng tệp đầu ra được đọc lại và khung kết quả màu xanh xác nhận các trường địa điểm, con người, thời gian và dấu vết AI đã hết hay chưa. Nếu hai tệp trùng tên, bản trong ZIP được đánh số để không bị ghi đè.',
        ],
      },
      {
        heading: 'Khi có hàng trăm tệp',
        paragraphs: [
          'Làm theo từng đợt 50 tệp và dọn bàn giữa các đợt để giải phóng bộ nhớ. Trên điện thoại ít RAM, nên đóng các tab nặng khác trước. Vì không tải gì lên, bạn có thể ngắt mạng sau khi trang đã tải xong.',
        ],
      },
      {
        heading: 'Không gì rời khỏi máy',
        paragraphs: [
          'Không ảnh nào được tải lên, lưu lại hay ghi nhật ký; lưu lượng mạng duy nhất là lúc tải chính trang web. Nhờ vậy làm sạch hàng loạt phù hợp cho ảnh giao khách hàng, buổi chụp chưa công bố và mọi tệp bạn không được phép gửi cho bên thứ ba.',
        ],
      },
    ],
    faqHeading: 'Về xử lý hàng loạt',
    faq: [
      {
        q: 'Một lượt có trộn nhiều định dạng được không?',
        a: 'Được. Một lượt có thể gồm JPG, PNG, WebP, GIF, HEIC và AVIF, mỗi tệp giữ nguyên định dạng của nó.',
      },
      {
        q: 'Sao chỉ tối đa 50 tệp?',
        a: 'Mọi xử lý đều dùng bộ nhớ trên máy bạn. Giới hạn giúp điện thoại và laptop cũ chạy ổn định; bạn có thể làm bao nhiêu đợt tùy ý.',
      },
      {
        q: 'Tên tệp có bị đổi không?',
        a: 'Không. Tệp đã làm sạch giữ nguyên tên. Chỉ những tệp trùng tên hoàn toàn trong ZIP mới được thêm số.',
      },
      {
        q: 'Dùng ngoại tuyến được không?',
        a: 'Được. Khi trang đã tải xong, việc làm sạch vẫn chạy mà không cần mạng vì chẳng có gì được gửi đi.',
      },
    ],
  },

  'chatgpt-gemini-image-metadata': {
    title: 'Ảnh tạo bằng ChatGPT, Gemini và Nano Banana chứa metadata gì?',
    metaTitle: 'Metadata ảnh ChatGPT và Gemini: C2PA, SynthID',
    summary: [
      'Ảnh tạo bằng ChatGPT hay Google Gemini (kể cả Nano Banana) rời khỏi công cụ kèm thông tin nguồn gốc: Content Credentials C2PA nằm cạnh bức ảnh, và với Google còn có thủy vân vô hình SynthID dệt vào điểm ảnh.',
      'Bài này cho biết mỗi nhà cung cấp thường ghi những gì, cách đọc ngay trong trình duyệt, phần nào công cụ xóa metadata gỡ được — và phần nào không công cụ trung thực nào chạm tới.',
    ],
    description:
      'Ảnh ChatGPT và Gemini (Nano Banana) chứa metadata gì — Content Credentials C2PA, SynthID, dấu hiển thị — cách xem và những gì việc làm sạch có thể gỡ bỏ.',
    related: ['synthid-invisible-ai-watermarks', 'what-metadata-ai-image-generators-add', 'how-to-check-if-image-is-ai-generated'],
    sections: [
      {
        heading: 'Hai nhà cung cấp, hai lớp đánh dấu',
        paragraphs: [
          'OpenAI và Google đều đánh dấu ảnh do AI tạo, nhưng dựa vào hai lớp khác nhau. OpenAI chủ yếu dùng [Content Credentials C2PA](what-is-c2pa-content-credentials): một manifest có chữ ký lưu trong tệp, nêu tên công cụ tạo và khẳng định ảnh do AI tạo. Google chủ yếu dùng [SynthID](synthid-invisible-ai-watermarks) — thủy vân vô hình được nhúng vào điểm ảnh ngay khi tạo — và đã bổ sung metadata C2PA cho các mô hình mới như Nano Banana Pro trong ứng dụng Gemini và các sản phẩm đám mây.',
          'Hai lớp này hoạt động rất khác nhau. Metadata nằm trong khối riêng, đọc được bằng trình xem phù hợp và biến mất ngay khi tệp bị mã hóa lại hoặc được làm sạch. Thủy vân trong điểm ảnh vẫn sống sót sau khi cắt, đổi kích thước, nén, và chỉ công cụ phát hiện của chính nhà cung cấp mới đọc được.',
        ],
      },
      {
        heading: 'Ảnh ChatGPT thường chứa gì',
        paragraphs: ['Các trường cụ thể thay đổi theo phiên bản, nhưng tệp PNG hoặc JPEG tải thẳng từ ChatGPT hay API tạo ảnh của OpenAI thường có:'],
        bullets: [
          'Manifest C2PA — trong chunk caBX của PNG hoặc segment APP11 của JPEG — được ký bằng chứng thư cấp cho OpenAI.',
          'Claim generator nêu tên dịch vụ OpenAI đã tạo ảnh.',
          'Hành động c2pa.created với digital source type [trainedAlgorithmicMedia](iptc-digitalsourcetype-ai) — cách nói chuẩn của “do mô hình tạo sinh làm ra”.',
          'Khi bạn chỉnh một ảnh tải lên: mục ingredient trỏ về ảnh gốc và các hành động mô tả việc chỉnh sửa.',
        ],
      },
      {
        heading: 'Ảnh Gemini và Nano Banana thường chứa gì',
        paragraphs: [
          'Mọi ảnh do mô hình của Google tạo đều mang SynthID trong điểm ảnh. Tùy mô hình, ứng dụng và gói dịch vụ, bạn còn có thể thấy biểu tượng ngôi sao lấp lánh ở góc ảnh, và với mô hình mới là một manifest C2PA mô tả ảnh do AI tạo. Google cũng cho phép hỏi Gemini xem một ảnh có SynthID hay không — đó là cách đáng tin duy nhất để kiểm tra thủy vân này.',
          'Vì dấu hiển thị và SynthID là một phần của bức ảnh, mọi công cụ chỉ sửa metadata đều không ảnh hưởng đến chúng. Manifest C2PA, nếu có, thì giống mọi khối metadata khác.',
        ],
      },
      {
        heading: 'Vì sao metadata thường tự biến mất',
        paragraphs: [
          'Metadata nguồn gốc rất dễ mất. Chụp màn hình là mất sạch. Nhiều ứng dụng chat và mạng xã hội mã hóa lại ảnh tải lên và xóa metadata ở bản công khai. Ngay cả việc tải tệp ngược vào một trợ lý chat cũng có thể chỉ còn lại dữ liệu ảnh trơn. Vì vậy ảnh ChatGPT hay Gemini không có Content Credentials là chuyện thường và không chứng minh gì về nguồn gốc — chỉ bản tải về gốc mới giữ đủ hồ sơ.',
        ],
      },
      {
        heading: 'Đọc tệp trước khi chia sẻ',
        paragraphs: [
          'Đặt ảnh lên bàn soi ở đầu trang. Thẻ “Dấu vết AI” cho biết có manifest C2PA hay không, claim generator nào đã ký và loại nguồn được khai báo. “Metadata thô” liệt kê các hành động đã ghi, các ingredient, cùng những trường EXIF và XMP do ứng dụng khác thêm vào. Không có gì được tải lên; tệp được đọc ngay trong trình duyệt.',
        ],
      },
      {
        heading: 'Làm sạch gỡ được gì — và cái gì ở lại',
        paragraphs: ['Bấm “Xóa toàn bộ metadata” — hoặc dùng trang [xóa metadata AI](ai-tag-cleaner) — sẽ cắt metadata khỏi chuỗi byte mà không vẽ lại ảnh. Cụ thể:'],
        bullets: [
          'Bị gỡ: manifest C2PA, các trường XMP và IPTC, EXIF và mọi đoạn văn bản nêu tên công cụ hay chứa prompt.',
          'Được giữ: dữ liệu điểm ảnh, kích thước, hướng xoay và hồ sơ màu ICC — ảnh trông y hệt.',
          'Không bị ảnh hưởng: SynthID và dấu ngôi sao hiển thị, vì cả hai nằm trong điểm ảnh. Công cụ xác minh của nhà cung cấp vẫn nhận ra ảnh qua thủy vân.',
        ],
      },
      {
        heading: 'Dùng ảnh AI một cách trung thực',
        paragraphs: [
          'Làm sạch là công cụ bảo vệ quyền riêng tư: nó ngăn prompt, thông tin tài khoản và lịch sử chỉnh sửa đi theo tệp. Nó không thay đổi bản chất của bức ảnh. Nếu bạn đăng ảnh AI trông như thật, đa số nền tảng yêu cầu khai báo, và một số còn hạn chế phân phối tài khoản không khai báo. Hãy sửa nhãn gắn nhầm cho ảnh thật, và ghi rõ nhãn cho tác phẩm AI thật.',
        ],
      },
    ],
    faqHeading: 'Về metadata ảnh ChatGPT và Gemini',
    faq: [
      {
        q: 'Ảnh ChatGPT nào cũng có C2PA?',
        a: 'Ảnh tải thẳng từ tính năng tạo ảnh của OpenAI thường có Content Credentials. Bản chụp màn hình, bản lưu lại hoặc đã qua ứng dụng khác thường bị mất.',
      },
      {
        q: 'AI Label Remover có xóa được SynthID khỏi ảnh Gemini không?',
        a: 'Không. SynthID nằm trong điểm ảnh, còn AI Label Remover không bao giờ thay đổi điểm ảnh. Công cụ chỉ gỡ metadata như C2PA, XMP và EXIF.',
      },
      {
        q: 'Làm sao biết một ảnh được tạo bằng Gemini?',
        a: 'Trước hết tìm manifest C2PA trong AI Label Remover. Với SynthID, hãy dùng công cụ xác minh của chính Google, chẳng hạn hỏi Gemini về bức ảnh đó.',
      },
      {
        q: 'Làm sạch ảnh ChatGPT có làm giảm chất lượng không?',
        a: 'Không. Chỉ các khối metadata bị gỡ; dữ liệu ảnh nén được chép nguyên, nên kết quả giống hệt từng điểm ảnh.',
      },
    ],
  },

  'remove-metadata-windows-mac': {
    title: 'Cách xóa metadata ảnh trên Windows và Mac',
    metaTitle: 'Cách xóa metadata, EXIF ảnh trên Windows và Mac',
    summary: [
      'Windows và macOS đều có sẵn cách xóa một phần metadata khỏi ảnh, nhưng mỗi bên chỉ làm được một phần: Windows tập trung vào thuộc tính EXIF, macOS tập trung vào vị trí.',
      'Dưới đây là các bước có sẵn trong hệ điều hành, cách dùng dòng lệnh miễn phí mà dân chuyên nghiệp hay dùng, và cách làm qua trình duyệt giống nhau trên cả hai hệ — gỡ được cả C2PA, XMP và prompt AI.',
    ],
    description:
      'Từng bước xóa EXIF, GPS và metadata khác khỏi ảnh trên Windows 11/10 và macOS bằng công cụ có sẵn, ExifTool hoặc trình duyệt — và mỗi cách còn sót gì.',
    related: ['view-remove-metadata-iphone-android', 'remove-metadata-without-losing-quality', 'what-is-exif-data'],
    sections: [
      {
        heading: 'Biết mình đang xóa những gì',
        paragraphs: [
          'Một bức ảnh có thể mang nhiều loại metadata cùng lúc: [EXIF](what-is-exif-data) (máy chụp, thời gian, GPS), XMP (lịch sử chỉnh sửa, mô tả, trường AI), IPTC (chú thích, bản quyền, [DigitalSourceType](iptc-digitalsourcetype-ai)), [Content Credentials C2PA](what-is-c2pa-content-credentials) và — với PNG — các chunk văn bản chứa prompt AI. Công cụ có sẵn của hệ điều hành được thiết kế quanh EXIF, nên thường bỏ sót các loại còn lại. Hãy nhớ điều này khi chọn cách làm.',
        ],
      },
      {
        heading: 'Windows 11 và 10: File Explorer',
        paragraphs: ['File Explorer có sẵn chức năng xóa các thuộc tính phổ biến:'],
        bullets: [
          'Chọn một hoặc nhiều ảnh, nhấp chuột phải và chọn Properties (Thuộc tính).',
          'Mở thẻ Details (Chi tiết) và bấm “Remove Properties and Personal Information” (Loại bỏ thuộc tính và thông tin cá nhân) ở cuối.',
          'Chọn “Create a copy with all possible properties removed” để tạo bản sao sạch, hoặc “Remove the following properties from this file” để đánh dấu từng trường.',
          'Bấm OK, rồi mở thẻ Details của bản sao để chắc chắn trường GPS và máy chụp đã trống.',
        ],
      },
      {
        heading: 'Cách của Windows còn thiếu gì',
        paragraphs: [
          'Tùy chọn này hoạt động tốt nhất với JPEG và TIFF. Với PNG, WebP, HEIC và AVIF, nó có thể không hiện gì để xóa. Nó cũng có thể để lại gói XMP, manifest C2PA và ảnh thu nhỏ nhúng, và không báo cáo những gì còn sót. Ứng dụng Photos không có tùy chọn xuất ảnh đã xóa metadata.',
        ],
      },
      {
        heading: 'macOS: Preview và Photos',
        paragraphs: ['Trên Mac, các tùy chọn có sẵn chủ yếu nhắm vào vị trí:'],
        bullets: [
          'Preview (Xem trước): mở ảnh, chọn Tools › Show Inspector (Công cụ › Hiển thị bộ kiểm tra), mở thẻ vị trí (GPS), bấm “Remove Location Info” (Xóa thông tin vị trí) rồi lưu.',
          'Photos (Ảnh): chọn ảnh rồi vào Image › Location › Hide Location (Ẩn vị trí), hoặc dùng File › Export và bỏ chọn thông tin vị trí để bản xuất không có GPS.',
          'Get Info của Finder và Inspector của Preview tiện để kiểm tra kết quả, nhưng cả hai chỉ hiện một phần các trường.',
        ],
      },
      {
        heading: 'Cách của Mac còn thiếu gì',
        paragraphs: [
          'Xóa vị trí vẫn để lại đời máy, thời điểm chụp, phần mềm và lịch sử chỉnh sửa. Xuất từ Preview hay Photos ra JPEG [sẽ mã hóa lại ảnh](remove-metadata-without-losing-quality), mỗi lần mất một chút chất lượng, và tệp HEIC có thể bị chuyển đổi nếu bạn không chọn khác.',
        ],
      },
      {
        heading: 'Dòng lệnh trên cả hai hệ: ExifTool',
        paragraphs: [
          'ExifTool là công cụ metadata miễn phí, lâu đời, chạy trên Windows, macOS và Linux. Nó sửa tệp mà không mã hóa lại ảnh. Các lệnh hữu ích:',
        ],
        bullets: [
          'exiftool -all= photo.jpg — xóa mọi metadata ghi được và giữ bản sao lưu tên photo.jpg_original.',
          'exiftool -all= --icc_profile:all -tagsfromfile @ -orientation photo.jpg — xóa tất cả trừ hồ sơ màu và hướng xoay, để màu và chiều ảnh vẫn đúng.',
          'exiftool -all= -r "C:\\Photos\\Share" — làm sạch cả thư mục, kể cả thư mục con.',
        ],
      },
      {
        heading: 'Qua trình duyệt: cùng một cách trên mọi máy',
        paragraphs: [
          'Nếu không được cài phần mềm — trên máy công ty chẳng hạn — hoặc muốn một cách cho mọi định dạng, hãy mở AI Label Remover trên Chrome, Edge, Safari hay Firefox. Thả tối đa 50 ảnh, đọc báo cáo, bấm “Xóa toàn bộ metadata” rồi lưu từng tệp hoặc ZIP. Công cụ [gỡ EXIF](remove-exif-data), GPS, XMP, IPTC, C2PA và chunk prompt PNG khỏi JPEG, PNG, WebP, GIF, HEIC và AVIF, giữ hướng xoay và hồ sơ màu, và chạy hoàn toàn trên máy bạn.',
        ],
      },
      {
        heading: 'Nên chọn cách nào',
        paragraphs: [],
        bullets: [
          'Một tệp JPEG, chỉ cần cơ bản: File Explorer trên Windows, Preview trên Mac.',
          'Chỉ cần bỏ vị trí, ngay từ thư viện ảnh: Photos trên Mac.',
          'Viết script, máy chủ hoặc hàng nghìn tệp: ExifTool.',
          'Nhiều định dạng, có metadata AI hoặc không được cài đặt: công cụ chạy cục bộ trên trình duyệt như AI Label Remover.',
        ],
      },
    ],
    faqHeading: 'Về xóa metadata trên máy tính',
    faq: [
      {
        q: '“Remove Properties and Personal Information” có xóa GPS không?',
        a: 'Có, với tệp JPEG nó xóa GPS cùng các thuộc tính EXIF khác. Hãy kiểm tra thẻ Details của kết quả vì một số dữ liệu XMP có thể còn lại.',
      },
      {
        q: 'Có xóa được metadata ảnh HEIC trên Windows không?',
        a: 'File Explorer hỗ trợ HEIC hạn chế. ExifTool hoặc công cụ trình duyệt hỗ trợ HEIC như AI Label Remover gỡ được mà không chuyển đổi tệp.',
      },
      {
        q: 'Xuất ảnh từ Preview có xóa hết metadata không?',
        a: 'Không chắc chắn. Khi xuất có thể mất một số trường nhưng giữ trường khác, và JPEG bị nén lại. Hãy kiểm tra tệp xuất trước khi chia sẻ.',
      },
      {
        q: 'Cách nào giữ nguyên chất lượng ảnh?',
        a: 'File Explorer, ExifTool và AI Label Remover sửa metadata mà không mã hóa lại. Xuất JPEG mới từ trình chỉnh sửa hay trình xem sẽ nén lại ảnh.',
      },
    ],
  },

  'image-metadata-viewer-online': {
    title: 'Cách xem metadata ảnh: EXIF, GPS, XMP, IPTC và C2PA ở cùng một chỗ',
    metaTitle: 'Xem metadata, thông tin ảnh online: EXIF, GPS, AI',
    summary: [
      'Trước khi chia sẻ hay tin vào một bức ảnh, nên xem metadata — toàn bộ những gì tệp tự khai về mình — chứ không chỉ vài trường mà điện thoại hay trình quản lý tệp hiển thị.',
      'Bài này giải thích một lần kiểm tra đầy đủ gồm những gì, trình xem có sẵn dừng ở đâu, vì sao nhiều trang xem EXIF online lại là rủi ro riêng tư, và cách đọc các trường quan trọng.',
    ],
    description:
      'Cách xem metadata, thông tin ảnh (EXIF, GPS, XMP, IPTC, C2PA, prompt AI) ngay trong trình duyệt, không tải lên, và những gì trình xem có sẵn bỏ sót.',
    related: ['what-is-exif-data', 'how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos'],
    sections: [
      {
        heading: 'Một lần kiểm tra đầy đủ gồm những gì',
        paragraphs: ['Trình xem metadata kỹ lưỡng đọc mọi khối trong tệp, không chỉ EXIF:'],
        bullets: [
          'EXIF — đời máy ảnh/điện thoại, thông số phơi sáng, thời điểm chụp, ống kính và hướng xoay.',
          'GPS — vĩ độ, kinh độ, độ cao và hướng, nếu bật định vị.',
          'XMP — phần mềm chỉnh sửa, lịch sử, mô tả, đánh giá và các trường AI.',
          'IPTC — chú thích, từ khóa, tác giả, bản quyền và [DigitalSourceType](iptc-digitalsourcetype-ai).',
          'C2PA — [Content Credentials](what-is-c2pa-content-credentials): ai đã ký tệp, những hành động nào được ghi, có dùng AI không.',
          'Chunk văn bản PNG — [thông số Stable Diffusion, workflow ComfyUI](remove-stable-diffusion-comfyui-metadata) và văn bản nhúng khác.',
          'Hồ sơ ICC và ảnh thu nhỏ — thông tin màu và ảnh xem trước ẩn.',
        ],
      },
      {
        heading: 'Trình xem có sẵn và điểm mù của chúng',
        paragraphs: [
          'Windows hiện metadata ở Properties › Details; macOS ở Inspector của Preview hoặc Get Info của Finder; iPhone khi vuốt lên trên ảnh; Google Photos trong bảng chi tiết. Chúng đủ để xem nhanh ngày, máy chụp và vị trí, nhưng chỉ hiện một phần EXIF đã chọn lọc và thường bỏ qua hoàn toàn XMP, IPTC, C2PA và văn bản PNG. Một tệp có thể trông sạch trong Explorer mà vẫn chứa nguyên prompt AI.',
        ],
      },
      {
        heading: 'Cái bẫy riêng tư của các trang xem EXIF online',
        paragraphs: [
          'Nhiều trang “xem EXIF online” hoạt động bằng cách tải ảnh của bạn lên máy chủ, đọc ở đó rồi trả báo cáo về. Với việc kiểm tra quyền riêng tư thì như vậy là ngược đời: chính bức ảnh bạn lo ngại — cùng tọa độ GPS — đã được chép sang bên thứ ba. Hãy chọn trình xem đọc tệp ngay trên máy. Cách thử đơn giản: tải trang, ngắt mạng rồi xem trình xem còn chạy không.',
        ],
      },
      {
        heading: 'Đọc tệp trong AI Label Remover',
        paragraphs: ['Đặt ảnh lên bàn soi ở đầu trang. Kết quả được chia thành ba thẻ:'],
        bullets: [
          '“Tệp tiết lộ gì” — tóm tắt dễ hiểu về địa điểm, con người, thời gian và thiết bị, GPS được đổi sang tọa độ thập phân.',
          '“Dấu vết AI” — manifest C2PA, loại nguồn IPTC, tên công cụ tạo và prompt, kèm kết luận.',
          '“Metadata thô” — mọi trường xếp theo nguồn: EXIF IFD0, Exif, GPS, các namespace XMP, IPTC, C2PA và chunk văn bản PNG.',
        ],
      },
      {
        heading: 'Những trường nên đọc trước',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — [vị trí chính xác](remove-gps-location-from-photos); dán vào bản đồ để thấy nó tiết lộ gì.',
          'DateTimeOriginal và ModifyDate — lúc chụp và lúc lưu lần cuối.',
          'Make, Model, BodySerialNumber, LensSerialNumber — có thể nối nhiều ảnh về cùng một thiết bị.',
          'Artist, Copyright, OwnerName — những cái tên bạn có thể không biết là đang được nhúng.',
          'Software và CreatorTool — ứng dụng nào đã chạm vào tệp, kể cả công cụ AI.',
          'DigitalSourceType và claim generator C2PA — ảnh tự khai được tạo ra như thế nào.',
        ],
      },
      {
        heading: 'Khi trình xem gần như không thấy gì',
        paragraphs: [
          'Ảnh lưu từ bảng tin mạng xã hội, ảnh chụp màn hình hay tệp gửi qua ứng dụng chat thường đã bị mã hóa lại và xóa metadata. Có ít hoặc không có metadata là chuyện bình thường trong những trường hợp đó và không nói lên ảnh thật, đã chỉnh hay do AI tạo. Nếu nguồn gốc quan trọng, hãy xin tệp gốc.',
        ],
      },
      {
        heading: 'Xem không có nghĩa là xác minh',
        paragraphs: [
          'Metadata thông thường là văn bản trơn ai cũng sửa được, nên hãy coi nó là manh mối chứ không phải bằng chứng. C2PA khác vì có chữ ký, nhưng trình xem hiện manifest không đồng nghĩa với việc xác minh chữ ký; hãy dùng công cụ xác minh Content Credentials chính thức cho việc đó. Khi đã xem đủ và muốn xóa dữ liệu, bấm “Xóa toàn bộ metadata” để gỡ mà không đổi bức ảnh — trang [xóa dữ liệu EXIF](remove-exif-data) giải thích rõ những gì bị gỡ.',
        ],
      },
    ],
    faqHeading: 'Về xem metadata ảnh',
    faq: [
      {
        q: 'Có trình xem metadata ảnh miễn phí nào không tải ảnh lên không?',
        a: 'Có. AI Label Remover đọc tệp ngay trong trình duyệt, không tải lên, không cần tài khoản, và vẫn chạy khi mất mạng sau khi trang đã tải xong.',
      },
      {
        q: 'Có xem được prompt của ảnh AI không?',
        a: 'Có, nếu công cụ tạo ảnh đã lưu nó. Prompt Stable Diffusion và ComfyUI nằm trong chunk văn bản PNG, một số dịch vụ lưu prompt trong trường XMP hoặc EXIF.',
      },
      {
        q: 'Vì sao Windows không hiện metadata của ảnh PNG?',
        a: 'File Explorer chỉ hiện vài thuộc tính với PNG. Chunk văn bản, XMP và C2PA không hiện ở đó nhưng có trong trình xem đầy đủ.',
      },
      {
        q: 'Metadata có cho biết ảnh là giả không?',
        a: 'Nó có thể cho manh mối mạnh, như claim generator là một dịch vụ AI, nhưng metadata bị thiếu hoặc bị sửa thì tự nó không chứng minh được gì.',
      },
    ],
  },

  'iptc-digitalsourcetype-ai': {
    title: 'IPTC DigitalSourceType: trường dữ liệu báo cho nền tảng biết ảnh do AI tạo',
    metaTitle: 'IPTC DigitalSourceType là gì? trainedAlgorithmicMedia',
    summary: [
      'DigitalSourceType là một trường metadata IPTC nhỏ nhưng tác động lớn: chỉ một giá trị như trainedAlgorithmicMedia là đủ để nhiều nền tảng gắn nhãn ảnh là do AI tạo.',
      'Bài này liệt kê các giá trị bạn sẽ gặp, ai ghi và ai đọc trường này, vì sao nó dễ bị thay đổi, và cách tìm hoặc xóa nó trong tệp.',
    ],
    description:
      'Trường IPTC DigitalSourceType nghĩa là gì, giá trị trainedAlgorithmicMedia và compositeWithTrainedAlgorithmicMedia, ai đọc nó, cách tìm và xóa.',
    related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'which-platforms-label-ai-images'],
    sections: [
      {
        heading: 'Một trường, một danh sách câu trả lời cố định',
        paragraphs: [
          'DigitalSourceType thuộc Chuẩn Metadata Ảnh IPTC — bộ từ vựng mà tòa soạn, kho ảnh và phần mềm ảnh dùng để mô tả hình ảnh. Nó trả lời một câu hỏi: nội dung này được tạo ra thế nào? Câu trả lời không phải văn bản tự do mà là một thuật ngữ trong bộ từ vựng kiểm soát “digital source type” của IPTC, viết dưới dạng URI, ví dụ http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia.',
          'Trong tệp ảnh, trường này nằm trong XMP với tên Iptc4xmpExt:DigitalSourceType. [Content Credentials C2PA](what-is-c2pa-content-credentials) dùng lại đúng bộ từ vựng này bên trong các hành động có chữ ký, nên cùng thuật ngữ xuất hiện ở cả hai nơi.',
        ],
      },
      {
        heading: 'Các giá trị bạn sẽ gặp',
        paragraphs: ['Bộ từ vựng được mở rộng qua nhiều năm. Các thuật ngữ liên quan nhất đến nhãn AI là:'],
        bullets: [
          'trainedAlgorithmicMedia — do mô hình tạo sinh được huấn luyện trên dữ liệu mẫu tạo ra.',
          'compositeWithTrainedAlgorithmicMedia — ảnh ghép có phần do AI tạo, ví dụ [ảnh chụp đã chỉnh bằng Generative Fill](turn-off-content-credentials-photoshop-lightroom).',
          'algorithmicMedia — do thuật toán tạo thuần túy, không cần dữ liệu huấn luyện, như tranh thủ tục hay fractal.',
          'compositeSynthetic — ảnh ghép có các thành phần tổng hợp.',
          'algorithmicallyEnhanced — được thuật toán tăng cường hoặc chỉnh sửa nhẹ.',
          'digitalCapture — chụp từ cảnh thật bằng máy ảnh số hoặc máy quét.',
          'computationalCapture — ảnh chụp được thuật toán xử lý ngay lúc chụp, như nhiều điện thoại hiện nay.',
          'digitalArt và screenCapture — tác phẩm do người vẽ bằng phần mềm, và ảnh chụp màn hình.',
        ],
      },
      {
        heading: 'Ai ghi trường này',
        paragraphs: [
          'Nhiều dịch vụ tạo ảnh AI ghi trainedAlgorithmicMedia vào ảnh xuất ra. Trình chỉnh sửa có công cụ tạo sinh có thể ghi giá trị ảnh ghép sau một lần chỉnh bằng AI. Kho ảnh và hãng tin điền trường này khi nhập ảnh, và một số chợ trực tuyến yêu cầu người bán đánh dấu ảnh AI theo cách này. Trường cũng có thể được chép tiếp một cách lặng lẽ: đã ghi một lần là nó sống qua mọi ứng dụng giữ lại XMP.',
        ],
      },
      {
        heading: 'Ai đọc trường này',
        paragraphs: [
          'Meta cho biết họ dùng metadata IPTC cùng với C2PA khi quyết định hiện [“Thông tin AI”](made-with-ai-label) trên Facebook, Instagram và Threads. [Các nền tảng](which-platforms-label-ai-images), công cụ tìm kiếm và dịch vụ mua sắm khác cũng đã công bố dùng trường này để công khai nội dung AI. Vì thế một ảnh thật chỉ chỉnh nhẹ nhưng mang compositeWithTrainedAlgorithmicMedia có thể bị gắn nhãn y như ảnh tạo hoàn toàn bằng AI.',
        ],
      },
      {
        heading: 'Không có chữ ký, nên dễ thay đổi',
        paragraphs: [
          'Khác với manifest C2PA, metadata IPTC thông thường không có chữ ký. Bất kỳ trình sửa metadata nào cũng thêm, đổi hoặc xóa được DigitalSourceType, và nhiều ứng dụng làm mất nó khi lưu lại. Hãy coi trường này là một lời khai, không phải bằng chứng — dù nó ghi “AI” hay “máy ảnh”.',
        ],
      },
      {
        heading: 'Tìm và xóa trường này',
        paragraphs: [
          'Đặt ảnh vào AI Label Remover. Trong “Dấu vết AI”, trường hiện dưới dạng “XMP · Iptc4xmpExt › DigitalSourceType” kèm giá trị; cùng thuật ngữ đó bên trong manifest C2PA được liệt kê dưới mục C2PA. Bấm “Xóa toàn bộ metadata” sẽ gỡ cả gói XMP lẫn kho C2PA, kéo theo trường này, cùng EXIF và các dữ liệu nhận dạng khác. Trang [xóa metadata AI](ai-tag-cleaner) nói về cả các trường AI khác.',
          'Nếu chỉ cần xóa riêng trường này và giữ phần XMP còn lại, có thể dùng dòng lệnh: exiftool -XMP-iptcExt:DigitalSourceType= photo.jpg. Lưu ý giá trị tương ứng có thể vẫn nằm trong manifest C2PA.',
        ],
      },
      {
        heading: 'Khi nào nên giữ trường này',
        paragraphs: [
          'Trường tồn tại để người xem biết ảnh được tạo ra thế nào. Nếu ảnh thật sự do AI tạo hoặc bị AI thay đổi đáng kể, hãy giữ lời khai — hoặc tự khai báo khi đăng. Xóa nó là hợp lý khi nó mô tả sai tác phẩm của bạn hoặc khi bạn đang làm sạch dữ liệu riêng tư khỏi tệp.',
        ],
      },
    ],
    faqHeading: 'Về IPTC DigitalSourceType',
    faq: [
      {
        q: 'trainedAlgorithmicMedia nghĩa là gì?',
        a: 'Đó là thuật ngữ IPTC chỉ nội dung do mô hình AI tạo sinh làm ra — tức ảnh tạo hoàn toàn bằng AI.',
      },
      {
        q: 'Vì sao ảnh đã chỉnh của tôi ghi compositeWithTrainedAlgorithmicMedia?',
        a: 'Vì một thao tác tạo sinh, như xóa vật thể bằng AI, đã được ghi lại. Thuật ngữ này đánh dấu ảnh ghép có phần do AI tạo, bất kể phần đó lớn hay nhỏ.',
      },
      {
        q: 'DigitalSourceType có giống C2PA không?',
        a: 'Không. DigitalSourceType là trường IPTC, thường không có chữ ký, lưu trong XMP. C2PA là manifest có chữ ký và có thể chứa cùng bộ từ vựng trong các hành động.',
      },
      {
        q: 'AI Label Remover có xóa riêng DigitalSourceType được không?',
        a: 'Hiện chưa. AI Label Remover gỡ toàn bộ XMP và C2PA trong một lượt. ExifTool xóa được riêng trường này nếu bạn cần giữ dữ liệu XMP khác.',
      },
    ],
  },

  'remove-metadata-without-losing-quality': {
    title: 'Xóa metadata mà không giảm chất lượng: vì sao chụp màn hình và lưu lại làm hỏng ảnh',
    metaTitle: 'Xóa metadata ảnh không giảm chất lượng',
    summary: [
      'Những cách xóa metadata nhanh — chụp màn hình, lưu lại trong trình chỉnh sửa, đưa qua trang chuyển đổi online — đều vẽ lại bức ảnh. Bạn mất metadata, nhưng cũng mất độ nét, độ phân giải hoặc độ chính xác màu.',
      'Bài này giải thích vì sao, cách xóa metadata không giảm chất lượng, và cách tự kiểm tra rằng không một điểm ảnh nào thay đổi.',
    ],
    description:
      'Cách xóa EXIF, GPS, C2PA và metadata AI không giảm chất lượng: vì sao chụp màn hình và lưu lại làm hỏng ảnh, cách xóa không mất dữ liệu và cách kiểm tra.',
    related: ['batch-remove-metadata', 'remove-metadata-windows-mac', 'what-is-exif-data'],
    sections: [
      {
        heading: 'Metadata và điểm ảnh nằm riêng',
        paragraphs: [
          'Mọi định dạng ảnh phổ biến đều tách bức ảnh khỏi các ghi chú về nó. JPEG là chuỗi segment: metadata ở APP1, APP11 và APP13, ảnh nén nằm sau marker SOS. PNG là danh sách chunk, điểm ảnh ở IDAT, văn bản ở tEXt, zTXt hoặc iTXt. WebP dùng chunk RIFF, còn HEIC và AVIF dùng box ISOBMFF. Vì hai phần lưu riêng, metadata có thể được gỡ mà không cần giải mã ảnh.',
        ],
      },
      {
        heading: 'Các lối tắt quen thuộc và cái giá phải trả',
        paragraphs: [],
        bullets: [
          'Chụp màn hình — mất hết metadata, nhưng ảnh chỉ có độ phân giải màn hình, có thể bị cắt hoặc thu nhỏ, lệch màu và dính cả thông báo hay nội dung khác trên màn hình.',
          'Lưu lại hoặc xuất JPEG — giải mã rồi nén lại; mỗi lần thêm nhiễu nén, và hồ sơ ICC có thể bị bỏ khiến màu lệch.',
          'Trang chuyển đổi online — mã hóa lại ảnh, và thường tải ảnh lên máy chủ trước.',
          'Đổi định dạng, ví dụ [HEIC sang JPEG](view-remove-metadata-iphone-android) — đổi kiểu nén và hay mất dải màu rộng hoặc độ trong suốt.',
        ],
      },
      {
        heading: 'Cách xóa metadata không giảm chất lượng',
        paragraphs: [
          'Công cụ xóa không mất dữ liệu duyệt cấu trúc tệp và chép mọi khối mô tả bức ảnh, chỉ bỏ qua khối chứa metadata. Với JPEG, đó là bỏ APP1 EXIF và XMP, APP11 C2PA, APP13 IPTC và chú thích, còn bảng lượng tử, bảng Huffman và dữ liệu quét được chép nguyên. Với PNG, cả chunk văn bản và metadata bị gỡ trọn, nên CRC của mọi chunk còn lại vẫn hợp lệ. Với HEIC và AVIF, các mục metadata bị gỡ và độ dời bên trong được ghi lại để dữ liệu ảnh vẫn trỏ đúng chỗ.',
          'AI Label Remover làm đúng như vậy ngay trong trình duyệt, dù bạn dùng công cụ [xóa dữ liệu EXIF](remove-exif-data) hay [xóa metadata PNG](png-metadata-remover). Tệp kết quả chứa đúng dữ liệu ảnh nén như tệp đầu vào.',
        ],
      },
      {
        heading: 'Ba thứ một công cụ tốt phải giữ',
        paragraphs: [],
        bullets: [
          'Hướng xoay — nhiều ảnh điện thoại được lưu nằm ngang kèm [thẻ EXIF](what-is-exif-data) báo trình xem xoay lại. Mất thẻ này, ảnh dọc sẽ hiện bị xoay. AI Label Remover ghi lại thẻ vào một khối EXIF tối giản.',
          'Hồ sơ màu — hồ sơ ICC cho ứng dụng biết cách hiểu màu, nhất là ảnh điện thoại Display P3. Thiếu nó, ảnh có thể nhợt hoặc quá rực.',
          'Ảnh động và độ trong suốt — khung hình APNG, WebP động, GIF và kênh alpha phải còn nguyên.',
        ],
      },
      {
        heading: 'Cách kiểm tra đúng là không mất dữ liệu',
        paragraphs: ['Bạn không cần tin lời công cụ:'],
        bullets: [
          'So kích thước — chiều rộng và chiều cao phải y hệt.',
          'So dung lượng — tệp sạch chỉ nhỏ hơn khoảng bằng phần metadata đã gỡ, không bao giờ nhỏ đi đột ngột.',
          'So điểm ảnh — mở cả hai trong trình chỉnh sửa thành hai lớp với chế độ hòa trộn Difference; kết quả không mất dữ liệu là màu đen tuyền.',
          'Đọc lại tệp — [AI Label Remover đọc lại mọi tệp đã làm sạch](batch-remove-metadata) và cho thấy trường nào còn lại.',
        ],
      },
      {
        heading: 'Dung lượng giảm từ đâu',
        paragraphs: [
          'Xóa metadata vẫn có thể làm tệp nhỏ đi rõ rệt. Ảnh thu nhỏ nhúng và ảnh xem trước MPF trong JPEG máy ảnh, lịch sử chỉnh sửa XMP dài và [workflow ComfyUI](remove-stable-diffusion-comfyui-metadata) lớn trong PNG có thể chiếm hàng chục đến hàng trăm kilobyte. Gỡ chúng đi giúp tệp nhẹ hơn mà không đổi gì những gì bạn thấy.',
        ],
      },
    ],
    faqHeading: 'Về xóa metadata không mất dữ liệu',
    faq: [
      {
        q: 'Xóa metadata có làm giảm chất lượng ảnh không?',
        a: 'Không, nếu làm ở mức byte. Chỉ việc mã hóa lại — chụp màn hình, lưu lại, chuyển định dạng — mới làm giảm chất lượng.',
      },
      {
        q: 'Vì sao tệp nhỏ đi sau khi làm sạch?',
        a: 'Vì các khối metadata, ảnh thu nhỏ và ảnh xem trước đã bị gỡ. Bản thân dữ liệu ảnh không đổi.',
      },
      {
        q: 'Màu có khác đi sau khi làm sạch không?',
        a: 'Không. AI Label Remover giữ hồ sơ màu ICC nên màu hiển thị y như trước.',
      },
      {
        q: 'Chụp màn hình có phải cách xóa metadata an toàn?',
        a: 'Nó xóa được metadata nhưng giảm chất lượng và có thể dính nội dung khác trên màn hình. Xóa không mất dữ liệu giữ nguyên ảnh gốc.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    metaTitle: 'Cách kiểm tra ảnh có phải do AI tạo (miễn phí)',
    related: ['iptc-digitalsourcetype-ai', 'image-metadata-viewer-online', 'synthid-invisible-ai-watermarks'],
    title: 'Ảnh này có phải do AI tạo? Cách kiểm tra ngay trong tệp',
    summary: [
      'Manh mối nhanh và đáng tin nhất để biết ảnh có do AI tạo hay không nằm ngay trong tệp: Content Credentials C2PA, trường IPTC DigitalSourceType và chuỗi tên bộ tạo ảnh thường nêu đích danh công cụ đã làm ra bức ảnh.',
      'Bài này chỉ ra cần tìm gì, cách đọc bằng công cụ kiểm tra miễn phí chạy trong trình duyệt, và vì sao không tìm thấy gì cũng không chứng minh được ảnh là thật.',
    ],
    description:
      'Kiểm tra ảnh có do AI tạo hay không bằng cách đọc C2PA, IPTC DigitalSourceType và metadata bộ tạo ảnh ngay trong trình duyệt — và hiểu mỗi tín hiệu chứng minh được gì, không được gì.',
    sections: [
      {
        heading: 'Lấy cho được tệp gốc',
        paragraphs: [
          'Metadata chỉ còn nguyên trong tệp vừa rời máy ảnh hay bộ tạo ảnh. Ảnh chụp màn hình, bản lưu lại và ảnh tải từ mạng xã hội thường đã bị mã hóa lại và mất gần hết. Khi có thể, hãy xin tệp xuất gốc — loại gửi “dạng tệp” chứ không phải ảnh đã nén.',
        ],
      },
      {
        heading: 'Manh mối thứ nhất: Content Credentials',
        paragraphs: [
          'Công cụ hỗ trợ C2PA gắn vào tệp [một hồ sơ có chữ ký số](what-is-c2pa-content-credentials). Claim generator nêu tên ứng dụng hay dịch vụ tạo ra ảnh, danh sách c2pa.actions ghi các bước như “created” hay “edited”, và digitalSourceType có thể khai thẳng là ảnh do AI tạo.',
          'Vì hồ sơ có chữ ký, trình xác minh còn biết được ảnh có bị sửa sau khi ký hay không. Manifest từ một dịch vụ AI là bằng chứng metadata mạnh nhất bạn có thể có.',
        ],
      },
      {
        heading: 'Manh mối thứ hai: IPTC DigitalSourceType',
        paragraphs: ['Nhiều bộ tạo ảnh và phần mềm chỉnh sửa điền vào [một trường IPTC chuẩn](iptc-digitalsourcetype-ai) mô tả cách nội dung được làm ra. Các giá trị hay gặp nhất:'],
        bullets: [
          'trainedAlgorithmicMedia — do model AI tạo sinh tạo ra.',
          'compositeWithTrainedAlgorithmicMedia — ảnh thật có vùng do AI tạo hoặc thay thế, như khi dùng Generative Fill.',
          'algorithmicMedia — do thuật toán tạo mà không cần dữ liệu huấn luyện, ví dụ đồ họa thủ tục.',
          'digitalCapture — chụp bằng máy ảnh, không khai nội dung tạo sinh.',
        ],
      },
      {
        heading: 'Manh mối thứ ba: prompt và tên công cụ',
        paragraphs: [
          '[Giao diện Stable Diffusion và ComfyUI](remove-stable-diffusion-comfyui-metadata) lưu prompt, seed, model và workflow dạng văn bản trong tệp PNG. Công cụ khác để lại tên trong XMP CreatorTool hoặc EXIF Software. Bất kỳ dấu hiệu nào trong số này đều cho thấy rõ có AI tham gia — và thường nói luôn ảnh được làm ra như thế nào.',
        ],
      },
      {
        heading: 'Kiểm tra ảnh có do AI tạo',
        paragraphs: [
          'Đặt tệp lên bàn soi ở đầu trang. Thẻ “Dấu vết AI” đưa ra một trong ba kết luận — có dấu vết AI, nên xem kỹ, hoặc không có dấu vết AI — và liệt kê từng tín hiệu kèm nguồn. “Metadata thô” hiển thị giá trị gốc. Không có gì được tải lên. Muốn gỡ những gì tìm thấy, hãy dùng trang [xóa metadata AI](ai-tag-cleaner).',
        ],
      },
      {
        heading: 'Nếu tệp trống trơn',
        paragraphs: [
          'Không có metadata thì không kết luận được gì: phần mềm chỉnh sửa, ứng dụng nhắn tin và mạng xã hội xóa nó thường xuyên, còn thiếu EXIF máy ảnh cũng chỉ là gợi ý yếu. Bước tiếp theo là dùng công cụ kiểm tra thủy vân của chính nhà cung cấp (ví dụ với [SynthID của Google](synthid-invisible-ai-watermarks)), tìm kiếm ngược hình ảnh để thấy bản sớm nhất, và xem ảnh xuất hiện lần đầu ở đâu. Công cụ phát hiện AI dựa trên điểm ảnh chỉ đưa ra xác suất, không phải bằng chứng.',
        ],
      },
    ],
    faqHeading: 'Về kiểm tra ảnh AI',
    faq: [
      {
        q: 'Có biết được ảnh tạo bằng ChatGPT hay Gemini không?',
        a: 'Nếu tệp còn Content Credentials, claim generator sẽ nêu tên dịch vụ. Với ảnh Gemini, công cụ kiểm tra SynthID của Google còn phát hiện được thủy vân trong điểm ảnh.',
      },
      {
        q: 'AI Label Remover không thấy dấu vết AI thì ảnh là thật?',
        a: 'Chưa chắc. Điều đó chỉ có nghĩa tệp không chứa metadata AI. Metadata rất dễ mất hoặc bị xóa, nên hãy hiểu kết quả sạch là “chưa rõ”, không phải bằng chứng.',
      },
      {
        q: 'Kiểm tra ảnh lưu từ Instagram hay Facebook được không?',
        a: 'Được, nhưng nền tảng thường đã xóa metadata ở bản đăng công khai nên kết quả hầu như trống. Nhãn “Thông tin AI” của nền tảng, nếu có, là một tín hiệu riêng.',
      },
      {
        q: 'Việc kiểm tra có miễn phí và riêng tư không?',
        a: 'Có — miễn phí, không cần tài khoản, tệp được đọc ngay trên máy mà không tải lên.',
      },
    ],
  },

  'which-platforms-label-ai-images': {
    metaTitle: 'Nền tảng nào gắn nhãn ảnh AI? Meta, TikTok, YouTube',
    related: ['made-with-ai-label', 'iptc-digitalsourcetype-ai', 'what-is-c2pa-content-credentials'],
    title: 'Nhãn AI trên mạng xã hội: Instagram, Facebook, TikTok, YouTube, Pinterest và LinkedIn',
    summary: [
      'Ngày càng nhiều nền tảng gắn nhãn như “Thông tin AI” lên ảnh và video. Phần lớn dựa vào cùng các tín hiệu nằm trong tệp — Content Credentials C2PA và metadata IPTC — kết hợp với điều người đăng tự khai.',
      'Bài tổng quan này nói về cách các nền tảng lớn thường gắn nhãn, điều gì kích hoạt nhãn, và ý nghĩa với ảnh thật chỉ chỉnh nhẹ bằng công cụ AI.',
    ],
    description:
      'Instagram, Facebook, Threads, TikTok, YouTube, Pinterest và LinkedIn gắn nhãn ảnh AI thế nào, metadata nào trong tệp kích hoạt nhãn, và điều đó có ý nghĩa gì với ảnh đã chỉnh.',
    sections: [
      {
        heading: 'Những tín hiệu dùng chung',
        paragraphs: ['Việc gắn nhãn tự động thường dựa trên một danh sách ngắn tín hiệu chung:'],
        bullets: [
          '[Content Credentials C2PA](what-is-c2pa-content-credentials) khai báo ảnh được tạo hoặc chỉnh bằng AI.',
          '[Trường IPTC DigitalSourceType](iptc-digitalsourcetype-ai), ví dụ trainedAlgorithmicMedia.',
          '[Thủy vân vô hình của một số nhà cung cấp AI](synthid-invisible-ai-watermarks), nếu nền tảng có bộ phát hiện tương ứng.',
          'Người đăng tự khai — một nút gạt hoặc ô đánh dấu khi đăng nội dung AI trông như thật.',
        ],
      },
      {
        heading: 'Meta: Instagram, Facebook, Threads',
        paragraphs: [
          'Meta hiển thị [“Thông tin AI”](made-with-ai-label) (đổi tên từ “Made with AI” năm 2024) khi phát hiện tín hiệu AI theo chuẩn ngành hoặc khi người đăng tự khai. Sau khi nhiều nhiếp ảnh gia phản đối việc ảnh chỉ chỉnh nhẹ bị gắn nhãn, Meta chuyển nhãn cho nội dung được chỉnh bằng AI vào menu của bài đăng, còn nhãn nổi bật hơn dành cho nội dung phần lớn do AI tạo.',
        ],
      },
      {
        heading: 'TikTok',
        paragraphs: [
          'TikTok yêu cầu người sáng tạo gắn nhãn nội dung AI trông như thật và cho biết sẽ tự động gắn nhãn những tệp tải lên có Content Credentials C2PA xác định là do AI tạo.',
        ],
      },
      {
        heading: 'YouTube',
        paragraphs: [
          'YouTube yêu cầu người tải lên khai báo nội dung bị chỉnh sửa hoặc tổng hợp trông như thật và hiển thị nhãn cho người xem. Nền tảng này còn dùng C2PA theo chiều ngược lại, với chỉ báo kiểu “quay bằng máy ảnh” cho nội dung có thông tin ghi hình xác thực.',
        ],
      },
      {
        heading: 'Pinterest và LinkedIn',
        paragraphs: [
          'Pinterest đã bổ sung nhãn cho ảnh do AI tạo hoặc chỉnh, dựa trên metadata và bộ phân loại riêng. LinkedIn hiển thị biểu tượng Content Credentials trên ảnh có dữ liệu C2PA để người xem kiểm tra nguồn và các lần chỉnh sửa.',
          'Chính sách ở mọi nền tảng thay đổi thường xuyên; hãy xem trung tâm trợ giúp hiện hành trước khi dựa vào một hành vi cụ thể.',
        ],
      },
      {
        heading: 'Khi ảnh thật bị gắn nhãn',
        paragraphs: [
          'Chỉ một lần chỉnh bằng công cụ tạo sinh, như xóa người qua đường, cũng có thể khiến cả bức ảnh bị ghi là ảnh ghép AI trong metadata. Trước khi đăng, hãy đặt tệp vào AI Label Remover để xem trường nào sẽ kích hoạt nhãn. Nếu nhãn sẽ sai, [làm sạch một bản sao](ai-tag-cleaner) là loại bỏ được nguyên nhân; nếu ảnh phần lớn do AI tạo, hãy khai báo — nhãn sinh ra là để làm việc đó.',
        ],
      },
    ],
    faqHeading: 'Về nhãn AI trên mạng xã hội',
    faq: [
      {
        q: 'Instagram có gắn nhãn cả hồ sơ dùng AI không?',
        a: 'Instagram đã thêm nhãn ở cấp hồ sơ cho tài khoản đăng người do AI tạo và có thể hạn chế đề xuất tài khoản không khai báo. Người chỉ chỉnh ảnh bằng công cụ AI thường không bị ảnh hưởng; hãy xem hướng dẫn hiện hành của Instagram.',
      },
      {
        q: 'Tôi chỉ xóa một vật nhỏ — sao lại bị nhãn AI?',
        a: 'Nhiều phần mềm ghi mọi lần chỉnh tạo sinh vào C2PA hoặc IPTC dưới dạng “ghép với AI”. Nền tảng đọc khai báo đó mà không xét lần chỉnh lớn hay nhỏ.',
      },
      {
        q: 'Đăng xong, nền tảng có để lại metadata trong ảnh không?',
        a: 'Đa số đọc khi tải lên rồi xóa khỏi bản công khai, nên tải lại bài của chính bạn hiếm khi còn thấy trường gốc.',
      },
      {
        q: 'Ảnh đã làm sạch có tránh được mọi nhãn không?',
        a: 'Không hẳn. Việc làm sạch gỡ bỏ tín hiệu trong tệp, nhưng nền tảng vẫn có thể phát hiện thủy vân, dùng bộ phân loại hoặc yêu cầu bạn khai báo.',
      },
    ],
  },

  'what-metadata-ai-image-generators-add': {
    metaTitle: 'Công cụ tạo ảnh AI thêm metadata gì vào tệp?',
    related: ['chatgpt-gemini-image-metadata', 'remove-stable-diffusion-comfyui-metadata', 'iptc-digitalsourcetype-ai'],
    title: 'Bộ tạo ảnh AI giấu gì trong tệp của bạn: DALL·E, Firefly, Midjourney, Gemini, Stable Diffusion',
    summary: [
      'Hầu như công cụ tạo ảnh AI nào cũng để lại thứ gì đó trong ảnh xuất ra, từ Content Credentials có chữ ký đến prompt dạng văn bản thuần. Biết mỗi công cụ ghi gì giúp bạn giữ kín prompt và hiểu vì sao nền tảng gắn nhãn ảnh.',
      'Dưới đây là tổng hợp metadata thường thấy trong ảnh từ các bộ tạo ảnh phổ biến, và cách xem tệp của chính bạn thực sự chứa gì.',
    ],
    description:
      'Những gì các bộ tạo ảnh AI phổ biến nhúng vào tệp — C2PA, IPTC DigitalSourceType, XMP, prompt và workflow — và cách đọc hoặc xóa chúng khỏi ảnh của bạn.',
    sections: [
      {
        heading: 'Ba nhóm dấu vết',
        paragraphs: ['Metadata liên quan tới AI chia thành ba nhóm lớn:'],
        bullets: [
          'Nguồn gốc có chữ ký — Content Credentials C2PA nêu tên bộ tạo ảnh và những gì nó đã làm.',
          'Trường mô tả — các mục IPTC và XMP như [DigitalSourceType](iptc-digitalsourcetype-ai), CreatorTool hay phần mô tả.',
          'Thông số tạo ảnh — prompt, seed, model và tham số lưu dạng văn bản, chủ yếu ở công cụ chạy trên máy.',
        ],
      },
      {
        heading: 'OpenAI: ảnh ChatGPT và DALL·E',
        paragraphs: [
          'Ảnh từ [tính năng tạo ảnh của OpenAI](chatgpt-gemini-image-metadata) mang Content Credentials C2PA xác định OpenAI là nguồn, nên trình xem và nền tảng hỗ trợ C2PA có thể nhận ra.',
        ],
      },
      {
        heading: 'Adobe: Firefly và công cụ tạo sinh trong Photoshop',
        paragraphs: [
          'Adobe gắn Content Credentials vào nội dung làm bằng các tính năng chạy Firefly, mô tả là do AI tạo hoặc chỉnh. Vì thế một bức ảnh chỉ chạm qua Generative Fill hay Generative Expand vẫn có thể mang khai báo ảnh ghép AI dù gần như toàn bộ là ảnh chụp thật.',
        ],
      },
      {
        heading: 'Google (Gemini, Imagen) và Meta AI',
        paragraphs: [
          'Google nhúng [thủy vân vô hình SynthID](synthid-invisible-ai-watermarks) vào ảnh từ các model tạo sinh của mình và dùng metadata để đánh dấu nội dung AI ở một số sản phẩm. Meta cho biết ảnh từ Meta AI có dấu hiệu nhìn thấy được, thủy vân vô hình và metadata IPTC cho biết do AI tạo.',
        ],
      },
      {
        heading: 'Midjourney',
        paragraphs: [
          '[Ảnh tải từ Midjourney](hide-midjourney-dalle-prompts) có thể chứa prompt và mã job trong trường mô tả hoặc ghi chú, cùng một giá trị IPTC đánh dấu ảnh do AI tạo. Những gì xuất hiện phụ thuộc định dạng tải về và phiên bản dịch vụ lúc đó.',
        ],
      },
      {
        heading: 'Stable Diffusion, ComfyUI và công cụ chạy trên máy',
        paragraphs: [
          'Công cụ chạy trên máy không ký gì cả, nhưng lại thường lưu chi tiết nhất: A1111 và Forge ghi chunk văn bản “parameters”, còn [ComfyUI nhúng toàn bộ đồ thị prompt và workflow](remove-stable-diffusion-comfyui-metadata) dạng JSON. Các tùy chọn này thường tắt được — nhưng chỉ áp dụng cho ảnh mới.',
          'Công cụ tạo ảnh AI thay đổi cách ghi giữa các phiên bản, nên cách đáng tin là mở chính tệp đó: đặt nó lên bàn soi của AI Label Remover để xem từng trường, rồi dùng công cụ [xóa metadata AI](ai-tag-cleaner) để gỡ những gì bạn không muốn chia sẻ.',
        ],
      },
    ],
    faqHeading: 'Về metadata của bộ tạo ảnh',
    faq: [
      {
        q: 'Nano Banana có thêm metadata vào ảnh không?',
        a: 'Google đánh dấu ảnh từ các mô hình của mình bằng SynthID và đã thêm Content Credentials C2PA cho mô hình mới như Nano Banana Pro. Hãy kiểm tra từng tệp để biết nó chứa gì.',
      },
      {
        q: 'Mọi bộ tạo ảnh đều thêm C2PA?',
        a: 'Không. Các dịch vụ trực tuyến lớn ngày càng làm vậy; nhiều công cụ, nhất là loại chạy trên máy, chỉ ghi metadata văn bản hoặc không ghi gì.',
      },
      {
        q: 'Làm sạch có xóa luôn thủy vân vô hình không?',
        a: 'Không. Thủy vân như SynthID nằm trong điểm ảnh, mà làm sạch thì không bao giờ thay đổi điểm ảnh.',
      },
      {
        q: 'Vì sao hai ảnh từ cùng một công cụ lại khác nhau?',
        a: 'Định dạng xuất, phiên bản ứng dụng, nơi bạn tải về và các lần chỉnh sau đó đều có thể thêm hoặc bớt trường.',
      },
    ],
  },

  'synthid-invisible-ai-watermarks': {
    metaTitle: 'SynthID và thủy vân AI vô hình là gì?',
    related: ['chatgpt-gemini-image-metadata', 'how-to-check-if-image-is-ai-generated', 'what-is-c2pa-content-credentials'],
    title: 'SynthID và thủy vân vô hình: nơi việc xóa metadata dừng lại',
    summary: [
      'Một số ảnh AI mang hai kiểu dấu: metadata nằm cạnh bức ảnh, và thủy vân dệt thẳng vào điểm ảnh. SynthID của Google là ví dụ nổi tiếng nhất của kiểu thứ hai.',
      'Bài này giải thích thủy vân trong điểm ảnh khác C2PA và EXIF ra sao, được phát hiện thế nào, và vì sao một công cụ metadata trung thực không thể xóa chúng.',
    ],
    description:
      'SynthID và các thủy vân AI vô hình là gì, khác metadata C2PA ra sao, được phát hiện thế nào, và vì sao việc xóa metadata vẫn để chúng nguyên chỗ.',
    sections: [
      {
        heading: 'Hai lớp tách biệt',
        paragraphs: [
          'Metadata — EXIF, XMP, IPTC, [C2PA](what-is-c2pa-content-credentials) — nằm trong các khối riêng của tệp, dễ đọc và dễ gỡ mà không chạm tới bức ảnh. Thủy vân trong điểm ảnh là chuyện khác hẳn: một mẫu rất mờ trải khắp giá trị điểm ảnh, mắt không thấy nhưng bộ phát hiện thì nhận ra.',
        ],
      },
      {
        heading: 'Về SynthID',
        paragraphs: [
          'SynthID là công nghệ thủy vân của Google DeepMind cho nội dung do các model AI của Google tạo ra. Nó nhúng một tín hiệu không thể nhận thấy ngay khi tạo ảnh và được thiết kế để vẫn phát hiện được sau các thay đổi thường gặp như cắt, đổi kích thước, nén và chỉnh màu. Các kỹ thuật cùng họ áp dụng cho ảnh, âm thanh, video và văn bản.',
        ],
      },
      {
        heading: 'Phát hiện thủy vân trong điểm ảnh',
        paragraphs: [
          'Trình xem thông thường không đọc được thủy vân; bạn cần bộ phát hiện của chính nhà cung cấp. Google đã đưa ra [các cách kiểm tra nội dung có SynthID hay không](chatgpt-gemini-image-metadata), kể cả ngay trong sản phẩm của họ. Các nhà cung cấp khác có phương pháp riêng.',
        ],
      },
      {
        heading: 'Vì sao xóa metadata không đụng tới nó',
        paragraphs: [
          'Công cụ metadata không mất dữ liệu — AI Label Remover cũng vậy — [chép dữ liệu ảnh nguyên từng byte](remove-metadata-without-losing-quality); đó chính là cách đảm bảo chất lượng không đổi. Thủy vân nằm trong những byte ấy vì thế vẫn ở nguyên chỗ. Công cụ hứa “xóa thủy vân AI” hoặc không làm được như quảng cáo, hoặc làm biến dạng ảnh nặng, và cố vô hiệu hóa thủy vân của nhà cung cấp còn có thể vi phạm điều khoản sử dụng.',
        ],
      },
      {
        heading: 'Trên thực tế',
        paragraphs: [
          '[Xóa metadata AI](ai-tag-cleaner) là lựa chọn đúng để bảo vệ quyền riêng tư và gỡ prompt, vị trí, dữ liệu nguồn gốc bạn không muốn chia sẻ. Nó không làm ảnh AI trở nên không thể phát hiện. Khi đăng nội dung AI trông như thật, hãy làm theo quy định khai báo của nền tảng.',
        ],
      },
      {
        heading: 'Metadata, thủy vân hay dấu vân tay?',
        paragraphs: ['Có ba kỹ thuật khác nhau cùng được gọi là “nhãn AI”, và chúng hoạt động rất khác nhau:'],
        bullets: [
          'Metadata — các khối EXIF, XMP, IPTC và C2PA. Ai cũng đọc được, dễ xóa và dễ mất khi tệp được lưu lại.',
          'Thủy vân điểm ảnh — một mẫu ẩn nằm ngay trong hình, như SynthID. Chỉ công cụ phát hiện của nhà cung cấp mới đọc được, và nó được thiết kế để tồn tại qua chỉnh sửa.',
          'Dấu vân tay — một bản mô tả ngắn gọn của bức ảnh lưu trên máy chủ. Ảnh trông giống có thể được đối chiếu sau này, kể cả khi không còn chút metadata nào.',
        ],
      },
      {
        heading: 'Ai đang dùng thủy vân vô hình',
        paragraphs: [
          'Google gắn SynthID vào ảnh do các mô hình AI của mình tạo ra. Meta cho biết họ thêm thủy vân vô hình cùng metadata vào ảnh tạo bằng tính năng AI của họ. Adobe và một số bên khác ủng hộ Content Credentials “bền vững”, kết hợp manifest C2PA với thủy vân hoặc dấu vân tay để tra cứu lại bản ghi. Các công cụ tạo ảnh khác chỉ dựa vào metadata, còn công cụ chạy trên máy thường không thêm gì. Cách làm thay đổi thường xuyên, nên mọi danh sách chỉ là ảnh chụp tại một thời điểm.',
        ],
      },
      {
        heading: 'Phát hiện thủy vân tin cậy đến đâu',
        paragraphs: [
          'Phát hiện thủy vân mang tính thống kê: công cụ cho biết khả năng có dấu cao đến đâu, chứ không khẳng định có hay không tuyệt đối. Chỉnh sửa mạnh có thể làm dấu yếu đi, và mỗi công cụ chỉ nhận ra thủy vân của chính nhà cung cấp đó. Quan trọng nhất: không tìm thấy thủy vân chẳng chứng minh được gì — nhiều công cụ tạo ảnh không hề thêm. Vì vậy [kiểm tra ảnh có phải AI không](how-to-check-if-image-is-ai-generated) cần cân nhắc nhiều manh mối cùng lúc.',
        ],
      },
      {
        heading: 'Điều này có ý nghĩa gì với quyền riêng tư của bạn',
        paragraphs: [
          'Theo mô tả công khai, thủy vân điểm ảnh đánh dấu nội dung do mô hình của nhà cung cấp tạo ra, chứ không lưu prompt của bạn dưới dạng chữ đọc được. Những thông tin hay làm lộ bạn nhất — prompt, mã tài khoản, vị trí, thiết bị — nằm trong metadata, và đó chính là lớp mà công cụ làm sạch xử lý được. Tóm lại: làm sạch bảo vệ thông tin cá nhân của bạn, còn thủy vân vẫn tiếp tục cho biết bức ảnh đến từ đâu.',
        ],
      },
    ],
    faqHeading: 'Về SynthID và thủy vân',
    faq: [
      {
        q: 'Ảnh không có thủy vân thì có phải ảnh thật không?',
        a: 'Không. Nhiều công cụ tạo ảnh không thêm thủy vân nào, nên chỉ riêng việc không có thủy vân không nói lên điều gì.',
      },
      {
        q: 'Thủy vân có làm lộ prompt của tôi không?',
        a: 'Theo mô tả công khai thì không. Prompt và thông tin tài khoản thường nằm trong metadata, phần sẽ bị xóa khi làm sạch.',
      },
      {
        q: 'Cắt ảnh hay chụp màn hình có xóa được SynthID không?',
        a: 'Thường là không. SynthID được thiết kế để tồn tại qua các thao tác phổ biến như cắt, đổi kích thước, chụp màn hình và nén.',
      },
      {
        q: 'AI Label Remover có xóa SynthID không?',
        a: 'Không. Công cụ chỉ gỡ metadata và không bao giờ sửa điểm ảnh, nên thủy vân vô hình vẫn còn.',
      },
      {
        q: 'Làm sao biết ảnh có SynthID?',
        a: 'Chỉ công cụ xác minh của Google mới trả lời được. Bộ đọc metadata không nhìn vào bên trong điểm ảnh.',
      },
      {
        q: 'Mọi ảnh AI đều có thủy vân?',
        a: 'Không. Một số nhà cung cấp đóng thủy vân, nhiều nơi thì không, còn công cụ chạy trên máy thường chẳng thêm gì.',
      },
    ],
  },

  'turn-off-content-credentials-photoshop-lightroom': {
    metaTitle: 'Content Credentials trong Photoshop và Lightroom',
    related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'iptc-digitalsourcetype-ai'],
    title: 'Content Credentials trong Photoshop và Lightroom: kiểm soát và làm sạch ảnh xuất',
    summary: [
      'Ứng dụng của Adobe có thể gắn Content Credentials vào ảnh xuất — một nhật ký chỉnh sửa có chữ ký, gồm cả các tính năng AI tạo sinh bạn đã dùng. Tiện để chứng minh tác phẩm, nhưng cũng là lý do phổ biến khiến ảnh chỉ chỉnh sửa nhẹ bị gắn nhãn AI.',
      'Dưới đây là nguồn gốc của Content Credentials, cách kiểm tra một tệp xuất, và cách xóa chúng khỏi bản sao khi bạn cần tệp sạch.',
    ],
    description:
      'Content Credentials trong Photoshop và Lightroom từ đâu ra, cách kiểm tra ảnh xuất có dữ liệu C2PA không, và cách xóa khỏi bản sao mà không giảm chất lượng.',
    sections: [
      {
        heading: 'Hai đường để credentials được gắn vào',
        paragraphs: ['Một tệp xuất có thể mang Content Credentials vì một trong hai lý do:'],
        bullets: [
          'Bạn đã bật Content Credentials, nên ứng dụng ký danh tính và lịch sử chỉnh sửa của bạn vào tệp xuất.',
          'Bạn đã dùng tính năng tạo sinh như [Generative Fill](made-with-ai-label), và Adobe gắn credentials mô tả nội dung là được chỉnh bằng AI.',
        ],
      },
      {
        heading: 'Kiểm tra trước khi đăng',
        paragraphs: [
          'Đặt tệp JPEG hoặc PNG vừa xuất lên bàn soi ở đầu trang. Nếu báo cáo có khối C2PA, claim generator như Adobe Photoshop, các hành động c2pa và [kiểu nguồn ảnh ghép AI](iptc-digitalsourcetype-ai), [những nền tảng đọc credentials có thể gắn nhãn ảnh](which-platforms-label-ai-images).',
        ],
      },
      {
        heading: 'Cài đặt trong ứng dụng Adobe',
        paragraphs: [
          'Adobe liên tục mở rộng Content Credentials và vị trí tùy chọn thay đổi giữa các phiên bản. Ở bản gần đây, hãy tìm bảng Content Credentials trong Photoshop và mục Content Credentials trong hộp thoại xuất của Lightroom; trang trợ giúp của Adobe có hướng dẫn cho đúng phiên bản bạn dùng. Tắt tùy chọn này có thể vẫn không ngăn credentials được gắn vào các chỉnh sửa tạo sinh.',
        ],
      },
      {
        heading: 'Làm sạch một bản sao',
        paragraphs: [
          'Khi cần tệp sạch cho cổng giao ảnh khách hàng, chợ ảnh hay mạng xã hội, hãy [xóa khối C2PA](remove-c2pa-content-credentials) khỏi một bản sao. AI Label Remover cắt manifest khỏi chuỗi byte, giữ điểm ảnh, kích thước, hướng xoay và hồ sơ màu, rồi đọc lại kết quả để bạn xác nhận không còn gì sót.',
        ],
      },
      {
        heading: 'Lưu trữ bản gốc có chữ ký',
        paragraphs: [
          'Credentials có thể là bằng chứng giá trị về quyền tác giả và quá trình chỉnh sửa. Hãy lưu bản xuất gốc kèm credentials, và chỉ chia sẻ bản đã làm sạch khi metadata có thể gây hiểu nhầm hoặc tiết lộ nhiều hơn bạn muốn.',
        ],
      },
    ],
    faqHeading: 'Về Content Credentials của Adobe',
    faq: [
      {
        q: 'Vì sao Instagram gắn nhãn AI cho ảnh tôi chỉnh bằng Photoshop?',
        a: 'Generative Fill, Generative Expand và các tính năng tương tự ghi lại thao tác AI vào Content Credentials hoặc trường IPTC, và Meta đọc các tín hiệu đó khi tải lên.',
      },
      {
        q: 'Tắt credentials rồi thì chỉnh sửa tạo sinh còn bị ghi không?',
        a: 'Vẫn có thể. Adobe gắn credentials cho nội dung tạo sinh, nên hãy kiểm tra tệp xuất thay vì chỉ tin vào cài đặt.',
      },
      {
        q: 'Làm sạch có làm mất các chỉnh sửa của tôi không?',
        a: 'Không. Chỉ khối metadata bị gỡ; điểm ảnh đã chỉnh được chép nguyên.',
      },
      {
        q: 'Sau này gắn credentials lại được không?',
        a: 'Không gắn lại vào bản đã làm sạch được, nhưng bạn có thể xuất lại từ tệp gốc khi bật credentials.',
      },
    ],
  },

  'which-platforms-strip-photo-metadata': {
    metaTitle: 'Ứng dụng nào xóa metadata ảnh? WhatsApp, Telegram, Facebook',
    related: ['remove-gps-location-from-photos', 'view-remove-metadata-iphone-android', 'image-metadata-viewer-online'],
    title: 'Ứng dụng nào xóa metadata ảnh — và ứng dụng nào lặng lẽ chuyển GPS của bạn đi',
    summary: [
      'Nhiều người nghĩ mạng xã hội tự xóa metadata và vị trí khỏi ảnh. Với bản đăng công khai thì thường đúng. Nhưng tệp gốc vẫn có thể đi kèm đầy đủ EXIF qua ứng dụng nhắn tin, email, liên kết đám mây và trang chia sẻ tệp.',
      'Bài này xếp các đường chia sẻ phổ biến vào hai nhóm “thường bị xóa” và “thường được giữ”, và kết thúc bằng thói quen luôn hiệu quả: làm sạch tệp trước khi nó rời khỏi máy.',
    ],
    description:
      'Mạng xã hội và ứng dụng nhắn tin nào xóa metadata ảnh, đường chia sẻ nào giữ GPS và EXIF, và cách chắc chắn ảnh đã sạch trước khi gửi.',
    sections: [
      {
        heading: 'Bản công khai và tệp gốc',
        paragraphs: [
          'Đăng ảnh lên bảng tin, đa số nền tảng lớn sẽ mã hóa lại và bỏ EXIF khỏi bản công khai. Người xem không thấy vị trí GPS của bạn, nhưng nền tảng vẫn nhận được bản gốc lúc tải lên. Rủi ro lớn hơn nằm ở mọi đường chuyển tiếp nguyên tệp gốc.',
        ],
      },
      {
        heading: 'Thường bị xóa',
        paragraphs: [],
        bullets: [
          'Ảnh đăng lên bảng tin của các mạng lớn như Facebook, Instagram và X.',
          'Ảnh gửi dạng ảnh nén thông thường trong nhiều ứng dụng nhắn tin.',
          'Phần lớn ảnh mà nền tảng thu nhỏ hoặc chuyển định dạng trước khi hiển thị cho người khác.',
        ],
      },
      {
        heading: 'Thường được giữ',
        paragraphs: [],
        bullets: [
          'Ảnh gửi “dạng tệp” hoặc “dạng tài liệu” trong ứng dụng như WhatsApp, Telegram hay Zalo.',
          'Tệp đính kèm email và chia sẻ qua liên kết đám mây (Drive, Dropbox, iCloud và tương tự).',
          'Diễn đàn, chợ mua bán và trang portfolio phục vụ nguyên tệp tải lên.',
          'Cộng đồng nhiếp ảnh cố ý hiển thị EXIF, như bảng thông số máy chụp.',
        ],
      },
      {
        heading: 'Tự kiểm tra đường gửi của bạn',
        paragraphs: [
          'Ứng dụng thay đổi cách xử lý ảnh liên tục. Muốn chắc chắn, hãy tự gửi cho mình một tấm ảnh theo cách bạn vẫn làm, tải tệp nhận được về và đặt lên bàn soi của AI Label Remover: [thẻ “Tệp tiết lộ gì”](image-metadata-viewer-online) cho thấy ngay dữ liệu địa điểm, con người hay thời gian có lọt qua không.',
        ],
      },
      {
        heading: 'Làm sạch trước khi gửi',
        paragraphs: [
          'Thói quen đáng tin nhất là xóa metadata trước khi ảnh rời khỏi máy. AI Label Remover [gỡ GPS, ngày giờ, thông tin thiết bị và tác giả](remove-gps-location-from-photos) cùng ảnh xem trước ẩn, giữ hướng xoay và màu sắc, và làm tất cả ngay trên máy — rất hợp với ảnh gửi cho người lạ, người mua hay khách hàng. Trang [xóa dữ liệu EXIF](remove-exif-data) giải thích từng trường được gỡ.',
        ],
      },
    ],
    faqHeading: 'Về ứng dụng và metadata ảnh',
    faq: [
      {
        q: 'Gửi ảnh qua email có mất metadata không?',
        a: 'Thường là không. Tệp đính kèm được gửi nguyên bản gốc, nên EXIF và GPS đi theo, trừ khi ứng dụng email thu nhỏ ảnh trước.',
      },
      {
        q: 'WhatsApp có xóa GPS không?',
        a: 'Gửi như ảnh bình thường thì ảnh bị nén và rơi gần hết metadata. Gửi như tài liệu thì tệp gốc đi nguyên vẹn, GPS cũng đi theo.',
      },
      {
        q: 'Instagram có giữ vị trí ảnh của tôi không?',
        a: 'Ảnh đăng công khai đã bị bỏ EXIF. Thẻ vị trí bạn tự thêm vào bài đăng là chuyện riêng và ai cũng thấy.',
      },
      {
        q: 'Chụp màn hình chẳng phải là đủ rồi sao?',
        a: 'Cách đó bỏ được EXIF nhưng giảm chất lượng, đổi kích thước và có thể chụp dính thứ khác trên màn hình. Xóa metadata theo cách không mất dữ liệu thì giữ nguyên bức ảnh gốc.',
      },
    ],
  },

  'view-remove-metadata-iphone-android': {
    metaTitle: 'Xem, xóa thông tin và vị trí ảnh trên iPhone, Android',
    related: ['remove-gps-location-from-photos', 'remove-metadata-windows-mac', 'which-platforms-strip-photo-metadata'],
    title: 'Xem và xóa metadata ảnh trên iPhone và Android',
    summary: [
      'Điện thoại ghi lại nơi và lúc chụp từng tấm ảnh, kèm đời máy. Cả iOS và Android đều cho bạn xem thông tin này và bỏ vị trí trước khi chia sẻ.',
      'Dưới đây là các tùy chọn có sẵn, chỗ chúng còn thiếu, và cách xóa sạch mọi thông tin nhận dạng ngay trong trình duyệt mà không cần cài ứng dụng.',
    ],
    description:
      'Xem thông tin ảnh (metadata) trên iPhone và Android, xóa vị trí ảnh trước khi chia sẻ, và xóa toàn bộ EXIF — kể cả ảnh HEIC — ngay trong trình duyệt, không cần cài ứng dụng.',
    sections: [
      {
        heading: 'Trên iPhone: xem thông tin',
        paragraphs: [
          'Mở ảnh trong ứng dụng Ảnh và vuốt lên, hoặc chạm nút thông tin. Bạn sẽ thấy ngày giờ, máy ảnh và ống kính, thông số phơi sáng và, nếu bật định vị, một bản đồ. Tùy chọn Điều chỉnh cạnh ngày giờ cho phép sửa ngày, giờ hoặc vị trí của ảnh đó.',
        ],
      },
      {
        heading: 'Trên iPhone: chia sẻ không kèm vị trí',
        paragraphs: ['Có hai tùy chọn sẵn có:'],
        bullets: [
          'Trong bảng chia sẻ, chạm Tùy chọn ở phía trên và tắt Vị trí trước khi gửi.',
          'Để ngừng gắn vị trí cho ảnh mới, vào Cài đặt › Quyền riêng tư & Bảo mật › Dịch vụ định vị › Camera và chọn Không bao giờ.',
        ],
      },
      {
        heading: 'Trên Android',
        paragraphs: [
          'Trong Google Photos, mở ảnh và vuốt lên để xem chi tiết như ngày, thiết bị và vị trí; tùy phiên bản, bạn có thể sửa hoặc xóa vị trí ngay tại đó. Để ngừng gắn vị trí cho ảnh mới, tắt tùy chọn vị trí trong cài đặt ứng dụng máy ảnh — tên và chỗ đặt tùy chọn khác nhau theo hãng.',
        ],
      },
      {
        heading: 'Chỗ thiếu của tùy chọn có sẵn',
        paragraphs: [
          'Cài đặt điện thoại chỉ tập trung vào vị trí. Đời máy, thời điểm chụp, thông tin ống kính, phần mềm chỉnh sửa và ảnh xem trước nhúng thường vẫn còn, và cài đặt chỉ áp dụng cho ảnh sau này hoặc một lần chia sẻ. [Tệp chép sang máy tính](remove-metadata-windows-mac) hoặc gửi qua ứng dụng khác giữ nguyên mọi thứ.',
        ],
      },
      {
        heading: 'Xóa sạch từ trình duyệt',
        paragraphs: [
          'Mở AI Label Remover trên điện thoại, chạm “Chọn ảnh”, đọc báo cáo rồi chạm “Xóa toàn bộ metadata”. [Dữ liệu GPS, thời gian, thiết bị và tác giả bị gỡ](remove-gps-location-from-photos) — kể cả với ảnh HEIC của iPhone — trong khi hướng xoay và màu sắc được giữ. Không tải lên, không cài ứng dụng — trang [xóa metadata HEIC](heic-metadata-remover) cho biết ảnh iPhone ghi lại những gì.',
        ],
      },
      {
        heading: 'iPhone: HEIC, JPEG và Live Photos',
        paragraphs: [
          'Mặc định iPhone lưu ảnh dạng HEIC (Cài đặt › Camera › Định dạng › Hiệu suất cao); chọn Tương thích nhất thì ảnh được lưu dạng JPEG. Cả hai định dạng đều chứa EXIF giống nhau — vị trí, thời gian, thiết bị và ống kính. Khi gửi ảnh sang thiết bị không phải của Apple, iOS có thể chuyển ảnh sang JPEG, nhưng metadata thường vẫn đi theo. Live Photos còn kèm một đoạn video ngắn có metadata riêng; AI Label Remover làm sạch phần ảnh tĩnh, nên khi cần riêng tư hãy chia sẻ Live Photo dưới dạng ảnh tĩnh.',
        ],
      },
      {
        heading: 'Android: mỗi hãng một kiểu',
        paragraphs: [
          'Điện thoại Android dùng chung các trường EXIF nhưng menu thì khác nhau. Có ứng dụng thư viện cho phép bật tùy chọn xóa dữ liệu vị trí ngay trên màn hình chia sẻ; có ứng dụng chỉ cho sửa thông tin từng ảnh một. Google Photos có cài đặt ẩn vị trí với người xem liên kết và album bạn chia sẻ, nhưng không ảnh hưởng đến tệp gửi qua đường khác. Tên menu thay đổi theo phiên bản, nên nếu không tìm thấy tùy chọn, làm sạch tệp là cách dự phòng chắc chắn.',
        ],
      },
      {
        heading: 'Cái bẫy “gửi dưới dạng tệp”',
        paragraphs: [
          'Ứng dụng nhắn tin thường nén ảnh và bỏ phần lớn metadata khi bạn gửi theo cách thông thường. Nhưng gửi cùng bức ảnh dưới dạng tệp hoặc tài liệu — thường để giữ nguyên chất lượng — thì bản gốc đến tay người nhận còn nguyên, kể cả vị trí. AirDrop, Chia sẻ lân cận, email và liên kết đám mây cũng vậy. Đó chính là lúc cần [kiểm tra tệp tiết lộ gì](remove-gps-location-from-photos) và làm sạch trước.',
        ],
      },
      {
        heading: 'Thói quen hai phút trên điện thoại',
        paragraphs: [],
        bullets: [
          'Mở AI Label Remover trên trình duyệt điện thoại và thêm vào màn hình chính để dùng lần sau.',
          'Chạm “Chọn ảnh” và chọn những ảnh sắp chia sẻ.',
          'Đọc báo cáo, chạm “Xóa toàn bộ metadata” và kiểm tra khung màu xanh.',
          'Lưu bản đã làm sạch và chia sẻ những bản đó, không phải ảnh gốc.',
        ],
      },
    ],
    faqHeading: 'Về metadata ảnh điện thoại',
    faq: [
      {
        q: 'AirDrop có giữ dữ liệu vị trí không?',
        a: 'Có thể. AirDrop gửi tệp gốc. Chạm Tùy chọn ở đầu bảng chia sẻ và tắt Vị trí, hoặc làm sạch tệp trước.',
      },
      {
        q: 'Chụp màn hình bức ảnh có xóa được metadata không?',
        a: 'Cách này bỏ được EXIF gốc nhưng làm giảm chất lượng, và ảnh chụp màn hình lại có metadata riêng. Làm sạch ảnh gốc không mất chất lượng và triệt để hơn.',
      },
      {
        q: 'Có cần cài ứng dụng để xóa EXIF trên điện thoại không?',
        a: 'Không. Tùy chọn có sẵn bỏ được vị trí cho từng lần chia sẻ, còn AI Label Remover chạy trong trình duyệt của điện thoại để gỡ phần còn lại mà không cần cài gì.',
      },
      {
        q: 'Tắt định vị có làm sạch ảnh đã chụp trước đó không?',
        a: 'Không. Nó chỉ áp dụng cho ảnh mới. Ảnh cũ vẫn giữ vị trí cho tới khi bạn gỡ đi.',
      },
      {
        q: 'Ảnh HEIC chụp từ iPhone có dùng được không?',
        a: 'Có. Tệp HEIC được xử lý trực tiếp, không chuyển sang JPEG và không mã hóa lại.',
      },
      {
        q: 'Tắt vị trí khi chia sẻ trên iPhone là đã sạch metadata chưa?',
        a: 'Chủ yếu chỉ bỏ vị trí. Đời máy và thời điểm chụp có thể vẫn còn trong tệp gửi đi.',
      },
    ],
  },

  'what-is-exif-data': {
    metaTitle: 'EXIF là gì? Thông tin ảnh, rủi ro riêng tư và cách xóa',
    related: ['image-metadata-viewer-online', 'remove-gps-location-from-photos', 'remove-metadata-without-losing-quality'],
    title: 'Dữ liệu EXIF, giải thích không cần thuật ngữ',
    summary: [
      'EXIF (Exchangeable Image File Format) là phần thông tin ẩn mà máy ảnh hoặc điện thoại ghi vào mỗi tấm ảnh: thông số chụp, ngày giờ, đời máy và thường cả vị trí GPS.',
      'Bài này nói về những gì EXIF chứa, nó khác XMP, IPTC và C2PA ra sao, vì sao nó quan trọng với quyền riêng tư, và cách xem hoặc xóa an toàn.',
    ],
    description:
      'Dữ liệu EXIF (thông tin ảnh) là gì, chứa những trường nào (máy chụp, thời gian, GPS), khác XMP, IPTC và C2PA ra sao, và cách xem hoặc xóa sạch mà không giảm chất lượng ảnh.',
    sections: [
      {
        heading: 'Bạn sẽ thấy gì trong EXIF',
        paragraphs: ['Một tấm ảnh thông thường có thể gồm:'],
        bullets: [
          'Thiết bị — hãng và đời máy ảnh hoặc điện thoại, ống kính, đôi khi cả số sê-ri.',
          'Phơi sáng — ISO, khẩu độ, tốc độ màn trập, tiêu cự và đèn flash.',
          'Thời gian — lúc chụp và lần sửa gần nhất, thường kèm múi giờ.',
          'Vị trí — vĩ độ, kinh độ, độ cao và đôi khi cả hướng.',
          'Phần phụ — hướng xoay, một ảnh thu nhỏ nhúng và tên phần mềm chỉnh sửa.',
        ],
      },
      {
        heading: 'EXIF được cất thế nào',
        paragraphs: [
          'Trong tệp JPEG, EXIF nằm trong segment APP1 gần đầu tệp và chia thành các thư mục (IFD): IFD0 cho thông tin ảnh và thiết bị cơ bản, thư mục Exif cho thông số chụp và [thư mục GPS cho vị trí](remove-gps-location-from-photos). Tệp HEIC, WebP và PNG cũng có thể chứa EXIF trong hộp chứa riêng của chúng.',
        ],
      },
      {
        heading: 'So với XMP, IPTC và C2PA',
        paragraphs: [],
        bullets: [
          'EXIF — thông số kỹ thuật mà máy ảnh, điện thoại ghi lại ngay lúc bấm máy.',
          'XMP — khuôn dạng XML mềm dẻo, phần mềm chỉnh ảnh dùng để ghi mô tả, từ khóa, lịch sử sửa và các trường AI.',
          'IPTC — phần mô tả và bản quyền mà tòa soạn, kho ảnh hay dùng; trong đó có [DigitalSourceType](iptc-digitalsourcetype-ai) để đánh dấu nội dung AI.',
          'C2PA — [Content Credentials có chữ ký](what-is-c2pa-content-credentials) ghi lại nguồn gốc và các lần chỉnh sửa.',
        ],
      },
      {
        heading: 'Vì sao EXIF đáng quan tâm',
        paragraphs: [
          'Với nhiếp ảnh gia, EXIF là công cụ học hỏi và là hồ sơ tác phẩm. Với phần đông mọi người, nó chủ yếu là rủi ro riêng tư: một tấm ảnh có thể lộ địa chỉ nhà, thiết bị và thời điểm ai đó có mặt ở đâu. EXIF cũng rất dễ sửa, nên không bao giờ được coi là bằng chứng nếu chỉ có một mình nó.',
        ],
      },
      {
        heading: 'Xem và xóa cho đúng cách',
        paragraphs: [
          'Bảng thông tin của hệ điều hành chỉ hiện vài trường; [AI Label Remover giải mã mọi trường EXIF, XMP và IPTC](image-metadata-viewer-online) rồi nhóm theo nguồn. Khi xóa EXIF, hãy giữ thẻ hướng xoay để ảnh không bị xoay sai, giữ hồ sơ màu để màu chính xác, và [tránh mọi công cụ nén lại ảnh](remove-metadata-without-losing-quality). Công cụ [xóa dữ liệu EXIF](remove-exif-data) tự làm cả ba điều đó.',
        ],
      },
      {
        heading: 'EXIF ra đời từ đâu',
        paragraphs: [
          'EXIF được các hãng điện tử Nhật Bản tạo ra vào giữa thập niên 1990 để máy ảnh số ghi lại thông số theo một cách chung. Ngày nay chuẩn này do CIPA và JEITA cùng duy trì. Ý tưởng cốt lõi gần như không đổi: một danh sách thẻ được đánh số, mỗi thẻ chứa một giá trị. Các phiên bản mới bổ sung múi giờ, số sê-ri ống kính và, ở Exif 3.0, hỗ trợ chữ UTF-8 đầy đủ. Điện thoại dùng nguyên chuẩn này, nên ảnh chụp bằng smartphone có cùng cấu trúc với máy ảnh du lịch năm 2005 — chỉ khác là GPS chính xác hơn rất nhiều.',
        ],
      },
      {
        heading: 'Những trường khiến nhiều người bất ngờ',
        paragraphs: ['Ngoài ngày giờ và vị trí, một số thẻ tiết lộ nhiều hơn bạn nghĩ:'],
        bullets: [
          'OffsetTime — chênh lệch múi giờ, đủ để khoanh vùng khu vực ngay cả khi ảnh không có GPS.',
          'BodySerialNumber, LensSerialNumber và CameraOwnerName — các giá trị có thể nối nhiều bức ảnh về cùng một máy ảnh và một người.',
          'GPSImgDirection — hướng máy ảnh lúc chụp, đôi khi đủ để xác định một ô cửa sổ hay ban công.',
          'Software — tên và phiên bản ứng dụng chỉnh sửa, gợi ý ảnh đã được làm gì.',
          'MakerNote — khối dữ liệu riêng của hãng, có thể chứa số lần bấm máy, số sê-ri nội bộ và dữ liệu lấy nét hay nhận diện khuôn mặt.',
        ],
      },
      {
        heading: 'Ảnh thu nhỏ còn sót lại sau khi chỉnh sửa',
        paragraphs: [
          'Nhiều tệp giữ một ảnh xem trước nhỏ trong thư mục thứ hai, IFD1. Có ứng dụng chỉnh sửa cập nhật ảnh chính nhưng để nguyên ảnh xem trước này, nên phần đã cắt hoặc đã làm mờ có thể bị lộ lại chỉ bằng cách đọc ảnh thu nhỏ. Điện thoại còn lưu ảnh xem trước lớn hơn và ảnh phụ (MPF) kèm EXIF riêng. Làm sạch đúng cách phải xóa cả những bản sao ẩn này — vì vậy AI Label Remover bỏ ảnh thu nhỏ nhúng và ảnh MPF, chứ không chỉ xóa trắng các thẻ GPS.',
        ],
      },
      {
        heading: 'Nên giữ gì, nên xóa gì',
        paragraphs: [
          'Với mọi thứ chia sẻ công khai — bài đăng mạng xã hội, tin rao bán, tệp gửi qua chat, ảnh tải lên diễn đàn — xóa toàn bộ EXIF nhận dạng là lựa chọn an toàn. Có hai thứ nên giữ vì chúng ảnh hưởng đến cách hiển thị chứ không liên quan danh tính: thẻ xoay ảnh và cấu hình màu. Nếu muốn được ghi công, chú thích hay hình mờ hiển thị trên ảnh bền hơn nhiều so với trường bản quyền trong EXIF, vốn bị phần lớn nền tảng bỏ đi. Hãy giữ ảnh gốc trong kho riêng của bạn và chỉ chia sẻ bản đã làm sạch.',
        ],
      },
    ],
    faqHeading: 'Về EXIF',
    faq: [
      {
        q: 'EXIF có phải là metadata không?',
        a: 'EXIF là một loại metadata. Một tệp còn có thể chứa XMP, IPTC, C2PA và đoạn văn bản riêng của từng định dạng, nên công cụ làm sạch kỹ phải xem xét nhiều hơn EXIF.',
      },
      {
        q: 'Ảnh chụp màn hình có EXIF không?',
        a: 'Thường ít hơn nhiều — không có thông số máy ảnh hay GPS — nhưng vẫn có thể ghi lại thiết bị, phần mềm và thời điểm chụp.',
      },
      {
        q: 'Xem dữ liệu EXIF bằng cách nào?',
        a: 'Trên Windows mở Properties › Details, trên Mac dùng Inspector của Preview, trên điện thoại mở thông tin ảnh. Muốn xem mọi trường, kể cả XMP và IPTC, hãy dùng trình xem đầy đủ như AI Label Remover.',
      },
      {
        q: 'EXIF có ảnh hưởng tới vẻ ngoài của ảnh không?',
        a: 'Không. EXIF được lưu tách khỏi dữ liệu ảnh, nên gỡ nó đi không thay đổi gì khi nhìn.',
      },
      {
        q: 'EXIF có làm giả được không?',
        a: 'Rất dễ. Công cụ phổ biến có thể ghi lại các trường EXIF, nên chỉ xem chúng là manh mối, không bao giờ là bằng chứng.',
      },
      {
        q: 'Hướng xoay cũng là EXIF — AI Label Remover có giữ không?',
        a: 'Có. Nó được ghi lại trong một khối EXIF tối giản để ảnh luôn hiển thị đúng chiều.',
      },
    ],
  },
};

export default vi;
