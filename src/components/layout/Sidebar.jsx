import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">Skating House CMS</h2>
            <p className="admin-label">Admin Panel</p>
            <nav className="nav">
                <NavLink to="/dashboard" className="nav-item">
                    Content Management
                </NavLink>
                <NavLink to="./services" className="nav-item">
                    Services
                </NavLink>
                <NavLink to="./pricing" className="nav-item">
                    Pricing
                </NavLink>
                <NavLink to="./contact" className="nav-item">
                    Contact
                </NavLink>
            </nav>
            <button className="logout-btn">Logout</button>
        </div>
    );
}