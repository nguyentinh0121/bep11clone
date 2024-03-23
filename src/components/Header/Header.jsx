import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return (
        <div className="headerContainer">
            <Link to="/" className="headerLink">
                <div className="headerLogo">
                    <p>Logo</p>
                </div>
            </Link>
            <ul className="headerList">
                <Link className="headerLink" to="/">
                    Home
                </Link>
                <Link className="headerLink" to="/about">
                    About
                </Link>

                <Link className="headerLink" to="/contact">
                    Contact
                </Link>
            </ul>
        </div>
    );
}
