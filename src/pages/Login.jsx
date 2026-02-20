import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import Input from "../components/ui/Input";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError("Please enter both email and password.");
            return;
        }

        // Placeholder for real authentication.
        // For now, simply clear error state and navigate to the dashboard.
        setError("");
        navigate("/dashboard");
    }

    return (
        <div className="login-container">
            <img className="logo-img" src={Logo} alt="Skating House logo" />

            {/* Glow background image layer */}
            <div className="login-glow-bg" />

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-card">
                    <div className="login-card-inner">
                        <h1 className="login-title">Skating House CMS</h1>
                        <p className="login-subtitle">Admin Login</p>

                        <div className="login-fields">
                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && (
                            <p className="login-error" role="alert">
                                {error}
                            </p>
                        )}

                        <div className="login-btn-wrapper">
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
