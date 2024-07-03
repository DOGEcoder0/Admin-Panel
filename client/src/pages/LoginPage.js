import React from 'react';
import Login from '../components/Auth/Login';

const LoginPage = () => {
    return (
        <div style={{backgroundColor: '#F5EEF8', display:'flex',alignItems:'center',margin:'200px 500px', flexDirection:'column', border:'2px solid black'}}>
            <h1 style={{margin:'20px 10px 20px 10px'}}>Login</h1>
            <div><Login/></div>
        </div>
    );
};

export default LoginPage;
