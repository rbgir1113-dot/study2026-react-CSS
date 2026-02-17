# React Route& Style

# Custom Hooks Pattern 구조

## React 개발 원칙

React를 사용할 때 선언은 어렵게, 사용은 쉽게

수정을 고려하여 코드를 작성하기

## 라우터 설치
`yarn add react-router-dom`

## 프로젝트 폴더 구조

### [components]

모듈화 및 관심사의 분리

### [utils]

- arrayheler.js
- parseheler.js

### [consts]

상수 관리 폴더

- key.js - 상수, 문자열

### [styles]

- theme.js - 스타일 정의 및 가이드 컬러
- globalStyle.js - 전역 스타일 (reset, font-family)
- common.js - 공통 스타일

### [pages]

- Home
- Hooks
- Components
- home.js

### [routes]

라우팅 관리

### [hooks]

커스텀 훅 관리

---

## CSS 스타일링 방법

### React에서 CSS 사용

React에서 기존 CSS 방법 사용 가능

### 스타일 파일 구성

- **global.js** - 전역 스타일 (reset, font-family)
- **common.js** - 공통 스타일
- **theme.js** - 스타일 정의 가이드 컬러

### 주의사항

템플릿 리터럴 `${}` 사용 시 CSS 문법에서 세미콜론 `;` 잘 닫기