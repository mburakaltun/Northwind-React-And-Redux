import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriesListReducer from "./categoriesListReducer";

const roodReducer = combineReducers({
      changeCategoryReducer,
      categoriesListReducer
})

export default roodReducer;