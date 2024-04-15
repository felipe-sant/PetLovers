import Menu from "./menu";

export default class MenuEmpresa extends Menu {
    public execucao: boolean = true
    public mostrarMenu(): void {
        console.log("===".repeat(10))
        console.log(`Opções da Empresa:`)
        console.log(`1 - Clientes`)
        console.log(`2 - Produtos`)
        console.log(`3 - Serviços`)
        console.log(`0 - Sair`)
        console.log("===".repeat(10))
    }
}