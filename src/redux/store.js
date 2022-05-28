import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import catsReducer from "./reducers/cats-reducer";

let appReducer = combineReducers({
    cats: catsReducer,
});

const store = createStore(appReducer, applyMiddleware(thunkMiddleware))

export default store;
