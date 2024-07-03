import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/actions/userActions';
import './AddUser.css'
const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser({ firstName, lastName, email, password, role }));
    };

    return (
        <div>
            <h2 style={{marginLeft:'80px'}}>Add User</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>First Name :</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name :</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Role : </label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button className='button' type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
