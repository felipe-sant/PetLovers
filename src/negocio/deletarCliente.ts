import Cliente from "../modelo/cliente";
import Deletar from "./deletar";

export default class DeletarCliente extends Deletar {
    private clientes: Array<Cliente>
    private nomeDeIdentificacao: string
    constructor(cliente: Array<Cliente>, nomeDeIdentificacao: string) {
        super()
        this.clientes = cliente
        this.nomeDeIdentificacao = nomeDeIdentificacao
    }

    public deletar(): void {
        let cliente:Cliente|undefined = this.clientes.find(cliente => cliente.nome === this.nomeDeIdentificacao)
        if (!cliente) {
            console.log(`\nCliente não encontrado :(\n`)
            return
        }

        let indice = this.clientes.indexOf(cliente)
        this.clientes.splice(indice, 1)
    }
}