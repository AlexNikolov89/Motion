export const postAction = () => async (dispatch, getState) => {
    //const {token} = getState()
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA5MzQ3MTk2LCJqdGkiOiI2NDhjN2UzZjY3MzU0OGZkYTBmZTE3OGZiNjc1ZmY3NiIsInVzZXJfaWQiOjE3Nn0.fjRBE5y9QCnaPzE6AXG0dArTaTPTQeb7ur1n3LA8w5A'
    const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/';
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

