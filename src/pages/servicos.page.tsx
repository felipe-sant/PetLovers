import React from "react";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";

class Servicos extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <main>
                    <h1>Serviços</h1>
                    <p>Lista de serviços</p>
                </main>
                <Footer />
            </>
        )
    }
}

export default Servicos;