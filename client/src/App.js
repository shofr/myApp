import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', {
        name: registerName,
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      });
      setMessage('Registration successful! You can now login.');
      // Kosongkan input register setelah berhasil
      setRegisterName('');
      setRegisterEmail('');
      setRegisterUsername('');
      setRegisterPassword('');
    } catch (error) {
      setMessage('Registration failed.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: loginUsername,
        password: loginPassword,
      });
      setUser(response.data.user);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed.');
    }
  };

  const handleLogout = () => {
    setUser(null); // Menghapus informasi pengguna
    setMessage('Logged out successfully.');
    // Kosongkan input login setelah logout
    setLoginUsername('');
    setLoginPassword('');
  };

  return (
    <div className="container">
      <h1>Register and Login</h1>
      {message && <p>{message}</p>}
      {!user ? (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>

          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
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




// import logo from './logo.svg';
// import React from 'react';
// import Register from './register';
// import Login from './login';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Register</h1>
//       <Register />
//       <h1>Login</h1>
//       <Login />
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
