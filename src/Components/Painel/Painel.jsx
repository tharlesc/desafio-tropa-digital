import style from "./Painel.module.css";

const Painel = (props) => {
  const { children } = props;
  return <div className={style.Painel}>
    {children}
  </div>;
};

export { Painel };
