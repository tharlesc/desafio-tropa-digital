import style from "./MudarFotoPerfil.module.css";

import fotoPerfil from "../../assets/FotoPerfil/FotoPerfil1.png";
import { InputFile } from "../InputFile/InputFile";

const MudarFotoPerfil = () => {
  return (
    <div className={style.MudarFotoPerfil}>
      <img
        src={fotoPerfil}
        alt="Sua foto de perfil"
        className={style.mudarimg}
      />
      <div className={style.inputfoto}>
        <span>Mudar Foto de Perfil</span>
        <InputFile />
      </div>
    </div>
  );
};

export { MudarFotoPerfil };
