const initialState = {
    fetching: false,
    photos: []
}
export default (state = initialState, action ={}) => {
    switch(action.type) {
        case 'GET_PHOTOS': {
            return {...state,
                fetching: true
            }
        }
        case 'GET_PHOTOS_SUCCESSFUL':{
            return {
                ...state,
                isLoading: false,
                photos: action.payload
            }
        }
        case 'FAILED':{
            return {
                ...state,
                fetching: false,
                errors: action.payload
            }
        }
        default: return state;
    }
}