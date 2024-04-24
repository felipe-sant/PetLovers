import ClienteFormDeletar from "../components/clienteFormDeletar.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/pages/clienteDelete.module.css"

export default function ClientesDelete() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Deletar cliente</h1>
                <div className={styles.formulario}>
                    <ClienteFormDeletar />
                </div>
            </main>
            <Footer />
        </>
    );
}