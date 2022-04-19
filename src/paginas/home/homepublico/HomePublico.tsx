import { TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react'

import './HomePublico.css'

function HomePublico() {
    return (
        <>
            <Grid xs={12} className='banner'>
                <Box className='banner-alinhamento'>
                    <Box className='box-button'>
                        {/* <Typography variant="h3" gutterBottom className="h3" align="center" >Bem vindo(a)</Typography>
                        <Typography variant="h5" gutterBottom className="h5" align="center" >Bem vindo(a)</Typography> */}
                        <Box className="box-home">
                            <img src="https://cdn.discordapp.com/attachments/946051833481285672/965637973485965352/texto-06.png" />
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className="btn-home">
                                    Entrar
                                </Button>
                            </Link>
                        </Box>
                        <Box className="box-home">
                            <Link to='/cadastro' className='text-decorator-none'>
                                <Button variant='contained' className="btn-home">
                                    Crie sua conta
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid container xs={12} className='missao'>
                <Grid item xs={6} className='missao-video'>
                    <Box className='box-video'>
                        <iframe width="600" height="360" src="https://www.youtube.com/embed/ZSrhXP4-aec" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Box>
                </Grid>
                <Grid item xs={6} className='missao-texto'>
                    <Box className='m-texto'>
                        <h2>
                            A maior plataforma brasileira de aulas acessíveis do mundo.
                        </h2>
                        <p>
                            Agende sua aula com facilidade e com um valor que cabe no seu bolso.
                        </p>
                        <Button>
                            Veja como funciona
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className='e-a'>
                <img src="https://cdn.discordapp.com/attachments/946051833481285672/965689595146674206/amaury-06.png"></img>
            </Grid>


            <Grid container xs={12} className='ods'>
                <Grid item xs={5} className='ods-img'>
                    <img src='https://cdn.discordapp.com/attachments/956886634123649074/965687568341549106/amaurykk-06.jpg'>
                    </img>
                </Grid>
                <Grid item xs={7} className='ods-texto'>
                <Box className='ods-texto'>
                        <h2>
                            Nosso projeto foi baseado na ODS-4 da ONU
                        </h2>
                        <p>
                            Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover
                            oportunidades de aprendizagem ao longo da vida para todos.
                        </p>
                        <Button>
                            Conheça mais
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Grid container xs={12} className='Newsletter'>
                <Grid item xs={4}>
                    <Typography variant="h4">Receba nossas informações</Typography></Grid>

                <Grid item xs={4}>
                    <TextField
                        id='usuario' label='E-mail' type='email'
                        variant='outlined' name='usuario'
                        margin='normal' fullWidth
                        placeholder='example@email.com' /></Grid>

                <Grid item xs={4} className="news">
                    <Button variant='contained' className="btn-news">
                        <TelegramIcon className='icon-size'/>
                    </Button>
                </Grid>

            </Grid>


        </>
    )
}

export default HomePublico