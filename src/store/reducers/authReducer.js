import {SET_USER, USER_LOGIN, SET_TOKEN, USER_LOGOUT } from '../actions/actionTypes';

const initialState = {
    user: null,
    token: null,
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            const token = action.payload;
            console.log('in authReducer: ', token);
            return {...state, token: token}
        }
        case SET_USER: {
            const newState = {...state};
            newState.token = action.payload[0];
            newState.user = action.payload[1];
            return newState;
        }
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload;
            return newState;
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