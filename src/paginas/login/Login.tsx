import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState, ChangeEvent } from 'react'
import useLocalStorage from "react-use-localstorage";
import UserLogin from '../../models/UsuarioLogin';
import { login } from '../../services/Service';

import './Login.css'


function Login() {


    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin]  = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            history.push('/home') //VERIFICAR COMO SERÃO PUXADOS OS PRODUTOS E HOME
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuario logado com sucesso!');

        }

        catch(error){
            alert('Dados inconscientes. Erro ao logar!');
        }
    }




    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                    <Box className="card" width={340} height="55vh" borderRadius={5}
                        marginTop={12} display="flex" justifyContent="center" alignItems="center">
                        <Box marginTop={4}>
                            <Typography className='form-title' variant="h4" align="center">
                                Login
                            </Typography>
                
                            <form onSubmit={onSubmit} className='form'>
                                <Box marginY={4}>
                                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' name='usuario' id="standard-basic" type="email" label="Email" required />
                                </Box>

                                <Box marginY={4}>
                                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' name='senha' id="standard-basic" type="password" label="Senha" required />
                                </Box>
                                <Box marginTop={2} textAlign='center'>
                                        <Button  type="submit" variant="contained" className="botao">
                                            Login
                                        </Button>
                                </Box>
                                

                                <Box marginTop={2} marginBottom={2} textAlign='center'>
                                    <Typography className='form-title' variant="h6" color="inherit">
                                        Você já tem sua conta?
                                    </Typography>
                                    <Link to='/cadastro' className='text-decorator-none'>
                                        <Typography className='text-link' variant="h5" color="inherit">
                                            cadastre-se
                                        </Typography>
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

export default Login