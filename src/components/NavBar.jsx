import React from "react";


const NavBar = () => {
  return(
    <div className="container">
    <div className="navbar pt-4 border-bottom">
     <div className="navbar-items">
      <ul>
       <li><a href="#">Login</a></li>
       <li><a href="#">Register</a></li>
      </ul>
     </div>
     <div className="navbar-items">
      <ul>
       <li><a href="#">My List</a></li>
       <li><a href="#">Orders</a></li>
       <li><a href="#">Help</a></li>
       <li>
          <a href="#">
          <i className="fas fa-shopping-cart"></i>
          </a>
       </li>
      </ul>
     </div>
    </div>
    <div className="navbar-input">
      <div>
       <input type="search" placeholder="Search by Book Name , Author or Publisher"/>
      </div>
      <div className="search-icon">
       <i className="fas fa-search"></i>
      </div>
    </div>
    </div>
  )
}


export default NavBar