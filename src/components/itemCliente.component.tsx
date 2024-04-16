import React from "react";
import styles from "../styles/itemCliente.module.css"

class ItemCliente extends React.Component {
    render() {
        return (
            <div className={styles.item}>
                <div className={styles.cabecalho}>
                    <div className={styles.titulo}>
                        <h1>nome_social</h1>
                        <h2>nome_cliente</h2>
                    </div>
                    <div className={styles.detalhes}>
                        <span className={styles.dataRegistro}>
                            00/00/0000
                        </span>
                    </div>
                </div>
                <hr />
                <div className={styles.corpo}>
                    <div className={styles.informacoesSimples}>
                        <div className={styles.informacao}>
                            <h3>CPF:</h3>
                            <p>000.000.000.00</p>
                        </div>
                        <div className={styles.informacao}>
                            <h3>Email:</h3>
                            <p>email_do_cliente@gmail.com</p>
                        </div>
                        <div className={styles.pets}>
                            <button>
                                Visualizar Pets
                            </button>
                        </div>
                    </div>
                    <div className={styles.informacoesCompostas}>
                        <div className={styles.informacao}>
                            <h3>RGs:</h3>
                            <ul>
                                <li>rg1</li>
                                <li>rg2</li>
                            </ul>
                        </div>
                        <div className={styles.informacao}>
                            <h3>Telefones:</h3>
                            <ul>
                                <li>rg1</li>
                                <li>rg2</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.produtoServico}>
                    <button>
                        Produtos Consumidos
                    </button>
                    <button>
                        Serviços Consumidos
                    </button>
                </div>
                <hr />
                <div className={styles.footer}>
                    <button className={styles.editar}>
                        Editar
                    </button>
                    <button className={styles.excluir}>
                        Deletar
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemCliente