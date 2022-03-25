import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar className='bar'>
                    <Typography className='title' variant="h6">
                       Prodigio
                    </Typography>
                    <Link className='text-decorator-none'to='/login'>
                            <Typography className='title' variant="h6" color="inherit">
                                Logout
                            </Typography>
                    </Link>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar