import React from 'react';
import './App.css';
// import Component, { ClassComponent, FunctonComponent } from './component/Component';
// import CurlyBraces from './component/CurlyBraces';
// import Properties from './component_manage/Properties';
// import Gallery from './component_manage/example/Example1';
// import ConditionalRender from './component_manage/ConditionalRender';
// import Example2 from './component_manage/example/Example2';
// import ListRender from './component_manage/ListRender';
// import EventComponent from './interaction/EventComponent';
// import StateComponent from './interaction/StateComponent';
// import ForwordingComponent from './interaction/ForwordingComponent';
// import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';

//# npm run start 할 시에는 package.json 파일이 있는 자리에서 해야 함!

function App() {
  return (
    <>
      {/* === component === */}
      {/* <Component /> */}
      {/* <ClassComponent /> */}
      {/* <FunctonComponent /> */}

      {/* <CurlyBraces /> */}

      {/* === component_manage === */}
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
      <HookComponent2 />
    </>
  );
}

export default App;
