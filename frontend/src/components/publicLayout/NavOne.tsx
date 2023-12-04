import React from 'react'
import "../../../public/css/main.css"
type Props = {}

const NavOne = (props: Props) => {
  return (
  <section id="Nav1">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <i
                className="fas fa-phone-volume"
                style={{ borderRight: "1px solid gray" }}
              >
                {" "}
                +20 127 245 6884 &nbsp; &nbsp;{" "}
              </i>
            </li>
            <li className="nav-item">
              <i className="far fa-envelope" style={{ paddingLeft: 15 }}>
                {" "}
                InfoBloodBank@gmail.com
              </i>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0 navbar-brand mx-auto">
          <a href="https://www.instagram.com/ipda3.tech/">
            <i className="fab fa-instagram github">&nbsp;&nbsp;</i>
          </a>
          <a href="https://www.facebook.com/ipda3tech/">
            <i className="fab fa-facebook-f facebook">&nbsp;&nbsp;</i>
          </a>
          <a href="https://twitter.com/ipda3_tech">
            <i className="fab fa-twitter twitter">&nbsp;&nbsp;</i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=+201097571186">
            <i className="fab fa-whatsapp whats">&nbsp;&nbsp;</i>
          </a>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link selected"
                style={{ borderRight: "1px solid gray" }}
                href="#"
              >
                EN &nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ paddingLeft: 15 }} href="#">
                AR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>


  )
}

export default NavOne