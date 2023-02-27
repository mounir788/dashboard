import React from 'react';
import { Link } from 'react-router-dom'

export const Aside = () => {
    return (
        <aside>
            <Link to="/" className="logo">Dashboard</Link>
            <ul className="nav-links">
                <li><Link to="/hero">Hero</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/">Option 1</Link></li>
                <li><Link to="/">Option 1</Link></li>
                <li><Link to="/">Option 1</Link></li>
                <li><Link to="/">Option 1</Link></li>
            </ul>
        </aside>
    )
}
