import Cliente from "../modelo/cliente";
import Deletar from "./deletar";

export default class DeletarCliente extends Deletar {
    private cliente: Array<Cliente>
    private nomeDeIdentificacao: string
    constructor(cliente: Array<Cliente>, nomeDeIdentificacao: string) {
        super()
        this.cliente = cliente
        this.nomeDeIdentificacao = nomeDeIdentificacao
    }

    public deletar(): void {
        let cliente:Cliente|undefined = this.cliente.find(cliente => cliente.nome === this.nomeDeIdentificacao)
        if (!cliente) {
            console.log(`\nCliente não encontrado :(\n`)
            return
        }

        let indice = this.cliente.indexOf(cliente)
        this.cliente.splice(indice, 1)
    }
}