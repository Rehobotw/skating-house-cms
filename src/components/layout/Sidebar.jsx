import { NavLink } from "react-router-dom";
import logo from "../../assets/logo7.png";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="" width={"50px"}/>
                <h2 className="logo">Super Skate CMS</h2>
            </div>
            <p className="admin-label">Admin Panel</p>
            <nav className="nav">
                <NavLink to="/hero" className="nav-item">
                    Hero
                </NavLink>
                 <NavLink to="/about" className="nav-item">
                    About
                </NavLink>
                 <NavLink to="/session" className="nav-item">
                    Session
                </NavLink>
                <NavLink to="/pricing" className="nav-item">
                    Pricing
                </NavLink>
                <NavLink to="/gallery" className="nav-item">
                    Gallery
                </NavLink>
                <NavLink to="/contact" className="nav-item">
                    Contact
                </NavLink>
                <NavLink to="/footer" className="nav-item">
                    Footer
                </NavLink>
            </nav>
            <NavLink to="/login" className="logout-link">
                <button className="logout-btn">Logout</button>
            </NavLink>
            
        </div>
    );
}