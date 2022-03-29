import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Conteudo from '../../componentes/conteudo/Conteudo';
import NavItem from '../../componentes/estaticos/navItem/NavItem';
import GridItem from '../../componentes/gridItem/GridItem';
import Search from '../../componentes/search/Search';
import NavBar from '../../componentes/estaticos/navbar/NavBar';
import NavBarLogado from '../../componentes/estaticos/navbarlogado/NavBarLogado';
import CarouselHome from '../../componentes/carousel/CarouselHome';

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

    return (
        <div className={classes.root}>
            <Grid container spacing={2} >
                <Grid container spacing={0} >
                    <Grid item xs={4} >
                        <NavBar />
                    </Grid>
                    <Grid item xs={4}>
                        <Search />
                    </Grid>
                    <Grid item xs={4}>
                        <NavBarLogado />
                    </Grid>

                    <Grid item xs={12} >
                        <NavItem />
                    </Grid>

                    <Grid item xs={12}>
                        <CarouselHome />
                    </Grid>

                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={12} className="grid">
                    <GridItem />
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>

            </Grid>
        </div>
    );
}