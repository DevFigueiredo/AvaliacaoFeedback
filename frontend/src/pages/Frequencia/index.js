import React from 'react';
import './style.css';
import {Helmet} from "react-helmet";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/SideBar';

export default function Frequencia() {
   return(
<div>
<Helmet><title>Frequencia</title></Helmet>   
<Navbar />
<div class="container-fluid">
      <div class="row">
            <Sidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

            <table class="table table-sm">
  <thead class="thead-light">
    <tr>
      <th scope="col">Teleatendente</th>
      <th scope="col">Data</th>
      <th scope="col">Periodo</th>
      <th scope="col">Tipo</th>
      <th scope="col">Observação</th>
      <th scope="col">Anotado Por</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Anna Julia</th>
      <td>21/04/2020</td>
      <td>08h/16h</td>
      <td>OUTROS</td>
      <td>Sem Ocorrências!</td>
      <td>Daniel Miranda</td>
    </tr>
    <tr>
      <th scope="row">João Silva</th>
      <td>21/04/2020</td>
      <td>08h/16h</td>
      <td>OUTROS</td>
      <td>Derrubou a ligação no meio do atendimento, não retornou. Tratou o cidadão com grosseria!</td>
      <td>Daniel Miranda</td>
    </tr>
  </tbody>
</table>
            </main>
        </div>
 </div>
 </div>
 );
}