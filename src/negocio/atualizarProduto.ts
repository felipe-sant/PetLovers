import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualizar from "./atualizar";

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>
    private nomeDeIdentificacao: string
    private entrada: Entrada
    constructor(produtos: Array<Produto>, nomeDeIdentificacao: string) {
        super()
        this.produtos = produtos
        this.nomeDeIdentificacao = nomeDeIdentificacao
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let produto:Produto|undefined = this.produtos.find(produto => produto.nome === this.nomeDeIdentificacao)
        if (!produto) {
            console.log(`\nProduto não encontrado :(\n`)
            return
        }

        console.log(`\nAtualização do produto ${produto.nome}`)

        let nome = this.entrada.receberTexto(`Informe o novo nome do produto: `)
        if (nome === '') {
            nome = produto.nome
        }

        let novoProduto = new Produto()
        novoProduto.nome = nome

        let indice = this.produtos.indexOf(produto)
        this.produtos[indice] = novoProduto
    }
}