import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-lg">AuthApp</Link>
      <div>
        {!isLoggedIn ? (
          <Link to="/signup" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">Signup</Link>
        ) : (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;