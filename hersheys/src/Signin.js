import React, { useState } from 'react';
import { register } from './Auth';


const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!username || !password) {
            setError("Both fields are required.");
            setSuccess("");
            return;
        }

        
        try {
            await register(username, password);
            setSuccess('Registration successful! You can now log in.');
            setError("");
            setUsername("");
            setPassword("");
        } catch (err) {
            console.error('Registration error:', err);
            setError('Registration failed. Please try again.');
            setSuccess("");
        } 
    };

    return (
        <div className='card si'>
            <h5>Registration form</h5>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <br />
                <button className="btn btn-dark" type="submit" >submit
                    
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </div>
    );
};

export default Signin;