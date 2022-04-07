interface UsuarioLogin {

    id: number;
    nome: string;
    usuario: string;
    senha: string;
    tipo:string;
    foto: string;
    dataNascimento:string;
    token: string;
}

export default UsuarioLogin;