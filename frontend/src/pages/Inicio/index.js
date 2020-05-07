import React from 'react';
//Importado os itens necessários para criar as divi
//Importado o CSS Global do Site
import {Global} from '../../global';
//Importado o Menu do site 
//Importado o componente que modifica o HEAD do site 
import {Helmet} from 'react-helmet';


const useStyles = Global;

export default function Inicio() {

   

  //Puxa estilo do site
  const classes = useStyles();
  
  //Titulo do site
  const titulo = "Início"


  return (
    <div >
      
    </div>
  );
}