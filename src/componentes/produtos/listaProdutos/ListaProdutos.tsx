import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaProdutos.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify'
import Box from '@mui/material/Box';

function ListaProdutos() {

    const history = useHistory()
    const [produto, setProdutos] = useState<Produto[]>([])
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

    async function getProduto(){
        await busca("/produto/all", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProduto()
        
    }, [produto.length])

    return (
        <>
            {
                produto.map(produtos => (
                    <Box m={2}>
                        <Card variant="outlined" className='tab-produto'>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Aula:
                                </Typography>
                                <Typography className='produto-img' gutterBottom>
                                    <img src={produtos.foto} />
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.nomeMateria}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.descricao}
                                </Typography>                               
                                <Typography variant="body2" component="p">
                                    {produtos.agenda}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.valor}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.categoria?.materia}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="btn-compra" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
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
        </>)
}

export default ListaProdutos;