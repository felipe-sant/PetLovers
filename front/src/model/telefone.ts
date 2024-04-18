export default class Telefone {
    private id?: number;
    public ddd: string;
    public numero: string;

    constructor(ddd: string, numero: string, id: number)
    constructor(ddd: string, numero: string) 
    constructor(ddd: string, numero: string, id?: number) {
        this.ddd = ddd;
        this.numero = numero;
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