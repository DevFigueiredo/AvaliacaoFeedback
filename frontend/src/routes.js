import React from 'react';
//Importação da Biblioteca de Rotas do Site 
import { BrowserRouter,Switch,Route } from "react-router-dom";
//Framework CSS

//Importação das Páginas
import Login from './pages/Login';
import FichaFuncional from './pages/FichaFuncional';
import Funcionarios from './pages/Funcionarios';
import GraficosAvaliacao from './pages/GraficosAvaliacao';
import Monitoria from './pages/Monitoria';
import Frequencia from './pages/Frequencia';
import Feedbacks from './pages/Feedbacks';
import AnexosAdministrativos from './pages/AnexosAdministrativos';

export default function Routes(){
    return(
      
    <BrowserRouter >
    <Switch>
    <Route path="/" exact component={Login} title="Inicio"/>
    <Route path="/FichaFuncional" component={FichaFuncional}/>
    <Route path="/Funcionarios" component={Funcionarios}/>
    <Route path="/GraficosAvaliacao" component={GraficosAvaliacao}/>
    <Route path="/Monitoria" component={Monitoria}/>
    <Route path="/Frequencia" component={Frequencia}/>
    <Route path="/Feedbacks" component={Feedbacks}/>
    <Route path="/AnexosAdministrativos" component={AnexosAdministrativos}/>
    </Switch>
    </BrowserRouter>
    );
}
