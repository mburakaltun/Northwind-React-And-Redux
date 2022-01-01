import {createStore, applyMiddleware} from "redux";
import roodReducer from "./index";
import thunk from "redux-thunk";

export default function configureStore() {
    return createStore(roodReducer, applyMiddleware(thunk))
}