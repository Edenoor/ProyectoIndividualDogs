import axios from 'axios';
//redux-thunk permite realizar acciones asincronicas
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const UNMOUNT_ALL_DOGS = 'UNMOUNT_ALL_DOGS'

export const getAllDogs = () => dispatch => {
    try{
        return axios.get('/')
        .then(res => dispatch({type: GET_ALL_DOGS, payload: res.data}))
    }catch(e) {
        console.log(e)
    }
}

export const getOneDog = id => dispatch => {
    try{
        return axios.get('/dogs/:id')
        .then(res => dispatch ({type: GET_DOG, payload: res.data}))
    }catch(e) {
        console.log(e)
    }
}

export const createDog = values => dispatch => {
    try{
        return axios.post('/dogs')
        .then(res => dispatch ({type: CREATE_DOG, payload: res.data}))
    }catch(e){
        console.log(e)
    }
}

export const unmountAllDogs = ()  => ({type: UNMOUNT_ALL_DOGS})