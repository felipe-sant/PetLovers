import Menu from "./menu";

export default class MenuServicoExistente extends Menu {
    public execucao: boolean= true;
    public mostrarMenu(): void {
        console.log("---".repeat(10));
        console.log(`Opções do Serviço:`);
        console.log(`1 - Cadastrar serviço existente`);
        console.log(`2 - Listar serviços existentes`);
        console.log(`3 - Deletar serviço existente`);
        console.log(`0 - Voltar`);
        console.log("---".repeat(10));
    }
}