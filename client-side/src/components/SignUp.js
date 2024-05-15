import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const url=process.env.REACT_APP_bUrl;
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    }, []);
    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch(`${url}/register`, {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
       
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputStBox" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="inputStBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputStBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp