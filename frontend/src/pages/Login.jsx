import React, { useState, useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { AuthContext } from '../App';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true);
      alert(data.message)
      navigate('/');
    } else {
      alert(data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        name="username"
        placeholder="Username"
        className="block w-full mb-4 p-2 border rounded"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="block w-full mb-4 p-2 border rounded"
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
      <p className="text-center mt-4">
        Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Signup</Link>
      </p>
      <p className="text-center mt-2">
        <Link to="/forget-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
      </p>
    </form>
  );
}

export default Login;