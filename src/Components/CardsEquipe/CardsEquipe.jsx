import React, { useState } from "react";
import style from "./CardsEquipe.module.css";

import equipe1 from "../../assets/equipes/equipe1.jpg";
import equipe2 from "../../assets/equipes/equipe2.jpg";
import equipe3 from "../../assets/equipes/equipe3.jpg";
import equipe4 from "../../assets/equipes/equipe4.jpg";

import adicionar from "../../assets/icons/Adicionar.svg";

const CardsEquipe = () => {
  const [equipes] = useState([
    {
      id: 1,
      capa: equipe1,
      equipe: "Congonhas",
      pessoas: 25,
      responsabilidades: "Identificar erros de processos gerenciais",
    },
    {
      id: 2,
      capa: equipe2,
      equipe: "Guarulhos",
      pessoas: 18,
      responsabilidades: "Monitorar desempenho de sistemas",
    },
    {
      id: 3,
      capa: equipe3,
      equipe: "Santos Dumont",
      pessoas: 12,
      responsabilidades: "Acompanhar indicadores de qualidade",
    },
    {
      id: 4,
      capa: equipe4,
      equipe: "Campinas",
      pessoas: 10,
      responsabilidades: "Verificar conformidades técnicas",
    },
  ]);

  return (
    <div className={style.CardsEquipe}>
      {equipes.map((item) => (
        <div key={item.id} className={style.Equipes} title={item.equipe}>
          <div className={style.img}>
            <img src={item.capa} alt={`Equipe ${item.equipe}`} />
          </div>

          <div>
            <h2>{item.equipe}</h2>
            <p>{item.responsabilidades}</p>
          </div>

          <div className={style.Pessoas}>
            {item.pessoas} <span>Pessoas</span>
          </div>
        </div>
      ))}

      <div className={style.Equipes}>
        <button>
          <img src={adicionar} alt="Inserir novo evento" />
        </button>
        <span className={style.Pessoas}>Adicionar nova equipe</span>
      </div>
    </div>
  );
};

export { CardsEquipe };
