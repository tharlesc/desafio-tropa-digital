import style from "./Button.module.css";

const Button = (props) => {
  const { children, type = "" } = props;
  return <button className={style.button} type={type}>{children}</button>;
};

export { Button };
