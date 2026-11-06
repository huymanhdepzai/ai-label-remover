import type { HomeBasics } from '../pages/types';

const zhTW: HomeBasics = {
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
      { title: '離線也能用', text: '載入頁面後關閉 Wi-Fi，再清洗一個檔案——照樣可以運作。DevTools 的「網路」面板中也看不到任何圖片資料外傳。' },
      { title: '免帳號，不追蹤', text: '無需註冊，沒有分析工具、廣告或第三方像素。網站只記住你選擇的語言與主題。' },
    ],
  },
  faq: [
    { q: 'EXIF 和中繼資料有什麼不同？', a: 'EXIF 是中繼資料的一種，由相機和手機寫入。「中繼資料」是更廣泛的概念，也包含 XMP、IPTC、C2PA 以及 PNG 的文字區塊。' },
    { q: '中繼資料能顯示照片的拍攝地點嗎？', a: '可以，只要圖片帶有 GPS 標籤。當相機獲准使用位置資訊時，手機通常會記錄緯度、經度與海拔。清洗後這些標籤會被移除，畫質不受影響。請參閱[如何刪除照片中的 GPS 位置](remove-gps-location-from-photos)。' },
    { q: '如何刪除圖片中的 AI 中繼資料？', a: '把圖片拖到本頁頂端的方框中，然後點選「清洗所有圖片」。清洗前，每個檔案的卡片都會顯示找到的 C2PA、IPTC 與提示詞資料。' },
    { q: '在這裡上傳照片安全嗎？', a: '你的照片根本不會被上傳。AI Label Remover 在瀏覽器中開啟檔案，在分頁記憶體中處理，並把乾淨的副本直接儲存到你的裝置。頁面載入完成後，即使離線也能繼續使用。' },
  ],
};

export default zhTW;
