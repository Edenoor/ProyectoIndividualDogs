import{GET_ALL_DOGS, GET_DOG, CREATE_DOG, UNMOUNT_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG_BY_NAME} from './actions'

const initialState = {
    dogs: [],
    temperaments: [],
    dog: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
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
            default:
                return state
    }
};

export default rootReducer