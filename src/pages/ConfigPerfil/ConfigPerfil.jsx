import { Animacao, BoasVindas, MudarFotoPerfil } from "../../Components";

import style from "./ConfigPerfil.module.css";

import { username, funcao } from "../../Components/Perfil";

const ConfigPerfil = () => {
  return (
    <div className={style.ConfigPerfil}>
      <BoasVindas>Alterar Dados</BoasVindas>

      <Animacao>
        <MudarFotoPerfil />
        <div className={style.MudarNome}>
          <div>
            <span>Seu Nome</span>
            <h3>{username}</h3>
          </div>
          <div>
            <span>Função</span>
            <h3>{funcao}</h3>
          </div>
        </div>
      </Animacao>
    </div>
  );
};

export { ConfigPerfil };
