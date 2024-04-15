import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
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
import ListagemServicos from "../negocio/listagemServicos";
import MenuCliente from "../negocio/menuCliente";
import MenuEmpresa from "../negocio/menuEmpresa";
import MenuProduto from "../negocio/menuProduto";
import MenuServico from "../negocio/menuServico";

let produto1 = new Produto("produto1")
produto1.valor = 13.5
let produto2 = new Produto("produto2")
produto2.valor = 15.5
let produto3 = new Produto("produto3")
produto3.valor = 20.5
let produto4 = new Produto("produto4")
produto4.valor = 10.5
let produto5 = new Produto("produto5")
produto5.valor = 30.5

let produtos:Array<Produto> = [
    produto1,
    produto2,
    produto3,
    produto4,
    produto5
]

let servico1 = new Servico("servico1")
servico1.valor = 13.5
let servico2 = new Servico("servico2")
servico2.valor = 15.5
let servico3 = new Servico("servico3")
servico3.valor = 20.5
let servico4 = new Servico("servico4")
servico4.valor = 10.5
let servico5 = new Servico("servico5")
servico5.valor = 30.5

let servicos:Array<Servico> = [
    servico1,
    servico2,
    servico3,
    servico4,
    servico5
]

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()

empresa.setProdutos = produtos
empresa.setServicos = servicos

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
        case "0":
            menuEmpresa.execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}