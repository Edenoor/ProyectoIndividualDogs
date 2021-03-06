import{GET_ALL_DOGS, GET_DOG, CREATE_DOG, UNMOUNT_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG_BY_NAME, FILTER_BY_TEMPERAMENT, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_WEIGHT} from './actions'

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
            console.log("SHOW ME",  action.payload)
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
                    let createdFilter = [];
                    switch(action.payload) {
                        case 'created':
                            createdFilter = state.allDogs.filter(el => el.id.length > 10);
                        break;
                        case 'api':
                            createdFilter = state.allDogs.filter(el => !isNaN(el.id));
                        break;
                        default :
                            createdFilter = state.allDogs;
                    }

                return {
                    ...state,
                    dogs: createdFilter
                };
                case ORDER_BY_NAME : 
                let sortedArr = (action.payload === 'asc') ? 
                    state.dogs.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if(b.name > a.name) {
                            return -1
                        }
                        return 0;
                    }) :
                    state.dogs.sort(function(a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1
                        }
                        return 0;

                    });
                    return {
                        ...state,
                        dogs: sortedArr

                    }
                    case ORDER_BY_WEIGHT : 
                    let arr = (action.payload === 'heavy') ? 
                    state.dogs.sort(function(a, b){
                        if(Number(a.weight.split('-')[0]) > (Number(b.weight.split('-')[0] ))) return -1;
                        if(Number(b.weight.split('-')[0]) > (Number(a.weight.split('-')[0] ))) return 1;
                        return 0
                    }) :
                    state.dogs.sort(function(a, b){
                        if(Number(a.weight.split('-')[0]) > (Number(b.weight.split('-')[0] ))) return 1;
                        if(Number(b.weight.split('-')[0]) > (Number(a.weight.split('-')[0] ))) return -1;
                        return 0
                    }) 
                    return {
                        ...state,
                        dogs: arr

                    }
            default:
                return state
    }
};

export default rootReducer