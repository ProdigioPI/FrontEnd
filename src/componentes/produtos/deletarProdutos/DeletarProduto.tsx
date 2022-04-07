import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';

function DeletarProduto() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
  )


  useEffect(() => {
      if (token == "") {
          alert('Você não está logado')
          history.push("/login")

      }
  }, [token])
    const [produto, setProdutos] = useState<Produto>()


    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produto/${id}`, setProdutos, {
            headers: {
              'Authorization': token
            }
          })
        }

        async function sim() {
            
          try{
            history.push('/produtos')
            await deleteId(`/produto/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Aula deletada com sucesso');
          }catch(error){
            alert('Error!! Ao Deletar Aula.')
          }
        }
          function nao() {
            history.push('/produtos')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom> 
                Deseja deletar a Produto:
              </Typography>
              <Typography color="textSecondary" >
              {produto?.nomeMateria}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProduto;