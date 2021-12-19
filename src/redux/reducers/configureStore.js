import {createStore} from "redux";
import roodReducer from "./index";

export default function configureStore() {
    return createStore(roodReducer)
}