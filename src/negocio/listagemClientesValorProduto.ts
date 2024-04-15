import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesValorProduto extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log("Listagem de clientes e valor de produtos")
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado")
            return
        } else {
            let lista:Array<any> = []
            this.clientes.forEach(cliente => {
                let obj = {
                    nome: cliente.nome,
                    valorProdutos: cliente.getProdutosConsumidos.reduce((acc, produto) => acc + produto.valor, 0)
                }
                lista.push(obj)
            })

            lista.sort((a, b) => {
                return b.valorProdutos - a.valorProdutos
            })

            console.log()

            lista.forEach((item, index) => {
                if (index < 10) {        
                    console.log(`| ${index + 1} - Nome: ${item.nome} | Valor de produtos consumidos: ${item.valorProdutos} |`)
                }
            })

            const entrada = new Entrada()
            console.log()
            entrada.receberTexto("Pressione qualquer tecla para continuar...")
        }
    }
}