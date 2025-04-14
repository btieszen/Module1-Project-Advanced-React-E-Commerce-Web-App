import styles from '../styles/formStyles';
import {useState} from 'react';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {auth} from '../lib/firebase/firebase'
import { useNavigate } from 'react-router-dom';

const Register =() =>{
    const[email,setEmail] = useState('');
    const[displayName] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError('');
    try{
        const userCredentials =await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(userCredentials.user,{displayName:displayName});
        navigate('./profile');
    }catch (error:any){
        setError(error.message);
    }
    };

    return(
        <div >
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
    
            {error && <p style={styles.error}>{error}</p>}
            <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>Register</legend>
                <input
                style={styles.input}
                type='email'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
       
            <input
            style= {styles.input}
            type='password'
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button style={{ backgroundColor: "blue" }} type="submit">Register</button>
            </fieldset>
            </form>
            </div>
    );
}
export default Register;