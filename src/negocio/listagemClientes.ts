import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import ListagemPets from "./listagemPets";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Data de emissão do CPF: ` + cliente.getCpf.getDataEmissao.toLocaleDateString());
            console.log(`Pets:`);
            let listagemPets = new ListagemPets(cliente.getPets)
            listagemPets.listar()
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}