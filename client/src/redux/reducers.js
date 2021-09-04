import{GET_ALL_DOGS, GET_DOG, CREATE_DOG, UNMOUNT_ALL_DOGS} from './actions'

const initialState = {
    dogs: [],
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
                    }
            default:
                return state
    }
};

export default rootReducer