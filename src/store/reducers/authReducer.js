import {SET_USER, USER_LOGIN, SET_TOKEN, USER_LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: null,
    token: null,
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            const token = action.payload;
            return {...state, token};
        }
        case 'USER_DATA': {
            const user = action.payload;
            return {...state, user }
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