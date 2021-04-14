import {USER_LOGIN, SET_USER} from './actionTypes';
import {baseUrl} from '../baseUrl'

export const authAction = (token) => {
    return {
        type: USER_LOGIN,
        payload: token
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

