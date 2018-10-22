
import axios from '../../axios';
import * as actionTypes from './actionTypes';

// When the login actions will be triggered
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

// When the auth result is successfull
export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
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
    localStorage.removeItem('token');
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

export const auth = (username, password, isSignedUp) => {
    return dispatch => {
        dispatch(authStart());
        const data = {
            username: username,
            password
        };
        const headers = {
            'Content-Type':'application/json'
        };
        let url = '/login';
        axios.post(url, data, headers)
            .then(response => {
                //llamar a localStorage
                // localStorage.setItem('token', response.data.idToken);
                const token = response.headers.authorization;
                localStorage.setItem('token', token);
                dispatch(authSuccess(token));
            })
            .catch(error => {
                dispatch(authFail(error));
            });
    };
}

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