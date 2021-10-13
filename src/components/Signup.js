import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Signup.css'
import Footer from './Footer.js'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    let history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name,email,password} = credentials;
        const url = "http://localhost:5000/api/auth/createuser";
        const response = await fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json)
        if(json.success){
            // localStorage.setItem('token',json.authToken);
            history.push('/login');
            props.showAlert("Account Created Successfully","success")
        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <>
        <div className="container-fluid main-signup">
            <div className="container-fluid">
                <div className="signup-header">
                    <h2 className="heading-signup">SIGN UP</h2>
                </div>
                <div className="signup-content mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <i class="fa fa-user-circle fa-md"></i>
                            <label htmlFor="exampleInputEmail1" className="form-label">&ensp;Name</label>
                            <input type="text" className="form-control" placeholder="Enter your full name" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                           <i class="fas fa-envelope fa-xl "></i>
                           <label htmlFor="email" className="form-label">&ensp;Email address</label>
                           <input type="email" className="form-control" placeholder="Enter your email address" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <i class="fas fa-key fa-md"></i>
                            <label htmlFor="password" className="form-label">&ensp;Password</label>
                            <input type="password" className="form-control" placeholder="Create your password" id="password" name="password" onChange={onChange} minLength={5} required/>
                        </div>
                        <div className="mb-3">
                            <i class="fas fa-lock fa-md"></i>
                            <label htmlFor="cpassword" className="form-label">&ensp;Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Re-type password" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary signup-submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <br></br> <br></br>
        <Footer />
        </>
    )
}

export default Signup
