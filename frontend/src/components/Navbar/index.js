import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
return(
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
  <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">JAA Soluções</a>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Busca Facilitadora" aria-label="Search" id="search" />
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <Link class="nav-link" to="/">Desconectar-se</Link>
    </li>
  </ul>
</nav> 
);

}