import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/login', formData);
            // Save the user data and token so we know who is logged in
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            
            alert("Login Successful!");
            navigate('/dashboard'); // We will create this page next!
        } catch (err) {
            alert(err.response?.data?.msg || "Login Failed");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Login to ERP</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" style={{display:'block', marginBottom:'10px', width:'100%'}} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input type="password" placeholder="Password" style={{display:'block', marginBottom:'10px', width:'100%'}} 
                    onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                <button type="submit" style={{width:'100%', padding:'10px', background:'#28a745', color:'white', border:'none'}}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;