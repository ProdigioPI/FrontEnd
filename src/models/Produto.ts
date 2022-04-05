import Categoria from "./Categoria";

interface Produto {

    id: number;
    nomeMateria: string;
    descricao: string;
    agenda: string;
    valor: number;
    categoria?: Categoria | null;

}

export default Produto;