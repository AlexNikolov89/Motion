import {FRIENDS, FLLOWERS, FOLLOWEES} from'../actions/actionTypes

const initialState = {
    friends: [],
    followers: [],
    followees: [],
}

export const friendsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FRIENDS: {
            return { ...state, friends: action.payload }
        }
        case FLLOWERS: {
            return { ...state, followers: action.payload }
        }
        case FOLLOWEES: {
            return { ...state, followees: action.payload }
        } 
        default:
            return state;
    }
}