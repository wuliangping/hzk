// 路由文件

import React,{Component} from 'react'

import Home from './components/Home'
import Login from './components/login'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function AppRouter() {
  return (
    <Router>

        {/* 唯一 */}
        <Switch>
          <Route exact path="/login" component={Login} />>
          <Route path="/" component={Home} />>

          {/* 出现错误重定向到login */}
          <Redirect to="login"/>
        </Switch>

    </Router>
  )
}

// 导出
export default AppRouter