import React from "react";
import Navbar from "../components/navbar.component";
import Footer from "../components/footer.component";

class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <h1>Home</h1>
                    <p>Home page</p>
                </main>
                <Footer />
            </>
        );
    }
}

export default Home;