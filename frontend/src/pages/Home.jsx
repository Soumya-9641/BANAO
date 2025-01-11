import React, { useContext } from 'react';
import { AuthContext } from '../App';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-xl">{isLoggedIn ? 'You are logged in!' : 'You are not logged in!'}</p>
    </div>
  );
}

export default Home;