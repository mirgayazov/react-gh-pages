import preloaderGif from "../../static/images/preloader.gif";
import styles from "./Preloader.module.css";

const Preloader = ({title = 'Загружаем котиков ...'}) => {
    return (
        <div className={styles.preloaderWrapper}>
            <img src={preloaderGif} alt="Загружаем котиков..."/>
            <div>{title}</div>
        </div>
    )
}

export default Preloader;
