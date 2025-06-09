import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import styles from "./LayoutApp.module.css";

import { Menu } from "../../Components/Menu";
import icone from "../../assets/icons/IconMenu.svg";

const LayoutApp = () => {
  const [menuAberto, setMenuAberto] = useState(window.innerWidth > 790);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 790) {
        setMenuAberto(true); // Sempre o menu mostra em telas grandes
      } else {
        setMenuAberto(false); // Esconde o menu em telas pequenas
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica logo ao carregar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const alternarMenu = () => {
    setMenuAberto((prev) => !prev);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.menuToggleWrapper}>
        <button className={styles.OpcaoReduzido} onClick={alternarMenu}>
          <img src={icone} alt="Abrir menu" />
        </button>
      </div>

      {menuAberto && <Menu />}

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export { LayoutApp };
