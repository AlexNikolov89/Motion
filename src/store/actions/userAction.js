import {USER_INFO} from './actionTypes'
import {baseUrl} from '../baseUrl'

export const userAction = (userInfo) => async (dispatch, getState) => {
    const { token } = getState().authReducer;
    const url = `${baseUrl}/users/me/`;
    const config = {
        method: 'GET',
        headers: new Headers ({
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }),
    };
    const resp = await fetch(url, config);
    const data = await resp.json();
    console.log("🚀 ~ file: userAction.js ~ line 16 ~ userAction ~ data", data)
    return data
};
