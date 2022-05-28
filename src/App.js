import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className={styles.app}>
            <Navbar/>
            <Content/>
            <ToastContainer />
        </div>
    );
}

export default App;
