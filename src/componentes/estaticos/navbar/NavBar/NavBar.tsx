import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './NavBar.css';



function NavBar() {

    return (
        <>
            <AppBar className="back-navbar" position="static">
                 
                        <Link className='text-decorator-none button-home-nav' to='/'>
                            <Typography className='logo-navbar' variant="h5">
                            <img src="https://cdn.discordapp.com/attachments/946051833481285672/965618151305936926/01_-_Logotipo_Prodigio.png" />
                            </Typography>
                        </Link >

            </AppBar>
        </>
    )

}
export default NavBar;