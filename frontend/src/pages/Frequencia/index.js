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

export default function Frequencia() {

   
  //Criados os dados no estado da tabela atual
  const [Table, setTable] = React.useState({
    columns: [
      //Colunas da tabela
      { title: 'Data', field: 'data', type: 'date', initialEditValue:new Date(), headerStyle: {fontWeight: 'bold'} },
      
      { title: 'Subordinado', field: 'subordinado', headerStyle: {fontWeight: 'bold'},
      options: {sorting: true},
      lookup: { 1: 'Pessoa 1', 2: 'Pessoa 2', 3: 'Pessoa 3', 4: 'Pessoa 4', 5: 'Pessoa 5', 6: 'Pessoa 6', 7: 'Pessoa 7' },
      },
      
      { title: 'Tipo', field: 'tipo', headerStyle: {fontWeight: 'bold'},
      lookup: { 1: 'Grave', 2: 'Médio', 3:'Leve', 4:'Outro' },
      },
     
      //Coluna com apenas opções de escolha
      { title: 'Expediente', field: 'expediente', headerStyle: {fontWeight: 'bold'}, 
        lookup: { 1: '08h00/16h00', 2: '12h00/20h00' },
      },
      { title: 'Ocorrencia', field: 'ocorrencia', headerStyle: {fontWeight: 'bold'} },
      //Coluna com apenas as opções de escolha
      { title: 'Supervisor', field: 'supervisor', headerStyle: {fontWeight: 'bold'}, 
        lookup: { 1: 'Daniel Miranda', 2: 'Vanessa Paixão' },
      },
    ],
    data: [
      //Dados da Tabela
      {data: '2020/04/29', tipo: 4, subordinado: 1, expediente: 1,ocorrencia: 'Colocou o pente no cabelo', supervisor: 1 },
    ],
  });





  //Puxa estilo do site
  const classes = useStyles();
  
  //Titulo do site
  const titulo = "Frequência"


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
 
  pagination:{
    labelRowsSelect: 'Linhas',
    labelRowsPerPage: 'Linhas por Página',
    firstAriaLabel: 'Primeira Página',
    firstTooltip: 'Primeira Página',
    previousAriaLabel:'Página Anteiror',
    previousTooltip: 'Página Anterior',
    nextAriaLabel: 'Próxima Página',
    nextTooltip: 'Próxima Página',
    lastAriaLabel: 'Última Página',
    lastTooltip: 'Última Página',

  },
  toolbar:{
    searchTooltip: "Buscar",
    searchPlaceholder: "Buscar",
    exportAriaLabel:"Exportar",
    exportTitle: "Exportar",
    exportName: "Exportar Excel",

  },
  header: { actions: 'Opções'},
        body: {
          addTooltip: 'Adicionar',
          deleteTooltip: 'Excluir',
          editTooltip: 'Editar',
          editRow:{
            cancelTooltip:'Cancelar',
            saveTooltip: 'Salvar',
            deleteText: 'Você tem certeza que irá excluir ?'
          },
            emptyDataSourceMessage: 'Sem resultados a mostrar',
              filterRow: {
                filterTooltip: 'Filtrar'
              }
        }
        
  }}

   options={{
    addRowPosition: 'first',
    exportAllData: true, 
    exportButton: true, 
    exportFileName: 'Frequencia',
    pageSize: 11,
    pageSizeOptions: [5, 10, 11, 12, 15, 20, 30],
    paginationType:'stepped',
    exportCsv: ()=>{
   //Criar um post com o axios enviando o Topo e Conteudo com Json para exportar a planilha
   }
  }}
    
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