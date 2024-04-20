import { useEffect, useState } from "react"
import styles from "../styles/form.module.css"
import Telefone from "../model/telefone"
import Endereco from "../model/endereco"
import Cliente from "../model/cliente"

export default function ClienteForm() {
    const [cliente, setCliente] = useState<Cliente>()
    const [nome, setNome] = useState<string>("")
    const [nomeSocial, setNomeSocial] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [endereco, setEndereco] = useState<Endereco>()
    const [estado, setEstado] = useState<string>("")
    const [cidade, setCidade] = useState<string>("")
    const [bairro, setBairro] = useState<string>("")
    const [rua, setRua] = useState<string>("")
    const [numeroEndereco, setNumeroEndereco] = useState<string>("")
    const [codigoPostal, setCodigoPostal] = useState<string>("")
    const [informacoesAdicionais, setInformacoesAdicionais] = useState<string>()
    const [telefones, setTelefones] = useState<Telefone[]>([])
    const [ddd, setDdd] = useState<string>("")
    const [numeroTelefone, setNumeroTelefone] = useState<string>("")

    async function setarTelefone() {
        try {
            const aaaa: Telefone[] = [new Telefone("12", "123456789"), new Telefone("11", "987654321")]
            setTelefones(aaaa)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    }, [])

    function cadastrar() {
        if (informacoesAdicionais) {
            setEndereco(new Endereco(estado, cidade, bairro, rua, numeroEndereco, codigoPostal, informacoesAdicionais))
        } else {
            setEndereco(new Endereco(estado, cidade, bairro, rua, numeroEndereco, codigoPostal))
        }

        if (endereco) {
            setCliente(new Cliente(nome, nomeSocial, email, endereco, telefones))
        }
        console.log(cliente)
    }

    return (
        <form action="" className={styles.form}>
            <div className={styles.formBody}>
                <div className={styles.formElement}>
                    <label htmlFor="nome" className={styles.required}>Nome</label>
                    <input value={nome} type="text" placeholder="Nome do cliente" id="nome" required />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="nomeSocial">Nome Social</label>
                    <input value={nomeSocial} type="text" placeholder="Nome social" id="nomeSocial" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="email" className={styles.required}>Email</label>
                    <input value={email} type="email" placeholder="email@exemplo.com" id="email" required />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="endereco" className={styles.required}>Endereço</label>
                    <input value={estado} type="text" placeholder="Estado" id="endereco_estado" required />
                    <input value={cidade} type="text" placeholder="Cidade" id="endereco_cidade" required />
                    <input value={bairro} type="text" placeholder="Bairro" id="endereco_bairro" required />
                    <input value={rua} type="text" placeholder="Rua" id="endereco_rua" required />
                    <input value={numeroEndereco} type="text" placeholder="Número" id="endereco_numero" required />
                    <input value={codigoPostal} type="text" placeholder="Código Postal" id="endereco_codigoPostal" required />
                    <input value={informacoesAdicionais} type="text" placeholder="Informacoes Adicionais" id="endereco_informacoesAdicionais" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="telefone" className={styles.required}>Telefones</label>
                    <input value={ddd} type="text" placeholder="ddd" id="telefone_ddd" required />
                    <input value={numeroTelefone} type="text" placeholder="numero" id="telefone_numero" required />
                    <div>
                        <ul>
                            {
                                telefones.map(telefone => {
                                    return (
                                        <li>{telefone.mostrarTelefone()}</li>
                                    )
                                })
                            }
                        </ul>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.formFooter}>
                <button onClick={cadastrar}>Cadastrar</button>
            </div>
        </form>
    )
}