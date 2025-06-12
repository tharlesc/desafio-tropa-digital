import { Route, Routes } from "react-router-dom";

import { motion } from "framer-motion";

import {
  Login,
  Dashboard,
  Eventos,
  Team,
  Inscritos,
  ConfigPerfil,
  Error404,
} from "./pages";

import { LayoutApp, LayoutPadrao } from "./Layout";

const Router = () => {
  return (
    <Routes>
      {/* Página de Login */}
      <Route path="/" element={<LayoutPadrao />}>
        <Route index element={<Login />} />
        <Route path="/Login" element={<Login />} />
      </Route>

      {/* Página Aplicação, menu fixo */}
      <Route path="/" element={<LayoutApp />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Eventos" element={<Eventos />} />
        <Route path="/Equipe" element={<Team />} />
        <Route path="/Inscritos" element={<Inscritos />} />
        <Route path="/Perfil" element={<ConfigPerfil />} />
      </Route>

      {/* Página não encontrada */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export { Router };
