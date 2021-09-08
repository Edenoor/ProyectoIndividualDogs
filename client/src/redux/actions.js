import axios from 'axios';
//redux-thunk permite realizar acciones asincronicas
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const UNMOUNT_ALL_DOGS = 'UNMOUNT_ALL_DOGS'
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'

export const getAllDogs = name => dispatch => {
    try{
        if(name) {
             return axios.get(`/dogs?name=${name}`)
             .then(res => dispatch({type: GET_ALL_DOGS, payload: res.data}))
}

        return axios.get('/')
        .then(res => dispatch({type: GET_ALL_DOGS, payload: res.data}))
    }catch(e) {
        console.log(e)
    }
}

export const getOneDog = id => dispatch => {
    try{
        return axios.get(`/dogs/${id}`)
        .then(res => dispatch ({type: GET_DOG, payload: res.data}))
    }catch(e) {
        console.log(e)
    }
}

// export const getDogByName = id => dispatch => {
//     try{
//         return axios.get(`/dogs`)
//         .then(res => dispatch ({type: GET_DOG_BY_NAME, payload: res.data}))
//     }catch(e) {
//         console.log(e)
//     }
// }

export const createDog = values => dispatch => {
    try{
        return axios.post('/dog', {...values})
        .then(res => dispatch ({type: CREATE_DOG, payload: res.data}))
    }catch(e){
        console.log(e)
    }
}

export const getAllTemperaments = () => dispatch => {
    try{
        return axios.get('/temperaments')
        .then(res => dispatch({type: GET_ALL_TEMPERAMENTS, payload: res.data}))
    }catch(e) {
        console.log(e)
    }
}

export const unmountAllDogs = ()  => ({type: UNMOUNT_ALL_DOGS})