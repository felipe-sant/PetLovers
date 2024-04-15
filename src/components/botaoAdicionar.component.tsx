import React from "react";
import styles from "../styles/botao.module.css";

type BotaoProps = {
    texto: string,
    effect: () => void
}

class BotaoAdicionar extends React.Component<BotaoProps> {
    render() {
        return (
            <button onClick={this.props.effect} className={styles.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default BotaoAdicionar