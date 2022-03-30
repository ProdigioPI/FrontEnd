import React, { useEffect, useState, ChangeEvent } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  {Link as Router, useHistory}  from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './Cadastrar.css'
import User from '../../models/Usuario';
import { cadastroUsuario } from '../../services/Service';

const theme = createTheme();

function Cadastrar() {
  

  let history = useHistory();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    tipo: '', 
    foto: '',
    dataNascimento: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    tipo: '', 
    foto: '',
    dataNascimento: ''
  })

  useEffect(()=> {
    if(userResult.id !== 0){
      history.push("/login")
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if(confirmarSenha === user.senha && user.senha.length >= 8){
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      console.log(user)

      alert('Usuario cadastro com sucesso')
    } else{
      alert('Dados inconcistente. Favor vericar suas informações.')
    }
  }



  return ( //
    <Grid className='style-cadastro' xs={12} >
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        {/* <form onSubmit={onSubmit}> */}

        <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                 value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  autoComplete="given-name"
                  name="nome"
                  fullWidth
                  id="firstName"
                  label="Nome Completo"
                  autoFocus
                  required
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                 value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  required
                  fullWidth
                  id="email"
                  label="Digite seu Email"
                  name="usuario"
                  autoComplete="email"
                  type='email'
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
               value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  required
                  fullWidth
                  id="date"
                  label=""
                  type="date"
                  name="dataNascimento"
                  autoComplete="date"
                  
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                 value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  required
                  fullWidth
                  name="senha"
                  label="Digite sua senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                  required
                  fullWidth
                  name="confirmarSenha"
                  label="Confirmar Senha"
                  type="password"
                  id="senha"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  value={user.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                  required
                  fullWidth
                  name="tipo"
                  label="Informe o tipo de conta:"
                  id="tipo"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Eu aceito vender minha alma e concordo com os termos."
                />
              </Grid>
            </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Cadastrar
                </Button>
            <Grid container justifyContent="flex-end">
            </Grid>
          </Box>

        {/* </form> */}
        </Box>

      </Container>
    </ThemeProvider>
    </Grid>
  );
}


export default Cadastrar;