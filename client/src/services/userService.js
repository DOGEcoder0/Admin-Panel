import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

const getUsers = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

const addUser = async (userData) => {
    const response = await axios.post(API_URL, userData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

const updateUser = async (id, userData) => {
    const response = await axios.put(`${API_URL}/${id}`, userData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export { getUsers, addUser, updateUser, deleteUser };
