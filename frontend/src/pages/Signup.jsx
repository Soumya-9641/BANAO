import React, { useState } from 'react';
import {Link} from 'react-router-dom'
function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(' http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input
        name="username"
        placeholder="Username"
        className="block w-full mb-4 p-2 border rounded"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
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
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Signup</button>
      <p className="text-center mt-4">
        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
    </form>
  );
}

export default Signup;