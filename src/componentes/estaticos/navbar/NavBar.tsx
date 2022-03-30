import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <AppBar position="static" className='back'>
                    
                <Toolbar style={{ backgroundColor: '#0a72c7', padding: '15px'}} >
                    <Link className='text-decorator-none' to='/home'>
                    <Typography className='title ' variant="h4">
                      Prodigio
                    </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar