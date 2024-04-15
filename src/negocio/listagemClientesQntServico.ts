import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesQntServico  extends Listagem{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log("Listagem de clientes e quantidade de serviços")
        if (this.clientes.length === 0) {
            console.log("Nenhum cliente cadastrado")
            return
        } else {
            let lista:Array<any> = []
            this.clientes.forEach(cliente => {
                let obj = {
                    nome: cliente.nome,
                    quantidadeServicos: cliente.getServicosConsumidos.length
                }
                lista.push(obj)
            })

            lista.sort((a, b) => {
                return b.quantidadeServicos - a.quantidadeServicos
            })

            console.log()

            lista.forEach((item, index) => {
                if (index < 10) {        
                    console.log(`| ${index + 1} - Nome: ${item.nome} | Quantidade de serviços consumidos: ${item.quantidadeServicos} |`)
                }
            })

            const entrada = new Entrada()
            console.log()
            entrada.receberNumero("Pressione qualquer tecla para continuar...")
        }
    }
}