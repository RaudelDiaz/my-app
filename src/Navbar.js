import React from 'react';
import './Navbar.css';
import logo from './Logo.png';
const Navbar = ({ setFilter }) => {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h2 className="navbar-title">Your Todo app</h2>
        <div className="navbar-buttons">
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('uncompleted')}>Incomplete</button>
          <button onClick={() => setFilter('deleted')}>Deleted</button>
          
        </div>
      </nav>
    );
  };
  
  export default Navbar;