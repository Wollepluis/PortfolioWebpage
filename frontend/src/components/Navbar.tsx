import { useState } from "react";
import { Link } from "react-router-dom";

import { NavbarLink } from "../services/NavbarLink.tsx";

import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "WhoAmI", path: "/WhoAmI" },
        { name: "Projects", path: "/Projects" },
        { name: "Blog", path: "/Blog" },
    ];

    return (
        <nav>
            <Link to="/" className="title">
                Mark Wilbrink
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavbarLink to={item.path}>{item.name}</NavbarLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
