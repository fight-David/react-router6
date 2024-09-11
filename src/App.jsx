import { useState } from 'react'
import Button from '@mui/material/Button';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Home from './views/Home';
import Product from './views/Product';
import About from './views/About';
import Wiki from './views/Wiki';
import Error from './views/Error';
import Result from './views//Result';
import Message from './views/Message/index';
import MessageDetail from './views/Message/components/Detail';
import NewMessage from './views/Message/components/NewMessage';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <header>
        <h1>{location.state || location.pathname} </h1>
      </header>
      <nav>
        <NavLink to="" className={({ isActive }) => isActive ? 'nav-active' : void 0}>首页</NavLink>
        <br />
        <NavLink to="product">产品</NavLink>
        <br />
        <NavLink to="about">关于</NavLink>
        <br />
        <NavLink to="wiki">Wiki</NavLink>
        <br />
        <NavLink to="messages">Messages</NavLink>
        <br />
        <NavLink to="result">Result</NavLink>
      </nav>

      <br />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        {/* <Route path="/about" element={<Navigate to="/" state={"From About"} />} /> */}
        <Route path="*" element={<Error />} />
        {/* <Route path="*" element={<Navigate to='/' />} /> */}

        {/* 动态路由 https://zh.wikipedia.org/wiki/{keyword}  google */}
        <Route path="wiki/:keyword" element={<Wiki />} />

        {/* 嵌套路由  */}
        <Route path="messages" element={<Message />}>
          <Route path="new" element={<NewMessage />} />
          <Route path=":id" element={<MessageDetail />} />
        </Route>

        <Route path="result" element={<Result />} />
      </Routes>

    </div>
  )
}

export default App
