import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import styles from "../styles/clientes.module.css";
import BotaoAdicionar from "../components/botaoAdicionar.component";
import ItemCliente from "../components/itemCliente.component";
import Cliente from "../model/cliente";
import CPF from "../model/cpf";
import Telefone from "../model/telefone";
import RG from "../model/rg";
import Pet from "../model/pet";

let clientes:Array<Cliente> = []

let cpf = new CPF("513.321.314-51", new Date())

let telefones1:Array<Telefone> = []
let telefones2:Array<Telefone> = []
let telefone1 = new Telefone("11", "999999999")
let telefone2 = new Telefone("11", "888888888")
telefones1.push(telefone1)
telefones2.push(telefone1, telefone2)

let rgs1:Array<RG> = []
let rgs2:Array<RG> = []
let rg1 = new RG("123456789", new Date())
let rg2 = new RG("987654321", new Date())
rgs1.push(rg1, rg2)
rgs2.push(rg1)

let pet1:Pet = new Pet("Cacau", "Salsicha", "Fêmea", "Cachorro")

let cliente1 = new Cliente("Gustavo", "", cpf)
cliente1.setTelefones = telefones1
cliente1.setRgs = rgs1
cliente1.setPets = [pet1]

clientes.push(cliente1)

class Clientes extends React.Component {
    render() {
        const AdicionarCliente = () => {
            window.location.href = "/clientes/adicionar";
        }

        return (
            <>
                <Navbar />
                <div className={styles.body}>
                    <div className={styles.filtro}>
                        <section>
                            filtrando papai xd
                        </section>
                    </div>
                    <div className={styles.conteudo}>
                        <main>
                            <div className={styles.botoes}>
                                <BotaoAdicionar texto="Adicionar" effect={AdicionarCliente} />
                            </div>
                            <div className={styles.listagem}>
                                {clientes.map(element => {
                                    return (
                                        <ItemCliente 
                                            cliente={element}
                                        />
                                    )
                                })}
                            </div>
                        </main>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Clientes