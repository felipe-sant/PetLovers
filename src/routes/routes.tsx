import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import NotFound from "../pages/notFound.page";
import React from "react";
import Home from "../pages/home.page";
import Clientes from "../pages/clientes";
import Produtos from "../pages/produtos";
import Servicos from "../pages/servicos.page";

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="*" element={<NotFound />} />
                </Switch>
            </BrowserRouter>
        );
    }   
}

export default Routes