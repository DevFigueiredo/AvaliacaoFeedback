import React, {useRef} from 'react';
//Importado o Copyright do rodape do site
import Copyright from '../../components/Copyright';
//Importado o Menu do site 
import NavbarMenu from '../../components/NavbarMenu/';
//Importado o componente que modifica o HEAD do site 
import {Helmet} from 'react-helmet';

//Importado o Unform da Rockeseat
import { Form } from '@unform/web';
import {Scope} from '@unform/core';
import Input from '../../components/Form/Input'
//Importado o yup para realizar validações no formulário
import * as Yup from 'yup';



export default function NovoFuncionario() {
  //Titulo do site
  const titulo = "Novo Funcionário"



  const formRef = useRef(null);
//Funcao que envia os dados do formulário em JSON
//Reset serve para limpar o formulário após realizar o envio.
//Data serve para receber os dados de dentro do formulario
async function handleSubmit(data, {reset}){
  try {
    const schema = Yup.object().shape({
   
     //Validação das informações Pessoais
     infoPessoais: Yup.object().shape({
      nome: Yup.string().required('Nome é Obrigatório'),
      email: Yup.string().email('Digite um e-mail válido').required('Email é Obrigatório'),
      nascimento:Yup.string().required("Data é obrigatório"),
      rg: Yup.string().required('Rg é Obrigatório'),
      cpf: Yup.string().required('CPF é Obrigatório'),
      VA: Yup.string().required('Vale Alimentação é Obrigatório'),
      VT: Yup.string().required('Vale Transporte é Obrigatório'),
      nomeMae: Yup.string().required('Nome da Mãe é Obrigatório'),
      tamUniforme: Yup.string().required('Tamanho do Uniforme é Obrigatório'),
      sexo: Yup.string().required('Sexo é Obrigatório'),
    })
    });
    await schema.validate(data, {
      abortEarly: false,//Serve para validar todos os campos deixando e False, se deixar em true ele irá validar apenas o primeiro que enconrar o erro
    });
    // Validação Autorizada
    console.log(data);
    //Limpa os erros se tiver algum
    formRef.current.setErrors({});

  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      // Validação Falhou
      console.log(err);
      const errorMessages = {};
      err.inner.forEach(error=>{
        errorMessages[error.path] = error.message;
      })
      formRef.current.setErrors(errorMessages);
    }
  }

}
const initialData = {
  email: 'danielmirandacanal@gmail.com'
}

  return (
    <div>    
    {/*Formulário de Cadastro de tele atendente*/}
          <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit} >
         <div id="InfoPessoais">
          <Scope path="infoPessoais">
          <Input name="nome" />
          <Input name="email" />
          <Input name="nascimento" />
          <Input name="rg" />
          <Input id="standard-basic" name="cpf" />
          <Input name="VA" />
          <Input name="VT" />
          <Input name="nomeMae" />
          <Input name="tamUniforme" />
          <Input name="sexo" />
          </Scope>
          </div>
          <div id="Endereco" >
           <Scope path="endereco">
          <Input name="logradouro" />
          <Input name="numero" />
          <Input name="bairro" />
          <Input name="cidade" />
          <Input name="cep" />
          <Input name="complemento" />
          </Scope>
          </div>

          <div id="Documentacao">
          <Scope path="reservista">
          <Input name="numero" />
          <Input name="categoria" />
          </Scope>
          
          <Scope path="carteiraHabilitacao">
          <Input name="numero" />
          <Input name="categoria" />
          </Scope>
          <Scope path="CTPS">
          <Input name="numero" />
          <Input name="serie" />
          <Input name="uf" />
          </Scope>
          <Scope path="infoBancaria">
          <Input name="numBanco" />
          <Input name="banco" />
          <Input name="agencia" />
          <Input name="contaCorrente" />
          </Scope>
          </div>

          <button type="submit" >Enviar</button>
          </Form>
          </div>
 );
}