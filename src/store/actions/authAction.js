import {USER_LOGIN} from './actionTypes'

export const authAction = (token) => {
    return {
        type: 'USER_LOGIN',
        payload: token
    }
}



// export const authAction = (email, password) => async (dispatch, getState) => {
//     const { authReducer:{ token } } = getState(); 
//     const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';
//     const config = {
//         method: 'POST',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//         }),
//         body: JSON.stringify({email, password})
//     }
//     const res = await fetch (url, config)
//     //console.log(res)
//     const data = await res.json();
//     //console.log(data)
//     dispatch(setToken(data.access));
//     localStorage.setItem('token', data.access);
//     return data;
// }