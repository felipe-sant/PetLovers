import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Atualizar from "./atualizar";

export default class AtualizarPet extends Atualizar {
    private pet: Array<Pet>
    private nomeDeIdentificacao: string
    private entrada: Entrada
    constructor(pet: Array<Pet>, nomeDeIdentificacao: string) {
        super()
        this.pet = pet
        this.nomeDeIdentificacao = nomeDeIdentificacao
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let pet:Pet|undefined = this.pet.find(pet => pet.getNome === this.nomeDeIdentificacao)
        if (!pet) {
            console.log(`\nPet não encontrado :(\n`)
            return
        }

        console.log(`\nAtualização do pet ${pet.getNome}`)

        let nome = this.entrada.receberTexto(`Informe o novo nome do pet: `)
        if (nome === '') {
            nome = pet.getNome
        }

        let tipo = this.entrada.receberTexto(`Informe o novo tipo do pet: `)
        if (tipo === '') {
            tipo = pet.getTipo
        }

        let raca = this.entrada.receberTexto(`Informe a nova raça do pet: `)
        if (raca === '') {
            raca = pet.getRaca
        }

        let genero = this.entrada.receberTexto(`Informe o novo gênero do pet: `)
        if (genero === '') {
            genero = pet.getGenero
        }
        
        let novoPet = new Pet(nome, raca, genero, tipo);
        let indice = this.pet.indexOf(pet)
        this.pet[indice] = novoPet
    }
}