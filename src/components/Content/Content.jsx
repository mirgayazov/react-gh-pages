import {Route, Routes} from "react-router-dom";
import Favorites from "../Cats/Favorites/Favorites";
import AllContainer from "../Cats/All/AllContainer";
import Preloader from "../Preloader/Preloader";

const Content = (props) => {
    return (
        <Routes>
            <Route path="/*" element={<>
                <AllContainer/>
                <Preloader/>
            </>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    );
}

export default Content;
