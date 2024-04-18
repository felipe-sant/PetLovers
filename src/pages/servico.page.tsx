import Botao from "../components/botao.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/tabelas.module.css"

export default function Servico() {
    const AdicionarServico = () => {
        window.location.href = "/servicos/adicionar";
    }

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.botoes}>
                    <Botao tipo="adicionar" texto="Adicionar" effect={AdicionarServico} />
                </div>
                <div className={styles.filtro}>
                    <form action="">
                        <input type="text" placeholder="Tipo do Pet" />
                        <input type="text" placeholder="Raça do Pet" />
                        <button>Ordenar</button>
                    </form>
                </div>
                <div className={styles.tabela}>
                    <table>
                        <thead>
                            <tr>
                                <th>Serviço</th>
                                <th>Preço</th>
                                <th>Quantidade de usos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Serviço 1</td>
                                <td>R$ 10,00</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Serviço 2</td>
                                <td>R$ 20,00</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>Serviço 3</td>
                                <td>R$ 30,00</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>Serviço 4</td>
                                <td>R$ 40,00</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                <td>Serviço 5</td>
                                <td>R$ 50,00</td>
                                <td>500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </>
    )

}