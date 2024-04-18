import styles from "../styles/components/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="https://github.com/felipe-sant/" target="_blank">
                feito por: <strong>@felipe-sant</strong>
            </a>
        </footer>
    )
}