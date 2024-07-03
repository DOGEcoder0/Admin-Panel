import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUser } from '../../store/actions/userActions';

const EditUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    const user = users.find((user) => user._id === id);

    const [firstName, setFirstName] = useState(user ? user.firstName : '');
    const [lastName, setLastName] = useState(user ? user.lastName : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [role, setRole] = useState(user ? user.role : 'User');

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setRole(user.role);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser(id, { firstName, lastName, email, role }));
    };

    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default EditUser;
