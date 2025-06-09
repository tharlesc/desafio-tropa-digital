import { Route, Routes } from "react-router-dom";

import { motion } from "framer-motion";

import {
  Login,
  Dashboard,
  Eventos,
  Team,
  Inscritos,
  ConfigPerfil,
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
    </Routes>
  );
};

export { Router };
