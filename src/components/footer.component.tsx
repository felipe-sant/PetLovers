import React from "react";
import styles from "../styles/footer.module.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <a href="https://github.com/felipe-sant/">
                    feito por: <strong>@felipe-sant</strong>
                </a>
            </footer>
        )
    }
}

export default Footer;