import Logo from "../assets/logo.jpg";
import Input from "../components/ui/Input";

export default function Login(){
    return(
        <div className="login-container">
               <img src={Logo} />
               <div className="login-card">
                    <h1>Skating Hous CMS</h1>
                    <p>Admin Login</p>

                
                    <Input label="Email"/>
                    <Input label="password"/>

                    <NavLink to="./pages/Dashboard">
                        <button className="login-btn">Login</button>
                    </NavLink>
               </div>
        </div>
    );
}