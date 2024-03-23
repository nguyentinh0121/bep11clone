import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <div>
                <p>Logo</p>
            </div>
            <ul className="headerList">
                <Link to="/">
                    <li className="">Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    );
}
