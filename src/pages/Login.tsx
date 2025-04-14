import styles from '../styles/formStyles';
import {useState} from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../lib/firebase/firebase'
import { useNavigate } from 'react-router-dom';

const Login =() =>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setError('');
    try{
        await signInWithEmailAndPassword(auth,email,password);
        setTimeout(() =>{
        navigate('./profile');
        },1000);
    }catch (error:any){
        setError(error.message);
    }
    };

    return(
        <div >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
    
            {error && <p style={styles.error}>{error}</p>}
            <fieldset style={styles.fieldset}>
                <legend style={styles.legend}>Login</legend>
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
            <button type="submit" style={{ backgroundColor: "blue" }}>Login</button>
            </fieldset>
            </form>
            </div>
 
    );
}
export default Login;