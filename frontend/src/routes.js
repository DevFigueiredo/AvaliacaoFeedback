import React from 'react';
//Importação da Biblioteca de Rotas do Site 
import { BrowserRouter,Switch,Route } from "react-router-dom";
//Framework CSS

//Importação das Páginas
import Login from './pages/Login';

export default function Routes(){
    return(
    <BrowserRouter >
    <Switch>
    <Route path="/" exact component={Login} title="Inicio"/>
     </Switch>
    </BrowserRouter>
    );
}
