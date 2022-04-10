import React, { useState, useEffect } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import './ListaCategorias.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify';

function ListaCategorias() {
    const [categoria, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )


    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])
    let history = useHistory()
    
     
    async function getCategorias() {
        await busca(`/categoria/all`, setCategorias, { // esse campo /categorias/all é um espelho da esturutra do back
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategorias()
    }, [categoria.length])

    return (
        <>
            {
                categoria.map(categoria => (
                    <Box m={2} >
                        <Card variant="outlined" className='lista-categoria'>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Matéria
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {categoria.materia}
                                </Typography>
                                 <Typography variant="h5" component="h2">
                                    {categoria.areaDeEstudo}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="btn-compra" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="btn-compra" size='small' color="primary">
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