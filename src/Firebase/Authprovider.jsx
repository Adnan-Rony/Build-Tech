import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";





export const AuthContext = createContext(null)



const Authprovider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loading,setloading]=useState(true);

    const CreateUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password)
    }






    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logout = () => {
        return signOut(auth)
    }

    //google section

    const googleprovider = new GoogleAuthProvider();

    //google login  

    const googleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth state changed", currentUser);

            setuser(currentUser)
          setloading(false)
            
        })
        return () => {
            unsubscribe();
        }
    }, [])




    const AuthInfo = {CreateUser,loading,signIn,logout,user,googleLogin}

    return (
        <AuthContext.Provider value={AuthInfo}>
        {children} 
     </AuthContext.Provider>
    );
};

export default Authprovider;