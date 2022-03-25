import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Carrossel from '../../componentes/carrossel/Carrossel'
import Lista from '../../componentes/lista/Lista'

function Home() {
    return (
        <Grid container spacing={3}>
            <Grid item xs>
                <Box>xs</Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    <Carrossel />
                </Box>
            </Grid>
            <Grid item xs>
                <Box>xs</Box>
            </Grid>
        </Grid>
    )
}

export default Home