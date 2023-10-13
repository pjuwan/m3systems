# 인수인계 운영자 메뉴얼

## 목차

1. [개요](#1-개요)
2. [프로젝트 구조](#2-프로젝트-구조)
3. [환경 설정](#3-환경-설정)
4. [Vue Router 설정](#4-vue-router-설정)
5. [Vuex 설정](#5-vuex-설정)
6. [컴포넌트 개발](#6-컴포넌트-개발)
7. [데이터 관리](#7-데이터-관리)
8. [참고 사항](#8-참고-사항)


<br>

## 1 개요

#### 이 메뉴얼은 Vue를 사용한 가칭 "`M House`" 프로젝트를 개발 및 운영자를 위한 가이드입니다.

#### Vue2를 사용하여 필요한 정보를 제공합니다.

<br>

## 2 프로젝트 구조

#### M House 프로젝트의 기본 구조는 다음과 같습니다:
    M3SYSTEMS/
    ├── public/
    ├── src/
    │ ├── assets/
    │ ├── components/
    │ ├── data/
    │ ├── mixins/
    │ ├── router/
    │ ├── store/
    │ ├── views/
    │ ├── App.vue
    │ └── main.js
    ├── package.json
    ├── README.md
    └── vue.config.js

<br>

#### - `public`: 정적 파일을 저장하는 디렉터리
#### - `src`: 소스 코드를 저장하는 디렉터리
#### - `assets`: 이미지 및 스타일 파일을 저장하는 디렉터리
#### - `components`: Vue 컴포넌트 파일을 저장하는 디렉터리
#### - `data`: Json 형태로 정의한 Data 파일목록
#### - `mixins`: 공통으로 사용한 method
#### - `views`: 페이지 컴포넌트 파일을 저장하는 디렉터리
#### - `router`: Vue Router 설정 파일
#### - `store`: Vuex 상태 관리 설정 파일
#### - `App.vue`: 앱의 진입점 컴포넌트
#### - `main.js`: 앱의 진입점 JavaScript 파일
#### - `package.json`: 프로젝트 종속성 및 스크립트 정의
#### - `vue.config.js`: Vue CLI 설정 파일

<br>

## 3. 환경 설정

### 프로젝트를 설정하려면 다음 단계를 따릅니다:

### 1) **Node.js 설치**: [https://nodejs.org/ko/blog/release/v16.13.2]
#### &nbsp; - Vue 구동을 위한 Node Version은 16.13.2 을 설치
### 2) **개발환경 구동방법**:
#### &nbsp; - 소스 경로를 VSCode에서 지정
#### &nbsp; - VScode 프로젝트 경로에서 TERMINAL 입력
    npm install
### 3) **개발 서버 실행:**
#### &nbsp; - 개발 서비스 (80 PORT) 가동
    npm run serve -- --port 80

<br>

## 4. Vue Router 설정
### Vue Router를 사용하여 페이지 라우팅을 설정합니다. router/index.js 파일에서 라우트를 정의하고 페이지 컴포넌트를 연결합니다. 
### 기존 Lagacy 구조를 참고하여 동일한 방식으로 진행하였습니다.

***예제) router/index.js:***

    const router = new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        ...Menu,
        {
          path: '/',
          component: Home,
          name: 'Home'
        },
        {
          path: '/mobile',
          component: MobileHome,
          name: 'MobileHome'
        }
      ],
    });

#### PC/ Mobile 구분을 위해 name 값에 "Mobile"을 붙여 라우팅이 되도록 하였습니다.
#### 예와 같이 네이밍 규칙은 아래와 같이하시면 됩니다.
#### &nbsp; - PC : HouseModelList
#### &nbsp; - 모바일 : MobileHouseModelList

***예제) router/main.js:***

    {
      path: '/menu/model',
      component: HouseModelList,
      name: 'HouseModelList'
    },
    {
      path: '/mobile/menu/model',
      component: MobileHouseModelList,
      name: 'MobileHouseModelList'
    }

## 5. Vuex 설정

### Vuex를 사용하여 상태 관리를 설정합니다. store/index.js 파일에서 상태, 변이, 액션 및 모듈을 정의합니다. 중앙 store에서 PC, Mobile 여부 등을 판단합니다.

#### - `setMobileStatus`: innerWidth 768px 기준으로 Mobile 여부에 대한 설정
#### - `setScrolltoTop`: 스크롤을 보여줄지에 대한 설정
#### - `setMenuId`: 현재 메뉴 위치 설정

***예제) store/index.js:***

    export default new Vuex.Store({
      state: {
        isMobile: false,
        isScrolltoTop: true,
        menuId: ''
      },
      mutations: {
        setMobileStatus(state) {
          state.isMobile = window.innerWidth <= 768;
        },
        setScrolltoTop(state, value) {
          state.isScrolltoTop = value;
        },
        setMenuId(state, value) {
          state.menuId = value;
          sessionStorage.setItem('menuId', value);
        }
      },
    });

## 6. 컴포넌트 개발

### 화면을 개발할 때 Vue 컴포넌트를 사용합니다. 컴포넌트를 components/ 디렉터리에 정의하고 페이지 뷰는 views/ 디렉터리에 저장합니다.

#### &nbsp; - Vue 파일 작성시 라우터 네이밍 규칙에 맞춰 파일명 생성시 name 값을 PC / Mobile 구분해 줍니다. 

***예) HouseModelList에서의 name값***

    export default {
      name: 'HouseModelList',

***예) MobileHouseModelList에서의 name값***

    export default {
      name: 'MobileHouseModelList',

<br>

## 7. 데이터 관리

### Vuex를 사용하여 데이터 상태를 관리하고 Json 파일을 통해 모델정보, 이미지목록 등을 관리하고 있습니다.

### 경로 Data/
#### &nbsp; - home.json
#### &nbsp; - model-image.json
#### &nbsp; - model-list.json

<br>

#### Data 디렉터리내에 3개의 파일이 있으며 Json 파일을 통해 데이터가 관리되고 있습니다.

<br>

#### - `home.json`: 홈화면 상단 "이미지목록", "새로운 모델", "베스트모델" 을 Json 모델 id로 관리합니다.
    {
      // 최상위 이미지 목록
      "topInfoList" : [
        "PRD-09-00-00",
        "CWK-12-00-00",
        "OTS-19-00-00"
    ],
      // 새로운 모델
      "newModelList": [
        "OTS-19-00-00",
        "CWK-12-00-00",
        "PRD-09-00-00"    
      ],
      // 베스트 모델
      "bestModelList": [
        "CWK-12-00-00",
        "PRD-09-00-00",   
        "OTS-19-00-00"
      ]  
    }

#### - `model-image.json`: 모델 이미지 정보들을 관리하는 파일입니다. 이미지들은 id와 맵핑시켜 줍니다.

    [
      {
        "id": "CWK-12-00-00",
        "imageList": [
          // 이미지 경로
        ]
      },
      {
        "id": "OTS-19-00-00",
        "imageList": [
          // 이미지 경로
        ]
      }
    ]

#### - `model-list.json`: 모델에 대한 정보들을 관리하는 Json 파일입니다.

    [
      {
        "id": "CWK-12-00-00",
        "exclusive_area": 33,
        "num_of_room": 2,
        "num_of_bath": 2,
        "material": "1",
        "storey_attic": "0",
        "roof": "f",
        "cost": 190000000,
        "create_dtm": "2023-10-08 08:18:00",
        "rank": 3,
        "type": "PREMIUM_MODEL",
        "model_title": "프라이빗한 안뜰을 가진 모던한 박스타입 주택",
        "model_desc": "목구조의 프리미엄 라인업 주택으로, 아이가 있는 부부에적합한 (생략)"
        "option_desc": "CWK-12-00-00’S Description blahblahblah Lorem Ipsum (생략)"
      },

<br>

## 8. 참고 사항

#### 자세한 사용 방법은 아래 사이트에서 확인 가능합니다.

    Vue.js 공식 문서: https://vuejs.org/
    Vueper Slides: https://antoniandre.github.io/vueper-slides/
    Vue Snap: https://github.com/angelomelonas/vue-scroll-snap
