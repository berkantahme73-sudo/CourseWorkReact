
import person from "./person.png"
import mail from "./mail.png"
import pass from "./pass.png"
import { useState } from "react"
const LoginAndRegister = () => {

    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        if (action !== "Sign Up") {
            setAction("Sign Up");
            return;
        }

        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        if (response.ok) {
            alert("Потребителят е записан!");
            setName("");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div /> : <div className="input">
                    <img src={person} aria-placeholder="Name" />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>}

                <div className="input">
                    <img src={mail} aria-placeholder="Email" />
                    <input type="email" value={email} onChange={(b) => setEmail(b.target.value)} />
                </div>
                <div className="input">
                    <img src={pass} aria-placeholder="Password" />
                    <input type="password" value={password} onChange={(c) => setPassword(c.target.value)} />
                </div>
            </div>
            {action === "Sign Up" ? <div /> : <div className="forgot-password">Forgot Password <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignUp}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default LoginAndRegister;