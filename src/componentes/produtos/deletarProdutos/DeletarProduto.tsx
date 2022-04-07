import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify';

function DeletarProduto() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
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
  const [produto, setProdutos] = useState<Produto>()


  useEffect(() => {
    if (id !== undefined) {
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

    try {
      history.push('/produtos')
      await deleteId(`/produto/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Aula deletada com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error('Error!! Ao Deletar Aula.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
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
                <Button onClick={nao} variant="contained" size='large' color="secondary">
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