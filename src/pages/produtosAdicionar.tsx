import React from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/adicionarElemento.module.css";

class ProdutosAdicionar extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <form action="" className={styles.form}>
                        <div className={styles.formHead}>
                            <h2>Adicionar Produto</h2>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.formGroup}>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name="nome" id="nome" placeholder="Nome do produto"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="preco">Preço</label>
                                <input type="text" name="preco" id="preco" placeholder="R$ 0,00"/>
                            </div>
                        </div>
                        <div className={styles.formFooter}>
                            <button type="submit">Adicionar</button>
                        </div>
                    </form>
                </main>
                <Footer />
            </>
        )
    }
}

export default ProdutosAdicionar