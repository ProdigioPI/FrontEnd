import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup, Grid, TextField } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';


import SearchIcon from '@material-ui/icons/Search';
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';

import './NavBar.css';
import TabProduto from '../../../produtos/tabprodutos/TabProduto';


function NavBar() {

    return (
        <>
            <AppBar className="back-navbar" position="static">
                 
                        <Link className='text-decorator-none button-home-nav' to='/home'>
                            <Typography className='logo-navbar' variant="h5">
                            <img src="https://imgur.com/UNNxFgo.png" />
                            </Typography>
                        </Link >

            </AppBar>
        </>
    )

}
export default NavBar;