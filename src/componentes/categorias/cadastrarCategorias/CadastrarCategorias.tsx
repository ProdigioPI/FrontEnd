import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useHistory, useParams } from 'react-router-dom'
import './CadastrarCategorias.css';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';


function CadastrarCategorias() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        materia: '',
        areaDeEstudo: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria" + JSON.stringify(categoria))
    
            if (id !== undefined) {
                console.log(categoria)
                put(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria atualizado com sucesso');
            } else {
                post(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            history.push('/categorias')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={categoria.materia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="materia" label="materia" variant="outlined" name="materia" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastrarCategorias;