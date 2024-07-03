import { GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from '../actions/userActions';

const initialState = {
    users: [],
};

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
            };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user) =>
                    user._id === payload._id ? payload : user
                ),
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user._id !== payload),
            };
        default:
            return state;
    }
};
