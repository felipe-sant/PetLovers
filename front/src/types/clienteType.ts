import { EnderecoType } from "./enderecoType"
import { TelefoneType } from "./telefoneType"

export type ClienteType = {
    id: number | undefined,
    nome: string,
    nomeSocial: string,
    email:string,
    endereco: EnderecoType,
    telefones: TelefoneType[]
}