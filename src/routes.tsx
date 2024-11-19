import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/japonesa" element={<Japonesa />} />
    <Route path="/italiana" element={<Italiana />} />
    <Route path="/arabe" element={<Arabe />} />
    <Route path="/portugues" element={<Portugues />} />
    <Route path="/pizzaria" element={<Pizzaria />} />
    <Route path="/vegano" element={<Vegano />} />
  </Routes>
);

export default Rotas;
