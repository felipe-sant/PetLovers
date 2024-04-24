import { useState } from "react"
import styles from "../styles/form.module.css"
import Telefone from "../model/telefone"
import Endereco from "../model/endereco"
import Cliente from "../model/cliente"
import transformarClienteEmDados from "../functions/transformarClienteEmDado"
import cadastrarDados from "../functions/cadastrarDados"
import atualizarDados from "../functions/atualizarDados"
import buscarDado from "../functions/buscarDados"
import transformarDadosEmClientes from "../functions/transformarDadosEmClientes"
import buscarDados from "../functions/buscarDados"

export default function ClienteForm(props: { tipo: string }) {
    const [id, setId] = useState<number | undefined>(undefined)
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
    const [errorId, setErrorId] = useState<boolean>(false)
    const [errorIdMessage, setErrorIdMessage] = useState<string>("")
    const [errorNome, setErrorNome] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorEstado, setErrorEstado] = useState<boolean>(false)
    const [errorCidade, setErrorCidade] = useState<boolean>(false)
    const [errorBairro, setErrorBairro] = useState<boolean>(false)
    const [errorRua, setErrorRua] = useState<boolean>(false)
    const [errorNumeroEndereco, setErrorNumeroEndereco] = useState<boolean>(false)
    const [errorCodigoPostal, setErrorCodigoPostal] = useState<boolean>(false)
    const [errorTelefone, setErrorTelefone] = useState<boolean>(false)
    const tipoDoForm = props.tipo

    const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (errorId || errorIdMessage) {
            setError("")
            setErrorId(false)
            setErrorIdMessage("")
        }
        setId(Number(event.target.value))
    }

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

    async function buscarCliente(identificador: number) {
        try {
            console.log(identificador)
            const url = 'http://localhost:32831/cliente/' + identificador
            const $dados = await buscarDados(url)
            const $clientes = transformarDadosEmClientes([$dados])
            return $clientes
        } catch (error) {
            return false
        }
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

    function removerTelefone(index: number) {
        const newTelefones = telefones.filter((telefone, i) => i !== index)
        setTelefones(newTelefones)
    }

    async function inserirCliente() {
        if (id !== undefined) {
            const clienteExiste = await buscarCliente(id)
            if (!clienteExiste) {
                setErrorId(true)
                setErrorIdMessage("Cliente não encontrado")
            } else {
                setNome(clienteExiste[0].nome)
                setNomeSocial(clienteExiste[0].nomeSocial)
                setEmail(clienteExiste[0].email)
                setEstado(clienteExiste[0].endereco.estado)
                setCidade(clienteExiste[0].endereco.cidade)
                setBairro(clienteExiste[0].endereco.bairro)
                setRua(clienteExiste[0].endereco.rua)
                setNumeroEndereco(clienteExiste[0].endereco.numero)
                setCodigoPostal(clienteExiste[0].endereco.codigoPostal)
                setInformacoesAdicionais(clienteExiste[0].endereco.informacoesAdicionais)
                setTelefones(clienteExiste[0].telefones)
                setErrorId(false)
                setErrorIdMessage("")
            }
        } else {
            setErrorId(true)
        }
    }

    function verificarDados() {
        if (tipoDoForm === "Atualizar" && id === undefined) {
            setErrorId(true)
            return
        } else {
            setErrorId(false)
        }

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

    async function cadastrar() {
        if (nome === "" || email === "" || estado === "" || cidade === "" || bairro === "" || rua === "" || numeroEndereco === "" || codigoPostal === "" || telefones.length === 0) {
            setError("Preencha todos os campos obrigatórios")
            verificarDados()
            return
        } else {
            const endereco = new Endereco(estado, cidade, bairro, rua, numeroEndereco, codigoPostal, informacoesAdicionais)
            const cliente = new Cliente(nome, nomeSocial, email, endereco, telefones)

            const clienteJson = transformarClienteEmDados(cliente)
            await cadastrarDados('http://localhost:32831/cliente/cadastrar', clienteJson)

            window.location.href = "/listar"
        }
    }

    async function atualizar() {
        if (id === undefined || nome === "" || email === "" || estado === "" || cidade === "" || bairro === "" || rua === "" || numeroEndereco === "" || codigoPostal === "" || telefones.length === 0) {
            setError("Preencha todos os campos obrigatórios")
            verificarDados()
            return
        } else {
            const clienteExiste = buscarCliente(id)
            if (!clienteExiste) {
                setError("Cliente não encontrado")
                setErrorId(true)
                return
            } else {
                const endereco = new Endereco(estado, cidade, bairro, rua, numeroEndereco, codigoPostal, informacoesAdicionais)
                const newCliente = new Cliente(nome, nomeSocial, email, endereco, telefones, id)

                const clienteJson = transformarClienteEmDados(newCliente)
                await atualizarDados('http://localhost:32831/cliente/atualizar', clienteJson)

                window.location.href = "/listar"
            }
        }
    }

    function tipo() {
        if (tipoDoForm === "Cadastrar") {
            cadastrar()
        } else if (tipoDoForm === "Atualizar") {
            atualizar()
        }
    }

    var inputID =
        <div className={styles.formElement}>
            <label htmlFor="id" className={styles.required}>ID</label>
            <input className={errorId ? styles.inputError : ""} onChange={handleChangeId} type="number" placeholder="ID" id="id" />
            <div>
                <div className={styles.errorId}>{errorIdMessage}</div>
                <span className={styles.button} onClick={inserirCliente}>+</span>
            </div>
        </div>

    return (
        <form action="" className={styles.form}>
            <div className={styles.formBody}>
                {tipoDoForm === "Atualizar" ? inputID : <></>}
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
                                        <li key={index} onClick={() => {
                                            removerTelefone(index)
                                        }}>{telefone.mostrarTelefone()}</li>
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
                <div className={styles.button} onClick={tipo}>{tipoDoForm}</div>
            </div>
        </form>
    )
}