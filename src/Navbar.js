import React, { useState } from 'react';
import './Navbar.css';
import logo from './Logo.png';

const Navbar = ({ setFilter }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <h2 className="navbar-title">Your Todo app</h2>
            <div className="navbar-buttons">
                <button onClick={toggleMobileMenu} className="hamburger">
                    &#9776;
                </button>
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <button onClick={() => setFilter('completed')}>Completed</button>
                        <button onClick={() => setFilter('uncompleted')}>Incomplete</button>
                        <button onClick={() => setFilter('deleted')}>Deleted</button>
                    </div>
                )}
                <div className="desktop-menu">
                    <button onClick={() => setFilter('completed')}>Completed</button>
                    <button onClick={() => setFilter('uncompleted')}>Incomplete</button>
                    <button onClick={() => setFilter('deleted')}>Deleted</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
