import {GET_POSTS_ALL, CREATE_NEW_POST, DELETE_POST} from '../actions/actionTypes'

const initialState = {
    posts: [],
}

export const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_POSTS_ALL: 
            return {
                ...state, 
                posts: action.payload
            }
        case CREATE_NEW_POST: {
            return {
                ...state, 
                posts: action.payload
            }
        }
        case DELETE_POST: {
            // const newState = Obect.assing({}, state);
            // newState = state.findIndex(post => {
            //     return post.id == action.post.id
            // })
            // return newState
        }
        default:
            return state
    }
}
