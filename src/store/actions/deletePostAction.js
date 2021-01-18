import {DELETE_POST} from '../actions/actionTypes'
import {baseUrl} from '../baseUrl'

export const deletePostAction = (id) => async (dispatch, getState) => {
    const { token } = getState().authReducer; 
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA5ODEyNjM1LCJqdGkiOiIxMjg4NmMwNzc4Y2E0Y2E2ODM3ZjdhZjdjZDk1NGY2OCIsInVzZXJfaWQiOjE3Nn0.HmTXXdy9iDiqibGegbnZoNzul6lql_ViTo7iLiq9OJA'
    const url = `${baseUrl}/social/posts/${id}/`;
    const config = {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
             
        }),
    };
    let response = await fetch(url, config);
    response =  response.id;
    console.log("🚀 ~ file: deletePostAction.js ~ line 18 ~ deletePostAction ~ response", response)
    dispatch({
        type: DELETE_POST,
        payload: id
    })

}