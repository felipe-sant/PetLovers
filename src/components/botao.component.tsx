import React from "react";
import adicionar from "../styles/botaoAdicionar.module.css"
import relatorio from "../styles/botaoRelatorio.module.css";

type BotaoProps = {
    texto: string,
    effect: () => void
    tipo: "adicionar" | "relatorio"
}

class Botao extends React.Component<BotaoProps> {
    render() {
        if (this.props.tipo === "adicionar") {
            return (
                <button onClick={this.props.effect} className={adicionar.botao}>
                    {this.props.texto}
                </button>
            )
        }

        if (this.props.tipo === "relatorio") {
            return (
                <button onClick={this.props.effect} className={relatorio.botao}>
                    {this.props.texto}
                </button>
            )
        }
    }
}

export default Botao