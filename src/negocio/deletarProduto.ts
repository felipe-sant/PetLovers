import Produto from "../modelo/produto";
import Deletar from "./deletar";

export default class DeletarProduto extends Deletar {
    private produtos: Array<Produto>
    private nomeDeIdentificacao: string
    constructor(produtos: Array<Produto>, nomeDeIdentificacao: string) {
        super()
        this.produtos = produtos
        this.nomeDeIdentificacao = nomeDeIdentificacao
    }

    public deletar(): void {
        let produto:Produto|undefined = this.produtos.find(produto => produto.nome === this.nomeDeIdentificacao)
        if (!produto) {
            console.log(`\nProduto não encontrado :(\n`)
            return
        }

        let indice = this.produtos.indexOf(produto)
        this.produtos.splice(indice, 1)
    }
}