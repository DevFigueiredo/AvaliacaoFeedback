import React, {useRef} from 'react';
//Importado os itens necessários para criar as divisoes do site
import { Container, Grid, Box, Paper, CssBaseline } from '@material-ui/core';
//Importado o Copyright do rodape do site
import Copyright from '../../components/Copyright';
//Importado o CSS Global do Site
import {Global} from '../../global';
import '../../bootstrap.min.css'
import './style.css'
//Importado o Menu do site 
import NavbarMenu from '../../components/NavbarMenu/';
//Importado o componente que modifica o HEAD do site 
import {Helmet} from 'react-helmet';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

//Importado o Unform da Rockeseat
import { Form } from '@unform/web';
import {Scope} from '@unform/core';
import Input from '../../components/Form/Input'
//Importado o yup para realizar validações no formulário
import * as Yup from 'yup';


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
        <Tab icon={<PhoneIcon />} label="Perfil" />
        <Tab icon={<FavoriteIcon />} label="Endereço" />
        <Tab icon={<PersonPinIcon />} label="Documentação" />
      </Tabs>


          {/*Formulário de Cadastro de tele atendente*/}
          <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}  >
           
         <div id="InfoPessoais" className="form-row animacao-direita">
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
                    
          <div className="form-group col-md-6">
          <label>Sexo</label>
          <Input className="form-control" name="sexo" />
          </div>
          </Scope>
          
          </div>

          {/*Formulário do Endereço do TeleAtendente */}
          <div id="Endereco" className="form-row animacao-direita" style={{display: 'none'}}>
           <Scope path="endereco">
         
          <div className="form-group col-md-6">
          <label>Logradouro</label>
          <Input className="form-control" name="logradouro" />
          </div>
         
          <div className="form-group col-md-6">
          <label>Numero</label>
          <Input className="form-control" name="numero" />
          </div>
          
          <div className="form-group col-md-6">
          <label>Bairro</label>
          <Input className="form-control" name="bairro" />
          </div>
          
          <div className="form-group col-md-6">
          <label>Sexo</label>
          <Input className="form-control" name="cidade" />
          </div>
          
          <div className="form-group col-md-6">
          <label>CEP</label>
          <Input className="form-control" name="cep" />
          </div>

          <div className="form-group col-md-6">
          <label>Complemento</label>
          <Input className="form-control" name="complemento" />
          </div>        
           </Scope>
          </div>

          <div id="Documentacao" style={{display: 'none'}}>
          <Scope path="reservista">
          <Input className="form-control" name="numero" />
          <Input className="form-control" name="categoria" />
          </Scope>
          
          <Scope path="carteiraHabilitacao">
          <Input className="form-control" name="numero" />
          <Input className="form-control" name="categoria" />
          </Scope>
          <Scope path="CTPS">
          <Input className="form-control" name="numero" />
          <Input className="form-control" name="serie" />
          <Input className="form-control" name="uf" />
          </Scope>
          <Scope path="infoBancaria">
          <Input className="form-control" name="numBanco" />
          <Input className="form-control" name="banco" />
          <Input className="form-control" name="agencia" />
          <Input className="form-control" name="contaCorrente" />
          </Scope>
          </div>

          <button type="submit" >Enviar</button>
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