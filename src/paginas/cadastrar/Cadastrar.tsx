import React, { useEffect, useState, ChangeEvent } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Router, useHistory } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

import User from '../../models/Usuario';
import { cadastroUsuario } from '../../services/Service';
import FormControl from '@material-ui/core/FormControl';
import { FormLabel, InputLabel, Radio, RadioGroup } from '@material-ui/core';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import './Cadastrar.css'

// cosntante para o campo de data
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

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

  useEffect(() => {
    if (userResult.id !== 0) {
      history.push("/login")
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value

    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      console.log(user)
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)

      toast.success('Usuario cadastrado com sucesso', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      toast.error('Dados inconcistente. Favor vericar suas informações.', {
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

  //Estrutura do select

  return (
    <Grid className='style-cadastro' xs={12} >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <form onSubmit={onSubmit}> */}

            <Typography className='cadastro-title' component="h1" variant="h5">
              Cadastro
            </Typography>
            <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>

                  <TextField
                    value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    name="foto"
                    fullWidth
                    id="foto"
                    label="Link Foto"
                    autoFocus
                    required
                  />
                </Grid>
                <Grid item xs={12}>

                  <TextField
                    value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    autoComplete="given-name"
                    name="nome"
                    fullWidth
                    id="nome"
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
                    id="usuario"
                    label="Digite seu Email"
                    name="usuario"
                    autoComplete="email"
                    type='email'
                    placeholder='example@email.com'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    required
                    fullWidth
                    id="dataNascimento"
                    label="Data de Nascimento"
                    name="dataNascimento"
                    autoComplete=""
                    type='date'
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    placeholder='Minimo de 8 caracteres'
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
                    id="confirmarSenha"
                    autoComplete="new-password"
                    placeholder='Minimo de 8 caracteres'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">TIPO DE CONTA:</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="tipo"
                      name="tipo"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                      <FormControlLabel value="A" control={<Radio />} label="Aluno" />
                      <FormControlLabel value="P" control={<Radio />} label="Professor" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Link to=''>
                    <Typography>Termos e Condições de Uso</Typography>
                  </Link>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label=" Eu li e aceito os termos e condições de usuário."
                  />
                </Grid>
              </Grid>
              <Button className='botao-cadastrar'
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