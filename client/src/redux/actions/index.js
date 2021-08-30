import axios from "axios";

export const GET_PAGINATION = 'GET_PAGINATION';
export const GET_ID = 'GET_ID'; 
export const GET_ALL = 'GET_ALL';


export const getPaginationServer = (page = 0, limit= 8) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/dogs?limit=${limit}&page=${page}`)
        .then(response => {
            response = dispatch({
                type: GET_PAGINATION,
                payload: response.data
            })
        })
    }
}

export const getId = (paramID) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/dogs/${Number(paramID)}`)
        .then(response => dispatch({
            type: GET_ID,
            payload: response.data
        }))

    }
}

export const getAll = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3001/dogs")
        .then(response => {
            response = dispatch({
                type: GET_ALL,
                payload: response.data
            })
        })
    }
}
