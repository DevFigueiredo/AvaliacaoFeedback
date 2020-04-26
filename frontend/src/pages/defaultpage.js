import React from 'react';
//Importado os itens necessários para criar as divisoes do site
import { Container, Grid, Box, Paper, CssBaseline } from '@material-ui/core';
//Importado o Copyright do rodape do site
import Copyright from '../../components/Copyright';
//Importado o CSS Global do Site
import {Global} from '../../global';
//Importado o Menu do site 
import NavbarMenu from '../../components/NavbarMenu/';
//Importado o componente que modifica o HEAD do site 
import {Helmet} from 'react-helmet';
//Importado o componente de criacao de tabelas
import MaterialTable from 'material-table';

const useStyles = Global;

export default function Funcionarios() {
  //Titulo do site
  const titulo = "Funcionários"

  //Criados os dados no estado da tabela atual
  const [Table, setTable] = React.useState({
    columns: [
      //Coluna do nome 
      { title: 'Nome', field: 'nome' },
      //Coluna do Sobrenome
      { title: 'Sobrenome', field: 'sobrenome' },
      //Coluna do Aniversário
      { title: 'Aniversário', field: 'aniversario', type: 'numeric' },
      //Coluna de cidade com apenas as opções de escolha
      { title: 'Cidade', field: 'cidade', 
        lookup: { 34: 'Caraguatatuba', 63: 'Ubatuba' },
      },
    ],
    data: [
      //Dados da Tabela
      { nome: 'Mehmet', sobrenome: 'Olaria', aniversario: 1987, cidade: 63 },
      { nome: 'Daniel', sobrenome: 'Miranda', aniversario: 1987, cidade: 63 },
      { nome: 'JAA', sobrenome: 'Soluções', aniversario: 1987, cidade: 63 },
      { nome: 'Fernanda', sobrenome: 'Caput', aniversario: 1987, cidade: 63 },
    ],
  });





  //Puxa estilo do site
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Helmet><title>{titulo}</title></Helmet>
         
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
            
            <Grid item xs={12} >
              <Paper>
              <MaterialTable
              
localization={
  {  
  toolbar:{
    searchTooltip: "Buscar",
    searchPlaceholder: "Buscar"
  },
  header: { actions: 'Opções'},
        body: {
            emptyDataSourceMessage: 'Sem resultados a mostrar',
              
              filterRow: {
                filterTooltip: 'Filtrar'
              }
        }
    }}

   options={{ addRowPosition: 'first'}}
    
     //Titulo da Tabela
      title="Frequencia Teles"
      //Dados da Coluna importado do estado criado acima Table
      columns={Table.columns}
      //Dados da tabela importado do estado criado acima da tabela.
      data={Table.data}
      //Opções de edição da tabela \/\/\/
      editable={{
        onRowAdd: (novosDadosTabela) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setTable((dadosAnterioresTabela) => {
                const data = [...dadosAnterioresTabela.data];
                data.push(novosDadosTabela);
                return { ...dadosAnterioresTabela, data };
              });
            }, 600);
          }),
        onRowUpdate: (novosDadosTabela, dadosAntigosTabela) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (dadosAntigosTabela) {
                setTable((dadosAnterioresTabela) => {
                  const data = [...dadosAnterioresTabela.data];
                  data[data.indexOf(dadosAntigosTabela)] = novosDadosTabela;
                  return { ...dadosAnterioresTabela, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (dadosAntigosTabela) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setTable((dadosAnterioresTabela) => {
                const data = [...dadosAnterioresTabela.data];
                data.splice(data.indexOf(dadosAntigosTabela), 1);
                return { ...dadosAnterioresTabela, data };
              });
            }, 600);
          }),
      }}
    
    />

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