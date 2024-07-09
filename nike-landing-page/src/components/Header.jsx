import React from 'react'

function Header() {
    return (
        <div>
            <nav className='navbar'>
                <div className="logo">
                    <img src="https://freepngtransparent.com/wp-content/uploads/2023/03/nike-logo-png-162.png" alt="NikeLogo" />
                </div>
                <ul className='navigation'>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <div>
                    <button className='login-button'>Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header