import { useState } from "react";

import style from "./Eventos.module.css";

import {
  BoasVindas,
  Painel,
  PesquisaInput,
  TabelaEventos,
  BotaoApp,
  BotaoBranco,
  Animacao,
} from "../../Components";

import adicionar from "../../assets/icons/Adicionar.svg";

const Eventos = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div className={style.Eventos}>
      <BoasVindas>Todos os Eventos</BoasVindas>

      <Animacao>
        <Painel>
          <header>
            <PesquisaInput tipo={"input"} texto={"Buscar Eventos"} />

            <BotaoApp>
              <img src={adicionar} alt="Inserir novo evento" />
              <span>Inserir Novo</span>
            </BotaoApp>
          </header>

          <TabelaEventos setHoveredRow={setHoveredRow} />

          <footer>
            <BotaoBranco>
              <span>Anterior</span>
            </BotaoBranco>
            <BotaoBranco>
              <span>1</span>
            </BotaoBranco>
            <BotaoBranco>
              <span>2</span>
            </BotaoBranco>
            <BotaoBranco>
              <span>3</span>
            </BotaoBranco>
            <BotaoApp>
              <span>Próxima</span>
            </BotaoApp>
          </footer>
        </Painel>
      </Animacao>
    </div>
  );
};

export { Eventos };
