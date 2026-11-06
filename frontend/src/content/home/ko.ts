import type { HomeBasics } from '../pages/types';

const ko: HomeBasics = {
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
      { title: '오프라인에서도 작동', text: '페이지를 불러온 뒤 Wi-Fi를 끄고 파일을 세척해 보세요. 그래도 작동합니다. DevTools의 네트워크 탭에도 나가는 이미지 데이터가 보이지 않습니다.' },
      { title: '계정 없음, 추적 없음', text: '가입, 분석 도구, 광고, 제3자 픽셀이 없습니다. 사이트는 선택한 언어와 테마만 기억합니다.' },
    ],
  },
  faq: [
    { q: 'EXIF와 메타데이터는 어떻게 다른가요?', a: 'EXIF는 메타데이터의 한 종류로, 카메라와 휴대폰이 기록하는 것입니다. “메타데이터”는 더 넓은 개념으로 XMP, IPTC, C2PA, PNG 텍스트 청크도 포함합니다.' },
    { q: '메타데이터로 사진을 찍은 장소를 알 수 있나요?', a: '네, 이미지에 GPS 태그가 있다면 가능합니다. 카메라에 위치 접근을 허용하면 휴대폰은 보통 위도, 경도, 고도를 기록합니다. 세척하면 화질 손상 없이 이 태그가 사라집니다. [사진에서 GPS 위치를 지우는 방법](remove-gps-location-from-photos)을 참고하세요.' },
    { q: '이미지에서 AI 메타데이터를 지우려면 어떻게 하나요?', a: '이 페이지 상단의 상자에 이미지를 끌어다 놓고 “모든 이미지 세척”을 누르세요. 세척 전에 각 파일의 카드에서 발견된 C2PA, IPTC, 프롬프트 데이터를 확인할 수 있습니다.' },
    { q: '여기에 사진을 올려도 안전한가요?', a: '사진은 아예 업로드되지 않습니다. AI Label Remover는 브라우저에서 파일을 열어 탭의 메모리 안에서 처리하고, 깨끗한 사본을 바로 기기에 저장합니다. 페이지가 로드된 뒤에는 오프라인이어도 계속 작동합니다.' },
  ],
};

export default ko;
