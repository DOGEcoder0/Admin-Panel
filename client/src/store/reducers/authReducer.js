import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
};

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                token: payload.token,
                user: payload.user,
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};
