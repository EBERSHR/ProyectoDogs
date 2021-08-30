// import axios from "axios";
import {
    GET_PAGINATION,
    GET_ID,
    GET_ALL
} from "../actions";

const initialState = {
    pagination: [],
    details: [],
    allDogs: [],
    x: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            }

        case GET_ID:
            return {
                ...state,
                details: action.payload
            }

        case GET_ALL:
            return {
                ...state,
                allDogs: action.payload
            }

        default:
            return state;
    }
}