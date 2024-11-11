import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <div>
            Logo
        </div>
        <div>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Categories</Link>
                </li>
                <li>
                    <Link>Pricing</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
            </ul>
        </div>
        <div>
            <img src='' alt='Profile icon' />
            <button>Subscribe now</button>
        </div>
    </div>
  )
}

export default Header