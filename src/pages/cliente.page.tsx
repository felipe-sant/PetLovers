import Botao from "../components/botao.component";
import Footer from "../components/footer.component";
import ItemCliente from "../components/itemCliente.component";
import Navbar from "../components/navbar.component";
import Cliente from "../model/cliente";
import styles from "../styles/clientes.module.css";

const clientes: Array<Cliente> = []

export default function ClientePage() {
    const AdicionarCliente = () => {
        window.location.href = "/clientes/adicionar";
    }

    const RelatorioClientes = () => {
        window.location.href = "/clientes/relatorios";
    }

    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.filtro}>
                    <section>
                        <form action="" className={styles.form}>
                            <div className={styles.formHead}>
                                <h2>- Filtro -</h2>
                            </div>
                            <div className={styles.formBody}>
                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="CPF" />
                                <input type="date" placeholder="Data de Registro" />
                            </div>
                            <div className={styles.formFooter}>
                                <input type="button" value="Pesquisar" />
                            </div>
                        </form>
                    </section>
                </div>
                <div className={styles.conteudo}>
                    <main>
                        <div className={styles.botoes}>
                            <Botao tipo="relatorio" texto="Relatório" effect={RelatorioClientes} />
                            <Botao tipo="adicionar" texto="Adicionar" effect={AdicionarCliente} />
                        </div>
                        <div className={styles.listagem}>
                            {clientes.map(element => {
                                return (
                                    <ItemCliente
                                        cliente={element}
                                    />
                                )
                            })}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}