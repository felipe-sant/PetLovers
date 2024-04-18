import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import styles from "../styles/clientes.module.css";
import ItemCliente from "../components/itemCliente.component";
import Cliente from "../model/cliente";
import CPF from "../model/cpf";
import Telefone from "../model/telefone";
import RG from "../model/rg";
import Pet from "../model/pet";
import Botao from "../components/botao.component";

let clientes:Array<Cliente> = []

let cpf = new CPF("513.321.314-51", new Date())

let telefones:Array<Telefone> = []
let telefone1 = new Telefone("11", "999999999")
telefones.push(telefone1)

let rgs:Array<RG> = []
let rg1 = new RG("123456789", new Date())
let rg2 = new RG("987654321", new Date())
rgs.push(rg1, rg2)

let pets:Array<Pet> = []
let pet1:Pet = new Pet("melao (Mellow)", "Amarelo", "Macho", "Gato")

pets.push(pet1)

let cliente1 = new Cliente("Felipe", "Luiz Felipe", cpf)
cliente1.setTelefones = telefones
cliente1.setRgs = rgs
cliente1.setPets = pets

clientes.push(cliente1)

class Clientes extends React.Component {
    render() {
        const AdicionarCliente = () => {
            window.location.href = "/clientes/adicionar";
        }

        const RelatorioClientes = () => {
            window.location.href = "/clientes/relatorios";
        }

        return (
            <>
                <Navbar />
                <div className={styles.body}>
                    <div className={styles.filtro}>
                        <section>
                            <form action="" className={styles.form}>
                                <div className={styles.formHead}>
                                    <h2>- Filtro -</h2>
                                </div>
                                <div className={styles.formBody}>
                                    <input type="text" placeholder="Nome" />
                                    <input type="text" placeholder="CPF" />
                                    <input type="date" placeholder="Data de Registro" />
                                </div>
                                <div className={styles.formFooter}>
                                    <input type="button" value="Pesquisar" />
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className={styles.conteudo}>
                        <main>
                            <div className={styles.botoes}>
                                <Botao tipo="relatorio" texto="Relatório" effect={RelatorioClientes} />
                                <Botao tipo="adicionar" texto="Adicionar" effect={AdicionarCliente} />
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