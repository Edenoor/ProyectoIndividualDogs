import axios from 'axios';
//redux-thunk permite realizar acciones asincronicas
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG = 'GET_DOG'
export const CREATE_DOG = 'CREATE_DOG'
export const UNMOUNT_ALL_DOGS = 'UNMOUNT_ALL_DOGS'
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const ORDER_FILTER = 'ORDER_FILTER'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'

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

// export const orderFilter = values => dispatch => {
//     const {name, temperaments, order} = values;
//     // let url_params = (name) ? `name=${name}&`: `` ;
//     // url_params += (temperaments) ? `temperaments=${temperaments}` : ``;
//     // return axios.get(`/dogs?${url_params}`)
//     return axios.get('/')
//     .then(res => {
//         if(order) return dispatch({type: ORDER_FILTER, payload: res.data, order: order })
//         return dispatch({type: GET_ALL_DOGS, payload: res.data})
//     })
//     .catch(err => console.error(err))
// }

export const filterDogsByTemperament = payload => {
    console.log(payload)
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export const filterCreated = payload => {
    return{
        type: 'FILTER_CREATED',
        payload
    }
}

export const orderByName = payload => {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}