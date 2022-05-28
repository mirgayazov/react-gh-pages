import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={styles.navbarWrapper}>
            <nav>
                <NavLink
                    className={(navData) => navData.isActive ? styles.activeLink : ""}
                    to={'/'}>
                    Все котики
                </NavLink>
                <NavLink
                    className={(navData) => navData.isActive ? styles.activeLink : ""}
                    to={'/favorites'}>
                    Любимые котики
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
