import {USER_REGISTRATION} from './actionTypes';
import {baseUrl} from '../baseUrl';

export const registrationAction = (email) => async dispatch => {
    const url = `${baseUrl}/auth/registration/`;
    const config = {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({email})
    }
    let resp = await fetch(url, config);
    const data = resp.data
    console.log("🚀 ~ file: registrationAction.js ~ line 13 ~ resp", resp)
    dispatch({
        type: USER_REGISTRATION,
        payload: email
    })
}