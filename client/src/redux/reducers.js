import{GET_ALL_DOGS, GET_DOG, CREATE_DOG, UNMOUNT_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG_BY_NAME, ORDER_FILTER, FILTER_BY_TEMPERAMENT, FILTER_CREATED, ORDER_BY_NAME} from './actions'

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dog: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };
        case GET_DOG:
            return{
                ...state,
                dog: action.payload
            };
            case GET_DOG_BY_NAME:
                return{
                    ...state,
                    dog: action.payload
                };
            case CREATE_DOG:
                return{
                    ...state,
                    // dogs: [
                    //     ...state.dogs,
                    //     action.payload
                    // ]
                    dogs: state.dogs.concat(action.payload)
                };
                case UNMOUNT_ALL_DOGS:
                    return{
                        ...state,
                        dogs: []
                    };
                case GET_ALL_TEMPERAMENTS:
                    return {
                        ...state,
                        temperaments: action.payload,
                    };
                case FILTER_BY_TEMPERAMENT :
                    let allDogs = state.allDogs
                    allDogs = allDogs.filter(d => d.temperament !== undefined)
                    const temperamentFiltered = action.payload ? allDogs.filter(el =>  el.temperament.includes(action.payload)) : allDogs
                    console.log(temperamentFiltered)
                    return {
                        ...state,
                        dogs: temperamentFiltered
                    };
                case FILTER_CREATED :

                const createdFilter = action.payload === 'created' ? state.allDogs.filter(el => el.id.length > 10) : state.allDogs.filter(el => typeof el.id == Number)
                return {
                    ...state,
                    dogs: action.payload === 'All' ? state.allDogs : createdFilter
                };
                case ORDER_BY_NAME : 
                let sortedArr = action.payload === 'asc' ? 
                    state.dogs.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if(b.name > a.name) {
                            return -1
                        }
                        return 0
                    }) :
                    state.dogs.sort(function(a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1
                        }
                    return {
                        ...state,
                        dogs: sortedArr

                    }

                    })


            default:
                return state
    }
};

export default rootReducer