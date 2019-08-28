import React from 'react';
import './App.css';

// 加载ul组件库样式
import 'antd-mobile/dist/antd-mobile.css';

// 加载路由
import AppRouter from './router'

function App() {
  return (
    // <div>
    //   <AppRouter/>
    // </div>
    <AppRouter>
      <div>
        App-----
      </div>
    </AppRouter>

  );
}

export default App;
