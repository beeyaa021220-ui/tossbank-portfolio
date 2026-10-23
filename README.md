# HANBEE SEO · Toss Bank Portfolio

토스뱅크 **Savings Operations Specialist** 지원을 위해 제작한 반응형 이력서/포트폴리오 웹사이트입니다. 독립적으로 제작한 지원자 페이지이며, 토스뱅크 공식 사이트가 아닙니다.

## 구성
- `index.html` — 소개 · 금융 실무 · 프로젝트 · 역량 · 연락
- `styles.css` — 토스 스타일을 참고한 블루 그라데이션 및 글래스모피즘 디자인
- `script.js` — 스크롤 진입 애니메이션 및 내비게이션 강조
- `assets/resume.pdf` — 기존 토스뱅크 제출용 이력서·경력기술서

## GitHub Pages 배포 방법 (별도 빌드 불필요)
1. GitHub에서 **New repository** 클릭 후, 예를 들어 `tossbank-portfolio` 이름으로 **Public** 저장소 생성
2. 압축을 해제한 폴더의 **내용물** (`index.html`, `styles.css`, `script.js`, `assets/`)을 저장소 루트에 업로드하고 Commit
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch** 선택
4. Branch를 `main` / `/(root)`로 지정하고 Save
5. 배포 후 `https://깃허브아이디.github.io/tossbank-portfolio/` 형식의 주소로 접속

> GitHub 계정 연결 없이 전달하는 파일이므로 라이브 GitHub URL은 업로드·배포 후 생성됩니다.

## 제출 전 확인
- `index.html`의 이메일 주소가 현재 연락처와 일치하는지 확인
- 이력서 PDF의 내용/개인정보 최종 확인 (Public 저장소의 PDF는 누구나 볼 수 있습니다)
- 공개가 부담된다면 PDF를 `assets`에서 제거하고 PDF 버튼/링크를 삭제하세요.
- 필요 시 프로젝트 결과물·수상 증빙·사진을 별도로 추가할 수 있습니다.

HTML/CSS/JavaScript만 사용하여 외부 빌드 도구가 필요하지 않습니다. Google Fonts 연결을 제외하면 독립 실행됩니다.
