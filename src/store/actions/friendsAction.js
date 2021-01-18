import {FRIENDS, FLLOWERS, FOLLOWEES} from './actionTypes';
import {baseUrl} from '../baseUrl';

export const friendsAction = (friends) => async (dispatch, getState) => {
    const {token} = getState().authReducer;
    const url = `${baseUrl}/users/`;
    const config = {
        method: 'GET',
        headers: new Headers({
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        })
    }
    let resp = await fetch(url, config);
    console.log("🚀 ~ file: friendsAction.js ~ line 15 ~ friendsAction ~ resp", resp)
    const data = await resp.json()
    console.log("🚀 ~ file: friendsAction.js ~ line 17 ~ friendsAction ~ data", data)
    return data
}

