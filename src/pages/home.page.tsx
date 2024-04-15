import React from "react";
import Navbar from "../components/navbar.component";

class Home extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <main>
                    <h1>Home</h1>
                    <p>Home page</p>
                </main>
            </>
        );
    }
}

export default Home;