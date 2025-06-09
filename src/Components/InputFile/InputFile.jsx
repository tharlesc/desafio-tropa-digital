import style from './InputFile.module.css';

import escolher from '../../assets/icons/escolherarq.svg';

const InputFile = () => {
    return (
        <div className={style.InputFile}>
            <input type="file"  />
            <button>
                <span>Escolher arquivo</span>
                <img src={escolher} alt="Escolher arquivo" />
            </button>

        </div>
    );
};

export { InputFile };