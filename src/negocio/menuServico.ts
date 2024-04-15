import Menu from "./menu";

export default class MenuServico extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("-=-".repeat(10))
        console.log(`Opções do Serviço:`)
        console.log(`1 - Cadastrar serviço`)
        console.log(`2 - Listar serviços`)
        console.log(`3 - Atualizar serviço`)
        console.log(`4 - Deletar serviço`)
        console.log(`0 - Voltar`)
        console.log("-=-".repeat(10))
    }
}