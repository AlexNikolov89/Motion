import {GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL} from '../actions/actionTypes'

export const userReducer = (state={ user: {} }, action) => {
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case GET_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}