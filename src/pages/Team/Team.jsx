import style from "./Team.module.css";
import { motion } from "framer-motion";

import { Animacao, BoasVindas, CardsEquipe } from "../../Components";

const Team = () => {
  return (
    <div className={style.Equipe}>
      <BoasVindas>Suas Equipes</BoasVindas>
      <Animacao>
        <div className={style.cards}>
          <CardsEquipe />
        </div>
      </Animacao>
    </div>
  );
};

export { Team };
