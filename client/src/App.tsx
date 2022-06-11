import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
  const [user, setUser] = React.useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    console.log(user)
    if (user === null) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [user])
  return (
    <Routes>
      <Route path="/">
        <Route index={true} element={<Home />} />
        <Route path=":userId" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
