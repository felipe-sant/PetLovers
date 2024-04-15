import React from "react"
import styles from "../styles/link.module.css"

interface LinkProps {
    url: string,
    titulo: string,
    descricao: string
}

class Link extends React.Component<LinkProps> {
    render() {
        const { url, titulo, descricao } = this.props
        return(
            <a className={styles.conteudo} href={url}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </a>
        )
    }
}

export default Link;