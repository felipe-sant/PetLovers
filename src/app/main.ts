import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
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
import ListagemClientesQntProduto from "../negocio/listagemClientesQntProduto";
import ListagemClientesQntServico from "../negocio/listagemClientesQntServico";
import ListagemClientesValorProduto from "../negocio/listagemClientesValorProduto";
import ListagemClientesValorServico from "../negocio/listagemClientesValorServico";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemProdutosMaisConsumidos from "../negocio/listagemProdutosMaisConsumidos";
import ListagemProdutosMaisConsumidosPorPets from "../negocio/listagemProdutosMaisConsumidosPorPets";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemServicosMaisConsumidos from "../negocio/listagemServicosMaisConsumidos";
import ListagemServicosMaisConsumidosPorPets from "../negocio/listagemServicosMaisConsumidosPorPet";
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
                        let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
                        cadastro.cadastrar()
                        break;
                    case 2:
                        let listagem = new ListagemClientes(empresa.getClientes)
                        listagem.listar()
                        break;
                    case 3:
                        let nomeAtualizar = entrada.receberTexto(`Por favor informe o nome do cliente que deseja atualizar: `)
                        let atualizar = new AtualizarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos, nomeAtualizar)
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
        case "4":
            let listagemClientesQntProduto = new ListagemClientesQntProduto(empresa.getClientes)
            listagemClientesQntProduto.listar()
            break
        case "5":
            let listagemClientesQntServico = new ListagemClientesQntServico(empresa.getClientes)
            listagemClientesQntServico.listar()
            break
        case "6":
            let listagemClientesValorProduto = new ListagemClientesValorProduto(empresa.getClientes)
            listagemClientesValorProduto.listar()
            break
        case "7":
            let listagemClientesValorServico = new ListagemClientesValorServico(empresa.getClientes)
            listagemClientesValorServico.listar()
            break
        case "8":
            let opcaoPC = entrada.receberTexto(`Deseja filtrar por tipo de pet? (s/n) `)
            if (opcaoPC === "s") {
                let listagemProdutosMaisConsumidosPorPets = new ListagemProdutosMaisConsumidosPorPets(empresa.getClientes)
                listagemProdutosMaisConsumidosPorPets.listar()
            } else if (opcaoPC === "n") {
                let listagemProdutosMaisConsumidos = new ListagemProdutosMaisConsumidos(empresa.getClientes)
                listagemProdutosMaisConsumidos.listar()
            } else {
                console.log(`\nOperação não entendida :(\n`)
            }
            break
        case "9":
            let opcaoSC = entrada.receberTexto(`Deseja filtrar por tipo de pet? (s/n) `)
            if (opcaoSC === "s") {
                let listagemServicosMaisConsumidosPorPets = new ListagemServicosMaisConsumidosPorPets(empresa.getClientes)
                listagemServicosMaisConsumidosPorPets.listar()
            } else if (opcaoSC === "n") {
                let listagemServicosMaisConsumidos = new ListagemServicosMaisConsumidos(empresa.getClientes)
                listagemServicosMaisConsumidos.listar()
            } else {
                console.log(`\nOperação não entendida :(\n`)
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