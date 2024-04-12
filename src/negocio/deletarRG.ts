import RG from "../modelo/rg";
import Deletar from "./deletar";

export default class DeletarRG extends Deletar {
    private rg: Array<RG>
    private valorDeIdentificacao: string
    constructor(rg: Array<RG>, valorDeIdentificacao: string) {
        super()
        this.rg = rg
        this.valorDeIdentificacao = valorDeIdentificacao
    }

    public deletar(): void {
        let rg:RG|undefined = this.rg.find(rg => rg.getValor === this.valorDeIdentificacao)
        if (!rg) {
            console.log(`\nRG não encontrado :(\n`)
            return
        }

        let indice = this.rg.indexOf(rg)
        this.rg.splice(indice, 1)
    }
}