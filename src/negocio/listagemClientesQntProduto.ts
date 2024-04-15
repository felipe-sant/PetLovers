import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Listagem from "./listagem"

export default class ListagemClientesQntProduto extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log("Listagem de clientes e quantidade de produtos")
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado")
            return
        } else {
            let lista:Array<any> = []
            this.clientes.forEach(cliente => {
                let obj = {
                    nome: cliente.nome,
                    quantidadeProdutos: cliente.getProdutosConsumidos.length
                }
                lista.push(obj)
            })

            lista.sort((a, b) => {
                return b.quantidadeProdutos - a.quantidadeProdutos
            })

            console.log()

            lista.forEach((item, index) => {
                if (index < 10) {        
                    console.log(`| ${index + 1} - Nome: ${item.nome} | Quantidade de produtos consumidos: ${item.quantidadeProdutos} |`)
                }
            })
            
            const entrada = new Entrada()
            console.log()
            entrada.receberTexto("Pressione qualquer tecla para continuar...")
        }
    }
}