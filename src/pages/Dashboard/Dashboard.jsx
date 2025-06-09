import { Animacao, BoasVindas, Grafico, Painel } from "../../Components";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={style.Dashboard}>
      <BoasVindas>Dashboard</BoasVindas>
      <Animacao>
        <Painel>
          <Grafico />
        </Painel>
      </Animacao>
    </div>
  );
};

export { Dashboard };
