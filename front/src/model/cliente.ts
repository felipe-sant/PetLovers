import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Cliente {
    private id?: number;
    public nome: string;
    public nomeSocial: string;
    public email: string;
    public endereco: Endereco;
    public telefones: Array<Telefone>;

    constructor(nome: string, nomeSocial: string, email: string, endereco: Endereco, telefones: Array<Telefone>, id: number)
    constructor(nome: string, nomeSocial: string, email: string, endereco: Endereco, telefones: Array<Telefone>)
    constructor(nome: string, nomeSocial: string, email: string, endereco: Endereco, telefones: Array<Telefone>, id?: number) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.email = email;
        this.endereco = endereco;
        this.telefones = telefones;
        if (id !== undefined) {
            this.id = id;
        }
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
}