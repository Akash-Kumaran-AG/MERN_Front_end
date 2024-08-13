import React, { useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom';
function Register() {
    //const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [petname,setPetname] = useState('');
    const [breed,setBreed] = useState('');
    const[petage,setPetage]=useState('');
    const[contact,setContact] = useState('');
    const[gender,setGender] = useState('');
    const [Imgurl,setImgurl] = useState('');
    const navigate = useNavigate();
    const convertToBase64 = (e) => {
        const file = e.target.files[0]; // Get the selected file
    
        const reader = new FileReader();
        reader.readAsDataURL(file); // Read the file as a data URL
    
        reader.onload = () => {
            setImgurl(reader.result); // Store the Base64 string in state
            console.log(reader.result); // You can log the Base64 string if needed
        };
    
        reader.onerror = (error) => {
            console.error('Error converting image to Base64:', error);
        };
    };
    
    const submit = (e) => {
        e.preventDefault();
        // Handle form submission
        axios.post("https://mern-back-end-aocr.onrender.com/createPet",{username,email,petname,petage,breed,gender,contact,Imgurl})
        .then(result=>{
            window.alert("success");
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
            <h2>Leave Your Pet for Adopt</h2>
            <form onSubmit={submit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name"  
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
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
                    <label htmlFor="petname">Pet Name</label>
                    <input 
                        type="text" 
                        name="petname"  
                        value={petname} 
                        onChange={(e) => setPetname(e.target.value)}  
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="petbreed">Pet Breed</label>
                    <input 
                        type="text" 
                        name="petbreed"  
                        value={breed} 
                        onChange={(e) => setBreed(e.target.value)}  
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="petgender">Pet Gender</label>
                    <input 
                        type="text" 
                        name="petgender"  
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)}  
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="petage">Pet Age</label>
                    <input 
                        type="number" 
                        name="petage"  
                        value={petage} 
                        onChange={(e) => setPetage(e.target.value)}  
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="contact">Contact</label>
                    <input 
                        type="number" 
                        name="contact"  
                        value={contact} 
                        onChange={(e) => setContact(e.target.value)}  
                        required
                    />
                </div>
                <div >
                    <label htmlFor="img">Image</label>
                    <input type="file" accept="image/*" onChange={convertToBase64} />
                </div>
                <button type="submit">Register</button>
            </form>
            {/* <p>Already have an account? <Link to="/login">Login here</Link></p> */}
        </div>
    );
}

export default Register;
