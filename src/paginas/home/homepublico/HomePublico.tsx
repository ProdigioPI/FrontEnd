import { Box, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react'

import './HomePublico.css'

function HomePublico() {
    return (
        <>
            <Grid xs={12} className='banner'>
                <Box className='banner-alinhamento'>
                    <Box>
                        {/* <Typography variant="h3" gutterBottom className="h3" align="center" >Bem vindo(a)</Typography> */}
                        <Box className="box-home">
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className="btn-home">
                                    Login
                                </Button>
                            </Link>
                        </Box>
                        <Box className="box-home">
                            <Link to='/cadastro' className='text-decorator-none'>
                                <Button variant='contained' className="btn-home">
                                    Cadastre-se
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={12} className='missao'>
                <Box className='missao-texto'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                        Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                        Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                    </p>
                </Box>
            </Grid>

            <Grid container xs={12} className='equipe'>
                <Grid container item xs={12} className='equipe-1'>
                    <Grid item xs={3}><img src="https://www.childfundbrasil.org.br/blog/wp-content/uploads/2017/12/DSC0174.jpg" />
                        <a href='https://www.linkedin.com/in/aline-a-lopes/' target='blank'><Typography variant="h4">Aline</Typography></a></Grid>
                    <Grid item xs={3}><img src="https://www.childfundbrasil.org.br/blog/wp-content/uploads/2017/12/DSC0174.jpg" />
                        <a href='https://www.linkedin.com/in/amandacristinesoaresbarros16/' target='blank'><Typography variant="h4">Amanda</Typography></a></Grid>
                    <Grid item xs={3}><img src="https://i.imgur.com/F3WXQBf.png" />
                    <a href='https://www.linkedin.com/in/amaurywagner/' target='blank'><Typography variant="h4">Amaury</Typography></a></Grid>
                    <Grid item xs={3}><img src="https://i.imgur.com/N1kpzoB.png" />
                    <a href='https://www.linkedin.com/in/arthuritajahy/' target='blank'><Typography variant="h4">Arthur</Typography></a></Grid>
                </Grid>

                <Grid container item xs={12} className='equipe-2'>
                    <Grid item xs={3} ><img src="https://i.imgur.com/E12OOJh.png" />
                    <a href='https://www.linkedin.com/in/ferreiraerick/' target='blank'><Typography variant="h4">Erick</Typography></a></Grid>
                    <Grid item xs={3} ><img src="https://i.imgur.com/Fgl20ZE.png" />
                    <a href='https://www.linkedin.com/in/felipe-carvalho-fernandez/' target='blank'><Typography variant="h4">Felipe</Typography></a></Grid>
                    <Grid item xs={3} ><img src="https://i.imgur.com/wyM8RwD.png" />
                    <a href='https://www.linkedin.com/in/larysoul' target='blank'> <Typography variant="h4">Larissa</Typography></a></Grid>
                </Grid>
            </Grid>

            <Grid container xs={12} className='end-base'>
                <Grid item xs={12} className='parceiros'>
                    <img src="https://i.imgur.com/WGIk4u5.png" />
                </Grid>

                <Grid item xs={12} className='ods'>

                </Grid>

                <Grid item container xs={12} className='Newsletter'>
                    <Grid item xs={4}>
                        <Typography variant="h4">Newsletter</Typography></Grid>

                    <Grid item xs={4}>
                        <TextField
                            id='usuario' label='E-mail' type='email'
                            variant='outlined' name='usuario'
                            margin='normal' fullWidth
                            placeholder='example@email.com' /></Grid>

                    <Grid item xs={4} className="news">
                        <Button variant='contained' className="btn-news">
                            Assine
                        </Button>
                    </Grid>

                </Grid>
            </Grid>


        </>
    )
}

export default HomePublico