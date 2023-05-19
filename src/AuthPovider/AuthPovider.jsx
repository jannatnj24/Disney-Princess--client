import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.confing';



export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthPovider = ({children}) => {
    
    const [user,setUser]=useState({});
    const [loading, setLoading] = useState(true);
console.log(user);
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}


const SignIn=(email,password)=>{
   setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

const profileUpdate=(displayName,photoURL)=>{
    return updateProfile(auth.currentUser,{displayName,photoURL})
}

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser);
     setLoading(false);

    });

    return () =>unSubscribe();
    
},[])


    const AuthInfo={

        user,
        loading,
        createUser,
        SignIn,
        logOut,
        profileUpdate
       
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthPovider;