import style from "./Error404.module.css";

import icon from "../../assets/iconvetor.svg";

const Error404 = () => {
  return (
    <div className={style.Error404}>
      <div className={style.icone}>
        <img src={icon} alt="?" />
        <h2>404</h2>
      </div>
      <h1>Ops... Página não encontrada</h1>
    </div>
  );
};

export { Error404 };
