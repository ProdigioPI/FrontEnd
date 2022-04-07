import React, { useEffect, useState } from 'react';
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

import './NavAluno.css';
import TabProduto from '../../../produtos/tabprodutos/TabProduto';
import { addToken } from '../../../../store/tokens/action';
import { UserState } from '../../../../store/tokens/keysRedux';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { buscaId } from '../../../../services/Service';
import Usuario from '../../../../models/Usuario';

const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
    }),
);
function ImageAvatars() {
    const classes = useStyles1();
    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<Usuario>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        tipo:'',
        senha: '',
        foto: '',
        dataNascimento:''
    })
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])
    return (
        <div className={classes.root}>
            <Avatar alt="Perfil" src={user.foto} />
        </div>
    );
}

function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    


    const dispatch = useDispatch()
 
    let history = useHistory();


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    function goLogout() {
        dispatch(addToken(''))
        toast.info("Usuario deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    return (
        <>
            <Button className='text-decorator-none font-linkNavbar ' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link className='text-decorator-none' to='/home/aluno'>
                    <Typography className='font-menu-navbar icon-nav' variant="h5" >
                        Agenda
                    </Typography>
                </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className='text-decorator-none' to='/home/aluno'>
                        <Typography className='font-menu-navbar icon-nav' variant="h5" >
                           Professores
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className='text-decorator-none' to='/home/aluno'>
                        <Typography className='font-menu-navbar icon-nav' variant="h5" >
                            Configurações
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>

                    <Typography className='font-menu-navbar icon-nav text-decorator-none' onClick={goLogout} variant="h5" >
                        Sair
                    </Typography>

                </MenuItem>
               
            </Menu>
        </>
    );
}
function NavAluno() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    var navAluno
    if(token != ''){
         navAluno = <AppBar className="back-navbar" position="static">
        <Toolbar className="end-navbar">
         
                <Link className='text-decorator-none button-home-nav' to='/home/aluno'>
                    <Typography className='logo-navbar' variant="h5">
                    <img src="https://imgur.com/UNNxFgo.png" />
                    </Typography>
                </Link >

            <ImageAvatars />
            <SimpleMenu />
         
        </Toolbar>

    </AppBar>
    }
    return (
        <>
            {navAluno}
        </>
    )

}
export default NavAluno;