/*
  기사별로 주로 수정하는 파일입니다.
  예시 문구와 수치는 구조 확인용입니다. 실제 기사 데이터로 반드시 교체하십시오.
*/
window.STORY = {
  meta: {
    title: "도시의 여름, 축제로 물들다",
    description: "사진과 데이터로 살펴본 지역축제의 변화",
    image: "assets/hero.svg",
    brand: "CHUNGCHEONG INTERACTIVE"
  },
  hero: {
    kicker: "INTERACTIVE REPORT",
    title: "도시의 여름, 축제로 물들다",
    deck: "거리와 광장, 골목을 채운 사람들. 지역축제가 도시의 표정을 어떻게 바꾸는지 현장과 데이터로 살펴봤다.",
    byline: "취재·제작 홍길동 기자 | 2026. 7. 23.",
    image: "assets/hero.svg"
  },
  intro: {
    lead: "축제는 단순한 행사가 아니다. 도시의 공간과 사람, 상권과 기억이 한꺼번에 움직이는 짧고 밀도 높은 시간이다.",
    body: [
      "낮에는 가족 단위 방문객이 거리를 채우고, 해가 지면 공연과 조명이 도시의 분위기를 바꾼다. 축제장 주변 상인은 평소와 다른 유동 인구를 체감하고, 방문객은 익숙한 도심을 새로운 장소처럼 경험한다.",
      "이번 인터랙티브 기사는 현장 사진과 조사 수치, 관계자 목소리를 통해 축제가 남긴 변화와 향후 과제를 차례로 보여준다."
    ]
  },
  stats: [
    { value: 120, suffix: "만명", label: "누적 방문객", note: "공식 집계 기준" },
    { value: 7, suffix: "일", label: "축제 운영 기간", note: "도심 주요 구간" },
    { value: 38, suffix: "%", label: "외지 방문 비율", note: "설문 응답 기준" },
    { value: 4.6, suffix: "점", label: "평균 만족도", note: "5점 만점" }
  ],
  sections: [
    {
      id: "scene",
      nav: "현장",
      type: "scrolly",
      label: "01 · THE SCENE",
      title: "한 걸음마다 달라지는 축제의 표정",
      description: "스크롤을 내리며 시간대별 현장 변화를 확인한다.",
      steps: [
        { title: "낮, 가족이 모이다", text: "오후 시간대에는 체험 프로그램과 먹거리 공간을 중심으로 가족 단위 방문객이 몰렸다.", image: "assets/scene-day.svg" },
        { title: "해질녘, 거리가 무대가 되다", text: "주요 공연이 시작되면서 유동 인구가 광장과 메인 무대로 빠르게 이동했다.", image: "assets/scene-evening.svg" },
        { title: "밤, 도시의 분위기가 바뀌다", text: "조명과 음악이 도심 경관을 바꾸며 축제의 체류 시간이 길어졌다.", image: "assets/scene-night.svg" }
      ]
    },
    {
      id: "meaning",
      nav: "의미",
      type: "split",
      label: "02 · WHY IT MATTERS",
      title: "행사를 넘어 도시 경험으로",
      body: [
        "지역축제의 성패는 방문객 숫자만으로 설명하기 어렵다. 시민이 일상적으로 이용하던 거리를 새로운 방식으로 경험하고, 지역 상권과 문화예술인이 함께 참여하는 구조를 만드는 일이 중요하다.",
        "현장의 체류 시간, 재방문 의향, 주변 상권 파급효과 등을 함께 살펴야 축제가 실제로 도시의 자산이 됐는지 판단할 수 있다."
      ],
      image: "assets/split.svg"
    },
    {
      id: "data",
      nav: "데이터",
      type: "bars",
      label: "03 · DATA",
      title: "방문객이 꼽은 축제의 강점",
      description: "예시 수치다. 취재 자료의 실제 값으로 교체한다.",
      unit: "%",
      max: 100,
      items: [
        { label: "공연·볼거리", value: 78 },
        { label: "접근성", value: 64 },
        { label: "먹거리", value: 57 },
        { label: "체험 프로그램", value: 46 },
        { label: "안내·편의시설", value: 39 }
      ]
    },
    {
      id: "voices",
      nav: "목소리",
      type: "cards",
      label: "04 · VOICES",
      title: "현장에서 나온 세 가지 목소리",
      description: "방문객, 상인, 기획자의 시선을 한 화면에 배치한다.",
      items: [
        { icon: "●", title: "방문객", text: "도심 한가운데서 여러 프로그램을 한 번에 즐길 수 있다는 점이 가장 편했다." },
        { icon: "▲", title: "상인", text: "유동 인구는 늘었지만 매출 효과가 업종과 위치에 따라 다르게 나타났다." },
        { icon: "■", title: "기획자", text: "단기 흥행뿐 아니라 시민 참여와 지역 콘텐츠 축적이 다음 과제다." }
      ]
    },
    {
      id: "timeline",
      nav: "흐름",
      type: "timeline",
      label: "05 · TIMELINE",
      title: "축제가 만들어지는 과정",
      description: "기획부터 사후 평가까지 주요 흐름을 정리한다.",
      items: [
        { date: "D-180", title: "기본계획 수립", text: "축제 주제와 공간, 예산, 운영 방향을 확정한다." },
        { date: "D-90", title: "프로그램·참여자 구성", text: "공연과 체험 프로그램, 지역 상권 연계를 구체화한다." },
        { date: "D-DAY", title: "현장 운영", text: "안전·교통·관람객 동선을 실시간으로 조정한다." },
        { date: "D+30", title: "성과 분석", text: "방문객 만족도와 상권 효과, 민원 등을 종합 평가한다." }
      ]
    },
    {
      id: "quote",
      nav: "장면",
      type: "fullbleed",
      image: "assets/fullbleed.svg",
      quote: "좋은 축제는 도시를 잠시 꾸미는 데 그치지 않고, 시민이 도시를 다시 보게 만든다.",
      cite: "현장 기획자 인터뷰 중"
    },
    {
      id: "gallery",
      nav: "사진",
      type: "gallery",
      label: "06 · PHOTO ESSAY",
      title: "축제가 지나간 자리",
      description: "현장 사진을 넣으면 자동으로 가로 흐름형 갤러리가 만들어진다.",
      images: ["assets/scene-day.svg", "assets/scene-evening.svg", "assets/scene-night.svg", "assets/split.svg"]
    }
  ],
  outro: {
    label: "WHAT'S NEXT",
    title: "관객 수 이후를 묻다",
    body: [
      "지역축제는 짧게 열리지만 준비와 영향은 훨씬 길다. 다음 단계는 방문객 규모를 넘어 도시 브랜드, 시민 참여, 상권 파급효과를 어떻게 축적할지에 달려 있다.",
      "인터랙티브 기사의 문장과 수치, 사진은 모두 content.js에서 교체할 수 있다."
    ],
    links: [
      { label: "관련 기사 보기", url: "#" },
      { label: "자료 원문", url: "#" }
    ]
  },
  footer: "© 2026 충청투데이. 무단 전재 및 재배포 금지."
};
