import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualizar from "./atualizar";

export default class atualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private nomeDeIdentificacao: string
    private entrada: Entrada
    constructor(servicos: Array<Servico>, nomeDeIdentificacao: string) {
        super()
        this.servicos = servicos
        this.nomeDeIdentificacao = nomeDeIdentificacao
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let servico:Servico|undefined = this.servicos.find(servico => servico.nome === this.nomeDeIdentificacao)
        if (!servico) {
            console.log(`\nServiço não encontrado :(\n`)
            return
        }

        console.log(`\nAtualização do serviço ${servico.nome}`)

        let nome = this.entrada.receberTexto(`Informe o novo nome do serviço: `)
        if (nome === '') {
            nome = servico.nome
        }

        let novoServico = new Servico(nome)

        let indice = this.servicos.indexOf(servico)
        this.servicos[indice] = novoServico
    }
}