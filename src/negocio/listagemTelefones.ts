import Telefone from "../modelo/telefone";
import Listagem from "./listagem";

export default class ListagemTelefone extends Listagem {
    private telefones: Array<Telefone>
    constructor(telefones: Array<Telefone>) {
        super()
        this.telefones = telefones
    }

    public listar(): void {
        this.telefones.forEach(telefone => {
            console.log("   "+"DDD: "+ telefone.getDdd)
            console.log("   "+"Número: "+ telefone.getNumero)
            console.log("   "+`-----------------------------------`);
        })
    }
}