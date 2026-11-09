import type { Articles } from './types';

const ko: Articles = {
  'made-with-ai-label': {
    metaTitle: '진짜 사진인데 Instagram에서 “AI 정보” 표시가 붙는 이유',
    related: ['what-is-c2pa-content-credentials', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      '인스타그램이나 페이스북에서 실제 사진에 AI 정보 라벨이 붙는 원인은 편집기가 남긴 C2PA 또는 IPTC 필드 때문입니다. 화질 저하 없이 해당 필드를 제거하는 방법을 알아보세요.',
    updated: '2026-10-23',
    sections: [
      {
        heading: '라벨은 사진 내용이 아닌 파일 데이터를 읽습니다',
        paragraphs: [
          'Meta의 “AI 정보”(이전의 “AI로 생성됨”) 라벨은 업로드된 이미지 파일 내부에서 생성형 AI 신호가 감지될 때 자동으로 적용됩니다. 대표적인 두 신호는 [C2PA 콘텐츠 자격 증명 매니페스트](what-is-c2pa-content-credentials)와 XMP 블록의 IPTC DigitalSourceType 속성입니다.',
          'trainedAlgorithmicMedia 값은 이미지 전체가 생성되었음을 나타내며, compositeWithTrainedAlgorithmicMedia는 실제 사진에 AI 편집 요소가 포함되었음을 의미합니다. SNS 플랫폼은 업로드 시 이러한 메타데이터를 자동 스캔합니다.',
        ],
      },
      {
        heading: '진짜 사진에 AI 신호가 생기는 원인',
        paragraphs: ['카메라로 직접 촬영한 사진이라도 편집 소프트웨어를 거치면서 AI 신호가 삽입될 수 있습니다:'],
        bullets: [
          'Photoshop이나 Lightroom의 생성형 채우기, 생성형 확장 또는 AI 지우개 도구 사용 시 c2pa 작업 기록이 추가됩니다.',
          '콘텐츠 자격 증명이 켜진 상태에서 내보내기 시 전체 편집 히스토리가 서명되어 파일에 남습니다.',
          '스마트폰 갤러리의 AI 지우개 기능이 EXIF 및 XMP에 편집 흔적을 기록합니다.',
          '이전 편집 메타데이터를 유지한 채 다른 앱에서 다시 저장할 때 플래그가 전파됩니다.',
        ],
      },
      {
        heading: 'AI Label Remover로 원인 필드 찾기',
        paragraphs: [
          '이미지를 작업 영역에 드래그하면 “AI 흔적” 탭에서 C2PA JUMBF, IPTC XMP 등 감지된 신호의 위치와 내용을 확인할 수 있습니다. “원시 메타데이터” 탭에서는 매니페스트를 서명한 생성기와 기록된 작업 내역을 자세히 살펴볼 수 있습니다.',
          '명시적인 AI 플래그가 없더라도 콘텐츠 자격 증명이 남아 있으면 플랫폼에 따라 보수적으로 AI 라벨을 붙일 수 있으므로 업로드 전 점검이 필요합니다.',
        ],
      },
      {
        heading: '공유할 사본을 무손실로 정리하기',
        paragraphs: [
          '“모든 메타데이터 제거” 버튼을 클릭하면 C2PA, XMP, IPTC, EXIF 블록만 바이너리 스트림에서 정밀하게 잘라내며, 픽셀 데이터, 해상도, 방향, ICC 색상 프로필은 원본 그대로 유지됩니다. 세부 기능은 [AI 태그 클리너](ai-tag-cleaner) 페이지에서 확인할 수 있습니다.',
          '일반 그래픽 프로그램에서 JPEG로 다시 저장하면 압축 손실이 발생하지만, AI Label Remover는 바이트 단위 블록 제거 방식으로 화질 저하를 완전히 방지합니다.',
        ],
      },
      {
        heading: '오탐지 수정과 올바른 공개 의무',
        paragraphs: [
          '메타데이터 정리는 프라이버시 보호와 잘못 붙은 AI 라벨 수정을 목적으로 합니다. 이미지가 100% 생성형 AI로 제작된 경우에는 관람객과의 신뢰를 위해 플랫폼의 공개 규정을 준수해야 합니다.',
        ],
      },
    ],
    faqHeading: 'AI 라벨 관련 자주 묻는 질문',
    faq: [
      { q: '게시물을 올린 후에도 “AI 정보” 라벨을 제거할 수 있나요?', a: '이미 게시된 글에서는 수정이 불가능합니다. [AI 태그 클리너](ai-tag-cleaner)로 원본 파일을 정리한 후 다시 게시해야 합니다.' },
      { q: '메타데이터를 삭제하면 AI 라벨이 확실히 사라지나요?', a: '파일 메타데이터(C2PA, IPTC)로 인한 라벨은 확실히 방지됩니다. 다만 플랫폼의 시각적 AI 분석 모델에 의한 판별은 별개로 동작할 수 있습니다.' },
      { q: '정리 후 사진의 화질이나 해상도가 변하나요?', a: '전혀 변하지 않습니다. 이미지 픽셀 데이터는 바이트 단위로 그대로 복사되며, 메타데이터 헤더만 제거됩니다.' },
      { q: '카메라 촬영 설정(EXIF)만 남기고 AI 태그만 지울 수 있나요?', a: '현재는 개인정보와 기기 정보, AI 흔적을 모두 안전하게 일괄 제거하는 방식을 지원합니다.' },
    ],
  },

  'remove-stable-diffusion-comfyui-metadata': {
    metaTitle: 'PNG 파일에서 ComfyUI 워크플로 및 스테이블 디퓨전 프롬프트 제거',
    related: ['hide-midjourney-dalle-prompts', 'batch-remove-metadata', 'what-is-c2pa-content-credentials'],
    description:
      'A1111, Forge, ComfyUI는 프롬프트, 시드, 모델 및 전체 노드 워크플로를 PNG 파일에 저장합니다. 픽셀 손상 없이 텍스트 데이터를 깔끔하게 제거하세요.',
    updated: '2026-10-23',
    sections: [
      {
        heading: '이미지 파일 안에 숨어 있는 생성 파라미터',
        paragraphs: [
          'Stable Diffusion WebUI(AUTOMATIC1111), Forge, ComfyUI에서 생성된 PNG 이미지에는 프롬프트, 샘플러, CFG 스케일, 모델 체크포인트 정보가 tEXt, zTXt, iTXt 청크 형태로 기록됩니다.',
          '특히 ComfyUI는 전체 노드 그래프를 JSON 구조로 저장하므로, 이미지를 ComfyUI에 드래그하기만 하면 사용한 모든 프롬프트, LoRA, 로컬 폴더 경로까지 고스란히 복원됩니다.',
        ],
      },
      {
        heading: '생성 메타데이터를 삭제해야 하는 이유',
        paragraphs: [
          '상업용 프로젝트나 포트폴리오 공개 시 독점 프롬프트와 정교한 노드 설계는 보호받아야 할 창작 자산입니다.',
          '또한 텍스트 청크에 PC 내부 사용자 경로가 노출될 수 있으며, 불필요한 메타데이터로 인해 파일 용량이 늘어납니다.',
        ],
      },
      {
        heading: 'AI Label Remover로 즉시 검사하고 정리하기',
        paragraphs: [
          '[PNG 메타데이터 제거](png-metadata-remover) 도구에 이미지를 올리면 긍정/부정 프롬프트와 모델 정보를 사전에 확인한 뒤 안전하게 삭제할 수 있습니다.',
          '이미지 렌더링에 필수적인 IHDR, IDAT, PLTE 청크 및 iCCP 색상 프로필은 엄격하게 보존됩니다.',
        ],
      },
      {
        heading: '정리 완료 후 상태',
        paragraphs: [
          '정리된 PNG 파일은 시각적으로 100% 동일하며, ComfyUI에 드래그해도 워크플로가 복원되지 않는 순수 이미지 상태로 유지됩니다.',
        ],
      },
    ],
    faqHeading: 'Stable Diffusion 메타데이터 FAQ',
    faq: [
      { q: 'ComfyUI 자체 설정에서 메타데이터 저장을 끌 수 있나요?', a: '네, 노드 설정에서 Save Image 노드 옵션을 변경하거나 메타데이터 제외 저장 노드를 사용할 수 있습니다.' },
      { q: '정리된 PNG 파일에서 노드 구성을 다시 되살릴 수 있나요?', a: '아니오. 텍스트 청크가 완전히 삭제되었으므로 파일에서 워크플로를 복원할 수 없습니다.' },
      { q: '정리 후 PNG 이미지의 투명도나 색감이 유지되나요?', a: '네, 픽셀 값과 알파 채널, 색상 프로필이 완벽하게 유지됩니다.' },
      { q: 'JPEG나 WebP로 변환하는 것과 어떤 차이가 있나요?', a: '포맷 변환 시 재압축으로 인해 화질 손실이 생기지만, AI Label Remover는 무손실 PNG 포맷을 그대로 유지합니다.' },
    ],
  },

  'hide-midjourney-dalle-prompts': {
    metaTitle: 'Midjourney 및 DALL·E 생성 이미지에서 프롬프트 제거하기',
    related: ['remove-stable-diffusion-comfyui-metadata', 'made-with-ai-label', 'what-is-c2pa-content-credentials'],
    description:
      'Midjourney, DALL·E 3, Firefly 다운로드 이미지에는 프롬프트, 작업 ID, 출처 정보가 포함됩니다. 공유 전 메타데이터를 점검하고 안전하게 제거하세요.',
    updated: '2026-10-23',
    sections: [
      {
        heading: '클라우드 생성기가 이미지에 기록하는 데이터',
        paragraphs: [
          'Midjourney, OpenAI DALL·E 3, Adobe Firefly와 같은 클라우드 서비스는 표준 규격에 따라 입력 프롬프트 텍스트, Job ID, 사용자 계정 흔적 및 [C2PA](what-is-c2pa-content-credentials) 디지털 서명을 파일에 기록합니다.',
          '이 정보는 XMP 블록, EXIF 헤더 또는 PNG/JFIF 텍스트 필드에 평문으로 저장되어 누구나 메타데이터 뷰어로 열람할 수 있습니다.',
        ],
      },
      {
        heading: '창작 자산으로서의 프롬프트 보호',
        paragraphs: [
          '원하는 화풍과 퀄리티를 얻기 위해 완성한 프롬프트는 창작자의 소중한 노하우입니다. 원본 파일을 그대로 웹에 배포하면 경쟁자나 웹 크롤러가 쉽게 프롬프트를 복제할 수 있습니다.',
        ],
      },
      {
        heading: '미리보기 검사 및 안전한 정리',
        paragraphs: [
          'AI Label Remover를 이용하면 파일 헤더에 숨겨진 프롬프트를 즉시 미리보고, 클릭 한 번으로 흔적을 제거할 수 있습니다. 이미지의 세밀한 텍스처와 색채는 완벽하게 보호됩니다.',
        ],
      },
      {
        heading: '기술적 한계 이해하기',
        paragraphs: [
          '메타데이터 정리는 파일 컨테이너의 헤더 정보를 지우는 작업입니다. 구글 SynthID처럼 픽셀 패턴 자체에 내장된 비가시적 워터마크는 메타데이터 제거 도구로 지울 수 없습니다.',
        ],
      },
    ],
    faqHeading: 'Midjourney & DALL·E 프롬프트 FAQ',
    faq: [
      { q: '온라인에 올린 이미지에서 누구나 프롬프트를 읽을 수 있나요?', a: '플랫폼이 이미지를 재압축하지 않고 원본 그대로 제공하는 경우, 다운로드한 사람은 메타데이터에서 프롬프트를 확인할 수 있습니다.' },
      { q: 'Midjourney 모든 버전이 프롬프트를 저장하나요?', a: '네, Discord나 웹 갤러리에서 직접 다운로드한 파일 대부분에 생성 파라미터가 포함되어 있습니다.' },
      { q: '정리 작업이 색상이나 화질에 영향을 주나요?', a: '아니오, ICC 프로필과 원본 RGB 데이터가 100% 온전하게 보존됩니다.' },
      { q: '여러 장의 생성 이미지를 한 번에 처리할 수 있나요?', a: '[일괄 메타데이터 제거](batch-remove-metadata) 기능을 통해 최대 50장을 동시에 정리할 수 있습니다.' },
    ],
  },

  'what-is-c2pa-content-credentials': {
    metaTitle: 'C2PA란? 콘텐츠 자격 증명(Content Credentials) 쉽게 이해하기',
    related: ['made-with-ai-label', 'hide-midjourney-dalle-prompts', 'remove-stable-diffusion-comfyui-metadata'],
    description:
      'C2PA 콘텐츠 자격 증명에 대한 완벽 가이드: 서명된 매니페스트가 기록하는 정보, JPEG/PNG/HEIC 내 저장 위치, 안전한 제거 방법.',
    updated: '2026-10-23',
    sections: [
      {
        heading: '한눈에 살펴보는 C2PA 요약',
        paragraphs: [
          'C2PA(Coalition for Content Provenance and Authenticity)는 Adobe, Microsoft, Google, Intel, Sony 등이 주도하는 오픈 기술 표준입니다. 디지털 이미지에 암호학적으로 서명된 디지털 신분증인 “Content Credentials”를 부여합니다.',
          '이를 통해 최초 촬영 기기, 편집에 사용된 프로그램, AI 생성 모델의 개입 여부 및 수정 이력을 누구나 투명하게 검증할 수 있습니다.',
        ],
      },
      {
        heading: 'C2PA 매니페스트 내부 구성 요소',
        paragraphs: [
          '매니페스트에는 카메라 정보, 편집 단계별 썸네일, 편집 도구 및 공개키 기반 디지털 서명이 체인 형태로 기록됩니다.',
          'AI 도구가 사용된 경우 해당 내역이 명시되어 소셜 미디어가 자동으로 AI 배지를 표시하는 기준이 됩니다.',
        ],
      },
      {
        heading: '이미지 포맷별 저장 위치',
        paragraphs: [
          'JPEG 파일에서는 APP11 마커 세그먼트(JUMBF 박스), PNG 파일에서는 caBX 청크, HEIC 및 AVIF 파일에서는 uuid 박스 내부에 저장됩니다.',
          '[C2PA 제거](remove-c2pa-content-credentials) 도구는 이러한 전용 바이너리 섹션만을 타겟팅하여 안전하게 분리합니다.',
        ],
      },
      {
        heading: '사용자들이 C2PA를 삭제하는 이유',
        paragraphs: [
          '실제 사진에 부당하게 붙는 AI 라벨을 예방하는 것 외에도, 작업자 계정 및 장비 정보 노출을 막고 수십~수백 KB에 달하는 매니페스트 데이터를 덜어내어 파일 용량을 최적화할 수 있습니다.',
        ],
      },
      {
        heading: '유지할 것인가, 삭제할 것인가',
        paragraphs: [
          '보도 사진이나 진위 증명이 필수적인 저널리즘에서는 C2PA 유지가 권장됩니다. 반면 개인정보 보호와 자산 보안이 우선인 상업 디자이너와 일반 창작자에게는 메타데이터 제거가 효과적인 선택입니다.',
        ],
      },
    ],
    faqHeading: 'C2PA 및 콘텐츠 자격 증명 FAQ',
    faq: [
      { q: 'C2PA는 눈에 안 보이는 워터마크인가요?', a: '아니오, C2PA는 파일 헤더에 저장되는 암호화 메타데이터 레코드이며 픽셀 데이터를 변형하지 않습니다.' },
      { q: '현재 어떤 소프트웨어가 C2PA를 삽입하나요?', a: 'Adobe Photoshop, Lightroom, DALL·E 3, 라이카/니콘 최신 카메라 및 다양한 클라우드 AI 서비스가 지원합니다.' },
      { q: '삭제 전 서명 상태를 어떻게 검증하나요?', a: 'verify.contentcredentials.org 공식 웹사이트나 AI Label Remover 미리보기 탭에서 확인할 수 있습니다.' },
      { q: 'C2PA를 지우면 이미지 해상도가 줄어드나요?', a: '아니오, 이미지 데이터와 독립된 JUMBF 블록만 삭제되므로 해상도는 유지됩니다.' },
    ],
  },

  'remove-gps-location-from-photos': {
    metaTitle: '아이폰, 갤럭시, PC 사진에서 GPS 위치 정보 제거하기',
    related: ['batch-remove-metadata', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    description:
      '사진을 공유하기 전 GPS 위치 좌표를 제거하세요. 위치, 기기 정보, 촬영 일시를 노출하는 EXIF 필드와 무손실 정리 방법 안내.',
    updated: '2026-10-23',
    sections: [
      {
        heading: '스마트폰 카메라가 사진마다 찍어두는 정보',
        paragraphs: [
          '최신 스마트폰(아이폰 및 안드로이드) 카메라는 사진을 찍을 때마다 위도, 경도, 고도 및 나침반 방향을 EXIF 메타데이터에 자동으로 기록합니다.',
          '원본 파일이 그대로 유출될 경우 집 주소, 직장 위치, 자녀의 학교 등 사적인 생활 동선이 정확하게 노출될 수 있습니다.',
        ],
      },
      {
        heading: '원본 파일이 유출되는 주요 경로',
        paragraphs: [
          'SNS 일반 업로드 시 메타데이터가 삭제되더라도, 메신저 파일 전송(원본 화질), AirDrop, 이메일 첨부, 구글 드라이브 공유 또는 중고 거래 사이트 등록 시에는 GPS 정보가 고스란히 전달됩니다.',
        ],
      },
      {
        heading: '정리 전 GPS 정보 확인하기',
        paragraphs: [
          'AI Label Remover에 사진을 올리면 GPS 태그 유무와 정확한 좌표, 촬영 기기 모델명을 한눈에 확인할 수 있습니다.',
        ],
      },
      {
        heading: '재압축 없는 안전한 위치 데이터 삭제',
        paragraphs: [
          '[EXIF 데이터 제거](remove-exif-data) 도구는 이미지 픽셀을 다시 압축하지 않고 위치 및 기기 식별 태그만 깔끔하게 제거하여 원본 선명도를 100% 보존합니다.',
        ],
      },
      {
        heading: '스마트폰 설정에서 위치 기록 끄기',
        paragraphs: [
          '아이폰: 설정 > 개인정보 보호 및 보안 > 위치 서비스 > 카메라 > “안 함”. 안드로이드: 카메라 앱 설정 > “위치 태그” 비활성화.',
        ],
      },
      {
        heading: '스마트폰 GPS 좌표의 정밀도',
        paragraphs: [
          '위성 GPS와 Wi-Fi 삼각측량이 결합되어 반경 3~5미터 이내의 정확한 건물 위치까지 특정될 수 있습니다.',
        ],
      },
      {
        heading: '실제 발생할 수 있는 보안 위협',
        paragraphs: [
          '집안에서 찍은 반려동물 사진이나 중고 물품 사진을 통해 거주지가 노출되는 스토킹 및 범죄 피해를 사전에 예방해야 합니다.',
        ],
      },
      {
        heading: 'GPS 외에 주의해야 할 메타데이터',
        paragraphs: [
          '기기 일련번호, 정확한 초 단위 촬영 일시, 주변 Wi-Fi 네트워크 식별자 역시 프라이버시 위험 요소입니다.',
        ],
      },
      {
        heading: '공유 전 간편한 점검 습관',
        paragraphs: [
          '인터넷에 원본 이미지를 올리기 전 브라우저에서 가볍게 점검하고 정리하는 습관이 중요합니다.',
        ],
      },
    ],
    faqHeading: '사진 GPS 관련 자주 묻는 질문',
    faq: [
      { q: '정리 후 삭제된 위치 정보를 다시 복구할 수 있나요?', a: '아니오, EXIF 블록에서 완전히 제거되었으므로 복구가 불가능합니다.' },
      { q: '소셜 미디어가 알아서 GPS를 지워주지 않나요?', a: '일반 피드는 지워주지만, 원본 파일 전송, 클라우드 링크, 중고장터 등에서는 유지되는 경우가 많습니다.' },
      { q: '아이폰 HEIC 사진도 포맷 변환 없이 처리되나요?', a: '[HEIC 메타데이터 제거](heic-metadata-remover) 기능을 통해 원본 HEIC 포맷 그대로 위치만 제거합니다.' },
      { q: '사진 회전 방향이 뒤집히지 않나요?', a: '올바른 뷰어 표시를 위해 필요한 Orientation 태그는 안전하게 보존됩니다.' },
    ],
  },

  'batch-remove-metadata': {
    metaTitle: '사진 메타데이터 일괄 제거 – 무료, 서버 업로드 없음',
    related: ['remove-gps-location-from-photos', 'remove-stable-diffusion-comfyui-metadata', 'hide-midjourney-dalle-prompts'],
    description:
      '브라우저에서 최대 50장의 이미지를 동시에 일괄 정리하세요. 멀티스레드 병렬 처리로 빠르고 안전하게, 단일 ZIP 파일로 간편하게 다운로드.',
    updated: '2026-10-23',
    sections: [
      {
        heading: '대량의 이미지를 한 번에 처리하기',
        paragraphs: [
          '쇼핑몰 상품 사진, 대규모 포트폴리오, 여행 사진 앨범을 파일마다 하나씩 처리하는 것은 비효율적입니다. AI Label Remover는 최대 50장의 사진을 한 번에 드래그하여 일괄 정리할 수 있습니다.',
          '기기의 멀티코어 CPU를 활용하는 독립적인 Web Worker가 각 파일을 병렬로 처리합니다.',
        ],
      },
      {
        heading: '네트워크 병목 없는 로컬 고속 처리',
        paragraphs: [
          '사진이 원격 클라우드 서버로 전송되지 않고 브라우저 내부 메모리에서 직접 처리되므로, 기기 성능에 맞춰 수십 메가바이트의 용량도 몇 초 만에 처리됩니다.',
        ],
      },
      {
        heading: '결과물 자동 재검증 시스템',
        paragraphs: [
          '정리가 완료된 직후 시스템이 각 파일의 바이너리 헤더를 다시 읽어 EXIF, GPS, C2PA, 프롬프트가 완벽히 사라졌는지 검증한 후 다운로드를 제공합니다.',
        ],
      },
      {
        heading: '원본 파일명 유지 및 ZIP 다운로드',
        paragraphs: [
          '정리된 사진들은 원본 파일명을 그대로 유지하며, 개별 다운로드하거나 클릭 한 번으로 압축된 단일 ZIP 파일로 받을 수 있습니다.',
        ],
      },
      {
        heading: '완벽한 오프라인 보안성',
        paragraphs: [
          '업로드 과정이 전혀 없으므로 네트워크가 끊긴 오프라인 비행기 모드에서도 웹페이지가 정상 동작합니다.',
        ],
      },
    ],
    faqHeading: '일괄 메타데이터 제거 FAQ',
    faq: [
      { q: '서로 다른 포맷의 사진을 한 번에 섞어서 올려도 되나요?', a: '네, JPEG, PNG, WebP, HEIC, AVIF 파일을 동시에 업로드할 수 있습니다.' },
      { q: '한 번에 50장으로 제한된 이유는 무엇인가요?', a: '모바일 기기와 브라우저의 메모리 과부하를 방지하고 안정적인 처리를 보장하기 위함입니다.' },
      { q: 'ZIP으로 다운로드할 때 파일 이름이 변경되나요?', a: '아니오, 업로드했던 파일 이름이 그대로 유지됩니다.' },
      { q: '인터넷 연결이 없어도 작업할 수 있나요?', a: '네, 페이지 로드 후에는 로컬 브라우저 엔진에서 100% 독립 실행됩니다.' },
    ],
  },

  'image-metadata-viewer-online': {
    title: '온라인 이미지 메타데이터 뷰어: EXIF, GPS, XMP, IPTC, C2PA 한눈에 보기',
    metaTitle: '사진 메타데이터 확인 온라인: EXIF, GPS, AI 정보 보기',
    summary: [
      '사진을 공유하거나 내려받은 이미지를 믿기 전에, 좋은 메타데이터 뷰어는 스마트폰이나 파일 탐색기가 보여 주는 몇 가지 항목이 아니라 파일이 스스로에 대해 기록한 모든 정보를 보여 줍니다.',
      '이 가이드에서는 완전한 메타데이터 확인에 무엇이 포함되는지, 기본 뷰어가 놓치는 부분, 많은 온라인 EXIF 뷰어가 그 자체로 개인정보 위험인 이유, 그리고 중요한 필드를 읽는 방법을 설명합니다.',
    ],
    description: '무료 온라인 메타데이터 뷰어: 업로드 없이 브라우저에서 사진의 EXIF, GPS, XMP, IPTC, C2PA, AI 프롬프트를 모두 확인하세요.',
    updated: '2026-11-09',
    related: ['how-to-check-if-image-is-ai-generated', 'remove-gps-location-from-photos', 'what-is-c2pa-content-credentials'],
    sections: [
      {
        heading: '완전한 메타데이터 확인에 포함되는 항목',
        paragraphs: ['제대로 된 메타데이터 뷰어는 EXIF뿐 아니라 파일 안의 모든 블록을 읽습니다.'],
        bullets: [
          'EXIF — 카메라나 스마트폰 제조사와 모델, 노출, 촬영 시각, 렌즈, 방향.',
          'GPS — 위치 서비스가 켜져 있었다면 위도, 경도, 고도, 촬영 방향. [사진에서 GPS 위치 정보를 지우는 방법](remove-gps-location-from-photos)도 참고하세요.',
          'XMP — 편집 소프트웨어, 편집 기록, 설명, 별점, AI 관련 필드.',
          'IPTC — 캡션, 키워드, 제작자, 저작권, DigitalSourceType(이미지가 만들어진 방식).',
          'C2PA — [콘텐츠 자격 증명(Content Credentials)](what-is-c2pa-content-credentials): 누가 파일에 서명했는지, 어떤 작업이 기록됐는지, AI가 사용됐는지.',
          'PNG 텍스트 청크 — [Stable Diffusion 파라미터와 ComfyUI 워크플로](remove-stable-diffusion-comfyui-metadata) 등 내장된 텍스트.',
          'ICC 프로필과 썸네일 — 색상 정보와 숨겨진 미리보기 이미지.',
        ],
      },
      {
        heading: '기본 뷰어의 사각지대',
        paragraphs: [
          'Windows는 속성 › 자세히 탭에서, macOS는 미리보기 앱의 속성 보기나 Finder의 정보 가져오기에서, iPhone은 사진을 위로 쓸어 올리면, Google 포토는 정보 패널에서 메타데이터를 보여 줍니다. 날짜, 기기, 위치를 빠르게 확인하기에는 충분하지만 EXIF의 일부만 보여 주고 XMP, IPTC, C2PA, PNG 텍스트는 대부분 아예 표시하지 않습니다. 파일 탐색기에서는 깨끗해 보이는 파일에도 AI 프롬프트 전체가 남아 있을 수 있습니다.',
        ],
      },
      {
        heading: '온라인 EXIF 뷰어의 개인정보 함정',
        paragraphs: [
          '“온라인 EXIF 뷰어”라는 사이트 상당수는 이미지를 자기 서버에 업로드해 그곳에서 읽은 뒤 결과를 돌려줍니다. 개인정보를 확인하려는 목적이라면 앞뒤가 바뀐 셈입니다. 걱정하던 바로 그 사진이 GPS 위치와 함께 제3자에게 복사되기 때문입니다. 파일을 기기 안에서 읽는 뷰어를 고르세요. 간단한 테스트 방법은 페이지를 연 뒤 인터넷 연결을 끊고 도구가 계속 작동하는지 확인하는 것입니다.',
        ],
      },
      {
        heading: 'AI Label Remover로 파일 확인하기',
        paragraphs: ['이 페이지 맨 위 영역에 이미지를 끌어다 놓으세요. 결과는 세 개의 탭으로 정리됩니다.'],
        bullets: [
          '“드러나는 정보” — 장소, 인물, 시간, 기기를 쉽게 요약하고 GPS를 십진수 좌표로 변환해 보여 줍니다.',
          '“AI 흔적” — C2PA 매니페스트, IPTC 출처 유형, 생성기 이름과 프롬프트를 판정 결과와 함께 보여 줍니다.',
          '“원본 메타데이터” — EXIF IFD0, Exif, GPS, XMP 네임스페이스, IPTC, C2PA, PNG 텍스트 청크 등 출처별로 모든 필드를 묶어 보여 줍니다.',
        ],
      },
      {
        heading: '가장 먼저 확인할 필드',
        paragraphs: [],
        bullets: [
          'GPSLatitude / GPSLongitude — 정확한 촬영 장소입니다. 좌표를 지도에 붙여 넣어 무엇이 드러나는지 확인하세요.',
          'DateTimeOriginal과 ModifyDate — 사진을 찍은 시각과 마지막으로 저장한 시각.',
          'Make, Model, BodySerialNumber, LensSerialNumber — 여러 사진을 한 대의 기기와 연결할 수 있습니다.',
          'Artist, Copyright, OwnerName — 들어 있는 줄 몰랐던 이름이 남아 있을 수 있습니다.',
          'Software와 CreatorTool — AI 도구를 포함해 어떤 앱이 파일을 처리했는지.',
          'DigitalSourceType과 C2PA claim generator — 이미지가 스스로 밝히는 제작 방식. 자세한 내용은 [AI가 만든 이미지인지 확인하는 방법](how-to-check-if-image-is-ai-generated)을 참고하세요.',
        ],
      },
      {
        heading: '뷰어에 거의 아무것도 표시되지 않을 때',
        paragraphs: [
          'SNS에서 저장한 이미지, 스크린샷, 메신저로 보낸 사진은 대개 다시 압축되면서 메타데이터가 지워집니다. 이런 경우 정보가 거의 없거나 전혀 없는 것은 정상이며, 사진이 실제인지, 편집됐는지, AI로 생성됐는지에 대해서는 아무것도 알려 주지 않습니다. 출처가 중요하다면 원본 파일을 요청하세요.',
        ],
      },
      {
        heading: '보는 것과 검증하는 것은 다릅니다',
        paragraphs: [
          '일반 메타데이터는 누구나 수정할 수 있는 단순한 텍스트이므로 증거가 아니라 단서로 다루세요. C2PA는 디지털 서명이 있다는 점에서 다르지만, 뷰어가 매니페스트를 보여 준다고 서명이 검증된 것은 아닙니다. 검증에는 공식 콘텐츠 자격 증명 검증 도구를 사용하세요. 확인을 마치고 데이터를 지우고 싶다면 “모든 메타데이터 제거”를 누르세요. 이미지는 그대로 두고 메타데이터만 제거합니다. [EXIF 데이터 삭제](remove-exif-data) 페이지에서 무엇이 지워지는지 자세히 설명합니다.',
        ],
      },
    ],
    faqHeading: '메타데이터 확인에 관한 질문',
    faq: [
      {
        q: '사진을 업로드하지 않는 무료 메타데이터 뷰어가 있나요?',
        a: '네. AI Label Remover는 업로드나 계정 없이 브라우저 안에서 파일을 읽으며, 페이지가 로드된 뒤에는 오프라인에서도 작동합니다.',
      },
      {
        q: 'AI 이미지의 프롬프트를 볼 수 있나요?',
        a: '생성기가 저장했다면 볼 수 있습니다. Stable Diffusion과 ComfyUI 프롬프트는 PNG 텍스트 청크에 있고, 일부 서비스는 XMP나 EXIF 필드에 기록합니다.',
      },
      {
        q: 'Windows에서 PNG 파일의 메타데이터가 보이지 않는 이유는 무엇인가요?',
        a: '파일 탐색기는 PNG에 대해 몇 가지 속성만 보여 줍니다. 텍스트 청크, XMP, C2PA는 그곳에서 보이지 않지만 전체 뷰어에서는 표시됩니다.',
      },
      {
        q: '메타데이터로 사진이 가짜인지 증명할 수 있나요?',
        a: '메타데이터는 단서를 줄 뿐 확정적인 증거는 아닙니다. 서명된 C2PA 데이터만 신뢰성 있게 검증할 수 있고, 일반 필드는 쉽게 수정하거나 삭제할 수 있습니다.',
      },
    ],
  },

  'how-to-check-if-image-is-ai-generated': {
    title: '이 이미지는 AI가 만들었을까? 파일 자체로 확인하는 방법',
    metaTitle: 'AI 생성 이미지 판별 방법: 무료로 확인하기',
    summary: [
      '이미지가 AI로 생성됐는지 알려 주는 가장 빠르고 믿을 만한 단서는 파일 안에 있습니다. C2PA 콘텐츠 자격 증명, IPTC DigitalSourceType 필드, 생성기가 남긴 텍스트에는 이미지를 만든 도구 이름이 그대로 적혀 있는 경우가 많습니다.',
      '무엇을 찾아야 하는지, 브라우저에서 작동하는 무료 도구로 어떻게 읽는지, 그리고 아무것도 나오지 않았다고 해서 진짜 사진이라고 단정할 수 없는 이유를 알아봅니다.',
    ],
    description: '브라우저에서 C2PA, IPTC DigitalSourceType, 생성기 메타데이터를 읽어 AI 생성 이미지인지 확인하고 각 신호가 증명하는 범위를 알아보세요.',
    updated: '2026-11-09',
    related: ['image-metadata-viewer-online', 'what-is-c2pa-content-credentials', 'made-with-ai-label'],
    sections: [
      {
        heading: '먼저 원본 파일을 확보하세요',
        paragraphs: [
          '메타데이터는 카메라나 생성기에서 나온 그대로의 파일에만 남아 있습니다. 스크린샷, 다시 저장한 사본, SNS에서 가져온 이미지는 대부분 재인코딩되면서 정보 대부분을 잃습니다. 가능하면 압축된 사진이 아니라 “파일로” 보낸 원본 내보내기 파일을 요청하세요.',
        ],
      },
      {
        heading: '단서 1: 콘텐츠 자격 증명(C2PA)',
        paragraphs: [
          'C2PA를 지원하는 도구는 [디지털 서명된 출처 기록](what-is-c2pa-content-credentials)을 첨부합니다. 이 기록의 claim generator에는 이미지를 만든 앱이나 서비스 이름이, c2pa.actions에는 “created”, “edited” 같은 단계가 담기며, digitalSourceType으로 AI 생성임을 직접 밝힐 수도 있습니다.',
          '기록에 서명이 있으므로 검증 도구는 서명 이후 이미지가 바뀌었는지도 알 수 있습니다. AI 서비스가 남긴 매니페스트는 메타데이터가 제공할 수 있는 가장 강력한 증거입니다.',
        ],
      },
      {
        heading: '단서 2: IPTC DigitalSourceType',
        paragraphs: ['많은 생성기와 편집기가 콘텐츠의 제작 방식을 설명하는 표준 IPTC 필드를 채웁니다. 자주 보게 되는 값은 다음과 같습니다.'],
        bullets: [
          'trainedAlgorithmicMedia — 생성형 AI 모델이 만든 이미지.',
          'compositeWithTrainedAlgorithmicMedia — Photoshop의 생성형 채우기처럼 일부 영역을 AI로 생성하거나 바꾼 실제 사진.',
          'algorithmicMedia — 절차적 아트처럼 학습 데이터 없이 알고리즘으로 만든 이미지.',
          'digitalCapture — 카메라로 촬영했으며 생성형 콘텐츠가 선언되지 않은 이미지.',
        ],
      },
      {
        heading: '단서 3: 프롬프트와 도구 이름',
        paragraphs: [
          '[Stable Diffusion 프런트엔드와 ComfyUI](remove-stable-diffusion-comfyui-metadata)는 프롬프트, 시드, 모델, 워크플로를 PNG 파일에 텍스트로 저장합니다. 다른 도구는 XMP CreatorTool이나 EXIF Software에 이름을 남깁니다. 이런 흔적은 모두 AI가 사용됐다는 분명한 표시이며, 이미지를 어떻게 만들었는지까지 알려 주는 경우가 많습니다. 그래서 [Midjourney와 DALL·E 프롬프트를 숨기는 방법](hide-midjourney-dalle-prompts)도 알아 두면 좋습니다.',
        ],
      },
      {
        heading: 'AI 생성 이미지인지 확인하는 방법',
        paragraphs: [
          '이 페이지 맨 위 영역에 파일을 끌어다 놓으세요. “AI 흔적” 탭은 “AI 흔적 발견”, “한 번 더 볼 만함”, “AI 흔적 없음” 중 하나로 판정하고 각 신호를 출처와 함께 나열합니다. “원본 메타데이터” 탭에서는 실제 값을 볼 수 있습니다. 파일은 어디에도 업로드되지 않습니다. 찾은 정보를 지우려면 [AI Tag Cleaner](ai-tag-cleaner)를 사용하세요.',
        ],
      },
      {
        heading: '파일에 메타데이터가 없다면',
        paragraphs: [
          '메타데이터가 없다는 사실은 어느 쪽도 증명하지 못합니다. 편집기, 메신저, SNS가 수시로 지우기 때문이며, 카메라 EXIF가 없는 것도 기껏해야 약한 힌트일 뿐입니다. 다음 단계로는 서비스 제공업체의 워터마크 확인 도구(예: Gemini용 Google SynthID), 가장 오래된 사본을 찾는 역방향 이미지 검색, 이미지가 처음 게시된 곳 확인이 있습니다. 픽셀을 분석하는 AI 탐지기는 증거가 아니라 확률을 제시합니다.',
        ],
      },
    ],
    faqHeading: 'AI 이미지 판별에 관한 질문',
    faq: [
      {
        q: 'ChatGPT나 Gemini로 만든 이미지인지 알 수 있나요?',
        a: '파일에 콘텐츠 자격 증명이 남아 있다면 claim generator에 서비스 이름이 표시됩니다. Gemini 이미지는 Google SynthID 검사로 픽셀 속 워터마크도 감지할 수 있습니다.',
      },
      {
        q: 'AI Label Remover에서 AI 흔적이 없다고 나오면 진짜 사진인가요?',
        a: '꼭 그렇지는 않습니다. 파일에 AI 메타데이터가 없다는 뜻일 뿐입니다. 메타데이터는 쉽게 사라지거나 지워지므로 깨끗한 결과는 증거가 아니라 “알 수 없음”으로 받아들이세요.',
      },
      {
        q: 'Instagram이나 Facebook에서 저장한 이미지도 확인할 수 있나요?',
        a: '가능하지만 플랫폼은 게시된 사본의 메타데이터를 대개 지우므로 정보가 거의 없을 수 있습니다. 플랫폼의 “AI 정보” 라벨은 별개의 신호입니다. [실제 사진에 이 라벨이 붙는 이유](made-with-ai-label)를 읽어 보세요.',
      },
      {
        q: '확인은 무료이며 개인정보가 보호되나요?',
        a: '네. 무료이고 계정이 필요 없으며, 파일은 업로드되지 않고 기기 안에서만 읽힙니다.',
      },
    ],
  },
};

export default ko;
