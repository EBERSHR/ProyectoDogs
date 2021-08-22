import axios from "axios";
import { GET_ID_SERVER, GET_PAGINATION, 
    GET_PAGINATION_SERVER, GET_ID, GET_ALL_SERVER,
    GET_ALL } from "../actions";

const initialState = {
    pagination: [],
    details: [],
    allDogs: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PAGINATION_SERVER:
            return (dispatch) => {
                dispatch({ 
                    type: GET_PAGINATION_SERVER,
                    page: action.page,
                    limit: action.limit
                 });
                return axios.get(`http://localhost:3001/dogs?limit=${action.limit}&page=${action.page}`)
                    .then(response => {
                        response = dispatch({
                            type: GET_PAGINATION,
                            payload: response.data
                        })
                    })
            }

        case GET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            }

        case GET_ID_SERVER:
            console.log('ACTION.PARAMID', action.paramID);
            return (dispatch) => {
                dispatch({
                    type: GET_ID_SERVER,
                    paramID: action.paramID
                });
                return axios.get(`http://localhost:3001/dogs/:${Number(action.paramID)}`)
                .then(response => dispatch({
                    type: GET_ID,
                    payload: response.data
                })).catch(error => console.log(error))
        
            }

        case GET_ID:
            return {
                ...state,
                details: action.payload
            }
        
        case GET_ALL_SERVER:
            return (dispatch) => {
                dispatch({
                    type: GET_ALL_SERVER
                });
                return axios.get("http://localhost:3001/dogs")
                .then(response => {
                    response = dispatch({
                        type: GET_ALL,
                        payload: response.data
                    })
                })
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