import style from "./Menu.module.css";

import logo from "/src/assets/logotropa.svg";

import { ListaPaginas } from "../ListaPaginas"
import { ConfigProfile } from "../ConfigProfile";

const Menu = () => {
  return (
    <div className={style.Menu}>
      <img src={logo} alt="Logo-Tropa" />

      <ListaPaginas />

      <ConfigProfile />
    </div>
  );
};

export { Menu };
