import style from "./PesquisaInput.module.css";

const PesquisaInput = ({ tipo, texto }) => {
  return (
    <input className={style.PesquisaInput} type={tipo} placeholder={texto} />
  );
};

export { PesquisaInput };
