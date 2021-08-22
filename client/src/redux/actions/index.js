import axios from "axios";

export const GET_PAGINATION_SERVER = 'GET_PAGINATION_SERVER';
export const GET_PAGINATION = 'GET_PAGINATION';
export const GET_ID_SERVER = 'GET_ID_SERVER';
export const GET_ID = 'GET_ID'; 
export const GET_ALL_SERVER = 'GET_ALL_SERVER';
export const GET_ALL = 'GET_ALL';


export const getPaginationServer = (page = 0, limit= 3) => {
    return (dispatch) => {
        dispatch({
            type: GET_PAGINATION_SERVER,
            page,
            limit
        });
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
        dispatch({
            type: GET_ID_SERVER,
            paramID
        });
        return axios.get(`http://localhost:3001/dogs/${Number(paramID)}`)
        .then(response => dispatch({
            type: GET_ID,
            payload: response.data
        }))

    }
}

export const getAll = () => {
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
}

// return axios.get(`http://localhost:3001/dogs/111`)
