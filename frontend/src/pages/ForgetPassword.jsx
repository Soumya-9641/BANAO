import React, { useState } from 'react';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Disable the button
    setMessage(''); 
    try {
      const response = await fetch('http://localhost:5000/api/auth/forgotPassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Success: ${data.message}`);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Re-enable the button
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Forget Password</h2>
      {message && (
        <div
          className={`mb-4 p-2 rounded ${
            message.startsWith('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        className="block w-full mb-4 p-2 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />
     <button
        type="submit"
        className={`bg-blue-600 text-white py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Send Reset Link'}
      </button>
    </form>
  );
}

export default ForgetPassword;