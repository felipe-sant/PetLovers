import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";
import styles from "../styles/home.module.css";
import Link from "../components/link.component";

class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <h1 className={styles.titulo}>Bem-vindo ao PetLovers!</h1>
                    <div className={styles.textos}>
                        <p className={styles.paragrafo}>Somos mais do que uma simples loja de petshop - somos uma comunidade apaixonada por animais de estimação! Na PetLovers, acreditamos no amor incondicional que os animais nos trazem e nos esforçamos para fornecer os melhores produtos e serviços para atender às necessidades de nossos amigos peludos.</p>
                        <p className={styles.paragrafo}>Explore nossa variedade de produtos de alta qualidade, desde alimentos nutritivos e brinquedos divertidos até acessórios elegantes e itens de cuidados especiais. Temos tudo o que você precisa para manter seu animal de estimação feliz e saudável.</p>
                        <p className={styles.paragrafo}>Além disso, oferecemos serviços especializados para cuidar dos seus amigos peludos da melhor maneira possível. Nossa equipe dedicada está aqui para ajudar com serviços de banho e tosa, consultas de saúde e muito mais.</p>
                        <p className={styles.paragrafo}>Na PetLovers, valorizamos cada membro da nossa comunidade de amantes de animais. Junte-se a nós hoje mesmo e descubra como podemos tornar a vida do seu animal de estimação ainda mais incrível!</p>
                    </div>
                    <hr className={styles.linha}/>
                    <div className={styles.links}>
                        <Link 
                            url="/clientes" 
                            titulo="Clientes" 
                            descricao="Cadastre os clientes da loja!" 
                        />
                        <Link 
                            url="/produtos" 
                            titulo="Produtos" 
                            descricao="Cadastre os produtos da loja!" 
                        />
                        <Link 
                            url="/servicos" 
                            titulo="Serviços" 
                            descricao="Cadastre os serviços da loja!" 
                        />
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default Home;