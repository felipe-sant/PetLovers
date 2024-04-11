import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/atualizarCliente";
import CadastroCliente from "../negocio/cadastroCliente";
import DeletarCliente from "../negocio/deletarCliente";
import ListagemClientes from "../negocio/listagemClientes";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Deletar cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let nomeAtualizar = entrada.receberTexto(`Por favor informe o nome do cliente que deseja atualizar: `)
            let atualizar = new AtualizarCliente(empresa.getClientes, nomeAtualizar)
            atualizar.atualizar()
            break;
        case 4:
            let nomeDeletar = entrada.receberTexto(`Por favor informe o nome do cliente que deseja deletar: `)
            let deletar = new DeletarCliente(empresa.getClientes, nomeDeletar)
            deletar.deletar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}