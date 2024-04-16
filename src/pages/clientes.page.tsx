import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import styles from "../styles/clientes.module.css";
import BotaoAdicionar from "../components/botaoAdicionar.component";
import ItemCliente from "../components/itemCliente.component";

class Clientes extends React.Component {
    render() {
        const AdicionarCliente = () => {
            window.location.href = "/clientes/adicionar";
        }

        return (
            <>
                <Navbar />
                <div className={styles.body}>
                    <div className={styles.filtro}>
                        <section>
                            filtrando papai xd
                        </section>
                    </div>
                    <div className={styles.conteudo}>
                        <main>
                            <div className={styles.botoes}>
                                <BotaoAdicionar texto="Adicionar" effect={AdicionarCliente} />
                            </div>
                            <div className={styles.listagem}>
                                <ItemCliente />
                                <ItemCliente />
                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Clientes