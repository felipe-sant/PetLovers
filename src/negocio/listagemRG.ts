import RG from "../modelo/rg";
import Listagem from "./listagem";

export default class ListagemRG extends Listagem {
    private rgs: Array<RG>
    constructor(rgs: Array<RG>) {
        super()
        this.rgs = rgs
    }

    public listar(): void {
        this.rgs.forEach(rg => {
            console.log("   "+"Valor: "+ rg.getValor)
            console.log("   "+"Data de Emissão: "+ rg.getDataEmissao.toLocaleDateString())
            console.log("   "+`-----------------------------------`);
        })
    }
}