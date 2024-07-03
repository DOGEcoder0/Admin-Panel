import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        window.location.href = '/admin';
    };

    return (
        <div>
            
            <form className='form'onSubmit={handleSubmit}>
                <div >
                    <label>Email : </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div >
                    <label>Password : </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className='button' type='submit'>Login</button>
                <div className='last'>
                    <label>Not a User?</label>
                    <a className="register" href='/register' >Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
