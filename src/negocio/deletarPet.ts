import Pet from "../modelo/pet";
import Deletar from "./deletar";

export default class DeletarPet extends Deletar {
    private pet: Array<Pet>
    private nomeDeIdentificacao: string
    constructor(pet: Array<Pet>, nomeDeIdentificacao: string) {
        super()
        this.pet = pet
        this.nomeDeIdentificacao = nomeDeIdentificacao
    }

    public deletar(): void {
        let pet:Pet|undefined = this.pet.find(pet => pet.getNome === this.nomeDeIdentificacao)
        if (!pet) {
            console.log(`\nPet não encontrado :(\n`)
            return
        }

        let indice = this.pet.indexOf(pet)
        this.pet.splice(indice, 1)
    }
}