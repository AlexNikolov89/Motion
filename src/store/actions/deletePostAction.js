import {DELETE_POST} from '../actions/actionTypes'

export const postAction = () => async (dispatch, getState) => {
    const { authReducer:{ token } } = getState(); 
    //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA5NDM0NDYyLCJqdGkiOiJkYjYyY2ZhY2I2NzE0ODg3OTczYjhlYzQyMGEyZGYyMyIsInVzZXJfaWQiOjE3Nn0.S4OSryiueMQdA5DU7h9YFw4bYlU0ogDXhgLGp50DOlw'
    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/<int:post_id>/';
    const config = {
        method: 'Delete',
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