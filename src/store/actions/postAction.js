import {baseUrl} from '../baseUrl'

export const postAction = (token) => async (dispatch, getState) => {
    //const token = getState(); 
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA5ODEyNjM1LCJqdGkiOiIxMjg4NmMwNzc4Y2E0Y2E2ODM3ZjdhZjdjZDk1NGY2OCIsInVzZXJfaWQiOjE3Nn0.HmTXXdy9iDiqibGegbnZoNzul6lql_ViTo7iLiq9OJA'
    const url = `${baseUrl}/social/posts/`;
    const config = {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
             
        }),
    };
    const response = await fetch(url, config);
    console.log(response)
    const data = await response.json();
    console.log(data)
    return data
}

