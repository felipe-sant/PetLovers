import ClienteForm from "../components/clienteForm.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/pages/clienteCreate.module.css"

export default function ClientesCreate() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h1>Cadastrar cliente</h1>
                <div className={styles.formulario}>
                    <ClienteForm 
                        key={1}
                        tipo="Cadastrar"    
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}