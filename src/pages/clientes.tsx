import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";

class Clientes extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <h1>Lista de Clientes</h1>
                    <p>Lista de Clientes</p>
                </main>
                <Footer />
            </>
        )
    }
}

export default Clientes