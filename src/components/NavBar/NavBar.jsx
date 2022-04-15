import { NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className="nav-bar">
          
              <div className='user'>
             beCoder
              </div>
              
              
            <NavLink to="" onClick={handleLogout}>Log out</NavLink>
            <NavLink to="/posts">Post</NavLink>
            <NavLink to="/new">New Post</NavLink>
          
        </nav>
      :
        <nav className="nav-bar">
          
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          
        </nav>
      }
    </>
  )
}

export default NavBar
