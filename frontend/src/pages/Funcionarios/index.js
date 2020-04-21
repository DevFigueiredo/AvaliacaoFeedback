import React from 'react';
import './style.css';
import {Helmet} from "react-helmet";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/SideBar';

export default function Funcionarios() {
   return(
<div>
<Helmet><title>Funcionários</title></Helmet>   
<Navbar />
<div class="container-fluid">
      <div class="row">
            <Sidebar />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                  

          <h4>Funcionários</h4>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>PIS</th>
                  <th>Nome</th>
                  <th>Ramal</th>
                  <th>Endereço</th>
                  <th>Departamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>154.135.44/4</td>
                  <td>Daniel Miranda</td>
                  <td>2503</td>
                  <td>Rua Afonso Pena, 101 - Indaiá</td>
                  <td>Supervisão de Atendimento</td>
                </tr>
                <tr>
                <td>154.135.44/4</td>
                  <td>Daniel Miranda</td>
                  <td>2503</td>
                  <td>Rua Afonso Pena, 101 - Indaiá</td>
                  <td>Supervisão de Atendimento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        </div>
 </div>
 </div>
 );
}