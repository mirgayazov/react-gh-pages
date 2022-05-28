import {catsAPI} from "../../api/cats-api";
import {toast} from "react-toastify";

const SET_NEW_CATS = "SET_NEW_CATS";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
const LS_KEY = "unique-name-for-kamil-favorite-cats-array";

const toastOptions = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

let initialState = {
    allCats: [],
    favoriteCats: JSON.parse(localStorage.getItem(LS_KEY)) ?? [],
    isFetching: false,
};

const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_CATS:
            return {
                ...state,
                allCats: [...state.allCats, ...action.cats]
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoriteCats: [...state.favoriteCats, action.cat],
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favoriteCats: state.favoriteCats.filter(c => c.id !== action.cat.id),
            }
        default:
            return state;
    }
}

const setCats = (cats) => {
    return {
        type: SET_NEW_CATS,
        cats,
    }
}

export const add2Favorites = (cat) => {
    const favoriteCats = localStorage.getItem(LS_KEY);

    if (!favoriteCats) {
        let saved = [cat];
        localStorage.setItem(LS_KEY, JSON.stringify(saved))
    } else {
        let saved = JSON.parse(favoriteCats);

        if (!Array.from(saved, c => c.id).includes(cat.id)) {
            saved.push(cat);
            localStorage.setItem(LS_KEY, JSON.stringify(saved))
        }
    }
    toast.success('Котик добавлен', toastOptions);

    return {
        type: ADD_TO_FAVORITES,
        cat,
    }
}

export const removeFromFavorites = (cat) => {
    let favoriteCats = JSON.parse(localStorage.getItem(LS_KEY));

    favoriteCats = favoriteCats.filter(c => c.id !== cat.id);
    localStorage.setItem(LS_KEY, JSON.stringify(favoriteCats));
    toast.warn('Котик удален', toastOptions);

    return {
        type: REMOVE_FROM_FAVORITES,
        cat,
    }
}

export const getCats = () => async (dispatch) => {
    const response = await catsAPI.getCats();

    const {status, data: cats} = response;
    if (status === 200) {
        dispatch(setCats(cats))
    }
}

export default catsReducer;
