import Cat from "../Cat/Cat";
import styles from "./All.module.css";
import Preloader from "../../Preloader/Preloader";

const All = (props) => {
    return (
        <div className={styles.allCatsWrapper}>
            {props.cats.length ?
                <div className={styles.allCats}>
                    {props.cats.map(cat => {
                        return <Cat key={cat.id} cat={cat}/>
                    })}
                </div> : null}
        </div>
    );
}

export default All;
