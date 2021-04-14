import {USER_REGISTRATION} from './actionTypes';
import {baseUrl} from '../baseUrl';

export const validationAction = (userData) => async dispatch => {
    const url = `${baseUrl}/auth/registration/validation/`;
    const config = {
        method: 'PATCH',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(userData)
    }
    let resp = await fetch(url, config);
    resp = resp.json()
    console.log("🚀 ~ file: registrationAction.js ~ line 13 ~ resp", resp)
    dispatch({
        type: USER_REGISTRATION,
        payload: userData
    })
}
