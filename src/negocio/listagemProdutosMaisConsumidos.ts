import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemProdutosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let todosProdutosConsumidos:Array<ProdutoQuantidade> = []

        this.clientes.forEach(cliente => {
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

        console.log("Listagem de produtos mais consumidos")
        todosProdutosConsumidos.sort((a, b) => b.quantidade - a.quantidade).forEach((produto, index) => {
            console.log(`| ${index + 1} - Nome: ${produto.produtoNome} | Quantidade: ${produto.quantidade} |`)
        })
    }
}