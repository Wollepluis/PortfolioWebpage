import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
                Website
            </Link>
            <div
                className="menu"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/WhoAmI">WhoAmI</NavLink>
                </li>
                <li>
                    <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/Blog">Blog</NavLink>
                </li>
            </ul>
        </nav>
    );
};
