import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log("Listagem de serviços")
        this.servicos.forEach(servico => {
            console.log("---".repeat(10));
            console.log(`Nome: ` + servico.nome)
        })
    }
}