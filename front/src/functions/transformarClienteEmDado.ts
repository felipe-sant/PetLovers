import Cliente from "../model/cliente"
import Telefone from "../model/telefone"
import { ClienteType } from "../types/clienteType"
import { EnderecoType } from "../types/enderecoType"
import { TelefoneType } from "../types/telefoneType"

const transformarClienteEmDados = (cliente: Cliente): ClienteType => {
    const endereco = cliente.endereco
    let enderecoObj: EnderecoType = {
        id: endereco.getId(),
        estado: endereco.estado,
        cidade: endereco.cidade,
        bairro: endereco.bairro,
        rua: endereco.rua,
        numero: endereco.numero,
        codigoPostal: endereco.codigoPostal,
        informacoesAdicionais: endereco.informacoesAdicionais
    }

    let listaTelefones: TelefoneType[] = []
    cliente.telefones.forEach((telefone: Telefone) => {
        let telefoneObj: TelefoneType = {
            id: telefone.getId(),
            ddd: telefone.ddd,
            numero: telefone.numero
        }
        listaTelefones.push(telefoneObj)
    })

    let clienteObj: ClienteType = {
        id: cliente.getId(),
        nome: cliente.nome,
        nomeSocial: cliente.nomeSocial,
        email: cliente.email,
        endereco: enderecoObj,
        telefones: listaTelefones
    }

    return clienteObj
}

export default transformarClienteEmDados