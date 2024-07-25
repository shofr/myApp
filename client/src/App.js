import React, { useState } from 'react';
import Register from './register';
import Login from './login';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    setUser(null);
    setMessage('Logged out successfully.');
  };

  return (
    <div className="container">
      <h1>Register and Login</h1>
      <div></div>
      {message && <p>{message}</p>}
      {!user ? (
        <div>
          <Register setMessage={setMessage}/>
          <Login setUser={setUser} setMessage={setMessage}/>
        </div>
      ) : (
        <div>
          <h2 className="welcome-message">Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
