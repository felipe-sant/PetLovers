import React from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import styles from "../styles/adicionarElemento.module.css";

class ClientesAdicionar extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <form action="" className={styles.form}>
                        <div className={styles.formHead}>
                            <h2>Adicionar Cliente</h2>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.formGroup}>
                                <label htmlFor="nome" className={styles.required}>Nome</label>
                                <input type="text" name="nome" id="nome" placeholder="Nome do cliente"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="nomeSocial">Nome Social</label>
                                <input type="text" name="nomeSocial" id="nomeSocial" placeholder="Nome social do cliente"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="cpf" className={styles.required}>CPF</label>
                                <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00"/>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="rg">RG</label>
                                <div className={styles.formAddElement}>
                                    <div>
                                        <input type="text" name="rg" id="rg" placeholder="00.000.000-0"/>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles.formList}>
                                    <div className={styles.formListElement}>
                                        <div className={styles.formElement}>
                                            <span>00.000.000-0</span>
                                        </div>
                                        <button>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="telefone">Telefone</label>
                                <div className={styles.formAddElement}>
                                    <div>
                                        <input type="text" name="ddd" id="ddd" placeholder="(00)"/>
                                        <input type="text" name="numero" id="numero" placeholder="00000-0000"/>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles.formList}>
                                    <div className={styles.formListElement}>
                                        <div className={styles.formElement}>
                                            <span>(00) 00000-0000</span>
                                        </div>
                                        <button>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="pets">Pets</label>
                                <div className={styles.formAddElement}>
                                    <div>
                                        <input type="text" name="nome" id="nome" placeholder="Nome do Pet"/>
                                        <input type="text" name="tipo" id="tipo" placeholder="Tipo"/>
                                        <input type="text" name="raca" id="raca" placeholder="Raça"/>
                                        <input type="text" name="genero" id="genero" placeholder="Macho/Fêmea"/>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles.formList}>
                                    <div className={styles.formListElement}>
                                        <div className={styles.formElement}>
                                            <span>Mellow</span>
                                            <span>Gato</span>
                                            <span>Siamês</span>
                                            <span>Macho</span>
                                        </div>
                                        <button>-</button>
                                    </div>
                                    <div className={styles.formListElement}>
                                        <div className={styles.formElement}>
                                            <span>Cacau</span>
                                            <span>Cachorro</span>
                                            <span>Salsicha</span>
                                            <span>Fêmea</span>
                                        </div>
                                        <button>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="produtosConsumidos">Produtos Consumidos</label>
                                <div className={styles.formAddElement}>
                                    <div>
                                        <select name="produto" id="produto">
                                            <option value=""></option>
                                            <option value="produto1">Produto 1</option>
                                            <option value="produto2">Produto 2</option>
                                            <option value="produto3">Produto 3</option>
                                        </select>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles.formList}>
                                    <div className={styles.formListElement}>
                                        <div className={styles.formElement}>
                                            <span>Produto3</span>
                                        </div>
                                        <button>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="servicosConsumidos">Serviços Consumidos</label>
                                <div className={styles.formAddElement}>
                                    <div>
                                        <select name="servico" id="servico">
                                            <option value=""></option>
                                            <option value="servico1">Servico 1</option>
                                            <option value="servico2">Servico 2</option>
                                            <option value="servico3">Servico 3</option>
                                        </select>
                                    </div>
                                    <button>+</button>
                                </div>
                                <div className={styles.formList}>
                                    <div className={styles.formListElement}>
                                        <div className={styles.formElement}>
                                            <span>Servico3</span>
                                        </div>
                                        <button>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formFooter}> 
                            <button type="submit">Adicionar</button>
                        </div>
                    </form>
                </main>
                <Footer />
            </>
        )
    }
}

export default ClientesAdicionar