import style from './BotaoApp.module.css'

const BotaoApp= (props) => {
    const { children } = props
    return (
        <button className={style.BotaoApp}>
            { children }
        </button>
    );
};

export { BotaoApp };