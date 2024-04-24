import { useState } from "react";
import styles from "../styles/form.module.css";
import buscarDados from "../functions/buscarDados";
import transformarDadosEmClientes from "../functions/transformarDadosEmClientes";
import deletarDados from "../functions/deletarDados";

export default function ClienteFormDeletar() {
    const [id, setId] = useState<number | undefined>(undefined);
    const [error, setError] = useState<string>("")
    const [errorId, setErrorId] = useState<boolean>(false)

    const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(Number(event.target.value));
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

    function verificarDados() {
        if (!id) {
            setErrorId(true);
            return;
        } else {
            setErrorId(false);
        }
    }

    async function deletar() {
        if (id === undefined) {
            setError("Preencha todos os campos");
            verificarDados();
            return
        } else {
            const clienteExiste = buscarCliente(id)
            if (!clienteExiste) {
                setError("Cliente não encontrado");
                return
            } else {
                await deletarDados("http://localhost:32831/cliente/excluir", id)
                window.location.href = "/listar"
            }
        }
    }

    return (
        <form action="" className={styles.form}>
            <div className={styles.formBody}>
                <div className={styles.formElement}>
                    <label htmlFor="id" className={styles.required}>ID</label>
                    <input className={errorId ? styles.inputError : ""} onChange={handleChangeId} type="number" placeholder="ID" id="id" />
                </div>
                <div className={error ? styles.error : styles.none}>
                    <p>{error}</p>
                </div>
            </div>
            <div className={styles.formFooter}>
                <div className={styles.button} onClick={deletar}>Excluir</div>
            </div>
        </form>
    )
}