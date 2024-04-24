import ClienteForm from "../components/clienteForm.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/pages/clienteUpdate.module.css"

export default function ClientesUpdate() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Atualizar cliente</h1>
                <div className={styles.formulario}>
                    <ClienteForm
                        key={1}
                        tipo="Atualizar"
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}