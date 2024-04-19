import { useState, useEffect } from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/pages/clientesRead.module.css";
import Cliente from "../model/cliente";
import buscarDados from "../functions/buscarDados";
import transformarDadosEmClientes from "../functions/transformarDadosEmClientes";
import ClienteItem from "../components/clienteItem.component";

export default function ClientesRead() {
    const [dados, setDados] = useState<any[]>([{}])
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    async function buscarCliente() {
        try {
            const url = 'http://localhost:32831/cliente/clientes'
            const $dados = await buscarDados(url)
            const $clientes = transformarDadosEmClientes($dados)
            setDados($dados)
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

    const teste = () => {
        console.log(clientes)
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <button onClick={teste}>teste</button>
                <div className={styles.lista}>
                    {clientes.map(cliente => {
                        return <ClienteItem cliente={cliente} />
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}