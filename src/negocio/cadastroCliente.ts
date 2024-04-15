import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Pet from "../modelo/pet"
import Produto from "../modelo/produto"
import RG from "../modelo/rg"
import Servico from "../modelo/servico"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"
import CadastroPet from "./cadastroPet"
import CadastroProdutosExistentes from "./cadastroProdutosExistentes"
import CadastroRG from "./cadastroRG"
import CadastroservicosExistentes from "./cadastroServicosExistentes"
import CadastroTelefone from "./cadastroTelefone"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)

        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)

        let cpf: CPF
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        if (valor === '') {
            cpf = new CPF(valor, new Date())
        } else {
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            cpf = new CPF(valor, dataEmissao);
        }

        let rgs: Array<RG> = []
        while (true) {
            let cadastrarRG = new CadastroRG(rgs)
            cadastrarRG.cadastrar()
            let opcao = this.entrada.receberTexto("deseja registrar mais? (s/n) ")
            if (opcao.toLowerCase() != "s") {
                break
            }
        }

        let telefones: Array<Telefone> = []
        while (true) {
            let cadastrarTelefone = new CadastroTelefone(telefones)
            cadastrarTelefone.cadastrar()
            let opcao = this.entrada.receberTexto("deseja registrar mais? (s/n) ")
            if (opcao.toLowerCase() != "s") {
                break
            }
        }

        let pets: Array<Pet> = []
        let opcaoPet2 = this.entrada.receberTexto("Deseja registrar os pets? (s/n): ")
        if (opcaoPet2.toLocaleLowerCase() === "s") {
            while (true) {
                let cadastrarPet = new CadastroPet(pets)
                cadastrarPet.cadastrar()
                let opcao = this.entrada.receberTexto("deseja registrar mais? (s/n) ")
                if (opcao.toLocaleLowerCase() != "s") {
                    break
                }
            }
        }

        let produtosConsumidos: Array<Produto> = []
        while (true) {
            let cadastroProdutosExistentes = new CadastroProdutosExistentes(produtosConsumidos, this.produtos)
            cadastroProdutosExistentes.cadastrar()
            let opcao = this.entrada.receberTexto("deseja registrar mais? (s/n) ")
            if (opcao.toLowerCase() != "s") {
                break
            }
        }

        let servicosConsumidos: Array<Servico> = []
        while (true) {
            let cadastroServicosExistentes = new CadastroservicosExistentes(servicosConsumidos, this.servicos)
            cadastroServicosExistentes.cadastrar()
            let opcao = this.entrada.receberTexto("deseja registrar mais? (s/n) ")
            if (opcao.toLowerCase() != "s") {
                break
            }
        }

        let cliente = new Cliente(nome, nomeSocial, cpf);
        cliente.setRgs = rgs
        cliente.setTelefones = telefones
        cliente.setPets = pets
        cliente.setProdutosConsumidos = produtosConsumidos
        cliente.setServicosConsumidos = servicosConsumidos

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}