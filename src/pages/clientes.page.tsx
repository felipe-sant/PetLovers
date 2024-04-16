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
                                <ItemCliente 
                                    nome="Gustavo"
                                    nomeSocial=""
                                    dataRegistro="13/09/2021"
                                    cpf="000.000.000-00"
                                    email="emailexemplo@gmail.com"
                                    rg={["00.000.000-0", "00.000.000-0"]}
                                    telefones={["(00) 00000-0000", "(00) 00000-0000"]}
                                    pets={["Pet1", "Pet2"]}
                                    produtos={["Produto1", "Produto2"]}
                                    servicos={["Servico1", "Servico2"]}
                                />
                                <ItemCliente 
                                    nome="Pedro Augusto"
                                    nomeSocial="Akira dos Santos"
                                    dataRegistro="13/09/2021"
                                    cpf="000.000.000-00"
                                    email="emailexemplo@gmail.com"
                                    rg={["00.000.000-0", "00.000.000-0"]}
                                    telefones={["(00) 00000-0000", "(00) 00000-0000"]}
                                    pets={["Pet1", "Pet2"]}
                                    produtos={["Produto1", "Produto2"]}
                                    servicos={["Servico1", "Servico2"]}
                                />
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