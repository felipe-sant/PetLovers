import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarProduto from "../negocio/atualizarProduto";
import atualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import DeletarCliente from "../negocio/deletarCliente";
import DeletarProduto from "../negocio/deletarProduto";
import DeletarServico from "../negocio/deletarServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import MenuCliente from "../negocio/menuCliente";
import MenuEmpresa from "../negocio/menuEmpresa";
import MenuProduto from "../negocio/menuProduto";
import MenuServico from "../negocio/menuServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()

let menuEmpresa = new MenuEmpresa()
while (menuEmpresa.execucao) {
    menuEmpresa.mostrarMenu()
    let entrada = new Entrada()
    let opcao = entrada.receberTexto(`Escolha uma opção: `)
    switch (opcao) {
        case '1':
            let menuCliente = new MenuCliente()
            while (menuCliente.execucao) {
                menuCliente.mostrarMenu()
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
                        menuCliente.execucao = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break;
        case "2":
            let menuProduto = new MenuProduto()
            while (menuProduto.execucao) {
                menuProduto.mostrarMenu()
                let entrada = new Entrada()
                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch (opcao) {
                    case 1:
                        let cadastro = new CadastroProduto(empresa.getProdutos)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let listar = new ListagemProdutos(empresa.getProdutos)
                        listar.listar()
                        break;
                    case 3:
                        let nomeAtualizar = entrada.receberTexto(`Por favor informe o nome do produto que deseja atualizar: `)
                        let atualizar = new AtualizarProduto(empresa.getProdutos, nomeAtualizar)
                        atualizar.atualizar()
                        break;
                    case 4:
                        let nomeDeletar = entrada.receberTexto(`Por favor informe o nome do produto que deseja deletar: `)
                        let deletar = new DeletarProduto(empresa.getProdutos, nomeDeletar)
                        deletar.deletar()
                        break;
                    case 0:
                        menuProduto.execucao = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case "3":
            let menuServico = new MenuServico()
            while (menuServico.execucao) {
                menuServico.mostrarMenu()
                let entrada = new Entrada()
                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
                switch (opcao) {
                    case 1:
                        let cadastro = new CadastroServico(empresa.getServicos)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let listar = new ListagemServicos(empresa.getServicos)
                        listar.listar()
                        break;
                    case 3:
                        let nomeAtualizar = entrada.receberTexto(`Por favor informe o nome do serviço que deseja atualizar: `)
                        let atualizar = new atualizarServico(empresa.getServicos, nomeAtualizar)
                        atualizar.atualizar()
                        break;
                    case 4:
                        let nomeDeletar = entrada.receberTexto(`Por favor informe o nome do serviço que deseja deletar: `)
                        let deletar = new DeletarServico(empresa.getServicos, nomeDeletar)
                        deletar.deletar()
                        break;
                    case 0:
                        menuServico.execucao = false
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
            }
            break
        case "0":
            menuEmpresa.execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}