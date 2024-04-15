import Menu from "./menu";

export default class MenuProdutoExistente extends Menu {
    public execucao: boolean = true;
    public mostrarMenu(): void {
        console.log("---".repeat(10));
        console.log(`Opções do Produto:`);
        console.log(`1 - Cadastrar produto existente`);
        console.log(`2 - Listar produtos existentes`);
        console.log(`3 - Deletar produto existente`);
        console.log(`0 - Voltar`);
        console.log("---".repeat(10));
    }
}