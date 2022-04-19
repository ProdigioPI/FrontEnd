import React, { useState, useEffect } from 'react'
import { AppBar, Tab, Tabs, Typography, CardContent, Card, CardActions, Button } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
//import ListaPostagem from '../listapostagem/ListaPostagem';
//import ListaProduto from '../listaproduto/ListaProduto';
import Box from '@mui/material/Box';

import './TabProduto.css';

import ListaProdutos from '../listaProdutos/ListaProdutos';
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify'

import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'

function TabProduto() {
  const [value, setValue] = useState('1')
  const history = useHistory()
    
  const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
  )


  useEffect(() => {
      if (token == "") {
          toast.error("Você precisa estar logado", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          history.push("/login")

      }
  }, [token])
  const [produto, setProdutos] = useState<Produto[]>([])
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  async function getProduto(materia:number) {
   
    await busca(`/produto/materia/${materia}`, setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function getAll() {
   
    await busca(`/produto/all`, setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }
  function getPortuguês(){
    let materia = 1
    getProduto(materia)
  }
  function getGeografia(){
    let materia = 4
    getProduto(materia)
  }
  function getHistoria(){
    let materia = 3
    getProduto(materia)
  }
  function getFisica(){
    let materia = 7
    getProduto(materia)
  }
  function getQuimica(){
    let materia = 6
    getProduto(materia)
  }
  function getBiologia(){
    let materia = 5
    getProduto(materia)
  }
  function getMatematica(){
    let materia = 2
    getProduto(materia)
  }

  useEffect(() => {
    
  
  }, [produto.length])

  var produtoslista = produto.map(produto => (
    <Box m={4} className='tab-back'>
        <Card variant="outlined" className='tab-produto'>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    
                </Typography>
                <Typography className='produto-img'>
                  <img src={produto.foto}/>
                </Typography>
                <Typography variant="h5" component="h2" className="body3">
                    {produto.nomeMateria}
                </Typography>
                <Typography variant="body2" component="p">
                    {produto.descricao}
                </Typography>                               
                <Typography variant="body2" component="p">
                    {produto.agenda}
                </Typography>
                <Typography variant="body2" component="p">
                    Agende sua aula por: R$ {produto.valor}
                </Typography>
                <Typography variant="body2" className="body3" component="p">
                    {produto.categoria?.materia}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to={`/home/aluno`} className="text-decorator-none" >
                        <Box mx={1}>
                            <Button variant="contained" className="btn-compra" size='small' color="primary" >
                                Comprar
                            </Button>
                        </Box>
                    </Link>
                    <Link to={`/home/aluno`} className="text-decorator-none" >
                        <Box mx={1}>
                            <Button variant="contained" className="btn-compra" size='small' color="primary" >
                                Carrinho
                            </Button>
                        </Box>
                    </Link>
                    
                </Box>
            </CardActions>
        </Card>
    </Box>
))
  
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='back-produto'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            
            <Tab className="menu-tab" label="Português" onClick={getPortuguês} value="1" />
            <Tab className="menu-tab" label="Matemática" onClick={getMatematica} value="2" />
            <Tab className="menu-tab" label="História" onClick={getHistoria}value="3" />
            <Tab className="menu-tab" label="Geografia"onClick={getGeografia} value="4" />
            <Tab className="menu-tab" label="Biologia" onClick={getBiologia}value="5" />
            <Tab className="menu-tab" label="Química" onClick={getQuimica}value="6" />
            <Tab className="menu-tab" label="Fisíca"onClick={getFisica} value="7" />
            <Tab className="menu-tab" label="Todos os produtos" onClick={getAll} value="8" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center" style={{ margin: '5px' }}>
            {/* <ModalProduto/> */}
            
      
          </Box>
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
          {/* <Sobre/> */}
        </TabPanel>
        <TabPanel value="3">
          {/* <Sobre/> */}
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="4">
          {/* <Sobre/> */}
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="5">
          {/* <Sobre/> */}
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="6">
          {/* <Sobre/> */}
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="7">
          {/* <Sobre/> */}
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
        <TabPanel value="8">
          {/* <Sobre/> */}
          <Box display='flex' flexWrap='wrap' >
          {produtoslista}
            {/* <ListaProduto /> */}
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;