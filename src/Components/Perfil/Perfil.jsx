import style from "./Perfil.module.css";

import FotoPerfil from "../../assets/FotoPerfil/FotoPerfil1.png";

const username = "Juliano Martins";
const funcao = "Administrador";

const Perfil = () => {
  return (
    <div className={style.Perfil}>
      <div> 
        <img src={ FotoPerfil } alt="Foto de Perfil" className={style.MolduraPerfil} />
      </div>
      <div className={style.Info}>
        <h3 className={style.UserName}>{username}</h3>
        <p className={style.Funcao}>{funcao}</p>
      </div>
    </div>
  );
};


export { Perfil, username, funcao };
