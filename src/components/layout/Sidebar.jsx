import { NavLink } from "react-router-dom";

export default  function sidebar(){
    return(
        <div className="sidebar">
            <h2 className="logo">Skating House CMS</h2>
            <p>Admin Panel</p>
            <nav class="nav">
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
            <button className="logout-button">Logout</button>
        </div>
    );
}