import React, {useState,useContext} from 'react';
import {context} from "../App";  
import { useNavigate } from 'react-router-dom';
const LoginSignUp = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="LoginSignUp">
        <div className="form-container">
            {
                showLogin ? <LoginForm setShowLogin={setShowLogin}/> : <SignUpForm setShowLogin={setShowLogin}/>
            }
        </div>
    </div>
  )
}

function LoginForm({setShowLogin}) {
    const navigate = useNavigate();
    const {users,setUsers,currentUser, setCurrentUser}= useContext(context);
    const [error,setError] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        setError("");
        e.preventDefault();
        try{
            let user = users.find((item) => {
                if(item.email === formData.email && item.password === formData.password){
                    return true
                }
            })
            console.log(users)
            console.log(user)
            if(user){
                setCurrentUser(user);
                navigate("/")
            }else{
                setError("incorrect email or password")
            }
        }catch(error){
            console.log(error);
        }
        return null;
    }
    return (
        <>
            <h2>Login</h2>
            {
                error && (
                    <p className="loginSignupError">Error : {error}</p>
                )
            }
            <form onSubmit={handleSubmit}>
                <input value={formData.email} onChange={(e) => setFormData(inputs => ({...inputs,email: e.target.value }))} placeholder="email" type="email" name="email" id="email" />
                <input value={formData.password} onChange={(e) => setFormData(inputs => ({...inputs,password: e.target.value }))} placeholder="password" type="password" name="password" id="password" />
                <input type="submit" name="submit" value="Login"/>
            </form>
            <p>Don't have a accout ? <span className="changeAuthForm" onClick={() => setShowLogin(false)}> SIGN UP </span> here</p>
        </>
    );
}
function SignUpForm({setShowLogin}) {
    const {setUsers,users}= useContext(context);
    const [error,setError] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(state => ([...state,formData]));
        setFormData({
            email: "",
            password: ""
        })
        return null;
    }
    return (
        <>
            <h2>Register</h2>
            {
                error && (
                    <p className="loginSignupError">Error : {error}</p>
                )
            }
            <form onSubmit={handleSubmit}>
                <input value={formData.email} onChange={(e) => setFormData(inputs => ({...inputs,email: e.target.value }))} placeholder="email" type="email" name="email" id="email" />
                <input value={formData.password} onChange={(e) => setFormData(inputs => ({...inputs,password: e.target.value }))} placeholder="password" type="password" name="password" id="password" />
                <input type="submit" name="submit" value="Register"/>
            </form>
            <p>Already have a accout ? <span className="changeAuthForm" onClick={() => setShowLogin(true)}> Login </span> here</p>
        </>

    );
}

export default LoginSignUp