import {baseUrl} from '../baseUrl'
import {GET_POSTS_ALL} from './actionTypes'


export const postAction = () => async (dispatch, getState) => {
    const { token } = getState().authReducer; 
    
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

export const myPostAction = () => async (dispatch, getState) => {
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
    //console.log("🚀 ~ file: postAction.js ~ line 43 ~ postUserAction ~ data", data)
    return data;
}


