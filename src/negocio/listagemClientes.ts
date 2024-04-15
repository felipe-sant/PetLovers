import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import ListagemPets from "./listagemPets";
import ListagemRG from "./listagemRG";
import ListagemTelefone from "./listagemTelefone";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`--------------------------------------`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Data de emissão do CPF: ` + cliente.getCpf.getDataEmissao.toLocaleDateString());
            console.log(`RGs:`)
            let listagemRG = new ListagemRG(cliente.getRgs)
            listagemRG.listar()
            console.log("Telefones:")
            let listagemTelefone = new ListagemTelefone(cliente.getTelefones)
            listagemTelefone.listar()
            console.log(`Pets:`);
            let listagemPets = new ListagemPets(cliente.getPets)
            listagemPets.listar()
            let entrada = new Entrada()
            entrada.receberNumero("")
        });
    }
}