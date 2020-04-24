import React from 'react';
import './style.css';
import {Helmet} from "react-helmet";
import { useHistory } from 'react-router-dom'

export default function Login() {

  const history =  useHistory();

  async function Logar(e){
  try{
    e.preventDefault();
    history.push('/Funcionarios');
     }catch(error){
  alert('Falha no Login: Usuário ou Senha Inválidos!');
    }
  }
  return(

<div id="Login" className="text-center card mx-auto" cz-shortcut-listen="true">
  
<Helmet><title>Login</title></Helmet>
    <form className="form-signin" onSubmit={Logar}>
      <h1 className="h3 mb-3 font-weight-normal">Gerenciador de Supervisao</h1>
      <label for="InputUsuario" className="sr-only">Usuário</label>
      <input type="text" id="InputUsuario" className="form-control" placeholder="Digite o Usuário" required="" autofocus="" />
      <label for="inputSenha" className="sr-only">Password</label>
      <input type="password" id="inputSenha" className="form-control" placeholder="Digite a Senha" required="" />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="LembrarSenha" /> Lembrar Senha
        </label>
      </div>
      <button className="btn btn-lg btn-dark btn-block" type="submit">Conecte-se</button>
    </form>
    </div>

);
}