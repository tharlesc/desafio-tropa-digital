import React, { useState } from "react";
import styles from "./TabelaEventos.module.css"; 

import { MenuOpcoes } from "../MenuOpcoes";

const TabelaEventos = () => {
  const [data] = useState([
    {
      id: 1,
      nomeEvento: "Clube do Laço Coração Pantaneiro",
      totalEquipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      id: 2,
      nomeEvento: "Clube do Laço Coração Pantaneiro",
      totalEquipes: 10,
      status: "Ativo",
      data: "09 a 11 de Junho",
    },
    {
      id: 3,
      nomeEvento: "Clube do Laço Coração Pantaneiro",
      totalEquipes: 10,
      status: "Inativo",
      data: "09 a 11 de Maio",
    },
    {
      id: 4,
      nomeEvento: "Clube do Laço Coração Pantaneiro",
      totalEquipes: 5,
      status: "Ativo",
      data: "09 a 11 de Agosto",
    },
  ]);

  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div className={styles.tabelaContainer}>
      <table>
        <thead>
          <tr>
            <th>Nome do evento</th>
            <th>Total de equipes</th>
            <th>Status</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr // Linha de dados
              key={item.id}
              onMouseEnter={() => setHoveredRow(item.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td>{item.nomeEvento}</td>
              <td>{item.totalEquipes}</td>
              <td>
                <span
                  className={`${styles.statusDot} ${
                    item.status === "Ativo" ? styles.ativo : styles.inativo
                  }`}
                ></span>
                {item.status}
              </td>
              <td className={styles.data}>{item.data}</td>
              <td>
                <MenuOpcoes />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { TabelaEventos };
