import {USER_INFO} from './actionTypes'

export const userAction = (token = null) => async (dispatch, getState) => {
    const userToken = token ? token : getState().user.token;

    const url = 'https://motion.propulsion-home.ch/backend/api/users/me/';
    const config = {
        method: 'GET',
        headers: new Headers ({
            Accept: 'application/json',
            Authorization: `Bearer ${userToken}`,
        }),
    };
    const res = await fetch(url, config);
    const data = await res.json();
    dispatch({
        type: USER_INFO,
        payload: {
            user: data,
            token: userToken,
        },
    });
};