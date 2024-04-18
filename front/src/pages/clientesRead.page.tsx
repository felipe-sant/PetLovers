import { useState, useEffect } from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/pages/clientesRead.module.css";
import Cliente from "../model/cliente";
import buscarDados from "../functions/buscarDados";
import transformarDadosEmCliente from "../functions/transformarDadosEmCliente";

export default function ClientesRead() {
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    async function buscarCliente() {
        try {
            const url = 'http://localhost:32831/cliente/clientes'
            const $dados = await buscarDados(url)
            const $clientes = transformarDadosEmCliente($dados)
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

    const listarClientes = () => {
        console.log(clientes)
        console.log(loading)
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <button onClick={listarClientes}>listar clientes</button>
            </main>
            <Footer />
        </>
    );
}