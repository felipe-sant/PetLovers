import Entrada from "../io/entrada";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroTelefone extends Cadastro {
    private telefones: Array<Telefone>
    private entrada: Entrada
    constructor(telefones: Array<Telefone>) {
        super()
        this.telefones = telefones
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let telefone:Telefone

        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
        if (ddd === '') {
            console.log("DDD inválido")
            return
        }

        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
        if (numero === '') {
            console.log("Número inválido")
            return
        }

        telefone = new Telefone(ddd, numero);

        this.telefones.push(telefone)
    }
}