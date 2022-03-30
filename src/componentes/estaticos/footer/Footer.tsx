import { Typography, Box, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import React from "react";
import './Footer.css';



const Footer = () => {
    return (
        <Grid container className="foot-base">
            <Grid container className="foot-links">
                <Grid item xs={6}>
                    <Box>
                        <h5 className="title1">SOBRE NÓS:</h5>
                        <p>
                            Plataforma ecommerce que conecta alunos e tutores, 
                            por valores acessiveis a todos.
                            Promovendo educação de qualidade e alfabetização por
                            meio da técnologia. Saiba mais.
                        </p>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <h5 className="title2">Links</h5>
                    <Box display="flex" justifyContent="space-evenly">
                        <Box >
                            <ul className="list-unstyled">
                                <li className="list-unstyled">
                                    <a href="#!">Sobre nós</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Missão</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Equipe</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Metas ODS</a>
                                </li>
                            </ul>
                        </Box>
                        <Box>
                            <ul className="list-unstyled">
                                <li className="list-unstyled">
                                    <a href="#!">Contato</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Localização</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Parceiros</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Home</a>
                                </li>
                            </ul>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

            <Grid container className="footer-copyright">
            <Box>
            <Box display="flex" alignItems="center" justifyContent="center" padding={2} >
                                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                    <FacebookIcon className='foot-icons' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='foot-icons' />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='foot-icons' />
                                </a>  
                </Box>
                <Box className="foot-copy">
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://brasil.generation.org"> brasil.generation.org </a>
                </Box>
            </Box>
            </Grid>
        </Grid>
    );
}

export default Footer;