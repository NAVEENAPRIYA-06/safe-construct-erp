import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = localStorage.getItem('user');
        if (!loggedUser) {
            navigate('/login');
        } else {
            setUser(JSON.parse(loggedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    if (!user) return <h1>Loading...</h1>;

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Welcome, {user.name}!</h1>
                <button onClick={handleLogout} style={{ background: 'red', color: 'white', padding: '10px' }}>Logout</button>
            </div>
            <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
                <h3>Your Role: <span style={{ color: 'blue' }}>{user.role.toUpperCase()}</span></h3>
                <p>Status: Authenticated</p>
            </div>
        </div>
    );
};

export default Dashboard;