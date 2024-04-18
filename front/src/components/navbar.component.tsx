import styles from "../styles/components/navbar.module.css";

export default function Navbar() {
    const { pathname } = window.location

    let marcado = {
        home: "",
        cadastrar: "",
        listar: "",
        editar: "",
        deletar: ""
    }

    switch (pathname) {
        case "/":
            marcado.home = styles.destacado;
            break
        case "/cadastrar":
            marcado.cadastrar = styles.destacado;
            break;
        case "/listar":
            marcado.listar = styles.destacado;
            break;
        case "/editar":
            marcado.editar = styles.destacado;
            break;
        case "/deletar":
            marcado.deletar = styles.destacado;
            break;
    }

    return (
        <header className={styles.header}>
            <h1>
                <a href="/" className={marcado.home}>
                    Clientes
                </a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="/cadastrar" className={marcado.cadastrar}>
                            Cadastrar
                        </a>
                    </li>
                    <li>
                        <a href="/listar" className={marcado.listar}>
                            Listar
                        </a>
                    </li>
                    <li>
                        <a href="/editar" className={marcado.editar}>
                            Editar
                        </a>
                    </li>
                    <li>
                        <a href="/deletar" className={marcado.deletar}>
                            Deletar
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}