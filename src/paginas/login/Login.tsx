import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState, ChangeEvent } from 'react'
import useLocalStorage from "react-use-localstorage";
import UserLogin from '../../models/UsuarioLogin';
import { buscaId, login } from '../../services/Service';
import './Login.css'
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/action';
import { UserState } from '../../store/tokens/keysRedux';
import UsuarioLogin from '../../models/UsuarioLogin';
import { toast } from 'react-toastify';



function Login() {
    
    let history = useHistory();
    const dispatch = useDispatch();

    const [token, setToken] = useState('') // Criando configuração para usa o redux
    const [userLogin, setUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''

        }
    )
    // State para pegar os dados retornados a API

    const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        token: '',
        foto: ""
    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    useEffect(() => {
        if (respUserLogin.token !== "") {

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)
            

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history.push('/home')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)

            toast.success('Usuario logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        }
        catch(error){
            toast.error('Dados inconscientes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return (
        <Grid container className="background">
            <Grid item xs={12}>

                <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
                    <Box className="card" width={440} height="75vh" borderRadius={5}
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