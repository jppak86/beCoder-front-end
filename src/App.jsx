import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as authService from './services/authService'
import PostList from './pages/PostList/PostList'
import CreatePost from './pages/CreatePost/CreatePost'
import EditPost from './pages/EditPost/EditPost'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" 
        element={user ? <Landing user={user} />
        : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path='/posts'
          element={<PostList user={user}/>}
        />
        <Route path='/new'
          element={ <CreatePost user={user} />}
        />
        <Route path='/edit'
          element={<EditPost user={user} />}
        />
      </Routes>
    </>
  )
}

export default App
