import React from "react";
import styles from "../styles/header.module.css"

class Navbar extends React.Component {
    render() {
        const { pathname } = window.location;

        let marcado = {
            home: "",
            clientes: "",
            produtos: "",
            servicos: ""
        }

        switch (pathname) {
            case "/":
                marcado.home = styles.destacado;
                break;
            case "/clientes":
                marcado.clientes = styles.destacado;
                break;
            case "/produtos":
                marcado.produtos = styles.destacado;
                break;
            case "/servicos":
                marcado.servicos = styles.destacado;
                break;
        }

        return (
            <header className={styles.header}>
                <h1>
                    <a href="/" className={marcado.home}>
                        PetLovers
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/clientes" className={marcado.clientes}>
                                Clientes
                            </a>
                        </li>
                        <li>
                            <a href="/produtos" className={marcado.produtos}>
                                Produtos
                            </a>
                        </li>
                        <li>
                            <a href="/servicos" className={marcado.servicos}>
                                Servicos
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;