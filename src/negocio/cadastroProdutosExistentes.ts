import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProdutosExistentes extends Cadastro {
    private produtos: Array<Produto>
    private produtosExistentes: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>, todosProdutos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.produtosExistentes = todosProdutos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        if (this.produtosExistentes.length === 0) {
            console.log(`\nNão existem produtos cadastrados\n`);
            return
        } else {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
            let produto = this.produtosExistentes.find(produto => produto.nome === nome)
            if (produto === undefined) {
                console.log("\nProduto não encontrado\n")
                return
            } else {
                this.produtos.push(produto)
                console.log("Produto adicionado com sucesso")
            }
        }
    }
}