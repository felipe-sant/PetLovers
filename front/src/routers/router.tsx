import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientesRead from "../pages/clientesRead.page";
import ClientesCreate from "../pages/clientesCreate.page";
import ClientesUpdate from "../pages/clientesUpdate.page";
import ClientesDelete from "../pages/clientesDelete.page";
import NotFound from "../pages/notFound.page";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientesRead />} />
                <Route path="/cadastrar" element={<ClientesCreate />} />
                <Route path="/editar" element={<ClientesUpdate />} />
                <Route path="/deletar" element={<ClientesDelete />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}