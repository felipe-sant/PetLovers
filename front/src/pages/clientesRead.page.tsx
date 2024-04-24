import { useState, useEffect } from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/pages/clientesRead.module.css";
import Cliente from "../model/cliente";
import buscarDados from "../functions/buscarDados";
import transformarDadosEmClientes from "../functions/transformarDadosEmClientes";
import ClienteItem from "../components/clienteItem.component";

export default function ClientesRead() {
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    async function buscarCliente() {
        try {
            const url = 'http://localhost:32831/cliente/clientes'
            const $dados = await buscarDados(url)
            const $clientes = transformarDadosEmClientes($dados)
            setClientes($clientes)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        buscarCliente()
    }, [])

    var render
    if (loading) {
        render =
            <div className={styles.semCliente}>
                <strong>Carregando clientes...</strong>
            </div>
    } else if (clientes.length === 0) {
        render =
            <div className={styles.semCliente}>
                <strong>Nenhum cliente cadastrado.</strong>
                <div>:(</div>
            </div>
    } else {
        render =
            <div className={styles.lista}>
                {clientes.map((cliente, index) => {
                    return <ClienteItem key={cliente.getId()} cliente={cliente} />
                })}
            </div>
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {render}
            </main>
            <Footer />
        </>
    );
}