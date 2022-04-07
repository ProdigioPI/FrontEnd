import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { UserState } from '../../store/tokens/keysRedux'

import { buscaId } from '../../services/Service'


import Usuario from '../../models/Usuario'
import { toast } from 'react-toastify';

function Home() {

    let history = useHistory()

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
        tipo: 'P',
        senha: '',
        foto: '',
        dataNascimento:''
    })

    useEffect(() => {
        if (token === "") {
           toast.error('você precisa estar logado', {
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

    useEffect(() => {
        if(user.tipo == 'P'){
            history.push('/home/professor')
        }
        if(user.tipo == 'A'){
            history.push('/home/aluno')
        }
    })

    // Métedo para pegar os dados de um Usuário especifico pelo ID
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
        <>
        
        
        </>
    )
}

export default Home