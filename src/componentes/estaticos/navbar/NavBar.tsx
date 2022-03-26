import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <AppBar position="static" className='back'>
                    
                <Toolbar >
                    <Typography className='title ' variant="h4">
                      Prodigio
                    </Typography>

                    <Link className='text-decorator-none 'to='/login'>
                            <Typography className='title ' variant="h5" color="inherit">
                                Logout
                            </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar