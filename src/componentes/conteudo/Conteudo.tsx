import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../models/Categoria';
import { useHistory } from 'react-router-dom';
import { busca } from '../../services/Service';
import Produto from '../../models/Produto';
import { toast } from 'react-toastify';


export default function ComplexGrid() {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      margin: 'auto',
      maxWidth: 400,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);
  const classes = useStyles()
  const [produto, setProdutos] = useState<Produto[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

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

    async function getProduto(){
        await busca("/produto/all", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProduto()
        
    }, [produto.length])
  return (
    <>
    {
                produto.map(produto => (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="http://localhost:3000/logo192.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {produto.nomeMateria}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {produto.agenda}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {produto.categoria}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{produto.valor}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>))
    }
    </>
  );
}