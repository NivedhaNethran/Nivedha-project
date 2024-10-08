import axios from 'axios';

const API_URL = 'http://localhost:4050/';

export const register = async (username, password) => {
    try {
        await axios.post(`${API_URL}/register`, { username, password });
    } catch (error) {
        console.error('Error during registration:', error.response ? error.response.data : error.message);
        throw new Error('Registration failed');
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw new Error('Login failed');
    }
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const isLoggedIn = () => {
    const token = getToken();
    return token != null;
};

export const logout = () => {
    localStorage.removeItem('token');
};
