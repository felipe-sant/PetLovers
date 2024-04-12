import Menu from "./menu"

export default class MenuCliente extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("-=-".repeat(10))
        console.log(`Opções do Cliente:`)
        console.log(`1 - Cadastrar cliente`)
        console.log(`2 - Listar clientes`)
        console.log(`3 - Atualizar cliente`)
        console.log(`4 - Deletar cliente`)
        console.log(`0 - Voltar`)
        console.log("-=-".repeat(10))
    }
}