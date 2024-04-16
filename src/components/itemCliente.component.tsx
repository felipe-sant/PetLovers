import React from "react";
import styles from "../styles/itemCliente.module.css"

type ItemClienteProps = {
    nome:string,
    nomeSocial:string,
    dataRegistro:string,
    cpf:string,
    email:string,
    rg:string[],
    telefones:string[],
    pets:string[],
    produtos:string[],
    servicos:string[]
}

class ItemCliente extends React.Component<ItemClienteProps> {
    render() {
        const { nome, nomeSocial, dataRegistro, cpf, email, rg, telefones, pets, produtos, servicos } = this.props;

        return (
            <div className={styles.item}>
                <div className={styles.cabecalho}>
                    <div className={styles.titulo}>
                        <h1>{nome}</h1>
                        <h2>{nomeSocial}</h2>
                    </div>
                    <div className={styles.detalhes}>
                        <span className={styles.dataRegistro}>
                            {dataRegistro}
                        </span>
                    </div>
                </div>
                <hr />
                <div className={styles.corpo}>
                    <div className={styles.informacoesSimples}>
                        <div className={styles.informacao}>
                            <h3>CPF:</h3>
                            <p>{cpf}</p>
                        </div>
                        <div className={styles.informacao}>
                            <h3>Email:</h3>
                            <p>{email}</p>
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
                                {rg.map((rg, index) => {
                                    return <li key={index}>{rg}</li>
                                })}
                            </ul>
                        </div>
                        <div className={styles.informacao}>
                            <h3>Telefones:</h3>
                            <ul>
                                {telefones.map((telefone, index) => {
                                    return <li key={index}>{telefone}</li>
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