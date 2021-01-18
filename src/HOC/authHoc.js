import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const authHOC = (WrappedComponent) => {
    return () => {
        const token = useSelector(state => state.token)
        const history = useHistory();

        if(token) {
            return <WrappedComponent />
        } else {
            history.push('/')
        }
    }

}