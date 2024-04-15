import React from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";

class Produtos extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <h1>Lista de Produtos</h1>
                    <p>Home page</p>
                </main>
                <Footer />
            </>
        )
    }
}

export default Produtos;