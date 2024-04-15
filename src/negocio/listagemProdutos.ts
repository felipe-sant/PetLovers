import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log("Listagem de produtos")
        this.produtos.forEach(produto => {
            console.log(`--------------------------------------`)
            console.log(`Nome: ` + produto.nome)
            let entrada = new Entrada()
            entrada.receberNumero("")
        })
    }
}