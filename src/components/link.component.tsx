import styles from "../styles/link.module.css"

interface LinkProps {
    url: string,
    titulo: string,
    descricao: string
}

export default function Link(props: LinkProps) {
    const { url, titulo, descricao } = props
    return (
        <a className={styles.conteudo} href={url}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </a>
    )
}