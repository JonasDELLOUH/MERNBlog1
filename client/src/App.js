import React, { useContext } from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Context } from './context/Context'

const App = () => {
  const user = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
          <Route path="/" element={user ? <Home /> : <Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={user ? <Home /> : <Register/>} />
          <Route path="/write" element={user ? <Write /> : <Login/>} />
          <Route path="/settings" element={user ? <Settings /> : <Login/>} />
          <Route path="/post/:postId" element={user ? <Single /> : <Login/>} />
        </Routes>
    </Router>

  )
}

export default App
