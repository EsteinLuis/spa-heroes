import {types} from "../types/types.js";

export const authReducer = (state = {}, action) => {
    switch ( action.type ){
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            }

        case types.logout:
            return {
                logged: false,
                user: action.payload,
            };

        default:
            return state;
    }
}