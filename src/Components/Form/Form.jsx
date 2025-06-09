import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./Form.module.css";

import { Button } from "../Button/Button";

const Form = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const correctEmail = "tropadigital@email.com";
    const correctPassword = "senha123";

    if (email === correctEmail && password === correctPassword) {
      setError("");
      navigate("/Dashboard");
    } else {
      setError("E-mail ou senha inválidos. Tente novamente.");
    }
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <label>
        E-mail
        <input
          type="email"
          placeholder="seunome@seuservidor.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Senha
        <input
          type="password"
          placeholder="Digite aqui"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <Button type="submit">Enviar</Button>

      {error && <p className={style.errorMessage}>{error}</p>}
      
    </form>
  );
};

export { Form };
