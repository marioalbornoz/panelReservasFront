import React from 'react'
import logo from './../utils/logo.png'

export const Navbar = () => {
    return (
      <nav>
        <div className="nav-wrapper  blue darken-1">
          <a href="!#" className="brand-logo" style={{'paddingLeft':20}}>
            <img src={logo} alt="" height={35} /> Panel de Reservas DAD
          </a>
          {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul> */}
        </div>
      </nav>
    );
}
