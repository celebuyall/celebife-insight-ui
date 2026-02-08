# Haarpeer Channel Report Generator

AI 기반 채널 분석 보고서 자동 생성 도구

## 프로젝트 개요

Haarpeer Channel Report Generator는 두 개의 분석 보고서를 입력받아 Google Gemini AI를 활용하여 자동으로 채널 분석 대시보드 데이터를 생성하는 웹 애플리케이션입니다. Instagram 및 YouTube 채널의 성과를 시각화하고 분석할 수 있는 구조화된 데이터를 제공합니다.

## 주요 기능

- **이중 보고서 입력**: 두 개의 분석 보고서를 비교하여 데이터 추출
- **AI 기반 데이터 추출**: Google Gemini 2.5 Pro를 활용한 자동 데이터 구조화
- **실시간 미리보기**: 생성된 채널 대시보드를 즉시 확인
- **플랫폼 지원**: Instagram 및 YouTube 채널 지원
- **TypeScript 코드 생성**: 재사용 가능한 TypeScript 데이터 파일 생성
- **3단계 로딩 UI**: 직관적인 진행 상태 표시

## 기술 스택

### Frontend
- **React 19.2** - UI 라이브러리
- **TypeScript 5.9** - 타입 안정성
- **Vite 7.2** - 빌드 도구 및 개발 서버
- **Tailwind CSS 4.1** - 스타일링
- **Recharts 3.7** - 데이터 시각화
- **Lucide React** - 아이콘

### Backend/API
- **Vercel Functions** - 서버리스 API
- **Google Generative AI 0.24** - Gemini AI 통합
- **@vercel/node** - Vercel 런타임

### 개발 도구
- **ESLint 9** - 코드 품질 관리
- **TypeScript ESLint** - TypeScript 린팅

## 프로젝트 구조

```
haarpeer-channel-generator/
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── DeployButton.tsx
│   │   ├── DualReportInput.tsx
│   │   ├── LoadingState.tsx
│   │   ├── PreviewFrame.tsx
│   │   └── ProfileMetaForm.tsx
│   ├── lib/                 # 유틸리티 및 타입
│   │   ├── prompts/         # AI 프롬프트
│   │   ├── api.ts           # API 클라이언트
│   │   └── types.ts         # TypeScript 타입 정의
│   ├── templates/           # 템플릿 파일
│   │   └── channel/         # 채널 대시보드 템플릿
│   ├── App.tsx              # 메인 애플리케이션
│   ├── main.tsx             # 엔트리 포인트
│   └── index.css            # 글로벌 스타일
├── api/                     # Vercel 서버리스 함수
│   └── extract.ts           # 데이터 추출 API
├── public/                  # 정적 파일
├── index.html               # HTML 템플릿
├── vite.config.ts           # Vite 설정
├── tsconfig.json            # TypeScript 설정
└── package.json             # 프로젝트 메타데이터
```

## 설치 방법

### 필수 요구사항
- Node.js 18.x 이상
- npm 9.x 이상

### 설치 단계

```bash
# 저장소 클론
cd haarpeer-channel-generator

# 의존성 설치
npm install
```

## 환경 변수 설정

Vercel 배포 시 다음 환경 변수를 설정해야 합니다:

```bash
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

### 환경 변수 획득 방법

1. [Google AI Studio](https://aistudio.google.com/app/apikey)에서 API 키 생성
2. Vercel 프로젝트 설정의 Environment Variables에 추가

## 개발 서버 실행

```bash
# 개발 서버 시작 (포트 5173)
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173` 접속

### 로컬 API 서버

API는 Vercel Functions를 사용하므로 로컬 테스트 시:

```bash
# Vercel CLI 설치 (전역)
npm install -g vercel

# 로컬에서 Vercel 환경 실행
vercel dev
```

## 빌드 및 배포

### 프로덕션 빌드

```bash
# TypeScript 컴파일 및 Vite 빌드
npm run build

# 빌드 결과물은 dist/ 폴더에 생성됨
```

### Vercel 배포

```bash
# Vercel에 배포
vercel --prod
```

또는 GitHub 연동 시 자동 배포됩니다.

### 미리보기

```bash
# 프로덕션 빌드 미리보기
npm run preview
```

## API 엔드포인트

### POST `/api/extract`

채널 데이터 추출 및 생성

**요청 본문:**
```json
{
  "reportA": "첫 번째 분석 보고서 텍스트",
  "reportB": "두 번째 분석 보고서 텍스트",
  "meta": {
    "platform": "Instagram",
    "handle": "@channel_handle",
    "profileUrl": "https://instagram.com/channel_handle"
  }
}
```

**응답:**
```json
{
  "success": true,
  "dataTs": "export const dashboardData = { ... }"
}
```

**에러 응답:**
```json
{
  "success": false,
  "error": "에러 메시지"
}
```

**특징:**
- 타임아웃: 60초
- 재시도: 최대 1회 (서버 에러 시)
- CORS: 모든 origin 허용 (개발 환경)

## 코드 품질 관리

```bash
# ESLint 실행
npm run lint
```

## 사용 방법

1. **입력 탭**:
   - 두 개의 분석 보고서 입력 (각 100자 이상)
   - 플랫폼 선택 (Instagram/YouTube)
   - 채널 핸들 및 프로필 URL 입력

2. **AI 생성**:
   - "AI로 채널 생성" 버튼 클릭
   - 3단계 로딩 프로세스 (데이터 추출 → 미리보기 생성 → 완료)

3. **미리보기 탭**:
   - 생성된 채널 대시보드 확인
   - TypeScript 코드 검토

4. **배포 탭**:
   - 생성된 데이터 다운로드 또는 배포

## 라이선스

Private

## 개발자

Haarpeer Team

---

**문의사항이나 이슈가 있으시면 GitHub Issues를 통해 제보해주세요.**
