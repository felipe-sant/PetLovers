import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home.page";
import ClientePage from "../pages/cliente.page";
import ClienteAdicionar from "../pages/clienteAdicionar.page";
import ClienteRelatorio from "../pages/clienteRelatorio.page";
import Produto from "../pages/produto.page";
import ProdutoAdicionar from "../pages/produtoAdicionar.page";
import Servico from "../pages/servico.page";
import ServicoAdicionar from "../pages/servicoAdicionar.page";
import NotFound from "../pages/notFound.page";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<ClientePage />} />
                <Route path="/clientes/adicionar" element={<ClienteAdicionar />} />
                <Route path="/clientes/relatorios" element={<ClienteRelatorio />} />
                <Route path="/produtos" element={<Produto />} />
                <Route path="/produtos/adicionar" element={<ProdutoAdicionar />} />
                <Route path="/servicos" element={<Servico />} />
                <Route path="/servicos/adicionar" element={<ServicoAdicionar />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}