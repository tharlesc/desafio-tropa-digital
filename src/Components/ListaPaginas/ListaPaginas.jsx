import style from "./ListaPaginas.module.css";

import { BotaoMenu } from "../BotaoMenu";

import dashboard from "../../assets/icons/dashboard.svg";
import events from "../../assets/icons/events.svg";
import inscricao from "../../assets/icons/inscricao.svg";
import team from "../../assets/icons/team.svg";

import { NavLink } from "react-router-dom";

const ListaPaginas = () => {
  return (
    <div className={style.ListaPaginas}>
      <h3 className={style.Setor}>Menu</h3>
      <div className={style.Botoes}>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.ativo}` : style.link}>
          <BotaoMenu>
            <img
              src={dashboard}
              alt="Ícone de Dashboard"
              className={style.icon}
            />
            <span>Dashboard</span>
          </BotaoMenu>
        </NavLink>

        <NavLink
          to="/Eventos"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.ativo}` : style.link}>
          <BotaoMenu>
            <img src={events} alt="Ícone de Eventos" className={style.icon} />
            <span>Eventos</span>
          </BotaoMenu>
        </NavLink>

        <NavLink
          to="/Equipe"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.ativo}` : style.link}>
          <BotaoMenu>
            <img src={team} alt="Ícone de Equipe" className={style.icon} />
            <span>Equipe</span>
          </BotaoMenu>
        </NavLink>

        <NavLink
          to="/Inscritos"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.ativo}` : style.link}>
          <BotaoMenu>
            <img
              src={inscricao}
              alt="Ícone de Inscritos"
              className={style.icon}
            />
            <span>Inscrições</span>
          </BotaoMenu>
        </NavLink>
      </div>
    </div>
  );
};

export { ListaPaginas };
