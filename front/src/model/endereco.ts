export default class Endereco {
    private id?: number;
    public estado: string;
    public cidade: string;
    public bairro: string;
    public rua: string;
    public numero: string;
    public codigoPostal: string;
    public informacoesAdicionais?: string;

    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string, id: number)
    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string)
    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string)
    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais?: string, id?: number) {
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        if (informacoesAdicionais !== undefined) {
            this.informacoesAdicionais = informacoesAdicionais;
        }
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