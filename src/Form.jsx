import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' ;
import styles from './Register.module.css';
const UpdateUsers = () => {
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [Like,setLike]=useState("");
    const [contact,setContact]=useState("");
    const navigate = useNavigate();
    //const petId = location.state.petId; 
    const sub = (e) =>
    {
        e.preventDefault();
        axios.post("https://mern-backend-debm.onrender.com/final",{name,email,contact,Like})
        .then(result=>{
            console.log(result);
            window.alert("Thanks for Adopting pet\nWe will contact you soon");
            navigate("/Pets")
        })
        .catch((error)=>
        { 
            window.alert("Something went wrong");
            navigate("/Pets")
        });
    }
    // const sub = async (e) => {
    //     e.preventDefault();

    //     if (petId) {
    //         try {
    //             const response = await axios.delete(`http://localhost:3005/pets/${petId}`);
    //             if (response.status === 200) {
    //                 alert('Thanks for Adopting Pet');
    //                 navigate('/Pets');
    //             } else {
    //                 alert('Failed to delete pet');
    //             }
    //         } catch (error) {
    //             console.error('Error deleting pet:', error);
    //             alert('Error deleting pet');
    //         }
    //     } else {
    //         alert('No petId found');
    //     }
    // };


    return(
        <div>
            <div  className={styles.container}>
            <h1>Pet Adoption Form</h1>
            <form onSubmit={sub}>
            <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"  value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="Contact">Contact</label>
                <input type='number'  name="Contact" value={contact} onChange={(e)=>setContact(e.target.value)}  required/>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="Like">Why would you like to adopt this pet</label>
                <textarea type="Like" name="Like" value={Like} onChange={(e)=>setLike(e.target.value)}  required/>
            </div>
            <button type="submit">I like to Adopt this Pet</button>
        </form>
            </div>
        </div>
    )
}

export default UpdateUsers;