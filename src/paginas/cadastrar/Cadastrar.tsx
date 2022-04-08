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
    <Grid container className='back-cadastrar'>
      <ThemeProvider theme={theme}>
        <Grid item xs={12}>

          <Box display="flex"  marginRight={20} justifyContent="right" alignItems="center" >
            <Box className="card-cadastro" width={550} borderRadius={5}
              marginTop={4}  display="flex" justifyContent="center" alignItems="top">
              <Box>
                <Typography className='form-title' align="center">
                  Cadastre-se
                </Typography> 

                <form onSubmit={onSubmit} className='form-base'>
      
                  <Box marginY={2}>
                    <TextField
                      value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                      autoComplete="given-name"
                      name="nome"
                      fullWidth
                      id="nome"
                      label="Nome Completo"
                      autoFocus
                      required />
                  </Box>

                  <Box marginY={3}>
                    <TextField
                      value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                      required
                      fullWidth
                      id="usuario"
                      label="Digite seu Email"
                      name="usuario"
                      autoComplete="email"
                      type='email'
                      placeholder='example@email.com' />
                  </Box>

                  <Box marginY={3}>
                    <TextField
                      value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                      required
                      fullWidth
                      id="dataNascimento"
                      label="Data de Nascimento"
                      name="dataNascimento"
                      autoComplete=""
                      type='date'
                      InputLabelProps={{ shrink: true, }}/>
                  </Box>

                  <Box marginY={3}>
                    <TextField
                      value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                      name="foto"
                      fullWidth
                      id="foto"
                      label="Link Foto"
                      autoFocus
                      required />
                  </Box>

                  <Box marginY={3}>
                    <TextField
                      value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                      required
                      fullWidth
                      name="senha"
                      label="Digite sua senha"
                      type="password"
                      id="senha"
                      autoComplete="new-password"
                      placeholder='Minimo de 8 caracteres' />
                  </Box>

                  <Box marginY={3}>
                    <TextField
                      value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                      required
                      fullWidth
                      name="confirmarSenha"
                      label="Confirmar Senha"
                      type="password"
                      id="confirmarSenha"
                      autoComplete="new-password"
                      placeholder='Minimo de 8 caracteres'/>
                  </Box>

                  <Box marginY={2} textAlign='center' display="flex" justifyContent="center" alignItems="center">
                    <FormControl className='form-tipo'>
                      <FormLabel id="demo-radio-buttons-group-label">TIPO DE CONTA:</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label" defaultValue="tipo" name="tipo"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}>
                        <FormControlLabel value="A" control={<Radio />} label="Aluno" />
                        <FormControlLabel value="P" control={<Radio />} label="Professor" />
                      </RadioGroup>
                    </FormControl>
                  </Box>

                  <Box marginY={1} textAlign='center'>
                    <a href='https://drive.google.com/file/d/1VTt0NvYa2JbRKMeIzGRL6fUyz7kDhKCg/view?usp=sharing' id="link-termo">
                      <Typography>Termos e Condições de Uso</Typography>
                    </a>
                    <FormControlLabel className='caixa-termos'
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label=" Eu li e aceito os termos e condições de uso."/>
                  </Box>

                  <Box marginTop={2} textAlign='center'>
                    <Button className='botao-cadastrar'
                      type="submit"
                      fullWidth variant="contained" 
                      sx={{ mt: 3, mb: 2 }} >
                      Cadastrar
                    </Button>
                  </Box>
                  <Box marginTop={1} textAlign='center'>
                  <Link to='/login' className='text-decorator-none'>
                  <Button className='botao-voltar'
                      type="submit"
                      fullWidth variant="contained" 
                      sx={{ mt: 3, mb: 2 }} >
                      Voltar
                    </Button>
                  </Link>
                  </Box>

                </form>

              </Box>
            </Box>
          </Box>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}


export default Cadastrar;