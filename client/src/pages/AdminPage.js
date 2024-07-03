import React from 'react';
import UserList from '../components/Admin/UserList';
import AddUser from '../components/Admin/AddUser';

const AdminPage = () => {
    return (
        <div style={{backgroundColor: '#F5EEF8', display:'flex',alignItems:'center',margin:'200px 500px', flexDirection:'column', border:'2px solid black'}}>
            <AddUser />
            <UserList />
        </div>
    );
};

export default AdminPage;
