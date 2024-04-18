import adicionar from "../styles/botaoAdicionar.module.css";
import relatorio from "../styles/botaoRelatorio.module.css";

type BotaoProps = {
    tipo: "adicionar" | "relatorio";
    texto: string;
    effect: () => void;
}

export default function Botao(props: BotaoProps) {
    if (props.tipo === "adicionar") {
        return (
            <button onClick={props.effect} className={adicionar.botao}>
                {props.texto}
            </button>
        )
    } else {
        return (
            <button onClick={props.effect} className={relatorio.botao}>
                {props.texto}
            </button>
        )
    }
}