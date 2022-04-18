import React from "react";
import { Typography, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './FooterPublico.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import Box from '@mui/material/Box';



function FooterPublico(){


    return (
       <>
       
       <Grid container className="foot-base">
        <Grid container className="foot-links">
        <Grid item xs={4} className='foot-style'>
                <Box>
                    <h5 className="title2">Sobre nós</h5>
                    <p>
                        Plataforma ecommerce que conecta alunos e tutores, 
                        por valores acessiveis a todos.
                        Promovendo educação de qualidade e alfabetização por
                        meio da técnologia. Saiba mais.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={4} className='foot-style'>
                <Box>
                    <h5 className="title2">Objetivos</h5>
                    <p>
                        Plataforma ecommerce que conecta alunos e tutores, 
                        por valores acessiveis a todos.
                        Promovendo educação de qualidade e alfabetização por
                        meio da técnologia. Saiba mais.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={4} className='foot-style'>
                <h5 className="title2">Mais informações</h5>
                <Box display="flex" justifyContent="space-evenly" >
                    <Box>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a target="blank" href="#!">Sobre nós</a>
                            </li>
                            <li className="list-unstyled">
                                <a target="blank" href="#!">Missão</a>
                            </li>
                            <li className="list-unstyled">
                                <a target="blank" href="https://drive.google.com/file/d/1KlOAkowSvP1EZTWFOBKpUz7NcA3PMWBk/view?usp=sharing">Equipe</a>
                            </li>
                            <li className="list-unstyled">
                                <a target="blank" href="https://brasil.un.org/pt-br/sdgs">Metas ODS</a>
                            </li>
                        </ul>
                    </Box>
                    <Box>
                        <ul className="list-unstyled">
                            <li className="list-unstyled">
                                <a target="blank" href="#!">Contato</a>
                            </li>
                            <li className="list-unstyled">
                                <a target="blank" href="https://www.google.com/maps/@-23.5563475,-46.6624153,3a,82.2y,254.92h,94.93t/data=!3m6!1e1!3m4!1s7u_celO9m1h9hNP9MgUXOA!2e0!7i16384!8i8192">Localização</a>
                            </li>
                            <li className="list-unstyled">
                                <a target="blank" href="https://brazil.generation.org/">Parceiros</a>
                            </li>
                            <li className="list-unstyled">
                                <a target="blank" href="https://prodigio.netlify.app/">Home</a>
                            </li>
                        </ul>
                    </Box>
                </Box>

            </Grid>
        </Grid>

        <Grid container className="footer-copyright">
        <Box>
        <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
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
            <Box className="foot-copy" style={{paddingBottom: '30px'}}>
            Copyright &copy; {new Date().getFullYear()} | Todos os direitos reservados <a href="https://brasil.generation.org"> | Generation BR </a>
            </Box>
        </Box>
        </Grid>
    </Grid>
       </>
    );
}

export default FooterPublico;