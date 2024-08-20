import React from 'react'
import './Navbar.css';
import kersheylogo from '../images/kersheylog.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="logo"><img src={kersheylogo}alt=""/></div>
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav1">
                <Link className="nav-link dropdown-toggle" to="/">Home</Link>    
            </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/chocalates">Chocalates</Link>    
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/cakes">Cakes</Link>    
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/gifts">Gifts</Link>    
            </li>                   
          </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 sea" type="search" placeholder="Search tons of products,receipes and craft ideas" aria-label="Search"/>
        </form>
        </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar