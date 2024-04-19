import Cliente from "../model/cliente";
import styles from "../styles/table.module.css"

export default function ClienteItem(props: { cliente: Cliente }) {
    const cliente = props.cliente

    return (
        <div className={styles.item}>
            <div className={styles.parteSuperior}>
                <div className={styles.nomes}>
                    <h2>{cliente.nomeSocial}</h2>
                    <h3>{cliente.nome}</h3>
                </div>
                <div className={styles.id}>
                    <span>ID: {cliente.getId()}</span>
                </div>
            </div>
            <div className={styles.parteMedia}>
                <div className={styles.esquerda}>
                    <details className={styles.informacao}>
                        <summary className={styles.informacaoNome}>Endereço</summary>
                        <div className={styles.informacaoDetalhes}>
                            <span>
                                <strong>Estado: </strong>
                                {cliente.endereco.estado}
                            </span>
                            <span>
                                <strong>Cidade: </strong>
                                {cliente.endereco.cidade}
                            </span>
                            <span>
                                <strong>Bairro: </strong>
                                {cliente.endereco.bairro}
                            </span>
                            <span>
                                <strong>Rua: </strong>
                                {cliente.endereco.rua}
                            </span>
                            <span>
                                <strong>Numero: </strong>
                                {cliente.endereco.numero}
                            </span>
                            <span>
                                <strong>CódigoPostal: </strong>
                                {cliente.endereco.codigoPostal}
                            </span>
                            {cliente.endereco.informacoesAdicionais !== undefined ? <span><strong>Informações Adicionais:</strong> {cliente.endereco.informacoesAdicionais}</span> : <></>}
                        </div>
                    </details>
                </div>
                <div className={styles.direita}>
                    <div className={styles.informacao}>
                        <div className={styles.informacaoNome}>Email:</div>
                        <div className={styles.informacaoDetalhes}>
                            {cliente.email}
                        </div>
                    </div>
                    <div className={styles.informacao}>
                        <div className={styles.informacaoNome}>Telefone:</div>
                        <div className={styles.informacaoDetalhes}>
                            {cliente.telefones.map(telefone => {
                                return <span>{telefone.mostrarTelefone()}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.parteInferior}>
                <button className={styles.editar}>Editar</button>
                <button className={styles.deletar}>Deletar</button>
            </div>
        </div>
    )
}