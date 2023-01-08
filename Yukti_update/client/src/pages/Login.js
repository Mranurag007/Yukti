import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Usercontext } from "../App";

const Login = () => {
    const { state, dispatch } = useContext(Usercontext);
    const history = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const loginuser = async function (e) {
        e.preventDefault();
        const res1 = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res1.json();
        if (res1.status === 422 || !data) {
            window.alert("INVALID login");
        }
        else {
            dispatch({ type: "USER", payload: true })
            history("/");
        }
    }
    return (
        <>
            <div className="page ">
                <div className="main-box ">
                    <h1>Login</h1>
                    <input type="email" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="submit" name="signup" placeholder="SUBMIT" className="login-btn" value="log in" onClick={loginuser} />

                    <div className="new-sign">
                        <p className="text-1">Are you a new member?</p>
                        <NavLink className="signlink" to="/signup">Sign up</NavLink>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Login;