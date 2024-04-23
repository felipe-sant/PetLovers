import { useState } from "react"
import styles from "../styles/form.module.css"
import Telefone from "../model/telefone"
import Endereco from "../model/endereco"
import Cliente from "../model/cliente"
import transformarClienteEmDados from "../functions/transformarClienteEmDado"
import cadastrarDados from "../functions/cadastrarDados"

export default function ClienteForm() {
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
    const [numeroTelefone, setNumeroTelefone] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [errorNome, setErrorNome] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorEstado, setErrorEstado] = useState<boolean>(false)
    const [errorCidade, setErrorCidade] = useState<boolean>(false)
    const [errorBairro, setErrorBairro] = useState<boolean>(false)
    const [errorRua, setErrorRua] = useState<boolean>(false)
    const [errorNumeroEndereco, setErrorNumeroEndereco] = useState<boolean>(false)
    const [errorCodigoPostal, setErrorCodigoPostal] = useState<boolean>(false)
    const [errorTelefone, setErrorTelefone] = useState<boolean>(false)

    const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorNome) { 
            setError("")
            setErrorNome(false) 
        }
        setNome(event.target.value)
    }

    const handleChangeNomeSocial = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeSocial(event.target.value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorEmail) {
            setError("")
            setErrorEmail(false)
        }
        setEmail(event.target.value)
    }

    const handleChangeEstado = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorEstado) {
            setError("")
            setErrorEstado(false)
        }
        setEstado(event.target.value)
    }

    const handleChangeCidade = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorCidade) {
            setError("")
            setErrorCidade(false)
        }
        setCidade(event.target.value)
    }

    const handleChangeBairro = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorBairro) {
            setError("")
            setErrorBairro(false)
        }
        setBairro(event.target.value)
    }

    const handleChangeRua = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorRua) {
            setError("")
            setErrorRua(false)
        }
        setRua(event.target.value)
    }

    const handleChangeNumeroEndereco = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorNumeroEndereco) {
            setError("")
            setErrorNumeroEndereco(false)
        }
        setNumeroEndereco(event.target.value)
    }

    const handleChangeCodigoPostal = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorCodigoPostal) {
            setError("")
            setErrorCodigoPostal(false)
        }
        setCodigoPostal(event.target.value)
    }

    const handleChangeInformacoesAdicionais = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInformacoesAdicionais(event.target.value)
    }

    const handleChangeNumeroTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorTelefone) {
            setError("")
            setErrorTelefone(false)
        }
        setNumeroTelefone(event.target.value)
    }

    function adicionarTelefone() {
        setError("")
        setErrorTelefone(false)
        if (numeroTelefone) {
            const ddd = numeroTelefone.slice(0, 2)
            const numero = numeroTelefone.slice(2)
            setTelefones([...telefones, new Telefone(ddd, numero)])
            setNumeroTelefone("")
        }
    }

    function verificarDados() {
        if (nome === "") {
            setErrorNome(true)
            return
        } else {
            setErrorNome(false)
        }

        if (email === "") {
            setErrorEmail(true)
            return
        } else {
            setErrorEmail(false)
        }

        if (estado === "") {
            setErrorEstado(true)
            return
        } else {
            setErrorEstado(false)
        }

        if (cidade === "") {
            setErrorCidade(true)
            return
        } else {
            setErrorCidade(false)
        }

        if (bairro === "") {
            setErrorBairro(true)
            return
        } else {
            setErrorBairro(false)
        }

        if (rua === "") {
            setErrorRua(true)
            return
        } else {
            setErrorRua(false)
        }

        if (numeroEndereco === "") {
            setErrorNumeroEndereco(true)
            return
        } else {
            setErrorNumeroEndereco(false)
        }

        if (codigoPostal === "") {
            setErrorCodigoPostal(true)
            return
        } else {
            setErrorCodigoPostal(false)
        }

        if (telefones.length === 0) {
            setErrorTelefone(true)
            return
        } else {
            setErrorTelefone(false)
        }
    }

    function cadastrar() {
        if (nome === "" || email === "" || estado === "" || cidade === "" || bairro === "" || rua === "" || numeroEndereco === "" || codigoPostal === "" || telefones.length === 0) {
            setError("Preencha todos os campos obrigatórios")
            verificarDados()
            return
        } else {
            const endereco = new Endereco(estado, cidade, bairro, rua, numeroEndereco, codigoPostal, informacoesAdicionais)
            const cliente = new Cliente(nome, nomeSocial, email, endereco, telefones)

            const clienteJson = transformarClienteEmDados(cliente)
            cadastrarDados('http://localhost:32831/cliente/cadastrar', clienteJson)

            window.location.href = "/listar"
        }
    }

    return (
        <form action="" className={styles.form}>
            <div className={styles.formBody}>
                <div className={styles.formElement}>
                    <label htmlFor="nome" className={styles.required} onClick={() => { console.log(nome) }}>Nome</label>
                    <input className={errorNome ? styles.inputError : ""} onChange={handleChangeNome} value={nome} type="text" placeholder="Nome do cliente" id="nome" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="nomeSocial">Nome Social</label>
                    <input onChange={handleChangeNomeSocial} value={nomeSocial} type="text" placeholder="Nome social" id="nomeSocial" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="email" className={styles.required}>Email</label>
                    <input className={errorEmail ? styles.inputError : ""} onChange={handleChangeEmail} value={email} type="email" placeholder="email@exemplo.com" id="email" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="endereco" className={styles.required}>Endereço</label>
                    <input className={errorEstado ? styles.inputError : ""} onChange={handleChangeEstado} value={estado} type="text" placeholder="Estado" id="endereco_estado" />
                    <input className={errorCidade ? styles.inputError : ""} onChange={handleChangeCidade} value={cidade} type="text" placeholder="Cidade" id="endereco_cidade" />
                    <input className={errorBairro ? styles.inputError : ""} onChange={handleChangeBairro} value={bairro} type="text" placeholder="Bairro" id="endereco_bairro" />
                    <input className={errorRua ? styles.inputError : ""} onChange={handleChangeRua} value={rua} type="text" placeholder="Rua" id="endereco_rua" />
                    <input className={errorNumeroEndereco ? styles.inputError : ""} onChange={handleChangeNumeroEndereco} value={numeroEndereco} type="text" placeholder="Número" id="endereco_numero" />
                    <input className={errorCodigoPostal ? styles.inputError : ""} onChange={handleChangeCodigoPostal} value={codigoPostal} type="text" placeholder="Código Postal" id="endereco_codigoPostal" />
                    <input onChange={handleChangeInformacoesAdicionais} value={informacoesAdicionais} type="text" placeholder="Informacoes Adicionais" id="endereco_informacoesAdicionais" />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="telefone" className={styles.required}>Telefones</label>
                    <input className={errorTelefone ? styles.inputError : ""} onChange={handleChangeNumeroTelefone} value={numeroTelefone} type="text" placeholder="Telefone" id="telefone" />
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
                <div className={error ? styles.error : styles.none}>
                    <p>{error}</p>
                </div>
            </div>
            <div className={styles.formFooter}>
                <div className={styles.button} onClick={cadastrar}>Cadastrar</div>
            </div>
        </form>
    )
}