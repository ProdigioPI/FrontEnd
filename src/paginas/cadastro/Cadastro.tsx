import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'

import "./Cadastro.css"
import { Link } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



function Cadastro() {
    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                    <Box className="card" width={340} height="50vh" borderRadius={5}
                        marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography className='form-title' variant="h4" align="center">
                                Cadastre-se
                            </Typography>

                            <form className='form'>

                                <Box marginY={4}>
                                    <TextField className='form-input' id="standard-basic" type="name" label="Nome Completo"  required />
                                </Box>

                                <Box marginY={4}>
                                    <TextField className='form-input' id="standard-basic" type="email" label="E-mail" required />
                                </Box>

                                <Box marginY={4}>
                                    <TextField className='form-input' id="standard-basic" type="date" label="" required />
                                </Box>

                                <Box marginY={4}>
                                    <TextField className='form-input' id="standard-basic" type="password" label="Senha" required />
                                </Box>

                                <Box marginY={4}>
                                    <TextField className='form-input' id="standard-basic" type="password" label="Confirmar Senha" required />
                                </Box>
                                <Box marginTop={2} textAlign='center'>
                                    <Link to='/login' className='text-decorator-none'>
                                        <Button variant="contained" color="secondary" className="botao">
                                            Cadastre-se
                                        </Button>
                                    </Link>
                                </Box>
                            </form>

                        </Box>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Cadastro