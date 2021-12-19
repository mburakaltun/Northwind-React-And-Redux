import * as actionTypes from "./actionTypes";

export function changeAction(category) {
    return {type: actionTypes.CHANGE_CATEGORY, payload: category}
}