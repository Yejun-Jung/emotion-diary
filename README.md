# 감정 일기장 ✍️

React로 구현한 감정 상태 기록 및 관리(CRUD) 서비스입니다.

## 📌 프로젝트 소개
5단계 감정 아이콘과 함께 일기를 기록하고 관리합니다. LocalStorage를 활용해 데이터를 안전하게 보관하며, 다채로운 필터링 기능을 제공합니다.

## ⚙️ 주요 기능
- 일기 작성, 수정, 삭제, 조회 (CRUD) 및 감정 5단계 선택
- 월별 데이터 필터링 및 최신순/오래된순 정렬
- useReducer + Context API 기반 전역 상태 관리 및 커스텀 훅 설계
- LocalStorage 동기화 및 잘못된 경로 접근 시 리다이렉트 예외 처리

## 📁 폴더 구조
src/
├── components/   # UI 컴포넌트 (Button, Editor, List, Item 등)
├── pages/        # 라우터 페이지 (Home, New, Edit, Diary 등)
├── hooks/        # 커스텀 훅 (useDiary, useTitle)
└── util/         # 유틸리티 함수 및 상수 관리


## 🛠 사용 기술
- React / React Router DOM
- Vite / CSS
- LocalStorage
