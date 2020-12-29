import {GET_POSTS_ALL, CREATE_NEW_POST} from '../actions/actionTypes'

const initialState = {
    getAllPosts: [],
    newPost: null,
    specificPost: null,
}

export default function postReducer (state=initialState, action) {
    switch (action.type) {
        case GET_POSTS_ALL: {
            const newState = {...state}
            newState.getAllPosts = action.payload
            return newState
        }
        case CREATE_NEW_POST: {
            const newState = {...state}
            newState.newPost = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}