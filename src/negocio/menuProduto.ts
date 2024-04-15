import Menu from "./menu";

export default class MenuProduto extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("-=-".repeat(10))
        console.log(`Opções do Produto:`)
        console.log(`1 - Cadastrar produto`)
        console.log(`2 - Listar produtos`)
        console.log(`3 - Atualizar produto`)
        console.log(`4 - Deletar produto`)
        console.log(`0 - Voltar`)
        console.log("-=-".repeat(10))
    }
}