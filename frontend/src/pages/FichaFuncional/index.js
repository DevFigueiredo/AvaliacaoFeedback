import React from 'react';
import './style.css';
import {Helmet} from "react-helmet";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/SideBar';

export default function FichaFuncional() {
   return(
<div>
<Helmet><title>Ficha Funcional</title></Helmet>   
<Navbar />
<div className="container-fluid">
      <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">

                
            </main>
        </div>
 </div>
 </div>
 );
}