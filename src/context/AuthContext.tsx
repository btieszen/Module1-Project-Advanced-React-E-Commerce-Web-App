import {createContext,useContext,useState,useEffect } from 'react';
import {onAuthStateChanged,User } from "firebase/auth";
import {auth} from '../lib/firebase/firebase';

const AuthContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
}>({
    user: null,
    setUser: () => {},    
});

export const AuthProvider = ({children}: {children: React.ReactNode }) =>{
    const [user,setUser] = useState<User | null>(null);
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if (user){
                setUser(user);
            }else{
                setUser(null);
            }
        });
        return () =>unsubscribe();
    },[]);

    return(
        <AuthContext.Provider value={{ user,setUser}}>
            {children}
            </AuthContext.Provider>
    )
    };

    export const useAuth = () => useContext(AuthContext);

    export default AuthContext;