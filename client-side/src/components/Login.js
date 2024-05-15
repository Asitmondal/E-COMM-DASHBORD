import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const url=process.env.REACT_APP_bUrl;
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    }, []);

    const handleLogin = async () => {
        try {
            let result = await fetch(`${url}/login`, {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!result.ok) {
                throw new Error('Network response was not ok');
            }

            result = await result.json();

            if (result.auth) {
                localStorage.setItem('user', JSON.stringify(result.user));
                localStorage.setItem('token', JSON.stringify(result.auth));
                navigate('/');
            } else {
                alert("Please enter correct details");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className='login'>
            <input type='text' className='inputStBox' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' className='inputStBox' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="appButton" type="button">Login</button>
        </div>
    );
};

export default Login;
