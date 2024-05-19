import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout} = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
   <header>
    <div className="container">
        <a href="/">Workout Buddy</a>
        
    <nav>
      { user && (
        <div className="">
          <span>{user.email}</span>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
      {!user && (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      )}
    </nav>
    </div>
   </header>
  )
}

export default Navbar
