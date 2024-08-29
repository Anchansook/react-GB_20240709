import React from 'react';
import './App.css';
import Component, { ClassComponent, FunctonComponent } from './component/Component';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import Gallery from './component_manage/example/Example1';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingComponent from './interaction/ForwordingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';
import { Route, Routes } from 'react-router';

//& npm run start 할 시에는 package.json 파일이 있는 자리에서 해야 함!

//# react-router 패키지 :
// - react의 SPA(Single Page Application)에서 라우팅을 구현하기 위한 라이브러리
// - 웹 페이지에서 다양한 경로에 따른 뷰를 관리할 수 있도록 도와줌
// - 웹 애플리케이션 내에서 URL 이동이 있을 때 브라우저를 새로고침 하지 않음(서버로 새로운 요청을 보내지 않음)
// - 웹 애플리케이션 내에서 네비게이션 역할을 수행

//# npm i react-router react-router-dom

// - root 경로에 있는 index.tsx의 root.render() 안에 <App /> 컴포넌트를 <BrowserRouter /> 컴포넌트로 묶어야 함
//# <BrowserRouter /> 
// : URL을 사용하여 브라우저 주소 표시줄에 현재 위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

// - 특정 URL 패턴에 대해서 컴포넌트를 각각 다르게 렌더링하고자 한다면 
//   App.tsx에 <Routes /> 컴포넌트와 <Route /> 컴포넌트를 사용하여 경로에 따라서 컴포넌트를 렌더링할 수 있음

//# <Routes />
// : <Route /> 컴포넌트로 URL에 따른 컴포넌트 렌더링을 할 수 있도록 하는 컴포넌트
//# <Route />
// : URL 패턴(리소스)에 따라서 렌더링하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성 : URL 패턴(리소스 주소)을 지정
// - element 속성 : 렌더링할 컴포넌트 지정, 요소를 넣어도 된다.(ex_ element={<h1>기본 페이지</h1>})
// - index 속성 : 현재 경로의 기본 라우터로 지정

function App() {
  return (
    <Routes>
      <Route index element={<h1>기본 페이지</h1>} />
      {/* === component === */}
      <Route path='/component' element={<Component />} />
      <Route path='/class-component' element={<ClassComponent />} />
      <Route path='/function-component' element={<FunctonComponent />} />
      <Route path='/component/curly-braces' element={<CurlyBraces />} />

      {/* === component_manage === */}
      <Route path='/properties' element={<Properties />} />
      {/* <Properties /> */}
      {/* <Gallery /> */}
      {/* <ConditionalRender /> */}
      {/* <Example2 /> */}
      {/* <ListRender /> */}

      {/* === interaction === */}
      {/* <EventComponent /> */}
      {/* <StateComponent /> */}
      {/* <ForwordingComponent /> */}

      {/* === hook === */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2 /> */}
      {/* <CustomHook /> */}
    </Routes>
  );
}

export default App;
