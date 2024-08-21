import React from 'react';
import './App.css';
// import Component, { ClassComponent, FunctonComponent } from './component/Component';
// import CurlyBraces from './component/CurlyBraces';
// import Properties from './component_manage/Properties';
// import Gallery from './component_manage/example/Example1';
// import ConditionalRender from './component_manage/ConditionalRender';
// import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/ListRender';

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
      <ListRender />
    </>
  );
}

export default App;
