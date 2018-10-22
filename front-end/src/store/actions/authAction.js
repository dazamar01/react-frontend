

import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

// When the login actions will be triggered
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

// When the auth result is successfull
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

// When the auth fails
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

// When the user do the log out action
export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {

}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const auth = (email, password, isSignedUp) => {
    return dispatch => {
        dispatch(authStart());
        const data = {
            email,
            password
        };
        let url = '/login';
        axios.post(url, data)
            .then(response => {
                //llamar a localStorage
                console.log('Respuesta ok', response);
            })
            .catch(error => {
                console.error('Error llamando a login', error);
            });
    };
}


export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                // dispatch(logout());
            } else {
                // const userId = localStorage.getItem('userId');
                // dispatch(authSuccess(token, userId));
                // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};