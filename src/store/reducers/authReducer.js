import {SET_TOKEN} from '../actions/actionTypes';

const initialState = {
    token: null,
}

export default function authReducer (state=initialState, action) {
    switch (action.type) {
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}