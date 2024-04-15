import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import NotFound from "../pages/notFound.page";
import React from "react";
import Home from "../pages/home.page";

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Switch>
            </BrowserRouter>
        );
    }   
}

export default Routes