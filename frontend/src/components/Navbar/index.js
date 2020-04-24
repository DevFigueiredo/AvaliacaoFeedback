import React,  { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let [Sidebar, SetSideBar ] = useState(false);

  function SideBarLateral(){

    if(!Sidebar){
    SetSideBar(true);
    document.querySelector('#SideBarLateral').style.display="block";     
     }else{
      SetSideBar(false);
      document.querySelector('#SideBarLateral').style.display="none";
    }
  }
  

  return(
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark p-0">
  <Link className="navbar-brand col-sm-12 col-md-3 col-lg-2 mr-0">
  <button className="navbar-toggler" onClick={SideBarLateral} type="button" >
    <span className="navbar-toggler-icon"></span>
  </button>
&nbsp;
    JAA Soluções

  </Link>

  <div className="collapse navbar-collapse" id="navbarColor01">
      <input className="form-control mr-sm-2 form-control-dark w-100" type="search" placeholder="Search" aria-label="Search" />
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Sair </Link>
      </li>





    </ul>
  </div>
</nav> 

);

}