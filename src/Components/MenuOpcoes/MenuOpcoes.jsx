import { useState, useRef, useEffect } from "react";

import styles from "./MenuOpcoes.module.css";

import opcoes from "../../assets/icons/Details.svg";
import vizualizar from "../../assets/icons/vizualizar.svg";
import editar from "../../assets/icons/editar.svg";
import excluir from "../../assets/icons/excluir.svg";

const MenuOpcoes = () => {
  const [mostrar, setMostrar] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickFora = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMostrar(false);
      }
    };

    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.wrapper}>
      <button onClick={() => setMostrar(!mostrar)} className={styles.botao}>
        <img src={opcoes} alt="Configurações" />
      </button>

      {mostrar && (
        <div className={styles.popup}>
          <button>
            <img src={vizualizar} alt="Vizualizar" />
            <span>Vizualizar</span>
          </button>

          <button>
            <img src={editar} alt="Editar" />
            <span>Editar</span>
          </button>

          <button className={styles.Excluir}>
            <img src={excluir} alt="Excluir evento" />
            <span>Excluir</span>
          </button>
        </div>
      )}
    </div>
  );
};

export { MenuOpcoes };
