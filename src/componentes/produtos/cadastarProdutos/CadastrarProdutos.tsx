import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastrarProdutos.css';
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';

function CadastrarProdutos() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )


    useEffect(() => {
        if (token == "") {
            alert('Você não está logado')
            history.push("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            materia: '',
            areaDeEstudo: ''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nomeMateria: '',
        descricao: '',
        agenda: '',
        valor: 0,
        categoria: null
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria/all", setCategorias, { // Se não fosse o Erick
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try{
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Aula, atualizado com sucesso');
        }catch (error){
            alert('Error!! Ao Atualizar Aula')
        }
        } else {
            try{
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Aula cadastrada com sucesso');
        }catch (error){
            alert('Error!! A o cadastrar Aula')
        }
        }
        back()

    }

    function back() {
        history.push('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar Aula</Typography>
                <TextField value={produto.nomeMateria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nomeMateria" label="Assunto da Aula" variant="outlined" name="nomeMateria" margin="normal" fullWidth  required/>
                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth required/>
                <TextField value={produto.agenda} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="agenda" label="agenda" variant="outlined" name="agenda" margin="normal" fullWidth />
                <TextField value={produto.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="valor" label="valor" variant="outlined" name="valor" margin="normal" fullWidth required/>

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.materia}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastrarProdutos;