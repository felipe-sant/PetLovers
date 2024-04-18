import styles from "../styles/pages/notFound.module.css";

export default function NotFound() {
    const redirect = () => {
        window.location.href = "/";
    }

    return (
        <div className={styles.body}>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <p onClick={redirect}>Voltar para página inicial</p>
        </div>
    );
}