import React, { useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        // Handle form submission
        axios.post("http://localhost:3001/create",{name,email,password})
        .then(result=>{
            console.log(result);
            if(result.status === 200)
            {
              navigate("/Pets");
            }
          })
          
          .catch(error => {
            
              if (error.response && error.response.status === 400) {
                window.alert("Already an User.\n Redirecting to Login");
                navigate("/login"); // Set error message
              } 
            });
    };

    return (
        <div className={styles.container}>
            <h2>Register</h2>
            <form onSubmit={submit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name"  
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"  
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}  
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}  
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Register;
