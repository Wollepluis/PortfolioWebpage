import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
    to: string;
    children: string;
}

export const NavbarLink = ({ to, children }: NavbarLinkProps) => {
    return <NavLink to={to}>{children}</NavLink>;
};
