import style from './BotaoBranco.module.css'

const BotaoBranco = (props) => {
    const { children } = props
    return (
        <button className={style.BotaoBranco}>
            { children }
        </button>
    );
};

export { BotaoBranco };