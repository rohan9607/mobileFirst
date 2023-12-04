import React from 'react'
import "../../../public/css/main.css"

type Props = {}

const NavTwo = (props: Props) => {
  return (
    <section id="Nav2">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="imgs/logo.png" width="18%" />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link selected" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About-us.html">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Articles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="requests.html">
              Donations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="who-we-are.html">
              Who We Are ?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact-us.html">
              Contact Us
            </a>
          </li>
        </ul>
        <button
          className="btn signup"
        >
          New Account
        </button>
        <button
          className="btn login"
        >
          Login
        </button>
      </div>
    </nav>
  </section>
  )
}

export default NavTwo