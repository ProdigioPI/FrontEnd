import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridItem from '../../../componentes/gridItem/GridItem';
import NavBar from '../../../componentes/estaticos/navbar/navbarAluno/NavAluno';
import CarouselHome from '../../../componentes/carousel/CarouselHome';
import TabProduto from '../../../componentes/produtos/tabprodutos/TabProduto';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);


export default function CenteredGrid() {
    const classes = useStyles();
    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )


    useEffect(() => {
        if (token == "") {
            toast.error('Você não está logado', {
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

    return (
        <div className={classes.root}>

            <Grid container spacing={2} >
                <NavBar />
                <Grid container spacing={0} >

                    <Grid item xs={12}>
                        <CarouselHome />
                    </Grid>

                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={12} className="grid">
                    <TabProduto />
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

            </Grid>
        </div>
    );
}