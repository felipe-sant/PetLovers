import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let todosServicosConsumidos:Array<ServicoQuantidade> = []

        this.clientes.forEach(cliente => {
            cliente.getServicosConsumidos.forEach(servico => {
                let servicoConsumido = todosServicosConsumidos.find(servicoConsumido => servicoConsumido.servicoNome === servico.nome)

                if (servicoConsumido) {
                    servicoConsumido.quantidade++
                } else {
                    todosServicosConsumidos.push({
                        servicoNome: servico.nome,
                        quantidade: 1
                    })
                }
            })
        })

        console.log("Listagem de serviços mais consumidos")
        todosServicosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((servico, index) => {
            console.log(`| ${index + 1} - Nome: ${servico.servicoNome} | Quantidade: ${servico.quantidade} |`)
        })
    }
}