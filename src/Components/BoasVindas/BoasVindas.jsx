import style from './BoasVindas.module.css';

import { username } from '../Perfil/Perfil';

const BoasVindas = (props) => {

  const { children } = props;
  const nome = username;

  return (

    <div className={style.BoasVindas}>
      <h3 className={style.Welcome}>
        Bem vindo de volta, <span>{nome}</span>
      </h3>
      

      <h2 className={style.Title}>{ children }</h2>
    </div>
  );
};

export { BoasVindas };