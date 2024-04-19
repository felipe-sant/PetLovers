import Cliente from "../model/cliente"
import Endereco from "../model/endereco"
import Telefone from "../model/telefone"

const transformarDadosEmClientes = (data: any) => {
    let listaDeClientes: Cliente[] = []
    if (data.length > 0) {
        data.forEach((cliente: any) => {
            const endereco = cliente.endereco
            let enderecoObj = new Endereco(
                endereco.estado,
                endereco.cidade,
                endereco.bairro,
                endereco.rua,
                endereco.numero,
                endereco.codigoPostal,
                endereco.informacoesAdicionais,
                endereco.id
            )

            let listaTelefones: Telefone[] = []
            cliente.telefones.forEach((telefone: any) => {
                let telefoneObj = new Telefone(
                    telefone.ddd,
                    telefone.numero,
                    telefone.id
                )
                listaTelefones.push(telefoneObj)
            })

            let clienteObj = new Cliente(
                cliente.nome,
                cliente.nomeSocial,
                cliente.email,
                enderecoObj,
                listaTelefones,
                cliente.id
            )

            listaDeClientes.push(clienteObj)
        })
    }
    return listaDeClientes
}

export default transformarDadosEmClientes