import Entrada from "../io/entrada";
import RG from "../modelo/rg";
import Cadastro from "./cadastro";

export default class CadastroRG extends Cadastro {
    private rgs: Array<RG>
    private entrada: Entrada
    constructor(rgs: Array<RG>) {
        super()
        this.rgs = rgs
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        let rg:RG
        let valor = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        if (valor === '') {
            console.log("rg invalido")
            return
        } else {
            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            let partesData = data.split('/')
            let ano = new Number(partesData[2].valueOf()).valueOf()
            let mes = new Number(partesData[1].valueOf()).valueOf()
            let dia = new Number(partesData[0].valueOf()).valueOf()
            let dataEmissao = new Date(ano, mes, dia)
            rg = new RG(valor, dataEmissao);
        }

        this.rgs.push(rg)
    }
}