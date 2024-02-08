import React from 'react'
import './utils.scss'
import { Link } from 'react-router-dom'
function Popup() {
  return (
    <div className='popup'>
        <div className="header">
           ADMIN ACTIONS
        </div>
        <div className='buttons'>
          Add New:
        <div >
          <Link to='write/game/post'>
            <button>Games</button>
          </Link>
          <Link to='write/console/post'>
            <button>Consoles</button>
          </Link>
          <Link to='write/accessory/post'>
            <button>Accessories</button>
          </Link>
            
        </div>

        </div>
    </div>
  )
}

export default Popup