import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' ;
//import './Create.css';

const UpdateUsers = () => {
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const navigate = useNavigate();
    const submit = (e) =>
    {
        e.preventDefault();
        axios.post("http://localhost:7000/api/user/create",{name,userName,password,email})
        .then(result=>{
            console.log(result);
        })
        .catch((error)=>
        { 
            window.alert("Already an user redirecting to Login......");
            navigate("/login")
        });
    }
  return (
    <div>
      <div>
      <div>
    <div className="container">
        <h2>Register</h2>
        <form onSubmit={submit}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"  value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={userName} onChange={(e)=>setUserName(e.target.value)}  required/>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
            </div>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="login.html">Login here</a></p>
    </div>
</div>
      </div>
    </div>
  )
}

export default UpdateUsers;
