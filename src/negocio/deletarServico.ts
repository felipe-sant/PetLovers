import Servico from "../modelo/servico";
import Deletar from "./deletar";

export default class DeletarServico extends Deletar {
    private servicos: Array<Servico>
    private nomeDeIdentificacao: string
    constructor(servicos: Array<Servico>, nomeDeIdentificacao: string) {
        super()
        this.servicos = servicos
        this.nomeDeIdentificacao = nomeDeIdentificacao
    }

    public deletar(): void {
        let servico:Servico|undefined = this.servicos.find(servico => servico.nome === this.nomeDeIdentificacao)
        if (!servico) {
            console.log(`\nServiço não encontrado :(\n`)
            return
        }

        let indice = this.servicos.indexOf(servico)
        this.servicos.splice(indice, 1)
    }
}