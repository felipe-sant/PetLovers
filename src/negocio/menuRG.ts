import Menu from "./menu";

export default class MenuRG extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("---".repeat(10))
        console.log("Opções do RG:")
        console.log("1 - Cadastrar RG")
        console.log("2 - Listar RG")
        console.log("3 - Deletar RG")
        console.log("0 - Voltar")
        console.log("---".repeat(10))
    }
}