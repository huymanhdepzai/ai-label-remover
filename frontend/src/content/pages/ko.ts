import type { Pages } from './types';

const ko: Pages = {
  home: {
    reassure: '온라인, 무료, 가입·설치 없음 — 사진은 브라우저 안에서 바로 읽고 정리되며 어떤 서버에도 업로드되지 않습니다.',
    sources: {
      label: '다음 도구로 만든 이미지의 메타데이터를 읽고 제거합니다',
      note: '제품 이름은 이미지의 출처를 나타낼 뿐이며, AI Label Remover는 이 회사들과 제휴 관계가 없습니다.',
    },
    learn: {
      what: {
        title: '메타데이터란 무엇인가요?',
        paragraphs: [
          '메타데이터는 “데이터에 관한 데이터”로, 이미지 파일 안에 저장되지만 사진에는 전혀 보이지 않는 메모입니다. 카메라, 휴대폰, 사진 편집기, AI 이미지 생성기가 대개 알리지도 않고 자동으로 기록합니다.',
          '사진의 메타데이터는 크게 다섯 가지로 나뉩니다. 각각은 이미지에 대해 — 그리고 그 사진을 찍거나 만든 사람에 대해 — 서로 다른 질문에 답합니다.',
        ],
        types: [
          { name: '설명 정보', text: '제목, 캡션, 키워드, 사진 속 인물의 이름.', example: 'IPTC Caption, XMP dc:title' },
          { name: '기술 정보', text: '카메라 제조사와 모델, 렌즈, 조리개, 셔터 속도, ISO, 일련번호.', example: 'EXIF Make, Model, BodySerialNumber' },
          { name: '위치와 시간', text: 'GPS 좌표, 고도, 촬영 날짜와 시간대.', example: 'EXIF GPSLatitude, DateTimeOriginal' },
          { name: '권리와 관리', text: '작성자, 소유자, 저작권, 마지막으로 사용한 편집 소프트웨어.', example: 'EXIF Artist, Copyright, Software' },
          { name: '출처와 AI', text: 'Content Credentials, “AI로 생성됨” 라벨, 프롬프트와 워크플로.', example: 'C2PA manifest, IPTC DigitalSourceType' },
        ],
        synonyms:
          '같은 작업을 부르는 이름은 다양합니다 — “메타데이터 제거기”, “EXIF 삭제”, “메타데이터 클리너”, “사진 정보 지우기”. 모두 이미지를 바꾸지 않고 파일에서 숨겨진 메모를 꺼내는 것을 뜻합니다. 마찬가지로 “메타데이터 뷰어”, “리더”, “검사기”는 파일 안에 무엇이 들어 있는지 보여 줍니다. AI Label Remover는 두 가지를 모두 합니다.',
      },
      why: {
        title: '사진을 공유하기 전에 메타데이터를 확인하고 지워야 하는 이유',
        paragraphs: [
          '메타데이터 항목 하나는 대개 무해하지만, 모이면 당신에 대해 많은 것을 말해 줍니다. 집에서 찍어 중고거래 사이트에 올린 사진에는 몇 미터 단위로 정확한 GPS 좌표가 담길 수 있고, 이메일이나 클라우드 링크로 보낸 이미지는 카메라가 기록한 모든 것을 그대로 유지합니다. [사진의 GPS가 집 주소를 드러내는 방식](remove-gps-location-from-photos)을 확인해 보세요.',
          'AI로 만들거나 편집한 이미지라면, 메타데이터는 플랫폼이 “AI로 생성됨” 라벨을 표시할지도 결정하며 직접 작성한 프롬프트 전체를 드러낼 수도 있습니다. [“Made with AI” 라벨이 붙는 이유](made-with-ai-label)도 알아보세요.',
        ],
        bullets: [
          'GPS 좌표로 사는 곳, 일하는 곳, 이동 경로가 드러남.',
          '카메라 일련번호나 소유자 이름으로 여러 사진이 한 사람과 연결됨.',
          '비공개로 두고 싶던 프롬프트, 시드, 모델, 워크플로가 노출됨.',
          '첨부된 C2PA나 IPTC 데이터 때문에 플랫폼에서 AI 라벨이 붙음.',
        ],
      },
      standards: {
        title: '사진에서 흔히 쓰이는 메타데이터 표준',
        lead: '하나의 이미지 파일에는 서로 다른 표준을 따르는 여러 메타데이터 “칸”이 동시에 들어 있을 수 있습니다. AI Label Remover는 아래 모든 항목을 읽고 제거합니다.',
        items: [
          { name: 'EXIF', text: '카메라와 휴대폰이 기록: 노출 설정, 기기, 타임스탬프, GPS, 썸네일.' },
          { name: 'XMP', text: '편집 기록, 별점, 키워드와 AI 관련 여러 속성을 담는 Adobe의 XML 형식.' },
          { name: 'IPTC', text: '언론사 표준: 캡션, 작성자, 저작권, 그리고 AI 이미지임을 선언하는 DigitalSourceType 필드.' },
          { name: 'C2PA', text: '파일이 어떻게 만들어지고 편집됐는지 기록하는, 암호 서명된 Content Credentials. [C2PA란](what-is-c2pa-content-credentials).' },
          { name: 'PNG text', text: '[Stable Diffusion과 ComfyUI](remove-stable-diffusion-comfyui-metadata)가 프롬프트와 워크플로를 저장하는 tEXt, iTXt, zTXt 청크.' },
        ],
      },
    },
    security: {
      title: '사진은 안전하게 지켜집니다',
      lead: '개인 파일을 다루는 도구라면 가장 먼저 “내 사진은 어디로 가나요?”라는 질문이 떠오릅니다. AI Label Remover의 답은 “어디로도 가지 않습니다”입니다.',
      items: [
        { title: '100% 내 기기에서', text: '읽기와 정리는 브라우저 탭 안의 Web Worker에서 실행됩니다. 어떤 서버도 파일을 받지 않습니다.' },
        { title: '저장 없음, AI 학습 없음', text: '사진이 어디로도 전송되지 않으므로 저장되거나 유출되거나 모델 학습에 쓰일 사본이 존재하지 않습니다.' },
        { title: '오프라인에서도 작동', text: '페이지를 불러온 뒤 Wi-Fi를 끄고 파일을 정리해 보세요. 그래도 작동합니다. DevTools의 네트워크 탭에도 나가는 이미지 데이터가 보이지 않습니다.' },
        { title: '계정 없음, 추적 없음', text: '가입, 분석 도구, 광고, 제3자 픽셀이 없습니다. 사이트는 선택한 언어와 테마만 기억합니다.' },
      ],
    },
    faq: [
      { q: 'EXIF와 메타데이터는 어떻게 다른가요?', a: 'EXIF는 메타데이터의 한 종류로, 카메라와 휴대폰이 기록하는 것입니다. “메타데이터”는 더 넓은 개념으로 XMP, IPTC, C2PA, PNG 텍스트 청크도 포함합니다.' },
      { q: '메타데이터로 사진을 찍은 장소를 알 수 있나요?', a: '네, 이미지에 GPS 태그가 있다면 가능합니다. 카메라에 위치 접근을 허용하면 휴대폰은 보통 위도, 경도, 고도를 기록합니다. 정리하면 화질 손상 없이 이 태그가 사라집니다. [사진에서 GPS 위치를 지우는 방법](remove-gps-location-from-photos)을 참고하세요.' },
      { q: '이미지에서 AI 메타데이터를 지우려면 어떻게 하나요?', a: '이 페이지 상단의 상자에 이미지를 끌어다 놓고 “모든 메타데이터 제거”를 누르세요. 정리 전에 각 파일의 카드에서 발견된 C2PA, IPTC, 프롬프트 데이터를 확인할 수 있습니다.' },
      { q: '여기에 사진을 올려도 안전한가요?', a: '사진은 아예 업로드되지 않습니다. AI Label Remover는 브라우저에서 파일을 열어 탭의 메모리 안에서 처리하고, 깨끗한 사본을 바로 기기에 저장합니다. 페이지가 로드된 뒤에는 오프라인이어도 계속 작동합니다.' },
    ],
    ctaTools: '모든 도구 보기',
    start: {
      title: '가지고 있는 파일로 시작하세요',
      lead: '필요한 작업을 고르세요. 모든 도구는 페이지 맨 위에 파일을 놓는 영역이 있습니다.',
      badge: '추천',
      open: '도구 열기',
    },
    nav: {
      remove: '메타데이터 제거',
      check: '보기 및 확인',
      learn: '알아보기',
      viewer: '사진 메타데이터 보기',
      aiCheck: 'AI 사진인지 확인',
      whatIs: '메타데이터란?',
    },
  },
  labels: {
    tools: '다른 메타데이터 도구',
    relatedTools: '이 작업을 위한 도구',
    homeTitle: '파일에 맞는 도구를 고르세요',
    homeLead: '각 페이지는 한 가지 작업에 집중하며, 도구가 맨 위에 바로 있습니다.',
    formats: '제거되는 것과 남는 것',
    contact: '문의',
    contactText: '질문, 버그 또는 제대로 정리되지 않는 파일이 있나요? 이메일:',
    updated: '{date} 업데이트',
  },
  tools: {
    'ai-tag-cleaner': {
      metaTitle: 'AI 태그 클리너 – 이미지 메타데이터에서 AI 태그 제거',
      description: '이미지에서 AI 태그를 지우세요: IPTC “AI 생성”, C2PA, XMP의 생성기 이름과 프롬프트. 무손실, 무료, 업로드 없이 브라우저에서 처리합니다.',
      navLabel: 'AI 태그 클리너',
      h1: '이미지 AI 태그 클리너',
      lead: 'AI 생성기와 AI 기능이 있는 편집기는 다룬 파일에 표시를 남깁니다. “AI 생성” 소스 유형, 서명된 C2PA 기록, 앱 이름, 때로는 프롬프트 전체까지요. 아래에 이미지를 놓으면 들어 있는 모든 AI 태그를 볼 수 있고, 픽셀 하나도 다시 인코딩하지 않고 지울 수 있습니다.',
      sections: [
        {
          heading: 'AI 태그에 해당하는 것',
          paragraphs: ['AI 태그는 AI가 사용되었다고 말하거나 암시하는 파일 안의 모든 필드입니다. 여러 메타데이터 표준에 동시에 흩어져 있어서, 필드 하나를 직접 지우는 것만으로는 거의 해결되지 않습니다.'],
          bullets: [
            'trainedAlgorithmicMedia, compositeWithTrainedAlgorithmicMedia 같은 IPTC·XMP의 DigitalSourceType 값.',
            '생성 단계를 표시하는 [C2PA Content Credentials](what-is-c2pa-content-credentials)의 액션. ChatGPT, Firefly, Photoshop 등이 기록합니다.',
            '생성기 이름이 담긴 Software·Creator Tool 필드와 AI 편집이 남긴 XMP 기록.',
            '[Stable Diffusion과 ComfyUI](remove-stable-diffusion-comfyui-metadata)의 PNG 청크에 담긴 프롬프트, 시드, 모델.',
          ],
        },
        {
          heading: 'AI 태그 클리너 작동 방식',
          paragraphs: [
            'AI Label Remover는 브라우저에서 파일 구조를 직접 읽습니다. 각 AI 태그는 출처 필드와 함께 표시되고, 아무것도 바꾸기 전에 파일에 “AI 흔적 발견”, “한 번 더 볼 만함”, “AI 흔적 없음” 중 하나의 판정이 붙습니다.',
            '“모든 메타데이터 제거”를 누르면 이 태그가 담긴 블록이 잘려 나갑니다: XMP, IPTC, EXIF, C2PA 매니페스트 저장소, PNG 텍스트 청크. 압축된 이미지 데이터는 바이트 단위로 그대로 복사되고, 정리된 사본을 다시 읽어 AI 태그가 남지 않았는지 확인할 수 있습니다.',
          ],
        },
        {
          heading: '도구별로 남기는 태그',
          paragraphs: [
            'ChatGPT와 Gemini 이미지는 C2PA 기록을 담고 있고, Firefly와 Photoshop 생성형 채우기는 C2PA와 DigitalSourceType을 추가합니다. Midjourney는 설명용 XMP를 쓰고, Stable Diffusion 인터페이스는 생성 설정 전체를 PNG에 저장합니다. 프롬프트를 비공개로 지키려면 [Midjourney·DALL·E 프롬프트 숨기기](hide-midjourney-dalle-prompts)를 참고하세요.',
          ],
        },
        {
          heading: 'AI 태그 클리너가 할 수 없는 것',
          paragraphs: [
            '정리는 메타데이터에만 작동합니다. SynthID 같은 보이지 않는 워터마크는 픽셀 안에 있어 그대로 남고, 플랫폼은 자체 분류기를 쓸 수도 있습니다. 태그 정리는 개인정보 보호와 실제 사진에 잘못 붙은 라벨을 바로잡기 위한 것입니다. AI로 만든 사실적인 이미지라면 플랫폼 규칙상 대개 직접 밝혀야 합니다.',
          ],
        },
      ],
      faqHeading: 'AI 태그 클리너 자주 묻는 질문',
      faq: [
        { q: 'AI 태그와 AI 라벨은 같은 건가요?', a: '꼭 그렇지는 않습니다. 태그는 파일 안의 데이터이고, 라벨은 Instagram의 “AI 정보”처럼 플랫폼이 보여 주는 표시입니다. 플랫폼은 흔히 태그를 보고 라벨을 붙입니다. 실제 사진에서 이를 피하려면 [No AI Tag](no-ai-tag)을 보세요.' },
        { q: 'AI 태그만 지우고 나머지는 남길 수 있나요?', a: 'AI 태그가 여러 블록에 흩어져 있어서 클리너는 개별 필드가 아니라 메타데이터 블록 전체를 제거합니다. 회전, ICC 색 프로필, 픽셀 크기는 항상 유지되므로 이미지는 이전과 똑같이 보입니다.' },
        { q: 'AI 태그를 지우면 화질이 떨어지나요?', a: '아니요. 다시 인코딩하지 않으며 메타데이터만 제거되고 이미지 데이터는 그대로입니다.' },
        { q: '어떤 형식을 정리할 수 있나요?', a: 'JPG, PNG, WebP, GIF, HEIC/HEIF, AVIF — 한 번에 최대 50개, 파일당 25MB까지입니다. PNG의 프롬프트는 [PNG 메타데이터 제거](png-metadata-remover)로도 처리할 수 있습니다.' },
        { q: 'ChatGPT나 Gemini 이미지의 메타데이터도 지워지나요?', a: '이 서비스들이 쓰는 C2PA Content Credentials와 IPTC 필드를 제거합니다. Google은 픽셀에 SynthID 워터마크도 넣는데, 이는 어떤 메타데이터 도구로도 지울 수 없습니다.' },
        { q: '지우기 전에 프롬프트를 볼 수 있나요?', a: '네. “원본 메타데이터” 탭에서 프롬프트, 워크플로, 생성기 이름을 그대로 보여 주므로, 정리 전에 남기고 싶은 내용을 복사할 수 있습니다.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'remove-stable-diffusion-comfyui-metadata'],
      updated: '2026-11-06',
    },
    'no-ai-tag': {
      metaTitle: 'No AI Tag – 실제 사진을 “AI 정보” 라벨 없이 올리기',
      description: '실제 사진에 “AI 정보” 라벨이 붙었나요? 원인이 되는 C2PA·IPTC 데이터를 지우고 AI 태그 없이 올리세요. 무손실, 무료, 브라우저에서 처리.',
      navLabel: 'No AI Tag',
      h1: 'No AI Tag – 실제 사진에 AI 태그가 붙지 않게',
      lead: 'Photoshop이나 휴대폰 편집 앱에서 생성형 기능으로 살짝만 고쳐도 Instagram, Facebook, Threads가 진짜 사진에 “AI 정보” 라벨을 붙일 수 있습니다. 아래에 파일을 놓아 어떤 데이터가 라벨을 일으키는지 확인한 뒤, 메타데이터에 AI 태그가 없는 깨끗한 사본을 공유하세요.',
      sections: [
        {
          heading: '실제 사진에 AI 태그가 붙는 이유',
          paragraphs: ['플랫폼은 편집 앱이 파일에 붙인 출처 데이터를 읽습니다. 자세한 내용은 [실제 사진에 “Made with AI” 라벨이 붙는 이유](made-with-ai-label)에 있으며, 흔한 원인은 다음과 같습니다.'],
          bullets: [
            '생성형 채우기, AI 지우기, AI 확장 같은 생성 단계를 기록한 C2PA 매니페스트.',
            '이미지가 AI로 합성되었다고 밝히는 IPTC·XMP의 DigitalSourceType 값.',
            '편집 앱이 내보낼 때 기본으로 추가하는 Content Credentials.',
          ],
        },
        {
          heading: 'AI 태그 없이 올리는 방법',
          paragraphs: ['1분도 걸리지 않으며, 아무것도 기기를 떠나지 않습니다.'],
          bullets: [
            '편집한 사진을 이 페이지 맨 위의 상자에 놓습니다.',
            '판정과 그 근거 필드를 확인합니다. 보고서가 정확한 C2PA 액션이나 IPTC 값을 알려 줍니다.',
            '“모든 메타데이터 제거”를 누르고 깨끗한 사본을 저장합니다.',
            '원래 내보낸 파일이 아니라 깨끗한 사본을 올립니다.',
          ],
        },
        {
          heading: '태그를 처음부터 막기',
          paragraphs: [
            '자주 편집한다면 Photoshop과 Lightroom의 내보내기 설정에서 Content Credentials를 꺼 두세요. 그러면 애초에 기록되지 않습니다. 여러 장을 한꺼번에 처리하려면 [메타데이터 일괄 제거](batch-remove-metadata)를 참고하세요.',
          ],
        },
        {
          heading: 'No AI Tag가 약속할 수 있는 것과 없는 것',
          paragraphs: [
            '메타데이터를 지우면 파일에 기록된 이유가 사라지며, 편집한 사진 대부분은 이것이 원인입니다. 하지만 SynthID 같은 픽셀 워터마크는 지울 수 없고, 플랫폼이 자체 감지로 게시물에 라벨을 붙이거나 직접 표시하라고 요청할 수도 있습니다. 이 페이지는 가볍게 편집한 실제 사진을 위한 것입니다. AI로 만든 이미지가 사람들을 오해하게 할 수 있다면 밝혀 주세요.',
          ],
        },
      ],
      faqHeading: 'No AI Tag 자주 묻는 질문',
      faq: [
        { q: '이미 올린 게시물의 “AI 정보” 라벨도 사라지나요?', a: '아니요. 라벨은 플랫폼의 게시물에 붙어 있습니다. 게시물을 삭제하거나 보관한 뒤, 여기서 파일을 정리하고 깨끗한 사본을 다시 올리세요.' },
        { q: 'No AI Tag는 결과를 보장하나요?', a: '아니요. 플랫폼이 읽는 메타데이터는 제거하지만, 플랫폼은 다른 신호도 쓸 수 있습니다. 다만 편집한 사진 대부분은 메타데이터가 라벨의 원인입니다.' },
        { q: 'iPhone과 Android 사진에서도 되나요?', a: '네. iPhone의 HEIC와 Android의 JPG를 변환 없이 그대로 정리합니다. 전용 [HEIC 메타데이터 제거](heic-metadata-remover) 도구도 있습니다.' },
        { q: '완전히 AI로 만든 이미지의 AI 태그는요?', a: '[AI 태그 클리너](ai-tag-cleaner)가 보여 주고 제거하지만, 사실적인 AI 이미지는 대개 플랫폼 규칙상 직접 표시해야 합니다.' },
      ],
      related: ['made-with-ai-label', 'what-is-c2pa-content-credentials', 'batch-remove-metadata'],
      updated: '2026-11-09',
    },
    'remove-exif-data': {
      metaTitle: '사진 EXIF 데이터 온라인 삭제 – 무료, 개인정보 안전',
      description: 'JPG, HEIC, PNG, WebP에서 EXIF(GPS, 카메라, 일련번호, 날짜)를 브라우저에서 지우세요. 업로드 없음, 화질 손실 없음, 최대 50개 동시 처리.',
      navLabel: 'EXIF 삭제',
      h1: '사진에서 EXIF 데이터 삭제',
      lead: '아래에 사진을 놓으면 GPS 위치, 카메라와 렌즈, 일련번호, 촬영 시각 등 모든 EXIF 필드를 보고 클릭 한 번으로 지울 수 있습니다. 모든 처리는 기기에서 이루어지며 파일은 업로드되지 않습니다.',
      sections: [
        {
          heading: 'EXIF 데이터가 드러내는 것',
          paragraphs: ['EXIF는 카메라나 휴대폰이 사진마다 기록하는 기술 메모입니다. 하나하나는 대부분 무해하지만 모이면 당신에 대해 많은 것을 말해 줍니다. 개인정보와 관련된 필드는 다음과 같습니다.'],
          bullets: [
            'GPS 위도, 경도, 고도 — 몇 미터 단위로 정확해 집을 찾기에 충분한 경우가 많습니다.',
            '시간대가 포함된 촬영 날짜와 시각.',
            '카메라·휴대폰 제조사와 모델, 렌즈, 그리고 많은 카메라에서 사진들을 서로 연결하는 본체 일련번호.',
            '소유자나 작가 이름, 마지막으로 파일을 편집한 소프트웨어.',
            '잘라 낸 뒤에도 원래 사진을 보여 줄 수 있는 내장 썸네일.',
          ],
        },
        {
          heading: 'EXIF 삭제 작동 방식',
          paragraphs: [
            'AI Label Remover는 파일 구조를 직접 읽습니다. JPEG에서는 EXIF와 XMP가 담긴 APP1 세그먼트와 IPTC, 주석, 썸네일을 잘라 내고, HEIC·PNG·WebP에서는 해당하는 박스나 청크를 제거합니다. 압축된 이미지 데이터는 바이트 단위로 복사되므로 다시 인코딩되지 않고 사진도 그대로입니다.',
            '사진 표시 방식을 좌우하는 필드는 일부러 남깁니다: 회전, ICC 색 프로필, 픽셀 크기. 그래서 조잡한 도구에서 생기는 옆으로 누운 사진이나 바랜 색이 생기지 않습니다. 작업이 끝나면 정리한 파일을 다시 읽어 EXIF 필드가 정말 사라졌는지 보여 줍니다.',
          ],
        },
        {
          heading: '공유 전에 EXIF를 지워야 할 때',
          paragraphs: [
            '대형 SNS 상당수는 업로드할 때 EXIF를 지우지만, 그렇지 않은 곳도 많습니다: 이메일 첨부, 클라우드 링크, 커뮤니티, 중고거래 사이트, “원본 화질”로 보내는 메신저, 그리고 자신의 웹사이트. 사진이 어디로 갈지 모르겠다면 먼저 정리하는 것이 안전합니다.',
            '온라인 판매, 집에서 찍은 사진 게시, 처음 만난 사람에게 사진 보내기는 [GPS 데이터가 위치를 드러낼 수 있는](remove-gps-location-from-photos) 대표적인 경우입니다.',
          ],
        },
        {
          heading: '설계부터 개인정보 보호',
          paragraphs: [
            '온라인 EXIF 삭제 도구는 보통 사진을 서버에 올려 처리한 뒤 돌려보냅니다. AI Label Remover는 모든 작업을 브라우저 탭 안의 Web Worker에서 처리합니다. 페이지가 로드된 뒤에는 인터넷을 끊어도 계속 작동합니다. 계정도, 워터마크도 없고 파일당 25MB·4천만 화소 외에는 제한이 없습니다.',
          ],
        },
      ],
      faqHeading: 'EXIF 삭제 자주 묻는 질문',
      faq: [
        { q: 'EXIF를 지우면 화질이 떨어지나요?', a: '아니요. 메타데이터 블록만 잘라 내고 압축된 이미지 데이터는 그대로 복사하므로 해상도, 선명도, 색이 똑같습니다.' },
        { q: '사진 방향이 그대로 유지되나요?', a: '네. 방향 값과 ICC 색 프로필이 유지되어 이전과 같은 방향으로 표시됩니다.' },
        { q: 'iPhone HEIC 사진의 EXIF도 지울 수 있나요?', a: '네. HEIC와 HEIF를 JPEG로 변환하지 않고 바로 지원합니다. 전용 페이지 [HEIC 메타데이터 제거](heic-metadata-remover)도 있습니다.' },
        { q: 'EXIF가 사라졌는지 어떻게 확인하나요?', a: '정리 후 AI Label Remover가 새 파일을 다시 읽어 남은 필드를 보여 줍니다. 운영체제의 파일 속성에서도 확인할 수 있습니다.' },
        { q: '여러 장을 한 번에 처리할 수 있나요?', a: '네. 한 번에 최대 50개를 처리해 ZIP 하나로 받을 수 있습니다. [메타데이터 일괄 제거](batch-remove-metadata)를 참고하세요.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'made-with-ai-label'],
      updated: '2026-11-06',
    },
    'remove-c2pa-content-credentials': {
      metaTitle: '이미지에서 C2PA Content Credentials 무료 제거',
      description: 'JPG, PNG, HEIC, WebP, AVIF의 C2PA Content Credentials(JUMBF 매니페스트)를 확인하고 무손실로 제거하세요. 파일은 어디에도 업로드되지 않습니다.',
      navLabel: 'C2PA 제거',
      h1: 'C2PA Content Credentials 제거',
      lead: 'Content Credentials는 이미지에 붙은 서명된 이력입니다. 어떤 앱이 만들었는지, 이후 어떤 편집이 있었는지, 생성형 AI가 쓰였는지를 담고 있습니다. 아래에 파일을 놓아 C2PA 매니페스트를 읽은 뒤, 매니페스트 저장소 전체를 무손실로 제거하세요.',
      sections: [
        {
          heading: 'C2PA 매니페스트에 담긴 것',
          paragraphs: ['C2PA(Coalition for Content Provenance and Authenticity)는 파일에 암호 서명된 기록을 넣는 방법을 정의합니다. 자세한 내용은 [C2PA란](what-is-c2pa-content-credentials)에 있으며, 실제 매니페스트에는 보통 다음이 들어 있습니다.'],
          bullets: [
            'Claim generator — 서명한 앱이나 서비스(Photoshop, Firefly, ChatGPT, 카메라 등).',
            '생성, 열기, 편집, 자르기 같은 액션 목록과 생성형 AI 단계 표시.',
            '재료(ingredients) — 파일을 만드는 데 쓰인 이전 버전이나 원본 이미지.',
            '콘텐츠가 촬영·합성·AI 생성 중 무엇인지 밝히는 디지털 소스 유형.',
            '기록을 정확한 이미지 데이터에 묶는 서명과 인증서.',
          ],
        },
        {
          heading: '형식별 C2PA 위치',
          paragraphs: [
            'JPEG에서는 매니페스트 저장소가 APP11 세그먼트에 JUMBF 박스로, PNG에서는 caBX 청크로, HEIC와 AVIF에서는 uuid 박스로, WebP에서는 전용 RIFF 청크로 들어 있습니다. AI Label Remover는 이를 모두 찾아 안의 내용을 보여 주고, 이미지 데이터는 그대로 복사하면서 저장소 전체를 제거합니다.',
            '서명이 매니페스트를 정확한 바이트에 묶기 때문에, 다른 앱에서 다시 저장하면 대개 깨지거나 사라집니다. 깔끔하게 제거하면 깨진 반쪽짜리 기록이 남지 않습니다.',
          ],
        },
        {
          heading: '남겨야 할 때, 지워야 할 때',
          paragraphs: [
            'Content Credentials는 가치가 있을 수 있습니다. 언론사와 창작자가 이미지의 출처를 증명하는 데 도움이 됩니다. 그것이 목적이라면 남겨 두세요. 어떤 경우든 원본 파일은 보관하세요. 제거한 메타데이터는 복구할 수 없습니다.',
            '기록이 원하는 것보다 많이 드러낼 때(이름, 편집 이력, 원본 이미지)나, 가벼운 수정 후 편집 앱이 실제 사진에 AI 표시를 붙였을 때는 제거하는 것이 합리적입니다. Photoshop과 Lightroom의 내보내기 설정에서 Content Credentials를 끌 수도 있습니다.',
          ],
        },
      ],
      faqHeading: 'C2PA 자주 묻는 질문',
      faq: [
        { q: 'AI Label Remover가 C2PA 서명을 검증하나요?', a: '아니요. 매니페스트 내용을 읽어 보여 주지만 인증서 체인은 검증하지 않습니다. 서명 검증이 필요하면 공식 Content Credentials Verify 도구를 사용하세요.' },
        { q: 'Content Credentials를 지워도 합법인가요?', a: '본인 소유이거나 수정 권한이 있는 파일의 메타데이터를 지우는 것은 일반적으로 문제없지만, 누가 어떻게 만들었는지 속이는 데 쓰지는 마세요. 일반 정보이며 법률 자문이 아닙니다.' },
        { q: '내 사진에 “한 번 더 볼 만함”이 뜨는 이유는?', a: '파일에 AI를 명시하지 않은 C2PA 매니페스트가 있기 때문입니다. 일부 플랫폼은 어떤 매니페스트든 단서로 보므로, 결정하기 전에 나열된 액션을 확인하세요.' },
        { q: '그래도 플랫폼이 편집된 것을 알 수 있나요?', a: '제거된 매니페스트로는 알 수 없습니다. 플랫폼은 다른 신호를 쓸 수 있고, 픽셀 속 보이지 않는 워터마크는 메타데이터 제거의 영향을 받지 않습니다.' },
      ],
      related: ['what-is-c2pa-content-credentials', 'made-with-ai-label', 'hide-midjourney-dalle-prompts'],
      updated: '2026-11-06',
    },
    'heic-metadata-remover': {
      metaTitle: 'HEIC 메타데이터 제거 – iPhone 사진 EXIF·GPS 삭제',
      description: 'iPhone HEIC·HEIF 사진에서 EXIF, GPS 위치, 타임스탬프를 JPEG 변환 없이 지우세요. 무손실, 브라우저에서 처리, 업로드 없음.',
      navLabel: 'HEIC 메타데이터 제거',
      h1: 'iPhone 사진용 HEIC 메타데이터 제거',
      lead: 'iPhone은 사진을 HEIC로 저장하며, 사진마다 어디서 언제 찍었는지 기록합니다. 아래에 HEIC나 HEIF 파일을 놓아 메타데이터를 확인하고 지우세요. 사진은 HEIC 그대로이며 변환도, 화질 손실도 없습니다.',
      sections: [
        {
          heading: 'iPhone HEIC 사진이 기록하는 것',
          paragraphs: ['평범한 iPhone 사진에도 생각보다 많은 정보가 담겨 있습니다.'],
          bullets: [
            '정확한 GPS 좌표, 고도, 카메라가 향한 방향.',
            '촬영 날짜, 시각, 시간대와 수정 날짜.',
            '기기 모델, 렌즈, 카메라 설정, iOS 버전.',
            'Live Photo 연결 식별자 같은 Apple 전용 데이터.',
            '편집 앱이 기록한 XMP 데이터. 때로는 C2PA 기록이 포함됩니다.',
          ],
        },
        {
          heading: 'JPEG 변환 없이 메타데이터 제거',
          paragraphs: [
            '흔한 조언은 HEIC를 JPEG로 변환하고 메타데이터가 넘어가지 않기를 바라는 것입니다. 하지만 이렇게 하면 이미지를 다시 인코딩해 화질이 떨어지고, 넓은 색역의 색 프로필도 사라지는 경우가 많습니다. AI Label Remover는 HEIC 컨테이너 자체를 편집합니다. Exif·XMP 항목, C2PA uuid 박스, 타임스탬프 박스를 제거하고 HEVC 이미지 데이터, 회전(irot/imir), 색 프로필(colr)은 그대로 둡니다.',
            '같은 엔진이 동일한 ISOBMFF 컨테이너를 쓰는 AVIF도 처리하므로, 최신 앱에서 내보낸 AVIF도 같은 방식으로 정리할 수 있습니다.',
          ],
        },
        {
          heading: 'iPhone 설정과 파일 정리의 차이',
          paragraphs: [
            'iOS에서는 공유 시트의 “옵션” 버튼으로 한 번의 공유에 위치를 끌 수 있고, 사진 앱에서 사진별로 위치를 바꾸거나 지울 수 있습니다. 한두 장에는 편하지만 잊기 쉽고, 다른 필드는 남습니다. [사진 속 GPS가 위험한 이유](remove-gps-location-from-photos)를 확인하세요.',
            '휴가 사진 폴더, 제품 사진, 판매 글용 이미지처럼 여러 장이라면 AI Label Remover에 놓고 ZIP 하나로 저장하는 편이 빠르며, 전후 비교 보고서로 무엇이 지워졌는지 정확히 볼 수 있습니다.',
          ],
        },
      ],
      faqHeading: 'HEIC 자주 묻는 질문',
      faq: [
        { q: 'HEIC가 가끔 안 열리는 Windows에서도 되나요?', a: '네. AI Label Remover가 HEIC 구조를 직접 읽으므로 HEIC 코덱 설치가 필요 없습니다. HEIC 파일은 미리보기 대신 형식 라벨이 표시되지만 읽기와 정리는 정상 작동합니다.' },
        { q: '정리한 파일이 사진 앱에서 열리나요?', a: '네. 결과물은 같은 이미지 데이터를 가진 표준 HEIC 파일이며, 메타데이터 항목만 제거됩니다.' },
        { q: 'Live Photo도 지원하나요?', a: 'AI Label Remover는 정지 HEIC 이미지를 처리합니다. Live Photo의 짝이 되는 동영상은 별도 파일이며 변경되지 않습니다.' },
        { q: '파일 크기 제한이 있나요?', a: '파일당 최대 25MB, 4천만 화소로 현재 모든 iPhone의 사진을 처리할 수 있으며, 한 번에 50개까지 정리할 수 있습니다.' },
      ],
      related: ['remove-gps-location-from-photos', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
      updated: '2026-11-06',
    },
    'png-metadata-remover': {
      metaTitle: 'PNG 메타데이터 제거 – 프롬프트와 텍스트 청크 삭제',
      description: 'PNG 메타데이터(Stable Diffusion·ComfyUI 프롬프트가 담긴 tEXt, iTXt, zTXt 청크, XMP, eXIf, C2PA)를 지우고 이미지는 무손실로 유지하세요.',
      navLabel: 'PNG 메타데이터 제거',
      h1: 'PNG 메타데이터 제거',
      lead: 'PNG 파일은 텍스트 청크에 메타데이터를 숨깁니다: AI 프롬프트와 워크플로, 작성자 이름, 소프트웨어, 타임스탬프. 아래에 PNG를 놓아 모든 청크를 읽고 지우세요. 이미지 데이터는 비트 단위로 그대로입니다.',
      sections: [
        {
          heading: 'PNG가 메타데이터를 두는 곳',
          paragraphs: ['PNG는 청크의 연속입니다. 이미지 자체는 IHDR, PLTE, IDAT에 있고 나머지는 모두 선택 사항입니다. AI Label Remover가 제거하는 청크는 다음과 같습니다.'],
          bullets: [
            'tEXt, zTXt, iTXt — 자유 텍스트, 압축 텍스트, 국제 텍스트. Stable Diffusion WebUI는 여기에 “parameters” 청크를, ComfyUI는 “prompt”와 “workflow” JSON을 씁니다.',
            'iTXt에 저장된 XMP 패킷. IPTC와 AI 소스 선언이 포함됩니다.',
            'eXIf — 앱이 사진에서 복사해 온 경우 GPS를 포함한 EXIF 데이터.',
            'caBX — C2PA Content Credentials.',
            'tIME(마지막 수정 시각)과 dSIG(디지털 서명).',
          ],
        },
        {
          heading: '이미지가 똑같이 보이도록 남기는 것',
          paragraphs: [
            '투명도(tRNS), 감마와 색도(gAMA, cHRM), sRGB 플래그, 내장 ICC 프로필(iCCP)은 표시에 영향을 주므로 유지됩니다. 애니메이션 PNG는 acTL, fcTL, fdAT 청크를 유지해 APNG 애니메이션이 계속 재생됩니다.',
            'IDAT 데이터는 다시 압축하지 않고 복사하므로, 정리한 파일은 원본과 픽셀 단위로 같습니다. 텍스트 청크가 빠져서 보통 조금 더 작아집니다.',
          ],
        },
        {
          heading: 'AI 프롬프트와 워크플로 보호',
          paragraphs: [
            'Stable Diffusion, Forge, ComfyUI로 만든 이미지를 공유하면, 누구나 PNG를 같은 도구에 끌어다 놓아 정확한 프롬프트, 시드, 모델, 노드 그래프를 되살릴 수 있습니다. [Stable Diffusion과 ComfyUI가 PNG에 프롬프트를 숨기는 방식](remove-stable-diffusion-comfyui-metadata)에서 무엇이 저장되는지 볼 수 있습니다. 정리하면 모두 지워지며, 남겨 두고 싶다면 “원본 메타데이터” 탭에서 먼저 프롬프트를 복사하세요.',
          ],
        },
      ],
      faqHeading: 'PNG 메타데이터 자주 묻는 질문',
      faq: [
        { q: 'PNG 메타데이터를 지우면 색이 바뀌나요?', a: '아니요. sRGB, gAMA, cHRM, iCCP 등 색 관련 청크는 유지되고 IDAT 이미지 데이터는 그대로 복사됩니다.' },
        { q: '투명 PNG에서도 되나요?', a: '네. 투명도 데이터(tRNS 또는 IDAT 안의 알파 채널)는 이미지의 일부이므로 절대 건드리지 않습니다.' },
        { q: '프롬프트를 어딘가에 보관할 수 있나요?', a: '정리 전에 “원본 메타데이터” 탭에서 복사하세요. 제거한 뒤에는 정리된 파일에서 메타데이터를 되살릴 수 없습니다.' },
        { q: 'Midjourney나 DALL·E PNG에도 되나요?', a: '네. 이 서비스들이 넣는 텍스트, XMP, C2PA 데이터도 같은 방식으로 제거됩니다. [Midjourney·DALL·E 프롬프트 숨기기](hide-midjourney-dalle-prompts)를 참고하세요.' },
      ],
      related: ['remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts', 'batch-remove-metadata'],
      updated: '2026-11-06',
    },
  },
  info: {
    about: {
      metaTitle: 'AI Label Remover 소개 – 메타데이터 클리너 작동 방식',
      description: 'AI Label Remover를 누가 만드는지, 브라우저 속 메타데이터 클리너가 어떻게 작동하는지, 글을 어떻게 쓰고 갱신하는지, 그리고 도구가 절대 하지 않는 일.',
      navLabel: '소개',
      title: 'AI Label Remover 소개',
      lead: 'AI Label Remover는 이미지의 숨은 메타데이터(EXIF, GPS, XMP, IPTC, C2PA Content Credentials, AI 프롬프트)를 읽고 지우는 무료 도구로, 파일이 기기를 떠날 필요가 없도록 만들어졌습니다.',
      sections: [
        {
          heading: '만든 이유',
          paragraphs: [
            '사진과 AI 이미지에는 생각보다 훨씬 많은 정보가 담겨 있습니다. GPS 태그 속 집 위치, 기기 일련번호, 프롬프트와 워크플로 전체, 플랫폼이 라벨을 붙일 때 읽는 출처 기록까지요. 대부분의 온라인 클리너는 지키려는 바로 그 파일을 업로드하라고 합니다. AI Label Remover는 그런 대가 없이 같은 일을 하려고 만들었습니다.',
          ],
        },
        {
          heading: '도구 작동 방식',
          paragraphs: [
            '이미지를 추가하면 브라우저가 로컬에서 읽습니다. Web Worker가 파일 구조(JPEG 세그먼트, PNG 청크, WebP RIFF 청크, GIF 블록, HEIC/AVIF 박스)를 분석해 찾은 메타데이터 블록을 모두 보여 줍니다. 정리는 이 블록들을 바이트 스트림에서 제거하고, 압축된 이미지 데이터는 그대로 복사한 뒤, 결과를 다시 읽어 남은 것을 확인합니다.',
            '서버 쪽 처리는 전혀 없습니다. 웹사이트는 정적 페이지 모음이며, 한 번 로드되면 도구는 오프라인에서도 작동합니다.',
          ],
        },
        {
          heading: '글을 쓰는 방식',
          paragraphs: [
            '이 사이트의 가이드는 공개된 사양(EXIF, XMP, IPTC Photo Metadata, C2PA, PNG·ISOBMFF 형식), 플랫폼 도움말, 그리고 소개하는 도구에서 나온 실제 파일로 한 테스트를 바탕으로 합니다. 글마다 마지막 수정일을 표시하며, 표준이나 플랫폼 정책이 바뀌면 갱신합니다.',
            '글은 일반 정보이며 법률 자문이 아닙니다. AI 라벨에 관한 플랫폼 규칙은 자주 바뀌므로, 어떤 내용을 믿기 전에 해당 플랫폼의 도움말을 확인하세요.',
          ],
        },
        {
          heading: 'AI Label Remover가 하지 않는 일',
          paragraphs: [],
          bullets: [
            '파일을 업로드·저장·기록하지 않습니다. 받을 서버 자체가 없습니다.',
            '픽셀을 바꾸거나, 보이지 않는 워터마크나 보이는 로고를 지우지 않습니다.',
            '플랫폼이 라벨을 붙이거나 붙이지 않을 것이라고 약속하지 않습니다.',
            'AI 이미지를 실제 사진처럼 위장하는 일을 돕지 않습니다. 개인정보 보호와 오류 수정에 사용하세요.',
          ],
        },
        {
          heading: '독립성',
          paragraphs: [
            'AI Label Remover는 독립 프로젝트이며 Meta, Google, OpenAI, Adobe, Midjourney, Apple, C2PA와 제휴하지 않았습니다. 제품명은 호환성을 설명하기 위해서만 사용합니다.',
          ],
        },
      ],
      updated: '2026-11-06',
    },
    privacy: {
      metaTitle: '개인정보 처리방침 – AI Label Remover',
      description: '쉬운 말로 쓴 개인정보 처리방침: 이미지는 기기를 떠나지 않고, 계정·분석·광고가 없으며, 언어와 테마만 저장됩니다.',
      navLabel: '개인정보',
      title: '개인정보 처리방침',
      lead: 'AI Label Remover는 개인정보를 지키기 위한 도구이므로, 사용하는 데 개인정보를 대가로 치러서는 안 됩니다. 이 페이지는 이미지와 웹사이트가 다루는 아주 적은 정보에 어떤 일이 일어나는지 쉬운 말로 설명합니다.',
      sections: [
        {
          heading: '요약',
          paragraphs: [],
          bullets: [
            '이미지는 사용자의 기기에서 처리되며 업로드되지 않습니다.',
            '계정, 가입, 메일링 리스트가 없습니다. 우리는 당신이 누구인지 모릅니다.',
            '분석 도구, 광고, 추적 픽셀, 제3자 스크립트가 없습니다.',
            '언어와 밝은/어두운 테마만 브라우저에 저장되며, 언제든 지울 수 있습니다.',
          ],
        },
        {
          heading: '이미지에 일어나는 일',
          paragraphs: ['AI Label Remover에 이미지를 추가하면 그 여정은 이것이 전부입니다.'],
          bullets: [
            '브라우저가 기기에서 파일을 열어 탭의 메모리에 둡니다.',
            '탭 안의 Web Worker가 메타데이터를 읽고, 정리를 누르면 깨끗한 사본을 메모리에 씁니다.',
            '저장하면 브라우저가 깨끗한 파일이나 ZIP을 기기에 바로 씁니다.',
            '탭을 닫거나 새로 고치면 이미지와 보고서가 사라집니다. 어떤 서버도 받은 적이 없으니 서버에 남는 것도 없습니다.',
          ],
        },
        {
          heading: '직접 확인할 수 있습니다',
          paragraphs: [
            '우리 말을 그대로 믿을 필요는 없습니다. 페이지를 연 뒤 Wi-Fi나 모바일 데이터를 끄고 파일을 정리해 보세요. 보낼 것이 없으니 그대로 작동합니다. 개발자 도구에 익숙하다면 정리 중에 네트워크 탭을 열어 보세요. 이미지 데이터가 기기를 떠나지 않는 것을 볼 수 있습니다.',
          ],
        },
        {
          heading: '수집하지 않는 것',
          paragraphs: ['AI Label Remover는 다음을 수집하거나 보관하지 않습니다.'],
          bullets: [
            '이미지, 그 메타데이터, 화면에 표시되는 보고서',
            '이름, 이메일 주소, 계정 정보',
            '위치 — 사진에서 찾은 GPS는 오직 당신의 화면에만 표시됩니다',
            '확인한 파일이나 도구 사용 방식에 대한 기록',
          ],
        },
        {
          heading: '브라우저에 저장되는 것과 지우는 방법',
          paragraphs: ['선택을 기억하기 위해 사이트는 기기에 작은 설정 두 가지를 저장합니다.'],
          bullets: [
            '언어: local storage의 “lang” 항목과 1년간 유지되는 자사 “lang” 쿠키. 홈페이지가 고른 언어로 열리도록 하며 “ko” 같은 언어 코드만 담습니다.',
            '테마: 밝은 모드나 어두운 모드를 고르면 local storage에 “theme” 항목이 저장됩니다.',
            '지우려면 브라우저 설정에서 이 사이트의 쿠키와 사이트 데이터를 삭제하세요. AI Label Remover는 계속 작동하며 선택만 잊어버립니다.',
          ],
        },
        {
          heading: '웹사이트를 방문할 때',
          paragraphs: [
            '다른 모든 웹사이트처럼, 페이지를 열면 서버가 이를 보내기 위해 몇 가지 기본 기술 정보가 필요합니다: 기기의 네트워크 주소(IP 주소), 브라우저 종류, 여는 페이지. 이 정보는 사이트를 원활하게 운영하고 악성 트래픽을 막기 위해 일시적으로 기록될 수 있으며, 필요한 기간만 보관됩니다. 신원 확인에 쓰지 않고, 프로필을 만들지 않으며, 공유하거나 판매하지 않습니다.',
            '홈페이지를 열면 서버는 알맞은 언어 버전을 열기 위해서만 브라우저 언어 설정과 이전에 고른 언어를 확인합니다. 이 과정은 즉시 이루어지며 저장되지 않습니다.',
          ],
        },
        {
          heading: '아동',
          paragraphs: [
            'AI Label Remover는 아동을 포함해 누구에게도 개인정보를 요청하거나 수집하지 않습니다. 어린 사용자도 계정을 만들거나 자신에 대한 정보를 알리지 않고 도구를 쓸 수 있습니다.',
          ],
        },
        {
          heading: '사용자의 권리',
          paragraphs: [
            'AI Label Remover는 이름, 이메일, 계정을 수집하지 않으므로 제공·정정·삭제할 프로필이 없습니다. 사이트가 기기에 기억하는 내용은 언제나 사용자가 관리합니다. 방문 시 일시적으로 기록되는 기술 정보는 이름이나 계정과 연결되지 않으며, 사이트 운영에 더 필요하지 않으면 삭제됩니다.',
          ],
        },
        {
          heading: '방침 변경',
          paragraphs: ['AI Label Remover의 데이터 처리 방식이 바뀌면 이 페이지와 맨 위의 날짜를 갱신합니다.'],
        },
      ],
      updated: '2026-11-06',
    },
  },
};

export default ko;
