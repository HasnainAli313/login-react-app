import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? <LoggedIn onLogout={handleLogout} /> : <LoggedOut onLogin={handleLogin} />}
    </div>
  );
};

const LoggedIn = ({ onLogout }) => (
  <div>
    <h1>Welcome! You are logged in.</h1>
    <button onClick={onLogout}>Logout</button>
  </div>
);

const LoggedOut = ({ onLogin }) => (
  <div>
    <h1>Please log in to continue.</h1>
      <form>
      <input type="email" placeholder='Enter your email' />
      <input type="password"  placeholder='Enter your Password'/>
    </form>
    <button onClick={onLogin}>Login</button>
  </div>
);

export default App;