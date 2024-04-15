import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosMaisConsumidosPorPets extends Listagem {
    private clientes: Array<Cliente> 
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public listar(): void {
        let todosProdutosConsumidos:Array<ProdutoQuantidade> = []

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
            cliente.getProdutosConsumidos.forEach(produto => {
                let produtoConsumido = todosProdutosConsumidos.find(produtoConsumido => produtoConsumido.produtoNome === produto.nome)

                if (produtoConsumido) {
                    produtoConsumido.quantidade++
                } else {
                    todosProdutosConsumidos.push({
                        produtoNome: produto.nome,
                        quantidade: 1
                    })
                }
            })
        })

        console.log("Listagem de produtos mais consumidos por pets")

        todosProdutosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((produto, index) => {
            console.log(`| ${index + 1} - Nome: ${produto.produtoNome} | Quantidade: ${produto.quantidade} |`)
        })

        const entrada = new Entrada()
        console.log()
        entrada.receberTexto("Pressione qualquer tecla para continuar...")
    }
}