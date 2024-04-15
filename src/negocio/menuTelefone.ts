import Menu from "./menu";

export default class MenuTelefone extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("---".repeat(10))
        console.log("Opções do Telefone:")
        console.log("1 - Cadastrar Telefone")
        console.log("2 - Listar Telefone")
        console.log("3 - Deletar Telefone")
        console.log("0 - Voltar")
        console.log("---".repeat(10))
    }
}