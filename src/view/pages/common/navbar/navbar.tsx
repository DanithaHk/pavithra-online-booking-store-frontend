import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../../../assets/footer-logo.png"
import {
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiMenu,
    HiX,
} from "react-icons/hi";

import "./Navbar.css";
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo-container">
                    <img
                        src={logoImage}
                        alt="BookShop Logo"
                        className="logo-img"
                    />
                    <span className="logo-text">Pavithra Books</span>
                </Link>



                {/* Desktop Menu */}
                <div className={`menu ${isOpen ? "open" : ""}`}>
                    <Link to="/" className="menu-item">
                        Home
                    </Link>
                    <Link to="/books" className="menu-item">
                        Books
                    </Link>
                    <Link to="/about" className="menu-item">
                        About
                    </Link>
                    <Link to="/contact" className="menu-item">
                        Contact
                    </Link>
                    <Link to="/admin" className="menu-item">
                        Admin
                    </Link>


                    <input
                        type="text"
                        placeholder="Search books..."
                        className="search-input"
                    />

                    <Link to="/books" className="browse-btn">
                        Browse Books
                    </Link>

                    <Link to="/cart" className="icon-link" aria-label="Cart">
                        <HiOutlineShoppingCart size={24} />
                    </Link>
                    <Link to="/login" className="icon-link" aria-label="Profile">
                        <HiOutlineUser size={24} />
                    </Link>
                </div>


                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile menu (visible when open) */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="mobile-menu-item" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/books" className="mobile-menu-item" onClick={() => setIsOpen(false)}>
                        Books
                    </Link>
                    <Link to="/about" className="mobile-menu-item" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to="/contact" className="mobile-menu-item" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>

                    <input
                        type="text"
                        placeholder="Search books..."
                        className="mobile-search-input"
                    />

                    <Link
                        to="/books"
                        className="mobile-browse-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        Browse Books
                    </Link>

                    <div className="mobile-icons">
                        <Link to="/cart" className="icon-link" aria-label="Cart" onClick={() => setIsOpen(false)}>
                            <HiOutlineShoppingCart size={24} />
                        </Link>
                        <Link to="/login" className="icon-link" aria-label="Profile" onClick={() => setIsOpen(false)}>
                            <HiOutlineUser size={24} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
