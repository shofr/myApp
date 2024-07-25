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
          <Register />
          <Login />
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
    // <div>
    //   <h1>Register</h1>
    //   <Register />
    //   <h1>Login</h1>
    //   <Login />
    // </div>
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
