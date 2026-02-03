import React, { useState } from 'react';
import API from '../api/axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', role: 'admin'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/register', formData);
            alert(res.data.msg);
        } catch (err) {
            alert(err.response?.data?.msg || "Registration Failed");
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Create Admin Account</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" style={{display:'block', marginBottom:'10px', width:'100%'}} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                <input type="email" placeholder="Email" style={{display:'block', marginBottom:'10px', width:'100%'}} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                <input type="password" placeholder="Password" style={{display:'block', marginBottom:'10px', width:'100%'}} 
                    onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                <button type="submit" style={{width:'100%', padding:'10px', background:'#007bff', color:'white', border:'none'}}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;