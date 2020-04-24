import React from 'react';
import { BsFillPersonLinesFill, BsPieChartFill, BsFillPersonCheckFill, BsFillGearFill, BsPaperclip, BsPeopleFill, BsCalendar } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './style.css';
export default function SideBar() {
  
return(

<nav className="col-md-3 col-lg-2 bg-light sidebar animacao-esquerda" id="SideBarLateral">
<div className="sidebar-sticky">
  <ul className="nav">
    <li className="nav-item">
      <Link className="nav-link" to="/Monitoria">
       <FaHeadset size={22} />
       &nbsp; Monitoria
      </Link>
    </li>
    
    <li className="nav-item">
      <Link className="nav-link" to="/Frequencia">
      <BsCalendar size={20} />&nbsp;
        Frequencia
      </Link>
    </li>
    
    <li className="nav-item">
      <Link className="nav-link" to="/Feedbacks">
        <BsFillPersonCheckFill size={22} />&nbsp;
        Feedback's
      </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link" to="/Funcionarios" >
       <BsFillPersonLinesFill size={22} /> &nbsp;
        Funcionarios
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/GraficosAvaliacao">
        <BsPieChartFill size={20} /> &nbsp;Gráficos de Avaliação
      </Link>
    </li>


    <li className="nav-item">
      <Link className="nav-link" to="/AnexosAdministrativos">
      <BsPaperclip size={20} />&nbsp;
         Anexos Administrativos
      </Link>
    </li>


  </ul>

  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
    <span>Outras Opções</span>
    </h6>
  <ul className="nav flex-column mb-2">

    <li className="nav-item">
     <a className="nav-link" data-toggle="collapse" href="#MaisConfiguracoes"  role="button" aria-expanded="false" >

        <BsFillGearFill size={20} />&nbsp; 
         
          Configurações Avançadas
      </a>
    </li>
    <li className="collapse" id="MaisConfiguracoes" >
      <Link className="nav-link">
        <BsPeopleFill size={20} />&nbsp; 
           Usuários
      </Link>
    </li>
    <li className="collapse" id="MaisConfiguracoes" >
      <Link className="nav-link">
      <RiBuilding4Line size={20} />&nbsp;
        Empresas
      </Link>
    </li>

  </ul>
</div>
</nav>
);
}

