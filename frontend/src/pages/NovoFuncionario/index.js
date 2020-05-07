import React, {useRef, Component} from 'react';
//Importado os itens necessários para criar as divisoes do site
import { Container, Grid, Box, Paper, CssBaseline } from '@material-ui/core';
//Importado o Copyright do rodape do site
import Copyright from '../../components/Copyright';
//Importado o CSS Global do Site
import {Global} from '../../global';
import './style.css'
//Importado o icone de pessoa
import { BsFillPersonLinesFill, BsCreditCard } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

//Importado o Menu do site 
import NavbarMenu from '../../components/NavbarMenu/';
//Importado o componente que modifica o HEAD do site 
import {Helmet} from 'react-helmet';
//Importados as guias(tabs) 
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Importado o Unform da Rockeseat
import { Form } from '@unform/web';
import {Scope} from '@unform/core';
import Input from '../../components/Form/Input'
//Importado o yup para realizar validações no formulário
import * as Yup from 'yup';

//Importado o Botao do Formulário
import Button from '@material-ui/core/Button';
//Importado o Select Option de formularios do react-select para melhor experiencia
import Select from 'react-select'

const useStyles = Global;

export default function NovoFuncionario() {
  
  //Titulo do site
  const titulo = "Novo Funcionário"
  //Puxa estilo do site
  const classes = useStyles();



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


const [posicao, setPosicao] = React.useState(0);

const handleChange = (event, novaPosicao) => {
  setPosicao(novaPosicao);
  
if(novaPosicao==0){
  document.querySelector('#InfoPessoais').style="display:flex;";
  document.querySelector('#InfoPessoais').classList.add("form-row");
  document.querySelector('#Endereco').style="display:none";
  document.querySelector('#Documentacao').style="display:none";
}
if(novaPosicao==1){
  document.querySelector('#InfoPessoais').style="display:none";
  document.querySelector('#Endereco').style="display:flex";
  document.querySelector('#Documentacao').style="display:none";
}
if(novaPosicao==2){
  document.querySelector('#InfoPessoais').style="display:none";
  document.querySelector('#Endereco').style="display:none";
  document.querySelector('#Documentacao').style="display:flex";
}

};
const Departamentos = [
  {
    label: 'Departamentos',
    options: [ 
    { value: '1', label: 'Tele Atendimento'},
    { value: '2', label: 'Supervisão', isDisabled: true },
    { value: '3', label: 'Gestão', isDisabled: true },
    ],
  }];

  const Sexo = [
    {
      label: 'Sexo',
      options: [ 
      { value: 'M', label: 'Masculino'},
      { value: 'F', label: 'Feminino' },
      ],
    }];
  
    
  return (
    <div className={classes.root}>
<Helmet>
<title>{titulo}</title>
</Helmet>          
      {/* O CSS Baseline é para o MaterialUI manter as mudanças de css e responsividade do site*/}
      <CssBaseline />
      
       {/* Inserido o Menu do site */}
      <NavbarMenu titulo={titulo}/>
      {/* Todo o conteudo do site fica dentro do Main*/}        
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
  
     
        
        <Container maxWidth="lg" className={classes.container}>
            {/* GRID Container é como uma Div com a centralzação do container. "spacing" serve para espaçar abaixo da grid*/}
          <Grid container spacing={3}>
            
            <Grid item xs={12}  >
              <Paper className={classes.paper} >
                
      <Tabs
        value={posicao}
        onChange={handleChange}   
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<BsFillPersonLinesFill size={20} />} label="Perfil" />
        <Tab icon={<FaHome size={21} />} label="Endereço" />
        <Tab icon={<BsCreditCard size={20} />} label="Documentação" />
      </Tabs>


          {/*Formulário de Cadastro de tele atendente*/}
          <Form ref={formRef} onSubmit={handleSubmit}  >
           
         <div id="InfoPessoais" className="form-row animacao-direita">
         
         <div className="form-group col-12">

         <label>Departamento</label> 
         <Select name="departamento" options={Departamentos} />
         </div>

          <Scope path="infoPessoais" >
          <div className="form-group col-md-6 ">
          <label>Nome</label>
          <Input name="nome" className="form-control" />
          </div>
          
          <div className="form-group col-md-6">
          <label>Nascimento</label>
          <Input className="form-control" name="nascimento" />
          </div>
          
          <div className="form-group col-md-6 ">
          <label>E-Mail</label>
          <Input name="email" className="form-control" />
          </div>
          
          <div className="form-group col-md-2">
          <label>Vale Alimentação</label>
          <div className="input-group-prepend">
          <div className="input-group-text"><strong>R$</strong></div>
          <Input className="form-control" name="VA" />
          </div>  
          </div>
          
          <div className="form-group col-md-2 ">
          <label>Vale Transporte</label>
          <div className="input-group-prepend">
          <div className="input-group-text"><strong>R$</strong></div>
          <Input className="form-control" name="VT" />
          </div>  
          </div>
          

          <div className="form-group col-md-2 ">
          <label>Tam. Uniforme</label>
          <div className="input-group-prepend">
          <div className="input-group-text"><strong>Nº</strong></div>
          
          <Input className="form-control" name="tamUniforme" />
          </div>
          </div>

          <div className="form-group col-md-6">
          <label>RG</label>
          <Input className="form-control" name="rg" />
          </div>
          
          <div className="form-group col-md-6">
          <label>CPF</label>
          <Input className="form-control" id="standard-basic" name="cpf" />
          </div>
          
          
          <div className="form-group col-md-6">
          <label>Nome da Mãe</label>
          <Input className="form-control" name="nomeMae" />
          </div>
                    
          <div className="form-group col-6">
         <label>Sexo</label> 
         <Select name="departamento" options={Sexo} />
         </div>
          </Scope>
          
          </div>

          {/*Formulário do Endereço do TeleAtendente */}
          <div id="Endereco" className="form-row animacao-direita" style={{display: 'none'}}>
           <Scope path="endereco">
          
          <div className="form-group col-md-2">
          <label>CEP</label>
          <Input className="form-control" name="cep" />
          </div>

          <div className="form-group col-md-5">
          <label>Logradouro</label>
          <Input className="form-control" name="logradouro" />
          </div>
         
          <div className="form-group col-md-1">
          <label>Numero</label>
          <Input className="form-control" name="numero" />
          </div>
          
          <div className="form-group col-md-2">
          <label>Bairro</label>
          <Input className="form-control" name="bairro" />
          </div>
          
          <div className="form-group col-md-2">
          <label>Complemento</label>
          <Input className="form-control" name="complemento" />
          </div>        

          <div className="form-group col-md-6">
          <label>Ponto de Referencia</label>
          <Input className="form-control" name="pontoReferencia" />
          </div>

          <div className="form-group col-md-6">
          <label>Cidade</label>
          <Input className="form-control" name="cidade" />
          </div>

           </Scope>
          </div>

          <div id="Documentacao" className="form-row animacao-direita" style={{display: 'none'}}>
          
          <Scope path="documentacao">
          <div className="form-group col-md-4">
          <label>Reservista</label>
          <Input className="form-control" name="reservista" />
          </div>
          
          <div className="form-group col-md-4">
          <label>Habilitação</label>
          <Input className="form-control" name="habilitacao" />
          </div>
          
          <div className="form-group col-md-4">
          <label>Carteira de Trabalho</label>
          <Input className="form-control" name="carteiraTrabalho" />
          </div>
          </Scope>


          <Scope path="infoBancaria">
          
          <div className="form-group col-md-1">
          <label>Nº Banco</label>
          <Input className="form-control" name="numBanco" />
          </div>
          
          <div className="form-group col-md-4">
          <label>Banco</label>
          <Input className="form-control" name="banco" />
          </div>

          <div className="form-group col-md-2">
          <label>Agencia</label>
          <Input className="form-control" name="agencia" />
          </div>
          
          <div className="form-group col-md-5">
          <label>Conta corrente</label>
          <Input className="form-control" name="contaCorrente" />
          </div>
          </Scope>
          </div>
          <Button type="submit" className="btn btn-block" variant="contained" color="primary">
          <strong>CADASTRAR FUNCIONÁRIO</strong>
          </Button>
          </Form>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>

              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
          <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}