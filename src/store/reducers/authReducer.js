import {SET_USER, USER_LOGIN, SET_TOKEN, USER_LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: [],
    token: null,
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state, 
                token: action.payload
            };
        }
        case 'USER_DATA': {
            return {
                ...state, 
                user: action.payload 
            }
        }
        case USER_LOGOUT: {
            console.log('clear local storage');
            console.log(localStorage)
            localStorage.clear();
            let state = {...initialState};
            return state;
        }
        default:
            return state;
    }
}

export default authReducer;
