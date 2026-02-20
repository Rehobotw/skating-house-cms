import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Input from "../components/ui/Input";

export default function Login() {
    return (
        <div className="login-container">
            <img className="logo-img" src={Logo} alt="Skating House logo" />

            <div className="login-form">
                <div className="login-card">
                    <div className="login-card-inner">
                        <h1 className="login-title">Skating House CMS</h1>
                        <p className="login-subtitle">Admin Login</p>

                        <div className="login-fields">
                            <Input label="Email" type="email" placeholder="Email" />
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>

                        <NavLink to="/dashboard" className="login-btn-wrapper">
                            <button className="login-btn">Login</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
