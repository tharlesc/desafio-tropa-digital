import style from "./Inscritos.module.css";

import { Animacao, BoasVindas, ListaInscritos, Painel } from "../../Components";

const Inscritos = () => {
  return (
    <div className={style.Inscritos}>
      <BoasVindas>Inscritos</BoasVindas>

      <Animacao>
        <Painel>
          <ListaInscritos />
        </Painel>
      </Animacao>
    </div>
  );
};

export { Inscritos };
