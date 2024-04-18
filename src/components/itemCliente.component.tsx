import React from "react";
import styles from "../styles/itemCliente.module.css"
import Cliente from "../model/cliente";

type ItemClienteProps = {
    cliente: Cliente
}

class ItemCliente extends React.Component<ItemClienteProps> {
    render() {
        const { cliente } = this.props;

        var pet
        if (cliente.getPets.length > 0) {
            pet = cliente.getPets.map((pet, index) => {
                return (
                    <tr key={index}>
                        <td>{pet.getNome}</td>
                        <td>{pet.getTipo}</td>
                        <td>{pet.getRaca}</td>
                        <td>{pet.getGenero}</td>
                    </tr>
                )
            })
        } else {
            pet = <tr><td colSpan={4} className={styles.semItem}>- Nenhum pet cadastrado -</td></tr>
        }

        var produto
        if (cliente.getProdutosConsumidos.length > 0) {
            produto = cliente.getProdutosConsumidos.map((produto, index) => {
                return (
                    <tr key={index}>
                        <td>{produto.nome}</td>
                        <td>{produto.valor}</td>
                    </tr>
                )
            })
        } else {
            produto = <tr><td colSpan={2} className={styles.semItem}>- Nenhum produto consumido -</td></tr>
        }

        var servico
        if (cliente.getServicosConsumidos.length > 0) {
            servico = cliente.getServicosConsumidos.map((servico, index) => {
                return (
                    <tr key={index}>
                        <td>{servico.nome}</td>
                        <td>{servico.valor}</td>
                    </tr>
                )
            })
        } else {
            servico = <tr><td colSpan={2} className={styles.semItem}>- Nenhum serviço consumido -</td></tr>
        }

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
                    <div className={styles.informacoesCompostas}>  
                        <div className={styles.informacao}>
                            <h3>CPF:</h3>
                            <p>{cliente.getCpf.getValor}</p>
                        </div>
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
                    <div className={styles.informacoesSimples}>
                        <div className={styles.pets}>
                            <h3>Pets:</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Tipo</th>
                                        <th>Raça</th>
                                        <th>Genero</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { pet }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={styles.produtoServico}>
                    <table>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            { produto }
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Serviço</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            { servico }
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className={styles.footer}>
                    <button className={styles.excluir}>
                        Deletar
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemCliente