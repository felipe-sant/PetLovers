import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import Atualizar from "./atualizar";
import AtualizarPet from "./atualizarPet";
import CadastroPet from "./cadastroPet";
import CadastroProdutosExistentes from "./cadastroProdutosExistentes";
import CadastroRG from "./cadastroRG";
import CadastroservicosExistentes from "./cadastroServicosExistentes";
import CadastroTelefone from "./cadastroTelefone";
import DeletarPet from "./deletarPet";
import DeletarProduto from "./deletarProduto";
import DeletarRG from "./deletarRG";
import DeletarServico from "./deletarServico";
import DeletarTelefone from "./deletarTelefone";
import ListagemPets from "./listagemPets";
import ListagemProdutos from "./listagemProdutos";
import ListagemRG from "./listagemRG";
import ListagemServicos from "./listagemServicos";
import ListagemTelefone from "./listagemTelefones";
import MenuPet from "./menuPet";
import MenuProdutoExistente from "./menuProdutoExistente";
import MenuRG from "./menuRG";
import MenuServicoExistente from "./menuServicoExistente";
import MenuTelefone from "./menuTelefone";

export default class AtualizarCliente extends Atualizar {
    private cliente: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private nomeDeIdentificacao: string
    private entrada: Entrada
    constructor(cliente: Array<Cliente>, produtos: Array<Produto>, servicos:Array<Servico>, nomeDeIdentificacao: string) {
        super()
        this.cliente = cliente
        this.produtos = produtos
        this.servicos = servicos
        this.nomeDeIdentificacao = nomeDeIdentificacao
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let cliente:Cliente|undefined = this.cliente.find(cliente => cliente.nome === this.nomeDeIdentificacao)
        if (!cliente) {
            console.log(`\nCliente não encontrado :(\n`)
            return
        }

        console.log(`\nAtualização do cliente ${cliente.nome}`)

        let nome = this.entrada.receberTexto(`Informe o novo nome do cliente: `)
        if (nome === '') {
            nome = cliente.nome
        }

        let nomeSocial = this.entrada.receberTexto(`Informe o novo nome social do cliente: `)
        if (nomeSocial === '') {
            nomeSocial = cliente.nomeSocial
        }

        let cpf:CPF
        let valor = this.entrada.receberTexto(`Informe o novo número do cpf: `)
        if (valor === '') {
            cpf = cliente.getCpf
        } else {
            let data = this.entrada.receberTexto(`Informe a nova data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            cpf = new CPF(valor, dataEmissao);
        }

        let rgs: Array<RG> = cliente.getRgs
        let opcaoRG = this.entrada.receberTexto(`Deseja atualizar os RGs do cliente? (s/n) `)
        if (opcaoRG == "s") {
            let menuRG = new MenuRG()
            while (menuRG.execucao) {
                menuRG.mostrarMenu()
                let opcao = this.entrada.receberTexto("Escolha uma opção: ")
                switch (opcao) {
                    case "1":
                        console.log("\nInicio do cadastro de RG")
                        let cadastro = new CadastroRG(rgs)
                        cadastro.cadastrar()
                        break
                    case "2":
                        console.log("\nLista de todos os RGs:")
                        let listagem = new ListagemRG(rgs)
                        listagem.listar()
                        break
                    case "3":
                        let valorDeletar = this.entrada.receberTexto("Por favor informe o valor do RG que deseja deletar: ")
                        let deletar = new DeletarRG(rgs, valorDeletar)
                        deletar.deletar()
                        break
                    case "0":
                        menuRG.execucao = false
                        break
                    default:
                        console.log("Opção não reconhecida")
                }
            }
        }
        
        let telefones: Array<Telefone> = cliente.getTelefones
        let opcaoTelefone = this.entrada.receberTexto(`Deseja atualizar os telefones do cliente? (s/n) `)
        if (opcaoTelefone === 's') {
            let menuTelefone = new MenuTelefone()
            while (menuTelefone.execucao) {
                menuTelefone.mostrarMenu()
                let opcao = this.entrada.receberTexto(`Escolha uma opção: `)
                switch (opcao) {
                    case '1':
                        console.log(`\nInício do cadastro do telefone`);
                        let cadastro = new CadastroTelefone(telefones)
                        cadastro.cadastrar()
                        break
                    case '2':
                        console.log(`\nLista de todos os telefones:`);
                        let listagem = new ListagemTelefone(telefones)
                        listagem.listar()
                        break
                    case '3':
                        let numeroDeletar = this.entrada.receberTexto(`Por favor informe o número do telefone que deseja deletar: `)
                        let deletar = new DeletarTelefone(telefones, numeroDeletar)
                        deletar.deletar()
                        break
                    case '0':
                        menuTelefone.execucao = false
                        break
                    default:
                        console.log("Opção não reconhecida")
                }
            }
        }

        let pets: Array<Pet> = cliente.getPets
        let opcaoPet = this.entrada.receberTexto(`Deseja atualizar os pets do cliente? (s/n) `)
        if (opcaoPet === 's') {
            let menuPet = new MenuPet()
            while (menuPet.execucao) {
                menuPet.mostrarMenu()
                let opcao = this.entrada.receberTexto(`Escolha uma opção: `)
                switch (opcao) {
                    case '1':
                        console.log(`\nInício do cadastro do pet`);
                        let cadastro = new CadastroPet(pets)
                        cadastro.cadastrar()
                        break
                    case '2':
                        console.log(`\nLista de todos os pets:`);
                        let listagem = new ListagemPets(pets)
                        listagem.listar()
                        break
                    case '3':
                        let nomeAtualizar = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja atualizar: `)
                        let atualizar = new AtualizarPet(pets, nomeAtualizar)
                        atualizar.atualizar()
                        break
                    case '4':
                        let nomeDeletar = this.entrada.receberTexto(`Por favor informe o nome do pet que deseja deletar: `)
                        let deletar = new DeletarPet(pets, nomeDeletar)
                        deletar.deletar()
                        break
                    case '0':
                        menuPet.execucao = false
                        break
                    default:
                        console.log("Opção não reconhecida")
                }
            }
        }

        let produtosConsumidos: Array<Produto> = cliente.getProdutosConsumidos
        let opcaoPC = this.entrada.receberTexto(`Deseja atualizar os produtos consumidos pelo cliente? (s/n) `)
        if (opcaoPC === 's') {
            let menuProdutoExistente = new MenuProdutoExistente()
            while (menuProdutoExistente.execucao) {
                menuProdutoExistente.mostrarMenu()
                let opcao = this.entrada.receberTexto(`Escolha uma opção: `)
                switch (opcao) {
                    case '1':
                        console.log(`\nInício do cadastro do produto`);
                        let cadastro = new CadastroProdutosExistentes(produtosConsumidos, this.produtos)
                        cadastro.cadastrar()
                        break
                    case '2':
                        console.log(`\nLista de todos os produtos consumidos:`);
                        let listagem = new ListagemProdutos(produtosConsumidos)
                        listagem.listar()
                        break
                    case '3':
                        let nomeDeletar = this.entrada.receberTexto(`Por favor informe o nome do produto que deseja deletar: `)
                        let deletar = new DeletarProduto(produtosConsumidos, nomeDeletar)
                        deletar.deletar()
                        break
                    case '0':
                        menuProdutoExistente.execucao = false
                        break
                    default:
                        console.log("Opção não reconhecida")
                }
            } 
        }

        let servicosConsumidos = cliente.getServicosConsumidos
        let opcaoSC = this.entrada.receberTexto(`Deseja atualizar os serviços consumidos pelo cliente? (s/n) `)
        if (opcaoSC === 's') {
            let menuServico = new MenuServicoExistente()
            while (menuServico.execucao) {
                menuServico.mostrarMenu()
                let opcao = this.entrada.receberTexto(`Escolha uma opção: `)
                switch (opcao) {
                    case '1':
                        console.log(`\nInício do cadastro do serviço`);
                        let cadastro = new CadastroservicosExistentes(servicosConsumidos, this.servicos)
                        cadastro.cadastrar()
                        break
                    case '2':
                        console.log(`\nLista de todos os serviços consumidos:`);
                        let listagem = new ListagemServicos(servicosConsumidos)
                        listagem.listar()
                        break
                    case '3':
                        let nomeDeletar = this.entrada.receberTexto(`Por favor informe o nome do serviço que deseja deletar: `)
                        let deletar = new DeletarServico(servicosConsumidos, nomeDeletar)
                        deletar.deletar()
                        break
                    case '0':
                        menuServico.execucao = false
                        break
                    default:
                        console.log("Opção não reconhecida")
                }
            } 
        }

        let novoCliente = new Cliente(nome, nomeSocial, cpf)
        novoCliente.setRgs = rgs
        novoCliente.setTelefones = telefones
        novoCliente.setPets = pets
        novoCliente.setProdutosConsumidos = produtosConsumidos
        novoCliente.setServicosConsumidos = servicosConsumidos

        let indice = this.cliente.indexOf(cliente)
        this.cliente[indice] = novoCliente
    }

    get nome():string {
        return this.nomeDeIdentificacao
    }

    set nome(nome: string) {
        this.nomeDeIdentificacao = nome
    }
}