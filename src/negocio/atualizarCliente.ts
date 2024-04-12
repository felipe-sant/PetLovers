import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Atualizar from "./atualizar";
import MenuPet from "./menuPet";

export default class AtualizarCliente extends Atualizar {
    private cliente: Array<Cliente>
    private nomeDeIdentificacao: string
    private entrada: Entrada
    constructor(cliente: Array<Cliente>, nomeDeIdentificacao: string) {
        super()
        this.cliente = cliente
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

        let pets: Array<Pet> = cliente.getPets
        let opcao = this.entrada.receberTexto(`Deseja atualizar os pets do cliente? (s/n) `)
        if (opcao === 's') {
            let menuPet = new MenuPet()
            while (menuPet.execucao) {
                menuPet.mostrarMenu()
                let opcao = this.entrada.receberTexto(`Escolha uma opção: `)
                switch (opcao) {
                    case '1':
                        console.log("cadastrar pet")
                        break
                    case '2':
                        console.log("listar pet")
                        break
                    case '3':
                        console.log("atualizar pet")
                        break
                    case '4':
                        console.log("deletar pet")
                        break
                    case '0':
                        menuPet.execucao = false
                        break
                    default:
                        console.log("Opção não reconhecida")
                }
            }
        }

        let novoCliente = new Cliente(nome, nomeSocial, cpf)
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