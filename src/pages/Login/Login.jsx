import style from "./Logon.module.css";

import logo from "/src/assets/logotropa.svg";
import { Form } from "../../Components/Form";

const Login = () => {
  return (
    <div className={style.Logon}>
        <img src={logo} alt="logo-tropa" />

        <div className="Outdoor">
          <h1>Bem-vindo de volta</h1>
          <p>Entre com sua conta para acessar o painel.</p>
        </div>

        <Form />
    </div>
  );
};

export { Login };
