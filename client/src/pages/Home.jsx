import React from 'react'
import './pages.scss'
// import background from '../images/landing.jpg'
import { Link } from 'react-router-dom'
import Home_feed from './Home_feed'
function Home() {
  return (
    <div>

    <div className='home'>
      <div className="container">
        <div>

        <div className="small-heading">
          Xbox ,Playstation and games are in stock.
        </div>
        <div className="main-heading">
          <h1>Start exploring The Inventory</h1>
        </div>
        </div>
        <Link to='/shop/all'>
        <button>
          Shop Now
        </button>
        </Link>
      </div>
      
    </div>
    <Home_feed/>
    </div>
  )
}

export default Home