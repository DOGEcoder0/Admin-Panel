import React from 'react';
import Register from '../components/Auth/Register';

const RegisterPage = () => {
    return (
        <div style={{backgroundColor: '#F5EEF8', display:'flex',alignItems:'center',margin:'200px 500px', flexDirection:'column', border:'2px solid black'}}>
            <Register />
        </div>
    );
};

export default RegisterPage;
