import type { Pages } from './types';

const zhTW: Pages = {
  home: {
    reassure: '線上、免費、免註冊、免安裝——照片直接在瀏覽器中讀取與清理，絕不會上傳到任何伺服器。',
    sources: {
      label: '可讀取並移除以下工具所產生圖片中的中繼資料',
      note: '產品名稱僅用於說明圖片來源；AI Label Remover 與這些公司沒有任何關係。',
    },
    learn: {
      what: {
        title: '什麼是中繼資料？',
        paragraphs: [
          '中繼資料（metadata）就是「關於資料的資料」：存放在圖片檔案內部、卻從不顯示在畫面上的備註。相機、手機、修圖軟體和 AI 圖像產生器都會自動寫入這些資訊，而且通常不會告訴你。',
          '照片的中繼資料大致分成五類。每一類都回答了關於這張圖片——以及拍攝或製作它的人——的不同問題。',
        ],
        types: [
          { name: '描述資訊', text: '標題、說明文字、關鍵字、照片中人物的姓名。', example: 'IPTC Caption, XMP dc:title' },
          { name: '技術資訊', text: '相機品牌與型號、鏡頭、光圈、快門、ISO、序號。', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: '位置與時間', text: 'GPS 座標、海拔、拍攝日期與時區。', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: '版權與管理', text: '作者、擁有者、版權聲明、最後使用的編輯軟體。', example: 'EXIF Artist, Copyright, Software' },
          { name: '來源與 AI', text: 'Content Credentials（內容憑證）、「AI 生成」標籤、提示詞與工作流程。', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          '同一件事有很多說法——「中繼資料移除工具」「刪除 EXIF」「中繼資料清理器」「清除照片資訊」——意思都是在不改變畫面的前提下，把檔案裡隱藏的備註取出來。同樣地，「中繼資料檢視器」「讀取器」或「檢查工具」用來顯示檔案裡有什麼。AI Label Remover 兩件事都能做。',
      },
      why: {
        title: '為什麼分享照片前要檢視並刪除中繼資料？',
        paragraphs: [
          '單一中繼資料欄位通常無害，但組合起來就能透露你的大量資訊。在家拍攝後貼到二手拍賣平台的照片，可能帶有精確到幾公尺的 GPS 座標；透過電子郵件或雲端連結傳送的圖片，會保留相機寫入的所有內容。了解[照片中的 GPS 如何洩露你的住址](remove-gps-location-from-photos)。',
          '對於用 AI 生成或編輯的圖片，中繼資料還決定了平台是否顯示「AI 生成」標籤，並可能洩露你寫下的完整提示詞。了解[「Made with AI」標籤從何而來](made-with-ai-label)。',
        ],
        bullets: [
          '透過 GPS 座標洩露你的住處、工作地點或行蹤。',
          '透過相機序號或擁有者姓名，把許多照片連結到同一個人。',
          '洩露你想保密的提示詞、種子、模型與工作流程。',
          '因附帶的 C2PA 或 IPTC 資料而被平台加上 AI 標籤。',
        ],
      },
      standards: {
        title: '常見的照片中繼資料標準',
        lead: '一個圖片檔案可以同時包含多個遵循不同標準的中繼資料「隔間」。AI Label Remover 能讀取並移除下列全部內容。',
        items: [
          { name: 'EXIF', text: '由相機和手機寫入：曝光參數、裝置、時間戳記、GPS、縮圖。' },
          { name: 'XMP', text: 'Adobe 的 XML 格式，用於編輯紀錄、評分、關鍵字以及許多與 AI 相關的屬性。' },
          { name: 'IPTC', text: '新聞業標準：說明文字、作者、版權，以及聲明圖片由 AI 生成的 DigitalSourceType 欄位。' },
          { name: 'C2PA', text: '經過加密簽章的內容憑證，記錄檔案是如何建立與編輯的。[什麼是 C2PA](what-is-c2pa-content-credentials)。' },
          { name: 'PNG text', text: 'tEXt、iTXt 與 zTXt 區塊，[Stable Diffusion 和 ComfyUI](remove-stable-diffusion-comfyui-metadata) 會把提示詞與工作流程存放在這裡。' },
        ],
      },
    },
    security: {
      title: '你的照片始終安全',
      lead: '對於任何處理個人檔案的工具，第一個問題都是「我的照片會被傳到哪裡？」。AI Label Remover 的回答是：哪裡都不去。',
      items: [
        { title: '100% 在你的裝置上處理', text: '讀取與清理在瀏覽器分頁內的 Web Worker 中執行。沒有任何伺服器會收到你的檔案。' },
        { title: '不儲存，不用於訓練 AI', text: '照片從不外傳，因此不存在可被儲存、外洩或用來訓練模型的副本。' },
        { title: '離線也能用', text: '載入頁面後關閉 Wi-Fi，再清理一個檔案——照樣可以運作。DevTools 的「網路」面板中也看不到任何圖片資料外傳。' },
        { title: '免帳號，不追蹤', text: '無需註冊，沒有分析工具、廣告或第三方像素。網站只記住你選擇的語言與主題。' },
      ],
    },
    faq: [
      { q: 'EXIF 和中繼資料有什麼不同？', a: 'EXIF 是中繼資料的一種，由相機和手機寫入。「中繼資料」是更廣泛的概念，也包含 XMP、IPTC、C2PA 以及 PNG 的文字區塊。' },
      { q: '中繼資料能顯示照片的拍攝地點嗎？', a: '可以，只要圖片帶有 GPS 標籤。當相機獲准使用位置資訊時，手機通常會記錄緯度、經度與海拔。清理後這些標籤會被移除，畫質不受影響。請參閱[如何刪除照片中的 GPS 位置](remove-gps-location-from-photos)。' },
      { q: '如何刪除圖片中的 AI 中繼資料？', a: '把圖片拖到本頁頂端的方框中，然後點選「移除所有中繼資料」。清理前，每個檔案的卡片都會顯示找到的 C2PA、IPTC 與提示詞資料。' },
      { q: '在這裡上傳照片安全嗎？', a: '你的照片根本不會被上傳。AI Label Remover 在瀏覽器中開啟檔案，在分頁記憶體中處理，並把乾淨的副本直接儲存到你的裝置。頁面載入完成後，即使離線也能繼續使用。' },
    ],
    ctaTools: '查看所有工具',
    start: {
      title: '從你手上的檔案開始',
      lead: '選擇你要做的事——每個工具的頁面頂端都有現成的拖放區。',
      badge: '推薦',
      open: '開啟工具',
    },
    nav: {
      remove: '刪除中繼資料',
      check: '檢視與檢查',
      learn: '深入了解',
      viewer: '檢視照片中繼資料',
      aiCheck: '檢查照片是否為 AI',
      whatIs: '什麼是中繼資料？',
    },
  },
  labels: {
    tools: '更多中繼資料工具',
    relatedTools: '相關專用工具',
    homeTitle: '為你的檔案選擇工具',
    homeLead: '每個頁面專注一項任務，工具就在頁面頂端。',
    formats: '會刪除什麼，保留什麼',
    contact: '聯絡我們',
    contactText: '有問題、發現錯誤，或有檔案清理不正常？請來信',
    updated: '更新於 {date}',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI 標籤清除器 – 刪除圖片中繼資料裡的 AI 標籤',
      description: '清除圖片中的 AI 標籤：IPTC「AI 生成」、C2PA、XMP 中的產生器名稱與提示詞。無損、免費，在瀏覽器中處理，不必上傳。',
      navLabel: 'AI 標籤清除器',
      h1: '圖片 AI 標籤清除器',
      lead: 'AI 產生器和具備 AI 功能的編輯器，會在經手的檔案上留下標記：「AI 生成」的來源類型、簽章的 C2PA 紀錄、應用程式名稱，有時還有完整的提示詞。把圖片拖到下方，就能看到其中每個 AI 標籤，並在不重新編碼任何像素的情況下把它們清除。',
      sections: [
        {
          heading: '哪些算是 AI 標籤',
          paragraphs: ['AI 標籤是檔案中任何表明或暗示使用了 AI 的欄位。它們同時分散在多種中繼資料標準裡，所以手動刪掉一個欄位通常解決不了問題：'],
          bullets: [
            'IPTC 與 XMP 中的 DigitalSourceType 值，例如 trainedAlgorithmicMedia 或 compositeWithTrainedAlgorithmicMedia。',
            '[C2PA 內容憑證](what-is-c2pa-content-credentials)中標記生成步驟的動作，由 ChatGPT、Firefly、Photoshop 等寫入。',
            '寫有產生器名稱的 Software 與 Creator Tool 欄位，以及 AI 編輯留下的 XMP 歷程。',
            '[Stable Diffusion 與 ComfyUI](remove-stable-diffusion-comfyui-metadata) 在 PNG 區塊中儲存的提示詞、種子與模型。',
          ],
        },
        {
          heading: 'AI 標籤清除器如何運作',
          paragraphs: [
            'AI Label Remover 直接在瀏覽器中讀取檔案結構。每個 AI 標籤都會連同來源欄位一起列出，並且在做任何變更之前，檔案會先得到一個判定——「發現 AI 痕跡」「值得再看一眼」或「沒有 AI 痕跡」。',
            '點選「移除所有中繼資料」會切除包含這些標籤的區塊：XMP、IPTC、EXIF、C2PA 資訊清單儲存區和 PNG 文字區塊。壓縮的影像資料逐位元組複製，清理後的副本會再讀取一次，讓你確認沒有留下任何 AI 標籤。',
          ],
        },
        {
          heading: '不同工具會留下哪些標籤',
          paragraphs: [
            'ChatGPT 與 Gemini 的圖片帶有 C2PA 紀錄；Firefly 與 Photoshop 生成填色會加入 C2PA 和 DigitalSourceType；Midjourney 寫入描述性 XMP；Stable Diffusion 前端會把所有生成參數存進 PNG。想讓提示詞保持私密，請參閱[如何隱藏 Midjourney 與 DALL·E 提示詞](hide-midjourney-dalle-prompts)。',
          ],
        },
        {
          heading: 'AI 標籤清除器做不到的事',
          paragraphs: [
            '清除只針對中繼資料。SynthID 這類隱形浮水印存在於像素中，不會被移除，平台也可能使用自己的分類器。清除標籤是為了保護隱私、修正真實照片上的錯誤標示——如果圖片由 AI 生成且足以亂真，平台規則通常仍要求你主動揭露。',
          ],
        },
      ],
      faqHeading: 'AI 標籤清除器常見問題',
      faq: [
        { q: 'AI 標籤和 AI 標示是同一件事嗎？', a: '不完全是。標籤是檔案裡的資料；標示是平台顯示的內容，例如 Instagram 的「AI 資訊」。平台常根據標籤產生標示。若要避免真實照片被標示，請看[No AI Tag](no-ai-tag)。' },
        { q: '可以只刪除 AI 標籤、保留其他內容嗎？', a: '由於 AI 標籤分散在多個區塊，清除器會刪除整個中繼資料區塊而不是單一欄位。方向、ICC 色彩描述檔和像素尺寸一律保留，所以圖片顯示起來和之前完全一樣。' },
        { q: '清除 AI 標籤會降低畫質嗎？', a: '不會。不做任何重新編碼，只刪除中繼資料，影像資料維持不變。' },
        { q: '支援哪些格式？', a: 'JPG、PNG、WebP、GIF、HEIC/HEIF 與 AVIF——每次最多 50 個檔案，每個不超過 25 MB。PNG 裡的提示詞也可以用 [PNG 中繼資料移除工具](png-metadata-remover)處理。' },
        { q: '能刪除 ChatGPT 或 Gemini 圖片的中繼資料嗎？', a: '可以刪除這些服務寫入的 C2PA 內容憑證與 IPTC 欄位。Google 另外會在像素中嵌入 SynthID 浮水印，任何中繼資料工具都無法去除。' },
        { q: '刪除前能先看到提示詞嗎？', a: '可以。「原始中繼資料」分頁會逐字顯示提示詞、工作流程和產生器名稱，你可以在清理前複製想保留的內容。' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – 發布真實照片不再出現「AI 資訊」',
      description: '真實照片被標上「AI 資訊」？刪除觸發標示的 C2PA 與 IPTC 資料，發布時不帶 AI 標籤。無損、免費，在瀏覽器中完成。',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag – 讓真實照片不帶 AI 標籤',
      lead: '在 Photoshop 或手機修圖 App 裡做一處小小的 AI 修補，就可能讓 Instagram、Facebook 或 Threads 替真實照片加上「AI 資訊」標示。把檔案拖到下方，看看是哪些資料觸發了標示，再分享一份中繼資料裡沒有 AI 標籤的乾淨副本。',
      sections: [
        {
          heading: '真實照片為什麼會被加上 AI 標籤',
          paragraphs: ['平台會讀取編輯軟體附加在檔案裡的來源資料。[為什麼真實照片會被標示「Made with AI」](made-with-ai-label)有詳細說明；常見原因有：'],
          bullets: [
            '記錄了生成填色、AI 移除或 AI 擴展等生成步驟的 C2PA 資訊清單。',
            '聲明圖片由 AI 合成的 IPTC 或 XMP DigitalSourceType 值。',
            '編輯 App 在匯出時預設加入的內容憑證。',
          ],
        },
        {
          heading: '如何發布不帶 AI 標籤的照片',
          paragraphs: ['不到一分鐘就能完成，所有內容都不會離開你的裝置：'],
          bullets: [
            '把修過的照片拖到本頁頂端的方框中。',
            '查看判定結果和依據欄位——報告會寫明確切的 C2PA 動作或 IPTC 值。',
            '點選「移除所有中繼資料」，儲存乾淨的副本。',
            '上傳乾淨的副本，而不是最初匯出的檔案。',
          ],
        },
        {
          heading: '從源頭阻止標籤',
          paragraphs: [
            '如果你常修圖，可以在 Photoshop 和 Lightroom 的匯出設定中關閉內容憑證，這樣它們一開始就不會被寫入。要一次處理大量照片，請參閱[批次刪除中繼資料](batch-remove-metadata)。',
          ],
        },
        {
          heading: 'No AI Tag 能保證與不能保證的事',
          paragraphs: [
            '刪除中繼資料能去掉檔案層面的原因，而大多數修過的照片正是因此被標示。它無法去除 SynthID 這類像素浮水印，平台也可能依自己的偵測替貼文加上標示，或要求你自行揭露。本頁面適用於只做了小修改的真實照片：如果圖片由 AI 生成且可能誤導他人，請如實揭露。',
          ],
        },
      ],
      faqHeading: 'No AI Tag 常見問題',
      faq: [
        { q: '能拿掉已發布貼文上的「AI 資訊」標示嗎？', a: '不能。標示屬於平台上的那則貼文。請刪除或封存該貼文，在這裡清理檔案，再上傳乾淨的副本。' },
        { q: 'No AI Tag 能保證效果嗎？', a: '沒有。它會刪除平台讀取的中繼資料，但平台也可能使用其他訊號。不過對大多數修過的照片來說，中繼資料就是被標示的原因。' },
        { q: 'iPhone 和 Android 照片可以用嗎？', a: '可以。iPhone 的 HEIC 和 Android 的 JPG 都會直接清理，不需轉檔。另有專用的 [HEIC 中繼資料移除工具](heic-metadata-remover)。' },
        { q: '完全由 AI 生成的圖片上的 AI 標籤呢？', a: '[AI 標籤清除器](ai-tag-cleaner)可以顯示並刪除它們，但平台規則通常仍要求你自行標示寫實的 AI 圖片。' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-09',
    },
    'remove-exif-data': {
      metaTitle: '線上刪除照片 EXIF 資訊 – 免費又保護隱私',
      description: '在瀏覽器中刪除 JPG、HEIC、PNG、WebP 的 EXIF 資訊——GPS、相機、序號、日期。不必上傳、不損畫質，一次最多 50 個檔案。',
      navLabel: 'EXIF 移除工具',
      h1: '刪除照片中的 EXIF 資訊',
      lead: '把照片拖到下方，就能看到其中每個 EXIF 欄位——GPS 位置、相機與鏡頭、序號、拍攝時間——並一鍵刪除。所有處理都在你的裝置上進行，檔案絕不會上傳。',
      sections: [
        {
          heading: 'EXIF 資訊會洩露什麼',
          paragraphs: ['EXIF 是相機或手機寫進每張照片的技術備註。單獨看大多無害，但組合起來能透露你的許多資訊。以下欄位與隱私最相關：'],
          bullets: [
            'GPS 緯度、經度和海拔——往往精確到幾公尺，足以找到一處住家。',
            '拍攝日期和時間，以及時區。',
            '相機或手機的品牌型號、鏡頭，許多相機還有能把多張照片串連起來的機身序號。',
            '擁有者或作者姓名，以及最後編輯該檔案的軟體。',
            '內嵌縮圖——即使裁切後，仍可能顯示原始畫面。',
          ],
        },
        {
          heading: '這個 EXIF 移除工具如何運作',
          paragraphs: [
            'AI Label Remover 直接讀取檔案結構。在 JPEG 中，它會切除包含 EXIF 和 XMP 的 APP1 區段，以及 IPTC、註解和縮圖；在 HEIC、PNG 和 WebP 中則刪除對應的 box 或區塊。壓縮的影像資料逐位元組複製，因此不會重新編碼，照片看起來完全一樣。',
            '決定照片顯示方式的欄位會刻意保留：方向、ICC 色彩描述檔和像素尺寸。這樣就不會出現粗糙工具常見的照片橫躺、顏色發灰等問題。處理完成後，清理過的檔案會再讀取一次，讓你確認 EXIF 欄位真的刪除了。',
          ],
        },
        {
          heading: '分享前什麼時候該刪除 EXIF',
          paragraphs: [
            '許多大型社群網站會在上傳時刪除 EXIF，但還有很多地方不會：電子郵件附件、雲端連結、論壇、二手拍賣平台、傳送「原始畫質」的聊天 App，以及你自己的網站。如果不確定照片會流向哪裡，先清理一遍是最穩妥的做法。',
            '在網路上賣東西、發布在家拍的照片、傳照片給剛認識的人，都是 [GPS 資料可能洩露位置](remove-gps-location-from-photos)的典型情境。',
          ],
        },
        {
          heading: '從設計上保護隱私',
          paragraphs: [
            '線上 EXIF 移除工具通常會把照片上傳到伺服器處理再傳回。AI Label Remover 的所有工作都在瀏覽器分頁裡的 Web Worker 中完成：頁面載入後即使斷網也能繼續使用。不必註冊帳號，沒有浮水印，除了每個檔案 25 MB、4000 萬像素外沒有其他限制。',
          ],
        },
      ],
      faqHeading: '刪除 EXIF 常見問題',
      faq: [
        { q: '刪除 EXIF 會降低畫質嗎？', a: '不會。只切除中繼資料區塊，壓縮的影像資料原樣複製，所以解析度、銳利度和色彩完全不變。' },
        { q: '照片方向還會正確嗎？', a: '會。方向值和 ICC 色彩描述檔都會保留，圖片顯示方式和之前相同。' },
        { q: '能刪除 iPhone HEIC 照片的 EXIF 嗎？', a: '可以。直接支援 HEIC 和 HEIF，不必先轉成 JPEG。另有專用頁面：[HEIC 中繼資料移除工具](heic-metadata-remover)。' },
        { q: '怎麼確認 EXIF 已經刪除？', a: '清理後，AI Label Remover 會重新讀取新檔案並顯示剩下的欄位。你也可以在作業系統的檔案內容中查看。' },
        { q: '能一次處理很多照片嗎？', a: '可以：每次最多 50 個檔案，可打包成一個 ZIP 下載。請參閱[批次刪除中繼資料](batch-remove-metadata)。' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: '免費刪除圖片中的 C2PA 內容憑證',
      description: '檢視並刪除 JPG、PNG、HEIC、WebP 與 AVIF 中的 C2PA 內容憑證（JUMBF 資訊清單），無損處理，檔案不會上傳到任何地方。',
      navLabel: 'C2PA 移除工具',
      h1: '刪除 C2PA 內容憑證',
      lead: '內容憑證（Content Credentials）是附在圖片上的一段簽章歷程：由哪個 App 建立、之後做了哪些編輯、是否使用了生成式 AI。把檔案拖到下方讀取它的 C2PA 資訊清單，再無損刪除整個資訊清單儲存區。',
      sections: [
        {
          heading: 'C2PA 資訊清單包含什麼',
          paragraphs: ['C2PA（內容來源與真實性聯盟）制定了在檔案中嵌入加密簽章紀錄的方式。[什麼是 C2PA](what-is-c2pa-content-credentials) 有更深入的介紹；實務上，資訊清單通常包含：'],
          bullets: [
            '聲明產生器（claim generator）——簽章的 App 或服務，例如 Photoshop、Firefly、ChatGPT 或相機。',
            '動作清單：建立、開啟、編輯、裁切，以及生成式 AI 步驟的標記。',
            '素材（ingredients）——組成該檔案的早期版本或來源圖片。',
            '數位來源類型，說明內容是拍攝、合成還是由 AI 生成。',
            '把紀錄與確切影像資料綁定的簽章和憑證。',
          ],
        },
        {
          heading: 'C2PA 在各種格式中的位置',
          paragraphs: [
            '在 JPEG 中，資訊清單儲存區以 JUMBF box 的形式位於 APP11 區段；在 PNG 中是 caBX 區塊；在 HEIC 和 AVIF 中是 uuid box；在 WebP 中是專用的 RIFF 區塊。AI Label Remover 會找出這些位置、顯示其中的聲明，並在原樣複製影像資料的同時刪除整個儲存區。',
            '由於簽章把資訊清單綁定在確切的位元組上，用其他 App 重新存檔通常本來就會破壞或丟棄它。乾淨地刪除可以避免留下一個損壞、只有一半有效的紀錄。',
          ],
        },
        {
          heading: '保留的理由與刪除的理由',
          paragraphs: [
            '內容憑證可能很有價值：它能幫助新聞機構和創作者證明圖片的來源。如果這是你的目的，就保留它——無論如何都請保留原始檔案，因為刪除的中繼資料無法還原。',
            '當紀錄透露了超出你意願的資訊（姓名、編輯歷程、來源圖片），或編輯 App 在一次小修改後替真實照片加上 AI 標記時，刪除它是合理的。你也可以在 Photoshop 和 Lightroom 的匯出設定中關閉內容憑證。',
          ],
        },
      ],
      faqHeading: 'C2PA 常見問題',
      faq: [
        { q: 'AI Label Remover 會驗證 C2PA 簽章嗎？', a: '不會。它讀取並顯示資訊清單內容，但不驗證憑證鏈。如需驗證簽章，請使用官方的 Content Credentials Verify 工具。' },
        { q: '刪除內容憑證合法嗎？', a: '從你擁有或有權修改的檔案中刪除中繼資料通常沒有問題，但不要用它來扭曲圖片的作者或製作方式。以上為一般資訊，不構成法律意見。' },
        { q: '為什麼我的照片顯示「值得再看一眼」？', a: '檔案中有一份沒有明確提到 AI 的 C2PA 資訊清單。有些平台會把任何資訊清單都當成線索，所以做決定前請先查看列出的動作。' },
        { q: '平台還會知道圖片被編輯過嗎？', a: '不會透過已刪除的資訊清單得知。平台可能使用其他訊號，而像素中的隱形浮水印不受刪除中繼資料影響。' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC 中繼資料移除 – 清除 iPhone 照片 EXIF 與 GPS',
      description: '刪除 iPhone HEIC、HEIF 照片中的 EXIF、GPS 位置和時間戳記，不必轉成 JPEG。無損，在瀏覽器中處理，不上傳任何內容。',
      navLabel: 'HEIC 中繼資料移除',
      h1: 'iPhone 照片 HEIC 中繼資料移除工具',
      lead: 'iPhone 以 HEIC 格式儲存照片，每張都會記錄拍攝地點和時間。把 HEIC 或 HEIF 檔案拖到下方，檢視並刪除這些中繼資料——照片仍是 HEIC，不轉檔、不損畫質。',
      sections: [
        {
          heading: 'iPhone HEIC 照片會記錄什麼',
          paragraphs: ['一張普通的 iPhone 照片包含的資訊比多數人想像的還多：'],
          bullets: [
            '精確的 GPS 座標、海拔和相機朝向。',
            '拍攝日期、時間和時區，以及修改日期。',
            '裝置型號、鏡頭、拍攝設定和 iOS 版本。',
            'Apple 專有資料，例如原況照片的配對識別碼。',
            '編輯 App 寫入的 XMP 資料，有時包含 C2PA 紀錄。',
          ],
        },
        {
          heading: '不轉 JPEG 也能刪除中繼資料',
          paragraphs: [
            '常見的建議是把 HEIC 轉成 JPEG，期待中繼資料不會被帶過去。但這樣會重新編碼影像、損失畫質，還常常丟掉廣色域色彩描述檔。AI Label Remover 則直接編輯 HEIC 容器本身：刪除 Exif 和 XMP 項目、C2PA uuid box 以及時間戳記 box，並保持 HEVC 影像資料、方向（irot/imir）和色彩描述檔（colr）不變。',
            '同一引擎也能處理使用相同 ISOBMFF 容器的 AVIF，所以新式 App 匯出的 AVIF 也能用同樣方式清理。',
          ],
        },
        {
          heading: 'iPhone 設定與清理檔案的差別',
          paragraphs: [
            'iOS 可以在分享表單中點「選項」關閉單次分享的位置資訊，「照片」App 也能逐張修改或移除位置。偶爾分享一兩張很方便，但容易忘記，而且不會刪除其他欄位。請參閱[照片中的 GPS 為什麼有風險](remove-gps-location-from-photos)。',
            '如果是一批照片——整個旅遊相簿、商品照或刊登用的圖片——把它們拖進 AI Label Remover 並儲存成一個 ZIP 會更快，前後對照報告也會清楚顯示刪除了什麼。',
          ],
        },
      ],
      faqHeading: 'HEIC 常見問題',
      faq: [
        { q: '在有時打不開 HEIC 的 Windows 上能用嗎？', a: '能。AI Label Remover 自行讀取 HEIC 結構，因此不必安裝 HEIC 編解碼器。HEIC 檔案會顯示格式標籤而不是預覽圖，但讀取和清理都正常。' },
        { q: '清理後的檔案還能在「照片」中開啟嗎？', a: '能。輸出是標準的 HEIC 檔案，影像資料相同，只刪除了中繼資料項目。' },
        { q: '支援原況照片嗎？', a: 'AI Label Remover 處理的是靜態 HEIC 影像。原況照片配套的影片是另一個檔案，不會被變更。' },
        { q: '有檔案大小限制嗎？', a: '每個檔案最大 25 MB、4000 萬像素，足以涵蓋目前所有 iPhone 拍攝的照片，一次可清理 50 個。' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG 中繼資料移除 – 清除提示詞與文字區塊',
      description: '刪除 PNG 中繼資料——含 Stable Diffusion 或 ComfyUI 提示詞的 tEXt、iTXt、zTXt 文字區塊，以及 XMP、eXIf 與 C2PA——同時保持影像無損。',
      navLabel: 'PNG 中繼資料移除',
      h1: 'PNG 中繼資料移除工具',
      lead: 'PNG 檔案把中繼資料藏在文字區塊裡：AI 提示詞和工作流程、作者姓名、軟體和時間戳記。把 PNG 拖到下方讀取每個區塊並刪除，影像資料逐位元保持不變。',
      sections: [
        {
          heading: 'PNG 把中繼資料放在哪裡',
          paragraphs: ['PNG 由一連串區塊組成。影像本身位於 IHDR、PLTE 和 IDAT，其餘都是選用的。AI Label Remover 會刪除以下區塊：'],
          bullets: [
            'tEXt、zTXt 和 iTXt——自由文字、壓縮文字和國際化文字。Stable Diffusion WebUI 會在這裡寫入「parameters」區塊；ComfyUI 會寫入「prompt」和「workflow」JSON。',
            '存放在 iTXt 中的 XMP 封包，包括 IPTC 和 AI 來源聲明。',
            'eXIf——EXIF 資料，若 App 從照片複製過來，也包括 GPS。',
            'caBX——C2PA 內容憑證。',
            'tIME（最後修改時間）和 dSIG（數位簽章）。',
          ],
        },
        {
          heading: '為了讓影像不變而保留的內容',
          paragraphs: [
            '透明度（tRNS）、伽瑪與色度（gAMA、cHRM）、sRGB 旗標以及內嵌 ICC 描述檔（iCCP）都會影響顯示，因此會保留。動態 PNG 保留 acTL、fcTL 和 fdAT 區塊，APNG 動畫照常播放。',
            '由於 IDAT 資料是複製而非重新壓縮，清理後的檔案和原圖逐像素一致——通常還會小一點，因為文字區塊沒了。',
          ],
        },
        {
          heading: '保護 AI 提示詞與工作流程',
          paragraphs: [
            '如果你分享用 Stable Diffusion、Forge 或 ComfyUI 生成的圖片，任何人都能把 PNG 拖回同一個工具，還原你完整的提示詞、種子、模型和節點圖。[Stable Diffusion 與 ComfyUI 如何在 PNG 中藏提示詞](remove-stable-diffusion-comfyui-metadata)說明了儲存的內容。清理會刪除全部資訊；若想自己保留提示詞，可以先在「原始中繼資料」分頁中複製。',
          ],
        },
      ],
      faqHeading: 'PNG 中繼資料常見問題',
      faq: [
        { q: '刪除 PNG 中繼資料會改變顏色嗎？', a: '不會。與顏色相關的區塊——sRGB、gAMA、cHRM 和 iCCP——都會保留，IDAT 影像資料原樣複製。' },
        { q: '透明 PNG 可以用嗎？', a: '可以。透明資料（tRNS 或 IDAT 中的 Alpha 色版）屬於影像本身，絕不會被變更。' },
        { q: '能把提示詞保存下來嗎？', a: '請在清理前從「原始中繼資料」分頁複製。刪除後，就無法從清理過的檔案還原中繼資料。' },
        { q: 'Midjourney 或 DALL·E 的 PNG 也能處理嗎？', a: '能。這些服務嵌入的文字、XMP 或 C2PA 資料會以同樣方式刪除。請參閱[如何隱藏 Midjourney 與 DALL·E 提示詞](hide-midjourney-dalle-prompts)。' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: '關於 AI Label Remover – 中繼資料清理工具如何運作',
      description: '誰在開發 AI Label Remover、瀏覽器內的中繼資料清理如何運作、我們如何撰寫與更新文章，以及這個工具絕不會做的事。',
      navLabel: '關於',
      title: '關於 AI Label Remover',
      lead: 'AI Label Remover 是一款免費工具，用來讀取並刪除圖片中的隱藏中繼資料——EXIF、GPS、XMP、IPTC、C2PA 內容憑證和 AI 提示詞——設計初衷是讓你的檔案永遠不必離開你的裝置。',
      sections: [
        {
          heading: '為什麼做這個工具',
          paragraphs: [
            '照片和 AI 圖片包含的資訊遠超多數人的想像：GPS 標籤裡的住家位置、裝置序號、完整的提示詞和工作流程，以及平台據以加上標示的來源紀錄。大多數線上清理工具卻要求你上傳正想保護的檔案。AI Label Remover 就是為了在不做這種妥協的前提下完成同樣的工作。',
          ],
        },
        {
          heading: '工具如何運作',
          paragraphs: [
            '加入圖片後，瀏覽器會在本機讀取它。Web Worker 解析檔案結構——JPEG 區段、PNG 區塊、WebP RIFF 區塊、GIF 區塊以及 HEIC/AVIF box——並列出找到的每個中繼資料區塊。清理會從位元組串流中刪除這些區塊，原樣複製壓縮的影像資料，再重新讀取結果確認剩下的內容。',
            '沒有任何伺服器端處理。網站本身是一組靜態頁面；載入後，工具可以離線使用。',
          ],
        },
        {
          heading: '我們如何撰寫文章',
          paragraphs: [
            '本站的指南依據公開的規格（EXIF、XMP、IPTC Photo Metadata、C2PA，以及 PNG 與 ISOBMFF 格式）、各平台的說明頁面，以及對所介紹工具產生的真實檔案所做的測試。每篇文章都標註最近修訂日期，標準或平台政策改變時我們會更新內容。',
            '文章屬於一般資訊，不構成法律意見。平台關於 AI 標示的規則經常變動，依據任何說法行事前，請先查看平台自己的說明頁面。',
          ],
        },
        {
          heading: 'AI Label Remover 不會做的事',
          paragraphs: [],
          bullets: [
            '上傳、儲存或記錄你的檔案——根本沒有可以接收它們的伺服器。',
            '修改像素、去除隱形浮水印或可見的標誌。',
            '保證平台一定會或不會加上標示。',
            '協助把 AI 生成的圖片偽裝成真實照片。請用它來保護隱私、修正錯誤。',
          ],
        },
        {
          heading: '獨立性',
          paragraphs: [
            'AI Label Remover 是獨立專案，與 Meta、Google、OpenAI、Adobe、Midjourney、Apple 或 C2PA 均無關聯。產品名稱僅用於說明相容性。',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: '隱私權政策 – AI Label Remover',
      description: '淺顯易懂的隱私權政策：圖片不會離開你的裝置，沒有帳號、統計分析或廣告，只儲存語言與主題設定。',
      navLabel: '隱私權',
      title: '隱私權政策',
      lead: 'AI Label Remover 是保護隱私的工具，使用它不該讓你付出隱私的代價。本頁用淺顯的語言說明你的圖片會經歷什麼，以及網站處理的少量資訊。',
      sections: [
        {
          heading: '簡要說明',
          paragraphs: [],
          bullets: [
            '你的圖片在你自己的裝置上處理，絕不會上傳。',
            '沒有帳號、註冊或電子報——我們不知道你是誰。',
            '沒有統計分析、廣告、追蹤像素或第三方指令碼。',
            '只在你的瀏覽器中儲存語言和淺色/深色主題，你可以隨時刪除。',
          ],
        },
        {
          heading: '你的圖片會經歷什麼',
          paragraphs: ['當你把圖片加入 AI Label Remover，它的完整歷程如下：'],
          bullets: [
            '瀏覽器從你的裝置開啟檔案，並保存在分頁的記憶體中。',
            '分頁內的 Web Worker 讀取中繼資料，你點選清理後寫出乾淨的副本——仍然在記憶體中。',
            '儲存時，瀏覽器把乾淨的檔案或 ZIP 直接寫入你的裝置。',
            '關閉或重新整理分頁後，圖片和報告隨之消失。伺服器上什麼都不會留下，因為從來沒有伺服器接收過它們。',
          ],
        },
        {
          heading: '你可以親自驗證',
          paragraphs: [
            '你不必只聽我們說。載入頁面後關閉 Wi-Fi 或行動數據，再清理一個檔案：它照樣能用，因為沒有任何東西需要傳送。如果你熟悉開發人員工具，可以在清理時開啟「網路」面板，會看到沒有任何圖片資料離開裝置。',
          ],
        },
        {
          heading: '我們不蒐集什麼',
          paragraphs: ['AI Label Remover 不蒐集也不保存：'],
          bullets: [
            '你的圖片、圖片的中繼資料或畫面上顯示的報告；',
            '你的姓名、電子郵件地址或任何帳號資訊；',
            '你的位置——照片中找到的 GPS 只會顯示在你自己的螢幕上；',
            '你檢查過哪些檔案或如何使用工具的紀錄。',
          ],
        },
        {
          heading: '瀏覽器中儲存了什麼，以及如何刪除',
          paragraphs: ['為了記住你的選擇，網站會在你的裝置上儲存兩項小設定：'],
          bullets: [
            '語言：local storage 中的「lang」項目，以及保存一年的第一方「lang」Cookie，讓首頁以你選擇的語言開啟。其中只有類似「zh-TW」的語言代碼。',
            '主題：如果你選擇淺色或深色模式，local storage 中會有一個「theme」項目。',
            '要刪除它們，請在瀏覽器設定中清除本站的 Cookie 和網站資料。AI Label Remover 仍可正常使用，只是會忘記你的選擇。',
          ],
        },
        {
          heading: '造訪網站時',
          paragraphs: [
            '和所有網站一樣，你開啟頁面時，我們的伺服器需要一些基本技術資訊才能把頁面傳給你：裝置的網路位址（IP 位址）、瀏覽器類型和你開啟的頁面。這些資訊可能會被暫時記錄，用於維持網站正常運作和阻擋惡意流量，且只保存必要的時間。我們不會用它們辨識你，不會為你建立個人檔案，也絕不會分享或出售。',
            '開啟首頁時，伺服器只會依照瀏覽器的語言設定和你先前選擇的語言，開啟合適的語言版本。這個過程即時完成，不會被儲存。',
          ],
        },
        {
          heading: '兒童',
          paragraphs: [
            'AI Label Remover 不會向任何人（包括兒童）索取或蒐集個人資料。年紀較小的使用者不需建立帳號或透露任何個人資訊，就能使用本工具。',
          ],
        },
        {
          heading: '你的權利',
          paragraphs: [
            '由於 AI Label Remover 不蒐集姓名、電子郵件或帳號，我們沒有可供提供、更正或刪除的個人資料。網站在你裝置上記住的內容永遠由你掌控。造訪時暫時記錄的技術資訊不與任何姓名或帳號連結，不再需要時即會刪除。',
          ],
        },
        {
          heading: '政策變更',
          paragraphs: ['如果 AI Label Remover 處理資料的方式有所改變，我們會更新本頁面及頂端的日期。'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default zhTW;
