import React, { useState, useEffect, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Footer from './Footer.js'
import './Login.css'
import noteContext from "../context/noteContext"

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();

    const context = useContext(noteContext);
    const { getAccountDetails, mihir, setMihir1, mihir1 } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/auth/login";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged In Successfully", "success");
            history.push('/home');
            getAccountDetails();
            // destructureId();
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <body>
                <div className="container-fluid main-login">
                    <div className="container-fluid">
                        <div className="login-header">
                            <h2 className="heading-login">LOGIN</h2>
                        </div>
                        <div className="login-content container-fluid">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 my-3">
                                    <i class="fas fa-envelope fa-lg "></i>
                                    <label htmlFor="email" className="form-lb">&ensp;Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email here" id="in-area" value={credentials.email} onChange={onChange}
                                        id="email" name="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-4">
                                    <i class="fas fa-key fa-lg"></i>
                                    <label htmlFor="password" className="form-lb">&ensp;Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password here" value={credentials.password} onChange={onChange}
                                        name="password" id="password" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary login-submit">Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="signup-link mt-5">
                            <p className="signup-tagline">Dont have an account? Create one!</p>
                            <div className="text-center">
                                <Link className="btn btn-primary mx-1 signup" to="/signup" role="button">Signup</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br> <br></br>
                <Footer />
            </body>

        </>

    )
}

export default Login
