import style from "./ConfigProfile.module.css";

import { Link } from "react-router-dom";

import { BotaoMenu } from "../BotaoMenu";
import { Perfil } from "../Perfil/Perfil";

import Profile from '../../assets/icons/Profile.svg'
import Logout from '../../assets/icons/Logout.svg'

const ConfigProfile = () => {
  return (
    <div className={style.ConfigProfile}>
      <Perfil />

      <Link to={"/Perfil"}>
      <BotaoMenu>
        <img src={Profile} alt="Alterar Dados" />
        <span>Alterar Dados</span>
        </BotaoMenu>
        </Link>

      <Link to={"/Login"}>
        <BotaoMenu>
        <img src={Logout} alt="Sair da Conta" title="Sair" />
          Sair
          </BotaoMenu>
      </Link>
    </div>
  );
};

export { ConfigProfile };
