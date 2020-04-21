import React from 'react';
import { BsFillPersonLinesFill, BsPieChartFill, BsFillPersonCheckFill, BsFillGearFill, BsPaperclip, BsPeopleFill, BsCalendar } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Navbar() {
return(
<nav class="col-md-2 d-none d-md-block bg-light sidebar">
<div class="sidebar-sticky">
  <ul class="nav flex-column">
  
  
    <li class="nav-item">
      <Link class="nav-link" to="/Monitoria">
       <FaHeadset size={22} />
       &nbsp; Monitoria
      </Link>
    </li>
    
    <li class="nav-item">
      <Link class="nav-link" to="/Frequencia">
      <BsCalendar size={20} />&nbsp;
        Frequencia
      </Link>
    </li>
    
    <li class="nav-item">
      <Link class="nav-link" to="/Feedbacks">
        <BsFillPersonCheckFill size={22} />&nbsp;
        Feedback's
      </Link>
    </li>

    <li class="nav-item">
    <Link class="nav-link" to="/Funcionarios" >
       <BsFillPersonLinesFill size={22} /> &nbsp;
        Funcionarios
      </Link>
    </li>

    <li class="nav-item">
      <Link class="nav-link" to="/GraficosAvaliacao">
        <BsPieChartFill size={20} /> &nbsp;Gráficos de Avaliação
      </Link>
    </li>


    <li class="nav-item">
      <Link class="nav-link" to="/AnexosAdministrativos">
      <BsPaperclip size={20} />&nbsp;
         Anexos Administrativos
      </Link>
    </li>


  </ul>

  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
    <span>Outras Opções</span>
    </h6>
  <ul class="nav flex-column mb-2">

    <li class="nav-item">
      <a class="nav-link" data-toggle="collapse" href="#MaisConfiguracoes" role="button" aria-expanded="false" >

        <BsFillGearFill size={20} />&nbsp; 
          Configurações Avançadas
      </a>
    </li>
    <li class="collapse" id="MaisConfiguracoes" >
      <a class="nav-link">
        <BsPeopleFill size={20} />&nbsp; 
           Usuários
      </a>
    </li>
    <li class="collapse" id="MaisConfiguracoes" >
      <a class="nav-link">
      <RiBuilding4Line size={20} />&nbsp;
        Empresas
      </a>
    </li>

  </ul>
</div>
</nav>
);
}