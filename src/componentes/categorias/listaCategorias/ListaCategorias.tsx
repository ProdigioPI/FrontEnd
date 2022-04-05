import React, { useState, useEffect } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import './ListaCategorias.css';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';

function ListaCategorias() {
    const [categoria, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory()
    
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    
    async function getTema() {
        await busca(`/categoria`, setCategorias, { // esse campo /categorias/all é um espelho da esturutra do back
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [categoria.length])

    return (
        <>
            {
                categoria.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.materia}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}


export default ListaCategorias;