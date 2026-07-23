# 프리미엄 인터랙티브 뉴스 템플릿

뉴욕타임스형의 차분한 편집 디자인과 지역축제형의 사진·색감·현장성을 결합한 재사용형 템플릿입니다. 별도의 빌드 과정 없이 GitHub Pages에 바로 배포할 수 있습니다.

## 가장 쉬운 수정 순서

1. `content.js`를 메모장 또는 VS Code로 엽니다.
2. `hero`, `intro`, `stats`, `sections`, `outro`의 문구와 수치를 바꿉니다.
3. `assets` 폴더에 실제 사진을 넣습니다.
4. `content.js`의 이미지 경로를 바꿉니다.
5. 전체 파일을 GitHub 저장소의 최상위 경로에 업로드합니다.

## GitHub Pages 배포

1. 저장소에서 `Add file` → `Upload files`를 선택합니다.
2. ZIP 파일 자체가 아니라 압축을 푼 파일과 `assets` 폴더를 업로드합니다.
3. `Settings` → `Pages`로 이동합니다.
4. `Source`는 `Deploy from a branch`를 선택합니다.
5. `Branch`는 `main`, 폴더는 `/(root)`를 선택하고 저장합니다.
6. 수 분 뒤 `https://사용자아이디.github.io/저장소이름/` 주소가 생성됩니다.

## 제공 섹션

- `scrolly`: 스크롤에 따라 배경 사진과 설명이 전환되는 핵심 구간
- `split`: 한쪽 사진, 한쪽 본문 구성
- `bars`: 막대그래프
- `cards`: 방문객·상인·전문가 등 관점 카드
- `timeline`: 사업·행사 진행 흐름
- `fullbleed`: 대형 사진과 인용문
- `gallery`: 자동으로 흐르는 사진 갤러리

## 사진 권장 규격

- 대표 사진: 1920×1080px 이상, WebP 권장
- 일반 사진: 가로 1600px 전후
- 용량: 장당 300~700KB 권장
- 파일명: 영문 소문자와 하이픈 사용 (`festival-night.webp`)

## 폰트

Pretendard 웹폰트를 CDN으로 불러옵니다. 제목은 Georgia 계열 세리프체를 사용해 기사형 분위기를 냅니다. 외부 폰트를 쓰지 않으려면 `index.html`의 Pretendard 링크를 삭제해도 시스템 폰트로 표시됩니다.

## 주의

`content.js`에 들어 있는 수치와 문장은 모두 예시입니다. 기사에 사용하기 전 취재 자료에 제시된 실제 데이터와 문장으로 교체해야 합니다.
