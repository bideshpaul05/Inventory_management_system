import React from 'react'
import './utils.scss'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
      <div className="container">

      <div className="logo">
        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
          <h1>
            Lo<span style={{color:"red"}}>go</span>
          </h1>
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="shop/game">Games</Link>
        <Link className="link" to="shop/console">Consoles</Link>
        <Link className="link" to="shop/accessories">Accessories</Link>

      </div>

      </div>
    </div>
  )
}

export default Nav