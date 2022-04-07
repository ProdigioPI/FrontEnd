import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarCategoria.css';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';


function DeletarCategoria() {
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
    const [categoria, setCategoria] = useState<Categoria>()


    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        async function sim() {
          try{
            
            await deleteId(`/categoria/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Materia deletado com sucesso.');
            history.push('/categorias')
          }catch(error){
            alert("Erro!! Ao Deletar Materia.")
          }
        }
        
          function nao() {
            history.push('/categoria')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Categoria:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.materia}
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
              <Box mx={2}>
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
export default DeletarCategoria;