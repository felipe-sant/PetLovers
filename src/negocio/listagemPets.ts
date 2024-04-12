import Pet from "../modelo/pet";
import Listagem from "./listagem";

export default class ListagemPets extends Listagem {
    private pets: Array<Pet>
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
    }
    public listar(): void {
        this.pets.forEach(pet => {
            console.log("   "+`Nome: ` + pet.getNome);
            console.log("   "+`Tipo: ` + pet.getTipo);
            console.log("   "+`Raça: ` + pet.getRaca);
            console.log("   "+`Gênero: ` + pet.getGenero);
            console.log("   "+`-----------------------------------`);
        });11
        console.log(`\n`);
    }
}