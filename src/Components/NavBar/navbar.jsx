import React from 'react'
import {FaBars} from 'react-icons/fa'
import './navbar.css'

const navbar = ({handleLogout}) => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand logo" href="#"><img
                src="https://speedforce.in/wp-content/uploads/2020/07/logo.png"
                alt="image"
              /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FaBars/>
    </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coupon</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={handleLogout} >Logout</a>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar