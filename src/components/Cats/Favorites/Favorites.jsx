import styles from "../All/All.module.css";
import Cat from "../Cat/Cat";
import {connect} from "react-redux";
import {getFavoriteCatsSelector} from "../../../redux/selectors/cats-selector";
import Preloader from "../../Preloader/Preloader";

const Favorites = (props) => {
    return (
        <div className={styles.allCatsWrapper}>
            {props.favoriteCats.length ?
                <div className={styles.allCats}>
                    {props.favoriteCats.map(cat => {
                        return <Cat key={cat.id} cat={cat}/>
                    })}
                </div> : <Preloader title={'У вас еще нет любимых котиков :( Скорее добавьте!'} />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    favoriteCats: getFavoriteCatsSelector(state),
})

export default connect(mapStateToProps, {})(Favorites);
