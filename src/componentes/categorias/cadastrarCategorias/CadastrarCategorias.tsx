import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useHistory, useParams } from 'react-router-dom'
import './CadastrarCategorias.css';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify'

function CadastrarCategorias() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
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
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        materia: '',
        areaDeEstudo: ''
    })

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
                try{
                    //console.log(categoria)
                    put(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Categoria atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                }catch(error){
                    toast.error('Erro ao Atulizar!!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                        progress: undefined,
                    });
                }
            } else {
                try{
                await post(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Materia cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                }catch(error){

                    toast.error('Erro ao cadastrar Materia', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                        progress: undefined,
                    });

                }
            }
            back()
    
        }
    
        function back() {
            history.push('/categorias')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadatrar Materia</Typography>
                <TextField value={categoria.materia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="materia" label="materia" variant="outlined" name="materia" margin="normal" fullWidth />
                <TextField value={categoria.areaDeEstudo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="areaDeEstudo" label="area de estudo" variant="outlined" name="areaDeEstudo" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastrarCategorias;