import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemServicosMaisConsumidosPorPets extends Listagem {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        let todosServicosConsumidos:Array<ServicoQuantidade> = []

        let tipoPet = this.entrada.receberTexto("Digite o tipo de pet: ")
        let racaPet = this.entrada.receberTexto("Digite a raça do pet: ")

        let listaClientesComFiltro:Array<Cliente> = []
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                if (pet.getTipo === tipoPet && pet.getRaca === racaPet) {
                    if (!listaClientesComFiltro.includes(cliente)) {
                        listaClientesComFiltro.push(cliente)
                    }
                }
            })
        })

        listaClientesComFiltro.forEach(cliente => {
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

        console.log("Listagem de serviços mais consumidos por pets")

        todosServicosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((servico, index) => {
            console.log(`| ${index + 1} - Nome: ${servico.servicoNome} | Quantidade: ${servico.quantidade} |`)
        })

        const entrada = new Entrada()
        console.log()
        entrada.receberTexto("Pressione qualquer tecla para continuar...")
    }
}