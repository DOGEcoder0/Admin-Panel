import { getUsers, addUser, updateUser, deleteUser } from '../../services/userService';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const fetchUsers = () => async (dispatch) => {
    const data = await getUsers();
    dispatch({
        type: GET_USERS,
        payload: data,
    });
};

export const createUser = (userData) => async (dispatch) => {
    const data = await addUser(userData);
    dispatch({
        type: ADD_USER,
        payload: data,
    });
};

export const editUser = (id, userData) => async (dispatch) => {
    const data = await updateUser(id, userData);
    dispatch({
        type: UPDATE_USER,
        payload: data,
    });
};

export const removeUser = (id) => async (dispatch) => {
    await deleteUser(id);
    dispatch({
        type: DELETE_USER,
        payload: id,
    });
};
