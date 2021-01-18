import {baseUrl} from '../baseUrl'
import {GET_POSTS_ALL} from './actionTypes'


// export const storePosts = (data) => {
//     return {
//         type: GET_POSTS_ALL,
//         payload: data
//     }
// }

export const postAction = () => async (dispatch, getState) => {
    const { token } = getState().authReducer; 
    console.log("🚀 ~ file: postAction.js ~ line 14 ~ postAction ~ token", token)
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwNDc1NjYyLCJqdGkiOiIzNTU4N2EyMDgzMDg0MTQ5OGU2MzRmZjZhY2ZhZDM0YiIsInVzZXJfaWQiOjE3Nn0.8-fQXoEg7aqX9qDsu2nN3KYtIItGDJvbFr77QnFIyh0'
    const url = `${baseUrl}/social/posts/`;
    const config = {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
        }),
    };
    const resp = await fetch(url, config);
    const data = await resp.json();
    console.log("🚀 ~ file: postAction.js ~ line 25 ~ postAction ~ data", data)
    
    return data
}

export const postUserAction = () => async (dispatch, getState) => {
    const { token } = getState().authReducer;
    const url = `${baseUrl}/social/posts/me/`;
    const config = {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
        }),
    };
    const resp = await fetch(url, config);
    const data = await resp.json();
    return data;
}

