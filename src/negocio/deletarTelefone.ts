import Telefone from "../modelo/telefone";
import Deletar from "./deletar";

export default class DeletarTelefone extends Deletar {
    private telefone: Array<Telefone>
    private valorDeIdentificacao: string
    constructor(telefone: Array<Telefone>, valorDeIdentificacao: string) {
        super()
        this.telefone = telefone
        this.valorDeIdentificacao = valorDeIdentificacao
    }

    public deletar(): void {
        let telefone:Telefone|undefined = this.telefone.find(telefone => telefone.getNumero === this.valorDeIdentificacao)
        if (!telefone) {
            console.log(`\nTelefone não encontrado :(\n`)
            return
        }

        let indice = this.telefone.indexOf(telefone)
        this.telefone.splice(indice, 1)
    }
}