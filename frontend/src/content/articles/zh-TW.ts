import type { Articles } from './types';

const zhTW: Articles = {
  'made-with-ai-label': {
    metaTitle: '為什麼真實照片在 Instagram 會被加上「AI 資訊」標籤',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      '真實照片在 Instagram 或 Facebook 被標註「AI 資訊」通常是因為修圖軟體寫入了 C2PA 或 IPTC 欄位。教你如何無失真找出並清除這些中繼資料。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '平台標籤讀取的是檔案資料，而非照片畫面',
        paragraphs: [
          'Meta 的「AI 資訊」（原「由 AI 建立」）標籤會在圖片包含公認的生成式 AI 訊號時自動套用。兩大核心訊號潛藏於檔案結構中：[包含內容憑證的 C2PA 資訊清單](what-is-c2pa-content-credentials)以及 XMP 中的 IPTC DigitalSourceType 屬性。',
          '屬性值 trainedAlgorithmicMedia 代表整張圖片完全由演算法生成，而 compositeWithTrainedAlgorithmicMedia 則代表真實照片中含有 AI 元素。各大社群平台在使用者上傳時均會自動掃描這些中繼資料。',
        ],
      },
      {
        heading: '真實照片中的 AI 訊號從何而來',
        paragraphs: ['由相機或手機親自拍攝的照片，被加註 AI 訊號的原因多半源於後期編輯工具：'],
        bullets: [
          'Photoshop 或 Lightroom 的生成式填色、生成式擴展或 AI 移除工具，會寫入 c2pa 動作並將檔案標記為合成影像。',
          '在開啟內容憑證狀態下轉存圖片，軟體會將所有編修歷程簽署記錄於檔案中。',
          '智慧型手機內建的「物件橡皮擦」功能在消除雜物後，會在 EXIF/XMP 中留下編修註記。',
          '部分圖片編輯軟體在重複儲存時保留了此前的 AI 標記，導致標籤持續沿用。',
        ],
      },
      {
        heading: '使用 AI Label Remover 定位引發標籤的欄位',
        paragraphs: [
          '將圖片拖入工作區，「AI 痕跡」分頁會列出檔案中具體的指標（例如 C2PA JUMBF 或 IPTC XMP）。切換至「原始中繼資料」還可以檢視對資訊清單簽章的工具以及記錄的編修操作歷程。',
          '即使未明確包含 AI 生成註記，只要存在內容憑證清單，部分平台也會採取保守政策加上標籤，因此建議在發布前先行檢查並清理。',
        ],
      },
      {
        heading: '無失真清理用於發布的圖片複本',
        paragraphs: [
          '點擊「移除所有中繼資料」，AI Label Remover 會從二進位資料流中精準剝離 C2PA、XMP、IPTC 和 EXIF 資料塊，同時保持像素資料、尺寸、旋轉角度與 ICC 色彩設定檔完全不變。詳細資訊請參閱 [AI 標籤清除器](ai-tag-cleaner) 頁面。',
          '一般影像軟體重新另存為 JPEG 會再次壓縮圖片導致畫質減損，而位元組級區塊修剪技術則徹底避免了這種二次壓縮劣化。',
        ],
      },
      {
        heading: '修正錯誤標記與保持真實透明',
        paragraphs: [
          '清理中繼資料旨在保護個人隱私並糾正真實照片遭到誤標的情況。如果作品完全由生成式 AI 所創造，創作者仍應遵守平台規範如實向大眾揭露。',
        ],
      },
    ],
    faqHeading: '關於 AI 標籤的常見問題',
    faq: [
      { q: '發布貼文後還能移除「AI 資訊」標籤嗎？', a: '通常無法直接修改已發布的貼文。建議使用 [AI 標籤清除器](ai-tag-cleaner) 清理原圖後重新發布。' },
      { q: '清除中繼資料能保證標籤一定消失嗎？', a: '能徹底消除檔案層面（C2PA 與 IPTC）觸發的標籤。但如果平台使用了獨立的畫面視覺分類模型，則屬於不同判定邏輯。' },
      { q: '清理後照片畫質或解析度會改變嗎？', a: '完全不會。圖片像素資料採用逐位元組完整複製，僅修剪了標頭區塊的中繼資料描述。' },
      { q: '能保留相機拍攝參數只刪除 AI 欄位嗎？', a: '為確保最高程度的安全與隱私，工具預設採用一站式全面清除方案（包含 GPS 與設備資訊）。' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: '從 PNG 圖片清除 ComfyUI 工作流程與 Stable Diffusion 提示詞',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111、Forge 和 ComfyUI 會將完整提示詞、種子碼及節點流程圖寫入 PNG 檔案。教你無失真去除這些機密資訊。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '隨圖片傳播的生成參數',
        paragraphs: [
          '在 Stable Diffusion WebUI (AUTOMATIC1111)、Forge 或 ComfyUI 中產出的 PNG 圖片，會在文字資料塊（tEXt、zTXt、iTXt）中完整保存生成參數。',
          '在 ComfyUI 中，這包含了整個節點流程圖的 JSON 資料。任何人只要將 PNG 拖入 ComfyUI 介面，就能立即重現你使用的所有提示詞、LoRA 模型、本機路徑與參數設定。',
        ],
      },
      {
        heading: '為何需要清除生成資料',
        paragraphs: [
          '在商業專案或專業創作中，提示詞工程與專屬的節點流程是核心智財資產，直接公開等於無償奉送創作結晶。',
          '此外，工作流程文字可能無意間洩露創作者電腦上的個人資料夾路徑，且大幅增加 PNG 的檔案容量。',
        ],
      },
      {
        heading: '在 AI Label Remover 中檢查與清除',
        paragraphs: [
          '透過 [PNG 中繼資料清理工具](png-metadata-remover)，你可以先查閱正反向提示詞和模型細節，然後一鍵剝離所有文字區塊。',
          '用於影像顯示的 IHDR、IDAT、PLTE 和 iCCP 色彩設定檔將受到嚴格保護，確保顯示效果始終如一。',
        ],
      },
      {
        heading: '清理完成後的檔案狀態',
        paragraphs: [
          '清理後的 PNG 在視覺上與原圖毫無二致，但當它被拖入 ComfyUI 或中繼資料檢視器時，將只是一張純淨的普通圖片。',
        ],
      },
    ],
    faqHeading: 'Stable Diffusion 中繼資料常見問題',
    faq: [
      { q: '能否在 ComfyUI 中直接停用中繼資料儲存？', a: '可以，在 Save Image 節點設定中停用工作流程嵌入，或使用專用的無中繼資料儲存節點。' },
      { q: '清理後的 PNG 還能復原工作流程嗎？', a: '無法復原。文字資料塊已被徹底移除，檔案內不再含有任何節點資訊。' },
      { q: '清理後的 PNG 會改變透明色版或色彩嗎？', a: '不會。所有影像像素及透明度數值均保持原生狀態。' },
      { q: '轉為 JPEG 或 WebP 是否也能清除？', a: '轉格式會清除 PNG 文本塊，但會造成影像二次壓縮失真。AI Label Remover 能維持 PNG 無失真原質。' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: '從 Midjourney 與 DALL·E 圖片中刪除提示詞與來源資訊',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Midjourney、DALL·E 3 與 Firefly 的下載圖片包含提示詞、工作 ID 與 AI 來源標記。在公開分享前清除這些隱藏資訊。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '雲端生成工具在檔案中寫入了什麼',
        paragraphs: [
          '與本機運行的工具類似，Midjourney、OpenAI DALL·E 3 和 Adobe Firefly 等線上服務會在檔案標頭嵌入工作 ID、創作時間與 [C2PA](what-is-c2pa-content-credentials) 數位簽章。',
          'Midjourney 甚至會將原始提示詞明文存放在 XMP 或 EXIF 描述區塊中，任何下載原圖的人都能直接讀取。',
        ],
      },
      {
        heading: '將提示詞作為核心創意資產予以保護',
        paragraphs: [
          '經過多次微調得到的精華提示詞凝聚了創作者的心血。若直接上傳原圖，競爭對手與爬蟲程式可以輕易複製你的配方。',
        ],
      },
      {
        heading: '清理前的預覽與快速去除',
        paragraphs: [
          'AI Label Remover 能快速解析並展示嵌入的提示詞內容，點擊一鍵清理即可抹除文字與追蹤標記，作品的畫質與色彩毫髮無傷。',
        ],
      },
      {
        heading: '需要了解的技術邊界',
        paragraphs: [
          '中繼資料清理針對的是檔案標頭區塊的資訊。如果平台使用了類似 Google SynthID 的不可見像素浮水印，中繼資料工具將無法將其消除。',
        ],
      },
    ],
    faqHeading: 'Midjourney 與 DALL·E 提示詞問答',
    faq: [
      { q: '別人能直接從我發布的圖片中看到提示詞嗎？', a: '只要發布平台沒有自動壓縮重繪原圖，下載者就能使用看圖工具檢視嵌入於 EXIF/XMP 中的提示詞。' },
      { q: '所有版本的 Midjourney 都會寫入提示詞嗎？', a: '是的，從官方網頁或 Discord 下載的原圖均普遍含有生成標記。' },
      { q: '清理會影響圖片的對比度或色彩嗎？', a: '不會。ICC 色彩設定檔與 RGB 像素資料完整保留。' },
      { q: '可以批次處理一系列生成的作品嗎？', a: '支援。透過 [批次中繼資料清理](batch-remove-metadata) 可一次拖入最多 50 張圖片平行處理。' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: '什麼是 C2PA？內容憑證（Content Credentials）白話解析',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      '白話解析 C2PA 與內容憑證：數位簽章資訊清單記錄了哪些內容，在各類圖片格式中的存放位置，以及安全移除它的方法。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '核心概念簡述',
        paragraphs: [
          'C2PA（內容來源和真實性聯盟）是由 Adobe、微軟、Google、Intel、Sony 等產業龍頭聯合制定的開放技術標準。其核心是為數位媒體嵌入帶有加密簽章的「數位身分憑證」（Content Credentials）。',
          '該憑證能完整追溯影像由何種設備拍攝、經歷過哪些後期軟體編修、是否使用了 AI 生成技術，並具備防竄改驗證能力。',
        ],
      },
      {
        heading: 'C2PA 資訊清單內部包含哪些項目',
        paragraphs: [
          '清單中包含主張鏈結：設備型號、編輯軟體版本、歷史縮圖、軟體操作歷程以及基於公開金鑰基礎架構的數位簽章。',
          '一旦使用了 AI 工具或生成濾鏡，清單中便會明確標註，成為社群媒體自動加上 AI 標籤的直接憑據。',
        ],
      },
      {
        heading: '在不同格式中的存放位置',
        paragraphs: [
          'JPEG 儲存在 APP11 標記區段（JUMBF 格式），PNG 存放在 caBX 資料區塊，HEIC 與 AVIF 則置於 uuid 盒子中。',
          '[移除 C2PA 內容憑證](remove-c2pa-content-credentials) 功能專門針對這些獨立的二進位結構進行安全修剪。',
        ],
      },
      {
        heading: '創作者為何選擇移除 C2PA',
        paragraphs: [
          '除了防止真實照片被誤標為 AI 作品外，還能有效保護創作者的電腦環境資訊、軟體帳號隱私，並省去清單帶來的數十至上百 KB 冗餘容量。',
        ],
      },
      {
        heading: '保留還是移除：權衡考量',
        paragraphs: [
          '在新聞攝影與法律存證領域，保留 C2PA 是證實真實性的強大助力；而在商業設計與日常分享中，清除中繼資料能夠給予創作者完全的隱私自主權。',
        ],
      },
    ],
    faqHeading: 'C2PA 與內容憑證常見問題',
    faq: [
      { q: 'C2PA 屬於不可見的影像浮水印嗎？', a: '不屬於。C2PA 是儲存於檔案標頭的元資料記錄，不修改任何實際像素值。' },
      { q: '目前哪些工具支援寫入 C2PA？', a: 'Adobe Photoshop、Lightroom、DALL·E 3、徠卡與尼康的新款相機及主流雲端生成平台。' },
      { q: '如何驗證檔案目前的 C2PA 簽章？', a: '造訪官方網站 verify.contentcredentials.org 或在 AI Label Remover 預覽面板中檢視。' },
      { q: '移除 C2PA 會損害畫質嗎？', a: '不會，移除僅剝離了相關的獨立二進位塊，影像本體未經過重新編碼。' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: '從手機與電腦照片中清除 GPS 地理位置資訊',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      '分享照片前徹底移除 GPS 座標：揭露 EXIF 如何洩漏你的住址、拍攝時間與設備型號，以及無失真清除位置的方法。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '手機相機在照片中默默打下的印記',
        paragraphs: [
          '智慧型手機（iPhone 與 Android）在拍照時，預設會將精確的經緯度、海拔高度甚至拍攝方位寫入 EXIF 結構中。',
          '如果直接傳送未經處理的原始檔案，任何人都可以根據座標查出你的住家地址、工作地點以及日常活動軌跡。',
        ],
      },
      {
        heading: '原始檔案外洩的常見途徑',
        paragraphs: [
          '社群平台在普通發圖時通常會自動壓縮並清除位置，但在透過通訊軟體傳送「原圖」、使用 AirDrop 隔空投送、電子郵件附件、雲端硬碟共享或刊登二手商品時，原圖內的 GPS 資料會完整保留。',
        ],
      },
      {
        heading: '清理前確認位置資訊',
        paragraphs: [
          '將照片置入 AI Label Remover，EXIF 區域會立即顯示是否存在 GPS 座標標籤，並展示具體定位與裝置資訊。',
        ],
      },
      {
        heading: '無失真去除敏感中繼資料',
        paragraphs: [
          '[清除 EXIF 資料](remove-exif-data) 能夠在不重壓畫質的前提下抹去地理位置與裝置特徵，確保照片原始色彩與細節清晰度。',
        ],
      },
      {
        heading: '從源頭關閉手機的位置權限',
        paragraphs: [
          'iOS：設定 > 隱私權與安全性 > 定位服務 > 相機 > 選擇「永不」。Android：開啟相機應用程式設定 > 關閉「儲存地理位置資訊」。',
        ],
      },
      {
        heading: '手機 GPS 資料的精確度',
        paragraphs: [
          '結合衛星導航與 Wi-Fi 輔助定位，手機記錄的座標誤差通常在 3 至 5 公尺以內，足以精確定位門牌號碼。',
        ],
      },
      {
        heading: '真實的隱私與人身安全風險',
        paragraphs: [
          '隨手分享的寵物照或日常照片一旦附帶住址座標，極易成為跟蹤騷擾或財產侵害的潛在隱患。',
        ],
      },
      {
        heading: '除 GPS 之外的其他敏感欄位',
        paragraphs: [
          '相機序號、精確至毫秒的拍攝時間戳記以及鏡頭參數同樣具備裝置指紋特徵。',
        ],
      },
      {
        heading: '養成公開分享前的檢查習慣',
        paragraphs: [
          '在公開發布重要原圖前，在瀏覽器中進行快速檢查與清理，是保障數位生活安全的好習慣。',
        ],
      },
    ],
    faqHeading: '照片 GPS 常見問題解答',
    faq: [
      { q: '清理後別人還能復原出地理位置嗎？', a: '不能，EXIF 中的 GPS 區塊已被物理剝除，具有不可逆性。' },
      { q: '發社群平台不是已經自動清除了嗎？', a: '一般發文大多會清除，但二手拍賣、雲端直傳及勾選「原圖」傳送時極易外洩。' },
      { q: 'iPhone 拍攝的 HEIC 格式能處理嗎？', a: '支援。透過 [HEIC 中繼資料清理](heic-metadata-remover) 可以在維持 HEIC 高效格式的前提下抹除座標。' },
      { q: '照片旋轉角度會被打亂嗎？', a: '不會，控制正確顯示方向的 Orientation 標籤會得到妥善保留。' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: '批次刪除圖片中繼資料 – 免費、無需上傳伺服器',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      '在瀏覽器中一次批次清理最多 50 張圖片：多執行緒極速平行處理，檔案不離開本機設備，支援打包下載為 ZIP 壓縮檔。',
    updated: '2026-10-23',
    sections: [
      {
        heading: '一次處理大批照片',
        paragraphs: [
          '無論是電商產品目錄、攝影作品集還是成套生活相簿，逐張清理費時費力。AI Label Remover 允許同時拖入多達 50 張圖片。',
          '底層利用多個 Web Worker 平行處理，全面調用你設備 CPU 的多核心效能。',
        ],
      },
      {
        heading: '純本機執行，無網路傳輸瓶頸',
        paragraphs: [
          '圖片完全在瀏覽器內部處理，無需將數十甚至數百 MB 的資料上傳至遠端伺服器，處理速度極為迅速。',
        ],
      },
      {
        heading: '每張結果均經重新檢驗',
        paragraphs: [
          '批次處理完成後，程式會自動回讀每張輸出圖片的標頭二進位資料，確保所有 EXIF、GPS、C2PA 和提示詞痕跡均已徹底消失後才提供下載。',
        ],
      },
      {
        heading: '保留原始檔案名稱並支援 ZIP 打包',
        paragraphs: [
          '所有清理後的檔案維持原檔案名稱，你可以單張儲存，或一鍵匯出為便於整理的 ZIP 壓縮檔案。',
        ],
      },
      {
        heading: '離線也能流暢使用',
        paragraphs: [
          '網頁載入完成後所有運算均本機離線執行，即使在無網路環境下也能放心處理高度機密的圖片。',
        ],
      },
    ],
    faqHeading: '批次清理中繼資料常見問題',
    faq: [
      { q: '同一批次可以混入不同的圖片格式嗎？', a: '可以，JPEG、PNG、WebP、HEIC、AVIF 等多種格式可混合拖入處理。' },
      { q: '為什麼單次上限設定為 50 張？', a: '該限制能夠兼顧處理效率與設備記憶體負擔，防止手機或輕量瀏覽器當機。' },
      { q: '打包下載為 ZIP 會修改檔案名稱嗎？', a: '不會，壓縮檔內完全保留上傳時的原檔案名稱。' },
      { q: '沒有網路連線時可以正常使用嗎？', a: '可以，網頁的核心處理邏輯由本機 JavaScript 引擎執行，完全支援離線操作。' },
    ],
  },

  'image-metadata-viewer-online': {
    title: '線上圖片中繼資料檢視器：一次查看 EXIF、GPS、XMP、IPTC 與 C2PA',
    metaTitle: '線上中繼資料檢視器：查看照片 EXIF、GPS 與 AI 資訊',
    summary: [
      '分享照片或相信一張下載的圖片之前，好的中繼資料檢視器能讓你看到檔案記錄的所有資訊，而不只是手機或檔案總管顯示的那幾個欄位。',
      '本指南說明完整的中繼資料檢查包含哪些內容、內建檢視器看不到什麼、為什麼許多線上 EXIF 檢視器本身就是隱私風險，以及如何解讀最重要的欄位。',
    ],
    description: '免費線上中繼資料檢視器：在瀏覽器中查看照片的 EXIF、GPS、XMP、IPTC、C2PA 與 AI 提示詞，無需上傳、免註冊。',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: '完整的中繼資料檢查包含什麼',
        paragraphs: ['徹底的中繼資料檢視器會讀取檔案中的每一個區塊，而不只是 EXIF：'],
        bullets: [
          'EXIF：相機或手機的品牌與型號、曝光、拍攝時間、鏡頭與方向。',
          'GPS：若開啟定位，會記錄緯度、經度、海拔與拍攝方向。另請參閱[如何移除照片中的 GPS 位置](remove-gps-location-from-photos)。',
          'XMP：編輯軟體、編輯紀錄、描述、評分與 AI 相關欄位。',
          'IPTC：說明文字、關鍵字、作者、版權與 DigitalSourceType（圖片的產生方式）。',
          'C2PA：[內容憑證（Content Credentials）](what-is-c2pa-content-credentials)，記錄誰簽署了檔案、做過哪些操作，以及是否使用 AI。',
          'PNG 文字區塊：[Stable Diffusion 參數與 ComfyUI 工作流程](remove-stable-diffusion-comfyui-metadata)等嵌入文字。',
          'ICC 色彩描述檔與縮圖：色彩資訊與隱藏的預覽圖。',
        ],
      },
      {
        heading: '內建檢視器的盲點',
        paragraphs: [
          'Windows 在「內容 › 詳細資料」中顯示中繼資料，macOS 在「預覽程式」的檢閱器或 Finder 的「取得資訊」中，iPhone 則是在照片上往上滑，Google 相簿在資訊面板中。想快速確認日期、相機與地點已經足夠，但這些工具只顯示部分 EXIF，通常完全忽略 XMP、IPTC、C2PA 與 PNG 文字。一個檔案在檔案總管裡看似乾淨，卻可能仍帶著完整的 AI 提示詞。',
        ],
      },
      {
        heading: '線上 EXIF 檢視器的隱私陷阱',
        paragraphs: [
          '許多「線上 EXIF 檢視器」網站會把你的圖片上傳到伺服器，在那裡讀取後再回傳報告。對隱私檢查而言，這完全本末倒置：你擔心的那張照片——連同 GPS 位置——已經被複製到第三方手上。請選擇在本機讀取檔案的檢視器。簡單的測試方法：開啟頁面後中斷網路，看看工具是否仍能運作。',
        ],
      },
      {
        heading: '用 AI Label Remover 檢視檔案',
        paragraphs: ['把圖片拖曳到本頁頂端的區域，結果會分成三個分頁：'],
        bullets: [
          '「它會透露什麼」：以白話摘要地點、人物、時間與裝置，並將 GPS 換算成十進位座標。',
          '「AI 痕跡」：C2PA 資訊清單、IPTC 來源類型、生成工具名稱與提示詞，並附上判定結果。',
          '「原始中繼資料」：依來源分組的所有欄位，包括 EXIF IFD0、Exif、GPS、XMP 命名空間、IPTC、C2PA 與 PNG 文字區塊。',
        ],
      },
      {
        heading: '最值得先看的欄位',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude：確切的拍攝地點，貼到地圖上就能看出它透露了什麼。',
          'DateTimeOriginal 與 ModifyDate：照片的拍攝時間與最後儲存時間。',
          'Make、Model、BodySerialNumber、LensSerialNumber：可能把多張照片連結到同一台裝置。',
          'Artist、Copyright、OwnerName：你可能不知道已被寫入的姓名。',
          'Software 與 CreatorTool：哪些應用程式處理過檔案，包括 AI 工具。',
          'DigitalSourceType 與 C2PA claim generator：圖片自己聲明的產生方式。詳見[如何判斷圖片是否為 AI 生成](how-to-check-if-image-is-ai-generated)。',
        ],
      },
      {
        heading: '檢視器幾乎什麼都沒顯示時',
        paragraphs: [
          '從社群平台儲存的圖片、螢幕截圖，或透過聊天軟體傳送的照片，通常已被重新壓縮並清除中繼資料。在這些情況下，資料很少或完全沒有是正常的，也無法說明照片是真實、經過編輯還是 AI 生成。如果來源很重要，請索取原始檔案。',
        ],
      },
      {
        heading: '查看不等於驗證',
        paragraphs: [
          '一般的中繼資料只是任何人都能修改的純文字，應視為線索而非證據。C2PA 不同，因為它有數位簽章；但檢視器顯示資訊清單，並不代表已驗證簽章——驗證請使用官方的內容憑證驗證工具。看完之後若想刪除這些資料，按下「移除所有中繼資料」即可移除中繼資料，圖片本身不會改變。[移除 EXIF 資料](remove-exif-data)頁面詳細說明了會刪除哪些內容。',
        ],
      },
    ],
    faqHeading: '關於查看中繼資料的常見問題',
    faq: [
      {
        q: '有不會上傳照片的免費中繼資料檢視器嗎？',
        a: '有。AI Label Remover 直接在你的瀏覽器中讀取檔案，無需上傳也不用帳號；頁面載入後即使離線也能使用。',
      },
      {
        q: '我能看到 AI 圖片的提示詞嗎？',
        a: '如果生成工具有儲存，就可以。Stable Diffusion 與 ComfyUI 的提示詞位於 PNG 文字區塊，有些服務則寫入 XMP 或 EXIF 欄位。',
      },
      {
        q: '為什麼 Windows 不顯示我的 PNG 中繼資料？',
        a: '檔案總管對 PNG 只顯示少數屬性。文字區塊、XMP 與 C2PA 在那裡看不到，但完整的檢視器會顯示出來。',
      },
      {
        q: '中繼資料能證明照片是假的嗎？',
        a: '中繼資料提供的是線索，而非定論。只有經過簽章的 C2PA 資料能可靠驗證；一般欄位很容易被修改或刪除。',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: '這張圖片是 AI 生成的嗎？直接檢查檔案本身的方法',
    metaTitle: '如何判斷圖片是否為 AI 生成（免費檢查）',
    summary: [
      '判斷圖片是否由 AI 生成，最快又可靠的線索就在檔案裡：C2PA 內容憑證、IPTC DigitalSourceType 欄位與生成工具留下的文字，常常會直接寫出製作圖片的工具。',
      '本文說明該找哪些線索、如何用在瀏覽器中執行的免費工具讀取，以及為什麼「什麼都沒找到」永遠不能證明照片是真的。',
    ],
    description: '在瀏覽器中讀取 C2PA、IPTC DigitalSourceType 與生成工具中繼資料，判斷圖片是否為 AI 生成，並了解每個訊號能證明什麼。',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: '先取得原始檔案',
        paragraphs: [
          '中繼資料只會保留在剛從相機或生成工具輸出的檔案中。螢幕截圖、重新存檔的副本，以及從社群平台下載的圖片通常都已重新編碼，大部分資料早已遺失。可以的話，請對方提供原始匯出檔——以「檔案」形式傳送，而不是壓縮過的照片。',
        ],
      },
      {
        heading: '線索一：內容憑證（C2PA）',
        paragraphs: [
          '支援 C2PA 的工具會附加[一份經數位簽章的來源紀錄](what-is-c2pa-content-credentials)。其中 claim generator 會寫出產生圖片的應用程式或服務，c2pa.actions 列出「created」「edited」等步驟，而 digitalSourceType 可以直接聲明圖片由 AI 生成。',
          '由於紀錄經過簽章，驗證工具還能判斷圖片在簽署後是否被修改。來自 AI 服務的資訊清單，是中繼資料所能提供最有力的證據。',
        ],
      },
      {
        heading: '線索二：IPTC DigitalSourceType',
        paragraphs: ['許多生成工具與編輯軟體會填寫一個標準 IPTC 欄位，描述內容的產生方式。最常見的值有：'],
        bullets: [
          'trainedAlgorithmicMedia：由生成式 AI 模型產生。',
          'compositeWithTrainedAlgorithmicMedia：真實照片中有部分區域由 AI 生成或替換，例如 Photoshop 的「生成填色」。',
          'algorithmicMedia：由不使用訓練資料的演算法產生，例如程序化藝術。',
          'digitalCapture：以相機拍攝，未聲明含有生成內容。',
        ],
      },
      {
        heading: '線索三：提示詞與工具名稱',
        paragraphs: [
          '[Stable Diffusion 介面與 ComfyUI](remove-stable-diffusion-comfyui-metadata) 會把提示詞、種子、模型與工作流程以文字形式存進 PNG 檔。其他工具則會在 XMP CreatorTool 或 EXIF Software 中留下名稱。這些痕跡都明確指向 AI 的參與，往往還能看出圖片是如何製作的。這也是為什麼值得了解[如何隱藏 Midjourney 與 DALL·E 的提示詞](hide-midjourney-dalle-prompts)。',
        ],
      },
      {
        heading: '如何檢查圖片是否為 AI 生成',
        paragraphs: [
          '把檔案拖曳到本頁頂端的區域。「AI 痕跡」分頁會給出三種判定之一——「發現 AI 痕跡」「值得再看一眼」或「沒有 AI 痕跡」——並列出每個訊號及其來源。「原始中繼資料」則顯示底層的數值。整個過程不會上傳任何檔案。若要移除找到的資料，請使用 [AI Tag Cleaner](ai-tag-cleaner)。',
        ],
      },
      {
        heading: '如果檔案裡沒有中繼資料',
        paragraphs: [
          '沒有中繼資料，無論哪個方向都證明不了什麼：編輯軟體、聊天軟體與社群平台經常會清除它，而缺少相機 EXIF 頂多只是微弱的暗示。下一步可以使用服務商自己的浮水印檢查工具（例如 Gemini 的 Google SynthID）、以圖搜圖找出最早的版本，並查證圖片最初出現在哪裡。分析像素的 AI 偵測器給出的是機率，而不是證據。',
        ],
      },
    ],
    faqHeading: '關於辨識 AI 圖片的常見問題',
    faq: [
      {
        q: '能看出圖片是用 ChatGPT 或 Gemini 製作的嗎？',
        a: '如果檔案仍保有內容憑證，claim generator 會寫出服務名稱。對於 Gemini 圖片，Google 的 SynthID 檢查也能在像素中偵測浮水印。',
      },
      {
        q: '如果 AI Label Remover 沒找到 AI 痕跡，照片就是真的嗎？',
        a: '不一定。這只代表檔案中沒有 AI 中繼資料。中繼資料很容易遺失或被刪除，所以「乾淨」的結果應解讀為「無法判斷」，而不是證據。',
      },
      {
        q: '可以檢查從 Instagram 或 Facebook 儲存的圖片嗎？',
        a: '可以，但平台通常會清除公開版本的中繼資料，所以能找到的資訊很少甚至沒有。平台自己的「AI 資訊」標籤是另一個訊號，可參閱[為什麼真實照片也會被貼上這個標籤](made-with-ai-label)。',
      },
      {
        q: '這項檢查免費且保護隱私嗎？',
        a: '是的——完全免費、不需帳號，檔案只在本機讀取，不會上傳。',
      },
    ],
  },
};

export default zhTW;
