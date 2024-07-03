import { register, login, logout } from '../../services/authService';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const registerUser = (userData) => async (dispatch) => {
    const data = await register(userData);
    dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
    });
};

export const loginUser = (userData) => async (dispatch) => {
    const data = await login(userData);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
    });
};

export const logoutUser = () => async (dispatch) => {
    await logout();
    dispatch({ type: LOGOUT });
};
