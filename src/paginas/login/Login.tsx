import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'

import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Grid container className="background">
      <Grid item xs={12}>

        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <Box className="card" width={340} height="50vh" borderRadius={5} 
                marginTop={12} display="flex" justifyContent="center" alignItems="center">
            <Box>
              <Typography className='form-title' variant="h4" align="center">
                Login
              </Typography>

              <form className='form'>
                <Box marginY={4}>
                  <TextField className='form-input' id="standard-basic" type="email" label="Email" required />
                </Box>

                <Box marginY={4}>
                  <TextField  className='form-input' id="standard-basic" type="password" label="Senha" required />
                </Box>
                <Box marginTop={2} textAlign='center'>
                    <Link to='/home' className='text-decorator-none'>
                    <Button variant="contained" color="secondary" className="botao">  
                    Login
                    </Button>
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