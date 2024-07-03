import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/authActions';
import './Register.css'
const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ firstName, lastName, email, password }));
        window.location.href = '/admin';
    };

    return (
        <div>
            <h2>Register</h2>
            <form className='form'onSubmit={handleSubmit}>
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
                    <label>Password : </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='button' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
