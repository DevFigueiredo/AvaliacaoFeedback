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


const useStyles = Global;

export default function Inicio() {

   

  //Puxa estilo do site
  const classes = useStyles();
  
  //Titulo do site
  const titulo = "Início"


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