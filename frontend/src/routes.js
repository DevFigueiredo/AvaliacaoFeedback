import React from 'react';
//Importação da Biblioteca de Rotas do Site 
import { BrowserRouter,Switch,Route } from "react-router-dom";
//Framework CSS

//Importação das Páginas
import Login from './pages/Login';
import Funcionarios from './pages/Funcionarios';
import Frequencia from './pages/Frequencia';

export default function Routes(){
    return(
      
    <BrowserRouter >
    <Switch>
    <Route path="/" exact component={Login} title="Inicio"/>
    <Route path="/Funcionarios" component={Funcionarios}/>
    <Route path="/Frequencia" component={Frequencia}/> </Switch>
    </BrowserRouter>
    );
}
