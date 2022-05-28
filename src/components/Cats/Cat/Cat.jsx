import styles from "./Cat.module.css";
import {useState} from "react";
import emptyHeart from "../../../static/images/empty-heart.png";
import heart from "../../../static/images/heart.png";
import {connect} from "react-redux";
import {add2Favorites, removeFromFavorites} from "../../../redux/reducers/cats-reducer";
import {getFavoriteCatsSelector} from "../../../redux/selectors/cats-selector";

const Cat = ({cat, favoriteCats, add2Favorites, removeFromFavorites}) => {
    const [hidden, setHidden] = useState(true);
    const [filled, setFilled] = useState(false);

    const inFavorites = Array.from(favoriteCats, c => c.id).includes(cat.id);

    return (
        <div
            className={styles.cat}
            onMouseOver={() => setHidden(false)}
            onMouseOut={() => setHidden(true)}
        >
            <img className={hidden ? styles.common : styles.active} src={cat.url} alt="cat"/>
            <div className={styles.like}
                 onMouseOver={() => setHidden(false)}
            >
                <img
                    onMouseOver={() => setFilled(true)}
                    onMouseOut={() => setFilled(false)}
                    hidden={hidden}
                    src={inFavorites ? heart : filled ? heart : emptyHeart}
                    alt="Лайкнуть"
                    title={inFavorites ? 'Не удаляй из избранных, прошу...' : 'Лайкни меня :З'}
                    onClick={inFavorites ? () => removeFromFavorites(cat) : () => add2Favorites(cat)}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    favoriteCats: getFavoriteCatsSelector(state),
})

export default connect(mapStateToProps, {
    add2Favorites, removeFromFavorites
})(Cat);
