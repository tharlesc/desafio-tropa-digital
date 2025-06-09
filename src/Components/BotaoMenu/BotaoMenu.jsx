import style from './BotaoMenu.module.css';

const BotaoMenu = (props) => {
    const { children } = props
    return <button className={style.BotaoMenu}>{children}</button> ;
};

export { BotaoMenu };