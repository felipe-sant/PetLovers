import React from "react";
import styles from "../styles/itemCliente.module.css"
import Cliente from "../model/cliente";

type ItemClienteProps = {
    cliente: Cliente
}

class ItemCliente extends React.Component<ItemClienteProps> {
    render() {
        const { cliente } = this.props;

        return (
            <div className={styles.item}>
                <div className={styles.cabecalho}>
                    <div className={styles.titulo}>
                        <h1>{cliente.nome}</h1>
                        <h2>{cliente.nomeSocial}</h2>
                    </div>
                    <div className={styles.detalhes}>
                        <span className={styles.dataRegistro}>
                            {cliente.getDataCadastro.toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <hr />
                <div className={styles.corpo}>
                    <div className={styles.informacoesSimples}>
                        <div className={styles.informacao}>
                            <h3>CPF:</h3>
                            <p>{cliente.getCpf.getValor}</p>
                        </div>
                        <div className={styles.informacao}>
                            <h3>Email:</h3>
                            <p></p>
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
                                {cliente.getRgs.map((rg, index) => {
                                    return <li key={index}>{rg.getValor}</li>
                                })}
                            </ul>
                        </div>
                        <div className={styles.informacao}>
                            <h3>Telefones:</h3>
                            <ul>
                                {cliente.getTelefones.map((telefone, index) => {
                                    return <li key={index}>{telefone.getDdd + " " + telefone.getNumero}</li>
                                })}
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