/*
  이 파일만 수정하면 기사 내용이 바뀝니다.
  숫자는 임의 예시입니다. 실제 보도 시 확인된 자료로 교체하세요.
*/
window.STORY_DATA = {
  theme: {
    accent: "#d93b2b",
    background: "#f5f3ee"
  },
  hero: {
    eyebrow: "충청투데이 심층기획 · 2026",
    title: "도시의 변화를\n데이터로 읽다",
    deck: "기사와 사진, 수치만 교체해 사용하는\n반응형 인터랙티브 뉴스 템플릿",
    meta: "취재·글 홍길동 기자 · 사진 충청투데이",
    image: "assets/hero.svg"
  },
  metrics: [
    { value: 149, suffix: "명", label: "설문 응답자" },
    { value: 61.7, suffix: "%", label: "참여 경험 비율", decimals: 1 },
    { value: 34.9, suffix: "%", label: "대표 항목 1위", decimals: 1 },
    { value: 38.9, suffix: "%", label: "최우선 개선 요구", decimals: 1 }
  ],
  sections: [
    {
      id: "profile",
      nav: "응답자",
      number: "01",
      title: "첫 번째 핵심 질문을\n독자에게 제시한다",
      lead: "섹션 도입부에는 조사 개요와 핵심 맥락을 3~5문장으로 배치한다. 길게 설명하기보다 뒤에 나올 시각자료를 이해하는 데 필요한 내용만 남긴다.",
      type: "bars",
      body: [
        "이 템플릿은 기사 본문, 막대그래프, 순위, 카드, 대형 사진 구간을 조합할 수 있도록 만들었다.",
        "content.js의 문구와 수치만 교체하면 HTML 구조를 직접 건드리지 않고도 다른 기획 기사에 재사용할 수 있다."
      ],
      chartTitle: "연령 분포 예시",
      chart: [
        { label: "20대", value: 22.8 },
        { label: "30대", value: 20.8 },
        { label: "50대", value: 19.5 },
        { label: "40대", value: 16.8 },
        { label: "60대 이상", value: 14.1 }
      ],
      note: "※ 예시 수치. 실제 기사에서는 출처와 조사 기준을 명시해야 한다."
    },
    {
      id: "ranking",
      nav: "순위",
      number: "02",
      title: "가장 주목받은 항목은\n무엇이었나",
      lead: "복수 응답이나 순위형 데이터를 보여주는 구간이다. 순위와 수치를 동시에 제시하고, 본문에서는 1위와 2위의 격차나 의미를 해설한다.",
      type: "ranking",
      body: [
        "순위는 자동으로 번호가 붙는다. percentage에는 화면에 표시할 문자열을 그대로 입력하면 된다.",
        "보도자료 수치를 옮길 때는 모집단, 응답자 수, 복수 응답 여부를 반드시 함께 표기한다."
      ],
      ranking: [
        { label: "첫 번째 항목", percentage: "77.2%", detail: "71명" },
        { label: "두 번째 항목", percentage: "50.0%", detail: "46명" },
        { label: "세 번째 항목", percentage: "38.0%", detail: "35명" },
        { label: "네 번째 항목", percentage: "34.8%", detail: "32명" }
      ],
      quote: {
        text: "숫자는 결론이 아니라 취재를 시작하게 하는 단서다.",
        source: "전문가 또는 취재원 인용"
      }
    },
    {
      id: "photo",
      nav: "현장",
      type: "photo",
      image: "assets/scene.svg",
      title: "현장의 규모와 분위기를\n대형 사진으로 전환",
      text: "사진 설명이나 핵심 취재 내용을 짧게 배치한다. 모바일에서는 배경 고정 효과를 해제해 성능 저하를 줄인다."
    },
    {
      id: "issues",
      nav: "쟁점",
      number: "03",
      title: "쟁점은 세 갈래로\n구조화한다",
      lead: "복잡한 내용을 카드형으로 정리하는 구간이다. 각 카드에는 하나의 주장 또는 과제만 담는 편이 읽기 쉽다.",
      type: "cards",
      cards: [
        { tag: "쟁점 1", title: "지역 정체성", text: "도시에서만 가능한 고유한 콘텐츠가 무엇인지 설명한다." },
        { tag: "쟁점 2", title: "차별화", text: "다른 지역 사업과 구별되는 지점과 한계를 함께 제시한다." },
        { tag: "쟁점 3", title: "지속 가능성", text: "정책과 예산, 운영 주체가 바뀌어도 이어질 수 있는지 짚는다." }
      ]
    },
    {
      id: "solutions",
      nav: "제언",
      number: "04",
      title: "마지막에는 해법과\n향후 과제를 제시한다",
      lead: "기사 결론을 반복하기보다 취재 결과를 토대로 가능한 선택지와 남은 과제를 정리한다.",
      type: "ranking",
      ranking: [
        { label: "고유 자산을 콘텐츠 핵심으로 설정", percentage: "01", detail: "정체성" },
        { label: "시민·전문가 참여 구조 구축", percentage: "02", detail: "거버넌스" },
        { label: "사업별 역할과 브랜드 체계화", percentage: "03", detail: "전략" },
        { label: "교통·편의·안전 인프라 개선", percentage: "04", detail: "기반" }
      ]
    }
  ],
  closing: {
    eyebrow: "INTERACTIVE NEWS",
    title: "데이터와 현장을\n하나의 이야기로",
    text: "기사 원문 링크, 관련 기사, 취재 후기 등을 배치할 수 있다.",
    links: [
      { label: "기사 원문 보기", url: "#" },
      { label: "충청투데이 홈페이지", url: "https://www.cctoday.co.kr" }
    ]
  },
  footer: "충청투데이 인터랙티브 뉴스 템플릿 · 수치와 문구는 예시"
};
