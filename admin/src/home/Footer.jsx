import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div>
            <ul>
                <li>
                    <Link>Terms of Use</Link>
                </li>
                <li>
                    <Link>Privacy-Policy</Link>
                </li>
                <li>
                    <Link>FAQ</Link>
                </li>
            </ul>
        </div>
        <div>
            <p>
            © 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
            </p>
        </div>
        <div>
            <p>Follow us</p>
            <ul>
                <li>
                    <Link>
                    <img src='' alt='' />
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src='' alt='' />
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src='' alt='' />
                    </Link>
                </li>
                <li>
                    <Link>
                    <img src='' alt='' />
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer