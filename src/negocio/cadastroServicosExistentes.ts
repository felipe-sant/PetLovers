import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroservicosExistentes extends Cadastro {
    private servicos: Array<Servico>
    private servicosExistentes: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>, todosServicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.servicosExistentes = todosServicos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        if (this.servicosExistentes.length === 0) {
            console.log(`\nNão existem servicos cadastrados\n`);
            return
        } else {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
            let servico = this.servicosExistentes.find(servico => servico.nome === nome)
            if (servico === undefined) {
                console.log("\nServico não encontrado\n")
                return
            } else {
                this.servicos.push(servico)
                console.log("Servico adicionado com sucesso")
            }
        }
    }
}