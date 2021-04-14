import {USER_REGISTRATION} from '../actions/actionTypes';

const initialState = {
    email: '',
    code: '',
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    password2: '',
}

export const regValReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_REGISTRATION: {
            return { ...action.payload }
        }
        default:
            return state;
    }
}
