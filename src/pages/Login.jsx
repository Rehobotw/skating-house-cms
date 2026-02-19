import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Input from "../components/ui/Input";

export default function Login() {
    return (
        <div className="login-container">
            <img className="logo-img" src={Logo} />
            <div className="login-form">
                <div className="login-card">
                    <h1>Skating Hous CMS</h1>
                    <p>Admin Login</p>

                    <Input label="Email" />
                    <Input label="password" />

                    <NavLink to="/dashboard">
                        <button className="login-btn">Login</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
