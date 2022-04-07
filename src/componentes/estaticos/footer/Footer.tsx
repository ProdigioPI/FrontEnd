import React from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';



function Footer(){
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    var footer
    if(token != ''){

        footer = <Grid container className="foot-base">
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
        
    }

    return (
       <>
       
            {footer}
       </>
    );
}

export default Footer;