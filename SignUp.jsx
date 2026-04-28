
import person from "./person.png"
import email from "./email.png"
import password from "./password.png"
import { useState } from "react"
const LoginAndRegister = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div /> : <div className="input">
                    <img src={person} aria-placeholder="Name" />
                    <input type="text" />
                </div>}

                <div className="input">
                    <img src={email} aria-placeholder="Email" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password} aria-placeholder="Password" />
                    <input type="password" />
                </div>
            </div>
            {action=== "Sign Up"?<div/>:<div className="forgot-password">Forgot Password <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default LoginAndRegister;