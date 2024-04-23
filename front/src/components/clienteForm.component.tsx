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

    const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value)
    }

    const handleChangeNomeSocial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeSocial(event.target.value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleChangeEstado = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEstado(event.target.value)
    }

    const handleChangeCidade = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCidade(event.target.value)
    }

    const handleChangeBairro = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBairro(event.target.value)
    }

    const handleChangeRua = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRua(event.target.value)
    }

    const handleChangeNumeroEndereco = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumeroEndereco(event.target.value)
    }

    const handleChangeCodigoPostal = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCodigoPostal(event.target.value)
    }

    const handleChangeInformacoesAdicionais = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInformacoesAdicionais(event.target.value)
    }

    const handleChangeDdd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDdd(event.target.value)
    }

    const handleChangeNumeroTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumeroTelefone(event.target.value)
    }

    useEffect(() => {
    }, [])

    function adicionarTelefone() {
        if (ddd && numeroTelefone) {
            setTelefones([...telefones, new Telefone(ddd, numeroTelefone)])
            setDdd("")
            setNumeroTelefone("")
        }
    }

    function cadastrar() {
        const endereco = new Endereco(estado, cidade, bairro, rua, numeroEndereco, codigoPostal, informacoesAdicionais)
        const cliente = new Cliente(nome, nomeSocial, email, endereco, telefones)

        console.log(cliente)
    }

    return (
        <form action="" className={styles.form}>
            <div className={styles.formBody}>
                <div className={styles.formElement}>
                    <label htmlFor="nome" className={styles.required} onClick={() => {console.log(nome)}}>Nome</label>
                    <input onChange={handleChangeNome} value={nome} type="text" placeholder="Nome do cliente" id="nome" required />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="nomeSocial">Nome Social</label>
                    <input onChange={handleChangeNomeSocial} value={nomeSocial} type="text" placeholder="Nome social" id="nomeSocial" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="email" className={styles.required}>Email</label>
                    <input onChange={handleChangeEmail} value={email} type="email" placeholder="email@exemplo.com" id="email" required />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="endereco" className={styles.required}>Endereço</label>
                    <input onChange={handleChangeEstado} value={estado} type="text" placeholder="Estado" id="endereco_estado" required />
                    <input onChange={handleChangeCidade} value={cidade} type="text" placeholder="Cidade" id="endereco_cidade" required />
                    <input onChange={handleChangeBairro} value={bairro} type="text" placeholder="Bairro" id="endereco_bairro" required />
                    <input onChange={handleChangeRua} value={rua} type="text" placeholder="Rua" id="endereco_rua" required />
                    <input onChange={handleChangeNumeroEndereco} value={numeroEndereco} type="text" placeholder="Número" id="endereco_numero" required />
                    <input onChange={handleChangeCodigoPostal} value={codigoPostal} type="text" placeholder="Código Postal" id="endereco_codigoPostal" required />
                    <input onChange={handleChangeInformacoesAdicionais} value={informacoesAdicionais} type="text" placeholder="Informacoes Adicionais" id="endereco_informacoesAdicionais" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="telefone" className={styles.required}>Telefones</label>
                    <input onChange={handleChangeDdd} value={ddd} type="text" placeholder="ddd" id="telefone_ddd" required />
                    <input onChange={handleChangeNumeroTelefone} value={numeroTelefone} type="text" placeholder="numero" id="telefone_numero" required />
                    <div>
                        <ul>
                            {
                                telefones.map((telefone, index) => {
                                    return (
                                        <li key={index} >{telefone.mostrarTelefone()}</li>
                                    )
                                })
                            }
                        </ul>
                        <span className={styles.button} onClick={adicionarTelefone}>+</span>
                    </div>
                </div>
            </div>
            <div className={styles.formFooter}>
                <div onClick={cadastrar}>Cadastrar</div>
            </div>
        </form>
    )
}