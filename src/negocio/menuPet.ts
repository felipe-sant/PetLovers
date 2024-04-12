import Menu from "./menu";

export default class MenuPet extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("---".repeat(10))
        console.log(`Opções do Pet:`)
        console.log(`1 - Cadastrar pet`)
        console.log(`2 - Listar pets`)
        console.log(`3 - Atualizar pet`)
        console.log(`4 - Deletar pet`)
        console.log(`0 - Voltar`)
        console.log("---".repeat(10))
    }
}