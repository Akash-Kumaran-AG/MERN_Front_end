import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' ;
import styles from './Register.module.css';
//import './Create.css';
import './Register.module.css';

const UpdateUsers = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const submit = (e) =>
    {
        e.preventDefault();
        setErrorMessage('');
        axios.post("https://mern-backend-debm.onrender.com/fetch",{email,password})
        .then(result=>{
          console.log(result);
          if(result.status === 200)
          {
            navigate("/Pets");
          }
        })
        
        .catch(error => {
          setEmail('');
          setPassword('');
            if (error.response && error.response.status === 401) {
              window.alert("Incorrect email or password"); // Set error message
            } else {
              window.alert("Failed to log in. Please try again."); // General error message
            }
          });
    }
  return (
    //<div style={{backgroundImage : 'url("data:image/jpeg;base64,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")'}}>
      <div className={styles.back}>
    <div className={styles.container}>
      <h2>Find Your New Friend Here</h2>
        <h2>Login</h2>
        <form onSubmit={submit}>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/">Register here</a></p>
    </div>
</div>      
  )
}

export default UpdateUsers;
