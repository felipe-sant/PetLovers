import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import styles from "../styles/tabelas.module.css";
import Botao from "../components/botao.component";

class ClientesRelatorios extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <div className={styles.botoes}>
                        <Botao tipo="adicionar" texto="Adicionar" effect={() => {}} />
                    </div>
                    <div className={styles.filtro}>
                        <form action="">
                            <button>Ordenar por consumo de produtos/servicos</button>
                            <button>Ordenar por total gasto</button>
                        </form>
                    </div>
                    <div className={styles.tabela}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Consumo de produtos/servicos</th>
                                    <th>Total gasto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cliente 1</td>
                                    <td>100</td>
                                    <td>R$ 1000,00</td>
                                </tr>
                                <tr>
                                    <td>Cliente 2</td>
                                    <td>200</td>
                                    <td>R$ 2000,00</td>
                                </tr>
                                <tr>
                                    <td>Cliente 3</td>
                                    <td>300</td>
                                    <td>R$ 3000,00</td>
                                </tr>
                                <tr>
                                    <td>Cliente 4</td>
                                    <td>400</td>
                                    <td>R$ 4000,00</td>
                                </tr>
                                <tr>
                                    <td>Cliente 5</td>
                                    <td>500</td>
                                    <td>R$ 5000,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default ClientesRelatorios