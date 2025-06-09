import { Outlet } from "react-router-dom";

import { Animacao } from "../../Components";

import style from "./LayoutPadrao.module.css";

import ilustracao from "../../assets/illustration.svg";

const LayoutPadrao = () => {
  return (
    <Animacao>
      <div className={style.close}>
        <div className="Container">
          <Outlet />
          <div className={style.ilustracao}>
            <img src={ilustracao} alt="icon" />
          </div>
        </div>
      </div>
    </Animacao>
  );
};

export { LayoutPadrao };
