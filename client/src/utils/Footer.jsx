import React from 'react'
import './utils.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
    <div className="container">

    <div className="logo">
        <h1>
         Made with<span style={{color:"red"}}> React</span>
        </h1>
    </div>
    <div className="links">
      <Link className="link" to="https://github.com/bideshpaul05">Github</Link>
     

    </div>

    </div>
  </div>
  )
}

export default Footer